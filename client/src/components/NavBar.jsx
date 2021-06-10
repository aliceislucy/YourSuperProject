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
    <>
      <nav className="navbar">
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
            <NavLink
              className="navlink"
              exact
              to="/products"
              style={{ textDecoration: "none", color: "black" }}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink"
              exact
              to="/press+media"
              style={{ textDecoration: "none", color: "black" }}
            >
              Press + Media
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink"
              exact
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              Our Story
            </NavLink>
          </li>
          
          <li>
            <NavLink
              className="navlink"
              exact
              to="/subscribe"
              style={{ textDecoration: "none", color: "black" }}
            >
              Subscribe
            </NavLink>
          </li>
        </ul>
        {/* Admin Link ==============================
         {context.isAdmin === true(
        <li>
          <NavLink className="navlink" exact to="/admin">
            Admin Page
          </NavLink>
        </li>)} */}

        <ul className="nav-list">
          {!context.isLoggedIn && (
            <React.Fragment>
              <li>
                <NavLink
                  className="navlink"
                  to="/login"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Login
                </NavLink>
              </li>
            </React.Fragment>
          )}

          {context.isLoggedIn && (
            <>
              <li>
                <NavLink
                  className="navlink"
                  to="/dashboard"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <i className="fas fa-user-circle"></i>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navlink"
                  exact
                  to="/cart"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <i className="fas fa-shopping-cart"></i>
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="navlink"
                  to="/"
                  onClick={handleLogout}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Logout
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default withUser(NavBar);
