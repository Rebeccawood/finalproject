import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Qualifications extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
 return (
  <Container>
       <h5>Qualifications:</h5>
       <p>{this.props.user.teacher.qualifications}</p>
     <hr></hr>
  </Container>
 )}}

 export default Qualifications