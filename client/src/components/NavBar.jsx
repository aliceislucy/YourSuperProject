import React from "react";
import { NavLink } from "react-router-dom";
import withUser from "./../Auth/withUser";
import "./../styles/navbar.css";

const NavBar = (props) => {
  const { context } = props;

  const handleLogout = () => {
    context.removeUser();
  };

  return (
    <nav>
      <div id="logo">
        <NavLink exact to="/">
          <img
            id="logo"
            src="https://cdn.shopify.com/s/files/1/1523/0666/t/194/assets/logo.png?v=83684454748928667"
            alt="YourSuper Logo"
          />
        </NavLink>
      </div>

      <ul className="nav-list">
        <li>
          <NavLink className="navlink" exact to="/press+media">
            Press + Media
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" exact to="/about">
            Our Story
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" exact to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" exact to="/subscribe">
            Subscribe
          </NavLink>
        </li>
        {/* Admin Link ==============================
         {context.isAdmin === true(
        <li>
          <NavLink className="navlink" exact to="/admin">
            Admin Page
          </NavLink>
        </li>)} */}

        {!context.isLoggedIn && (
          <React.Fragment>
            <li>
              <NavLink className="navlink" to="/login">Log in or sign up</NavLink>
            </li>
          </React.Fragment>
        )}

        {context.isLoggedIn && (
          <>
            <li>
              <NavLink className="navlink" to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink className="navlink" exact to="/cart">
                Cart
              </NavLink>
            </li>

            <li>
              <NavLink className="navlink" to="/connection" onClick={handleLogout}>
                Logout
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default withUser(NavBar);
