# Cahier des Charges Fonctionnel et Technique

**Projet :** Plateforme Web Vitrine & Catalogue E-Commerce de Confection Textile  
**Entreprise :** Honey Group  
**Auteur :** ANJARANIAINA IDEALIPITIA Andry Andraina Lucas  
**Statut :** Phase 1 – Analyse & Conception  
**Date :** Octobre 2026  

---

## 1. Présentation du Projet & Objectifs

### 1.1 Contexte
Dans le cadre des activités de **Honey Group**, ce projet vise à concevoir et développer une application web complète (full-stack) dédiée à une entreprise de confection textile. L'application combine un site vitrine moderne et un catalogue e-commerce interactif permettant la présentation de collections, la prise de commande et la gestion des demandes de devis sur-mesure.

### 1.2 Objectifs Principaux
* **Vitrine Institutionnelle :** Mettre en valeur le savoir-faire de l'entreprise, ses ateliers et ses services de confection.
* **Catalogue Dynamique :** Présenter les collections textiles et vêtements avec des possibilités avancées de recherche, filtrage et consultation détaillée.
* **Module Devis & Commandes :** Offrir aux clients la possibilité de commander des articles en stock ou de soumettre des demandes de devis pour la confection sur-mesure.
* **Espace d'Administration :** Fournir une interface de gestion centralisée (Back-Office) pour le suivi des articles, des commandes et des demandes clients.

---

## 2. Architecture Technique (Stack du Skeleton)

L'application repose sur la structure de base (Skeleton) validée :

* **Frontend :**
  * Framework : **Next.js 16** (React, TypeScript, App Router, Turbopack)
  * UI / Style : **Tailwind CSS**
  * Client HTTP : **Axios** (avec Hook personnalisé `useFetch` pour la gestion des états de chargement et des erreurs)
* **Backend :**
  * Runtime : **Node.js**
  * Framework : **Express.js** (TypeScript)
* **Environnement & Outils :**
  * Gestion des variables d'environnement via `.env`
  * Versioning avec **Git / GitHub**

---

## 3. Analyse des Acteurs et Rôles

| Rôle | Description | Droits & Accès |
| :--- | :--- | :--- |
| **Visiteur (Anonyme)** | Utilisateur non connecté naviguant sur le site. | Navigation sur les pages vitrines, consultation du catalogue, recherche et filtrage, accès au formulaire de contact. |
| **Client (Authentifié)** | Client disposant d'un compte utilisateur. | Soumission de demandes de devis sur-mesure, gestion du panier, passage de commande, consultation de l'historique. |
| **Administrateur** | Gestionnaire interne Honey Group. | Accès au Dashboard d'administration, gestion CRUD des produits et collections, traitement des devis et suivi des commandes. |

---

## 4. Spécifications Fonctionnelles & User Stories

### 4.1 Module Vitrine & Découverte
* **US-01 (Page d'accueil) :** En tant que *visiteur*, je veux consulter la page d'accueil et les sections vitrines afin de découvrir l'entreprise de confection textile et son savoir-faire.
* **US-02 (Catalogue) :** En tant que *visiteur*, je veux parcourir le catalogue de vêtements et de collections textiles pour connaître les produits proposés.
* **US-03 (Filtres & Recherche) :** En tant que *visiteur*, je veux filtrer les articles par catégorie, taille, couleur ou type de tissu afin de trouver rapidement un produit précis.
* **US-04 (Fiche Produit) :** En tant que *visiteur*, je veux ouvrir la fiche détaillée d'un vêtement pour consulter ses photos, sa description, ses tailles disponibles et son prix.

### 4.2 Module Commande & Devis Sur-Mesure
* **US-05 (Demande de Devis) :** En tant que *client*, je veux remplir un formulaire de demande de devis personnalisé (choix des tissus, quantités, spécifications de confection) afin d'obtenir une proposition financière sur-mesure.
* **US-06 (Gestion du Panier) :** En tant que *client*, je veux ajouter des articles standard au panier et en modifier la quantité avant de valider mon choix.
* **US-07 (Passage de Commande) :** En tant que *client authentifié*, je veux valider mon panier et renseigner mes informations de livraison pour finaliser ma commande.

### 4.3 Module Back-Office & Administration
* **US-08 (Gestion du Catalogue - CRUD) :** En tant qu'*administrateur*, je veux ajouter, modifier ou supprimer des vêtements et collections du catalogue pour maintenir les articles à jour.
* **US-09 (Traitement des Devis) :** En tant qu'*administrateur*, je veux consulter, traiter et mettre à jour le statut des demandes de devis reçues.
* **US-10 (Suivi des Commandes) :** En tant qu'*administrateur*, je veux suivre les commandes enregistrées et modifier leur état (*En attente*, *En cours de confection*, *Expédiée*, *Livrée*).

---

## 5. Exigences Non Fonctionnelles

* **Performance :** Temps de chargement rapide des pages grâce au rendu hybride de Next.js (SSR / SSG / ISR).
* **Ergonomie & Design :** Interface utilisateur fluide, moderne et totalement responsive (mobile, tablette, desktop) basée sur Tailwind CSS.
* **Sécurité :** Sécurisation des routes API sensibles, hachage des mots de passe et gestion des tokens d'authentification (JWT).
* **Maintenabilité :** Respect d'une architecture de code propre et modulaire, séparant la logique frontend et backend.

---

## 6. Planning Prévisionnel (3 Mois)

* **Mois 1 (Phase 1) :** Validation du Skeleton, rédaction du Cahier des charges, modélisation UML (Cas d'utilisation, MCD/MLD, Séquence) et maquettage UI.
* **Mois 2 (Phase 2) :** Développement du catalogue dynamique, des pages vitrines, des API REST Node.js/Express et des formulaires de commande/devis.
* **Mois 3 (Phase 3) :** Intégration du Back-Office administrateur, phase de tests (recette), correction de bugs et finalisation des livrables de stage.
