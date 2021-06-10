import React from "react";
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
      <>
        <form
          autoComplete="off"
          className="form"
          onSubmit={this.handleSubmit}
          action=""
        >
          <div className="form-group">
          <label className="label" htmlFor="email">Email</label>
          <input
            onChange={this.handleChange}
            value={this.state.email}
            type="email"
            id="email"
            name="email"
          />
          </div>
          <div className="margin"></div>
          <Button text="Subscribe"/>
        </form>

        {this.state.flashMessage && (
        <div className="flashMessage">Please sign up first to become a member</div>
        )}
        {this.state.isMember && (
        <div className="flashMessage">Congrats you're a member ! Enjoy</div>
        )}
      </>
    );
  }
}

export default withUser(SubscribeForm);
