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
      <section>
        <img
          className="profile-bg"
          src="https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576427060/FinalProject/istockphoto-995719694-612x612_pcvvlj.jpg"
          alt="profile"
        />
        <Container>

          <Row>
          <Col  md={8}>
            {this.state.user.map(user => (
              <ProfileCard key={user._id} user={user} />
            ))}
            </Col>
            <Col className="teachers-filters" md={4}>
 <Form>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Female" />
              </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Male" />
                </Form.Group>

              </Form>
 </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
export default TeachersProfiles;
