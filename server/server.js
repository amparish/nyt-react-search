var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var Article = require("./model");

var app = express();
var PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Enable CORS so browsers don't block requests
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
// Serve files created by create-react-app package
app.use(express.static("client/build"));

// MongoDB config
mongoose.connect("mongodb://admin:reactrocks@ds023593.mlab.com:23593/heroku_pg676kmk");
// mongoose.connect("mongodb://localhost:27017/nytreact");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------
// Route to get all saved articles
app.get("/api/saved", function(req, res) {
  Article.find({})
    .exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});

// Route to add article to saved list
app.post("/api/saved", function(req, res) {
  var newArticle = new Article(req.body);
  console.log(req.body);
  newArticle.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// Route to delete article from saved list
app.delete("/api/saved/", function(req, res) {
  var url = req.param("url");
  Article.find({ url: url }).remove().exec(function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Deleted");
    }
  });
});

// Any non API GET routes will be directed to our React App and handled by React Router
app.get("*", function(req, res) {
  if ( process.env.NODE_ENV === 'production' ) {
    res.sendFile(__dirname + "/client/build/index.html");
  } else {
    res.sendFile(__dirname + "/client/public/index.html");
  }
});

// -------------------------------------------------
app.listen(PORT, function() {
  console.log("Listening on PORT: " + PORT);
});