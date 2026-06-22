# TP2 - Docker Compose : Stack multi-services

## Contexte
L'objectif de ce TP est de relier trois services (Frontend web, API Node.js, et une base de donnees PostgreSQL) via Docker Compose. Une interface d'administration Adminer a egalement ete ajoutee.

## Configuration initiale
Creez un fichier nomme `.env` a la racine du dossier `tp2/` et ajoutez-y la variable suivante :
`DB_PASSWORD=VotreMotDePasseSecurise`

## Deploiement de l'infrastructure
Construisez et lancez l'infrastructure complete :
`docker compose up --build`

## Verifications

**Etape 1 - Lancement et acces de base**
1. Ouvrir le frontend : Allez sur http://localhost:8080 (La page doit s'afficher).
2. Tester l'API : Allez sur http://localhost:3000/health (Attendu : `{"status":"ok"}`).
3. Tester la communication API/BDD : Envoyer un message depuis le frontend, il doit apparaitre dans la liste.

**Etape 2a - Persistance des donnees (Volumes)**
1. Ajouter 3 messages depuis le frontend.
2. Eteindre l'infrastructure : 
`docker compose down`
3. Relancer l'infrastructure en arriere-plan : 
`docker compose up -d`
4. Ouvrir http://localhost:8080 : Les messages doivent toujours etre la.

**Etape 2b - Fichier .env pour les secrets**
Aucun mot de passe ne doit apparaitre en clair dans le fichier de configuration.
`grep -i password docker-compose.yml`
*(Attendu : uniquement des references comme `${DB_PASSWORD}`, jamais la valeur reelle).*

**Etape 3 - Service tiers (Adminer)**
1. Ouvrir l'interface : Allez sur http://localhost:8081 (L'interface Adminer s'affiche).
2. Remplir les parametres de connexion :
   * Systeme : PostgreSQL
   * Serveur : database
   * Utilisateur : (la valeur de DB_USER)
   * Mot de passe : (la valeur de DB_PASSWORD)
   * Base : (la valeur de DB_NAME)

## Nettoyage
Pour eteindre proprement la stack :
`docker compose down`