import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class OrderHistory extends React.Component {
  state = {
    userOrders: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/order/", { withCredentials: true })
      .then((res) => {
        this.setState({
          userOrders: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  
  
  
  render() {
    //   let list = [...new Set(this.state.userOrders.map((order) => order.products))];
    //   console.log(list);
    return (
      <div>
        <h2>Order History</h2>
        {this.state.userOrders.map((order) => {
          return (
            <div>
              <div>Order # {order.number}</div>
              <div>Date : {order.createdAt.slice(0, 10)}</div>
              {/* <ul>
                {this.list.map((product) => {
                  return (
                    <li>
                      <img src={product.productImg} alt={product.name} />
                      {product.name}
                    </li>
                  );
                })}
              </ul> */}
            </div>
          );
        })}
      </div>
    );
  }
}

export default OrderHistory;
