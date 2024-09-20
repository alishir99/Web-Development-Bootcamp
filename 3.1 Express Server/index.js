import express from "express";
const app = express(); 
const port = 3000;

app.get("/", (req, res) => {
    res.send ("<h1> Hellooooo </h1>");
    //console.log(req.rawHeaders);
});

app.get("/contact", (req, res) => {
    res.send ("<h1> You Can't contanct me I contact you borkey </h1>"); 
});

app.get("/about", (req, res) => {
    res.send ("<h1> My name is king !! </h1>");
});

app.listen(port, () => {
    console.log(`Sever running on port ${port}.`);
    
})
