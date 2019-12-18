import axios from "axios";

export default class Services {
  constructor() {
    this.service = axios.create({
      baseURL:`${process.env.REACT_APP_URL}/profile`,
      withCredentials: true
    });
  }

  updateBuddy = (
    bio,
    languagesSpoken,
    learningLanguages,
    availabilityHours,
    availabilityDays,
    interests,
    age,
    gender,
    city
  ) =>
    this.service.post("/updatebuddy", {
      bio,
      languagesSpoken,
      learningLanguages,
      availabilityHours,
      availabilityDays,
      interests,
      age,
      gender,
      city
    });

  updateTeacher = (
    price,
    conditions,
    qualifictions,
    email,
    username,
    bio,
    availabilityHours,
    availabilityDays,
    age,
    gender,
    teachingLanguages
  ) =>
    this.service.post("/updateteacher", {
      price,
      conditions,
      qualifictions,
      email,
      username,
      bio,
      availabilityHours,
      availabilityDays,
      age,
      gender,
      teachingLanguages
    });

  getOneProfile = id => this.service.get(`/${id}`);

  newPreferences = (minAge, maxAge, gender) =>
    this.service.post("/newpreferences", {
      minAge,
      maxAge,
      gender
    });
}
