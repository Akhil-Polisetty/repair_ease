import express from "express";
import cors from "cors";
import mongoose from "mongoose";

let users, db;

let isConnected = false;

const app = express();
app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "PUT", "POST", "DELETE"],
      credentials: true,
    })
  );
  app.use(express.json());

  const connectToDb = async () => {
    try {
      if (!isConnected) {
        await mongoose.connect("mongodb://localhost:27017/RepairEase");
        console.log("connection established");
        db = mongoose.connection.db;
        users = db.collection("ruser");
        isConnected = true;
      }
  
      if (db) {
        console.log("DB present");
      } else {
        console.log("DB is absent");
      }
      return;
    } catch (error) {
      console.log("Connection not established due to ", error);
    }
  };
  app.listen(7000, () => {
    console.log("Server running on port 7000");
  });



