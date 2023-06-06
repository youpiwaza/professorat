console.log('04-ecrire-dans-un-fichier.js')

// https://devdocs.io/node/fs#fspromiseswritefilefile-data-options

import { writeFile } from 'node:fs'
import { Buffer } from 'node:buffer'

const data = new Uint8Array(Buffer.from('Hello Node.js !\n'))

// writeFile('un-fichier-ou-ecrire.txt', data, (err) => {

// On ajoute dans le fichier plutôt que de remplacer
const options = {
  flag: 'a'
}

writeFile('un-fichier-ou-ecrire.txt', data, options, (err) => {
  if (err) throw err
  console.log('Le fichier a bien été modifié !')
})
