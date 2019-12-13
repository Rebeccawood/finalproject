import React, { Component } from "react";


class Qualifications extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
 return (
  <>
       <h5>Qualifications:</h5>
       <p>{this.props.user.teacher.qualifications}</p>
     
  </>
 )}}

 export default Qualifications