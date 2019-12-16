const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const Buddy = require("../models/buddy.model");

router.get("/allProfiles", (req, res) => {
  User.findById(req.user._id)
    .populate("buddy")
    .then(populatedUser => {
      console.log(populatedUser, "after populate");

      User.find({
        $and: [
          { buddy: { $exists: true } },
          { teacher: { $exists: false } },
          { gender: populatedUser.buddy.buddyPreferences.gender },
          { city: populatedUser.city },
          { age: { $gte: populatedUser.buddy.buddyPreferences.minAge } },
          { age: { $lte: populatedUser.buddy.buddyPreferences.maxAge } }
        ]
      })
        .populate("buddy")

        .then(allProfiles => {
          const languageArray = populatedUser.buddy.learningLanguages;

          const filteredArr = allProfiles.filter(userProfile =>
            languageArray.some(lang => {
              console.log(userProfile, "pizza");
              return userProfile.buddy.languagesSpoken.includes(lang);
            })
          );
          console.log(filteredArr, "pasta");
          res.json(filteredArr);
        })
        .catch(err => console.log("DB error", err));
    })
    .catch(err => console.log(err));
});

router.get("/teachers", (req, res) => {
  User.findById(req.user._id)
    .populate("buddy")
    .then(populatedUser => {
      User.find({
        $and: [
          { teacher: { $exists: true } },
          { buddy: { $exists: false } },
          { city: populatedUser.city }
        ]
      })
        .populate("buddy")
        .populate("teacher")
        .then(allProfiles => {
          console.log(allProfiles, "banana");
          const languageArray = populatedUser.buddy.learningLanguages;

          const filteredArr = allProfiles.filter(userProfile =>
            languageArray.some(lang => {
              console.log(userProfile, "sauce");
              return userProfile.teacher.teachingLanguages.includes(lang);
            })
          );
          console.log(filteredArr, "tomato");
          res.json(filteredArr);
        })
        .catch(err => console.log("DB error", err));
    })
    .catch(err => console.log(err));
});

module.exports = router;
