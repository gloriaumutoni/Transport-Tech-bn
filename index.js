import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
// import test from "./controllers/test.js";
import routes from "./routes/routes.js";
import routesAssignment from "./routes/route-assignment.js";

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

app.use("/api/v2/routes", routes);
app.use("/api/v2/assign", routesAssignment);

app.use("/api/v2", createUser);

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectMongo();
});
