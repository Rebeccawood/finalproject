import React, { Component } from "react";

class ConditionsTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
  return (
    <>
      {this.props.user.teacher && <h5>Extra Conditions:</h5>}
      {this.props.user.teacher && (
        <p>{this.props.user.teacher.conditions}</p>
      )}
      
    </>
  );}
}

export default ConditionsTeacher;



