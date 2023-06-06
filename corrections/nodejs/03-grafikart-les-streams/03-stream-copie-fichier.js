console.log('03-stream-copie-fichier.js')

// https://grafikart.fr/tutoriels/nodejs-streams-2084

import { createReadStream, createWriteStream } from 'node:fs';
import { stat } from 'node:fs/promises'

// Une copie via le stream, plutôt que de gérer l'ensemble du fichier d'un seul coup
const stream = createReadStream('video.mp4');
const writeStream = createWriteStream('copie-video.mp4');

stream.pipe(writeStream);

setTimeout(() => {
  stream.close();
  stream.push(null);
  stream.read(0);
}, 1000); // On laisse un peu plus de temps afin de charger complètement
