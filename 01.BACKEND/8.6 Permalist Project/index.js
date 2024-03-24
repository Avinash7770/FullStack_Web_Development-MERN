import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const db = new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"World",
  password:"Avi7770@",
  port:5432,
})
db.connect();
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

 let items = [
//  // { id: 1, title: "Buy milk" },
//  // { id: 2, title: "Finish homework" },
];

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM items");
    const items = result.rows;
    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items,
    });
  } catch (err) {
    console.error("Error executing query:", err.stack);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/add", (req, res) => {
  const item = req.body.newItem;
  items.push({ title: item });
  res.redirect("/");
});

app.post("/edit", (req, res) => {});

app.post("/delete", (req, res) => {});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
