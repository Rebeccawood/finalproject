const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buddySchema = new Schema(
  {
    username: String,
    buddyPreferences: { maxAge: Number, minAge: Number, gender: String},
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
    interests: [String]
  },
  {
    timestamps: true
  }
);

const BuddyModel = mongoose.model("Buddy", buddySchema);
module.exports = BuddyModel;
