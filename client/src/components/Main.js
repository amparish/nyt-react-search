import React, { Component } from 'react'
import { Link } from "react-router";

class Main extends Component {

  render() {

    return (
      <div className="main-container">
        <div className="container">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-ex1-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">NYT React Search</Link>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/search">Search</Link></li>
                  <li><Link to="/saved">Saved Articles</Link></li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="jumbotron">
            <h2 className="text-center"><strong>New York Times Article Search</strong></h2>
            <h3 className="text-center">Search for and save articles.</h3>
          </div>

          {this.props.children}

          <footer>
            <hr />
            <a href="https://github.com/amparish/nyt-react-search" className="pull-right">
              <i className="fa fa-github" aria-hidden="true"></i>
              Github Repo
            </a>
          </footer>
        </div>
      </div>
    );
  }
};

// Export the module back to the route
export default Main;