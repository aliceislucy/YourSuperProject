import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import NavBar from './components/NavBar'
import Footer from "./components/Footer"
import Subscribe from "./pages/Subscribe"
import ProductsList from "./pages/ProductList"
import Cart from "./pages/Cart"



function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/productslist' conponent={ProductsList} />
        <Route exact path='/subscribe' conponent={Subscribe} />
        <Route exact path='/cart' conponent={Cart} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
