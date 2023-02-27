import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import LikeButton from "./like";

class Movies extends Component {
  state = {
    newMovies: getMovies(),
    badgeName: "fa fa-heart-o"
  };

  handleDelete = (movie) => {
    const movies = this.state.newMovies.filter((m) => m._id !== movie._id);
    this.setState({ newMovies: movies });
  };

  handleLike(){
    let classes = "";
    classes +=  this.state.badgeName === "fa fa-heart-o" ? "fa fa-heart" : "fa fa-heart-o" ;
    this.setState({badgeName: classes})
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
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {this.state.newMovies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
              <i className={this.state.badgeName} aria-hidden="true" onClick={()=>{this.handleLike()}}></i>
              </td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => this.handleDelete(movie)}
              >
                Delete
              </button>
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
