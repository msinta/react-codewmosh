import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import List from "./common/list";
import MoviesTable from "./moviesTable";

class Movies extends Component {
  state = {
    genres: getGenres(),
    newMovies: getMovies(),
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ newMovies: getMovies(), genres });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleListChange = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleDelete = (movie) => {
    const movies = this.state.newMovies.filter((m) => m._id !== movie._id);
    this.setState({ newMovies: movies });
  };

  handleLike(movie) {
    const movies = [...this.state.newMovies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ newMovies: movies });
  }

  render() {
    const {
      pageSize,
      currentPage,
      newMovies: allMovies,
      genres,
      selectedGenre,
    } = this.state;
    if (this.state.newMovies.length === 0)
      return <p className="m-3"> There are no Movies in the database!</p>;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const newMovies = paginate(filtered, currentPage, pageSize);

    return (
      <div className="container m-3">
        <div className="row">
          <div className="col-3">
            <List
              getGenres={genres}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleListChange}
            />
          </div>
          <div className="col">
            <p>There are {filtered.length} movies in the database</p>
<MoviesTable newMovies={newMovies} handleLike= {this.handleLike} handleDelete= {this.handleDelete}/>
            <Pagination
              pageSize={pageSize}
              itemsCount={filtered.length}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
