import React, { Component } from "react";
import List from "./List";
import {Container} from "react-bootstrap";

class LearningLanguages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
   

    return (
      <Container>
        <h5>Learning Languages:</h5>
        <ul>
          {this.props.user.buddy.learningLanguages.map((language, idx) => {
            return <List key={idx} list={language} />;
          })}
        </ul>
      </Container>
    );
  }
}

export default LearningLanguages;
