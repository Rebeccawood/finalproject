import axios from "axios";

export default class Services {
  constructor() {
    this.service = axios.create({
      baseURL: "https://speakeasy-ironhack.herokuapp.com/api/matches",
      withCredentials: true
    });
  }
  getAllProfiles = () => this.service.get("/allprofiles");
  getTeachers = () => this.service.get("/teachers");
}
