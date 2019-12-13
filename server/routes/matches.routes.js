const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const Buddy = require("../models/buddy.model");

router.get("/allProfiles", (req, res) => {
  User.findById(req.user._id)
    .populate("buddy")
    .then(populatedUser => {
      console.log(
        populatedUser.buddy.buddyPreferences.minAge,
        "after populate"
      );

      User.find(
        {
          $and: [
            { gender: populatedUser.buddy.buddyPreferences.gender },
            { city: populatedUser.city},
            { languagesSpoke: populatedUser.learningLanguages },
            { age: { $gte: populatedUser.buddy.buddyPreferences.minAge } },
            { age: { $lte: populatedUser.buddy.buddyPreferences.maxAge } }
          ]
        }
      )
        .then(allProfiles => {
          console.log(allProfiles);
          res.json(allProfiles);
        })
        .catch(err => console.log("DB error", err));
    })
    .catch(err => console.log(err));
});

module.exports = router;
