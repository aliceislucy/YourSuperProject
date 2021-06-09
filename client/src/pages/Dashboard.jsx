import React from "react";
import CartDisplayer from "../components/CartDisplayer";
import axios from "axios";
import { Link } from "react-router-dom";
import OrderHistory from "../components/OrderHistory"

class Dashboard extends React.Component {
  state = {
    user: {},
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/user/", { withCredentials: true })
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
      <div>
        <div>
          <div>
            <img
              src={this.state.user.profileImg}
              alt={this.state.user.firstName}
            />
            <h1>My Dashboard</h1>
          </div>

          <Link to="/profile">Update my profile</Link>
        </div>

        <div>
          <div>
            <p>Hello {this.state.user.firstName} !</p>

            {/* <OrderHistory /> */}
          </div>

          <CartDisplayer />
        </div>
      </div>
    );
  }
}

export default Dashboard;
