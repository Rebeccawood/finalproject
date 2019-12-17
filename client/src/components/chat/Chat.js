// import React, { Component } from "react";
// import InputChat from "./InputChat";
// import io from "socket.io-client";

// export default class Chat extends Component {
//   constructor(props) {
//     super(props);
    
//     this.socket = io("http://localhost/:5000/chat");
//     this.state = {
//       messages: []
//     };
//     //  this.socket = this.props.socket;

//      this.socket.on("newMessage", message => {
//        let mess = this.state.messages;
//        mess.push(message);
//        this.setState({ ...this.state, messages: message });
//      });

//     this.sendMessage = text => {
//       if (text.trim() === "") return;
//       let mess = {
//         text: text,
//         user: this.props.user
//       };
//       this.socket.emit("messageSent", mess);
//     };


//     // componentDidUpdate = () => {
//     //   document.getElementById("chatBox").scrollTop = document.getElementById(
//     //     "chatBox"
//     //   ).scrollHeight;
//     // };
//    }

//   render() {
//     return (
//       <>
//         <div className="chatBox" id="chatBox">
//           {this.state.messages.map((elm, idx) => {
//             return (
//               <h6 key={idx}>
//                 {elm.user} : {elm.text}
//               </h6>
//             );
//           })}
//         </div>

//         <div className="textForm">
//           <InputChat info={this.sendMessage}></InputChat>
//         </div>
//       </>
//     );
//   }
// }
