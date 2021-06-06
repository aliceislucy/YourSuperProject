import React, { Component } from "react";
import apiHandler from "./../apiHandler";

//  THIS COMPONENT IS FOUND IN THE INDEX AND IS NECESSARY TO MAINTAIN
//  THE USER'S SESSION EVEN WHEN REFRESH
// Je dois tout console logger pour capter entièrement la fonction

export const AuthContext = React.createContext();


class AuthProvider extends Component {
  state = {
    user: null,
    isLoggedIn: false,
    isLoading: true,
  };
  
  componentDidMount() {
    apiHandler
    .isLoggedIn()
    .then((data) => {
      this.setState({ user: data, isLoggedIn: true, isLoading: false });
    })
    .catch((error) => {
      console.log(error);
      this.setState({ user: null, isLoggedIn: false, isLoading: false });
    });
  }
  
  setUser = (user) => {
    this.setState({ user, isLoggedIn: true });
  };
  
  removeUser = () => {
    //console.log("ptit chat");
    this.setState({ user: null, isLoggedIn: false });
  };

  render() {
    //  Setup all the values/functions you want
    //  to expose to anybody reading from the AuthContext.
    const authValues = {
      user: this.state.user,
      setUser: this.setUser,
      removeUser: this.removeUser,
      isLoggedIn: this.state.isLoggedIn,
      isLoading: this.state.isLoading,
    };
    return (
      <AuthContext.Provider value={authValues}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthProvider;
