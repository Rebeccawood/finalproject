const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({ 

    users: [String],
    history: {type:[String], default: ["no messages"]},
},
{
timestamp: true
})
const ChatModel = mongoose.model("Chat", chatSchema);
module.exports = ChatModel;