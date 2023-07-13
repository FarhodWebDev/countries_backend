import { Sequelize } from "sequelize";

const db = new Sequelize("countries", "postgres", "2251", {
 port: 6651,
 user: "postgres",
 password: "2251",
 host: "http://127.0.0.1",
 database: "countries",
 dialect: "postgres",
});

try {
 await db.authenticate();
 console.log("db connected");
} catch (error) {
 console.error("db con error:", error);
}

export default db;
