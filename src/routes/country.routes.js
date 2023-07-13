//

import express from "express";
import Country from "../models/countryModel.js";

const countryRouter = express.Router();

countryRouter.get("/", async (req, res) => {
 try {
  const country = await Country.findAll();
  res.send(country);
 } catch (error) {
  res.send(error.message);
 }
});

countryRouter.get("/name/:name", async (req, res) => {
 try {
  const country = await Country.findOne({
   where: { name: req.params.name },
  });

  res.send(country);
 } catch (error) {
  res.status(400).send(error);
 }
});

countryRouter.get("/currency/:cop", async (req, res) => {
 try {
  const country = await Country.findOne({
   where: { currency: req.params.cop },
  });
  res.send(country);
  //
 } catch (error) {
  res.status(400).send(error.message);
 }
});

countryRouter.get("/lang/:lang", async (req, res) => {
 try {
  const country = await Country.findOne({
   where: { language: req.params.lang },
  });

  res.send(country);
  //
 } catch (error) {
  res.status(400).send(error.message);
 }
});

countryRouter.get("/capital/:cap", async (req, res) => {
 try {
  const country = await Country.findOne({
   where: { capital: req.params.cap },
  });

  res.send(country);
  //
 } catch (error) {
  res.status(400).send(error.message);
 }
});

countryRouter.get("/region/:reg", async (req, res) => {
 try {
  const country = await Country.findAll({
   where: { region: req.params.reg },
  });

  res.send(country);
  //
 } catch (error) {
  res.status(400).send(error.message);
 }
});

export default countryRouter;
