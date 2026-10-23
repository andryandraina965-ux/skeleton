import { Request, Response } from "express";

export const receiveWebhook = (req: Request, res: Response) => {
  console.log("Webhook reçu :", req.body);
  res.status(200).json({ received: true });
};
