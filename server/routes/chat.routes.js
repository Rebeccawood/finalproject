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
              res.json(newChat);
            })
            .catch(err => console.log(err, "error from create chat"))
        : res.json(theChat);
    })
    .catch(err => console.log("DB error", err));
});

router.post("/updateChat", (req, res) => {
  let { text, room } = req.body;
  console.log(req.body.text);

  Chat.findByIdAndUpdate(room, { history: text }).then(updatedChat => {
    console.log(updatedChat, "update history");
    res.json(updatedChat);
  });
});

module.exports = router;
