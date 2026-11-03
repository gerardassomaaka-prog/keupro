# Keupro v4 — Rapport d'audit et corrections (03/11/2026)

## Résumé
L'audit a porté sur la base Supabase (schéma, règles d'accès, fonctions) et sur l'application (comptes, rôles, synchronisation, sécurité, déploiement). Les problèmes bloquants concernaient les **rôles** : un évaluateur pouvait faire tout ce que fait un administrateur. Ils sont corrigés dans l'application et dans la base. La partie base sera active après exécution du script `02_roles_permissions.sql`.

## Constats et corrections

| # | Constat | Gravité | Correction |
|---|---|---|---|
| 1 | Un évaluateur pouvait importer, ajouter, supprimer, déplacer ou intervertir des candidats et créer des sessions (interface **et** base). | Élevée | Base : création et suppression de candidats et de sessions réservées à l'administrateur. Un évaluateur ne peut modifier que les notes et l'absence d'un candidat, ainsi que le jury et le rapport d'une session (contrôle par déclencheurs). Interface : boutons masqués et actions bloquées avec un message clair. |
| 2 | L'enregistrement des notes d'un évaluateur aurait échoué une fois les droits restreints, car la méthode d'envoi utilisée est soumise aux droits de création. | Élevée | Nouvelle fonction `enregistrer_notes` : envoi groupé des seules notes et absences, soumis aux règles d'accès. L'application l'utilise automatiquement pour les évaluateurs. |
| 3 | Aucune gestion des rôles : impossible de nommer un autre administrateur. | Moyenne | Compte, puis Membres de la ligue : l'administrateur choisit le rôle de chaque membre (Administrateur ou Évaluateur) et peut retirer un membre. |
| 4 | Une ligue pouvait se retrouver sans administrateur (départ ou rétrogradation du dernier). | Moyenne | Déclencheur `guard_membres` : refus avec le message « La ligue doit garder au moins un administrateur ». |
| 5 | Création de compte : le lien de confirmation par e-mail renvoie vers l'adresse par défaut de Supabase (localhost), et l'envoi d'e-mails intégré est limité. | Moyenne | Réglage « Site URL » à faire sur le domaine Hostinger (voir le guide). Comptes de démonstration déjà confirmés, donc la démo n'a pas besoin d'e-mail. |
| 6 | Les couleurs de ceinture et les logos enregistrés étaient réinjectés dans la page sans contrôle. | Faible | Couleurs limitées au format `#RRGGBB` et logos limités aux images `data:image/png\|jpeg\|webp`. |
| 7 | Dépendance à trois CDN (cdnjs, jsdelivr) pour Excel, Word, PDF et Supabase. | Faible | Bibliothèques embarquées dans `assets/vendor/`, en versions figées. Seules les polices viennent encore de Google Fonts, avec une police de repli. |
| 8 | Fichier unique de 250 Ko, sans cache navigateur. | Faible | Fichiers séparés (HTML, CSS, JS, images), avec cache et compression par `.htaccess`. |
| 10 | Tous les évaluateurs voyaient et pouvaient noter tous les candidats : risque de double évaluation, et aucun moyen de désigner le président du jury. | Élevée | Lots d'évaluateurs (un évaluateur pour 50 inscrits par défaut, quota exceptionnel signalé), président du jury désigné par l'administrateur, fiches des autres lots verrouillées **dans la base** (règles d'accès) et dans l'interface. Seuls le président et l'administrateur réaffectent une table (`affecter_evaluateurs`). Script `04_lots_evaluateurs.sql`. |
| 11 | Rien n'empêchait de modifier les notes après la fin de l'évaluation, ni de garder la trace d'une correction tardive. | Élevée | Clôture de l'évaluation : quand toutes les fiches sont renseignées, le président du jury ou l'administrateur enregistre et clôture la session. Elle est alors verrouillée **dans la base** (notes, absences, candidats, répartition, jurys, rapport, suppression) ; le barème et le seuil en vigueur sont figés pour cette session. Le président du jury adresse une demande motivée ; seul l'administrateur déverrouille. Chaque étape est inscrite automatiquement au journal. Script `06_cloture_session.sql`. |
| 9 | La version publique affichait des noms réels d'enfants dans la démonstration. | Élevée (vie privée) | La démo publique utilise des noms et des clubs fictifs. Les vraies données ne sont visibles qu'après connexion, ligue par ligue. |

## Rôles après correction

| Action | Administrateur | Président du jury | Évaluateur |
|---|---|---|---|
| Créer, supprimer une session ; importer ; ajouter ou supprimer un candidat | ✔ | ✖ | ✖ |
| Changer de grade, intervertir, renuméroter, modifier un nom ou un club | ✔ | ✖ | ✖ |
| Désigner le président du jury | ✔ | ✖ | ✖ |
| Convoquer les évaluateurs, fixer le quota, répartir les lots | ✔ | ✔ | ✖ |
| Confier une table à un autre évaluateur (aide ou remplacement) | ✔ | ✔ | ✖ |
| Voir les fiches | toutes | toutes | **son lot seulement** |
| Saisir les notes, marquer absent | tous | tous | son lot |
| Jury de table, observations, rapport | ✔ | ✔ | jury de table seulement |
| Classements, statistiques, rapport FITKD | ✔ | ✔ | ✖ |
| Enregistrer et clôturer l'évaluation (toutes les fiches renseignées) | ✔ | ✔ | ✖ |
| Demander le déverrouillage d'une session clôturée | ✖ (inutile) | ✔ | ✖ |
| Déverrouiller une session clôturée | ✔ | ✖ | ✖ |
| Modifier quoi que ce soit dans une session clôturée | ✖ (déverrouiller d'abord) | ✖ | ✖ |
| Aperçu et impression des bordereaux | ✔ | ✔ | son lot (sans le rang, calculé sur tout le grade) |
| Barèmes, ceintures, logos, règles, membres et rôles | ✔ | lecture seule | ✖ |

## Vérifications réalisées
- Isolation entre ligues : testée sur la vraie base avec deux comptes fictifs (aucune donnée visible sans invitation), puis données de test supprimées.
- Parcours complets testés dans un navigateur sur la version `dist/`, avec une base simulée qui applique les mêmes règles :
  - administrateur : création de la ligue, import de la démo (409 candidats) ;
  - refus de rétrograder le seul administrateur ;
  - évaluateur : interface restreinte, note enregistrée par `enregistrer_notes`, action d'administrateur forcée puis bloquée ;
  - promotion d'un évaluateur en administrateur ;
  - impression PDF avec les bibliothèques locales ;
  - affichage mobile sans débordement.
- Lots (base réelle) : un évaluateur voit 50 candidats sur 409, note son lot mais pas celui d'un autre, ne peut pas se réattribuer de candidat ; le président voit tout, réaffecte une table et ne peut pas changer de président.
- Clôture (base réelle, dans une transaction annulée) : un évaluateur ne peut pas clôturer ; le président clôture ; ensuite ni lui, ni l'évaluateur, ni l'administrateur ne peuvent modifier une note, un candidat ou la session, ni la supprimer ; la demande de déverrouillage est enregistrée ; le président ne peut pas déverrouiller, l'administrateur oui ; une clôture avec une fiche incomplète est refusée ; le journal reçoit les trois étapes.
- Scripts SQL : syntaxe validée avec l'analyseur PostgreSQL (pglast).

## Recommandations pour la suite
1. Configurer un SMTP (adresse e-mail du domaine) avant d'inscrire de vraies ligues.
2. Passer le projet Supabase en offre payante pour un usage réel : sauvegardes quotidiennes et pas de mise en pause.
3. Activer « Leaked password protection » dans Authentication, puis Policies.
4. Le verrouillage par lots évite désormais la double évaluation. Seuls le président du jury et l'administrateur peuvent encore noter le même candidat qu'un évaluateur ; dans ce cas, la dernière saisie l'emporte.
