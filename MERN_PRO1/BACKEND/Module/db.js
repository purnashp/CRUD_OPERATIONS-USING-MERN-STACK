const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/devolopers"

exports.ConnectedDb = async(req,res)=>{
    await mongoose.connect(url);
    console.log("Database is connected");
}