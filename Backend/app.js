import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
dotenv.config({ path: "./.env" });
import short_url from "./src/routes/shorturl.route.js";
import { redirectFromShortURL } from "./src/controller/shorturl.controller.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/create", short_url); //API for creating short url

app.get("/:id", redirectFromShortURL); //API for redirecting

app.listen(3000, () => {
  connectDB();
  console.log("server is running on http://localhost:3000");
});
