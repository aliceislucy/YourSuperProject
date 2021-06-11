import React from "react";
import ProductDisplayer from "../components/ProductDisplayer"

class ProducList extends React.Component {
  render() {
    return (
      <div className="standard-section">
        <h1>Products</h1>
        <ProductDisplayer />
      </div>
    );
  }
}

export default ProducList;
