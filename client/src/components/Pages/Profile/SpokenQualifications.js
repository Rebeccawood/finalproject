import React, { Component } from "react";
import List from "./List";

class SpokenQualifications extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
 return (
   <>
     {this.props.loggedInUser.buddy ? (
       <h5>Languages Spoken:</h5>
     ) : (
       <h5>Qualifications:</h5>
     )}

     {this.props.loggedInUser.buddy ? (
       <ul>
         {this.props.loggedInUser.buddy.languagesSpoken.map((language, idx) => (
           <List key={idx} list={language} />
         ))}
         )
       </ul>
     ) : (
       <p>{this.props.loggedInUser.teacher.qualifications}</p>
     )}
   </>
 )}}

 export default SpokenQualifications