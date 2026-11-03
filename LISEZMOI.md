# Keupro v4 — paquet de mise en ligne

Nouveau dans la v4 : grille tarifaire révisée (Ligue Essentiel 15 000 FCFA/mois, Ligue Pro 30 000 FCFA/mois, Fédération sur devis) et aperçu des bordereaux avant impression, y compris pour chaque évaluateur sur son propre lot.

Déjà dans la v3 : enregistrement et clôture de l'évaluation par le président du jury ou l'administrateur, verrouillage complet de la session, demande de déverrouillage motivée, déverrouillage réservé à l'administrateur, mention « clôturée » sur les PDF.

Déjà dans la v2 : lots d'évaluateurs (un pour 50 inscrits, quota exceptionnel signalé), président du jury qui supervise tout et réaffecte des tables, fiches des autres lots verrouillées, page « Jury et lots », typographie revue.


- `dist/` : le site complet à déposer chez l'hébergeur (Hostinger : contenu de `dist/` dans `public_html`).
- `dist.zip` : le même contenu, prêt à téléverser puis « Extraire » dans `public_html`.
- `docs/DEPLOIEMENT_HOSTINGER.md` : la marche à suivre.
- `docs/JOURNAL_COMPTES_DEMO.md` : identifiants de démonstration (confidentiel, ne pas mettre en ligne).
- `docs/AUDIT_KEUPRO.md` : audit et corrections.
- `docs/supabase/` : scripts de la base (01 à 06 déjà appliqués au projet `keupro` ; à rejouer seulement pour un nouveau projet).
