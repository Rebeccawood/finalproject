const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buddySchema = new Schema(
  {
    learningLanguages: {
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
    Hobbies: String,   
    },
  {
    timestamps: true
  }
);

const BuddyModel = mongoose.model("Buddy", buddySchema);
module.exports = BuddyModel;
