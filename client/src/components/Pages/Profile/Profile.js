import React, { Component } from "react";
import "../../../styelsheets/Profile.css";
import { Container, Row, Col } from "react-bootstrap";

// ---------------------- COMPONENTS -------------------------//
import ConditionsTeacher from "../Profile/ConditionsTeacher";
import Hobbies from "../Profile/Hobbies";
import Price from "../Profile/Price";
import Availability from "../Profile/Availability";
import LearningLanguages from "../Profile/LearningLanguages.js";
import TeachingLanguages from "../Profile/TeachingLanguages.js";
import Qualifications from "../Profile/Qualifications";
import SpokenLanguages from "../Profile/SpokenLanguages";
import GeneralInfo from "../Profile/GeneralInfo";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Container>
          <h1> Hi, {this.props.loggedInUser.username}</h1>
          <Row>
            <Col md={6}>
              <GeneralInfo
                user={this.props.loggedInUser}
              />
            </Col>

            <Col md={6}>
              <Availability user={this.props.loggedInUser} />

              {this.props.loggedInUser.buddy ? (
                <LearningLanguages user={this.props.loggedInUser} />
              ) : (
                <TeachingLanguages user={this.props.loggedInUser} />
              )}

              {this.props.loggedInUser.buddy ? (
                <SpokenLanguages user={this.props.loggedInUser} />
              ) : (
                <Qualifications user={this.props.loggedInUser} />
              )}

              {this.props.loggedInUser.buddy ? (
                <Hobbies user={this.props.loggedInUser} />
              ) : (
                <Price user={this.props.loggedInUser} />
              )}

              {this.props.loggedInUser.teacher && (
                <ConditionsTeacher user={this.props.loggedInUser} />
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default Profile;
