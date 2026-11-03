-- Keupro 02 : rôles et permissions (administrateur / évaluateur)
-- Administrateur : sessions, inscriptions, corrections de grade, barèmes, membres.
-- Évaluateur : notes, absences, jury et rapport uniquement.

drop policy if exists candidats_insert on public.candidats;
drop policy if exists candidats_delete on public.candidats;
create policy candidats_insert on public.candidats for insert to authenticated with check ((select private.is_admin(ligue_id)));
create policy candidats_delete on public.candidats for delete to authenticated using ((select private.is_admin(ligue_id)));

drop policy if exists sessions_insert on public.sessions;
create policy sessions_insert on public.sessions for insert to authenticated with check ((select private.is_admin(ligue_id)));

create or replace function private.guard_candidat_update() returns trigger
language plpgsql set search_path = '' as $$
begin
  if (select auth.uid()) is not null and not private.is_admin(old.ligue_id) then
    if new.nom is distinct from old.nom or new.club is distinct from old.club or new.grade is distinct from old.grade
       or new.no is distinct from old.no or new.dos is distinct from old.dos
       or new.session_id is distinct from old.session_id or new.ligue_id is distinct from old.ligue_id then
      raise exception 'Modification réservée à l''administrateur de la ligue';
    end if;
  end if;
  return new;
end $$;
drop trigger if exists candidats_guard on public.candidats;
create trigger candidats_guard before update on public.candidats for each row execute function private.guard_candidat_update();

create or replace function private.guard_session_update() returns trigger
language plpgsql set search_path = '' as $$
begin
  if (select auth.uid()) is not null and not private.is_admin(old.ligue_id) then
    if new.titre is distinct from old.titre or new.date is distinct from old.date or new.lieu is distinct from old.lieu
       or new.demo is distinct from old.demo or new.journal is distinct from old.journal or new.ligue_id is distinct from old.ligue_id then
      raise exception 'Modification réservée à l''administrateur de la ligue';
    end if;
  end if;
  return new;
end $$;
drop trigger if exists sessions_guard on public.sessions;
create trigger sessions_guard before update on public.sessions for each row execute function private.guard_session_update();

create or replace function private.guard_membres() returns trigger
language plpgsql security definer set search_path = '' as $$
declare other_admins int;
begin
  if tg_op = 'UPDATE' and (new.user_id is distinct from old.user_id or new.ligue_id is distinct from old.ligue_id) then
    raise exception 'Seul le rôle d''un membre peut être modifié';
  end if;
  if old.role = 'admin' and (tg_op = 'DELETE' or new.role <> 'admin') then
    if tg_op = 'DELETE' and (not exists (select 1 from public.ligues l where l.id = old.ligue_id)
                             or not exists (select 1 from auth.users u where u.id = old.user_id)) then
      return old;
    end if;
    select count(*) into other_admins from public.membres m
      where m.ligue_id = old.ligue_id and m.role = 'admin' and m.user_id <> old.user_id;
    if other_admins = 0 then
      raise exception 'La ligue doit garder au moins un administrateur';
    end if;
  end if;
  if tg_op = 'DELETE' then return old; end if;
  return new;
end $$;
revoke all on function private.guard_membres() from public, anon, authenticated;
drop trigger if exists membres_guard on public.membres;
create trigger membres_guard before update or delete on public.membres for each row execute function private.guard_membres();

create or replace function public.enregistrer_notes(p_rows jsonb) returns integer
language plpgsql security invoker set search_path = '' as $$
declare n integer;
begin
  if (select auth.uid()) is null then raise exception 'Connexion requise'; end if;
  with x as (
    select * from jsonb_to_recordset(p_rows) as r(id uuid, notes jsonb, absent boolean)
  ), u as (
    update public.candidats c set notes = coalesce(x.notes, '[]'::jsonb), absent = coalesce(x.absent, false)
    from x where c.id = x.id
    returning 1
  ) select count(*) into n from u;
  return n;
end $$;
revoke all on function public.enregistrer_notes(jsonb) from public, anon;
grant execute on function public.enregistrer_notes(jsonb) to authenticated;
