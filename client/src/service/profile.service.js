import axios from "axios"

export default class Services {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000/profile",
      withCredentials: true
    });
  }

  getOneProfile = id => this.service.get(`/${id}`)
 }
