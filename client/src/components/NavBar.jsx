import React from "react";
import { NavLink } from "react-router-dom";
import withUser from "./../Auth/withUser";

const NavBar = (props) => {
  const { context } = props;
  console.log(props)

  const handleLogout = () => {
    context.removeUser();
  };

  return (
    <nav>
      <h3>NavBar</h3>

      <NavLink exact to="/">
        <div>YourSuperLogo</div>
      </NavLink>

      <ul className="nav-list">
        <li>
          <NavLink exact to="/press">
            Press + Media
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about">
            Our Story
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/subscribe">
            Subscribe
          </NavLink>
        </li>
        {/* Admin Link ==============================
         {context.isAdmin === true(
        <li>
          <NavLink exact to="/admin">
            Admin Page
          </NavLink>
        </li>)} */}

        {!context.isLoggedIn && (
          <React.Fragment>
            <li>
              <NavLink to="/connection">Log in or sign up</NavLink>
            </li>
          </React.Fragment>
        )}

        {context.isLoggedIn && (
          <>
            <li>
              <NavLink to="/profile">
                Hello {context.user && context.user.firstName}
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/cart">
                Cart
              </NavLink>
            </li>

            <li>
              <p onClick={handleLogout}>Logout</p>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default withUser(NavBar);
