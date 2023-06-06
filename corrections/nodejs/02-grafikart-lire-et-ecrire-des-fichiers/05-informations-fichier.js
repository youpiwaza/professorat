console.log('05-informations-fichier.js')

// https://devdocs.io/node/fs#fspromisesstatpath-options

import { stat } from 'node:fs/promises'

const infos = await stat('un-fichier-a-recuperer.txt')

console.log(infos)

// Stats {
//   dev: 2080,
//   mode: 33188,
//   nlink: 1,
//   uid: 0,                                  // Droits utilisateurs / groupe
//   gid: 0,                                  // Droits utilisateurs / groupe
//   rdev: 0,
//   blksize: 4096,
//   ino: 719610,
//   size: 44,                                // Taille du fichier, en octets
//   blocks: 8,
//   atimeMs: 1685969066156.1055,             // Dates de création, modifications, etc.
//   mtimeMs: 1685969066136.1055,
//   ctimeMs: 1685969066136.1055,
//   birthtimeMs: 1685968260906.1042,
//   atime: 2023-06-05T12:44:26.156Z,
//   mtime: 2023-06-05T12:44:26.136Z,
//   ctime: 2023-06-05T12:44:26.136Z,
//   birthtime: 2023-06-05T12:31:00.906Z
// }