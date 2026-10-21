# Arborescence et Architecture UI

**Projet :** Plateforme de Réservation en Ligne & Gestion de Flotte (Tourisme & Transport)  

---

## 1. Arborescence des Pages (Sitemap Next.js)

* **Zone Publique / Touriste :**
  * `/` : Page d'accueil (Présentation des services de transport, offres phares)
  * `/flotte` : Liste du parc automobile & circuits disponibles (filtres par date, type de véhicule)
  * `/flotte/[id]` : Fiche détaillée d'un véhicule (caractéristiques, options, tarif)
  * `/login` & `/register` : Authentification des clients

* **Zone Client (Authentifié) :**
  * `/reservation/new` : Formulaire de réservation et choix des options (chauffeur, guide)
  * `/mes-reservations` : Historique et statut des réservations du client

* **Zone d'Administration / Back-Office :**
  * `/admin/dashboard` : Vue d'ensemble (véhicules loués, réservations en attente, revenus)
  * `/admin/flotte` : Gestion CRUD du parc automobile
  * `/admin/reservations` : Validation des réservations et affectation des chauffeurs
  * `/admin/maintenance` : Suivi des révisions et état des véhicules