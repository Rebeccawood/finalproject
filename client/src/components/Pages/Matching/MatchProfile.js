import React, { Component } from "react";
import Service from "../../../service/profile.service";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

// ---------------------- COMPONENTS -------------------------//
import ConditionsTeacher from "../profile/ConditionsTeacher";
import Interests from "../profile/Interests";
import Price from "../profile/Price";
import Availability from "../profile/Availability";
import LearningLanguages from "../profile/LearningLanguages.js";
import TeachingLanguages from "../profile/TeachingLanguages.js";
import Qualifications from "../profile/Qualifications";
import SpokenLanguages from "../profile/SpokenLanguages";
import GeneralInfo from "../profile/GeneralInfo";
import AboutMe from "../profile/AboutMe";
import BuddyPreferences from "../profile/preferences/BuddyPreferences"

class MatchProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
    this.service = new Service();
  }

  componentDidMount = () => {
    const userId = this.props.match.params.id;
    this.service.getOneProfile(userId)
      .then(theUser => this.setState({ user: theUser.data }))
      //   .then(console.log(this.state.user))
      .catch(err => console.log(err));
    };

  render() {
   
    return this.state.user ? (
      <>
        <img className="profile-bg" src="https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576427060/FinalProject/istockphoto-995719694-612x612_pcvvlj.jpg" alt="profile" />
        <Container >
          <Row>
            

            <Col md>
              <section className="section-profile">
                <h3 className="greeting-profile"> {this.state.user.username}</h3>
                <AboutMe user={this.state.user} loggedInUser={this.props.loggedInUser} />
               
              </section>
            </Col>

            <Col md>
              <section className="section-profile">
                <GeneralInfo
                  setUser={this.props.setUser}
                  user={this.state.user}
                />
                {this.state.user.teacher ? (
                  <Price user={this.state.user} />
                ) : (
                  <Interests user={this.state.user} />
                )}
              </section>
            </Col>

            <Col md>
              <section className="section-profile">
                {this.state.user.buddy ? (
                  <LearningLanguages user={this.state.user} />
                ) : (
                  <TeachingLanguages user={this.state.user} />
                )}
                {this.state.user.teacher ? (
                  <Qualifications user={this.state.user} />
                ) : (
                  <SpokenLanguages user={this.state.user} />
                )}

                <Availability user={this.state.user} />

                
              {/* {this.state.user.teacher ? (
                <ConditionsTeacher user={this.state.user} />
              ) : (
                <BuddyPreferences user={this.state.user}  />
              )} */}
              </section>
            </Col>
          </Row>
        </Container>
      </>
    ) : (
        <h1>Retrieving user...</h1>
    );
  }
}
export default MatchProfile;
