import React from "react";
import withUser from "../Auth/withUser";
import CartDisplayer from "../components/CartDisplayer";

class Cart extends React.Component {
  render() {
    return (
      <div>
        <h2>Cart :</h2>
        <CartDisplayer />
      </div>
    );
  }
}

export default withUser(Cart); // <= withUser don"t know why.. but it's in the scoby2oo's lab
