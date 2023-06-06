import { createReadStream, readFile } from 'node:fs'
import { createServer }               from 'node:http'
import { dirname, extname, join }     from 'node:path'
import { fileURLToPath }              from 'node:url'

const hostname = '127.0.0.1';
const port     = 3000;

const dossierCourant = dirname( fileURLToPath(import.meta.url) )
const dossierDuSite  = join(dossierCourant, '/www')

// Côté navigateur
const server = createServer((request, response) => {
    
    // * On doit ensuite créer une réponse par demande / fichier
    //      @see    https://stackoverflow.com/a/28838314

    // Si il s'agit de la racine du site, on envoi index.html
    if(request.url === '/') {
        readFile( join( dossierDuSite, '/index.html'), 'utf8', (err, data) => {
            if (err) throw err

            // On rajoute le type de contenu dans les headers
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/html');
            
            response.end(data)
        })
    }
    // Sinon, il s'agit d'une ressource
    else {
        // On ajuste le chemin
        const cheminRessource = join( dossierDuSite, request.url )
        console.log(cheminRessource)

        // On essaie de l'ouvrir
        readFile( cheminRessource, 'utf8', (err, data) => {

            // * Gestion en cas de fichier non trouvé
            if (err) {
                // Gestion des headers
                response.statusCode = 404;
                response.setHeader('Content-Type', 'text/html')

                // Retour utilisateur
                response.end(`<html><head><meta charset="utf-8"></head><body>Fichier non trouvé<br> ${request.url}</body></html>`)
                
                // Retour côté serveur
                console.error(`Fichier non trouvé\n${cheminRessource}`)

                throw err
            }

            // * Fichier trouvé, on l'envoi

            // * Gestion des headers
            response.statusCode = 200

            // On rajoute le type de contenu dans les headers, en fonction de l'extension du fichier
            //      https://devdocs.io/node/path#pathextnamepath
            const extension = extname(request.url)
            console.log(extension)

            // De même, si c'est un fichier, on le traite différement
            //      https://stackoverflow.com/a/40899767
            let isFile = false;

            // default
            let mimetype = 'text/plain';

            switch(extension) {
                case '.css' :
                    mimetype = 'text/css'
                    break
                case '.html' :
                    mimetype = 'text/html'
                    break
                case '.ico' :
                    mimetype = 'image/x-icon'
                    isFile = true
                    break
                case '.jpg' :
                    mimetype = 'image/jpeg'
                    isFile = true
                    break
                case '.js' :
                    mimetype = 'text/javascript'
                    break
                case '.png' :
                    mimetype = 'image/png'
                    isFile = true
                    break
            }

            response.setHeader('Content-Type', mimetype);

            // Envoi du contenu classique
            if(!isFile) {
                response.end(data)
            }
            // Envoi des fichiers
            else {
                const stream = createReadStream(cheminRessource);

                stream.on('open', function () {
                    stream.pipe(response);
                });
            }

        })
    }
});

server.listen(port, hostname, () => {
    // Côté serveur / terminal
    console.log(`Server running at http://${hostname}:${port}/`);
});
