import bodyParser from "body-parser";
import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname=dirname(fileURLToPath(import.meta.url));
const app=express();


app.use(bodyParser.urlencoded({extended:true}));



app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})



app.post("/home",(req,res)=>{
    if(req.body["uname"]=="illangovan" && req.body["pwd"]=="github")
          res.sendFile(__dirname+"/home.html");
    else
        res.sendFile(__dirname+"/index.html")
})



app.listen(3000,()=>{
    console.log("Server running on port 3000");
})