import axios from "axios";

export default class Services {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}/chat`,
      withCredentials: true
    });
  }
  getChat = username => {
    return this.service.post(`/getchat`, {username});
  };

  updateChat = (text, room) => this.service.post("/updateChat", {text, room});
}
