const express = require("express");
const path = require("path");
const fs = require("fs");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/notes", function(req, res) {
res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("/api/notes", function(req, res){
  return res.sendFile(path.json(__dirname, "db.json"))
})

var currentNotes = []




app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });