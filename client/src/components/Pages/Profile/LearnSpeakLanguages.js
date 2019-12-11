import React, { Component } from "react";
import List from "./List";

class LearnSpeakLanguages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {this.props.loggedInUser.buddy ? (
          <h5>Learning languages:</h5>
        ) : (
          <h5>Teaching languages:</h5>
        )}

        {this.props.buddy ? (
          <ul>
            {this.props.buddy.learningLanguages.map((language, idx) => (
              <List key={idx} list={language} />
            ))}
          </ul>
        ) : (
          <ul>
            {this.props.loggedInUser.teacher.teachingLanguages.map(
              (language, idx) => {
                console.log(language, idx);
                return <List key={idx} list={language} />;
              }
            )}
          </ul>
        )}
      </>
    );
  }
}

export default LearnSpeakLanguages;
