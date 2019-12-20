const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const uploader = require("../configs/cloudinary.config");

router.post("/upload", uploader.single("imgPath"), (req, res, next) => {
  console.log (req.body, 'img upload')
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
    res.json({ secure_url: req.file.secure_url })
});

router.post ('/editphoto', (res, req) => {
  let {imgPath} = req.body
  console.log(req.body)
  User.findByIdAndUpdate(req.user.id, {imgPath})
  .then(user => res.json(user))
  .catch(err => err, "error with photo")
})

module.exports = router;
