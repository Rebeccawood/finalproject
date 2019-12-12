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
          src={this.props.user.imgPath}
          className="profile-img"
          alt="profile-picture"
        />
        

        {this.props.user.buddy ? (
          <p>This is a buddy-profile</p>
        ) : (
          <p>This is a teacher-profile</p>
        )}

        {/* <ButtonsEdit
          user={this.props.loggedInUser}
        /> */}
        <hr></hr>
        <h5>About me:</h5>
        <p>{this.props.user.bio}</p>
        <h5>Age:</h5>
        <p>{this.props.user.age}</p>
        <h5>Gender:</h5>
        <p>{this.props.user.gender}</p>

        {/* <h5>Location:</h5>
            <p>{this.props.loggedInUser.Location}</p> */}
      </section>
    );
  }
}

export default GeneralInfo;
