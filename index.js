import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import createUser from "./controllers/usercontro.js";
import routes from "./routes/users.js";
import createGps from "./controllers/gpsController.js";

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
app.use(express.json());
app.use(cors());

app.use("/api/v2", createUser);
app.use("/server", routes);
app.use("/gps2", createGps);

const port = 3100;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectMongo();
});
