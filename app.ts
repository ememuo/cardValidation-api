import express from "express";
import type { Application } from "express";

const app: Application = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

export default app;
