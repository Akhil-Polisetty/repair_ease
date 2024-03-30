// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";

// // import UserModel from "./model/UserModel.js";
// import UserModel from "./model/UserModel.js"; // Corrected import path



// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect("mongodb://localhost:27017/test")
// .then(()=> console.log("connected"))
// .catch(err=>console.log(err));

// // mongoose.connect("mongodb://localhost:27017/test")
// //   .then(() => console.log("connected")) // Moved console.log into the then block
// //   .catch(err => console.log(err));

// // app.get('/getUsers',(req,res)=>{
// //     UserModel.find()
// //     .then(users=>res.json(users))
// //     .catch(err=>res.json(err))
// // })


// app.get('/getUsers', (req, res) => {
//   UserModel.find()
//     .then(users => res.json(users))
//     .catch(err => res.json(err));
// });

// app.listen(6161,()=>
// {
//     console.log("server is runing")
// })



import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import UserModel from "./model/UserModel.js"; // Corrected import path


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/test")
  .then(() => console.log("connected")) // Moved console.log into the then block
  .catch(err => console.log(err));

// app.get('/getUsers', (req, res) => {
//   UserModel.find()
    
//     .then(users => res.json(users))
//     .catch(err => res.json(err));
// });
    

app.get('/getUsers', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err); // Log errors
    res.status(500).json({ error: "Internal server error" }); // Send an error response
  }
});

app.listen(6161, () => {
  console.log("server is running");
});
