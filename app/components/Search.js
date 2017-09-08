// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

var Search = React.createClass({
    render: function(){
        return(
            <div className="panel panel-default">
                <div className="panel-header">
                    <h2>Header</h2>
                </div>
                <div className="panel-body">
                    <h2>FORM HERE</h2>
                </div>
            </div>
        );
    }
});

module.exports = Search;