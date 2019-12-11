const express = require("express");
const router = express.Router();
const User = require("../models/user.model")


router.get("/allProfiles", (req, res) => {
  User.find()
    .then(allProfiles => res.json(allProfiles))
    .catch(err => console.log("DB error", err));
});
module.exports = router;