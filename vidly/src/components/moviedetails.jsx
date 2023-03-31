import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";


class MovieDetails extends Form {
  state = {
    data: { title: "", genre: "", number_in_stock: null, rate: null },
    errors: {},
  };

  handleId = () => {
    this.props.history.replace("/movies");
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    number_in_stock: Joi.number().min(0).required().label("Number in stock"),
    rate: Joi.number().min(0).max(10).required().label("Rate"),
  };

  doSubmit = (movie) => {
    console.log(movie);
  };
  render() {
    return (
      <div className="container">
        <h1>Movie Form - {this.props.match.params.id}</h1>

        <form onSubmit={this.doSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genre", "Genre", [
            { label: "Comedy", value: "comedy" },
            { label: "Romance", value: "romance" },
            { label: "Thriller", value: "thriller" },
          ])}
          {this.renderInput("number_in_stock", "Number in stock")}
          {this.renderInput("rate", "Rate")}
          <button className="btn btn-primary" onClick={console.log(this.props.match.params)}>
            Save
          </button>

        </form>
      </div>
    );
  }
}

export default MovieDetails;
