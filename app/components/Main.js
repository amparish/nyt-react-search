// Include the Main React Dependencies
const React = require("react");
const Router = require("react-router");

var Main = React.createClass({
   
    // Rendering main component that establishes layout and holds child components
    render: function(){
        return(
            <div className="container">
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#Navbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="/saved">Saved</a></li>
                                <li><a href="/search">Search</a></li>
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
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Main;