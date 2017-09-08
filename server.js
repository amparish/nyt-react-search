// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const request = require("request");
// Models
var article = require("./models/Article.js");

mongoose.Promise = Promise;

// Express
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use("/", express.static("public"));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
//var routes = require("./routes/api-routes.js");

//app.use("/", routes);

app.get('/', function(req, res) {
    res.sendFile('./public/index.html');
});

// Connect to Mongoose
if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI);
} else {
	mongoose.connect("mongodb://localhost/nytreact");
}

const db = mongoose.connection;

// show mongoose errors
db.on("error", function(error){
	console.log("Mongoose error: ", error);
});

// log a success message once logged into db
db.once("open", function(){
	console.log("Mongoose connection successful");
});

app.listen(PORT, function(){
	console.log("Listening on port " + PORT);
});