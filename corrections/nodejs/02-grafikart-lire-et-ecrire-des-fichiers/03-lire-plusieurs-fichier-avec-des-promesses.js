console.log('03-lire-plusieurs-fichier-avec-des-promesses.js')

// On importe uniquement readFile, mais la version "promesse"
import { readFile } from 'node:fs/promises'

// On attend que l'ensemble des contenus soit récupérés
const content = await Promise.all([
    // Les deux sont chargés de manière concurrentielle, ~en même temps
    readFile('./un-fichier-a-recuperer.txt', 'utf8'),
    readFile('./un-deuxieme-fichier-a-recuperer.txt', 'utf8'),
])

console.log(content)

// Mais le reste du code est bloqué..
console.log('Preums !')
