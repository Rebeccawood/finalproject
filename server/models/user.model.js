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
    gender: { type: String, enum: ["female", "male", "other"], default: "other" },
    buddy: { type: Schema.Types.ObjectId, ref: "Buddy" },
    teacher: { type: Schema.Types.ObjectId, ref: "Teacher" },
    availabilityDays: {
      type: [String],
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      default: ["Saturday", "Sunday"],
    },
    availabilityHours: {type: [String], default:["12:00 - 13:00", "13:00 - 14:00" ] },
    city: String
  },
  {
    timestamps: true
  }
);

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
