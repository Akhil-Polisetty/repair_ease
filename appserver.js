
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import RuserModel from "./model/RuserModel.js";

const app = express();
const PORT = 8989;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/test")
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

app.get('/getUsering', (req, res) => {
  RuserModel.find({email_id:"klaus@gmail.com"})
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
