import React from "react";
import withUser from "../Auth/withUser";

class Cart extends React.Component {
  render() {
    return (
      <div>
        <h2>Cart Page</h2>
      </div>
    );
  }
}

export default withUser(Cart); // <= withUser don"t know why.. but it's in the scoby2oo's lab
