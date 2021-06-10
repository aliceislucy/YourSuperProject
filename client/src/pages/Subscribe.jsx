import React from "react";
import { Link } from "react-router-dom";
import SubscribeForm from "../components/SubscribeForm";
import "./../styles/subscribe.css";


class Subscribe extends React.Component {
  render() {
    return (
      <div className="standard-section subscribe">
        <h1>Become a member</h1>
        <Link to="/signup" style={{ textDecoration: "none", color: "#5b00a6", fontWeight: "600"}}>Create your account and become a privileged member</Link>
        <p>Subscribing means 20% off your orders (yes, all of them) and as if that wasn't enough you'll get our weekly yummy recipes ! <br/>Make your meal the real deal and subscribe.</p>
        <SubscribeForm />
      </div>
    );
  }
}

export default Subscribe;
