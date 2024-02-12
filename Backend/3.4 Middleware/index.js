import express from "express";
import bodyParser from "body-parser";
const app =express();
const port=3000;
app.use(bodyParser.urlencoded({extended:true}));
app.post("/submit",(req,res)=>{
    console.log(req.body);
});
app.listen(port,()=>{
    console.log("Listening at port 3000");
});