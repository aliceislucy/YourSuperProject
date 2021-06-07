import axios from "axios";
import React, { Component } from "react";
import IngredientCard from "../components/IngredientCard";

class OneProduct extends Component {
  state = {
    product: null,
  };

  componentDidMount() {
    const productId = this.props.match.params.id;

    console.log("------------- THIS IS PRODUCT ID ---------");
    console.log(productId)

    axios
      .get("http://localhost:5000/api/yoursuper/" + productId)

      .then((res) => {
        this.setState({
          product: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if (!this.state.product) return null;

    return (
      <div className="OneProductPage">
        <div>
          <h2>{this.state.product.name}</h2>
          <img
            src={this.state.product.productImg}
            alt={this.state.product.name}
          />
          <div>
            {this.state.product.ingredients.map((ingredient) => {
              return <IngredientCard
                name={ingredient.name}
                ingredientImg={ingredient.ingredientImg}
                description={ingredient.description}
              />;
            })}
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default OneProduct;
