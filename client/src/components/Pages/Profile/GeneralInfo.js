import React, { Component } from "react";
import { Container } from "react-bootstrap";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
     <Container>
     <ul>
        <h5>Age:</h5>
        <p>{this.props.user.age}</p>
      
        <hr></hr>
    
        <h5>Gender:</h5>
        <p>{this.props.user.gender}</p>
    
        <hr></hr>
   
        <h5>City:</h5>
        <p>{this.props.user.city}</p>
        
        <hr></hr>
        </ul>
      </Container>
    );
  }
}

export default GeneralInfo;
