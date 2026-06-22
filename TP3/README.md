# TP3 - Conteneurisation de TaskFlow

Conteneurisation complète de l'application TaskFlow à l'aide de Docker Compose. Le projet intègre un Backend Node.js, un Frontend Nginx, et un système de cache Redis totalement isolé du réseau public.

## Prérequis
- Docker et Docker Compose installés sur votre machine.
- Assurez-vous qu'aucun autre projet (comme le TP2) n'utilise les ports `8080` et `3001`.

## Configuration

Un fichier d'exemple est fourni. Copiez le fichier `.env.example` vers un vrai fichier `.env` :
`cp .env.example .env`

*(Vous pouvez modifier les valeurs du fichier `.env` si nécessaire, mais les valeurs par défaut fonctionnent très bien en local).*

## Lancement

Une seule commande suffit pour orchestrer l'intégralité de l'application :
`docker compose up --build -d`

## Utilisation et Tests

- **Accéder à l'application (Frontend) :** **http://localhost:8080**
- **Vérifier le statut de l'API et la liaison Redis :** **http://localhost:3001/health**
  *(Vous devriez voir `{"status":"ok","cache":"connected"}`)*

**Sécurité de l'architecture :** Le service Redis (`cache`) est intentionnellement inaccessible depuis l'extérieur (`localhost:6379` ne répondra pas). Il est uniquement joignable par le réseau interne Docker via le backend.

## Nettoyage
Pour arrêter et supprimer les conteneurs :
`docker compose down`