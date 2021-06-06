import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <hr />
        <h3>NavBar</h3>
      <NavLink exact to="/">
        <div>YourSuper</div>
      </NavLink>
      <ul className="nav-list">
        <li>
          <NavLink exact to="/productslist">Products</NavLink>
        </li>
        <li>
          <NavLink exact to="/subscribe">Subscribe</NavLink>
        </li>
      </ul>

      <ul>
          <li>
              <NavLink exact to ="/cart">Cart</NavLink>
          </li>
      </ul>
      <hr />
    </div>
  );
};

export default NavBar;
