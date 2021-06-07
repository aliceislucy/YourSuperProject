import React from "react";
import Button1 from "./Button1";
//import { withRouter } from "react-router-dom";
// import apiHandler from "./../apiHandler";

class ProductCast extends React.Component {
  state = {
    type: "",
  };


  render() {
    return (
      <section>
        <h2>{this.props.Product}</h2>

        <div>
          <Button1 />
        </div>
      </section>
    );
  }
}

export default ProductCast;
