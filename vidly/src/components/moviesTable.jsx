import { Tab } from "bootstrap";
import React, { Component } from "react";
import LikeButton from "./common/like";
import Table from "./common/table";


class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => (
        <LikeButton
          liked={movie.liked}
          movie={movie}
          handleLike={() => this.props.handleLike(movie)}
        />
      ),
    },
    {
      key: "delete",
      content: movie => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.handleDelete(movie)}
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { newMovies, onSort, sortColumn } = this.props;

    return (
      <Table
      columns={this.columns}
      data={newMovies}
      onSort={onSort}
      sortColumn={sortColumn}
      />
    );
  }
}

export default MoviesTable;
