-- Keupro 04 : lots d'évaluateurs, président du jury (évaluateur en chef), verrouillage des fiches
-- Exécuté sur le projet keupro le 03/11/2026 (migration « lots_evaluateurs »). Réexécutable.
alter table public.candidats add column if not exists evaluateur uuid references auth.users(id) on delete set null;
create index if not exists candidats_evaluateur_idx on public.candidats(evaluateur);
alter table public.sessions add column if not exists chef_id uuid references auth.users(id) on delete set null;
alter table public.sessions add column if not exists evaluation jsonb not null default '{}'::jsonb;
create index if not exists sessions_chef_idx on public.sessions(chef_id);
alter table public.membres add column if not exists nom text;

create or replace function private.is_chef(sid uuid) returns boolean
language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from public.sessions s
    join public.membres m on m.ligue_id = s.ligue_id and m.user_id = (select auth.uid())
    where s.id = sid and s.chef_id = (select auth.uid()));
$$;
revoke all on function private.is_chef(uuid) from public, anon;
grant execute on function private.is_chef(uuid) to authenticated;

-- un évaluateur ne voit et ne note que son lot ; le président du jury et l'administrateur voient tout
drop policy if exists candidats_select on public.candidats;
drop policy if exists candidats_update on public.candidats;
create policy candidats_select on public.candidats for select to authenticated using (
  (select private.is_admin(ligue_id)) or (select private.is_chef(session_id))
  or (evaluateur = (select auth.uid()) and (select private.is_member(ligue_id))));
create policy candidats_update on public.candidats for update to authenticated using (
  (select private.is_admin(ligue_id)) or (select private.is_chef(session_id))
  or (evaluateur = (select auth.uid()) and (select private.is_member(ligue_id))))
with check (
  (select private.is_admin(ligue_id)) or (select private.is_chef(session_id))
  or (evaluateur = (select auth.uid()) and (select private.is_member(ligue_id))));

create or replace function private.guard_candidat_update() returns trigger
language plpgsql set search_path = '' as $$
begin
  if (select auth.uid()) is not null and not private.is_admin(old.ligue_id) then
    if new.nom is distinct from old.nom or new.club is distinct from old.club or new.grade is distinct from old.grade
       or new.no is distinct from old.no or new.dos is distinct from old.dos
       or new.session_id is distinct from old.session_id or new.ligue_id is distinct from old.ligue_id then
      raise exception 'Modification réservée à l''administrateur de la ligue';
    end if;
    if new.evaluateur is distinct from old.evaluateur and not private.is_chef(old.session_id) then
      raise exception 'Seul le président du jury ou l''administrateur peut réaffecter un candidat';
    end if;
  end if;
  if new.evaluateur is not null and new.evaluateur is distinct from old.evaluateur
     and not exists (select 1 from public.membres m where m.ligue_id = new.ligue_id and m.user_id = new.evaluateur) then
    raise exception 'Cet évaluateur n''est pas membre de la ligue';
  end if;
  return new;
end $$;

create or replace function private.guard_session_update() returns trigger
language plpgsql set search_path = '' as $$
begin
  if (select auth.uid()) is not null and not private.is_admin(old.ligue_id) then
    if new.titre is distinct from old.titre or new.date is distinct from old.date or new.lieu is distinct from old.lieu
       or new.demo is distinct from old.demo or new.journal is distinct from old.journal or new.ligue_id is distinct from old.ligue_id
       or new.chef_id is distinct from old.chef_id then
      raise exception 'Modification réservée à l''administrateur de la ligue';
    end if;
    if (new.rapport is distinct from old.rapport or new.evaluation is distinct from old.evaluation) and not private.is_chef(old.id) then
      raise exception 'Modification réservée au président du jury';
    end if;
  end if;
  if new.chef_id is not null and new.chef_id is distinct from old.chef_id
     and not exists (select 1 from public.membres m where m.ligue_id = new.ligue_id and m.user_id = new.chef_id) then
    raise exception 'Le président du jury doit être membre de la ligue';
  end if;
  return new;
end $$;

-- réaffectation groupée (président du jury ou administrateur ; contrôlée par les règles et le déclencheur ci-dessus)
create or replace function public.affecter_evaluateurs(p_rows jsonb) returns integer
language plpgsql security invoker set search_path = '' as $$
declare n integer;
begin
  if (select auth.uid()) is null then raise exception 'Connexion requise'; end if;
  with x as (select * from jsonb_to_recordset(p_rows) as r(id uuid, evaluateur uuid)),
  u as (update public.candidats c set evaluateur = x.evaluateur from x where c.id = x.id returning 1)
  select count(*) into n from u;
  return n;
end $$;
revoke all on function public.affecter_evaluateurs(jsonb) from public, anon;
grant execute on function public.affecter_evaluateurs(jsonb) to authenticated;
