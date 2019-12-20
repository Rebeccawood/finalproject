import React, { Component } from "react";
import List from "./List";
import { Container } from "react-bootstrap";
class Availability extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <h5>Available Days:</h5>
        <ul>
          {this.props.user.availabilityDays.map((day, idx) => (
            <List key={idx} list={day} />
          ))}
        </ul>
        <hr></hr>
        <h5>Available Hours:</h5>
        <ul>
          {this.props.user.availabilityHours.map((hour, idx) => (
            <List key={idx} list={hour} />
          ))}
        </ul>
         
      </Container>
    );
  }
}

export default Availability;
