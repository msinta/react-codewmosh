import React, { Component } from 'react'
import LikeButton from "./common/like";
import TableBody from './common/tableBody';
import TableHeader from './common/tableHeader';

class MoviesTable extends Component {

  columns = [
    {path: 'title', label: 'title'},
    {path: 'genre.name', label: 'Genre'},
    {path: 'numberInStock', label: 'Stock'},
    {path: 'dailyRentalRate', label: 'Rate'},
    {key: 'like'},
    {key: 'delete'},
  ]

  render() {
    const {newMovies, handleDelete, handleLike, onSort, sortColumn} = this.props

    return ( <table className="table m-3">
    <TableHeader
    columns={this.columns}
    sortColumn={sortColumn}
    onSort={onSort}
    />
    <TableBody
    columns={this.columns}
    data={newMovies}
    />
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
