import React, { Component } from "react";
import { Col, Button, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

class ChatCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userUsername
    };
  }

  render() {
    console.log(this.props.loggedInUser);
    return (
      <Col lg={4}>
        {this.props.userUsername.map(users => {
          if (users !== this.props.loggedInUser.username) {
            return (
              <>
                <div className="chat-card">
                  <h3>{users}</h3> <br></br>
                  <Link to={`/chat/${users}`}>
                    <Button variant="outline-dark">See chat </Button>
                  </Link>
                </div>
              </>
            );
          } else {
            return "";
          }
        })}
      </Col>
    );
  }
}

export default ChatCard;
