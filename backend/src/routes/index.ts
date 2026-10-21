import { Router } from "express";
import { getHealth } from "../controllers/health.controller";
import { getItems } from "../controllers/items.controller";
import { receiveWebhook } from "../controllers/webhook.controller";

const router = Router();

router.get("/health", getHealth);
router.get("/items", getItems);
router.post("/webhooks/test", receiveWebhook);

export default router;
import vehicleRoutes from "./vehicleRoutes";

// Ajouter cette ligne sous vos autres routes
router.use("/vehicles", vehicleRoutes);