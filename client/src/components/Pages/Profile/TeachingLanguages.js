import React, { Component } from "react";
import List from "./List";

class TeachingLanguages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    
    return (
      <>
        <h5>Teaching languages:</h5>
        <ul>
          {this.props.user.teacher.teachingLanguages.map((language, idx) => {
            
            return <List key={idx} list={language} />;
          })}
        </ul>
      </>
    );
  }
}

export default TeachingLanguages;
