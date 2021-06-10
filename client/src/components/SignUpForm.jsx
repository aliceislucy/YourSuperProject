import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import withUser from "../Auth/withUser";
import apiHandler from "./../apiHandler";
import Button from "../components/Button";

class SignUpForm extends Component {
  state = {};

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    apiHandler
      .signup(this.state)
      .then((data) => {
        this.props.context.setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.props.context.isLoggedIn) {
      // This logic is the same as in the <ProtectedRoute /> component
      // Here this is handled within the component, if there are some views
      // that are not meant to be rendered to a logged in user,
      // you could make a generic component out of it, just like <ProtectedRoute />
      // and instead of checking if the user is not logged in, check if the user is logged in
      // and redirect him to whatever page you want, in the case below: the home page.
      return <Redirect to="/" />;
    }

    return (
      <div className="standard-section">
        <form
          autoComplete="off"
          className="form"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        >
          <h1>Create account</h1>

          <div className="form-group">
            <label className="label" htmlFor="firstName">
              First name
            </label>
            <input
              className="input"
              id="firstName"
              type="text"
              name="firstName"
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="input"
              id="lastName"
              type="text"
              name="lastName"
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input className="input" id="email" type="email" name="email" />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              className="input"
              id="password"
              type="password"
              name="password"
            />
          </div>

          <Button text="Sign up"/>
        </form>

        <div className="form-section link">
          <p>Already have an account? </p>
          <Link to="/login">Log in</Link>
        </div>
      </div>
    );
  }
}

export default withUser(SignUpForm);
