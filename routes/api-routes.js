var request = require("request");
var express = require("express");
var app = express.Router();

var Article = require("../models/Article.js");

module.exports = function(app){
    // Query database for saved articles
    app.get('/api/saved', function(req, res){
        Article.find({}, function(err, data) {
            var hbsObject = {
                article: data
            };
            res.render("saved", hbsObject);
        });
    });

    // Save article to database
    /*app.post('/api/saved', function(req, res){

    });*/

    // Delete saved article from database
    /*app.delete('/api/saved', function(req, res){

    });*/

    // Render index page
    app.get('/', function(req, res) {
        res.sendFile('./public/index.html');
    });
}
