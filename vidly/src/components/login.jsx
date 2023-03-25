import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  validate = () => {
    const errors = {};

    const { account} = this.state
    if(account.username.trim() === '')
      errors.username = 'Username is required.'
    if(account.password.trim() === '')
      errors.password = 'Password is required.'


    return { username: "Username is required" };

  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;
    console.log("Submitted");
  };

  render() {
    const { account } = this.state;
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} action="">
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.onChange}
          />
          <div className="form-group">
            <Input
              name="password"
              value={account.password}
              label="Password"
              onChange={this.onChange}
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
