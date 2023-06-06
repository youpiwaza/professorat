import { readFile }         from 'node:fs'
import { createServer }     from 'node:http'
import { dirname, join }    from 'node:path'
import { fileURLToPath }    from 'node:url'

import { readdir }          from 'node:fs/promises'

const hostname = '127.0.0.1';
const port = 3000;

// On récupère & converti le nom du dossier COURANT, auquel on ajoute le dossier du site
const dossierCourant = dirname( fileURLToPath(import.meta.url) )
// console.log("dossierCourant", dossierCourant)

// * Préférer l'utilisation de join à la place de la concaténation classique, gère les différents OS
const dossierDuSite     = join(dossierCourant, '/www')
// const dossierRessources = join(dossierDuSite, '/assets')

// * On peut vérifier les ressources présentes sur le serveur
// const nomsFichiersRessources = await readdir( dossierRessources, { withFileTypes: true } )
// const nomsFichiersRessources = await readdir( dossierRessources )
// console.log("nomsFichiersRessources", nomsFichiersRessources)

// Côté navigateur
const server = createServer((request, response) => {
    
    // // * Si on injecte le html, il va demander au serveur de charger les css, js, images
    // readFile( join( dossierDuSite, '/index.html'), 'utf8', (err, data) => {
    //     // Grâce au callback, ce code sera éxécuté lorsque le fichier aura été récupéré..
    //     if (err) throw err
        
    //     // index.html sera systématiquement renvoyé, peut importe l'url
    //     response.end(data)
    // })

    // // * On se sert de la requête afin d'analyser quel fichier est demandé
    // console.log(request.url)
    // // * Lors de l'accès à http://localhost:3000/, avec index.html, les ressources suivantes sont demandées
    // //      /
    // //      /assets/normalize.css
    // //      /assets/main.css
    // //      /assets/main.js
    // //      /assets/glorious-favicon.ico
    
    // * On doit ensuite créer une réponse par demande / fichier
    //      @see    https://stackoverflow.com/a/28838314

    // Si il s'agit de la racine du site, on envoi index.html
    if(request.url === '/') {
        readFile( join( dossierDuSite, '/index.html'), 'utf8', (err, data) => {
            if (err) throw err
            response.end(data)
        })
    }
    // Sinon, il s'agit d'une ressource
    else {
        // fs.readFile('./' + request.url, function(err, data) {

        // On ajuste le chemin
        const cheminRessource = join( dossierDuSite, request.url )
        console.log(cheminRessource)

        // On essaie de l'ouvrir
        readFile( cheminRessource, 'utf8', (err, data) => {
            if (err) throw err

            // Si le fichier existe, on le renvoi
            response.end(data)
        })
    }
});

server.listen(port, hostname, () => {
    // Côté serveur / terminal
    console.log(`Server running at http://${hostname}:${port}/`);
});
