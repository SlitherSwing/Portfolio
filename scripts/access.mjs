import { readdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../public/', import.meta.url));
async function walk(dir, prefix = '') {
  const result = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const path = prefix + entry.name;
    if (entry.isDirectory()) result.push(...await walk(dir + '/' + entry.name, path + '/'));
    else if (entry.isFile() && /\.(html|css|js|webp|png|jpg|jpeg|svg|pdf)$/.test(path)) result.push(path);
    else throw new Error('Fichier public inattendu : ' + path);
  }
  return result;
}
const files = (await walk(root)).sort();
const escaped = files.map(path => path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
await writeFile(root + '.htaccess', `# Généré par npm run build:access. Apache 2.4 + mod_rewrite requis.
Require all granted
Options -Indexes -MultiViews
DirectoryIndex index.html
RewriteEngine On
# Seuls les fichiers du portfolio sont accessibles, même si d'anciens fichiers subsistent.
RewriteRule ^(?:$|${escaped.join('|')})$ - [END]
RewriteRule ^ - [R=404,L]
`);
console.log(files.length + ' fichiers publics autorisés.');
