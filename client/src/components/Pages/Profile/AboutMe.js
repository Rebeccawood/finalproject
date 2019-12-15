import React, { Component } from "react";
import ButtonsEdit from "./ButtonsEdit";
import {  Button, Container } from "react-bootstrap";

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <img
          src={this.props.user.imgPath}
          className="profile-img"
          alt="profile-picture"
        />

        {this.props.user.buddy ? (
          <p>This is a buddy-profile</p>
        ) : (
          <p>This is a teacher-profile</p>
        )}

        {this.props.loggedInUser == this.props.user ? (
          <ButtonsEdit user={this.props.user} setUser={this.props.setUser} />
        ) : (
            <Button variant="outline-dark"> Message me!</Button>
        )}
        <hr></hr>
        <h5>About me:</h5>
        <p>{this.props.user.bio}</p>
      </Container>
    );
  }
}
export default AboutMe;
