import React from "react";
import { Link, Redirect } from "react-router-dom";
import withUser from "./../Auth/withUser";
import apiHandler from "./../apiHandler";
import Button from "../components/Button";



class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signin(this.state)
      .then((data) => {
        this.props.context.setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.props.context.isLoggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div className="standard-section">
          <h1>Login</h1>
          <Link to="/signup">Sign up</Link>


        <form autoComplete="off" className="form" onSubmit={this.handleSubmit}>

          <div>
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.email}
              className="input"
              id="email"
              type="email"
              name="email"
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.password}
              className="input"
              id="password"
              type="password"
              name="password"
            />
          </div>
          <Button text="Log in"/>
          <Link to="/signup">Don't have an account yet? Sign up !</Link>
        </form>

        <div>
          <p>Can't log in ? If you didn't set up an account when you purchased, then you need to </p>
          <Link to="/signup">create one now !</Link>
        </div>
      </div>
    );
  }
}

export default withUser(LoginForm);