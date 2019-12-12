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
      scrollBackground: "",
      isTop: true
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


// ------------------------- SCROLL ---------------------------//
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }


  render() {
 
    console.log(this.props.loggedInUser, "user being called in navbar");
    const greeting = this.props.loggedInUser
      ? this.props.loggedInUser.username
      : "to SpeakEasy";

    return this.props.loggedInUser ? (
      <Navbar variant={this.state.isTop ? 'dark' : 'light'} scrolling expand="md" fixed="top" bg={this.state.isTop ? '' : 'light'}>
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
              <Link to="/search">Search Profiles</Link>
            </Nav.Link>
            <Nav.Link as="li" onClick={this.logoutUser}>
              Logout
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Navbar.Text>Welcome {greeting}</Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    ) : (
      <>
          <Navbar variant={this.state.isTop ? 'dark' : 'light'} scrolling expand="md" fixed="top" bg={this.state.isTop ? '' : 'light'}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="mr-auto navbar">
              <Nav.Link as="li">
                <Link to="/">SpeakEasy</Link>
              </Nav.Link>

              <Nav.Link as="li">
                <Link to="/" onClick={this.handleShowSignup}>
                  Signup
                </Link>
              </Nav.Link>

              <Modal
                size="lg"
                show={this.state.showModalWindowSignup}
                onHide={this.handleCloseSignup}
              >
                <Modal.Body>
                  <Signup
                    setUser={this.props.setUser}
                    className="modal"
                    closeModalWindow={this.handleCloseSignup}
                  />
                </Modal.Body>
              </Modal>

              <Nav.Link as="li">
                <Link to="/" onClick={this.handleShowLogin}>
                  Login
                </Link>
              </Nav.Link>
            </Nav>

            <Modal
              size="lg"
              show={this.state.showModalWindowLogin}
              onHide={this.handleCloseLogin}
            >
              <Modal.Body>
                <Login
                  setUser={this.props.setUser}
                  closeModalWindow={this.handleCloseLogin}
                />
              </Modal.Body>
            </Modal>

            <Nav className="ml-auto">
              <Navbar.Text>Welcome {greeting}</Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Navigation;
