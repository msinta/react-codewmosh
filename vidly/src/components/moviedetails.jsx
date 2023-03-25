import React, { Component } from 'react'

class MovieDetails extends Component {

  handleId = () => {
    this.props.history.replace("/movies")
  };

  render() {
   return (
    <div>

    <h1>Movie Form - {this.props.match.params.id}</h1>
    <button className="btn btn-primary" onClick={this.handleId}>Save</button>
    </div>

    )
  };

}

export default MovieDetails;
