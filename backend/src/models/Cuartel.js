import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Cuartel = sequelize.define("Cuartel", {
  nombre: { type: DataTypes.STRING, allowNull: false },
  ubicacion: { type: DataTypes.STRING },
});
