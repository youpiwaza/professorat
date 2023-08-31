# Installation d'un serveur web Nginx

Installation du serveur, configuration & installation de PHP.

## Commandes usuelles

Petite aide pour lancer le projet

```bash
# Exécuter le playbook de base via Ansible
ansible-playbook -i hosts playbook.yml
```

Le site sera ensuite disponible sur le [localhost, port 80 avant la confiruation](http://localhost/), [port 8080](http://localhost:8080) après le rôle `configurer-nginx`.

## Pas à pas

Repartir du fichier à la racine `playbook.yml`, et suivre les `roles` dans l'ordre.

Chaque role est contenu dans son propre dossier.

## Optimisations possibles

A noter que ce projet est didactique et a pour but de suivre les étapes de l'installation classique.

Il peut être optimisé de multiples manières, notamment en regroupant les installations de packages.
