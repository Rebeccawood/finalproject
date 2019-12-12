import React, { Component } from "react";
import List from "./List";

class SpokenLanguages extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
 return (
   <>
     
       <h5>Languages Spoken:</h5>
  
         {this.props.user.buddy.languagesSpoken.map((language, idx) => (
           <List key={idx} list={language} />
         ))}
       
   </>
 )}}

 export default SpokenLanguages