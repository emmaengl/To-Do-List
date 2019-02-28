//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let newToDos = [];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res){
let today = new Date();
let options = {
  weekday: "long",
  month: "long",
  day: "2-digit"
};
let day = today.toLocaleDateString("en-US", options);

/*  let todayDate = new Date();
  let today = todayDate.getDay();
  let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = {
    day: weekdays[today]
  } */

  res.render("list", {day: day, newToDos: newToDos});
});

app.post("/", function(req, res){
  let newToDo = req.body.newToDo;

  newToDos.push(newToDo);

  res.redirect("/");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
