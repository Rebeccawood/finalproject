import React, { Component } from "react";
import ButtonsEdit from "./ButtonsEdit";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section>
        <img
          src={this.props.loggedInUser.imgPath}
          className="profile-img"
          alt="profile-picture"
        />

        {this.props.loggedInUser.buddy ? (
          <p>This is a buddy-profile</p>
        ) : (
          <p>This is a teacher-profile</p>
        )}

        <ButtonsEdit
          setUser={this.props.setUser}
          loggedInUser={this.props.loggedInUser}
        />
        <hr></hr>
        <h5>About me:</h5>
        <p>{this.props.loggedInUser.bio}</p>
        <h5>Age:</h5>
        <p>{this.props.loggedInUser.age}</p>
        <h5>Gender:</h5>
        <p>{this.props.loggedInUser.gender}</p>

        {/* <h5>Location:</h5>
            <p>{this.props.loggedInUser.Location}</p> */}
      </section>
    );
  }
}

export default GeneralInfo;
