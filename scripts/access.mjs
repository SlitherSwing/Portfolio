// Importe les fonctions asynchrones pour lire les dossiers et écrire un fichier.
import { readdir, writeFile } from 'node:fs/promises';
// Convertit une URL de fichier en chemin utilisable par le système.
import { fileURLToPath } from 'node:url';
// Localise public par rapport à ce script, indépendamment du dossier où la commande est lancée.
const root = fileURLToPath(new URL('../public/', import.meta.url));
// Parcourt un dossier et ses sous-dossiers ; prefix construit les chemins relatifs à public.
async function walk(dir, prefix = '') {
  // Prépare la liste des fichiers trouvés dans ce dossier.
  const result = [];
  // Lit les entrées avec leur type, puis examine chaque fichier ou dossier.
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    // Ignore les fichiers et dossiers cachés, notamment le fichier de règles généré.
    if (entry.name.startsWith('.')) continue;
    // Construit le chemin relatif utilisé dans les URL autorisées.
    const path = prefix + entry.name;
    // Explore récursivement les sous-dossiers et ajoute leurs fichiers à la liste.
    if (entry.isDirectory()) result.push(...await walk(dir + '/' + entry.name, path + '/'));
    // Accepte uniquement les fichiers dont l’extension figure dans cette liste.
    else if (entry.isFile() && /\.(html|css|js|webp|png|jpg|jpeg|svg|pdf)$/.test(path)) result.push(path);
    // Arrête la génération si une entrée inattendue est présente dans public.
    else throw new Error('Fichier public inattendu : ' + path);
  }
  // Renvoie les chemins collectés au niveau appelant.
  return result;
}
// Collecte tous les fichiers autorisés et les trie pour produire un résultat stable.
const files = (await walk(root)).sort();
const escaped = files.map(path => path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
// Écrit les règles Apache dans public/.htaccess ; la chaîne entre accents graves est le contenu exact du fichier.
// Require autorise l’accès ; Options désactive la liste des dossiers et la négociation MultiViews.
// DirectoryIndex désigne l’accueil ; RewriteEngine active les règles de réécriture.
// La première RewriteRule accepte la racine et les chemins listés, puis arrête la réécriture.
// La dernière RewriteRule renvoie une erreur 404 pour toute autre URL.
await writeFile(root + '.htaccess', `# Généré par npm run build:access. Apache 2.4 + mod_rewrite requis.
Require all granted
Options -Indexes -MultiViews
DirectoryIndex index.html
RewriteEngine On
# Seuls les fichiers du portfolio sont accessibles, même si d'anciens fichiers subsistent.
RewriteRule ^(?:$|${escaped.join('|')})$ - [END]
RewriteRule ^ - [R=404,L]
`);
// Affiche le nombre de fichiers inclus dans les règles générées.
console.log(files.length + ' fichiers publics autorisés.');
