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
import Press from "./pages/Press"
import OurStory from "./pages/OurStory"
import ProtectedRoute from "./components/ProtectedRoute"
import ProtectedRouteAdmin from "./components/ProtectedRouteAdmin"
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
// Admin Import
import AdminHome from "./admin/AdminHome"
import AdminProductForm from "./admin/AdminProductForm"
import EditProductFrom from "./admin/EditProductForm"
// 404 page
import NotFound from "./pages/NotFound"
// CSS
import "./styles/app.css";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/subscribe' component={Subscribe} />
        <Route exact path='/products' component={ProductsList} />
        <Route exact path="/products/:id" component={OneProduct} />
        <Route exact path="/press+media" component={Press} />
        <Route exact path="/ourstory" component={OurStory} />
        <ProtectedRoute exact path='/cart' component={Cart} />
        <ProtectedRoute exact path='/profile' component={Profile} /> 
        <ProtectedRoute exact path='/dashboard' component={Dashboard} /> 
        <Route exact path='/login' component={LoginForm} />        
        <Route exact path='/signup' component={SignUpForm} />        
        <ProtectedRouteAdmin exact path='/admin' component={AdminHome} />
        <ProtectedRouteAdmin exact path='/admin/createproduct' component={AdminProductForm} />
        <ProtectedRouteAdmin exact path='/admin/edit/:id' component={EditProductFrom} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
