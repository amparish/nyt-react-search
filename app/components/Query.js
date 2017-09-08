// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

var Query = React.createClass({
    render: function(){
        return(
            <div className="panel panel-default">
                <div className="panel-header">
                    <h2>Search</h2>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="topic">Search</label>
                            <input type="text" className="form-control" id="topic" placeholder="Example input"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="startYear">Start Year</label>
                            <input type="text" className="form-control" id="startYear" placeholder="Start Year"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="endYear">End Year</label>
                            <input type="text" className="form-control" id="endYear" placeholder="End Year"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Query;