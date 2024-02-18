import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app=express();
const port=3000;
const d = new Date();
let day = d.getDay();
app.get("/", (req, res) => {

    res.render(__dirname + "/public/index.ejs");
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  