import React, { Component } from 'react'
import LikeButton from "./common/like";

class MoviesTable extends Component {

  render() {
    const {newMovies, handleDelete, handleLike, onSort} = this.props
    return ( <table className="table m-3">
    <thead>
      <tr>
        <th onClick={() => onSort('title')} scope="col">Title</th>
        <th onClick={() => onSort('genre.name')} scope="col">Genre</th>
        <th onClick={() => onSort('numberInStock')} scope="col">Stock</th>
        <th onClick={() => onSort('dailyRentalRate')} scope="col">Rate</th>
        <th onClick={() => onSort('')} scope="col"></th>
        <th onClick={() => onSort('')} scope="col"></th>
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
