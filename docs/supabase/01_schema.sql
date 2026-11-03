-- Keupro : schéma de la base Supabase (appliqué au projet « keupro » le 02/11/2026)
-- Tables : ligues, membres, sessions, candidats.
-- Sécurité (RLS) : chaque utilisateur ne voit que les ligues dont il est membre ;
-- seuls les administrateurs modifient la ligue et suppriment des sessions.

create schema if not exists private;

create table public.ligues (
  id uuid primary key default gen_random_uuid(),
  nom text not null check (char_length(nom) between 2 and 120),
  federation text not null default 'Fédération Ivoirienne de Taekwondo',
  code_invitation text not null unique default upper(substr(md5(gen_random_uuid()::text), 1, 8)),
  settings jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index ligues_created_by_idx on public.ligues(created_by);

create table public.membres (
  ligue_id uuid not null references public.ligues(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null default 'evaluateur' check (role in ('admin','evaluateur')),
  email text,
  created_at timestamptz not null default now(),
  primary key (ligue_id, user_id)
);
create index membres_user_idx on public.membres(user_id);

create table public.sessions (
  id uuid primary key default gen_random_uuid(),
  ligue_id uuid not null references public.ligues(id) on delete cascade,
  titre text not null,
  date date,
  lieu text,
  demo boolean not null default false,
  jurys jsonb not null default '{}'::jsonb,
  rapport jsonb not null default '{}'::jsonb,
  journal jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index sessions_ligue_idx on public.sessions(ligue_id);

create table public.candidats (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.sessions(id) on delete cascade,
  ligue_id uuid not null references public.ligues(id) on delete cascade,
  nom text not null,
  club text not null default '',
  grade text not null check (grade in ('1','2','3','4','5','6','7','8')),
  no integer,
  dos smallint not null default 7,
  absent boolean not null default false,
  notes jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);
create index candidats_session_idx on public.candidats(session_id);
create index candidats_ligue_idx on public.candidats(ligue_id);

create or replace function private.touch_updated_at() returns trigger
language plpgsql set search_path = '' as $$
begin new.updated_at = now(); return new; end $$;
create trigger ligues_touch before update on public.ligues for each row execute function private.touch_updated_at();
create trigger sessions_touch before update on public.sessions for each row execute function private.touch_updated_at();
create trigger candidats_touch before update on public.candidats for each row execute function private.touch_updated_at();

create or replace function private.check_candidat_ligue() returns trigger
language plpgsql set search_path = '' as $$
begin
  if new.ligue_id is distinct from (select s.ligue_id from public.sessions s where s.id = new.session_id) then
    raise exception 'ligue_id ne correspond pas à la session';
  end if;
  return new;
end $$;
create trigger candidats_ligue_check before insert or update on public.candidats for each row execute function private.check_candidat_ligue();

create or replace function private.is_member(lid uuid) returns boolean
language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.membres m where m.ligue_id = lid and m.user_id = (select auth.uid()));
$$;
create or replace function private.is_admin(lid uuid) returns boolean
language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.membres m where m.ligue_id = lid and m.user_id = (select auth.uid()) and m.role = 'admin');
$$;
revoke all on function private.is_member(uuid), private.is_admin(uuid) from public, anon;
grant usage on schema private to authenticated;
grant execute on function private.is_member(uuid), private.is_admin(uuid) to authenticated;

alter table public.ligues enable row level security;
alter table public.membres enable row level security;
alter table public.sessions enable row level security;
alter table public.candidats enable row level security;

create policy ligues_select on public.ligues for select to authenticated using ((select private.is_member(id)));
create policy ligues_update on public.ligues for update to authenticated using ((select private.is_admin(id))) with check ((select private.is_admin(id)));

create policy membres_select on public.membres for select to authenticated using ((select private.is_member(ligue_id)));
create policy membres_delete on public.membres for delete to authenticated using ((select private.is_admin(ligue_id)) or user_id = (select auth.uid()));
create policy membres_update on public.membres for update to authenticated using ((select private.is_admin(ligue_id))) with check ((select private.is_admin(ligue_id)));

create policy sessions_select on public.sessions for select to authenticated using ((select private.is_member(ligue_id)));
create policy sessions_insert on public.sessions for insert to authenticated with check ((select private.is_member(ligue_id)));
create policy sessions_update on public.sessions for update to authenticated using ((select private.is_member(ligue_id))) with check ((select private.is_member(ligue_id)));
create policy sessions_delete on public.sessions for delete to authenticated using ((select private.is_admin(ligue_id)));

create policy candidats_select on public.candidats for select to authenticated using ((select private.is_member(ligue_id)));
create policy candidats_insert on public.candidats for insert to authenticated with check ((select private.is_member(ligue_id)));
create policy candidats_update on public.candidats for update to authenticated using ((select private.is_member(ligue_id))) with check ((select private.is_member(ligue_id)));
create policy candidats_delete on public.candidats for delete to authenticated using ((select private.is_member(ligue_id)));

revoke all on public.ligues, public.membres, public.sessions, public.candidats from anon;
grant select, update on public.ligues to authenticated;
grant select, update, delete on public.membres to authenticated;
grant select, insert, update, delete on public.sessions, public.candidats to authenticated;

create or replace function public.creer_ligue(p_nom text, p_federation text default null) returns uuid
language plpgsql security definer set search_path = '' as $$
declare uid uuid := (select auth.uid()); lid uuid;
begin
  if uid is null then raise exception 'Connexion requise'; end if;
  insert into public.ligues(nom, federation, created_by)
  values (trim(p_nom), coalesce(nullif(trim(p_federation),''), 'Fédération Ivoirienne de Taekwondo'), uid)
  returning id into lid;
  insert into public.membres(ligue_id, user_id, role, email)
  values (lid, uid, 'admin', (select u.email from auth.users u where u.id = uid));
  return lid;
end $$;

create or replace function public.rejoindre_ligue(p_code text) returns uuid
language plpgsql security definer set search_path = '' as $$
declare uid uuid := (select auth.uid()); lid uuid;
begin
  if uid is null then raise exception 'Connexion requise'; end if;
  select l.id into lid from public.ligues l where l.code_invitation = upper(trim(p_code));
  if lid is null then raise exception 'Code d''invitation inconnu'; end if;
  insert into public.membres(ligue_id, user_id, role, email)
  values (lid, uid, 'evaluateur', (select u.email from auth.users u where u.id = uid))
  on conflict (ligue_id, user_id) do nothing;
  return lid;
end $$;

create or replace function public.nouveau_code_invitation(p_ligue uuid) returns text
language plpgsql security definer set search_path = '' as $$
declare c text;
begin
  if not private.is_admin(p_ligue) then raise exception 'Réservé aux administrateurs de la ligue'; end if;
  c := upper(substr(md5(gen_random_uuid()::text), 1, 8));
  update public.ligues set code_invitation = c where id = p_ligue;
  return c;
end $$;

revoke all on function public.creer_ligue(text, text), public.rejoindre_ligue(text), public.nouveau_code_invitation(uuid) from public, anon;
grant execute on function public.creer_ligue(text, text), public.rejoindre_ligue(text), public.nouveau_code_invitation(uuid) to authenticated;

alter publication supabase_realtime add table public.candidats, public.sessions;
