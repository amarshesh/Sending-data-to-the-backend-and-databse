const express = require("express");
const app = express();
const mongoose = require("mongoose")
const connectDatabase  = require("./database/database");
const path = require("path");
const Register = require("./database/models");

const registerUser = require("./route/useroute")

const PORT = process.env.PORT || 5000
// database connection 
connectDatabase();

app.use(express.json());
app.use(express.urlencoded({extended : false}))

// connected to public 


app.use(express.static('public'));


app.post('/', (req, res)=>{
    console.log(req.body)
})

app.get("/", (req,res) =>{
    res.send(__dirname + '/public/index.html')
})

app.listen(PORT, (req,res) =>{
    console.log(`Server is running on localhost ${PORT}`)
})

app.use('/',registerUser);