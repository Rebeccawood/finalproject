import React, {Component} from "react";
import List from "./List"
import Container from "react-bootstrap/Col";

class Interests extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
    console.log(this.props)
 return (
    <Container>
      
  <h5>Interests:</h5>

     <ul>
       {this.props.user.buddy.interests.map(
         (interest, idx) => {
           return <List key={idx} list={interest} />;
         }
       )}
     </ul>
 
   
   </Container>
  )}
};

export default Interests;
