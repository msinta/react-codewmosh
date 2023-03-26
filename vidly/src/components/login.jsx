import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("Submitted");

  }

  render() {
    const { data, errors } = this.state;
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} action="">
          <Input
            name="username"
            value={data.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <div className="form-group">
            <Input
              name="password"
              value={data.password}
              label="Password"
              error={errors.password}
              onChange={this.handleChange}
            />
          </div>
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
