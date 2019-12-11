const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buddySchema = new Schema(
  {
    languagesSpoken: {
      type: [String],
      enum: [
        "German",
        "English",
        "Spanish",
        "French",
        "Portuguese",
        "Russian",
        "Italian",
        "Chinese/Manderin"
      ]
    },
    learningLanguages: {
      type: [String],
      enum: [
        "German",
        "English",
        "Spanish",
        "French",
        "Portuguese",
        "Russian",
        "Italian",
        "Chinese/Manderin"
      ]
    },
    Hobbies: String
  },
  {
    timestamps: true
  }
);

const BuddyModel = mongoose.model("Buddy", buddySchema);
module.exports = BuddyModel;
