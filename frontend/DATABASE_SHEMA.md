# Schéma de la Base de Données (Relational Model)

**Projet :** Gestion de Flotte & Réservation (Tourisme & Transport)  

---

## 1. Entités et Tables

### Table `users`
* `id` (VARCHAR/UUID, PK)
* `full_name` (VARCHAR)
* `email` (VARCHAR, Unique)
* `password_hash` (VARCHAR)
* `phone` (VARCHAR)
* `role` (ENUM: 'CLIENT', 'ADMIN', 'DRIVER')
* `created_at` (TIMESTAMP)

### Table `vehicles`
* `id` (VARCHAR/UUID, PK)
* `registration_number` (VARCHAR, Unique) -- Immatriculation
* `brand` (VARCHAR) -- Marque (ex: Toyota, Hyundai)
* `model` (VARCHAR) -- Modèle (ex: Land Cruiser, H1)
* `category` (ENUM: '4x4', 'BERLINE', 'MINIBUS', 'BUS')
* `capacity` (INT) -- Nombre de places
* `price_per_day` (DECIMAL)
* `status` (ENUM: 'AVAILABLE', 'RESERVED', 'MAINTENANCE', 'OUT_OF_SERVICE')
* `image_url` (VARCHAR)

### Table `reservations`
* `id` (VARCHAR/UUID, PK)
* `client_id` (FK -> `users.id`)
* `vehicle_id` (FK -> `vehicles.id`)
* `driver_id` (FK -> `users.id`, Nullable)
* `start_date` (DATE)
* `end_date` (DATE)
* `pickup_location` (VARCHAR)
* `destination` (VARCHAR)
* `total_price` (DECIMAL)
* `status` (ENUM: 'PENDING', 'CONFIRMED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED')
* `created_at` (TIMESTAMP)

### Table `maintenance_logs`
* `id` (VARCHAR/UUID, PK)
* `vehicle_id` (FK -> `vehicles.id`)
* `description` (TEXT)
* `cost` (DECIMAL)
* `maintenance_date` (DATE)
* `status` (ENUM: 'SCHEDULED', 'COMPLETED')