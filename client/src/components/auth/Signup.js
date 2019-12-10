import React, { Component } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import Service from "../../service/auth.service";

import "../../styelsheets/Auth.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.state = { username: "", email: "", password: "" };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    this.service
      .signup(username, email, password)
      .then(theNewUser => {
        this.setState({ username: "", email: "", password: "" });
        this.props.setUser(theNewUser.data);
        this.props.history.push("/dashboard");
      })
      .catch(err => console.log({ err }, "error message from signup service"));
  };

  handleInputChange = e => {
    let { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <h1>Signup</h1>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              onChange={this.handleInputChange}
              checked={this.state.username}
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
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={this.handleInputChange}
              value={this.state.password}
            />
          </Form.Group>
          <br></br>

          <Button variant="outline-dark" type="submit">
            Signup
          </Button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Signup);
