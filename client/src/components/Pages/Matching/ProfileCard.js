import React, {Component} from "react";
import Col from "react-bootstrap/Col";
import LearnTeachLanguages from "../Profile/LearnTeachLanguages.js"
import { Link } from "react-router-dom";

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Col className="profile-card" md={4}>
        <img src={this.props.imageUrl} alt={this.props.username} />
        <h3>{this.props.username}</h3>

        <p>Age: {this.props.age}</p>
        <LearnTeachLanguages loggedInUser={this.props.loggedInUser} />
        {/* {this.props.loggedInUser.teacher && (<p>{this.props.loggedInUser.teacher.price}</p>)} */}

        <br></br>
        <Link className="btn btn-sm btn-dark" to={`/profile/${this.props._id}`}>
          See full profile
        </Link>
      </Col>
    );
}}

export default ProfileCard
