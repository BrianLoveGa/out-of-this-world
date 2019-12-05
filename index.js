const express = require("express");
const hbs = require("hbs");
const app = express();

const parser = require("body-parser");
const methodOverride = require("method-override");

const resturantController = require("./controller/yummy");

// views
app.set("view engine", "hbs");

// to edit or post
app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// styles
app.use(express.static("public"));

// controller
app.use("/", resturantController);

// listener
app.listen(3000, () => console.log("Running strong on port 3000! All Night Long !!"));

