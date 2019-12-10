import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import "../../../styelsheets/Dashboard.css";
import Service from "../../../service/auth.service";
import { withRouter } from "react-router-dom";

import "../../../styelsheets/Profile.css";

class TeacherEdit extends Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.state = {
      username: "",
      email: "",
      bio: "",
      languages: "",
      price: "",
      availabilityDays: "",
      availabilityHours: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      username,
      email,
      bio,
      languages,
      price,
      availabilityDays,
      availabilityHours
    } = this.state;
    this.service
      .updateTeacher(username, email, bio, languages, price)
      .then(theLoggedUser => {
        this.props.setUser(theLoggedUser.data);
        this.props.closeModalWindow();
        this.setState({
          username: "",
          email: "",
          bio: "",
          languages: "",
          price: "",
          availabilityDays: "",
          availabilityHours: ""
        });
        this.props.history.push("/profile");
      })
      .catch(err => {
        console.log({ err });
      });
  };

  handleInputChange = e => {
    let { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <h1>Teacher Profile</h1>
          {/* <Form.Group>
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
          </Form.Group> */}

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

          <Form.Group>
            <Form.Label>Qualifications</Form.Label>
            <Form.Control
              type="text"
              name="email"
              onChange={this.handleInputChange}
              value={this.state.qualifications}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Languages I teach</Form.Label>
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
            <Form.Label>Price/hour (Euro)</Form.Label>
            <Form.Control
              type="number"
              name="price"
              onChange={this.handleInputChange}
              value={this.state.price}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Other conditions</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              type="text"
              name="conditions"
              onChange={this.handleInputChange}
              value={this.state.conditions}
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

export default withRouter(TeacherEdit);
