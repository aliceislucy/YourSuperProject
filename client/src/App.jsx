import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import NavBar from './components/NavBar'
import Footer from "./components/Footer"
import Subscribe from "./pages/Subscribe"
import ProductsList from "./pages/ProductList"
import OneProduct from "./pages/OneProduct"
import Cart from "./pages/Cart"



function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/products' component={ProductsList} />
        <Route exact path='/subscribe' component={Subscribe} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path="/products/:id" component={OneProduct} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
