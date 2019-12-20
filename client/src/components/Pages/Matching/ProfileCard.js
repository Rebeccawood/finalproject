import React, { Component } from "react";
import { Col } from "react-bootstrap";

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
        <Col

          className="profile-card search-profile"
          lg={4}
        >
          <img src={this.props.user.imgPath} alt={this.props.user.username} />
          <h3>{this.props.user.username}</h3>
          <p>Age: {this.props.user.age}</p>

          {this.props.user.teacher && (
            <p>
              This is a teacher! <br></br> Price:{" "}
              {this.props.user.teacher.price}
              €/hr
            </p>
          )}

          <Link
            className="btn btn-sm btn-dark"
            to={`/profile/${this.props.user._id}`}
          >
            See full profile
          </Link>
        </Col>
      </>
    );
  }
}

export default ProfileCard;
