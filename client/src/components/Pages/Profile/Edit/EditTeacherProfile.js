import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

import Service from "../../../../service/auth.service";
import FilesService from "../../../../service/file.service";
import { withRouter } from "react-router-dom";

import "../../../../styelsheets/Profile.css";
import "../../../../styelsheets/Dashboard.css";

class EditTeacherProfile extends Component {
  constructor(props) {
    super(props);
    this.Service = new Service();
    this.filesService = new FilesService();
    this.state = {
      user: {
        username: this.props.loggedInUser.username,
        email: this.props.loggedInUser.email,
        bio: this.props.loggedInUser.bio,
        teachingLanguages: [this.props.loggedInUser.teachingLanguages],
        availabilityHours: [this.props.loggedInUser.availabilityHours],
        availabilityDays: [this.props.loggedInUser.availabilityDays],
        price: this.props.loggedInUser.price,
        qualifications: this.props.loggedInUser.qualifications,
        conditions: this.props.loggedInUser.conditions,
        age: this.props.loggedInUser.age,
        gender: this.props.loggedInUser.gender,
        city: this.props.loggedInUser.city
      },
      disabledButton: false,
      buttonText: "Save Changes"
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.Service.newTeacher(this.state)
      .then(newTeacher => {
        this.props.setUser(newTeacher.data);
        this.setState({
          user: {
            username: this.props.loggedInUser.username,
            email: this.props.loggedInUser.email,
            bio: this.props.loggedInUser.bio,
            teachingLanguages: [this.props.loggedInUser.teachingLanguages],
            availabilityHours: [this.props.loggedInUser.availabilityHours],
            availabilityDays: [this.props.loggedInUser.availabilityDays],
            price: this.props.loggedInUser.price,
            qualifications: this.props.loggedInUser.qualifications,
            conditions: this.props.loggedInUser.conditions,
            age: this.props.loggedInUser.age,
            gender: this.props.loggedInUser.gender,
            city: this.props.loggedInUser.city
          }
        });
        this.props.closeModalWindow();
        this.props.history.push("/profile");
      })
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    const name = e.target.name;
    if (
      name === "teachingLanguages" ||
      name === "availabilityHours" ||
      name === "availabilityDays"
    ) {
      const languageValue = e.target.value;
      const array = [...this.state.user[name]];

      array.push(languageValue);

      this.setState({
        user: { ...this.state.user, [name]: array }
      });
    } else {
      let { name, value } = e.target;
      console.log(name, value);
      this.setState({
        user: { ...this.state.user, [name]: value }
      });
    }
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <h1>Teacher Profile</h1>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              onChange={this.handleInputChange}
              value={this.state.user.username}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={this.handleInputChange}
              value={this.state.user.email}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>About me</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              type="text"
              name="bio"
              onChange={this.handleInputChange}
              value={this.state.user.bio}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Qualifications</Form.Label>
            <Form.Control
              type="text"
              name="qualifications"
              onChange={this.handleInputChange}
              value={this.state.user.qualifications}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>
              Languages I teach (you can pick more than one):
            </Form.Label>
            <Form.Control
              as="select"
              multiple
              name="teachingLanguages"
              onChange={this.handleInputChange}
              value={this.state.user.teachingLanguages}
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
              value={this.state.user.availabilityDays}
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
              value={this.state.user.availabilityHours}
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
              value={this.state.user.age}
            />
          </Form.Group>

          <Form.Group controlId="formGridState">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              name="gender"
              onChange={this.handleInputChange}
              value={this.state.user.gender}
            >
              <option>...Choose</option>
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
              value={this.state.user.price}
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
              value={this.state.user.conditions}
            />
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

          <Button
            variant="outline-dark"
            type="submit"
            disabled={this.state.disabledButton}
          >
            {this.state.buttonText}
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

export default withRouter(EditTeacherProfile);
