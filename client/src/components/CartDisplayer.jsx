import React from "react";
import CartDisplayerProduct from "./CartDisplayerProduct";
import axios from "axios";

class CartDisplayer extends React.Component {
  state = {
    cardProducts: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/cart/", { withCredentials: true })
      .then((res) => {
        // console.log('ptitichat');
        // console.log(res);
        console.log("humhum");
        console.log(res.data.products);
        this.setState({
          cardProducts : res.data.products,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log("prout ??");
    console.log(this.state.cardProducts);

    if (!this.state.cardProducts) return null;

    return (
      <div>
        {this.state.cardProducts.map((productSelected) => {
          return (
            <CartDisplayerProduct
              productId={productSelected.product._id}
              productName={productSelected.product.name}
              productImg={productSelected.product.productImg}
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
