import React from "react";
import { Redirect, Route } from "react-router-dom";
import withUser  from "./../Auth/withUser";

const ProtectedRoute = ({ component: Component, context, ...rest }) => {
// console.log(context);
  if (context.isLoading) {
    return null;
  } else if (context.isLoggedIn) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  } else {
    return <Redirect to="/connection" />;
  }
};

export default withUser(ProtectedRoute);
