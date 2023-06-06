console.log('02-lire-un-fichier-avec-une-promesse.js')

// https://devdocs.io/node/fs#fspromisesreadfilepath-options

// On importe uniquement readFile, mais la version "promesse"
import { readFile } from 'node:fs/promises'

// On attend que le contenu soit récupéré
const content = await readFile('./un-fichier-a-recuperer.txt', 'utf8')
console.log(content)

// Mais le reste du code est bloqué..
console.log('Preums !')
