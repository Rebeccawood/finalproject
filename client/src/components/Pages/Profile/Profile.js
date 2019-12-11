import React, { Component } from "react";
import "../../../styelsheets/Profile.css";
import { Container, Row, Col} from "react-bootstrap";

// ---------------------- COMPONENTS -------------------------//
import ConditionsTeacher from "./ConditionsTeacher";
import HobbiesPrice from "./HobbiesPrice";
import Availability from "./Availability";
import LearnSpeakLanguages from "./LearnSpeakLanguages";
import SpokenQualifications from "./SpokenQualifications";
import GeneralInfo from "./GeneralInfo"

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <h1> Hi, {this.props.loggedInUser.username}</h1>
        <Row>
          <Col md={6}>
            <GeneralInfo
              setUser={this.props.setUser}
              loggedInUser={this.props.loggedInUser}
            />
          </Col>

          <Col md={6}>
            <Availability loggedInUser={this.props.loggedInUser} />
            <LearnSpeakLanguages loggedInUser={this.props.loggedInUser} />
            <SpokenQualifications loggedInUser={this.props.loggedInUser} />
            <HobbiesPrice loggedInUser={this.props.loggedInUser} />
            <ConditionsTeacher loggedInUser={this.props.loggedInUser} />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Profile;
