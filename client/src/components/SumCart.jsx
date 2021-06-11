import React from "react";
import axios from "axios";
import Button from "./Button"
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
    let allProducts = [...this.state.cartProducts];
    let quantityPrice = []
    let sum = 0;

    allProducts.map((product) =>{
      quantityPrice.push(product.quantity * product.product.price)
    })

    quantityPrice.forEach((product)=>{
      sum += product
    })
    
    sum = sum.toFixed(2)
    return sum
  }

  render() {
    let total = Number(this.calculSubTotal()) + this.state.shipping
    return (
      <div>
      <div className="sumCart">

        <div className="text">

        <h2>Your Order</h2>
        <div>SubTotal  ➡  {this.calculSubTotal()} €</div>
        <div> Shipping  ➡  {this.state.shipping} € </div>
        <div className="totalSumBox"> Total : {total.toFixed(2)} €</div>

        </div>


      </div>
        <Button className="ButtonBuy" text="Buy now"/>
      </div>
    );
  }
}

export default SumCart;
