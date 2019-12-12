import React, { Component } from "react";
import Service from "../../../service/profile.service";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

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

class MatchProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
    this.service = new Service();
  }

  componentDidMount = () => {
    const userId = this.props.match.params.id;
    this.service
      .getOneProfile(userId)
      .then(theUser => {
        console.log(theUser, "banana");
        this.setState({ user: theUser.data }, () =>
          console.log(this.state.user, "candy")
        );
      })
      //   .then(console.log(this.state.user))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.props);
    console.log(this.state.user);
    return this.state.user ? (
      <>
        <Container>
          <h1>{this.state.user.username}</h1>
          <Row>
            <Col md={6}>
              <GeneralInfo user={this.state.user} />
            </Col>

            <Col md={6}>
              <Availability user={this.state.user} />

              {this.state.user.buddy ? (
                <LearningLanguages user={this.state.user} />
              ) : (
                <TeachingLanguages user={this.state.user} />
              )}

              {this.state.user.buddy ? (
                <SpokenLanguages user={this.state.user} />
              ) : (
                <Qualifications user={this.state.user} />
              )}

              {this.state.user.buddy ? (
                <Hobbies user={this.state.user} />
              ) : (
                <Price user={this.state.user} />
              )}

              {this.state.user.teacher && (
                <ConditionsTeacher user={this.state.user} />
              )}
            </Col>
          </Row>
        </Container>
      </>
    ) : (
      "Retrieving user..."
    );
  }
}
export default MatchProfile;
