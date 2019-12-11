const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const uploader = require("../configs/cloudinary.config");

router.post("/upload", uploader.single("imageUrl"), (req, res, next) => {
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  User.findByIdAndUpdate(req.user._id, {
    imgPath: imgUrl
  }).then(user => res.json({ secure_url: req.file.secure_url }));
});

module.exports = router;