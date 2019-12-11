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
        <img src={this.props.user.imgPath} alt={this.props.user.username} />
        <h3>{this.props.user.username}</h3>
        <p>Age: {this.props.user.age}</p>
        <LearnTeachLanguages loggedInUser={this.props.user} user={this.props.user} />
        {this.props.user.teacher && (<p>This is a teacher! <br></br> Price: {this.props.user.teacher.price} €/hr</p>)}
        <br></br>
        <Link className="btn btn-sm btn-dark" to={`/profile/${this.props._id}`}>
          See full profile
        </Link>
      </Col>
    );
}}

export default ProfileCard
