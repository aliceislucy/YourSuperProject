import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import NavBar from './components/NavBar'
import Footer from "./components/Footer"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
