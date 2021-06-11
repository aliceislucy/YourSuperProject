import React from "react";
import withUser from "../Auth/withUser";
import CartDisplayer from "../components/CartDisplayer";
import SumCart from "../components/SumCart";
import "../styles/button.css"

class Cart extends React.Component {
  render() {
    return (
      <div className="standard-section">
        <h1>Cart</h1>
        <div className='flexCart'>
          <div>
            <CartDisplayer />
          </div>
          <div>
            <SumCart />
            <button className='button-component '>Buy ! </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withUser(Cart); // <= withUser don"t know why.. but it's in the scoby2oo's lab
