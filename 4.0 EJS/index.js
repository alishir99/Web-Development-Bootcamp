import express from "express";


const app = express();
const port = 3000;
const d = new Date();
let day = 0;

let type = "a weeday";
let adv = "it's time to work hard"; 

app.get("/", (req, res) => {
  if (day === 0 || day === 6){
    type = "the weekend";
    adv = "it's time to hav some fun.";
  }
  res.render("index.ejs",
     {dayType: type, 
      advice: adv
    });
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});