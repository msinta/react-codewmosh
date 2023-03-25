import React, { Component } from 'react'

class MovieDetails extends Component {

  handleId = () => {
    this.props.replace("/movies")
  };

  render() {
   return (
    <div>

    <h1>Movie ID - {this.props.match.params.id}</h1>

    <button onClick={this.handleId}>Save</button>
    </div>

    )
  };

}

export default MovieDetails;
