import React from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "../styles/productDisplayer.css"

class ProductDisplayer extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_BACKEND_URL+"/api/product/")
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

  handleSubmit = (id) => {
    
  
    let addProduct = { quantity : 1, product :  id}
  
    axios.post(process.env.REACT_APP_BACKEND_URL+"/api/cart/", addProduct, {withCredentials: true})
  };

  render() {
    if (!this.state.products) return null;

    return (
      <div className="productDisplayer">
        {this.state.products.map((product) => {
          return (
            <ProductCard
              key={product._id}
              name={product.name}
              productImg={product.productImg}
              quantity={product.quantity}
              productId={product._id}
              handleSubmit={this.handleSubmit}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductDisplayer;
