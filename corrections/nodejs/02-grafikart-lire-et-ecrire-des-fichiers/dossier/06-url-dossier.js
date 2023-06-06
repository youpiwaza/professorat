console.log('dossier/06-url-dossier.js')

import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

// On récupère & converti le nom du dossier COURANT
const leCheminDuDossier = dirname(fileURLToPath(import.meta.url))
console.log("leCheminDuDossier", leCheminDuDossier)

// On y ajoute le nom du fichier
const leCheminDuFichier = join( leCheminDuDossier, '06-url-dossier.js')

// On s'en sers afin d'afficher le contenu
console.log(await readFile(leCheminDuFichier, 'utf8'))
