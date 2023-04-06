import React, { Component } from "react";
import { getMovies, deleteMovie  } from "../services/movieService";
import { getGenres } from "../services/genreService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import List from "./common/list";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import { Link } from "react-router-dom";
import SearchBox from "./common/searchbox";
import { toast } from "react-toastify";


class Movies extends Component {
  state = {
    genres:[],
    newMovies: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
    searchQuery: "",
    selectedGenre: null
  };

  async componentDidMount() {
    const { data } = await getGenres();
    let genres = [{ _id: "", name: "All Genres" }, ...data];

    const { data: newMovies } = await getMovies();
    this.setState({ genres, newMovies });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleListChange = (genre) => {
    this.setState({ searchQuery: "", selectedGenre: genre, currentPage: 1 });
  };

  handleSearchChange = (query) => {
    this.setState({ searchQuery: query ,selectedGenre: null, currentPage: 1 });
  };

   handleDelete = async (movie) => {
    const originalMovies = this.state.newMovies;
    const movies = originalMovies.filter((m) => m._id !== movie._id);
    this.setState({ newMovies: movies });

    try {
      await deleteMovie(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) console.log("x");
      toast.error("This movie has already been deleted.");

      this.setState({ newMovies: originalMovies });
    }
  };



  handleNew = (movie) => {
    const movies = [...this.state.newMovies, movie];
    this.setState({ newMovies: movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.newMovies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ newMovies: movies });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      newMovies: allMovies,
      sortColumn,
      selectedGenre,
      searchQuery
    } = this.state;

    let filtered = allMovies
    if(searchQuery)
      filtered = allMovies.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
        );
    else if(selectedGenre && selectedGenre._id)
        filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id)




    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const newMovies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: newMovies };
  };

  render() {
    const { pageSize, currentPage, genres, sortColumn, searchQuery } = this.state;

    if (this.state.newMovies.length === 0)
      return <p className="m-3"> There are no Movies in the database!</p>;

    const { totalCount, data: newMovies } = this.getPageData();

    return (
      <div className="container m-3">
        <div className="row">
          <div className="col-3">
            <List
              items={this.state.genres}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleListChange}
            />
          </div>

          <div className="col">
            <Link to="/movies/new" className="btn btn-primary m-2">
              New Movie
            </Link>
            <p>There are {totalCount} movies in the database</p>

            <SearchBox value={searchQuery} onChange={this.handleSearchChange}/>
            <MoviesTable
              newMovies={newMovies}
              sortColumn={sortColumn}
              handleLike={this.handleLike}
              handleDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              pageSize={pageSize}
              itemsCount={totalCount}
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
