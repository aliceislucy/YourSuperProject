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
      .get(process.env.REACT_APP_BACKEND_URL + "/api/user/", {
        withCredentials: true,
      })
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
      <div className="standard-section , dashboard">
        <div className="header">
          <h1>My Dashboard</h1>
          <div className="update-profile">
            <Link
              className="link"
              style={{
                textDecoration: "none",
                color: "#4d0fd4",
                fontWeight: "600",
                fontSize: "1.5em",
                margin: "3vh",
              }}
              to="/profile"
            >
              Update my profile
            </Link>
            <img
              src={this.state.user.profileImg}
              alt={this.state.user.firstName}
              className="profile-picture"
            />
          </div>
        </div>

        <h2 className="hello">Hello <em>{this.state.user.firstName}</em> !</h2>
        <div className="flexpage">
          <div className="cartsum">
            <CartDisplayer />
            <SumCart />
          </div>

          <OrderHistory />
        </div>
      </div>
    );
  }
}

export default Dashboard;
