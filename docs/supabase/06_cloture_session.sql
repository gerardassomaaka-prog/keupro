-- Keupro 06 : enregistrement et clôture de l'évaluation, verrouillage, demande de déverrouillage
-- Règles :
--   * le président du jury ou l'administrateur clôture une session quand toutes les fiches sont renseignées
--     (chaque candidat présent a toutes ses notes, ou est marqué absent) ;
--   * une session clôturée ne peut plus être modifiée par personne : notes, absences, candidats, répartition, jury, rapport ;
--   * le président du jury peut adresser une demande de déverrouillage motivée ;
--   * seul l'administrateur déverrouille. Chaque étape est inscrite automatiquement dans le journal de la session.
-- Réexécutable.
alter table public.sessions add column if not exists cloture_at timestamptz;
alter table public.sessions add column if not exists cloture_par uuid references auth.users(id) on delete set null;
alter table public.sessions add column if not exists cloture_bareme jsonb;
alter table public.sessions add column if not exists deverrouillage jsonb;

create or replace function private.guard_session_update() returns trigger
language plpgsql set search_path = '' as $$
declare
  v_uid uuid := (select auth.uid());
  v_adm boolean; v_chef boolean; v_nom text; v_t bigint; v_x text;
  k_free constant text[] := array['deverrouillage','journal','updated_at','created_at'];
  k_unlock constant text[] := array['cloture_at','cloture_par','cloture_bareme','deverrouillage','journal','updated_at','created_at'];
begin
  if v_uid is not null then
    v_adm := private.is_admin(old.ligue_id);
    v_chef := private.is_chef(old.id);

    -- 1. clôture et verrouillage
    if old.cloture_at is not null then
      if new.cloture_at is null then
        if not v_adm then
          raise exception 'Seul l''administrateur peut déverrouiller une session clôturée';
        end if;
        if (to_jsonb(new) - k_unlock) is distinct from (to_jsonb(old) - k_unlock) then
          raise exception 'Déverrouillez la session avant de la modifier';
        end if;
        new.cloture_par := null; new.cloture_bareme := null; new.deverrouillage := null;
      else
        if (to_jsonb(new) - k_free) is distinct from (to_jsonb(old) - k_free) then
          raise exception 'Session clôturée : modification impossible. Le président du jury peut demander le déverrouillage à l''administrateur.';
        end if;
        if new.deverrouillage is distinct from old.deverrouillage then
          if not (v_adm or v_chef) then
            raise exception 'Seul le président du jury peut demander le déverrouillage';
          end if;
          if new.deverrouillage is not null then
            new.deverrouillage := jsonb_set(new.deverrouillage, '{par}', to_jsonb(v_uid::text));
          end if;
        end if;
      end if;
    elsif new.cloture_at is not null then
      if not (v_adm or v_chef) then
        raise exception 'Seul le président du jury ou l''administrateur peut clôturer l''évaluation';
      end if;
      if new.cloture_par is distinct from v_uid then
        raise exception 'Clôture : l''auteur doit être l''utilisateur connecté';
      end if;
      if new.cloture_bareme is null or jsonb_typeof(new.cloture_bareme -> 'bar') <> 'object' then
        raise exception 'Clôture : barème de référence manquant';
      end if;
      if exists (
        select 1 from public.candidats c
        where c.session_id = old.id and not c.absent
          and (coalesce(jsonb_array_length(new.cloture_bareme -> 'bar' -> c.grade), 0) = 0
               or jsonb_array_length(c.notes) < jsonb_array_length(new.cloture_bareme -> 'bar' -> c.grade)
               or exists (select 1 from jsonb_array_elements(c.notes) with ordinality e(v, i)
                          where i <= jsonb_array_length(new.cloture_bareme -> 'bar' -> c.grade)
                            and jsonb_typeof(v) <> 'number'))) then
        raise exception 'Clôture impossible : des fiches d''évaluation ne sont pas encore renseignées';
      end if;
      new.deverrouillage := null;
    else
      new.cloture_par := null; new.cloture_bareme := null;
      if new.deverrouillage is not null then new.deverrouillage := null; end if;
    end if;

    -- 2. droits par rôle (inchangés)
    if not v_adm then
      if new.titre is distinct from old.titre or new.date is distinct from old.date or new.lieu is distinct from old.lieu
         or new.demo is distinct from old.demo or new.journal is distinct from old.journal or new.ligue_id is distinct from old.ligue_id
         or new.chef_id is distinct from old.chef_id then
        raise exception 'Modification réservée à l''administrateur de la ligue';
      end if;
      if (new.rapport is distinct from old.rapport or new.evaluation is distinct from old.evaluation
          or new.cloture_at is distinct from old.cloture_at) and not v_chef then
        raise exception 'Modification réservée au président du jury';
      end if;
    end if;

    -- 3. journal automatique
    v_nom := (select coalesce(m.nom, m.email) from public.membres m where m.ligue_id = old.ligue_id and m.user_id = v_uid);
    v_t := (extract(epoch from clock_timestamp()) * 1000)::bigint;
    v_x := null;
    if old.cloture_at is null and new.cloture_at is not null then
      v_x := 'Évaluation enregistrée et clôturée par ' || coalesce(v_nom, '?');
    elsif old.cloture_at is not null and new.cloture_at is null then
      v_x := 'Session déverrouillée par ' || coalesce(v_nom, '?')
             || coalesce(' (demande : « ' || (old.deverrouillage ->> 'motif') || ' »)', '');
    elsif old.cloture_at is not null and new.deverrouillage is distinct from old.deverrouillage then
      if new.deverrouillage is not null then
        v_x := 'Demande de déverrouillage de ' || coalesce(v_nom, '?') || ' : « ' || coalesce(new.deverrouillage ->> 'motif', '') || ' »';
      else
        v_x := 'Demande de déverrouillage retirée par ' || coalesce(v_nom, '?');
      end if;
    end if;
    if v_x is not null then
      new.journal := jsonb_build_array(jsonb_build_object('t', v_t, 'x', v_x)) || coalesce(new.journal, '[]'::jsonb);
    end if;
  end if;

  if new.chef_id is not null and new.chef_id is distinct from old.chef_id
     and not exists (select 1 from public.membres m where m.ligue_id = new.ligue_id and m.user_id = new.chef_id) then
    raise exception 'Le président du jury doit être membre de la ligue';
  end if;
  return new;
end $$;

-- une session clôturée ne peut pas être supprimée
create or replace function private.guard_session_delete() returns trigger
language plpgsql set search_path = '' as $$
begin
  if (select auth.uid()) is not null and old.cloture_at is not null then
    raise exception 'Session clôturée : déverrouillez-la avant de la supprimer';
  end if;
  return old;
end $$;
drop trigger if exists sessions_guard_delete on public.sessions;
create trigger sessions_guard_delete before delete on public.sessions
  for each row execute function private.guard_session_delete();

-- aucun candidat d'une session clôturée ne peut être ajouté, modifié ou supprimé
create or replace function private.guard_candidat_cloture() returns trigger
language plpgsql set search_path = '' as $$
declare s1 uuid; s2 uuid;
begin
  if (select auth.uid()) is null then
    if tg_op = 'DELETE' then return old; end if;
    return new;
  end if;
  if tg_op in ('UPDATE', 'DELETE') then s1 := old.session_id; end if;
  if tg_op in ('UPDATE', 'INSERT') then s2 := new.session_id; end if;
  if exists (select 1 from public.sessions s where s.cloture_at is not null and (s.id = s1 or s.id = s2)) then
    raise exception 'Session clôturée : modification impossible. Le président du jury peut demander le déverrouillage à l''administrateur.';
  end if;
  if tg_op = 'DELETE' then return old; end if;
  return new;
end $$;
drop trigger if exists candidats_guard_cloture on public.candidats;
create trigger candidats_guard_cloture before insert or update or delete on public.candidats
  for each row execute function private.guard_candidat_cloture();
