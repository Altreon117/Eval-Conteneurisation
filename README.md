# Evaluation Conteneurisation - Piscine Docker

Ce repertoire contient l'integralite de mon travail pour l'evaluation du module DevOps. L'objectif de ce projet est de demontrer la maitrise de l'orchestration et du deploiement d'applications via Docker et Docker Compose.

## Structure du projet

L'evaluation est decoupee en trois travaux pratiques independants :

* **[TP1 - Reparation d'une image Docker](./TP1) :** Resolution de problemes sur un Dockerfile existant, optimisation des layers, et application des regles de securite (utilisateur non-root, poids reduit).
* **[TP2 - Docker Compose (Stack multi-services)](./TP2) :** Deploiement d'une infrastructure complete (Frontend Nginx, API Node.js, Base de donnees PostgreSQL) avec persistance des donnees et integration de l'outil Adminer.
* **[TP3 - Conteneurisation de TaskFlow](./TP3) :** Mise en production d'une application de gestion de taches avec un backend Node.js, un frontend statique, et un cache Redis completement isole du reseau exterieur.

## Materiel et Prerequis

Pour executer les differents environnements, votre machine doit disposer des elements suivants :
* Docker et Docker Compose installes et actifs.
* Les ports locaux 3000, 3001, 8080 et 8081 doivent etre libres.

Veillez a toujours couper l'environnement d'un TP avec la commande `docker compose down` avant de lancer le suivant afin de liberer les ports.