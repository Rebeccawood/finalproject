const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema(
  {
    username: String,
    price: Number,
    teachingLanguages:{ type: [String], default: ["English"]},
      // enum: [
      //   "German",
      //   "English",
      //   "Spanish",
      //   "French",
      //   "Portuguese",
      //   "Russian",
      //   "Italian",
      //   "Mandarin Chinese"
      // ]

    conditions: String,
    qualifications: String
  },
  {
    timestamps: true
  }
);

const TeacherModel = mongoose.model("Teacher", teacherSchema);
module.exports = TeacherModel;
