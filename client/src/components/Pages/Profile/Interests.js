import React, {Component} from "react";
import List from "./List"

class Interests extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
    console.log(this.props)
 return (
    <>
      
  <h5>Interests:</h5>

     <ul>
       {this.props.user.buddy.interests.map(
         (interest, idx) => {
           return <List key={idx} list={interest} />;
         }
       )}
     </ul>
 
   
   </>
  )}
};

export default Interests;
