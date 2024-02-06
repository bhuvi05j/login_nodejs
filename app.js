//import express from 'express';
const express=require('express');
const mysql=require('mysql2');
const doenv=require('dotenv');
const path=require('path');
const hbs=require("hbs");
const app=express();
const location=path.join(__dirname,"./public");
app.use(express.static(location));
app.set("view engine","hbs");

doenv.config({
    path:"./.env"

});
const db=mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASS,
    database:process.env.DATABASE,
});
db.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("my sql connection succesfully");
    }
});
//app.use(express.urlencoded({extented:true}));

app.use('/',require("./routes/pages"));
app.use("/auth",require("./routes/auth"))
    
    





app.listen(5000,()=>{
    console.log("server started @ port 5000")
});

