import axios from "axios";

export default class Services {
                 constructor() {
                   this.service = axios.create({
                     baseURL: "http://localhost:5000/api/matches",
                     withCredentials: true
                   });
                 }
                 getAllProfiles = () => this.service.get("/allprofiles");
               }