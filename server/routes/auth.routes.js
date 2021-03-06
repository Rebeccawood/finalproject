const express = require("express");
const authRoutes = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const Teacher = require("../models/teacher.model");
const Buddy = require("../models/buddy.model");

authRoutes.post("/signup", (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400).json({ message: "Provide username and password" });
    return;
  }

  if (password.length < 2) {
    res.status(400).json({
      message:
        "Please make your password at least 10 characters long for security purposes."
    });
    return;
  }

  User.findOne({ username }, (err, foundUser) => {
    if (err) {
      res.status(500).json({ message: "username check went bad." });
      return;
    }

    if (foundUser) {
      res.status(400).json({ message: "Username taken. Choose another one." });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const aNewUser = new User({
      email: email,
      username: username,
      password: hashPass
    });

    aNewUser.save(err => {
      if (err) {
        res
          .status(400)
          .json({ message: "Saving user to database went wrong." });
        return;
      }

      // Automatically log in user after sign up
      // .login() here is actually predefined passport method
      req.login(aNewUser, err => {
        if (err) {
          res.status(500).json({ message: "Login after signup went bad." });
          return;
        }

        // Send the user's information to the frontend
        // We can use also: res.status(200).json(req.user);
        res.status(200).json(aNewUser);
      });
    });
  });
});

authRoutes.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) {
      res
        .status(500)
        .json({ message: "Something went wrong authenticating user" });
      return;
    }

    if (!theUser) {
      // "failureDetails" contains the error messages
      // from our logic in "LocalStrategy" { message: '...' }.
      res.status(401).json(failureDetails);
      return;
    }

    // save user in session
    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: "Session save went bad." });
        return;
      }

      // We are now logged in (that's why we can also send req.user)
      console.log(theUser);
      res.status(200).json(theUser);
    });
  })(req, res, next);
});

authRoutes.post("/logout", (req, res, next) => {
  // req.logout() is defined by passport
  req.logout();
  res.status(200).json({ message: "Log out success!" });
});

authRoutes.get("/loggedin", (req, res, next) => {
  // req.isAuthenticated() is defined by passport
  if (req.isAuthenticated()) {
    User.findById(req.user._id)
      .populate("buddy")
      .populate("teacher")
      .then(user => {
        console.log(user);
        res.status(200).json(user);
      });
    return;
  }
  res.status(403).json({ message: "Unauthorized" });
});

// ------------------ UPDATE USER WITH TEACHER --------------------//

authRoutes.post("/new/teacher", (req, res) => {
  const { bio, gender, age, availabilityHours, availabilityDays } = req.body;
  const { teachingLanguages, price, conditions, qualifications } = req.body;
  const teacher = { teachingLanguages, price, conditions, qualifications };
  const user = { bio, gender, age, availabilityHours, availabilityDays };

  Teacher.create(teacher)
    .then(newTeacher => {
      const teacherId = newTeacher._id;
      User.findByIdAndUpdate(
        req.user._id,
        {
          $set: {
            teacher: teacherId,
            bio: user.bio,
            gender: user.gender,
            age: user.age,
            availabilityHours: user.availabilityHours,
            availabilityDays: user.availabilityDays
          }
        },
        { new: true }
      )
        .populate("teacher")
        .then(user => res.status(200).json(user));
    })
    .catch(err => console.log("DB error", err));
});

// ------------------ UPDATE USER WITH BUDDY --------------------//

authRoutes.post("/new/buddy", (req, res) => {
  const { bio, gender, age, availabilityHours, availabilityDays } = req.body;
  const { languagesSpoken, learningLanguages, interests } = req.body;

  const buddy = { languagesSpoken, learningLanguages, interests };
  const user = { bio, gender, age, availabilityHours, availabilityDays };

  Buddy.create(buddy)
    .then(newBuddy => {
      const buddyId = newBuddy._id;
      User.findByIdAndUpdate(
        req.user._id,
        {
          $set: {
            buddy: buddyId,
            bio: user.bio,
            gender: user.gender,
            age: user.age,
            availabilityHours: user.availabilityHours,
            availabilityDays: user.availabilityDays
          }
        },
        { new: true }
      )
        .populate("buddy")
        .then(user => res.status(200).json(user));
    })
    .catch(err => console.log("DB error", err));
});

module.exports = authRoutes;
