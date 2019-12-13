import React, { Component } from "react";
import "../../styelsheets/Home.css";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import BuddyEdit from "./profile/edit/BuddyEdit"
import TeacherEdit from "./profile/edit/TeacherEdit";


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalWindowBuddy: false,
      showModalWindowTeacher: false
    };
  }

  // ------------------ MODAL BUDDY --------------------//
  handleShowBuddy = () => this.setState({ showModalWindowBuddy: true })
  handleCloseBuddy = () => this.setState({ showModalWindowBuddy: false });

  // ------------------ MODAL TEACHER --------------------//
  handleShowTeacher = () => this.setState({ showModalWindowTeacher: true });
  handleCloseTeacher = () => this.setState({ showModalWindowTeacher: false });

  render() {
    return (
      <>
        <Container>
            <h1> Welcome, </h1>
          <Row>
            
            <Col md={6}>
            <hr></hr>
              <h2>I want to find a language-buddy or teacher</h2>
              <p>Potential language buddies and teachers will want to know a few things about you before you meet. The more details you give about yourself and your language goals, the more chances you have to find the perfect buddy or teacher. Go ahead, fill out your profile! </p>
              <Button variant="outline-dark" onClick={this.handleShowBuddy}>
                Click here, Buddy
              </Button>
            </Col>

            <Col  md={6}>
           <hr></hr>
              <h2>I'm a teacher and want to find students</h2>
              <p>We have a huge pool of active students looking for a teacher! Finding the perfect student has never been this easy. Fill out your pricing, availability etc. by clicking on the button below. Letting students know your conditions beforehand will save you tons of energy and time.</p>
              <Button variant="outline-dark" onClick={this.handleShowTeacher}>
                Click here, Teacher
              </Button>
            </Col>
          </Row>
        </Container>

        <Modal
          size="lg"
          show={this.state.showModalWindowBuddy}
          onHide={this.handleCloseBuddy}
        >
          <Modal.Body>
            <BuddyEdit
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
            <TeacherEdit 
              loggedInUser={this.props.loggedInUser}
              setUser={this.props.setUser}
              closeModalWindow={this.handleCloseTeacher}
            />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default withRouter(Dashboard);
