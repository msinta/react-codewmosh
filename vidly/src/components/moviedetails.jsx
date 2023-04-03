import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class MovieDetails extends Form {
  state = {
    data: {
      title: `${getMovie(this.props.match.params.id).title}`,
      genre: `${getMovie(this.props.match.params.id).genre}`,
      number_in_stock: `${getMovie(this.props.match.params.id).numberInStock}`,
      rate: `${getMovie(this.props.match.params.id).dailyRentalRate} `,
    },
    errors: {},
    genres: [],
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
        <h1>Movie Form </h1>

        <form onSubmit={this.handleChange}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genre", "Genre", [
            { label: "Comedy", value: "Comedy" },
            { label: "Action", value: "Action" },
            { label: "Thriller", value: "Thriller" },
          ])}
          {this.renderInput("number_in_stock", "Number in stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Save")}

        </form>
      </div>
    );
  }
}

export default MovieDetails;
