import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// dotenv.config({
//   path: "./env",
// });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`o Server is running at port :${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!!", err);
  });

// import express from "express";
// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.Monogodb_URL}/${DB_NAME}`);
//     app.on("errr or", (error) => {
//       console.log("ERRR: ", errror);
//       throw error;
//     });
//     app.listen();
//   } catch (err) {
//     console.log("Error while connecting to MongoDB", err);
//     throw err;
//   }
// })();
