import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

import Service from "../../../service/profile.service"
import { withRouter } from "react-router-dom";

import "../../../styelsheets/Profile.css";

class BuddyEdit extends Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.state = {
    username: this.props.loggedInUser.username, email: this.props.loggedInUser.email, bio: this.props.loggedInUser.bio }
    
  }

  handleInputChange = e => {
   const { username, email, bio } = this.state;
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
          <h1>Buddy Profile</h1>
         
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>About me</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              type="text"
              name="bio"
              onChange={this.handleInputChange}
              value={this.state.bio}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Languages I already speak</Form.Label>
            <Form.Control
              as="select"
              multiple
              name="languages"
              onChange={this.handleInputChange}
              value={this.state.languages}
            >
              <option>English</option>
              <option>German</option>
              <option>Spanish</option>
              <option>French</option>
              <option>Italian</option>
              <option>Portuguese</option>
              <option>Russian</option>
              <option>Chinese/Mandarin</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Languages I am learning</Form.Label>
            <Form.Control
              as="select"
              multiple
              name="languages"
              onChange={this.handleInputChange}
              value={this.state.languages}
            >
              <option>English</option>
              <option>German</option>
              <option>Spanish</option>
              <option>French</option>
              <option>Italian</option>
              <option>Portuguese</option>
              <option>Russian</option>
              <option>Chinese/Mandarin</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              onChange={this.handleInputChange}
              value={this.state.age}
            />
          </Form.Group>

          <Form.Group controlId="formGridState">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              name="gender"
              onChange={this.handleInputChange}
              value={this.state.gender}
            >
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Hobbies</Form.Label>
            <Form.Control
              type="text"
              name="email"
              onChange={this.handleInputChange}
              value={this.state.qualifications}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control
              name="imageUrl"
              type="file"
              onChange={this.handleFileUpload}
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

export default withRouter(BuddyEdit);
