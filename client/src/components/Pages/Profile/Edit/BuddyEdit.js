import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

import Service from "../../../../service/auth.service";
import { withRouter } from "react-router-dom";

import "../../../../styelsheets/Profile.css";

class BuddyEdit extends Component {
  constructor(props) {
    super(props);
    this.Service = new Service();
    this.state = {
      bio: "",
      languagesSpoken: [],
      learningLanguages: [],
      availabilityHours: [],
      availabilityDays: [],
      age: 0,
      gender: ""
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
          age: 18,
          gender: ""
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

          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>
              Languages I already speak (you can pick more than one):
            </Form.Label>
            <Form.Control
              as="select"
              multiple
              name="languagesSpoken"
              onChange={this.handleInputChange}
              value={this.state.languagesSpoken}
            >
              <option>English</option>
              <option>German</option>
              <option>Spanish</option>
              <option>French</option>
              <option>Italian</option>
              <option>Portuguese</option>
              <option>Russian</option>
              <option>Mandarin Chinese</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>
              Languages I am learning (you can pick more than one):
            </Form.Label>
            <Form.Control
              as="select"
              multiple
              name="learningLanguages"
              onChange={this.handleInputChange}
              value={this.state.learningLanguages}
            >
              <option>English</option>
              <option>German</option>
              <option>Spanish</option>
              <option>French</option>
              <option>Italian</option>
              <option>Portuguese</option>
              <option>Russian</option>
              <option>Mandarin Chinese</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>
              Days of the week I am available (you can pick more than one):
            </Form.Label>
            <Form.Control
              as="select"
              multiple
              name="availabilityDays"
              onChange={this.handleInputChange}
              value={this.state.availabilityDays}
            >
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>
              Hours I am available (you can pick more than one):
            </Form.Label>
            <Form.Control
              as="select"
              multiple
              name="availabilityHours"
              onChange={this.handleInputChange}
              value={this.state.availabilityHours}
            >
              <option>8:00 - 9:00</option>
              <option>9:00 - 10:00</option>
              <option>10:00 - 11:00</option>
              <option>11:00 - 12:00</option>
              <option>12:00 - 13:00</option>
              <option>13:00 - 14:00</option>
              <option>14:00 - 15:00</option>
              <option>15:00 - 16:00</option>
              <option>16:00 - 17:00</option>
              <option>17:00 - 18:00</option>
              <option>18:00 - 19:00</option>
              <option>19:00 - 20:00</option>
              <option>20:00 - 21:00</option>
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
              <option>...choose</option>
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Hobbies</Form.Label>
            <Form.Control
              type="text"
              name="hobbies"
              onChange={this.handleInputChange}
              value={this.state.hobbies}
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
