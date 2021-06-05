import React from "react";
import Home_Section1 from "./../components/Home_Section1"
import Home_Section2 from "./../components/Home_Section2"

class Home extends React.Component {
  render() {
    return (
      <div>
        <Home_Section1 />
        <Home_Section2 />
      </div>
    );
  }
}

export default Home;