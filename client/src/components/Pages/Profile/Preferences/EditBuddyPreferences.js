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
      maxAge: this.props.user.buddy.buddyPreferences.maxAge,
      minAge: this.props.user.buddy.buddyPreferences.minAge,
      gender: this.props.user.buddy.buddyPreferences.gender,
     
    };
  }

  handleSubmit = e => {
    
    e.preventDefault();
    this.service
      .newPreferences(this.state)
      .then(newPreferences => {
        console.log(newPreferences, "this is the updated user ");
        this.props.setUser(newPreferences.data);
        this.setState({
          maxAge: this.props.user.buddy.buddyPreferences.maxAge,
          minAge: this.props.user.buddy.buddyPreferences.minAge,
          gender: this.props.user.buddy.buddyPreferences.gender,
         
        });
        this.props.closeModalWindow();
        this.props.history.push("/profile");
      })
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    let { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>Choose your Buddy Preferences</h1>

        <Form.Group>
          <Form.Label>Min Age</Form.Label>
          <Form.Control
            type="number"
            id="input1"
            name="minAge"
            onChange={this.handleInputChange}
            value={this.state.minAge}
          />
        </Form.Group>

        <Form.Group >
          <Form.Label>Max Age</Form.Label>
          <Form.Control
            type="number"
            id="input2"
            name="maxAge"
            onChange={this.handleInputChange}
            value={this.state.maxAge}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Gender</Form.Label>
          <Form.Control
            as="select"
            id="input3"
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

        {/* <Form.Group controlId="formGridState">
          <Form.Label>Are you also looking for teachers?</Form.Label>
          <Form.Control
            as="select"
            name="teacher"
            onChange={this.handleInputChange}
            value={this.state.teacher}
          >
            <option>...choose</option>
            <option>Yes</option>
            <option>No</option>
          </Form.Control>
        </Form.Group> */}

        <Button variant="outline-dark" type="submit">
          Save Changes
        </Button>
      </Form>
    );
  }
}

export default withRouter(BuddyPreferences);
