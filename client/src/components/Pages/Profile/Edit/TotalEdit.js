import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

import Service from "../../../../service/auth.service";
import { withRouter } from "react-router-dom";

import "../../../../styelsheets/Profile.css"

class TotalEdit extends Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.state = {
    username: this.props.loggedInUser.username, email: this.props.loggedInUser.email, bio: this.props.loggedInUser.bio }
    
  }

  handleInputChange = e => {
   const { username, email, languagesSpoken, languagesLearning, availabilityDays, availabilityHours } = this.state;
  this.setState({
    username: "",
    email: "",
    bio:"",
    // languagesSpoken: [""],
    // languagesLearning: [""],
    // hobbies: [''],
    // availabilityDays: [""],
    // availabilityHours: [0]
  });
  };

//   handleSubmit = e => {
//     e.preventDefault();
//      const {
//        username,
//        email,
//        languagesSpoken,
//        languagesLearning,
//        availabilityDays,
//        availabilityHours
//      } = this.state;
//     this.service
//       .login(username, password)
//       .then(theLoggedUser => {
//         this.props.setUser(theLoggedUser.data);
//         this.props.closeModalWindow();
//         this.setState({ username: "", password: "" });
//         this.props.history.push("/profile");
//       })
//       .catch(err => {
//         console.log({ err });
//       });
//   };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <h1>Edit Profile</h1>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              onChange={this.handleInputChange}
              value={this.state.username}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={this.handleInputChange}
              value={this.state.email}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Bio</Form.Label>
            <Form.Control
              type="text"
              name="text"
              onChange={this.handleInputChange}
              value={this.state.bio}
            />
          </Form.Group>

          <Button variant="outline-dark" type="submit">
            Save Changes
          </Button>
        </Form>

        


        <br></br>
        <Button variant="outline-dark" onClick={this.props.closeModalWindow}>
          Cancel
        </Button>
      </>
    );
  }
}

export default withRouter(TotalEdit);
