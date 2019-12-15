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
        <img className="profile-bg" src="https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576427060/FinalProject/istockphoto-995719694-612x612_pcvvlj.jpg" alt="profile" />
        <Container className="profile">
          <Row>
            
            <Col md>
              <section className="section-profile">
                <h3 className="greeting-profile"> Hi, {this.props.loggedInUser.username}</h3>
                <AboutMe setUser={this.props.setUser} user={this.props.loggedInUser} loggedInUser={this.props.loggedInUser} />
              </section>
            </Col>

            <Col md>
              <section className="section-profile">
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
              <section className="section-profile">
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
