import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import test from "./controllers/test.js";

dotenv.config();
const connectMongo = () => {
  mongoose
    .connect(process.env.MONGODBLINK)
    .then(() => {
      console.log("Database Connected successfully");
    })
    .catch((error) => {
      console.log("Failed to connect to database ", error);
    });
};

const app = express();
app.use(cors());

app.get("/api/v1", test);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectMongo();
});
