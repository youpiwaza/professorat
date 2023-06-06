# Tuto grafikart / Lire et écrire des fichiers

L'url du [tuto](https://grafikart.fr/tutoriels/nodejs-filesystem-2083).

## 🐛 Problème lors de l'import

Créer un fichier de configuration pour le projet

```bash
npm init -y
```

Cela permet de créer un fichier `package.json`.

et y ajouter

```json
"type": "module"
```

## Lire un fichier

Utilisation de `fs.readFile`, [doc](https://devdocs.io/node/fs#fsreadfilepath-options-callback)

```js
import { readFile } from 'node:fs';

readFile('./un-fichier-a-recuperer.txt', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

Renvoie un buffer

```bash
<Buffer 4c 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74 20 63 6f 6e 73 65 63 74 65 74 75 72 20 61 64 69 70 69 73 69 63 69 6e 67 ... 1081 more bytes>
```

Solution : spécifier l'encodage dans les options:

```js
import { readFile } from 'node:fs';

readFile('./un-fichier-a-recuperer.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```
