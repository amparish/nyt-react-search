// Include the Main React Dependencies
const React = require("react");
const Router = require("react-router");

const Query = require("./Query");
const Results = require("./Results");

const helpers = require("../utils/helpers");

var Search = React.createClass({
    // results initial state is empty object
    getInitialState: function(){
        return (
            topic: "",
            startYear: "",
            endYear: "",
            results: {}
        );
    },


    // when search query changes, change state of search info values
    componentDidUpdate: function(prevProps, prevState){
        // if topic isn't empty, and the previous topic isn't the current one...
        if (this.state.topic != "" && prevState.topic != this.state.topic) {
            // send search info to search function
            helpers.search(this.state.topic, this.state.startYear, this.state.endYear).then(function(data){
                // if data received from search doesn't match currently displayed results...
                if (data != this.state.results){
                    this.setState({ results: data });
                }
            }.bind(this));
        }
    },

    render: function(){
        return (
            <div className="container">
                <Query updateSearch={this.setQuery} />
                <Results results={this.state.results} />
            </div>
        );
    }
});

module.exports = Search;