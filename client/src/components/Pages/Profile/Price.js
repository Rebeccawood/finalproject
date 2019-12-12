import React, {Component} from "react";

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
 return (
    <>
  
              <h5>Price:</h5>
              <p>{this.props.user.teacher.price} €/hr</p>
   
            </>
  )}
};

export default Price;
