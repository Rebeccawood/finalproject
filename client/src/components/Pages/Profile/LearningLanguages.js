import React, { Component } from "react";
import List from "./List";

class LearningLanguages extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  render() {
    
    return (
      <>
        
          <h5>Learning Languages:</h5>    
          <ul>
            {this.props.user.buddy.learningLanguages.map(
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

export default LearningLanguages;
