import express from "express";
import {CONFIG} from "./config/index.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import apiRoutes from "./Routes/index.js";

const app = express();

app.use(bodyParser.json());
app.use("/api", apiRoutes);



 

mongoose
       .connect((process.env.MONGO_URI)
    )
       .then(()=>{
        console.log("Connected To Mongo Successfully");
        app.listen(CONFIG.PORT , ()=>{
            console.log(`Server Is Running On Port ${CONFIG.PORT}`);
        })
    })
    .catch((err) => {
    console.log("Something Wrong On Mongo Connection", err);
  });

