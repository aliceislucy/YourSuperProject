import React from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

class ProductDisplayer extends React.Component {
  state = {
    product: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/product/")
      .then((res) => {
        // console.log(res);
        this.setState({
          products: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if (!this.state.products) return null;

    return (
      <div>
        {this.state.products.map((product) => {
          return (
            <ProductCard
              key={product._id}
              name={product.name}
              productImg={product.productImg}
              quantity={product.quantity}
              productId={product._id}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductDisplayer;
