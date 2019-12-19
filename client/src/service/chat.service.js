import axios from "axios";

export default class Services {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}/chat`,
      withCredentials: true
    });
  }
  getChat = username => this.service.post(`/getchat`, {username});
  updateChat = (message, room) => this.service.post("/updatechat", {message, room});
  findYourChats = () => this.service.post("/findchats")
  getHistory = newRoom => this.service.post("/gethistory", {newRoom})
}

