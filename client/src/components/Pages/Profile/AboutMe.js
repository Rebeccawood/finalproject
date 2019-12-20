import React, { Component } from "react";
import ButtonsEdit from "./ButtonsEdit";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
      <div className="about-me">
        <img
          src={this.props.user.imgPath}
          className="profile-img"
          alt="profile-picture"
        />
          <br></br>

        {this.props.user.buddy ? (
          <>  <br></br>
              <p className="about-me">This is a buddy-profile</p> </>
        ) : (
              <>   <br></br> <p className="about-me">This is a teacher-profile</p> </>
        )}

        {this.props.loggedInUser === this.props.user ? (
          <ButtonsEdit user={this.props.user} loggedInUser={this.props.loggedInUser} setUser={this.props.setUser} />
        ) : (
          <Link to={`/chat/${this.props.user.username}`}>
            <Button variant="outline-dark">
              
              Message me!
            </Button>
          </Link>
        )}
        </div>
        <hr></hr>
        <h5>About me:</h5>
        <p>{this.props.user.bio}</p>
      </Container>
    );
  }
}
export default AboutMe;
