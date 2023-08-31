# Ajouter nos contenus

Il y a deux possibilités pour changer le contenu de nos conteneurs :

La première consiste à inclure le contenu directement dans notre image.

La deuxième consiste à relier les fichiers du conteneur avec ceux de l'extérieur (~= le disque dur de notre ordinateur)

## Ajouter du contenu à une image

Dans le `Dockerfile`, utiliser l'instruction `COPY`, qui prendra deux paramètres

1. Le premier : le chemin du dossier de notre disque dur.
2. Le deuxième : le chemin vers lequel copier le dossier dans le conteneur, lorsqu'il sera démarré.

🚨 Attention : besoin de re-build l'image à chaque changement de contenu.

```bash
# Création de l'image
docker build -t image-avec-contenu .

# Création d'un conteneur
docker run \
        -d \
        --name conteneur-avec-contenu \
        -p 8080:80 \
    image-avec-contenu

# Arrêt & suppression
docker stop conteneur-avec-contenu && docker rm conteneur-avec-contenu
```

---

## Utiliser un volume

On injecte les contenus à l'exécution, deux syntaxes possibles :

1. Raccourcie avec `-v`
   1. `-v ./site-simple/:/usr/share/nginx/html:ro`
   2. `-v` DOSSIER_SUR_DISQUE_DUR`:`DOSSIER_DANS_LE_CONTENEUR`:`OPTIONS
      1. Ici, l'option `ro` signifie `read only` (sécurité)
2. Verbeuse, avec `--mount` ; la même chose mais plus lisible
   1. `type` le type de volume utilisé
   2. `source` > DOSSIER_SUR_DISQUE_DUR
   3. `target` > DOSSIER_DANS_LE_CONTENEUR
   4. `readonly`

```bash
# Création d'un conteneur à partir de l'image Nginx, sans modifications
docker run \
        -d \
        --name conteneur-avec-volume \
        -p 8080:80 \
        -v ./site-simple/:/usr/share/nginx/html:ro \
    nginx:alpine

# Autre syntaxe
docker run \
        -d \
        --mount type=bind,source=./site-simple/,target=/usr/share/nginx/html,readonly \
        --name conteneur-avec-volume \
        -p 8080:80 \
    nginx:alpine

# Arrêt & suppression
docker stop conteneur-avec-volume && docker rm conteneur-avec-volume
```

🧠 À noter : parfois, `"$(pwd)"` est utilisé en tant que source, afin d'injecter le dossier dans le terminal.
