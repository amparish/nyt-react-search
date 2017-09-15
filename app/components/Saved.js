// Include the Main React Dependencies
var React = require("react");
var Router = require("react-router");

// Include helper functions
var helpers = require("../utils/helpers");

var Saved = React.createClass({
    getInitialState: function(){
        return (
            savedArticles: ""
        )
    },
    // Sets state of savedArticles to show the saved articles when the component loads
    componentDidMount: function(){
        helpers.showSaved().then(function(articles){
            this.setState({
                savedArticles: articles.data
            });
        }.bind(this))
    },
    handleClick: function(item, event){
        helpers.delete(item.title, item.date, item.url).then(function(data){
            helpers.showSaved().then(function(articleData){
                this.setState({ savedArticles: articleData.data })
            });
        }.bind(this))
    },
    render: function(){
        if (this.state.savedArticles == ""){
            return (
                <li className="list-group-item">
                    <h2>No saved articles. Search for new articles!</h2>
                </li>
            );
        } else {
            var articles = this.state.savedArticles.map(function(article, index){            
                return (
                    <div key={index}>
                        <li className="list-group-item">
                            <h3>{article.title}</h3>
                            <a href={article.web_url} target="_blank">
                                <button className="btn btn-default">View</button>
                            </a>
                            <button className="btn btn-danger" onClick={this.handleClick.bind(this, article)}>Save</button>
                            <p>Date: {article.pub_date}</p>
                        </li>
                    </div>
                );
            }.bind(this))
        }
    }
});

module.exports = Saved;