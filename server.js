var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

//Mongo
mongoose.connect(
  "mongodb://diesmori:diesmori@ds159517.mlab.com:59517/guallipen"
);

//Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Routes
app.use("/api", require("./routes/api"));

//Listener
app.listen(process.env.PORT || 5000);
