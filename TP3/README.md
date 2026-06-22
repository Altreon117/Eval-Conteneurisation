# TP3 - Conteneurisation de TaskFlow

## Contexte
Conteneurisation integrale d'une application pour qu'elle puisse etre lancee avec une commande unique. L'architecture comprend un frontend (Nginx), un backend (Node.js) et un cache interne (Redis).

## Configuration initiale
Un fichier de modele est fourni. Generez votre configuration locale avec la commande suivante :
`cp .env.example .env`

## Deploiement
Lancez l'infrastructure complete :
`docker compose up --build -d`

## Verifications
* Statut des 3 services (Up) : `docker compose ps`
* Accessibilite Frontend : `curl http://localhost:8080`
* Communication API - Cache : `curl http://localhost:3001/health`

## Nettoyage
`docker compose down`