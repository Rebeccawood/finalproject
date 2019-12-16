const User = require("../models/user.model");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const passport = require("passport");

passport.serializeUser((loggedInUser, cb) => cb(null, loggedInUser._id));

passport.deserializeUser((userIdFromSession, cb) => {
  User.findById(userIdFromSession)
    .populate("teacher")
    .populate("buddy")
    .then(userDocument => {
      cb(null, userDocument);
    })
    .catch(err => {
      cb(err);
      return;
    });
});

passport.use(
  new LocalStrategy((username, password, next) => {
    User.findOne({ username })
      .populate("teacher")
      .populate("buddy")
      .then(foundUser => {
        if (foundUser == null) {
          next(null, false, { message: "User not registered." });
          return;
        }

        if (!bcrypt.compareSync(password, foundUser.password)) {
          next(null, false, { message: "Password incorrect." });
          return;
        }

        next(null, foundUser);
      })
      .catch(err => {
        next(err);
        return;
      });
  })
);
