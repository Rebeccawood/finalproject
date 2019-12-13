import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

import Service from "../../../../service/auth.service";
import { withRouter } from "react-router-dom";

import "../../../../styelsheets/Profile.css";

class EditBuddyProile extends Component {
  constructor(props) {
    super(props);
    this.Service = new Service();
    this.state = {
      bio: "",
      languagesSpoken: [],
      learningLanguages: [],
      availabilityHours: [],
      availabilityDays: [],
      interests: [],
      age: 18,
      gender: "",
      city: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.Service.newBuddy(this.state)
      .then(newBuddy => {
        this.props.setUser(newBuddy.data);
        this.setState({
          bio: "",
          languagesSpoken: [],
          learningLanguages: [],
          availabilityHours: [],
          availabilityDays: [],
          interests: [],
          age: 18,
          gender: "",
          city: ""
        });
        this.props.closeModalWindow();
        this.props.history.push("/profile");
      })
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    const name = e.target.name;
    if (
      name == "languagesSpoken" ||
      name == "learningLanguages" ||
      name == "interests" ||
      name == "availabilityHours" ||
      name == "availabilityDays"
    ) {
      const languageValue = e.target.value;
      const array = [...this.state[name]];

      array.push(languageValue);

      this.setState({ [name]: array }, () => console.log(this.state[name]));
    } else {
      let { name, value } = e.target;
      console.log(name, value);
      this.setState({ [name]: value });
    }
  };

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

          <Form.Group>
            <Form.Label>Languages I already speak</Form.Label>
            <Form.Control
              type="text"
              name="languagesSpoken"
              onChange={this.handleInputChange}
              value={this.state.languagesSpoken}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Languages I am learning</Form.Label>
            <Form.Control
              type="text"
              name="learningLanguages"
              onChange={this.handleInputChange}
              value={this.state.learningLanguages}
            />
          </Form.Group>

          <Form.Group controlId="formGridState">
            <Form.Label>Available Days:</Form.Label>
            <Form.Control
              as="select"
              name="availabilityDays"
              onChange={this.handleInputChange}
              value={this.state.availabilityDays}
            >
              <option>...Choose</option>
              <option>Weekdays</option>
              <option>Weekends</option>
              <option>All days</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formGridState">
            <Form.Label>Available Hours:</Form.Label>
            <Form.Control
              as="select"
              name="availabilityHours"
              onChange={this.handleInputChange}
              value={this.state.availabilityHours}
            >
              <option>...Choose</option>
              <option>Mornings</option>
              <option>Afternoons</option>
              <option>Evenings</option>
              <option>All day</option>
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
            <Form.Label>Your City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              onChange={this.handleInputChange}
              value={this.state.city}
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

export default withRouter(EditBuddyProile);
