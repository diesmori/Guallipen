var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
const HOST = "0.0.0.0";

//Mongo
mongoose.connect(
  "mongodb://diesmori:diesmori@ds159517.mlab.com:59517/guallipen"
);

//Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
app.use("/api", require("./routes/api"));

//Listener
app.listen(HOST, PORT);
