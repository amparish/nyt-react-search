// Include the Main React Dependencies
var React = require("react");

var Search = require("./Search");
var Saved = require("./Saved");

var Main = React.createClass({
    render: function(){
        return(
            <div className="container">
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#Navbar">
                                <span className="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        <div class="collapse navbar-collapse" id="Navbar">
                            <ul class="nav navbar-nav navbar-right">
                                <li><a href="#">Saved</a></li>
                                <li><a href="#">Results</a></li>
                                <li><a href="#">Search</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="row">
                    <div className="jumbotron">
                        <h1>New York Times Article Search</h1>
                    </div>
                </div>
        
                <div className="row">
                    <div className="col-md-12">
                        <Search/>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Main;