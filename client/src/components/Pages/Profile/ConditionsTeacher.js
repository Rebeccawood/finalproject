import React, { Component } from "react";
import { Container } from "react-bootstrap";
class ConditionsTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
  return (
    <Container>
      {this.props.user.teacher && <h5>Extra Conditions:</h5>}
      {this.props.user.teacher && (
        <p>{this.props.user.teacher.conditions}</p>
      )}
      
    </Container>
  );}
}

export default ConditionsTeacher;



