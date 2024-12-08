import express from "express";
import container from "./inversify/container";
import TYPES from "./inversify/types";
import { UserController } from "./controllers/UserController";
import "reflect-metadata"; // Reflect Metadata Kütüphanesi
import mongoose from "mongoose";



const app = express();



import userRoutes from "./routes/user.routes";
app.use(express.json());
app.use("/users", userRoutes);



/**
 //!postgresql connection
import {connectDB} from '../src/config/postgresql.connection'
connectDB()

 */


//!mongodb connection
import { mongoDbConnection } from "./config/mongodb.connection";
mongoDbConnection()





const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));



export default app;
