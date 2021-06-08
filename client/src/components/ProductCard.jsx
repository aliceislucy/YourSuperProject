import React from "react";
import ButtonAddCart from "./ButtonAddCart";
import axios from "axios";


class ProductCast extends React.Component {
  state = {
    products: [],}

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/product/")
      .then((res) => {
       // console.log(res);
        this.setState({
          products : res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    
    return (
      <section>
        <div>
          {this.state.products.map((product) => {
            return (
              <a href="http://localhost:6001/products/">
                <img src={product.productImg} alt={product.name} />
                <span>{product.name}</span>
                <ButtonAddCart />
              </a>
            );
          })}
        </div>
      </section>
    );
  }
}

export default ProductCast;
