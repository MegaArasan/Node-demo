// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import cors from "cors";

import { moviesRouter } from "./routes/Movies.js";
import { userRouter } from "./routes/users.js";
const app = express();
dotenv.config();

// console.log(process.env);
const PORT = process.env.PORT;

// const MONGO_URL = "mongodb://localhost";  // this is for localhost

// to connect online the mongo db
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json()); //to use json anywhere in program

app.use(cors()); //every request in the page is allowed by cors/access by any origin

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect(); //returns promise
  console.log("Mongodb is connected");
  return client;
}

export const client = await createConnection();

app.get("/", (request, response) => {
  response.send("Hello ☁☁☁☁☁");
});

// app.get("/movies", (request, response) => {
//   response.send(movies);
// });

app.use("/movies", moviesRouter);
app.use("/users", userRouter);

app.listen(PORT, () => console.log("App is started in", PORT));
