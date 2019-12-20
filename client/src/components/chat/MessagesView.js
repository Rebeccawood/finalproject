import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Chat from './Chat'

import List from "../pages/profile/List";
import ChatCard from "./ChatCard";
import Service from "../../service/chat.service";
import { Container, Row, Button } from "react-bootstrap";

import io from "socket.io-client";

class MessagesView extends Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.state = {
      chats: []
    };

    this.socket = this.props.socket;
  }

  getMessages = () => {
    let chatsCopy = [...this.state.chats];
    this.service.findYourChats().then(yourChats => {
      console.log(yourChats.data, "helllooooooooooo");

      let chatsArray = yourChats.data.map(chat => chat.users);
      console.log(chatsArray);
      this.setState({ chats: chatsArray }, () =>
        console.log(this.state.chats, "whatttttt")
      );
    });
  };
  componentDidMount() {
    this.getMessages();
  }

  render() {
    console.log(this.state.chats, "chattttttsss");

    return (
      <div className="chat-bg">
        <Container>
          <Row>
            <h3 style={{ marginTop: 100 }}>Your Messages:</h3>
            <br></br>
          </Row>
          <Row>
            {this.state.chats.map((chat, idx) => {
              return (
                <ChatCard
                  key={idx}
                  loggedInUser={this.props.loggedInUser}
                  userUsername={chat}
                />
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
export default MessagesView;
