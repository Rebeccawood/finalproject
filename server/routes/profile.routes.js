const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.get("/:id", (req, res) => {
  const userId = req.params.id
  User.findById(userId)
    .then(theUser => res.json(theUser))
    .catch(err => console.log("DB error", err));
});

module.exports = router;
