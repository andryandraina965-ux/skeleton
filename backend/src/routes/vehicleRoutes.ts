import { Router, Request, Response } from "express";
import fs from "fs";
import path from "path";

const router = Router();

// Chemin vers le fichier JSON de stockage léger
const dataPath = path.join(__dirname, "../data/vehicles.json");

// Interface TypeScript définissant un Véhicule de la flotte
interface Vehicle {
  id: string;
  registration_number: string;
  brand: string;
  model: string;
  category: "4x4" | "BERLINE" | "MINIBUS" | "BUS";
  capacity: number;
  price_per_day: number;
  status: "AVAILABLE" | "RESERVED" | "MAINTENANCE" | "OUT_OF_SERVICE";
  image_url: string;
}

// Fonction utilitaire pour lire le fichier JSON de manière sécurisée
const getVehicles = (): Vehicle[] => {
  try {
    const jsonData = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Erreur lors de la lecture de vehicles.json:", error);
    return [];
  }
};

// GET /api/vehicles - Récupérer l'ensemble de la flotte
router.get("/", (req: Request, res: Response) => {
  const vehicles = getVehicles();
  res.status(200).json({
    success: true,
    count: vehicles.length,
    data: vehicles,
  });
});

// GET /api/vehicles/:id - Récupérer un véhicule spécifique par son identifiant
router.get("/:id", (req: Request, res: Response) => {
  const vehicles = getVehicles();
  const vehicle = vehicles.find((v: Vehicle) => v.id === req.params.id);

  if (!vehicle) {
    res.status(404).json({
      success: false,
      message: "Véhicule non trouvé.",
    });
    return;
  }

  res.status(200).json({
    success: true,
    data: vehicle,
  });
});

export default router;