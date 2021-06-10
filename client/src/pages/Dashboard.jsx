import React from "react";
import CartDisplayer from "../components/CartDisplayer";
import axios from "axios";
import { Link } from "react-router-dom";
import OrderHistory from "../components/OrderHistory";
import SumCart from "../components/SumCart";
import "./../styles/dashboard.css";

class Dashboard extends React.Component {
  state = {
    user: {},
  };

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_BACKEND_URL+"/api/user/", { withCredentials: true })
      .then((res) => {
        this.setState({
          user: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="standard-section dashboard">
        <div className="header">
          <h1>My Dashboard</h1>
          <div className="update-profile">
            <Link className="link" style={{ textDecoration: "none", color: "black", margin: "3vh" }} to="/profile">Update my profile</Link>
            <img
              src={this.state.user.profileImg}
              alt={this.state.user.firstName}
              className="profile-picture"
            />
          </div>
        </div>

        <div>
          <div>
            <h2 className="hello">Hello {this.state.user.firstName} !</h2>

            <OrderHistory />
          </div>

          <CartDisplayer />
          <SumCart />
        </div>
      </div>
    );
  }
}

export default Dashboard;
