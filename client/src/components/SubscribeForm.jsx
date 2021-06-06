import React, { Component } from "react";
//import { withRouter } from "react-router-dom";
import apiHandler from "./../apiHandler";

class SubscribeForm extends Component {
  state = {
    email: "",
    isMember: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    this.setState({ [key]: value });
  };

  

  render() {
    return (
      <section className="form-section">
        <h2>SubscribeForm</h2>

        <form
          autoComplete="off"
          className="form"
          onSubmit={this.handleSubmit}
          action=""
        >
          <label className="label" htmlFor="email" >Email</label>
          <input
            onChange={this.handleChange}
            value={this.state.email}
            type="email"
            id="email"
            name="email"
          />
          <button>Register</button>
        </form>
      </section>
    );
  }
}

export default SubscribeForm;
