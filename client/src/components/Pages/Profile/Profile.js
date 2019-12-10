import React, { Component } from "react";
import "../../../styelsheets/Profile.css";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import TotalEdit from "./TotalEdit";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalWindow: false
    };
  }

  // ------------------ MODAL EDIT --------------------//
  handleShow = () => this.setState({ showModalWindow: true });
  handleClose = () => this.setState({ showModalWindow: false });

  render() {
    return (
      <Container>
        <h1> Hi, {this.props.loggedInUser.username}</h1>
        <Button variant="outline-dark" onClick={this.handleShow}>
          Edit Profile
        </Button>
        <Modal
          size="lg"
          show={this.state.showModalWindow}
          onHide={this.handleClose}
        >
          <Modal.Body>
            <TotalEdit
              loggedInUser={this.props.loggedInUser}
              setUser={this.props.setUser}
              className="modal"
              closeModalWindow={this.handleClose}
            />
          </Modal.Body>
        </Modal>

        <img src={this.props.loggedInUser.imgPath} alt="profile-picture" />
        {this.props.loggedInUser.teacher && (
          <p>{this.props.loggedInUser.teacher.price}</p>
        )}
      </Container>
    );
  }
}
export default Profile;
