import React, { Component } from "react";
import Button1 from "./Button1";
//import { withRouter } from "react-router-dom";
import apiHandler from "./../apiHandler";

class ProductCast extends Component {
  state = {
    type: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    this.setState({ [key]: value });
  };

  render() {
    return (
      <section>
        <h2>ProductCard</h2>

        <div>
          <Button1 />
        </div>
      </section>
    );
  }
}

export default ProductCast;
