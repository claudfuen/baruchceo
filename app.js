var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("index");
});

app.get("/team", function(req,res){
	res.render("team.ejs");
})


app.get("/directory", function(req, res) {
    res.render("directory");
});

app.get("/books", function(req, res) {
    res.render("books");
});


app.get("/events", function(req, res) {
    res.render("events");
});

app.get("/forum", function(req, res) {
    res.render("forum");
});

app.get("*", function(req, res) {
    res.redirect('/')
});


app.listen(PORT, function(){
    console.log("App running on PORT: " + 3000)
});