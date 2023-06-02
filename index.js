import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import test from "./controllers/test.js";
import routes from "./routes/routes.js";
import vehicle from "./routes/vehicles.js";
import booking from "./routes/booking-seats.js";
import roleAssignment from "./routes/role-assignment.js";
import user from "./routes/users.js";
import createUser from "./controllers/usercontro.js";
import routes from "./routes/users.js";

import createGps from "./routes/gpsRoutes.js";


import routes from "./routes/users.js";


import mongoose from "mongoose";
import messageRoutes from "./routes/messageRoutes.js";
import registrationRouter from "./routes/registrationRouter.js";

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

// app.use("/api/v2", user);
app.use("/api/v2/vehicles", vehicle);
app.use("/api/v2/booking", booking);
app.use("/api/v2/routes", routes);
app.use("/api/v2/role", roleAssignment);
app.use("/api/v2/gps2", createGps);
app.use("/api/v2/messages", messageRoutes);
app.use("/api/v2/user", user);


app.use("/api/v2", user);
// app.use("/server", user);


app.use('/messages', messageRoutes);
app.use('/register', registrationRouter);

app.use("/api/v2", createUser);
// app.use("/server", routes);
app.use("/gps2", createGps);



const port = 5000;



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectMongo();
});
