import React from "react";
import SubscribeForm from "../components/SubscribeForm";

// const Subscribe = () => {
//   return <SubscribeForm />;
// };

class Subscribe extends React.Component {
  render() {
    return (
      <div>
        <h2>Subscribe page</h2>
        
        <SubscribeForm />
      </div>
    );
  }
}

export default Subscribe;
