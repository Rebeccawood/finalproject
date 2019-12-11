import axios from "axios";

export default class Services {
                 constructor() {
                   this.service = axios.create({
                     baseURL: "http://localhost:5000/auth",
                     withCredentials: true
                   });
                 }

                 signup = (username, email, password) =>
                   this.service.post("/signup", { username, email, password });

                 login = (username, password) =>
                   this.service.post("/login", { username, password });

                 logout = () => this.service.post("/logout");

                 loggedin = () => this.service.get("/loggedin");

                 newTeacher = teacher =>
                   this.service.post("/new/teacher", teacher);

                 newBuddy = buddy =>
                   this.service.post("/new/buddy", buddy);

                 
               }
