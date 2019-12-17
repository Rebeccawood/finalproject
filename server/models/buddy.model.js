const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buddySchema = new Schema({
  username: String,
  buddyPreferences: {
    maxAge: { type: Number, default: 100 },
    minAge: { type: Number, default: 18 },
    gender: { type: String, default: "choose..." }
  },
  languagesSpoken: {
    type: [String],
    default: ["English"]
  },
  learningLanguages: {
    type: [String],
    default: ["Mandarin Chinese"]
  },
  interests: { type: [String], default: ["Music"] }
  // {
  //   timestamps: true,
  // },
});

const BuddyModel = mongoose.model("Buddy", buddySchema);
module.exports = BuddyModel;
