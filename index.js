import bodyParser from "body-parser";
import express from "express";
import {dirname} from "path";
import ejs from "ejs";
import { fileURLToPath } from "url";
const __dirname=dirname(fileURLToPath(import.meta.url));
const app=express();


app.use(bodyParser.urlencoded({extended:true}));



app.get("/",(req,res)=>{
    res.render("index.ejs")
});



app.post("/home",(req,res)=>{
    if(req.body["uname"]=="illangovan" && req.body["pwd"]=="github")
          res.sendFile(__dirname+"/home.html");
    else
        res.render("index.ejs",{data:"hello"});
})


const port=process.env.PORT
app.listen(port,()=>{
    console.log("Server running on port 3000");
})