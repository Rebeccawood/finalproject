import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

import Service from "../../../../service/profile.service";
import { withRouter } from "react-router-dom";

import "../../../../styelsheets/Profile.css";

class BuddyPreferences extends Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.state = {
      maxAge: 100,
      maxAge: 18,
      gender: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.service
      .newPreferences(this.state)
      .then(newBuddy => {
        this.props.setUser(newBuddy.data);
        this.setState({
          maxAge: 100,
          minAge: 18,
          gender: ""
        });
        this.props.closeModalWindow();
        this.props.history.push("/profile");
      })
      .catch(err => console.log(err));
  };

  handleInputChange = () => {
    let { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>Choose your Buddy Preferences</h1>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Min Age</Form.Label>
          <Form.Control
            type="number"
            name="minAge"
            onChange={this.handleInputChange}
            value={this.state.minAge}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Max Age</Form.Label>
          <Form.Control
            type="number"
            name="minAge"
            onChange={this.handleInputChange}
            value={this.state.maxAge}
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
            <option>...choose</option>
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </Form.Control>
        </Form.Group>

        <Button variant="outline-dark" type="submit">
          Save Changes
        </Button>
      </Form>
    );
  }
}

export default withRouter(BuddyPreferences);
