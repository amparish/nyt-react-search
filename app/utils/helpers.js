const axios = require("axios");

const helpers = {

// GET request to NYT API
    search: function(topic, startYear, endYear){

        var topic = topic.trim();
        var startYear = startYear.trim() + "0101";
        var endYear = endYear.trim() + "1231";
        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
            params: {
                "api-key": "01c97cb83a844001af0024e572049c9d",
                "q": topic,
                "begin_date": startYear,
                "end_date": endYear
            }
        }).then(function(res){
            return res.data.response;
        });
    },
// save an article to db(POST)
    saveArticle: function(title, date, url){
        var newSave = {title: title, date: date, url: url};
        return axios.post("/api/saved", newSave).then(function(res){
            return res._id;
        });
    },
// DELETE a saved article
    delete: function(title, date, url){
        return axios.delete("/api/saved", {
            params: {
                "title": title,
                "data": data,
                "url": url
            }
        });
    },
// GET saved articles
    showSaved: function(){
        return axios.get("/api/saved").then(function(res){
            return res;
        });
    }
}


