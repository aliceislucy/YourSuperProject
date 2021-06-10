import React from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import withUser from "./../Auth/withUser";
import Button from "../components/Button";
import "./../styles/profile.css";

class Profile extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    profileImg: "",
    email: "",
    password: "",
    address: "",
    isMember: false,
    isSubmitted: false,
  };

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_BACKEND_URL+"/api/user/", { withCredentials: true })
      .then((res) => {
        let profile = res.data
        this.setState({
            firstName: profile.firstName,
            lastName: profile.lastName,
            profileImg: profile.profileImg,
            email: profile.email,
            password: profile.password,
            address: profile.address,
            isMember: profile.isMember,
        });
      })
      .catch((err) => {
        console.log(err);
      });
      console.log("------------- THIS.PROPS ------------");
      console.log(this.props);
  }

  handleChange = (event) => {
    let { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const updateValues = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        profileImg: this.state.profileImg,
        email: this.state.email,
        password: this.state.password,
        address: this.state.address,
    };

    axios
      .post(process.env.REACT_APP_BACKEND_URL+"/api/user/", updateValues, {withCredentials: true})
      .then(() => {
        this.setState({
            isSubmitted: true,
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  render() {
    if (this.state.isSubmitted) {
      return <Redirect to="/dashboard" />;
    }
      return (
      <div className="standard-section profile">
        <h1>Update profile</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="picture">
            <img
              src={this.state.profileImg}
              alt={this.state.firstName}
            />
            <label htmlFor="image">Update profile picture :</label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={this.handleChange}
            />
          </div>

          <div className="formtext">
            <div className="section">
            <h2>Name</h2>
              <div>
                <label htmlFor="firstName">First name :</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </div>

              <div>
                <label htmlFor="lastName">Last name :</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          

          <div className="section">
            <h2>Email</h2>
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="section">
            <h2>Password</h2>
            <div>
              <div>
                <label htmlFor="currentPassword">Current password :</label>
                <input
                  type="text"
                  name="currentPassword"
                  id="currentPassword"
                  onChange={this.handleChange}
                />
              </div>

              <div>
                <label htmlFor="newPassword">New password :</label>
                <input
                  type="text"
                  name="newPassword"
                  id="newPassword"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Address</h2>
            <input
              type="address"
              name="address"
              id="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </div>

          <div className="section">
            <h2>Membership</h2>

            {this.props.context.user.isMember && (
              <>
                <p>You are a Your Super member !</p>
                <p>
                  Great news ! You get 20% off every single order and if you check your email
                  you'll find our weekly yummy recipes.
                </p>
              </>
            )}
            {!this.props.context.user.isMember && (
              <>
                <p>You are not a member yet</p>
                <p>
                  Wanna get 20% off every single order and receive our weekly
                  yummy recipes ?
                </p>
                <Link to="/subscribe">Subscribe now !</Link>
              </>
            )}
          </div>

          <Button text="Update now"/>
          </div>
        </form>
      </div>
    );
  }
}

export default withUser(Profile);

// route backend dédiée à update password
// /api/user
// get currentUser
// manip décrypter current password 
// comparer si match current password input with curent password database
// si non please enter again
// si oui :
// update password with new Password.bcrypt 
