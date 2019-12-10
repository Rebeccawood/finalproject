const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema(
  {
    price: Number,
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
    },
    conditions: String,
    qualifications: String,
  },
  {
    timestamps: true
  }
);

const TeacherModel = mongoose.model("Teacher", teacherSchema);
module.exports = TeacherModel;
