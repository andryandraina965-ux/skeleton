# Cahier des Charges Fonctionnel

**Projet :** Plateforme de Réservation en Ligne et Gestion de Flotte (Tourisme & Transport)  
**Auteur :** ANJARANIAINA IDEALIPITIA Andry Andraina Lucas  
**Entreprise / Contexte :** Honey Group  

---

## 1. Présentation du Projet
L'objectif du projet est de concevoir et développer une plateforme web complète permettant :
1. **Aux clients/touristes :** De consulter les offres de transport/circuits touristiques, vérifier les disponibilités de véhicules ou circuits, et effectuer des réservations en ligne.
2. **À l'équipe administrative / Gestionnaires :** De gérer l'ensemble de la flotte de véhicules (état, maintenance, disponibilité), d'affecter les chauffeurs/guides, et de suivre l'état des réservations et des paiements.

---

## 2. Acteurs du Système
* **Visiteur (Non authentifié) :** Consacre sa navigation à la consultation des services de transport, véhicules disponibles, circuits touristiques et tarifs.
* **Client / Touriste (Authentifié) :** Peut effectuer une réservation, consulter l'historique de ses réservations et télécharger ses confirmations/billets.
* **Gestionnaire / Administrateur :** Gère la flotte de véhicules, l'attribution des chauffeurs, la validation des réservations et le suivi de maintenance.

---

## 3. Exigences Fonctionnelles (User Stories)

### Module A : Vitrine & Réservation Client
* **US1 - Recherche & Filtres :** En tant que client, je souhaite rechercher un véhicule ou un circuit par date, type de transport (Berline, 4x4, Minibus) et destination.
* **US2 - Réservation en ligne :** En tant que client, je souhaite réserver un véhicule/circuit avec options (chauffeur, guide touristique, équipements) pour une période donnée.
* **US3 - Espace Client :** En tant que client, je veux consulter mes réservations à venir et leur statut (En attente, Confirmée, Terminée, Annulée).

### Module B : Gestion de Flotte & Administration
* **US4 - Gestion du Parc Automobile (CRUD) :** En tant qu'administrateur, je veux ajouter, modifier, désactiver un véhicule (immatriculation, modèle, capacité, tarif/jour, état de disponibilité).
* **US5 - Gestion des Chauffeurs & Affectation :** En tant qu'administrateur, je veux assigner un chauffeur disponible à un véhicule ou une réservation.
* **US6 - Suivi des Réservations :** En tant qu'administrateur, je souhaite valider ou refuser les demandes de réservation et mettre à jour leur statut.
* **US7 - Maintenance Flotte :** En tant qu'administrateur, je veux enregistrer le suivi de maintenance des véhicules (révision, contrôle technique, indisponibilité).