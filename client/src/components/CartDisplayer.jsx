import React from "react";
import CartDisplayerProduct from "./CartDisplayerProduct";
import axios from "axios";

class CartDisplayer extends React.Component {
  state = {
    cartProducts: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/cart/", { withCredentials: true })
      .then((res) => {
        this.setState({
          cartProducts: res.data.products,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }



  handleDeleteProduct = (id) => {
    const newProducts = this.state.cartProducts.filter(product => product._id !== id)
    this.setState({
      cartProducts: newProducts
    })
  }

  render() {
    // console.log("---Productscard in UserCart---");
    // console.log(this.state.cartProducts);

    if (!this.state.cartProducts) return null;
    console.log(this.state.cartProducts)
    return (
      <div>
        {this.state.cartProducts.map((productSelected) => {
          
          //  console.log("productSelected._id");
          //  console.log(productSelected);
          return (
            <CartDisplayerProduct
              productId={productSelected.product._id}
              productName={productSelected.product.name}
              productImg={productSelected.product.productImg}
              onDelete={this.handleDeleteProduct}
              productPrice={productSelected.product.price}
              quantity={productSelected.quantity}
            />
          );
        })}
      </div>
    );
  }
}

export default CartDisplayer;
