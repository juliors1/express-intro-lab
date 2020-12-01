// Load Express
const express = require("express");
const path = require("path");
const animalsDb = require("./data/animals");

// Configure the app (app.set)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// create express app
const app = express();

// Mount routes

app.get("/", function (req, res) {
  res.redirect("/home");
});

app.get("/home", function (req, res) {
  res.render("home");
});

app.get("/animals", function (req, res) {
  res.render("animal/index", { animal: animalsDb.getAll() });
});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log("Listening on port 3000");
});
