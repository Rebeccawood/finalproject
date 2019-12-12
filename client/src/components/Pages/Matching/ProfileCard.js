import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import LearnTeachLanguages from "../Profile/LearningLanguages.js";
import { Link } from "react-router-dom";
import "../../../styelsheets/Matches.css";

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Col className="profile-card" md={4}>
          <img src={this.props.imgPath} alt={this.props.username} />
          <h3>{this.props.username}</h3>
          <p>Age: {this.props.age}</p>
          <LearnTeachLanguages
            loggedInUser={this.props.user}
            user={this.props.user}
          />
          {this.props.teacher && (
            <p>
              This is a teacher! <br></br> Price: {this.props.teacher.price}{" "}
              €/hr
            </p>
          )}
          <br></br>
          <Link
            className="btn btn-sm btn-dark"
            to={`/profile/${this.props._id}`}
          >
            See full profile
          </Link>
        </Col>
      </>
    );
  }
}

export default ProfileCard;
