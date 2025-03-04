//require('dotenv').config()

import mongoose from "mongoose";
import { DB_NAME } from "./src/contants";
import ConnectDB from "./db";














































/* import express from "express"
const app = express()

(async () => {
  try {

    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)


    app.on("error", (error)=> {
      console.log("ERROR: ", error)
      throw error
    })

    app.listen(process.env.PORT, ()=> {
        console.log(`App is listening on port : ${Process.env.PORT}`)
    })

  } catch (error) {
    console.log(error)
    throw error
  }
})() */