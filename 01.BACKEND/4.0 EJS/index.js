import express from "express";

const app=express();
const port=3000;


app.get("/", (req, res) => {
      const today1 = new Date();
      const today11 = today1.getDay();
      console.log(today11);
      if(today11===0|| today11===6){
        res.render("index.ejs",{
      
     
          day:"a weekend",
          advice:"Have Fun",
         });
      }
      else{
    res.render("index.ejs",{
      
     
     day:"a weekday",
     advice:"Work hard",
    });
  }
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  