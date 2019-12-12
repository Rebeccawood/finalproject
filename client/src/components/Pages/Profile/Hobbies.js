import React, {Component} from "react";

class Hobbies extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
 return (
    <>
      
              <h5>Hobbies:</h5>

              <p>{this.props.loggedInUser.buddy.hobbies}</p>
 
   
            </>
  )}
};

export default Hobbies;
