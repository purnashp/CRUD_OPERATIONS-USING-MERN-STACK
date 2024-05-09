const express = require("express");
const {ConnectedDb}= require("./Module/db");
const cros = require("cors");
const devoloprouter= require("./Router/DevoloperRouter");
const usermodel = require("./Schema/DeveloperSchema")
const app = express();
const PORT = process.env.PORT || 3000

ConnectedDb();

app.use(cros());
app.use(express.json());

app.use("/api",devoloprouter)

app.get("/",(req,res)=>{
    usermodel.find()
    .then(users=> res.json(users))

})





app.listen(PORT,err=>{
    if(err) throw err;
    console.log("Server is Running");
})