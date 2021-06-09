import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import NavBar from './components/NavBar'
import Footer from "./components/Footer"
import Subscribe from "./pages/Subscribe"
import ProductsList from "./pages/ProductList"
import OneProduct from "./pages/OneProduct"
import Cart from "./pages/Cart"
import Profile from "./pages/Profile"
import Dashboard from "./pages/Dashboard"
import Connection from "./pages/Connection"
import Press from "./pages/Press"
import AdminHome from "./admin/AdminHome"
import ProtectedRoute from "./components/ProtectedRoute"



function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/subscribe' component={Subscribe} />
        <Route exact path='/products' component={ProductsList} />
        <Route exact path="/products/:id" component={OneProduct} />
        <ProtectedRoute exact path='/cart' component={Cart} />
        {/* <Route exact path='/cart' component={Cart} /> */}
        <ProtectedRoute exact path='/profile' component={Profile} /> 
        {/* <Route exact path='/profile' component={Profile} />  */}
        <ProtectedRoute exact path='/dashboard' component={Dashboard} /> 
        {/* <Route exact path='/dashboard' component={Dashboard} />  */}
        <Route exact path='/connection' component={Connection} />        
        {/* <Route exact path='/press' component={Press} />    */}
        <ProtectedRoute exact path='/admin' component={AdminHome} />
        {/* <Route exact path='/admin' component={AdminHome} /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
