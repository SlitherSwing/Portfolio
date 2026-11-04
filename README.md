# Portfolio de Kevin Mascaro

## Organisation

- `public/index.php` : accueil, qui assemble la présentation et les deux inclusions.
- `public/includes/carousel.php` : carrousel et fenêtre de détails des projets.
- `public/includes/timeline.php` : timeline des compétences.
- `public/includes/.htaccess` : interdit les accès directs aux fragments sur Apache.
- `public/contact.html` : contact.
- `public/assets/` : CSS compilé, JavaScript, images, icônes et CV utilisés.
- `src/styles/input.css` : source Tailwind.
- `scripts/access.mjs` : génère la liste des fichiers autorisés sur Apache.
- `.git`, les fichiers npm et les sources restent sur le poste de travail.

## Modifier et vérifier

PHP doit être installé et accessible avec la commande `php`.
Installer avec `npm ci`, puis lancer `npm run build` après une modification.
`npm run preview` lance le serveur PHP local à http://127.0.0.1:8080.
Ce serveur exécute les inclusions, mais ne teste pas les règles Apache `.htaccess`.
Pour modifier les sections, éditer directement les deux fichiers de `public/includes/`.
Les descriptions des projets restent dans `public/assets/js/main.js`.

## Publier avec FileZilla

Envoyer **uniquement le contenu de public/** dans le dossier distant du site,
avec son fichier caché `.htaccess` et le dossier `includes/` complet (y compris son `.htaccess`). Ne pas envoyer le dossier Portfolio entier.
L'accueil doit être à `/index.php`, le contact à `/contact.html`, les ressources dans `/assets/`.
L'ancien lien `/index.html` est redirigé vers `/index.php` par Apache.
Sur Alwaysdata, PHP doit être activé et le site doit utiliser Apache 2.4 avec mod_rewrite et autoriser `.htaccess`.
Le fichier généré interdit les URL hors de la liste du site et l'affichage des dossiers.
Il doit être envoyé à chaque ajout ou suppression de fichier public (`npm run build`).
Sauvegarder le serveur puis retirer ses anciens fichiers avant publication ; un simple
transfert ne supprime pas les anciennes copies distantes. Le fichier malveillant
`accesson.php` doit être retiré du serveur s'il y a été envoyé.
Vérifier ensuite accueil, contact et CV, ainsi que le refus de `/.git/config`,
`/Nouveau/index.html`, `/includes/carousel.php`, `/includes/timeline.php`, `/assets/` et `/Nouveau/assets/images/accesson.php`.

Les pages, images, CSS, JavaScript et le CV sont publics par conception.
Le formulaire conserve FormSubmit comme destinataire technique : ne pas y mettre de secrets.
Le nettoyage local ne supprime ni les copies distantes ni l'historique Git antérieur.
