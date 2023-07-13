import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Country = db.define("country", {
 name: {
  type: DataTypes.STRING,
  allowNull: true,
 },
 nativeName: {
  type: DataTypes.STRING,
  allowNull: true,
 },
 capital: {
  type: DataTypes.STRING,
  allowNull: true,
 },
 region: {
  type: DataTypes.STRING,
  allowNull: true,
 },
 subRegion: {
  type: DataTypes.STRING,
  allowNull: true,
 },
 population: {
  type: DataTypes.STRING,
  allowNull: true,
 },
 language: {
  type: DataTypes.JSON,
  allowNull: true,
 },
 domen: {
  type: DataTypes.JSON,
  allowNull: true,
 },
 borderCountries: {
  type: DataTypes.JSON,
  allowNull: true,
 },
 flag: {
  type: DataTypes.STRING,
  allowNull: true,
 },
 currency: {
  type: DataTypes.STRING,
  allowNull: true,
 },
});
await Country.sync({ force: true });
export default Country;
