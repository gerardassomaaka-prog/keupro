-- Keupro 05 : jury de démonstration (1 président + 9 évaluateurs) et répartition des 409 candidats
-- À exécuter après 03_comptes_demo.sql et 04_lots_evaluateurs.sql. Réexécutable (la répartition est refaite).
do $$
declare
  v_lig uuid := 'b0000000-0000-4000-8000-000000000001';
  v_ses uuid := 'c0000000-0000-4000-8000-000000000001';
  v_chef uuid := 'a0000000-0000-4000-8000-000000000010';
  r record;
  v_conv uuid[];
begin
  for r in select * from (values
      ('a0000000-0000-4000-8000-000000000010'::uuid, 'chef.demo@example.com',        'Keupro-Chef-2026',  'K. Assi — 7e Dan'),
      ('a0000000-0000-4000-8000-000000000002'::uuid, 'evaluateur1.demo@example.com', 'Keupro-Eval1-2026', 'Y. Brou — 6e Dan'),
      ('a0000000-0000-4000-8000-000000000003'::uuid, 'evaluateur2.demo@example.com', 'Keupro-Eval2-2026', 'N. Seka — 5e Dan'),
      ('a0000000-0000-4000-8000-000000000004'::uuid, 'evaluateur3.demo@example.com', 'Keupro-Eval3-2026', 'A. Konan — 5e Dan'),
      ('a0000000-0000-4000-8000-000000000005'::uuid, 'evaluateur4.demo@example.com', 'Keupro-Eval4-2026', 'M. Bamba — 4e Dan'),
      ('a0000000-0000-4000-8000-000000000006'::uuid, 'evaluateur5.demo@example.com', 'Keupro-Eval5-2026', 'F. Traoré — 4e Dan'),
      ('a0000000-0000-4000-8000-000000000007'::uuid, 'evaluateur6.demo@example.com', 'Keupro-Eval6-2026', 'S. Kouamé — 4e Dan'),
      ('a0000000-0000-4000-8000-000000000008'::uuid, 'evaluateur7.demo@example.com', 'Keupro-Eval7-2026', 'J. Yao — 3e Dan'),
      ('a0000000-0000-4000-8000-000000000009'::uuid, 'evaluateur8.demo@example.com', 'Keupro-Eval8-2026', 'E. Gnagne — 3e Dan'),
      ('a0000000-0000-4000-8000-00000000000a'::uuid, 'evaluateur9.demo@example.com', 'Keupro-Eval9-2026', 'P. Zadi — 3e Dan')) as t(id, email, pw, nom)
  loop
    insert into auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at,
      raw_app_meta_data, raw_user_meta_data, created_at, updated_at,
      confirmation_token, recovery_token, email_change_token_new, email_change)
    values ('00000000-0000-0000-0000-000000000000', r.id, 'authenticated', 'authenticated', r.email,
      extensions.crypt(r.pw, extensions.gen_salt('bf')), now(),
      '{"provider":"email","providers":["email"]}', '{}', now(), now(), '', '', '', '')
    on conflict (id) do nothing;
    insert into auth.identities (provider_id, user_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
    select r.id::text, r.id, jsonb_build_object('sub', r.id::text, 'email', r.email, 'email_verified', true), 'email', now(), now(), now()
    where not exists (select 1 from auth.identities i where i.user_id = r.id and i.provider = 'email');
    insert into public.membres (ligue_id, user_id, role, email, nom) values (v_lig, r.id, 'evaluateur', r.email, r.nom)
    on conflict (ligue_id, user_id) do update set nom = excluded.nom;
  end loop;
  update public.membres set nom = 'Administrateur de la ligue' where ligue_id = v_lig and user_id = 'a0000000-0000-4000-8000-000000000001';

  select array_agg(id order by id) into v_conv from (values
    ('a0000000-0000-4000-8000-000000000002'::uuid),('a0000000-0000-4000-8000-000000000003'),('a0000000-0000-4000-8000-000000000004'),
    ('a0000000-0000-4000-8000-000000000005'),('a0000000-0000-4000-8000-000000000006'),('a0000000-0000-4000-8000-000000000007'),
    ('a0000000-0000-4000-8000-000000000008'),('a0000000-0000-4000-8000-000000000009'),('a0000000-0000-4000-8000-00000000000a')) v(id);

  update public.sessions set chef_id = v_chef,
    evaluation = jsonb_build_object('quota', 50, 'conv', to_jsonb(v_conv), 'chefLot', false, 'v', 1)
  where id = v_ses;

  -- répartition par tables entières de 10, grades 8e → 1er, en lots contigus équilibrés (même règle que l'application)
  with t as (
    select grade, (coalesce(no,1) - 1) / 10 as k, count(*) as n
    from public.candidats where session_id = v_ses group by grade, (coalesce(no,1) - 1) / 10),
  o as (select grade, k, n, sum(n) over (order by grade desc, k) - n as avant, sum(n) over () as total from t),
  a as (select grade, k, least(8, floor((avant + n / 2.0) * 9 / total)::int) as i from o)
  update public.candidats c set evaluateur = v_conv[a.i + 1]
  from a where c.session_id = v_ses and c.grade = a.grade and (coalesce(c.no,1) - 1) / 10 = a.k;
end $$;
