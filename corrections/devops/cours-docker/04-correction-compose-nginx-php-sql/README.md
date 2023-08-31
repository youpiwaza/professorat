# Monter un compose Nginx, PHP, SQL & Admin

Création d'une image PHP avec le module PDO afin de s'y connecter plus simplement

Utilisation d'un docker compose afin de monter 4 conteneurs :

1. Serveur web > `nginx:alpine`
2. PHP plus rapide > `phpfpm`
3. Base de données > `mysql`
4. Administration de base de données > `adminer`

Toutes les documentations de ces images sont sur Dockerhub.

Les identifiants sont spécifiés dans le fichier `docker-compose.yml`, ainsi que dans `/secrets` afin d'illustrer les [docker secrets](https://docs.docker.com/compose/compose-file/#secrets).

Note : cf. [le projet original](https://github.com/youpiwaza/server-related-tutorials/tree/master/01-docker/04-my-tests/03-compose-nginx-php-sql) (avec plus de doc et le pas à pas de la création dans le README)

---

## Principales commandes

```bash
# Se mettre dans le bon dossier
# Lancer les conteneurs avec les logs
docker-compose up

# Ctrl + C pour l'arreter
```

---

## Liens

- [Front sur 8080](http://localhost:8080/)
- [Adminer sur 8081](http://localhost:8081/) avec Serveur: *db_tartopaum*, Utilisateur: *bob*, Pass: *bobspw*

---

## Sources

- *Fichier docker-compose.yml*
- *Dossier sources /src*
- *Dossier configs /config*
  - Contient également les configurations par défaut des deux images

---

## Debug

Rentrer dans un container monté pour vérifier contenu ou la configuration :

```bash
# Récupérer le nom du container (Selec + clic droit (copier), puis clic droit (coller))
> docker container ls

# php-fpm
> docker exec -it NOM_CONTAINER bash

# **alpine ne possède pas bash (nginx)**
> docker exec -it NOM_CONTAINER /bin/ash
```
