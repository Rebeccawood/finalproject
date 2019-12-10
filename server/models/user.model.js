const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    email: String,
    imgPath: String,
    imgName: String,
    bio: String,
    age: Number,
    gender: { type: String, enum: ["female", "male", "other"] },
    buddy: { type: Schema.Types.ObjectId, ref: "Buddy" },
    teacher: { type: Schema.Types.ObjectId, ref: "Teacher" },
    availabilityDay: {
      type: String,
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ]
    },
    availabilityHours: [Number],
    location: { type: { type: String }, coordinates: [Number] },
    languages: {
      type: String,
      enum: [
        "English",
        "German",
        "Spanish",
        "Chinese/Mandarin",
        "French",
        "Italian",
        "Russian",
        "Arabic",
        "Portuguese"
      ]
    }
  },
  {
    timestamps: true
  }
);

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
