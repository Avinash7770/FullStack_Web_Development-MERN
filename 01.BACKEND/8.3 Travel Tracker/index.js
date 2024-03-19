import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const db = new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"World",
  password:"Avi7770@",
  port:5432,

});
const app = express();
const port = 3000;

db.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  const result = await db.query("SELECT country_code FROM visited_countries");
   
  let countries =[];
  result.rows.forEach(element => {
    countries.push(element.country_code);
  });
 console.log(result.rows);
  res.render("index.ejs",{countries:countries,total:countries.length});
  db.end();
  
});
app.post("/add",async (req,res)=>{
  
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
