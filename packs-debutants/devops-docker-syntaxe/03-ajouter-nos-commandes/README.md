# Ajouter nos commandes

Dans le `Dockerfile`, utiliser l'instruction `RUN`, qui exécutera nos commandes.

On peut également utiliser plusieurs fois, mais la meilleure pratique est de chaîner via `&&`.

cf. [Le blog de Nick](https://nickjanetakis.com/blog/docker-tip-3-chain-your-docker-run-instructions-to-shrink-your-images).

## Image avec une création de fichier

Dans le `Dockerfile`

```Dockerfile
# On repart de la version light d'Ubuntu
FROM alpine

# Toutes les commandes seront exécutées depuis le dossier /home
WORKDIR /home

# J'exécute la commande "bash" (le terminal) > Je crée un fichier
RUN /bin/ash -c 'touch hello.txt'
```

🚨 Attention : Pour l'image Ubuntu, le terminal est `/bin/bash`, pour alpine, sa version light est `/bin/ash` !

### Vérifier que la commande a fonctionné

```bash
# Création de l'image
docker build -t image-avec-commandes .

# Création d'un conteneur, en mode interactif (on sera dans le terminal DU CONTENEUR lors du démarrage)
docker run \
        -it \
        --name conteneur-avec-commandes \
    image-avec-commandes

# Arrêt & suppression
docker stop conteneur-avec-commandes && docker rm conteneur-avec-commandes
```

---

## Image avec commande à l'exécution

On utilise `CMD` afin de définir la commande exécutée une fois le conteneur démarré.

Par exemple pour démarrer le serveur à l'intérieur du conteneur.

```Dockerfile
CMD ["nginx", "-g", "daemon off;"]
```

---

```bash
# Création de l'image
#       On utilise -f afin de spécifier un autre Dockerfile dans le même dossier
#           Par défaut : "Dockerfile"
docker build -t image-avec-commandes2 -f DockerfileAvecCommande .

# Création d'un conteneur, sans spécifier de mode
#       Le conteneur va exécuter sa commande CMD, puis s'arrêter
docker run \
        --name conteneur-avec-commandes2 \
    image-avec-commandes2

# Cette commande renvoie
## hello.txt

# Le conteneur est créé avec le fichier /home/hello.txt
# A l'exécution, on afficher le contenu du dossier /home



# Arrêt & suppression
docker stop conteneur-avec-commandes2 && docker rm conteneur-avec-commandes2
```

---

## Image avec installation de package

On lance la commande que l'on souhaite dans `RUN`, par exemple

1. Pour Ubuntu `RUN apt install LE_PACKAGE`
2. Pour alpine `RUN apt install LE_PACKAGE`

Afin de tester, on installe l'éditeur de texte *nano*.

```bash
# Création de l'image
#       On utilise -f afin de spécifier un autre Dockerfile dans le même dossier
#           Par défaut : "Dockerfile"
docker build -t image-avec-package -f DockerfileAvecPackage .

# Création d'un conteneur, en mode intéractif
docker run \
        -it \
        --name conteneur-avec-package \
    image-avec-package

# Une fois dans le conteneur, on peut utiliser nano qui a été installé lors du build
> nano hello.txt

## (Rajouter du texte dans le fichier)
>>  Bonjour tout le monde !
## Sauvegarder via
>>  Ctrl + O
## Quitter via 
>> Ctrl + X

# Sortir du conteneur
> exit

# Arrêt & suppression
docker stop conteneur-avec-package && docker rm conteneur-avec-package
```
