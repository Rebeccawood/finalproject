const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buddySchema = new Schema(
  {
    BuddyPreferences: { maxAge: Number, minAge: Number, gender: String, location:[Number]},
    languagesSpoken: {
      type: [String]
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
    },
    learningLanguages: {
      type: [String]
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
    },
    Hobbies: String
  },
  {
    timestamps: true
  }
);

const BuddyModel = mongoose.model("Buddy", buddySchema);
module.exports = BuddyModel;
