import React from "react";
import axios from "axios";

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
      
    return (
      <div>
        <h2>Order History</h2>
        {this.state.userOrders.map((order) => {
          return (
            <div key={order.number}>
              <div>Order # {order.number}</div>
              <div>Date : {order.createdAt.slice(0, 10)}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default OrderHistory;
