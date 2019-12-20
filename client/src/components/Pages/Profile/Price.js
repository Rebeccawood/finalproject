import React, { Component } from "react";
import { Container } from "react-bootstrap";
class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <h5>Price:</h5>
        <p>{this.props.user.teacher.price} €/hr </p>
        <hr></hr>
      </Container>
    );
  }
}

export default Price;
