import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
     <>
        <h5>Age:</h5>
        <p>{this.props.user.age}</p>
        <h5>Gender:</h5>
        <p>{this.props.user.gender}</p>

        <h5>City:</h5>
        <p>{this.props.user.city}</p>
      </>
    );
  }
}

export default GeneralInfo;
