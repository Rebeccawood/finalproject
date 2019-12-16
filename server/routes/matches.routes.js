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

      User.find({
        $and: [
          { gender: populatedUser.buddy.buddyPreferences.gender },
          // { city: populatedUser.city },
          { languagesSpoke: {$in: populatedUser.buddy.learningLanguages} },
          { age: { $gte: populatedUser.buddy.buddyPreferences.minAge } },
          { age: { $lte: populatedUser.buddy.buddyPreferences.maxAge } }
        ]
      })
        .then(allProfiles => {
          console.log(allProfiles);
          res.json(allProfiles);
        })
        .catch(err => console.log("DB error", err));
    })
    .catch(err => console.log(err));
});

// router.get("/teachers", (req, res) => {
//   User.findById(req.user._id)
//     .populate("buddy")
//     .then(populatedUser => {
//       User.find({
//         $and: [
//           { city: populatedUser.city },
//           { languagesSpoke: populatedUser.teacher.teachingLanguages }
//         ]
//       })
//         .then(allProfiles => {
//           console.log(allProfiles);
//           res.json(allProfiles);
//         })
//         .catch(err => console.log("DB error", err));
//     });
// });

module.exports = router;
