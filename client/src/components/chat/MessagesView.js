// import React, { Component } from 'react'
// import { Link } from "react-router-dom";
// // import Chat from './Chat'

// import io from 'socket.io-client'

// class MessagesView extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       userList : [],
//       user: null
//     }

//     this.socket = this.props.socket
//   }
  
//       updateUserList = ()=> {
//         let copyUserList = []
//         copyUserList.push(this.props.loggedInUser, this.props.user)
//           this.setState({userList: copyUserList})

//     this.socket.on('list', list => {
//       console.log(this.socket)
//       this.setState({...this.state, userList: list})
//     })
//   }
//   render(){
//     return (
//       <Link to="/chat">Chat</Link>
//     )
//   }
// }
// export default MessagesView