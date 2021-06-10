import React from "react";
import withUser from "./../Auth/withUser";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import apiHandler from "./../apiHandler";

class SubscribeForm extends React.Component {
  state = {
    email: "",
    isMember: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .subscribe(this.state)
      .then((data) => {
        console.log(data);
        // this.props.context.setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });

      // if(isMember) {
      //   this.setState({
      //     isMember: !isMember
      //   })
      }  

  render() {
    return (
      <section>
        <form
          autoComplete="off"
          className="form"
          onSubmit={this.handleSubmit}
          action=""
        >
          <label className="label" htmlFor="email" >Email</label>
          <input
            onChange={this.handleChange}
            value={this.state.email}
            type="email"
            id="email"
            name="email"
          />
          <Button text="Subscribe"/>
        </form>
        <div>
          <p>To become a privileged member <Link to="/signup">create your account</Link> first</p>
        </div>
      </section>
    );
  }
}

export default withUser(SubscribeForm);
