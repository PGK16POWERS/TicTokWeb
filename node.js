const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"public/index.html"));
});

app.listen(9800, () => {
    console.log("TicTokkersWorlddd");
});