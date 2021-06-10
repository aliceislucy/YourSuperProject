import React from "react";
import { Redirect, Route } from "react-router-dom";
import withUser  from "../Auth/withUser";

const ProtectedRouteAdmin = ({ component: Component, context, ...rest }) => {

  if (context.isLoading) {
    return null;
  } else if (context.isLoggedIn  && context.user.isAdmin === true) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  } else {
    return <Redirect to="/connection" />;
  }
};

export default withUser(ProtectedRouteAdmin);
