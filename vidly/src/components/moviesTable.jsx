import React, { Component } from 'react'
import LikeButton from "./common/like";

const MoviesTable = (props) => {

  const {newMovies, handleDelete, handleLike} = props
  return ( <table className="table m-3">
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

export default MoviesTable;
