const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Chemin vers le fichier JSON
const dataPath = path.join(__dirname, '../data/vehicles.json');

// Fonction utilitaire pour lire le fichier JSON
const getVehicles = () => {
  try {
    const jsonData = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Erreur lors de la lecture de vehicles.json:", error);
    return [];
  }
};

// GET /api/vehicles - Récupérer tous les véhicules
router.get('/', (req, res) => {
  const vehicles = getVehicles();
  res.status(200).json({
    success: true,
    count: vehicles.length,
    data: vehicles
  });
});

// GET /api/vehicles/:id - Récupérer un véhicule par son ID
router.get('/:id', (req, res) => {
  const vehicles = getVehicles();
  const vehicle = vehicles.find(v => v.id === req.params.id);

  if (!vehicle) {
    return res.status(404).json({
      success: false,
      message: "Véhicule non trouvé."
    });
  }

  res.status(200).json({
    success: true,
    data: vehicle
  });
});

module.exports = router;