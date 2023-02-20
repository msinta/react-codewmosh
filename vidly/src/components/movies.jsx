import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    newMovies: getMovies(),
  };

  handleDelete = movie => {
    const movies = this.state.newMovies.filter(m => m._id !== movie._id);
    this.setState({ newMovies: movies });
  };

  handleTitle() {
    const { newMovies } = this.state;
    return newMovies.length === 0
      ? "There are no Movies!"
      : `There are ${newMovies.length} movies in the database`;
  }

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
          </tr>
        </thead>
        <tbody>
          {this.state.newMovies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <button className="btn btn-danger btn-sm"
              onClick={() => this.handleDelete(movie)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        <h4 className="m-3">{this.handleTitle()}</h4>
        <ul>{this.handleTable()}</ul>
      </div>
    );
  }
}

export default Movies;
