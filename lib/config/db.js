import mongoose from "mongoose";

const connetDB = async ()=>{
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("mongoDB connected")
}