import React from "react";

class CartDisplayerProduct extends React.Component {
  state = {
    quantity: this.props.quantity,
  };

  handleChange = (event) => {
    let { name, value } = event.target;

    if (value < 1) {
      value = 1;
    }

    this.setState({
      [name]: value,
    });
  };

  render() {
    console.log("Wesh");
    console.log(this.props.quantity);
    return (
      <div className="CardProductCard">
        <img src={this.props.productImg} alt={this.props.productName} />
        <p>{this.props.productName}</p>
        <form
          autoComplete="off"
          //   className="OneProduct-form"
          onSubmit={this.handleSubmit}
        >
          <label>Quantity : </label>
          <input
            type="number"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
          <div>
            {(this.state.quantity * this.props.productPrice).toFixed(2)} €
          </div>
        </form>
      </div>
    );
  }
}

// function CartDisplayerProduct({userId, productId, productName,
//     productPrice, quantity, productImg}) {
//         console.log(quantity);
//     return (
//         <div className="CardProductCard">
//              <img src={productImg} alt={productName} />
//             <p>{productName}</p>
//             <p>€ {productPrice * quantity}</p>
//             <p>Quantity : {quantity}</p>
//         </div>
//     )
// }

export default CartDisplayerProduct;
