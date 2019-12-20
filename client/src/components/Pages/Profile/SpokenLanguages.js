import React, { Component } from "react";
import List from "./List";
import { Container } from "react-bootstrap";

class SpokenLanguages extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
 return (
   <Container>
     
  <h5>Languages Spoken:</h5>
     <ul>
         {this.props.user.buddy.languagesSpoken.map((language, idx) => (
           <List key={idx} list={language} />
            
         ))}
     </ul>
     <hr></hr>
   </Container>
 )}}

 export default SpokenLanguages