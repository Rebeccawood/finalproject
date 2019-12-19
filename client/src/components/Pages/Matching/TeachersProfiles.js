import React, { Component} from "react";

import Service from "../../../service/matches.service";

// ----------------- Styles ----------/
import "../../../styelsheets/Matches.css";
import { Container, Row, Col, Form} from "react-bootstrap";

// -------------------- Components -------------------//
import ProfileCard from "./ProfileCard";

class TeachersProfiles extends Component {
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
      .getTeachers()
      .then(allProfiles => this.setState({ user: allProfiles.data }))
      .catch(err => console.log("Error", err));
  };

  render() {
    return (
      <div className="search-bg">
        <section className="search-profile">
          <Container>
            <Row>
              {this.state.user.map(user => (
                <ProfileCard key={user._id} user={user} />
              ))}
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}
export default TeachersProfiles;
