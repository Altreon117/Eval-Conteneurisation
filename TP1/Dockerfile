# 1. Utilisation d'une image allégée (Alpine) pour rester sous les 200MB (Solution Problème 1)
FROM node:18-alpine

# 2. Définition du dossier de travail
WORKDIR /app

# 3. on copie les fichiers de dépendances en premier (Solution Problème 3)
COPY package*.json ./

# 4. Installation des dépendances
RUN npm install

# 5. Copie du reste du code source
COPY . .

# 6. Build de l'application
RUN npm run build

# On donne la propriété de tout le dossier /app à l'utilisateur "node"
RUN chown -R node:node /app

# 7. Exposition du port (à titre informatif pour Docker)
EXPOSE 3000

# 8. On utilise l'utilisateur node pour lancer l'app sans privilèges root (Solution Problème 5)
USER node

# 9. Lancement de l'application
CMD ["node", "dist/index.js"]