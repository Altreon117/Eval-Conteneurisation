# Évaluation Conteneurisation - Piscine Docker

Bienvenue sur le dépôt de mon évaluation de conteneurisation. 
Ce projet regroupe les trois travaux pratiques réalisés pour valider les compétences d'orchestration et de déploiement avec **Docker** et **Docker Compose**.

## Structure du dépôt

Chaque TP dispose de son propre dossier autonome avec les instructions détaillées pour le lancer localement :

* **[TP1 - Réparation d'une image Docker](./TP1)**
  * *Notions :* Optimisation de Dockerfile, layers, sécurité (non-root), Alpine Linux.
* **[TP2 - Stack Multi-services](./TP2)**
  * *Notions :* Docker Compose, volumes persistants, variables d'environnement (`.env`), intégration d'outils tiers (Adminer, PostgreSQL, Node.js, Nginx).
* **[TP3 - Conteneurisation de TaskFlow](./TP3)**
  * *Notions :* Multi-conteneurs complet (Frontend statique, Backend API, Cache Redis isolé), réseaux internes, `.dockerignore`.

## Prérequis globaux

Pour exécuter les environnements de ce dépôt, vous aurez besoin de :
* [Docker](https://docs.docker.com/get-docker/)
* [Docker Compose](https://docs.docker.com/compose/install/)

> *Note : Tous les ports utilisés ont été standardisés (3000, 3001, 8080, 8081). Veillez à éteindre les conteneurs d'un TP (`docker compose down`) avant de lancer le suivant pour éviter les conflits de ports.*