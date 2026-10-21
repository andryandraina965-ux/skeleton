# Diagrammes UML – Conception du Projet

**Projet :** Plateforme Web Vitrine & Catalogue E-Commerce (Honey Group)  
**Auteur :** ANJARANIAINA IDEALIPITIA Andry Andraina Lucas  

---

## 1. Diagramme des Cas d'Utilisation (Use Case Diagram)

```mermaid
usecaseDiagram
    actor "Visiteur (Anonyme)" as Visitor
    actor "Client (Authentifié)" as Client
    actor "Administrateur" as Admin

    package "Plateforme Confection Textile" {
        usecase "Consulter la vitrine & le catalogue" as UC_Catalog
        usecase "Filtrer & Rechercher des vêtements" as UC_Filter
        usecase "Créer un compte / Se connecter" as UC_Auth
        usecase "Soumettre un devis sur-mesure" as UC_Quote
        usecase "Passer une commande" as UC_Order
        usecase "Gérer le catalogue (CRUD)" as UC_Manage_Products
        usecase "Traiter les devis clients" as UC_Manage_Quotes
        usecase "Suivre l'état des commandes" as UC_Manage_Orders
    }

    Visitor --> UC_Catalog
    Visitor --> UC_Filter
    Visitor --> UC_Auth

    Client --|> Visitor
    Client --> UC_Quote
    Client --> UC_Order

    Admin --> UC_Manage_Products
    Admin --> UC_Manage_Quotes
    Admin --> UC_Manage_Orders
    classDiagram
    class User {
        +String id
        +String name
        +String email
        +String passwordHash
        +Role role
        +register()
        +login()
    }

    class Category {
        +String id
        +String name
        +String slug
    }

    class Product {
        +String id
        +String name
        +String description
        +Float price
        +String categoryId
        +String imageUrl
        +List~String~ sizes
        +Int stock
    }

    class QuoteRequest {
        +String id
        +String clientId
        +String textileDetails
        +Int quantity
        +Status status
        +submitQuote()
    }

    class Order {
        +String id
        +String clientId
        +Float totalAmount
        +Status status
        +createOrder()
    }

    Category "1" -- "*" Product : contient
    User "1" -- "*" QuoteRequest : soumet
    User "1" -- "*" Order : passe
    sequenceDiagram
    autonumber
    actor Client
    participant Frontend as Frontend (Next.js)
    participant Backend as Backend (Express API)
    participant Database as Base de Données

    Client->>Frontend: Remplit le formulaire de devis sur-mesure
    Frontend->>Frontend: Validation locale des champs
    Frontend->>Backend: POST /api/quotes (avec Token JWT + Données)
    Backend->>Backend: Vérification du Token & Autorisation
    Backend->>Database: INSERT INTO quote_requests
    Database-->>Backend: Confirmation d'enregistrement
    Backend-->>Frontend: Réponse HTTP 201 Created (Devis enregistré)
    Frontend-->>Client: Message de confirmation à l'écran
    ---

### 2. Le Maquettage / Wireframes (Arborescence UI)

Pour finir, il est très utile de formaliser l'arborescence des pages du site. Vous pouvez créer un fichier **`ARCHITECTURE_UI.md`** à la racine :

```markdown
# Arborescence et Maquettage UI

## 1. Arborescence des Pages (Sitemap)

* **Zone Publique (Visiteur / Client) :**
  * `/` : Page d'accueil (Présentation entreprise & savoir-faire Honey Group)
  * `/catalogue` : Liste complète des vêtements & confections textiles (avec filtres)
  * `/catalogue/[id]` : Fiche détaillée d'un vêtement
  * `/devis` : Formulaire de demande de confection sur-mesure
  * `/panier` : Gestion des articles et validation de commande
  * `/login` & `/register` : Authentification

* **Zone d'Administration (Back-Office) :**
  * `/dashboard` : Tableau de bord synthétique
  * `/dashboard/products` : Gestion CRUD du catalogue
  * `/dashboard/quotes` : Liste et validation des demandes de devis
  * `/dashboard/orders` : Suivi et mise à jour du statut des commandes