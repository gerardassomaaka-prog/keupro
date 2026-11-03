# Keupro v4 — Journal des comptes de démonstration

> **Confidentiel.** Ne déposez pas ce fichier sur l'hébergeur : il est volontairement placé hors du dossier `dist/`.
> Ces comptes ne donnent accès qu'à la ligue de démonstration (noms fictifs). Changez les mots de passe avant toute démo publique prolongée.

## Comptes

| Rôle | Nom affiché | Identifiant (e-mail) | Mot de passe | Lot (session de démo) |
|---|---|---|---|---|
| Administrateur | Administrateur de la ligue | `admin.demo@example.com` | `Keupro-Admin-2026` | voit tout, gère tout |
| **Président du jury** | K. Assi — 7e Dan | `chef.demo@example.com` | `Keupro-Chef-2026` | voit les 409 candidats, peut noter partout et réaffecter des tables |
| Évaluateur 1 | Y. Brou — 6e Dan | `evaluateur1.demo@example.com` | `Keupro-Eval1-2026` | 50 candidats : 8e Keup, tables 1 à 5 |
| Évaluateur 2 | N. Seka — 5e Dan | `evaluateur2.demo@example.com` | `Keupro-Eval2-2026` | 40 : 8e Keup, tables 6 à 9 |
| Évaluateur 3 | A. Konan — 5e Dan | `evaluateur3.demo@example.com` | `Keupro-Eval3-2026` | 47 : 8e tables 10-11, 7e tables 1-3 |
| Évaluateur 4 | M. Bamba — 4e Dan | `evaluateur4.demo@example.com` | `Keupro-Eval4-2026` | 40 : 7e Keup, tables 4 à 7 |
| Évaluateur 5 | F. Traoré — 4e Dan | `evaluateur5.demo@example.com` | `Keupro-Eval5-2026` | 54 : 7e tables 8-9, 6e tables 1-4 |
| Évaluateur 6 | S. Kouamé — 4e Dan | `evaluateur6.demo@example.com` | `Keupro-Eval6-2026` | 42 : 6e tables 5-7, 5e tables 1-2 |
| Évaluateur 7 | J. Yao — 3e Dan | `evaluateur7.demo@example.com` | `Keupro-Eval7-2026` | 47 : 5e tables 3-5, 4e tables 1-2 |
| Évaluateur 8 | E. Gnagne — 3e Dan | `evaluateur8.demo@example.com` | `Keupro-Eval8-2026` | 45 : 4e tables 3-5, 3e tables 1-2 |
| Évaluateur 9 | P. Zadi — 3e Dan | `evaluateur9.demo@example.com` | `Keupro-Eval9-2026` | 44 : 2e Keup et 1er Keup |

**Ligue de démonstration**
- Nom : Ligue de démonstration Keupro. Code d'invitation des évaluateurs : `DEMO2026`.
- Session : « Passage de grade de démonstration », 409 candidats aux noms fictifs, avec les notes réelles du passage du 27/05/2023.
- Calcul du jury : 409 ÷ 50 = 9 évaluateurs convoqués, plus le président du jury (qui ne prend pas de lot, réglable).

## État des comptes
**Actifs depuis le 03/11/2026** (scripts 02 à 06 exécutés sur le projet Supabase `keupro`).

Vérifications faites sur la vraie base :
- l'évaluateur 1 voit 50 candidats, pas les 359 autres ;
- il peut noter son lot, mais une note envoyée sur un candidat d'un autre lot est ignorée (0 ligne modifiée) ;
- il ne peut ni se réattribuer un candidat, ni modifier la répartition ;
- le président du jury voit les 409 candidats, note n'importe lequel et confie une table à un autre évaluateur ; il ne peut pas changer lui-même de président (réservé à l'administrateur) ;
- après une réaffectation, l'évaluateur concerné voit immédiatement son lot agrandi ;
- clôture : seuls le président et l'administrateur clôturent ; une fois clôturée, plus personne ne modifie ni ne supprime ; seul l'administrateur déverrouille.

**Avant une démo**, si une démo précédente a laissé la session clôturée, connectez-vous en administrateur et déverrouillez-la.

Pour recréer ces comptes sur un autre projet Supabase : exécutez 01 à 06 dans l'ordre dans **SQL Editor**. Ils peuvent être réexécutés sans doublons.

## Scénario de démo conseillé (15 minutes)
1. **Ordinateur, Administrateur** : Jury et lots. Montrez le calcul (409 ÷ 50 = 9), la bande colorée des lots et le président du jury.
2. **Téléphone, Évaluateur 1** : il ne voit que « Mon lot » (8e Keup, tables 1 à 5). Le menu ne propose ni Classement ni Statistiques. Touchez « Aperçu de mes bordereaux » pour feuilleter ses 5 bordereaux au format FITKD avant de les télécharger, puis notez un candidat.
3. **Ordinateur** : la note apparaît en direct dans la grille de l'administrateur.
4. **Ordinateur, Président du jury** (`chef.demo`) : Jury et lots, puis « Confier une table à un autre évaluateur » : donnez la table 6 du 8e Keup à Y. Brou. Sur le téléphone, l'évaluateur 1 reçoit « Répartition des lots mise à jour » et voit la table en plus.
5. **Administrateur** : décochez 4 évaluateurs puis « Répartir » : l'écran signale un **quota exceptionnel** (environ 80 candidats chacun).
6. **Président du jury** : toutes les fiches de la démo sont renseignées, donc le tableau de bord propose « Enregistrer et clôturer ». Clôturez : un bandeau bleu indique la session verrouillée, et les boutons de saisie sont désactivés pour tout le monde (vérifiez sur le téléphone de l'évaluateur 1).
7. **Président du jury** : « Demander le déverrouillage », motif « Erreur de saisie table 3 ». **Administrateur** : la demande s'affiche en haut de chaque page, puis « Déverrouiller ». Le journal (Tableau de bord) garde les trois étapes.
8. **Administrateur** : Bordereaux, « Imprimer les bordereaux » : chaque page indique l'évaluateur de la table. Puis Classement et Statistiques.

Astuce : dans la version de démonstration hors ligne (artifact), le menu « Vue : … » en haut permet de passer d'administrateur à président ou à évaluateur sans se reconnecter.
