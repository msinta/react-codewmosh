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


  render() {
    return (
    <div>
    <h1>Hello World</h1>
    <ul>{this.state.newMovies.map(movie => <li>{movie.title}</li> )}
    </ul>
    </div>
    );
  }
}

export default Movies;
