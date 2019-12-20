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

  // name === !this.props.loggedInUser.username

  render() {
    return (
      <div>
        {/* <Row>
<Col className="chat-card" md={3}>
          <h4>isabel-profe</h4>
          <Link to="/chat/isabel-profe"> <Button variant="outline-dark">Check their messages!</Button> </Link>

</Col>
<br></br> <hr></hr>
        <Col className="chat-card" md={3}>
          <h4>isabel-profe</h4>
          <Link to="/chat/isabel-profe"> <Button variant="outline-dark">Check their messages!</Button> </Link>
        </Col>
        <br></br><hr></hr>
        <Col className="chat-card" md={3}>
          <h4>isabel-profe</h4>
          <Link to="/chat/isabel-profe"> <Button variant="outline-dark">Check their messages!</Button> </Link>

        </Col>
          <Col className="chat-card" md={3}>
            <h4>isabel-profe</h4>
            <Link to="/chat/isabel-profe"> <Button variant="outline-dark">Check their messages!</Button> </Link>

          </Col>
        </Row> */}

        <Col className="chat-card" sm={3}>
          {this.props.userUsername.map(users => {
            if (users !== this.props.loggedInUser.username) {
              return (
                <>
                  <h3>{users}</h3> <br></br>
                  <Link to={`/chat/${users}`}>
                    <Button variant="outline-dark">See chat </Button>
                  </Link>
                </>
              );
            } else {
              return "";
            }
          })}
        </Col>
      </div>
    );
  }
}

export default ChatCard;
