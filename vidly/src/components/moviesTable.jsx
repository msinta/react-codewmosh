import React, { Component } from 'react'
import LikeButton from "./common/like";

class MoviesTable extends Component {

  raiseSort = path => {

    const sortColumn = {...this.props.sortColumn};
    if (sortColumn.path === path)
      sortColumn.order = (sortColumn.order === 'asc') ? 'desc': 'asc'
    else {
      sortColumn.path = path
      sortColumn.order = 'asc'
    }

    this.props.onSort(sortColumn);

  }

  render() {
    const {newMovies, handleDelete, handleLike} = this.props
    return ( <table className="table m-3">
    <thead>
      <tr>
        <th onClick={() => this.raiseSort('title')} scope="col">Title</th>
        <th onClick={() => this.raiseSort('genre.name')} scope="col">Genre</th>
        <th onClick={() => this.raiseSort('numberInStock')} scope="col">Stock</th>
        <th onClick={() => this.raiseSort('dailyRentalRate')} scope="col">Rate</th>

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
              handleLike={() => handleLike(movie)}
            />
          </td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDelete(movie)}
          >
            Delete
          </button>
        </tr>
      ))}
    </tbody>
  </table> );

  }
}




export default MoviesTable;
