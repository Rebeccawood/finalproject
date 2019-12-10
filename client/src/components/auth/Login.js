import React, { Component } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import Service from "../../service/auth.service";
import { withRouter } from "react-router-dom";

import "../../styelsheets/Auth.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.state = {
      user: { username: "", password: "" }
    };
  }

  handleInputChange = e => {
    let { name, value } = e.target;
    this.setState({
      user: { ...this.state.user, [name]: value }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state.user;
    this.service
      .login(username, password)
      .then(theLoggedUser => {
        this.props.setUser(theLoggedUser.data);
        this.props.closeModalWindow();
        this.setState({ username: "", password: "" });
        this.props.history.push("/profile");
      })
      .catch(err => {
        console.log({ err });
      });
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              onChange={this.handleInputChange}
              value={this.state.username}
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
          <Button variant="outline-dark" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Login);
