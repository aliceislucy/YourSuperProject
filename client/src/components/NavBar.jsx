import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
         <hr />
      <NavLink exact to="/">
        <div>YourSuper</div>
      </NavLink>
      {/* <ul className="nav-list">
        <li>
          <NavLink>Product</NavLink>
        </li>
        <li>
          <NavLink>Our Story</NavLink>
        </li>
        <li>
          <NavLink>Press/Media</NavLink>
        </li>
        <li>
          <NavLink>Subscribe</NavLink>
        </li>
        <li>
          <NavLink>Signup</NavLink>
        </li>
      </ul> */}
       <hr />
    </div>
  );
};

export default NavBar;
