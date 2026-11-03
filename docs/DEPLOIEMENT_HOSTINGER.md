# Keupro v4 — Mise en ligne sur Hostinger (ou tout hébergeur web)

Le dossier `dist/` est un site statique complet : il n'y a ni build, ni Node.js, ni base MySQL à préparer. Les données sont hébergées chez Supabase.

## 1. Déposer les fichiers
1. Ouvrez hPanel, puis **Sites web**, choisissez votre domaine, puis **Gestionnaire de fichiers**, et ouvrez le dossier `public_html`.
2. Videz `public_html` s'il contient la page par défaut de Hostinger (`default.php`, `index.php`).
3. Téléversez **le contenu** du dossier `dist/`, pas le dossier lui-même. Le plus simple : téléversez `dist.zip`, puis faites un clic droit et choisissez « Extraire ». Vérifiez ensuite que `index.html` se trouve directement dans `public_html`.
4. Vérifiez que le fichier caché **`.htaccess`** est bien présent. Dans le Gestionnaire de fichiers : Paramètres, puis « Afficher les fichiers cachés ».

Arborescence attendue dans `public_html` :
```
.htaccess
index.html
manifest.webmanifest
robots.txt
assets/css/keupro.css
assets/js/config.js        ← connexion Supabase (URL + clé publique)
assets/js/keupro.js        ← application
assets/img/keupro-hero.webp (+ .jpg de secours) ← photo de la page d'accueil
assets/img/icons/          ← icônes (écran d'accueil du téléphone)
assets/vendor/             ← bibliothèques Excel, Word, PDF et Supabase (aucun CDN requis)
```

## 2. Activer HTTPS
Dans hPanel, ouvrez **Sécurité**, puis **SSL**, et installez le certificat gratuit. Le fichier `.htaccess` redirige ensuite automatiquement vers https. Le HTTPS est obligatoire pour la connexion et pour l'installation sur téléphone.

## 3. Régler Supabase (une seule fois)
Dans le projet Supabase `keupro` :
1. **Scripts de la base** : 01 à 06 déjà exécutés sur le projet `keupro` le 03/11/2026, rien à faire. Pour un nouveau projet : exécutez-les dans l'ordre dans SQL Editor (03 et 05 seulement si vous voulez la démo).
2. Ouvrez **Authentication**, puis **URL Configuration** :
   - Site URL : `https://votre-domaine.com`
   - Redirect URLs : ajoutez `https://votre-domaine.com/**`

   Sans ce réglage, les liens de confirmation et de mot de passe oublié envoyés par e-mail mènent à une page d'erreur.
3. Les e-mails : le service intégré de Supabase n'envoie que quelques e-mails par heure. Pour une démo, ce n'est pas utile, car les comptes de démonstration sont déjà confirmés. Pour une vraie ligue, configurez un SMTP dans **Authentication → Emails → SMTP Settings** (vous pouvez utiliser l'adresse e-mail Hostinger du domaine). Une autre solution est de désactiver « Confirm email » dans **Authentication → Sign In / Providers → Email**.

## 4. Tester
Ouvrez `https://votre-domaine.com` sur le téléphone, puis Se connecter, avec les comptes du fichier `JOURNAL_COMPTES_DEMO.md`. Pour installer l'application sur le téléphone : menu du navigateur, puis « Ajouter à l'écran d'accueil ».

## 5. Organiser le jury d'une vraie session
1. Chaque évaluateur crée son compte puis rejoint la ligue avec le code d'invitation.
2. L'administrateur règle son nom affiché dans Compte (ex. « B. Kouassi — 4e Dan »).
3. Jury et lots : désigner le président du jury, cocher les évaluateurs convoqués, puis « Répartir ». L'application indique combien d'évaluateurs il faut (un pour 50 inscrits, modifiable) et signale un quota exceptionnel s'il en manque.

4. Quand toutes les fiches sont renseignées (notées ou absent), le bouton « Enregistrer et clôturer » apparaît sur le tableau de bord et sur Jury et lots. Après clôture, la session est verrouillée. Pour corriger : le président du jury clique « Demander le déverrouillage » en indiquant le motif ; l'administrateur voit la demande en haut de chaque page et choisit « Déverrouiller » ou « Refuser la demande ». Après correction, on clôture à nouveau.

## 6. Mettre à jour plus tard
Remplacez les fichiers dans `public_html` par ceux d'un nouveau `dist/`. Les données ne sont pas touchées, puisqu'elles sont chez Supabase. Pour brancher un autre projet Supabase, il suffit de modifier `assets/js/config.js`.

## Points d'attention
- **Projet Supabase gratuit** : il est mis en pause après environ une semaine sans activité. Pensez à le relancer depuis le tableau de bord avant une démo, ou passez à l'offre payante pour un usage réel.
- **Données personnelles** : les candidats sont majoritairement mineurs. Faites valider par la ligue l'information des parents et la conformité à la loi ivoirienne sur la protection des données personnelles (ARTCI). La photo de la page d'accueil nécessite l'accord écrit de ses représentants légaux.
