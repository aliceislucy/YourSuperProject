import React from "react";
import { Link } from "react-router-dom";
import withUser from "./../Auth/withUser";
import apiHandler from "./../apiHandler";
import Button from "../components/Button";


class SubscribeForm extends React.Component {
  state = {
    email: "",
    isMember: false,
    flashMessage: false
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
        this.props.context.setUser(data)
        this.setState({ isMember: data.isMember});
      })
      .catch((error) => {
        console.log(error);
      });

      console.log(this.props.context);

      let currentUser = this.props.context.user


      if(currentUser === null) {
        this.setState({
          flashMessage: true
        })
      }

      if(currentUser.isMember) {
        this.setState({
          isMember: true
        })
      }

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
        {this.state.flashMessage && (
        <div className="flashMessage">Please sign up first to become a member</div>
        )}
        {this.state.isMember && (
        <div className="flashMessage">Congrats you're a member ! Enjoy ;)</div>
        )}
      </section>
    );
  }
}

export default withUser(SubscribeForm);
