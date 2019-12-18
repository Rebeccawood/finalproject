import React, { Component } from "react";
import InputChat from "./InputChat";
import io from "socket.io-client";
import Service from "../../service/chat.service";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.socket = io("http://localhost:5000/");
    this.state = {
      messages: [],
      room: ""
    };

    this.socket.on("newMessage", message => {
      let mess = this.state.messages;
      mess.push(message);
      this.setState({ ...this.state, messages: message });
    });

    this.sendMessage = text => {
      if (text.trim() === "") return;
      let mess = [...this.state.messages];
      mess.push({
        text,
        user: this.props.loggedInUser.username,
        room: this.state.room
      });
      this.setState({ messages: mess });
      this.socket.emit("messageSent", mess);
      let room = this.state.room
      this.service.updateChat(text, room)
      //   this.socket.emit("newUser", "room");
    };

    //     componentDidUpdate = () => {
    //       document.getElementById("chatBox").scrollTop = document.getElementById(
    //         "chatBox"
    //       ).scrollHeight;
    //     };
  }

  setRoom = () => {
    let username = this.props.match.params.user;
    this.service.getChat(username).then(newChat => {
    console.log(newChat.data[0]._id)
      let newRoom = newChat.data[0]._id;
      this.setState({ room: newRoom });
      this.socket.emit("newChat", newRoom);
      console.log(this.state);
      //   this.socket.emit("roomSet", newRoom);
    });
  };

  updateMessages = () => {};

  componentDidMount() {
    
    //to retrieve the chat
    
    this.setRoom();
  }

  render() {
  
    return (
      <>
        <div
          style={{ marginTop: 200, marginLeft: 50 }}
          className="chatBox"
          id="chatBox"
        >
          {this.state.messages.map((elm, idx) => {
            return (
              <h6 key={idx}>
                {elm.user}: {elm.text}
              </h6>
            );
          })}
        </div>

        <div style={{ marginLeft: 100 }} className="textForm">
          <InputChat info={this.sendMessage}></InputChat>
        </div>
      </>
    );
  }
}
