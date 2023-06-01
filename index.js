import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// import test from "./controllers/test.js";
import routes from "./routes/routes.js";

import vehicle from "./routes/vehicles.js";
import roleAssignment from "./routes/role-assignment.js";
import user from "./routes/users.js";
import createUser from "./controllers/usercontro.js";
import createGps from "./controllers/gpsController.js";
import mongoose from "mongoose";


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

app.use("/api/v2/vehicles", vehicle);
app.use("/api/v2/routes", routes);
app.use("/api/v2/role", roleAssignment);

app.use("/api/v2", user);
// app.use("/server", user);
app.use("/api/v2", createUser);
// app.use("/server", routes);
app.use("/gps2", createGps);

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectMongo();
});
