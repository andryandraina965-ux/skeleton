const express = require('express');
const cors = require('cors');
const vehicleRoutes = require('./routes/vehicleRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/vehicles', vehicleRoutes);

// Route de santé (Health check)
app.get('/', (req, res) => {
  res.send('API Plateforme Réservation & Flotte de Véhicules en cours d\'exécution.');
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur Backend démarré sur http://localhost:${PORT}`);
});

module.exports = app;