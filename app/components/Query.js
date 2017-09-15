// Include the Main React Dependencies
var React = require("react");

var Query = React.createClass({
    // when search component first loads, give initial values (empty strings) for search information
    getInitialState: function(){
        return (
            topic: "",
            startYear: "",
            endYear: ""
        );
    },
    // updates state of input field values
    handleChange: function(event){
        var newState = {};
        // grabs id attr and updates state with content of value attr
        newState[event.target.id] = event.target.value;
    },
    // function to send search query to API on button click
    handleSubmit: function(){
        // updateSearch sets new state for setQuery in Saved component
        this.props.handleChange(this.state.topic, this.state.startYear, this.state.endYear);
        return false;
    },
    render: function(){
        return (
            <div className="panel panel-default">
                <div className="panel-header">
                    <h2>Search</h2>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="topic">Search</label>
                            <input type="text" className="form-control" id="topic" value={this.state.value} onChange={this.handleChange} placeholder="Search Keyword(s)" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="startYear">Start Year</label>
                            <input type="text" className="form-control" id="startYear" value={this.state.value} onChange={this.handleChange} placeholder="YYYY" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="endYear">End Year</label>
                            <input type="text" className="form-control" id="endYear" value={this.state.value} onChange={this.handleChange} placeholder="YYYY" required/>
                        </div>
                        <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Query;