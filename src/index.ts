import express from "express";
import mongoose from "mongoose";
import router from "./routes";

const app = express();
app.use(express.json());

app.use("/", router);

app.listen(4000, ()=>{
    console.log("Run server...");
})

const mongoose_url = "mongodb://localhost:27017";
mongoose.connect(mongoose_url, {
    dbName: "nta"
}).then(()=>{
    console.log('connected!');
}).catch((error)=>console.log(error))