var Article = require("../models/Article.js");

app.get('/', function(req, res) {
    res.sendFile('./public/index.html');
});