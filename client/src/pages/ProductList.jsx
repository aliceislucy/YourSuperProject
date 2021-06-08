import React from "react";
import ProductDisplayer from "../components/ProductDisplayer"

class ProducList extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <h2>ProducList Page</h2>
        <ProductDisplayer />
      </div>
    );
  }
}

export default ProducList;
