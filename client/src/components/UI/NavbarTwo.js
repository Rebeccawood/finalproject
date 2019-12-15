import React, { Component } from "react";
import { Navbar, Nav, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Service from "../../service/auth.service";
import Login from "../auth/Login";
import Signup from "../auth/Signup";

import "../../styelsheets/Auth.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.state = {
      showModalWindowLogin: false,
      showModalWindowSignup: false,
      scrollBackground: ""
    };
  }
  // ------------------ MODAL LOGIN --------------------//
  handleShowLogin = () => this.setState({ showModalWindowLogin: true });
  handleCloseLogin = () => this.setState({ showModalWindowLogin: false });

  // ------------------ MODAL SIGNUP --------------------//
  handleShowSignup = () => this.setState({ showModalWindowSignup: true });
  handleCloseSignup = () => this.setState({ showModalWindowSignup: false });

  // ------------------ LOGGED USER ------------------- //
  logoutUser = () => {
    this.service
      .logout()
      .then(x => this.props.setUser(false))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.props.loggedInUser, "user being called in navbar");
    const greeting = this.props.loggedInUser
      ? this.props.loggedInUser.username
      : "to SpeakEasy";

    return;
    <Navbar variant="light" scrolling expand="md" fixed="top" bg="light">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="mr-auto navbar">
          <Nav.Link as="li">
            <Link to="/">SpeakEasy</Link>
          </Nav.Link>
          <Nav.Link as="li">
            <Link to="/profile">My Profile</Link>
          </Nav.Link>
          <Nav.Link as="li">
            <Link to="/search">Search Buddies</Link>
          </Nav.Link>
          <Nav.Link as="li">
            <Link to="/search">Search Teachers</Link>
          </Nav.Link>
          <Nav.Link as="li" onClick={this.logoutUser}>
            Logout
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Navbar.Text>Welcome {greeting}</Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>;
  }
}
export default Navigation;
