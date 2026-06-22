# TP1 - Réparation d'une image Docker

Ce projet contient la correction d'un Dockerfile initialement défectueux. L'image a été optimisée pour la production : réduction drastique de la taille (grâce à Alpine), sécurisation (utilisateur non-root), et optimisation du cache de build.

## Prérequis
- [Docker](https://www.docker.com/products/docker-desktop/) installé et démarré sur votre machine.

## Lancer le projet

**1. Construire l'image Docker**
Placez-vous dans ce dossier depuis votre terminal et lancez la construction de l'image :
`docker build -t tp1:corrige .`

**2. Démarrer le conteneur**
Lancez l'application en arrière-plan en liant le port 3000 :
`docker run -d --name app-tp1 -p 3000:3000 tp1:corrige`

**3. Tester l'application**
Ouvrez votre navigateur web et accédez à :
**http://localhost:3000**

## Vérifications techniques
Si vous souhaitez vérifier les critères de sécurité et d'optimisation appliqués :

- **Poids de l'image (< 200MB) :** `docker images tp1:corrige`
- **Utilisateur sécurisé (node) :** `docker exec app-tp1 whoami`
- **Absence de secrets :** `docker inspect tp1:corrige --format '{{range .Config.Env}}{{println .}}{{end}}'`

## Nettoyage
Pour arrêter et supprimer le conteneur une fois vos tests terminés :
`docker stop app-tp1 && docker rm app-tp1`