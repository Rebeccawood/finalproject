import React, { Component } from "react";
import {  Modal, Button } from "react-bootstrap";
import EditBuddyProfile from "./Edit/EditBuddyProfile.js";
import EditTeacherProfile from "./Edit/EditTeacherProfile.js";

class ButtonsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalWindowBuddy: false,
      showModalWindowTeacher: false
    };
  }

  // ------------------ MODAL Buddy --------------------//
  handleShowBuddy = () => this.setState({ showModalWindowBuddy: true });
  handleCloseBuddy = () => this.setState({ showModalWindowBuddy: false });
  // ------------------ MODAL Teacher --------------------//
  handleShowTeacher = () => this.setState({ showModalWindowTeacher: true });
  handleCloseTeacher = () => this.setState({ showModalWindowTeacher: false });

  //------------------------------------------------------//

  render() {
    return (
      <>
        {this.props.loggedInUser.buddy ? (
          <Button variant="outline-dark" onClick={this.handleShowBuddy}>
            Edit Buddy Profile
          </Button>
        ) : (
          <Button variant="outline-dark" onClick={this.handleShowTeacher}>
            Edit Teacher Profile
          </Button>
        )}

        <Modal
          size="lg"
          show={this.state.showModalWindowBuddy}
          onHide={this.handleCloseBuddy}
        >
          <Modal.Body>
            <EditBuddyProfile
              loggedInUser={this.props.loggedInUser}
              setUser={this.props.setUser}
              className="modal"
              closeModalWindow={this.handleCloseBuddy}
            />
          </Modal.Body>
        </Modal>

        <Modal
          size="lg"
          show={this.state.showModalWindowTeacher}
          onHide={this.handleCloseTeacher}
        >
          <Modal.Body>
            <EditTeacherProfile
              loggedInUser={this.props.loggedInUser}
              setUser={this.props.setUser}
              className="modal"
              closeModalWindow={this.handleCloseTeacher}
            />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default ButtonsEdit;
