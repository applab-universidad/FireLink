// src/index.js
import express from "express";
import { sequelize } from "./db/index.js";
import { Cuartel } from "./models/Cuartel.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("🔥 FireLink API funcionando"));

const PORT = process.env.PORT || 3001;
sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => console.log(`Servidor corriendo en ${PORT}`));
});
