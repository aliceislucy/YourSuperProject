import React from "react";
import axios from "axios";

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
  handleDelete = (productId) => {
    //   console.log('productId');
    //   console.log(productId);
    axios
      .delete("http://localhost:5000/api/cart/" + productId, { withCredentials: true })
      .then(() => {
        this.props.onDelete(productId)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   .then((response) => {
  //     this.setState({
  //       product: this.state.product.filter((product) => {
  //         return product._id !== productId;
  //       }),
  //     });
  //   })

  render() {
    // console.log("Product In card");
    // console.log(this.props);
    return (
      <div className="CardProductCard">
        <img src={this.props.productImg} alt={this.props.productName} />
        <p>{this.props.productName}</p>
        <form
          autoComplete="off"
          className="CardProductCard-form "
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
        <button onClick={() => this.handleDelete(this.props.productId)}>
          Delect
        </button>
      </div>
    );
  }
}

export default CartDisplayerProduct;
