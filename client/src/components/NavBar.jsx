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
      <nav className="navbar , nav1">
        <div id="logo">
          <NavLink exact to="/">
            <img
              id="logo"
              src="https://cdn.shopify.com/s/files/1/1523/0666/t/194/assets/logo.png?v=83684454748928667"
              alt="YourSuper Logo"
            />
          </NavLink>
        </div>

        <ul className="nav-list , nav1">
          <li>
            <NavLink
              className="navlink, boxLink"
              exact
              to="/products"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p className="link">Products</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink"
              exact
              to="/press+media"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p className="link">Press+Media</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink"
              exact
              to="/ourstory"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p className="link">OurStory</p>
            </NavLink>
          </li>

          <li>
            <NavLink
              className="navlink"
              exact
              to="/subscribe"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p className="link">Subscribe</p>
            </NavLink>
          </li>
          {context.isLoggedIn && (
            <>
              <li className="dashboardNav">
                <NavLink
                  to="/dashboard"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginLeft: "",
                  }}
                >
                  <p className="link">Dashboard</p>
                </NavLink>
              </li>
            </>
          )}

          {/* Admin Link ==============================
         {context.isAdmin === true(
        <li>
          <NavLink className="navlink" exact to="/admin">
            Admin Page
          </NavLink>
        </li>)} */}

          {!context.isLoggedIn && (
            <div>
              <React.Fragment>
                <li>
                  <NavLink
                    className="navlink"
                    to="/login"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <p className="link">Login</p>
                  </NavLink>
                </li>
              </React.Fragment>
            </div>
          )}

          {context.isLoggedIn && (
            <>
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
                  <i class="fas fa-sign-out-alt"></i>
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
