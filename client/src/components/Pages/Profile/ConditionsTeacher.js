import React, { Component } from "react";

class ConditionsTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
  return (
    <>
      {this.props.loggedInUser.teacher && <h5>Extra Conditions:</h5>}
      {this.props.loggedInUser.teacher && (
        <p>{this.props.loggedInUser.teacher.conditions}</p>
      )}
      
    </>
  );}
}

export default ConditionsTeacher;



