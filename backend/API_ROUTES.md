# Contrat de l'API REST (Express.js)

**Projet :** API Plateforme Réservation & Gestion de Flotte  

---

## 1. Authentification (`/api/auth`)
* `POST /api/auth/register` : Créer un compte client
* `POST /api/auth/login` : Connexion et génération du Token JWT
* `GET /api/auth/me` : Obtenir le profil de l'utilisateur connecté

## 2. Flotte & Véhicules (`/api/vehicles`)
* `GET /api/vehicles` : Obtenir la liste des véhicules (avec filtres : dates, catégorie, capacité)
* `GET /api/vehicles/:id` : Obtenir les détails d'un véhicule
* `POST /api/vehicles` *(Admin)* : Ajouter un nouveau véhicule
* `PUT /api/vehicles/:id` *(Admin)* : Modifier un véhicule
* `DELETE /api/vehicles/:id` *(Admin)* : Supprimer/Désactiver un véhicule

## 3. Réservations (`/api/reservations`)
* `POST /api/reservations` *(Client)* : Créer une demande de réservation
* `GET /api/reservations/my-reservations` *(Client)* : Historique des réservations du client
* `GET /api/reservations` *(Admin)* : Liste globale de toutes les réservations
* `PUT /api/reservations/:id/status` *(Admin)* : Mettre à jour l'état (Valider, Annuler, Terminer)
* `PUT /api/reservations/:id/assign-driver` *(Admin)* : Assigner un chauffeur à une réservation

## 4. Maintenance (`/api/maintenance`) *(Admin)*
* `GET /api/maintenance/:vehicleId` : Historique des maintenances d'un véhicule
* `POST /api/maintenance` : Programmer ou enregistrer une maintenance