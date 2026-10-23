# Skeleton

Squelette d'application full-stack : architecture modulaire, layout global, composants réutilisables et connexion API.

## Stack

- **Frontend** : Next.js, React, TypeScript, Tailwind CSS, Axios
- **Backend** : Node.js, Express, TypeScript

## Structure

```
Skeleton/
├── frontend/          Application Next.js
│   ├── app/           Pages (dashboard, items, settings)
│   ├── components/
│   │   ├── layout/    Navbar, Sidebar
│   │   └── ui/        Button, Card, Input
│   ├── hooks/         useFetch (chargement et erreurs)
│   └── lib/           Client API (Axios)
└── backend/           API Express
    └── src/
        ├── config/        Variables d'environnement
        ├── controllers/   Logique des routes
        ├── middlewares/   Erreurs et 404
        ├── routes/        Déclaration des routes
        └── index.ts       Point d'entrée
```

## Prérequis

- Node.js 20 ou plus
- npm
- Git

## Installation

```bash
git clone https://github.com/andryandraina965-ux/skeleton.git
cd skeleton
```

### Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

L'API démarre sur `http://localhost:5000`.

### Frontend

Dans un second terminal :

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

L'application démarre sur `http://localhost:3000`.

Sous Windows PowerShell, remplace `cp` par `Copy-Item`.

## Variables d'environnement

| Fichier | Variable | Valeur par défaut |
|---|---|---|
| `backend/.env` | `PORT` | `5000` |
| `backend/.env` | `CORS_ORIGIN` | `http://localhost:3000` |
| `frontend/.env.local` | `NEXT_PUBLIC_API_URL` | `http://localhost:5000/api` |

## Routes de l'API

| Méthode | Route | Description |
|---|---|---|
| GET | `/api/health` | Vérifie que l'API fonctionne |
| GET | `/api/items` | Liste d'exemple |
| POST | `/api/webhooks/test` | Réception d'un webhook de test |

## Fonctionnalités du squelette

- Layout global : Navbar, Sidebar et zone de contenu
- Composants réutilisables : Button (état de chargement), Card, Input (message d'erreur)
- Hook `useFetch` avec gestion du chargement et des erreurs
- Gestion centralisée des erreurs côté API