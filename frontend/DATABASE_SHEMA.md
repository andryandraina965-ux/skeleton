# Modèle & Schéma de la Base de Données

**Projet :** Plateforme Web Vitrine & Catalogue E-Commerce (Honey Group)  
**Technologie recommandée :** PostgreSQL / MySQL (Relationnelle) ou MongoDB

---

## 1. Structure des Tables (Modèle Relational / SQL)

### Table : `users`
Stocke les comptes des utilisateurs (Clients et Administrateurs).
* `id` (STRING / UUID, Clé primaire)
* `name` (STRING) : Nom complet
* `email` (STRING, Unique) : Adresse e-mail de connexion
* `password_hash` (STRING) : Mot de passe haché (Bcrypt)
* `role` (ENUM) : `'CLIENT'` ou `'ADMIN'`
* `created_at` (TIMESTAMP) : Date de création du compte

### Table : `categories`
Organise les produits et confections textiles par catégories (ex. Hommes, Femmes, Uniformes, Sur-mesure).
* `id` (STRING / UUID, Clé primaire)
* `name` (STRING) : Nom de la catégorie
* `slug` (STRING, Unique) : Identifiant d'URL (ex. `uniformes-professionnels`)

### Table : `products`
Gère le catalogue de vêtements et d'articles textiles en stock.
* `id` (STRING / UUID, Clé primaire)
* `name` (STRING) : Nom de l'article
* `description` (TEXT) : Description détaillée du vêtement/tissu
* `price` (FLOAT / DECIMAL) : Prix unitaire
* `category_id` (STRING, Clé étrangère -> `categories.id`)
* `image_url` (STRING) : Lien vers l'image illustrative
* `sizes` (ARRAY / STRING) : Tailles disponibles (ex. `["S", "M", "L", "XL"]`)
* `colors` (ARRAY / STRING) : Couleurs disponibles
* `stock` (INTEGER) : Quantité disponible en stock
* `created_at` (TIMESTAMP)

### Table : `quote_requests`
Stocke les demandes de devis sur-mesure soumises par les clients.
* `id` (STRING / UUID, Clé primaire)
* `client_id` (STRING, Clé étrangère -> `users.id`)
* `textile_details` (TEXT) : Spécifications (type de tissu, coupe, exigences)
* `quantity` (INTEGER) : Nombre de pièces demandées
* `status` (ENUM) : `'PENDING'` (En attente), `'APPROVED'` (Validé), `'REJECTED'` (Refusé)
* `created_at` (TIMESTAMP)

### Table : `orders`
Enregistre les commandes d'articles standard du catalogue.
* `id` (STRING / UUID, Clé primaire)
* `client_id` (STRING, Clé étrangère -> `users.id`)
* `total_amount` (FLOAT / DECIMAL) : Montant total de la commande
* `status` (ENUM) : `'PENDING'`, `'IN_PRODUCTION'`, `'SHIPPED'`, `'DELIVERED'`
* `created_at` (TIMESTAMP)

### Table : `order_items`
Détail des articles contenus dans une commande.
* `id` (STRING / UUID, Clé primaire)
* `order_id` (STRING, Clé étrangère -> `orders.id`)
* `product_id` (STRING, Clé étrangère -> `products.id`)
* `quantity` (INTEGER)
* `unit_price` (FLOAT)