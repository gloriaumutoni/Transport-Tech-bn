import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import createUser from "./controllers/usercontro.js";

dotenv.config();
const connectMongo = () => {
  mongoose
    .connect(process.env.MONGODB_LINK)
    .then(() => {
      console.log("Database Connected successfully");
    })
    .catch((error) => {
      console.log("Failed to connect to database ", error);
    });
};

const app = express();
app.use(cors());

app.use("/api/v2", createUser);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectMongo();
});
