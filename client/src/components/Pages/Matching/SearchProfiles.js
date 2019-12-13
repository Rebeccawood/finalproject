import React, { Component } from "react";

import Service from "../../../service/matches.service";

// ----------------- Styles ----------/
import "../../../styelsheets/Matches.css";
import { Container, Row, Col } from "react-bootstrap";

// -------------------- Components -------------------//
import ProfileCard from "./ProfileCard";

class SearchProfiles extends Component {
  constructor() {
    super();
    this.service = new Service();
    this.state = {
      user: []
    };
  }

  componentDidMount = () => this.updateProfileList();

  updateProfileList = () => {
    this.service
      .getAllProfiles()
      .then(allProfiles => this.setState({ user: allProfiles.data }))
      .catch(err => console.log("Error", err));
  };

  render() {
    return this.state.user ? (
      
      <section>
        <Container>
          <h1>All profiles that match your preferences</h1>
          <Row>
            {this.state.user.map(user => (
              <ProfileCard key={user._id} user={user} />
            ))}
          </Row>
        </Container>
    </section> ) : (<h1>We are looking for your perfect language buddy, tailored to your preferences!!</h1>)
    ;
  }
}
export default SearchProfiles;
