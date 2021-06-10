import React from "react";
import withUser from "../Auth/withUser";
import CartDisplayer from "../components/CartDisplayer";
import SumCart from "../components/SumCart";

class Cart extends React.Component {
  render() {
    return (
      <div className="standard-section">
        <h2>Cart</h2>
        <CartDisplayer />
        <SumCart />
      </div>
    );
  }
}

export default withUser(Cart); // <= withUser don"t know why.. but it's in the scoby2oo's lab
