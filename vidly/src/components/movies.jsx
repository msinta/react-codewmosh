import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import LikeButton from './like'

class Movies extends Component {
  state = {
    newMovies: getMovies(),
  };

  handleDelete = movie => {
    const movies = this.state.newMovies.filter(m => m._id !== movie._id);
    this.setState({ newMovies: movies });
  };



  handleTable() {
    return (
      <table className="table m-3">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {this.state.newMovies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td><LikeButton onClick={() => this.props.handleLike(movie)} /></td>
              <button className="btn btn-danger btn-sm"
              onClick={() => this.handleDelete(movie)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    if (this.state.newMovies.length === 0)
      return <p className="m-3"> There are no Movies in the database!</p>;

    return (
      <React.Fragment>
        <h4>There are {this.state.newMovies.length} movies in the database</h4>
        <ul>{this.handleTable()}</ul>
      </React.Fragment>
    );
  }
}

export default Movies;
