console.log('02-stream-pourcentage.js')

// https://grafikart.fr/tutoriels/nodejs-streams-2084

import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises'

const stream = createReadStream('video.mp4');
// Ne récupérer que la taille (totale du fichier)
const {size} = await stat('video.mp4')
console.log('size', size);

let total = 0;

stream.on('data', (chunk) => {
  total += chunk.length;
  // console.log('total', total)
  // console.log('size', size)

  console.clear();
  console.log('Pourcentage', `${total / size * 100} %`)
  // console.log('---')
})

setTimeout(() => {
  stream.close();
  stream.push(null);
  stream.read(0);
}, 1000); // On laisse un peu plus de temps afin de charger complètement
