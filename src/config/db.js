//

import { Sequelize } from "sequelize";

// --- LOCAL ---
// const db = new Sequelize("countries", "postgres", "2251", {
//  port: 6651,
//  user: "postgres",
//  password: "2251",
//  host: "http://127.0.0.1",
//  database: "countries",
//  dialect: "postgres",
// });

//  --- ONLINE ---
const db = new Sequelize(
 "postgres://countries_udrl_user:g45gjdLAG4O596ysDms7JE20pIQ8kdij@dpg-cime03lgkuvgvhfalq0g-a.oregon-postgres.render.com/countries_udrl"
);

try {
 await db.authenticate();
 console.log("db connected");
} catch (error) {
 console.error("db con error:", error);
}

export default db;
