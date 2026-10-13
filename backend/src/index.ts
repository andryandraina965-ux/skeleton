import express from "express";
import cors from "cors";
import { env } from "./config/env";
import routes from "./routes";
import { errorHandler, notFound } from "./middlewares/errorHandler";

const app = express();

app.use(cors({ origin: env.corsOrigin }));
app.use(express.json());
app.use("/api", routes);
app.use(notFound);
app.use(errorHandler);

app.listen(env.port, () => {
  console.log(`API disponible sur http://localhost:${env.port}`);
});
