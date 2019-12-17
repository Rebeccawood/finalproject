import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class Preferences extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <h5>Buddy Search Preferences</h5>
        <ul>
          <li>Min Age: {this.props.user.buddy.buddyPreferences.minAge}</li>
          <li>Max Age: {this.props.user.buddy.buddyPreferences.maxAge}</li>
          <li>Gender: {this.props.user.buddy.buddyPreferences.gender}</li>
        </ul>
        {/* <h5>Also looking for teachers?</h5>{" "}
        <p>{this.props.user.buddy.buddyPreferences.teacher}</p> */}
      </Container>
    );
  }
}

export default withRouter(Preferences);
