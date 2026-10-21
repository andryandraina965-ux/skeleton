# Diagrammes UML – Conception du Projet

**Projet :** Plateforme de Réservation en Ligne & Gestion de Flotte (Tourisme & Transport)  
**Auteur :** ANJARANIAINA IDEALIPITIA Andry Andraina Lucas  

---

## 1. Diagramme des Cas d'Utilisation (Use Case Diagram)

```mermaid
usecaseDiagram
    actor "Touriste / Visiteur" as Visitor
    actor "Client Authentifié" as Client
    actor "Gestionnaire / Admin" as Admin

    package "Plateforme Tourisme & Gestion de Flotte" {
        usecase "Consulter les véhicules & circuits" as UC_Search
        usecase "S'authentifier" as UC_Auth
        usecase "Réserver un véhicule / circuit" as UC_Book
        usecase "Consulter mes réservations" as UC_MyBookings
        usecase "Gérer le parc de véhicules (CRUD)" as UC_Manage_Fleet
        usecase "Traiter & Valider les réservations" as UC_Manage_Bookings
        usecase "Affecter les chauffeurs" as UC_Assign_Driver
        usecase "Suivre la maintenance des véhicules" as UC_Maintenance
    }

    Visitor --> UC_Search
    Visitor --> UC_Auth

    Client --|> Visitor
    Client --> UC_Book
    Client --> UC_MyBookings

    Admin --> UC_Manage_Fleet
    Admin --> UC_Manage_Bookings
    Admin --> UC_Assign_Driver
    Admin --> UC_Maintenance
```

---

## 2. Diagramme de Classes (MCD)

```mermaid
classDiagram
    class User {
        +String id
        +String fullName
        +String email
        +String passwordHash
        +Role role
        +register()
        +login()
    }

    class Vehicle {
        +String id
        +String registrationNumber
        +String brand
        +String model
        +Category category
        +Int capacity
        +Float pricePerDay
        +VehicleStatus status
    }

    class Reservation {
        +String id
        +String clientId
        +String vehicleId
        +String driverId
        +Date startDate
        +Date endDate
        +Float totalPrice
        +ReservationStatus status
        +createReservation()
    }

    class MaintenanceLog {
        +String id
        +String vehicleId
        +String description
        +Float cost
        +Date maintenanceDate
    }

    User "1" -- "*" Reservation : effectue (Client)
    User "1" -- "*" Reservation : conduit (Driver)
    Vehicle "1" -- "*" Reservation : est réservé
    Vehicle "1" -- "*" MaintenanceLog : subit
```

---

## 3. Diagramme de Séquence (Effectuer une Réservation de Véhicule)

```mermaid
sequenceDiagram
    autonumber
    actor Client
    participant Frontend as Frontend (Next.js)
    participant Backend as Backend (Express API)
    participant Database as Base de Données

    Client->>Frontend: Sélectionne un véhicule, dates et options
    Frontend->>Frontend: Vérification locale du formulaire
    Frontend->>Backend: POST /api/reservations (JWT + Détails)
    Backend->>Database: Vérifier disponibilité du véhicule pour les dates
    Database-->>Backend: Véhicule disponible
    Backend->>Database: INSERT INTO reservations (Status = PENDING)
    Database-->>Backend: Confirmation insertion
    Backend-->>Frontend: HTTP 201 Created (Réservation enregistrée)
    Frontend-->>Client: Notification de confirmation & récapitulatif
```