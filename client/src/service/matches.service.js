import axios from "axios";

export default class Services {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}/matches`,
      withCredentials: true
    });
  }
  getAllProfiles = () => this.service.get("/allprofiles");
  getTeachers = () => this.service.get("/teachers");
}
