import React, { Component } from 'react'
import {getMovies} from './services/fakeMovieService'
import {saveMovie} from './services/fakeMovieService'


class Movies extends Component {
  state = {
    movies: getMovies(),
    saveMovies: saveMovie
  };

  render() {
    return ();
  }
}

export default Movies;
