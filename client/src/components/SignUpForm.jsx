import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import withUser from "../Auth/withUser";
import apiHandler from "./../apiHandler";
import Button from "../components/Button";
import "./../styles/signup.css";

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
      return <Redirect to="/" />;
    }

    return (
      <div className="standard-section signup">
        <form
          autoComplete="off"
          className="form"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        >
          <h1>Create your account</h1>
          <Link to="/login" style={{ textDecoration: "none", color: "#db8300", fontWeight: "600"}}>➡ Already have an account? Log in</Link>

          <div className="form-group space">
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
          <div className="margin"></div>

          <Button text="Sign up"/>
        </form>

        <div className="form-section link"> 
        </div>
      </div>
    );
  }
}

export default withUser(SignUpForm);
