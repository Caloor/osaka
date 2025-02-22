# Restaurant Chain Website

## Installation

### Prérequis
- Node.js (version LTS recommandée)
- Docker et Docker Compose (pour l'environnement conteneurisé)

### Installation locale (développement)
1. Cloner le projet
```bash
git clone [url-du-projet]
cd osaka
```

2. Donner les droits d'exécution au script
```bash
chmod +x docker-start.sh
```

3. Installer les dépendances
```bash
npm install
```

4. Lancer l'application en mode développement
```bash
npm run dev
```

### Installation avec Docker
1. Donner les droits d'exécution au script
```bash
chmod +x docker-start.sh
```

2. Construire et démarrer les conteneurs
```bash
./o build
```

L'application sera accessible à :
- Mode développement : http://localhost:3000
- Mode Docker : http://localhost:3000

## Scripts disponibles

- `npm run dev` : Lance l'application en mode développement
- `npm run build` : Construit l'application pour la production
- `npm start` : Lance l'application en mode production
- `./docker-start.sh build` : Construit et démarre les conteneurs Docker
- `./docker-start.sh up` : Démarre les conteneurs Docker
- `./docker-start.sh down` : Arrête les conteneurs Docker
- `./docker-start.sh logs` : Affiche les logs des conteneurs
