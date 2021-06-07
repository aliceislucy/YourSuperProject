import React from "react";
import HomeSection1 from "./../components/HomeSection1"
import HomeSection2 from "./../components/HomeSection2"

class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeSection1 />
        <HomeSection2 />
      </div>
    );
  }
}

export default Home;