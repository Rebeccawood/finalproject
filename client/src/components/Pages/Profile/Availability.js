import React, { Component } from "react";
import List from "./List"

class Availability extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

render(){
  
 return (
   <>
     <h5>Available Days:</h5>
     <p>
       {this.props.user.availabilityDays.map((day, idx) => (
         <List key={idx} list={day} />
       ))}
     </p>
     <h5>Available Hours:</h5>
     <p>
       {this.props.user.availabilityHours.map((hour, idx) => (
         <List key={idx} list={hour} />
       ))}
     </p> 
   </>
 );}
};

export default Availability;
