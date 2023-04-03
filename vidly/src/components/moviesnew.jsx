import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class newMovie extends Form {
  state = {
    data: { title: "", genre: "", number_in_stock: null, rate: null },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    number_in_stock: Joi.number().min(0).max(100).required().label("Number in stock"),
    rate: Joi.number().min(0).max(10).required().label("Rate"),
  };



  render() {
    return (
      <div className="container">
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genre", "Genre", [
            { label: "Comedy", value: "Comedy" },
            { label: "Action", value: "Action" },
            { label: "Thriller", value: "Thriller" },
          ])}
          {this.renderInput("number_in_stock", "Number in stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default newMovie;
