import express from "express";
import Country from "./models/countryModel.js";
import countryRouter from "./routes/country.routes.js";
import fetch from "node-fetch";

const app = express();

const port = process.env.PORT || 8864;

app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
 res.send("Welcome to World!");
});

app.use("/countries", countryRouter);

let data = [];

try {
 const req = await fetch("https://restcountries.com/v3.1/all");
 data = await req.json();
} catch (e) {
 console.log(e);
}

await data?.forEach((item) => {
 const {
  name,
  capital,
  currencies,
  region,
  subregion,
  languages,
  flags,
  population,
  borders,
 } = item;
 try {
  Country.create({
   name: name.common,
   capital: capital ? capital[0] : null,
   region: region,
   subRegion: subregion,
   flag: flags.png,
   population: population,
   nativeName: name?.nativeName && Object.values(name.nativeName)[0]?.common,
   currency: currencies && Object.values(currencies)[0]?.name,
   language: languages && Object.values(languages),
   borderCountries: borders,
  });
 } catch (error) {
  console.log(error);
 }
});

app.listen(port, () => {
 console.log("server is running...");
});
