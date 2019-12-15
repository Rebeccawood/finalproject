import React, { Component } from "react";
import "../../styelsheets/Home.css";
import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <img
          src="https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576432336/FinalProject/priscilla-du-preez-nF8xhLMmg0c-unsplash_mvcdzt.jpg"
          alt="home"
        />

        <section className="section-one">
          <div className="text-center">
            <h1>SpeakEasy</h1>
            <i>Find your perfect language-buddy</i>
          </div>
          <br></br>
          <hr></hr>
          <br></br>
          <Container>
            <Row>
              <Col md={4}>
                <h4>Swiping not only for "love"</h4>
                <p>
                  The best way to learn a language is by speaking it with
                  friends. Through our matching-buddies system, you can choose
                  who to chat, meet and learn with. Set your age, location and
                  gender preferences to find your perfect language-exchange
                  buddy.
                </p>
              </Col>
              <Col md={4}>
                <h4></h4>
                <p></p>
              </Col>
              <Col md={4}>
                <h4>Find a teacher if you want</h4>
                <p>
                  The best way to learn a language is by speaking it with
                  friends. Through our matching-buddies system, you can choose
                  who to chat, meet and learn with. Set your age, location and
                  gender preferences to find your perfect language-exchange
                  buddy.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section-two">
          <br></br>
          <Container>
            <Row>
              <Col md={4}>
                <h4>Are you a teacher looking for students?</h4>
                <p>
                  We have a huge student base in your city. Our users are ready
                  to learn. Our transparent matching system, informs the
                  students about your conditions. You profile will show price,
                  location and anything else you need to inform your students
                  about, in order to find work fast and easy.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}
export default Home;
