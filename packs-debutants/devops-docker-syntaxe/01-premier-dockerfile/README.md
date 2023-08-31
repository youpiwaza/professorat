# Ajouter nos contenus

Toujours écrit en langage `YAML`.

Ce fichier nous servira à créer une image, qui elle-même nous servira à créer des conteneurs.

Un Dockerfile peut être aussi simple que de ré-utiliser une image existante.

Nous utiliserons ici la dernière [image de nginx](https://hub.docker.com/_/nginx) fournie sur Dockerhub.

---

## Quelle image choisir ?

La majorité du temps, les images officielles sont fournies avec une distribution Linux complète, telle que Ubuntu (plusieurs centaines de Mo).

Il existe aussi des versions fournies avec une version allégée (quelques Mo) connue sous le nom d'alpine.

Cela est spécifié par le `tag` (ce qui se trouve derrière les `:`)

Nous choisirons donc l'image `nginx:alpine`.

---

## Commande

### Créer notre image

Dans le dossier ou se trouve le `Dockerfile`.

`-t` afin de spécifier un nom à notre image (un `tag` ; qui servira plus tard pour définir les version également).

`.` permet de spécifier le dossier courant, celui ou se situe notre `Dockerfile`.

```bash
# Création de l'image
docker build -t ma-premiere-image .
```

---

### Démarrer notre premier conteneur

`-d` afin de stipuler que le conteneur fonctionnera en mode détaché ~= en arrière plan

C'est le contraire de `-it`, ou nous sommes "à l'intérieur" du conteneur (par exemple `bash` dans un conteneur ubuntu)

`--name` afin de donner un nom a notre conteneur, ce qui sera plus simple pour sa gestion (arrêt, suppression)

`-p` afin de spécifier les ports d'entrée & sortie du conteneur :  Nginx publie sur le port 80 dans le conteneur, mais ce port sera liée au port 8080 à l'éxtérieur du conteneur > dans notre navigateur localhost:8080.

`ma-premiere-image` Le nom de l'image à partir de laquelle démarrer le conteneur

```bash
# Création d'un conteneur à partir de cette image
# docker run -d --name mon-premier-conteneur -p 8080:80 ma-premiere-image

#   On peut utiliser \ afin de passer des lignes dans notre commande afin de faciliter la lecture
docker run \
        -d \
        --name mon-premier-conteneur \
        -p 8080:80 \
    ma-premiere-image
```

Afin de s'assurer que le conteneur est correctement lancé, on peut utiliser la commande

```bash
# Afficher l'ensemble des conteneurs, y compris ceux arrétés
docker ps -a
```

Ou simplement aller vérifier dans notre navigateur

---

### Arrêt et suppression du conteneur

On réutilise ne nom fourni dans `--name` lors de l'appel de la commande `docker run`

```bash
# Arrêter (peut être relancé)
docker stop mon-premier-conteneur

# Supprimer
docker rm mon-premier-conteneur

# One liner
docker stop mon-premier-conteneur && docker rm mon-premier-conteneur
```
