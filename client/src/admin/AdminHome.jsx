import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../styles/AdminHome.css'

class AdminHome extends React.Component {
  state = {
    products: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/product/")
      .then((response) => {
        this.setState({ products: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleDelete = (productId) => {
    axios
      .delete("http://localhost:5000/api/product/" + productId)
      .then((response) => {
        this.setState({
          products: this.state.products.filter((product) => {
            return product._id !== productId;
          }),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="AdminProductList">
        <h1>YourSuper - Admin - Dashboard</h1>
        <Link to="/admin/createproduct">Create Product</Link>
        {this.state.products.map((product) => {
          return (
            <div key={product._id} className="Product">
              <div>
                <img src={product.productImg} alt={product.name} />
              </div>
              <h4>{product.name}</h4>
              <button onClick={() => this.handleDelete(product._id)}>
                Delete
              </button>
              <Link to={`/admin/edit/${product._id}`}>Edit</Link>
            </div>
          );
        })}
      </div>
    );
  }
}
export default AdminHome;
