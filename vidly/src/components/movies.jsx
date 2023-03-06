import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import LikeButton from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import List from "./common/list";

class Movies extends Component {
  state = {
    genres: getGenres(),
    newMovies: getMovies(),
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount(){
    const genres = [{name: 'All Genres'},...getGenres()]
    this.setState({newMovies: getMovies(), genres })
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });

  };

  handleListChange = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1})
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
  handleLike(movie) {
    const movies = [...this.state.newMovies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ newMovies: movies });
  }

  render() {
    const { pageSize, currentPage, newMovies: allMovies, genres, selectedGenre} = this.state;
    if (this.state.newMovies.length === 0)
      return <p className="m-3"> There are no Movies in the database!</p>;


    const filtered = selectedGenre && selectedGenre._id ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
    : allMovies;

    const newMovies = paginate(filtered, currentPage, pageSize);

    return (


        <div className="row ">
          <div className="col-3">
          <List
        getGenres={genres}
        selectedItem={this.state.selectedGenre}
        onItemSelect={this.handleListChange}
        />
          </div>
          <div className="col">
          <p>
            There are {filtered.length} movies in the database
          </p>
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
              {newMovies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <LikeButton
                      liked={movie.liked}
                      movie={movie}
                      handleLike={() => this.handleLike(movie)}
                    />
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
          <Pagination
            pageSize={pageSize}
            itemsCount={filtered.length}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />

          </div>


        </div>

    );
  }
}

export default Movies;
