import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

// ----------------- COMPONENTS ---------------//
import EditBuddyProfile from "./edit/EditBuddyProfile.js";
import EditTeacherProfile from "./edit/EditTeacherProfile.js";
import PhotoEdit from "./edit/PhotoEdit";
import EditBuddyPreferences from "./preferences/EditBuddyPreferences";

class ButtonsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalWindowBuddy: false,
      showModalWindowTeacher: false,
      showModalWindowImg: false,
      showModalWindowPreferences: false
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

  // ------------------ MODAL preferences -------------//
  handleShowPreferences = () =>
    this.setState({ showModalWindowPreferences: true });
  handleClosePreferences = () =>
    this.setState({ showModalWindowPreferences: false });

  //------------------------------------------------------//

  render() {
    return (
      <>
      
       {this.props.user.buddy ? (
          <>
            <Button variant="outline-dark" onClick={this.handleShowBuddy}>
              Edit Buddy Profile
            </Button>
            <br></br> <hr></hr>
            <Button variant="outline-dark" onClick={this.handleShowPreferences}>
              Edit Search Preferences
            </Button>
          </>
        ) : (
          <Button variant="outline-dark" onClick={this.handleShowTeacher}>
            Edit Teacher Profile
          </Button>
        )}

       <br></br> <hr></hr>
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
              user={this.props.user}
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
              user={this.props.user}
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
              user={this.props.user}
              setUser={this.props.setUser}
              closeModalWindow={this.handleCloseImg}
            />
          </Modal.Body>
        </Modal>

        <Modal
          size="lg"
          show={this.state.showModalWindowPreferences}
          onHide={this.handleClosePreferences}
        >
          <Modal.Body>
            <EditBuddyPreferences
              user={this.props.user}
              setUser={this.props.setUser}
              closeModalWindow={this.handleClosePreferences}
            />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default ButtonsEdit;
