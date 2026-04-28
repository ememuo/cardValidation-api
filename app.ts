import express from "express";
import type { Application, Request, Response, NextFunction } from "express";
import router from "./routes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const app: Application = express();

app.use(express.json());
app.use("/api", router);

app.use(notFound);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

export default app;
