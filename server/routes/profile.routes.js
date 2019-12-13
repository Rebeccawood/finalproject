const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const Buddy = require("../models/buddy.model");

router.get("/:id", (req, res) => {
  const userId = req.params.id;
  User.findById(userId)
    .populate("teacher")
    .populate("buddy")
    .then(theUser => res.json(theUser))
    .catch(err => console.log("DB error", err));
});

router.post("/newpreferences", (req, res) => {
  User.findById(req.user._id)
  .populate('buddy')
  const { minAge, maxAge, gender } = req.body.minAge
  Buddy.findByIdAndUpdate(
    req.user.buddy._id,
    { $set: { buddyPreferences: { minAge, maxAge, gender } } },
  )
    .then(user => {
      console.log(user, "this is the user we are sending to the front");
      res.status(200).json(user);
    })

    .catch(err => console.log("DB error", err));
});

module.exports = router;
