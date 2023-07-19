import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import allApiRoutes from "./api";

const PORT = 3001 || process.env.PORT;

const server = express();
server.use(express.json());

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
    mongoose.connection.on("open", () => {
        console.log("Connected to MongoDB");
    });
    mongoose.connection.on("error", (err) => {
        console.error("Error connecting to MongoDB: \n", err);
    });
} else {
    console.error(
        "Cannot connect to database: env variable MONGODB_URI is not defined."
    );
}

server.use("/api", allApiRoutes);

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
