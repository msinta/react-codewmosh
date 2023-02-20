import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import {saveMovie} from '../services/fakeMovieService';

class Movies extends Component {
  state = {
    newMovies: getMovies(),
    oldMovies: saveMovie,
  };



  handleDelete(){

  }

  handleTitle(){
    const {newMovies} = this.state
    return newMovies.length === 0 ? "There are no Movies!" : `There are ${newMovies.length} movies in the database`
  };

  handleTable() {
    const {newMovies} = this.state
    return(
    <table class="table">
      <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Genre</th>
      <th scope="col">Stock</th>
      <th scope="col">Rate</th>
    </tr>
  </thead>
  <tbody>
  {newMovies.map((movie,i) =>
  <tr key = {i}>
      <td key = {i}>{movie.title}</td>
      <td key = {i}>{movie.genre.name}</td>
      <td key = {i}>{movie.numberInStock}</td>
      <td key = {i}>{movie.dailyRentalRate}</td>
      <button onClick={this.handleDelete()}>Delete</button>
      </tr>
      )}
  </tbody>
</table>
    );
  }


  render() {
    return (
    <div>
    <h4>{this.handleTitle()}</h4>
    <ul>{this.handleTable()}</ul>
    </div>
    );
  }
}

export default Movies;
