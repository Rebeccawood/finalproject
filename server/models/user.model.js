const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    email: String,
    imgPath: {
      type: String,
      default:
        "https://res.cloudinary.com/ddfbpuv7c/image/upload/v1575995425/FinalProject%20Ironhack/modern_foreign_languages_iffcfu.jpg"
    },
    imgName: String,
    bio: String,
    age: Number,
    gender: { type: String, enum: ["female", "male", "other"] },
    buddy: { type: Schema.Types.ObjectId, ref: "Buddy" },
    teacher: { type: Schema.Types.ObjectId, ref: "Teacher" },
    availabilityDays: {
      type: [String],
      enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    availabilityHours: {
      type: [String],
      enum: [
        "8:00 - 9:00",
        "9:00 - 10:00",
        "10:00 - 11:00",
        "11:00 - 12:00",
        "12:00 - 13:00",
        "13:00 - 14:00",
        "14:00 - 15:00",
        "16:00 - 17:00",
        "17:00 - 18:00",
        "19:00 - 20:00",
        "20:00 - 21:00"
      ]
    },
    location: { type: { type: String }, coordinates: [Number] }
  },
  {
    timestamps: true
  }
);

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
