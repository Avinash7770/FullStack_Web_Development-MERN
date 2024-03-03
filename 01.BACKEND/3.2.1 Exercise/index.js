import express from "express";
const app = express();
app.get("/",(req,res)=>{
    res.send("<h1>Home Page</h1>");
});
app.get("/contacts",(req,res)=>{
    res.send("<h1>Contact detail</h1>");
});
app.get("/about",(req,res)=>{
    res.send("<h1>About Us</h1>");
});
app.listen(3000,()=>{
    console.log(`Server running at 3000`);
});