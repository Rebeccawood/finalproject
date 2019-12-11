import React, {Component} from "react";

class Hobbies extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
 return (
    <>
       {this.props.buddy ? (
              <h5>Hobbies:</h5>
            ) : (
              <h5>Price:</h5>
            )}

            {this.props.buddy ? (
              <p>{this.props.loggedInUser.buddy.hobbies}</p>
            ) : (
              <p>{this.props.loggedInUser.teacher.price} €/hr</p>
            )}
            </>
  )}
};

export default Hobbies;
