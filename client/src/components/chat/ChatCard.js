import React, { Component } from "react";
import { Col } from "react-bootstrap";

import { Link } from "react-router-dom";

class ChatCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return  
      
       {this.props.userName.includes(!this.props.loggedInUser) && 
     (   <Col className="chat-card" sm={3}>
          

          {this.props.userUsername.map(users => (
            <h3>{users}</h3>
          ))}
          </Col>)}
      
  }
}

export default ChatCard;
