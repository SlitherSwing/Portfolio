# Portfolio de Kevin Mascaro

## Organisation

- `public/index.html` : accueil actuel, seule version conservée.
- `public/contact.html` : contact.
- `public/assets/` : CSS compilé, JavaScript, images, icônes et CV utilisés.
- `src/styles/input.css` : source Tailwind.
- `scripts/access.mjs` : génère la liste des fichiers autorisés sur Apache.
- `.git`, les fichiers npm et les sources restent sur le poste de travail.

## Modifier et vérifier

Installer avec `npm ci`, puis lancer `npm run build` après une modification.
`npm run preview` ouvre un serveur local à http://127.0.0.1:8080.
Le serveur Python ne teste pas les règles Apache `.htaccess`.

## Publier avec FileZilla

Envoyer **uniquement le contenu de public/** dans le dossier distant du site,
avec son fichier caché `.htaccess`. Ne pas envoyer le dossier Portfolio entier.
L'accueil doit être à `/index.html`, le contact à `/contact.html`, les ressources dans `/assets/`.
Sur Alwaysdata, le site doit utiliser Apache 2.4 avec mod_rewrite et autoriser `.htaccess`.
Le fichier généré interdit les URL hors de la liste du site et l'affichage des dossiers.
Il doit être envoyé à chaque ajout ou suppression de fichier public (`npm run build`).
Sauvegarder le serveur puis retirer ses anciens fichiers avant publication ; un simple
transfert ne supprime pas les anciennes copies distantes. Le fichier malveillant
`accesson.php` doit être retiré du serveur s'il y a été envoyé.
Vérifier ensuite accueil, contact et CV, ainsi que le refus de `/.git/config`,
`/Nouveau/index.html`, `/assets/` et `/Nouveau/assets/images/accesson.php`.

Les pages, images, CSS, JavaScript et le CV sont publics par conception.
Le formulaire conserve FormSubmit comme destinataire technique : ne pas y mettre de secrets.
Le nettoyage local ne supprime ni les copies distantes ni l'historique Git antérieur.
