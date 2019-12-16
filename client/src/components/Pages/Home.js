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
      <div>
      <div className="title">
      <h1>SpeakEasy</h1> <i>Who said swiping has to be for "love"?</i>
        </div>
        <img className="home-img"
          src="https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576432336/FinalProject/priscilla-du-preez-nF8xhLMmg0c-unsplash_mvcdzt.jpg"
          alt="home"
        />

        <section className="section-one">
          <div className="text-center">
            {/* <h1 className="header-home">SpeakEasy</h1>
            <i>Find your perfect language-buddy</i> */}
          </div>
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
              <Col className="div-img" md={4}>
                <img className="logo" src="https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576492066/FinalProject/Screenshot_2019-12-16_at_11.27.21_ssdtat.png" alt="logo" />
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
            <br></br><br></br>
            <hr></hr>
          </Container>
        </section>
        <section className="section-two">
          <br></br>
          <Container>
            <Row>
              
              <Col className="div-img" md={4}>
              <article>
                <img className="teacher-logo" src="https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576493497/FinalProject/output-onlinepngtools_o48k23.png" alt="teacher" />
                  <h4>Are you a teacher looking for students?</h4>
                  <p> We have a huge student base in your city. Our users are ready
                  to learn.</p>
             </article>
              </Col>
              <Col className="div-img" md={4}>
              <article>
                  <img className="teacher-logo" src="https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576497800/FinalProject/output-onlinepngtools_1_efmjkw.png" alt="teacher" />
                
                  <h4> Our transparent matching system...</h4>
                 <p> informs the
                  students about your conditions. You profile will show price,
                  location and anything else you need to inform your students
                  about.
                </p>
                </article>
              </Col>
             
              <Col className="div-img" md={4}>
              <article>
                <img className="money-logo" src="https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576493857/FinalProject/output-onlinepngtools_1_qnpeu2.png" alt="teacher" />
                  <h4>Don't waste your time. Earn money faster!</h4>
                  <p>You will be able to find quality work faster and easier than ever.</p>
                </article>
              </Col>
            
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}
export default Home;
