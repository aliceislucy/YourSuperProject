import React from "react";
import axios from "axios";
import '../styles/sumCart.css'

class SumCart extends React.Component {
  state = {
    cartProducts: [],
    shipping : 3.73,
  };

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_BACKEND_URL+"/api/cart/", { withCredentials: true })
      .then((res) => {
        this.setState({
          cartProducts: res.data.products,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  calculSubTotal(){
    let allProducts =[...this.state.cartProducts];
    let quantityPrice = []
    let sum = 0;
    allProducts.map((product) =>{
      quantityPrice.push(product.quantity * product.product.price)
      return quantityPrice;
    })
    quantityPrice.forEach((product)=>{
      sum += product
      return sum;
    })
    sum = sum.toFixed(2)
    return sum
  }

  render() {
    return (
      <div className="sumCart">
        <div className="whyNot">
        <h2>Your Order</h2>
        <span>SubTotal ➡ {this.calculSubTotal()}€</span>
        <span> Shipping ➡ {this.state.shipping}€ </span>
        <span className="totalSumBox"> Total:{Number(this.calculSubTotal() + this.state.shipping).toFixed(2)} €</span>
        
        </div>
      </div>
    );
  }
}

export default SumCart;
