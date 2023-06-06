console.log('01-lire-un-fichier.js')

// Version asynchrone
// On importe uniquement readFile
import { readFile } from 'node:fs'

readFile('./un-fichier-a-recuperer.txt', 'utf8', (err, data) => {
  // Grâce au callback, ce code sera éxécuté lorsque le fichier aura été récupéré..
  if (err) throw err
  console.log(data)
})

// Mais le reste du code continuera de s'exécuter sans l'attendre
console.log('Preums !')
