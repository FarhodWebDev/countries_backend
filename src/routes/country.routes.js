//

import express from "express";
// import Country from "../models/countryModel.js";
import db from "../config/db.js";

const countryRouter = express.Router();

const results = await db.query("SELECT * FROM countries", {
 type: db.QueryTypes.SELECT,
});

countryRouter.get("/", async (req, res) => {
 try {
  res.status(200).send(results);
  //
 } catch (error) {
  res.status(400).send(error.message);
 }
});

countryRouter.get("/name/:name", async (req, res) => {
 try {
  const country = results.filter((obj) => {
   return obj.name.toLowerCase().includes(req.params.name);
  });
  res.send(country);
  //
 } catch (error) {
  res.status(400).send(error.message);
 }
});

countryRouter.get("/capital/:capital", async (req, res) => {
 try {
  const country = results.filter((obj) => {
   return obj.capital.toLowerCase().includes(req.params.capital);
  });
  res.send(country);
  //
 } catch (error) {
  res.status(400).send(error.message);
 }
});

countryRouter.get("/currency/:cur", async (req, res) => {
 try {
  const country = results.filter((obj) => {
   return obj.currency
    ? obj.currency.toLowerCase().includes(req.params.cur)
    : null;
  });
  res.send(country);
  //
 } catch (error) {
  res.status(400).send({ ...error });
 }
});

countryRouter.get("/region/:region", async (req, res) => {
 try {
  const country = results.filter((obj) => {
   return obj.region.toLowerCase().includes(req.params.region);
  });
  res.send(country);
  //
 } catch (error) {
  res.status(400).send(error.message);
 }
});

export default countryRouter;
