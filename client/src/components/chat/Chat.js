import React, { Component } from "react";
import InputChat from "./InputChat";
import io from "socket.io-client";
import Service from "../../service/chat.service";
import { Container, Row, Col } from "react-bootstrap";

import "../../styelsheets/Chat.css";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.socket = io("http://localhost:5000/");
    this.state = {
      chat: { messages: [], room: "", user: "" }
    };

    this.sendMessage = text => {
      
      if (text.trim() === "") return;

      let mess = [...this.state.chat.messages];

      mess.push({ text, user: this.props.loggedInUser.username });
     
      this.setState(
        {
          chat: {
            ...this.state.chat,
            messages: mess,
            user: this.props.loggedInUser.username
          }
        },
        () => {
          console.log(this.state.chat, "heelllpppppppp");

          let chat = { ...this.state.chat };
       
        
          let room = this.state.chat.room;
          let message = this.state.chat.messages;
        
          this.service.updateChat(message, room);
          this.socket.emit("newMessage", chat);
        }
      );
    };

    this.socket.on("recieveMessage", message => {
     
      let mess = [...this.state.chat.messages];
      mess.push(message);

      this.setState({ chat: { ...this.state.chat, messages: message } }, () => {
     
        let chat = { ...this.state.chat };
      
      });
    });
  }

  //     componentDidUpdate = () => {
  //       document.getElementById("chatBox").scrollTop = document.getElementById(
  //         "chatBox"
  //       ).scrollHeight;
  //  };

  setRoom = () => {
    let username = this.props.match.params.user;
    this.service.getChat(username).then(newChat => {
      console.log(newChat)
      let newRoom = newChat.data[0]._id;
    
      this.setState({ chat: { ...this.state.chat, room: newRoom } });

      this.socket.emit("newChat", newRoom);

      let messages = [...this.state.chat.messages];
      this.service.getHistory(newRoom).then(chat => {
        let history = [...this.state.chat.messages];
        chat.data.history.forEach(mes => history.push(mes));
        this.setState({ chat: { ...this.state.chat, messages: history } });
      });
    });
  };

  componentDidMount() {
    this.setRoom();
  }

  render() {
   
    console.log(this.state.chat.messages)
    return this.props.loggedInUser ? (
      <Container>
        <Row>
          <Col lg={6}>
            <div className="chatBox" id="chatBox">
             
              {this.state.chat.messages.map((elm, idx) => {
                return (
                  <>
                    <p className="chat-name" key={idx}>
                      {elm.user}: {elm.text}
                    </p>
                  </>
                );
              })}
            </div>

            <div className="textForm">
              <InputChat info={this.sendMessage}></InputChat>
            </div>
          </Col>
          <Col lg={6} style={{ marginTop: 100 }}>
            <h2>You're messaging: {this.props.match.params.user}</h2>
            <strong>Congrats on finding a match!</strong> <br></br> <br></br>
            <p>
              You are able to message this profile, as this buddy/teacher meets
              your preferences. This profile lives in your city and
              speaks/teaches the languages you want to learn. Message them to
              arrange a time and place to meet!{" "}
            </p>{" "}
            <br></br> <hr></hr> <br></br>{" "}
            <h5>Pssst... here's our secret tip:</h5>{" "}
            <p>
              {" "}
              Usually, our buddies meet at their favorite cafe. In our
              experience, good language-exchange buddies will spend the exchange
              speaking one language for half of the time and the other language
              for the other half. We recommend you start with 30 minutes per
              language. This way, you will practice speaking as well as
              understanding, and will reach your goals in no time!{" "}
            </p>{" "}
            <br></br>{" "}
            <i>
              {" "}
              Have fun! <br></br> Your SpeakEasy Team
            </i>
          </Col>
        </Row>
      </Container>
    ) : (
      <h1 style={{ marginTop: 300 }}>Have a seat, we're loading your chat!</h1>
    );
  }
}
