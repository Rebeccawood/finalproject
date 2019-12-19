import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Chat from './Chat'

import List from "../pages/profile/List";
import ChatCard from "./ChatCard";
import Service from "../../service/chat.service";
import { Container, Row, Col } from "react-bootstrap";

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
      console.log(yourChats.data[0].users);
      chatsCopy.push(yourChats.data[0].users);
      this.setState({ chats: chatsCopy });
    });
  };
  componentDidMount() {
    this.getMessages();
  }
  render() {
    console.log(this.state.chats);
    return (
      <Container>
        <h3 style={{ marginTop: 100 }}>Your Messages:</h3>

        {this.state.chats.map((chat, idx) => (
          <ChatCard
            key={idx}
            loggedInUser={this.props.loggedInUser}
            userUsername={chat}
          />
        ))}
      </Container>
    );
  }
}
export default MessagesView;
