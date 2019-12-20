const express = require("express");
const router = express.Router();
const Chat = require("../models/chat.model");

router.post("/getchat", (req, res) => {
  const user = req.body.username;
  console.log(req.body.username, "other user");

  Chat.find({
    $and: [{ users: { $in: req.user.username } }, { users: { $in: user } }]
  })
    .then(theChat => {
      const chat = { users: [req.user.username, user] };
      !theChat.length
        ? Chat.create(chat)
            .then(newChat => {
              console.log(newChat, "the chat created");
              Array.isArray(newChat) ? res.json(newChat) : res.json([newChat])
              
            })
            .catch(err => console.log(err, "error from create chat"))
        : res.json(theChat);
    })
    .catch(err => console.log("DB error", err));
});

router.post("/updatechat", (req, res) => {
  let { message, room } = req.body;

  console.log(message[message.length - 1].text, "here is the text");

  Chat.findByIdAndUpdate(room, {
    $push: {
      history: {
        text: message[message.length - 1].text,
        user: message[message.length - 1].user
      }
    }
  }).then(updatedChat => {
    console.log(updatedChat, "update history");
    res.json(updatedChat);
  });
});

router.post("/findchats", (req, res) => {
  Chat.find({ users: { $in: req.user.username } })
    .then(chats => {
      console.log("---- chats", chats, "----- user", req.user.username);
      res.json(chats);
    })
    .catch(err => console.log(err));
});

router.post("/gethistory", (req, res) => {
  let chatId = req.body.newRoom;

  Chat.findById(chatId).then(chat => res.json(chat));
});
module.exports = router;
