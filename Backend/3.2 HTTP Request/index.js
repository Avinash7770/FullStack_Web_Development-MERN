import express from "express";
const app = express();
app.get("/",(req,res)=>{
    res.send("<h1>Hello </h1>");
});
app.get("/about",(req,res)=>{
    res.send("<h1>About Me </h1>");
});
app.listen(3000);