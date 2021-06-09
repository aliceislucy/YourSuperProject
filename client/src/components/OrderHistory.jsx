import React from "react";
import CartDisplayer from "../components/CartDisplayer";
import axios from "axios";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  state = {
    userOrders: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/user/", { withCredentials: true })
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
    return <div>{this.state.userOrders.date}</div>;
  }
}

export default Dashboard;
