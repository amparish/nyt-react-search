import React, { Component } from 'react'

class Query extends Component {
  state = { 
    search: "Tom Petty",
    start: "2007",
    end: "2017"
  }

  // handles changes in text fields
  handleChange = (event) => {
    // captures state change of text fields
    // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  // sends search terms to parent Search component
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateSearch(this.state.search, this.state.start, this.state.end);
  }

  render() {

    return (
      <div className="main-container">

        <div className="row">
          <div className="col-lg-12">

            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-newspaper-o" aria-hidden="true"></i> Query
                  </strong>
                </h1>
              </div>
              <div className="panel-body">

                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <h4 className=""><strong>Topic</strong></h4>
                    <input
                      type="text"
                      value={this.state.search}
                      className="form-control"
                      id="search"
                      onChange={this.handleChange}
                      required
                    />

                    <h4><strong>Start Year</strong></h4>
                    <input
                      type="number"
                      value={this.state.start}
                      className="form-control"
                      id="start"
                      onChange={this.handleChange}
                      required
                    />

                    <h4><strong>End Year</strong></h4>

                    <input
                      type="number"
                      value={this.state.end}
                      className="form-control"
                      id="end"
                      onChange={this.handleChange}
                      required
                    />

                  </div>

                  <div className="pull-right">
                    <button
                      type="submit"
                      className="btn btn-danger"
                    >
                      <h4>Submit</h4>
                    </button>
                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
};

// Export the module back to the route
export default Query;