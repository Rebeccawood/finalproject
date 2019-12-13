import React, { Component } from "react";
import "../../../styelsheets/Profile.css";
import { Container, Row, Col } from "react-bootstrap";

// ---------------------- COMPONENTS -------------------------//
import ConditionsTeacher from "../profile/ConditionsTeacher";
import Interests from "./Interests";
import Price from "../profile/Price";
import Availability from "../profile/Availability";
import LearningLanguages from "../profile/LearningLanguages.js";
import TeachingLanguages from "../profile/TeachingLanguages.js";
import Qualifications from "../profile/Qualifications";
import SpokenLanguages from "../profile/SpokenLanguages";
import GeneralInfo from "../profile/GeneralInfo";
import AboutMe from "../profile/AboutMe";
import BuddyPreferences from "../profile/preferences/BuddyPreferences";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Container className="justify-content-around">
          <Row>
            <h1> Hi, {this.props.loggedInUser.username}</h1>

            <Col md>
              <section>
                <AboutMe setUser={this.props.setUser} user={this.props.loggedInUser} loggedInUser={this.props.loggedInUser} />
              </section>
            </Col>

            <Col md>
              <section>
                <GeneralInfo
                  setUser={this.props.setUser}
                  user={this.props.loggedInUser}
                />
                {this.props.loggedInUser.teacher ? (
                  <Price user={this.props.loggedInUser} />
                ) : (
                  <Interests user={this.props.loggedInUser} />
                )}
                {this.props.loggedInUser.teacher ? (
                  <ConditionsTeacher user={this.props.loggedInUser} />
                ) : (
                  <BuddyPreferences user={this.props.loggedInUser} />
                )}
              </section>
            </Col>

            <Col md>
              <section>
                {this.props.loggedInUser.buddy ? (
                  <LearningLanguages user={this.props.loggedInUser} />
                ) : (
                  <TeachingLanguages user={this.props.loggedInUser} />
                )}
                {this.props.loggedInUser.teacher ? (
                  <Qualifications user={this.props.loggedInUser} />
                ) : (
                  <SpokenLanguages user={this.props.loggedInUser} />
                )}

                <Availability user={this.props.loggedInUser} />
              </section>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default Profile;
