import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); // tap into body we use bodyparser

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const letter=req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs",{numofletter:letter});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
