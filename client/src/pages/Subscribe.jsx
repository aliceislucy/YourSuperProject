import React from "react";
import SubscribeForm from "../components/SubscribeForm";

// const Subscribe = () => {
//   return <SubscribeForm />;
// };

class Subscribe extends React.Component {
  render() {
    return (
      <div className="standard-section">
        <h1>Become a member</h1>
        
        <SubscribeForm />
      </div>
    );
  }
}

export default Subscribe;
