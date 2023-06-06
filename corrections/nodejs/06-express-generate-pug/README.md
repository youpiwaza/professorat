# Projet express généré

Via la commande

```bash
# Installation globale du générateur
npm install express-generator -g

# Générer un projet
express --view=pug 06-express-generate-pug
```

cf. la [doc officielle](https://expressjs.com/fr/starter/generator.html) ^^

Doc [pugjs](https://pugjs.org/api/getting-started.html) pour le templating dans `/views`.

## 📝 Notes

Utilisation de `.gitignore` afin de ne pas conserver les dépendances

## 🔨 Commandes

```bash
## Installation des dépendances
npm install
# ou
yarn

## Lancer le serveur
DEBUG=06-express-generate-pug:* npm start
```
