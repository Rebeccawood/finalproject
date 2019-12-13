import axios from "axios"

export default class Services {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000/api/profile",
      withCredentials: true
    });
  }

  getOneProfile = id => this.service.get(`/${id}`)

  newPreferences = (minAge, maxAge, gender) => this.service.post('/newpreferences', {minAge, maxAge, gender})
 }
