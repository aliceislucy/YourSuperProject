import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../styles/EditProductForm.css'

class EditProductFrom extends Component {
  state = {
    name: "",
    productImg: "",
    description: "",
    price: 0,
    quantity: 0,
    reference: "",
    ingredients: [],
    saleByPercentage: 0,
    saleByValue: 0,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(process.env.REACT_APP_BACKEND_URL+"/api/product/" + id)
      .then((response) => {
        const product = response.data;
        this.setState({
          name: product.name,
          productImg: product.productImg,
          description: product.description,
          price: product.price,
          quantity: product.quantity,
          reference: product.reference,
          ingredients: product.ingredients,
          saleByPercentage: product.saleByPercentage,
          saleByValue: product.saleByValue,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.props.match.params.id;
    const updateValues = {
      name: this.state.name,
      productImg: this.state.productImg,
      description: this.state.description,
      price: this.state.price,
      quantity: this.state.quantity,
      reference: this.state.reference,
      ingredients: this.state.ingredients,
      saleByPercentage: this.state.saleByPercentage,
      saleByValue: this.state.saleByValue,
    };

    axios
      .patch("http://localhost:5000/api/product/" + id, updateValues)
      .then((response) => {
        this.props.history.push("/admin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Edit Product : {this.state.name}</h2>
          <div>
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="image">Image : </label>
            <input
              type="text"
              name="image"
              id="image"
              value={this.state.productImg}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="description">Description : </label>
            <input
              type="text"
              name="description"
              id="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="price">Price : </label>
            <input
              type="number"
              name="price"
              id="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="description">quantity : </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="reference">reference : </label>
            <input
              type="text"
              name="reference"
              id="reference"
              value={this.state.reference}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="ingredients">ingredients : </label>
            <input
              type="text"
              name="ingredients"
              id="ingredients"
              value={this.state.ingredients} //Catch data from Ingredients
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="saleByPercentage">saleByPercentage : </label>
            <input
              type="number"
              name="saleByPercentage"
              id="saleByPercentage"
              value={this.state.saleByPercentage}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="saleByValue">saleByValue : </label>
            <input
              type="number"
              name="saleByValue"
              id="saleByValue"
              value={this.state.saleByValue}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <Link to={`/admin`}>Back</Link>
      </div>
    );
  }
}

export default EditProductFrom;
