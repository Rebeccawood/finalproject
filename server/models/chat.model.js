const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema(
  {
    users: [String],
    history: [{ text: String, user: String }],
    room: Schema.ObjectId
  },
  {
    timestamp: true
  }
);
const ChatModel = mongoose.model("Chat", chatSchema);
module.exports = ChatModel;
