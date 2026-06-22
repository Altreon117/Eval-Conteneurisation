# TP2 - Docker Compose : Stack Multi-services

Ce projet déploie une infrastructure complète composée de 4 services interconnectés :
- Un **Frontend** (Nginx)
- Une **API** (Node.js)
- Une **Base de données** sécurisée (PostgreSQL)
- Un outil d'administration **Adminer**

## Prérequis
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (qui inclut Docker Compose) installé et démarré.
- Assurez-vous que les ports `3000`, `8080` et `8081` de votre machine sont libres.

## Installation

Avant de démarrer, vous devez configurer le mot de passe de la base de données.
Créez un fichier nommé `.env` à la racine de ce dossier (TP2) et ajoutez-y cette ligne :
`DB_PASSWORD=VotreMotDePasseSécurisé123!`

## Démarrer l'infrastructure

Lancez la commande suivante pour compiler et démarrer tous les services en arrière-plan :
`docker compose up --build -d`

## 🌐 Accès aux services

Une fois les conteneurs démarrés, ouvrez votre navigateur :

1. **Frontend (Interface Web) :** **http://localhost:8080**
2. **API (Healthcheck) :** **http://localhost:3000/health**
3. **Adminer (Gestion BDD) :** **http://localhost:8081**

*Identifiants pour Adminer :*
- **Système :** PostgreSQL
- **Serveur :** database
- **Utilisateur :** tp2user
- **Mot de passe :** *(Celui que vous avez mis dans le fichier .env)*
- **Base de données :** tp2db

## Nettoyage
Pour éteindre l'infrastructure sans perdre les données (grâce aux volumes) :
`docker compose down`
*(Si vous souhaitez tout effacer, y compris la base de données, ajoutez le flag `-v` à la commande).*