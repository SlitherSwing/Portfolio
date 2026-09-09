# Portfolio

## Aperçu local avec actualisation automatique

Depuis ce dossier, lancer le serveur PHP dans un terminal :

```sh
php -S 127.0.0.1:8080 -t .
```

Dans un second terminal, lancer la surveillance des fichiers :

```sh
npx --yes --package browser-sync browser-sync start --proxy http://127.0.0.1:8080 --files '**/*.html,**/*.css,**/*.js,**/*.php,**/*.svg,**/*.webp' --host 127.0.0.1 --port 3000 --no-open --no-ui --no-notify
```

Ouvrir http://127.0.0.1:3000/ et enregistrer les modifications pour actualiser l’aperçu automatiquement. Modifier `index.html` à la racine pour l’accueil et `Nouveau/contact.html` pour le contact.

Le CSS Tailwind utilisé est `Nouveau/output.css`. Après `npm install`, lancer `npm run watch:css` dans un troisième terminal pour compiler automatiquement les nouvelles classes. Pour une compilation ponctuelle : `npm run build:css`.
