import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
var bandname="";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", (req, res) => {

  res.sendFile(__dirname + "/public/index.html");
});
app.post("/submit",(req,res)=>{
  bandname=req.body["street"]+req.body["pet"];
  res.send(`<h1>Your Band Name is <h2>${bandname}</h2></h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
