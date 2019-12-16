import React, { Component } from "react";
import { Button, Form, Row, Col, Container, Toast } from "react-bootstrap";
import Service from "../../service/auth.service";
import { withRouter } from "react-router-dom";

import "../../styelsheets/Auth.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.state = {
      user: { username: "", password: "" },
      showToast: false,
      toastText: ""
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
        console.log("is this user populated", theLoggedUser);
        this.props.setUser(theLoggedUser.data);
        this.props.closeModalWindow();
        this.setState({ username: "", password: "" });
        this.props.history.push("/profile");
      })
      .catch(err => {
        console.log(err);
        // this.handleToastOpen(err.response.data.message);
      });
  };
  handleToastClose = () => this.setState({ showToast: false, toastText: "" });
  handleToastOpen = text => this.setState({ showToast: true, toastText: text });

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

        <Toast
          onClose={this.handleToastClose}
          show={this.state.showToast}
          delay={3000}
          autohide
          style={{
            position: "fixed",
            right: "10px",
            bottom: "10px",
            minWidth: "250px"
          }}
        >
          <Toast.Header>
            <strong className="mr-auto">Error</strong>
            <small>Session manager</small>
          </Toast.Header>
          <Toast.Body>{this.state.toastText}</Toast.Body>
        </Toast>
      </Container>
    );
  }
}

export default withRouter(Login);
