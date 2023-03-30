import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class newMovie extends Form {
 state = {
   data: { Title: "", Genre: "", Number_in_stock: "" , Rate:""},
   errors: {},
 };

 schema = {
   Title: Joi.string().required().label("Title"),
   Genre: Joi.string().min(5).required().label("Genre"),
   Number_in_stock: Joi.string().required().label("Number in stock"),
   Rate: Joi.string().required().label("Name"),
 };

  render() {
    return (
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre",)}
          {this.renderInput("number in stock", "Number in stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Submit")}

        </form>
      </div>
    );
  }
}

export default newMovie;
