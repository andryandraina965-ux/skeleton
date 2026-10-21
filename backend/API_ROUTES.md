# Spécification des Endpoints API REST (Express.js)

**Base URL :** `http://localhost:5000/api` (ou port configuré dans `.env`)

---

## 1. Authentification & Utilisateurs (`/api/auth`)

| Méthode | Route | Description | Accès | Body Requis |
| :--- | :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Inscription d'un nouveau client | Public | `{ name, email, password }` |
| `POST` | `/api/auth/login` | Connexion et génération du Token JWT | Public | `{ email, password }` |
| `GET` | `/api/auth/me` | Récupérer le profil de l'utilisateur connecté | Authentifié | Header: `Authorization: Bearer <token>` |

---

## 2. Catalogue & Produits (`/api/products`)

| Méthode | Route | Description | Accès | Query / Body |
| :--- | :--- | :--- | :--- | :--- |
| `GET` | `/api/products` | Récupérer tous les vêtements (avec filtres) | Public | Params: `?category=...&search=...` |
| `GET` | `/api/products/:id` | Obtenir les détails d'un vêtement précis | Public | - |
| `POST` | `/api/products` | Ajouter un nouveau produit au catalogue | Admin | `{ name, description, price, category_id, imageUrl, sizes, stock }` |
| `PUT` | `/api/products/:id` | Modifier un produit existant | Admin | `{ name, price, stock, ... }` |
| `DELETE`| `/api/products/:id` | Supprimer un produit du catalogue | Admin | - |

---

## 3. Demandes de Devis Sur-Mesure (`/api/quotes`)

| Méthode | Route | Description | Accès | Body Requis |
| :--- | :--- | :--- | :--- | :--- |
| `POST` | `/api/quotes` | Soumettre une demande de devis sur-mesure | Client | `{ textileDetails, quantity }` |
| `GET` | `/api/quotes/my-quotes` | Voir ses propres demandes de devis | Client | - |
| `GET` | `/api/quotes` | Lister toutes les demandes reçues | Admin | - |
| `PATCH` | `/api/quotes/:id/status` | Valider ou refuser un devis | Admin | `{ status: "APPROVED" \| "REJECTED" }` |

---

## 4. Commandes (`/api/orders`)

| Méthode | Route | Description | Accès | Body Requis |
| :--- | :--- | :--- | :--- | :--- |
| `POST` | `/api/orders` | Enregistrer une nouvelle commande | Client | `{ items: [{ productId, quantity }], totalAmount }` |
| `GET` | `/api/orders/my-orders` | Consulter l'historique de ses commandes | Client | - |
| `GET` | `/api/orders` | Voir l'ensemble des commandes clients | Admin | - |
| `PATCH` | `/api/orders/:id/status` | Changer le statut de la commande | Admin | `{ status: "IN_PRODUCTION" \| "DELIVERED" }` |