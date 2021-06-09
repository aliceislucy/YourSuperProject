import React from "react";
import CartDisplayerProduct from "./CartDisplayerProduct";
import axios from "axios";

class CartDisplayer extends React.Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/cart/", { withCredentials: true })
      .then((res) => {
        //console.log(res);
        this.setState({
          cart: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log('prout');
    console.log(this.state.cart);
    return (
      <div>
        {/* {this.state.cart.map(() => {
          <CartDisplayerProduct />;
        })} */}
      </div>
    );
  }
}

export default CartDisplayer;
