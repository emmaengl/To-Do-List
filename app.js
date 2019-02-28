//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const getDate = require(__dirname + "/date.js");

const app = express();

let newToDos = [];
let workToDos = [];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

/******* GET REQUESTS *******/
app.get("/", function(req, res){

let day = getDate();

  res.render("list", {listTitle: day, newToDos: newToDos});
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newToDos: workToDos});
});

app.get("/about", function(req,res){
  res.render("about");
});

app.post("/", function(req, res){
  
  let newToDo = req.body.newToDo; //var containing whatever is typed by user in form

  if (req.body.list === "Work") { //
    workToDos.push(newToDo);
    res.redirect("/work");
  } else {
    newToDos.push(newToDo);
    res.redirect("/");
  }
});



/*app.post("/work", function(req,res){
  let newToDo = req.body.newToDo;

  newToDos.push(newToDo);

  res.redirect("/work");
}); */

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
