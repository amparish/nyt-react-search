// Include the Main React Dependencies
const React = require("react");
const Router = require("react-router");

const helpers = require("../utils/helpers");

var Results = React.createClass({
    // initial state of saved articles
    getInitialState: function(){
        return (
            title: "",
            url: "",
            pub_date: ""
        )
    },
    // saves an article w/ headline, publication date, and URL on click
    handleClick: function(item, event){
        helpers.saveArticle(item.headline.main, item.pub_date, item.web_url).then(function(data){}.bind(this))
    },
    // checks for saved articles, and returns list if available
    render: function(){
        if (!this.props.results.hasOwnProperty("docs")){
            return (
                <li className="list-group-item">
                    <h2>Search for articles!</h2>
                </li>
            )
        } 
        else {
            var articles = this.propTypes.results.docs.map(function(article, index){
                return (
                    <div key={index}>
                        <li className="list-group-item">
                            <h3>{article.headline.main}</h3>
                            <a href={article.web_url} target="_blank">
                                <button className="btn btn-default">View</button>
                            </a>
                            <button className="btn btn-danger" onClick={this.handleClick.bind(this, article)}>Save</button>
                            <p>Date: {article.pub_date}</p>
                        </li>
                    </div>
                )
            }.bind(this))
        }
        return (
            <div className ="main-container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h1 className="panel-title">Results</h1>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {articles}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Results;