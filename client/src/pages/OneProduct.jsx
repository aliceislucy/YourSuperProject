import axios from "axios";
import React from "react";
import IngredientCard from "../components/IngredientCard";

class OneProduct extends React.Component {
  state = {
    product: null,
    quantity: 1,
  };

  componentDidMount() {
    const productId = this.props.match.params.id;

    axios
      .get("http://localhost:5000/api/product/" + productId)
      .then((res) => {
        this.setState({
          product: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange = (event) => {
    console.log("----------event.target !!!!-----------");
    console.log(event.target);
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

  };

  render() {
    if (!this.state.product) return null;

    return (
      <div className="OneProduct">
        <div className="OneProduct-container">
          <div>
            <h2>{this.state.product.name}</h2>
            <img
              src={this.state.product.productImg}
              alt={this.state.product.name}
            />
          </div>
          <div>
            {this.state.product.ingredients.map((ingredient) => {
              return (
                <IngredientCard
                  key={ingredient._id}
                  name={ingredient.name}
                  ingredientImg={ingredient.ingredientImg}
                  description={ingredient.description}
                />
              );
            })}
          </div>
        </div>
        <div className="OneProduct-container">
          <p>{this.state.product.description}</p>
          <form autoComplete="off" className="OneProduct-form" onSubmit={this.handleSubmit}>
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
            />
            <div>
              {this.state.quantity * this.state.product.price.toFixed()} €
            </div>
            <button>Add to cart</button>
          </form>
        </div>
      </div>
    );
  }
}

export default OneProduct;
