console.log('01-premier-stream.js')

// https://devdocs.io/node/fs#fscreatereadstreampath-options

// * Les streams permettent de découper les fichiers en plein de petits morceaux
//    Afin de ne pas bloquer en chargeant l'ensemble du fichier d'un coup
//    Egalement de meilleures performances (ne bloque pas la mémoire, etc.)

import { createReadStream } from 'node:fs';

// Renvoi un "ReadStream"
const stream = createReadStream('video.mp4');

// On peut rajouter des évènements
stream.on('data', (chunk) => {
  console.log(chunk)        // Afficher les morceaux de données lors qu'ils sont reçus.
  console.log(chunk.length) // Afficher la taille des morceaux
  console.log('---')        // Un petit séparateur afin que cela soit plus lisible
})

// Doc : Penser à fermer le stream, au cas ou
setTimeout(() => {
  stream.close(); // This may not close the stream.
  // Artificially marking end-of-stream, as if the underlying resource had
  // indicated end-of-file by itself, allows the stream to close.
  // This does not cancel pending read operations, and if there is such an
  // operation, the process may still not be able to exit successfully
  // until it finishes.
  stream.push(null);
  stream.read(0);
}, 100);
