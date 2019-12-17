const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const Buddy = require("../models/buddy.model");

router.post("/updateBuddy", (req, res) => {
  const {
    bio,
    availabilityHours,
    availabilityDays,
    age,
    gender
  } = req.body.bio;
  const { languagesSpoken, learningLanguages, interests } = req.body.bio;
  console.log(req.body, "pizza");

  User.findByIdAndUpdate(req.user._id, {
    bio,
    availabilityDays,
    availabilityHours,
    age,
    gender
  })
    .populate("buddy")
    .then(x => {
      Buddy.findByIdAndUpdate(req.user._id, {
        languagesSpoken,
        learningLanguages,
        interests
      });
    })
    .then(x => {
      User.find(req.user._id)
        .populate("buddy")
        .then(user => {
          console.log(user, "this is the user we are sending to the front");
          res.status(200).json(user);
        });
    });
});

// router.post("/updateTeacher", (req, res) => {
//   const {
//     email,
//     username,
//     bio,
//     availabilityHours,
//     availabilityDays,
//     age,
//     gender
//   } = req.body;
//   const { price, conditions, qualifictions, teachingLanguages } = req.body;
//   // const user = {email, username, bio,availabilityHours,availabilityDays,age,gender,}
//   // const teacher = {price,conditions,qualifictions,teachingLanguages }

  

  router.get("/:id", (req, res) => {
    const userId = req.params.id;
    User.findById(userId)
      .populate("teacher")
      .populate("buddy")
      .then(theUser => res.json(theUser))
      .catch(err => console.log("DB error", err));
  });


router.post("/newpreferences", (req, res) => {
  User.findById(req.user._id).populate("buddy");

  const { minAge, maxAge, gender } = req.body.minAge;
  Buddy.findByIdAndUpdate(req.user.buddy._id, {
    $set: { buddyPreferences: { minAge, maxAge, gender } }
  })
    User.find(req.user._id)
    .populate("buddy")
    .then(user => {
      console.log(user, "this is the user we are sending to the front");
      res.status(200).json(user);
    })

    .catch(err => console.log("DB error", err));
});

module.exports = router;
