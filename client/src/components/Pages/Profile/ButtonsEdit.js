import React, { Component } from "react";
import {  Modal, Button } from "react-bootstrap";
import EditBuddyProfile from "./Edit/EditBuddyProfile.js";
import EditTeacherProfile from "./Edit/EditTeacherProfile.js";
import PhotoEdit from "./Edit/PhotoEdit"
class ButtonsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalWindowBuddy: false,
      showModalWindowTeacher: false,
      showModalWindowImg: false,
    };
  }

  // ------------------ MODAL Buddy --------------------//
  handleShowBuddy = () => this.setState({ showModalWindowBuddy: true });
  handleCloseBuddy = () => this.setState({ showModalWindowBuddy: false });
  // ------------------ MODAL Teacher --------------------//
  handleShowTeacher = () => this.setState({ showModalWindowTeacher: true });
  handleCloseTeacher = () => this.setState({ showModalWindowTeacher: false });

  // ------------------ MODAL Photo --------------------//
  handleShowImg = () => this.setState({ showModalWindowImg: true });
  handleCloseImg = () => this.setState({ showModalWindowImg: false });


  //------------------------------------------------------//

  render() {
    return (
      <>
        {this.props.user.buddy ? (
          <Button variant="outline-dark" onClick={this.handleShowBuddy}>
            Edit Buddy Profile
          </Button>
        ) : (
          <Button variant="outline-dark" onClick={this.handleShowTeacher}>
            Edit Teacher Profile
          </Button>
        )}
       <br></br>
        <Button variant="outline-dark" onClick={this.handleShowImg}>
          Change Picture
        </Button>

        <Modal
          size="lg"
          show={this.state.showModalWindowBuddy}
          onHide={this.handleCloseBuddy}
        >
          <Modal.Body>
            <EditBuddyProfile
              loggedInUser={this.props.loggedInUser}
              setUser={this.props.setUser}
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
              closeModalWindow={this.handleCloseTeacher}
            />
          </Modal.Body>
        </Modal>

          <Modal
          size="lg"
          show={this.state.showModalWindowImg}
          onHide={this.handleCloseImg}
        >
          <Modal.Body>
            <PhotoEdit
              loggedInUser={this.props.loggedInUser}
              setUser={this.props.setUser}
              closeModalWindow={this.handleCloseImg}
            />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default ButtonsEdit;
