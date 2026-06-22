# TP1 - Reparation d'une image Docker cassee

*Note : Ce projet est complementaire au document Word `tp1-rendu` fait dans le cadre du rendu.*

## Contexte du projet
L'objectif etait de diagnostiquer et de reecrire completement un Dockerfile inadapte a la production, sans modifier le code source de l'application Node.js.

## Objectifs atteints
* Poids de l'image reduit a moins de 200 MB.
* Aucun secret (mots de passe, cles) n'est present dans l'environnement.
* Le conteneur s'execute sans les droits root (utilisateur `node`).
* Le cache Docker a ete optimise.
* Fichier `.dockerignore` ajoute.

## Lancement

1. Construire l'image :
`docker build -t tp1:corrige .`

2. Lancer l'application :
`docker run -d --name app-tp1 -p 3000:3000 tp1:corrige`
Accessible sur **http://localhost:3000**.

## Verifications
* Verifier la taille : `docker images tp1:corrige`
* Verifier l'utilisateur : `docker run --rm tp1:corrige whoami`
* Verifier l'absence de secrets : `docker inspect tp1:corrige --format '{{range .Config.Env}}{{println .}}{{end}}' | grep -iE "API_KEY|DB_PASSWORD|DB_HOST"`

## Nettoyage
`docker stop app-tp1 && docker rm app-tp1`