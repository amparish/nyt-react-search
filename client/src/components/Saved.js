import React, { Component } from 'react'
// Import Helper (for the saved recall)
import helpers from "../utils/helpers";

class Saved extends Component {
  state = {
    savedArticles: []
  }

  // gets all saved articles from db
  componentDidMount() {
    helpers.getSaved()
    .then((articleData) => {
      this.setState({ savedArticles: articleData.data });
      console.log("saved results", articleData.data);
    });
  }

  // handles deleting saved articles from our database
  handleClick = (item) => {
    // Delete the list
    helpers.deleteSaved(item.title, item.date, item.url)
    .then(() => {

      // Get revised list
      helpers.getSaved()
      .then((articleData) => {
        this.setState({ savedArticles: articleData.data });
        console.log("saved results", articleData.data);
      });

    });
  }
  // helper method for rendering HTML when there are no saved articles
  renderEmpty = () => {
    return (
      <li className="list-group-item">
        <h3>
          <span>
            <em>Save your first article.</em>
          </span>
        </h3>
      </li>
    );
  }

  // A helper method for mapping through articles and outputting HTML
  renderArticles = () => {
    return this.state.savedArticles.map((article, index) => {

      return (
        <div key={index}>
          <li className="list-group-item">
            <h3>
              <span>
                <em>{article.title}</em>
              </span>
              <span className="btn-group pull-right">
                <a href={article.url} rel="noopener noreferrer" target="_blank">
                  <button className="btn btn-default ">View Article</button>
                </a>
                <button className="btn btn-primary" onClick={() => this.handleClick(article)}>Delete</button>
              </span>
            </h3>
            <p>Date Published: {article.date}</p>
          </li>
        </div>
      );
    });
  }

  // helper method for rendering a container and all articles inside
  renderContainer = () => {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-download" aria-hidden="true"></i> Saved Articles</strong>
                </h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {this.renderArticles()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    // If no articles, return this.renderEmpty()
    if (!this.state.savedArticles) {
      return this.renderEmpty();
    }
    // If articles, return this.renderContainer()
    return this.renderContainer();
  }
};

export default Saved;
