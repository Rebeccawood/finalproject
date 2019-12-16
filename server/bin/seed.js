// node bin/seed.js

require("dotenv").config();

const mongoose = require("../configs/mongoose.config");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const Buddy = require("../models/buddy.model");
const Teacher = require("../models/teacher.model");

const bcryptSalt = 10;

let users = [
  {
    username: "anna_rockss",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(bcryptSalt)),
    email: "annarockss@gmail.com",
    imgPath:
      "https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576258484/FinalProject/dan-ROJFuWCsfmA-unsplash_ugkiwf.jpg",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    age: 25,
    gender: "female",
    availabilityDays: ["Monday", "Tuesday", "Thursday"],
    availabilityHours: [
      "10:00 - 11:00",
      "13:00 - 14:00",
      "17:00 - 18:00",
      "18:00 - 19:00",
      "19:00 - 20:00"
    ],
    city: "Madrid"
  },
  {
    username: "french-celine",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(bcryptSalt)),
    email: "annarockss@gmail.com",
    imgPath:
      "https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576314143/FinalProject/philipe-cavalcante-oxN_qoqB8BI-unsplash_tt3sap.jpg",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    age: 24,
    gender: "female",
    availabilityDays: ["Monday", "Wednesday", "Thursday"],
    availabilityHours: [
      "10:00 - 11:00",
      "13:00 - 14:00",
      "17:00 - 18:00",
      "18:00 - 19:00",
      "19:00 - 20:00"
    ],
    city: "Madrid"
  },
  {
    username: "markjonhson",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(bcryptSalt)),
    email: "markjohnson@gmail.com",
    imgPath:
      "https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576258776/FinalProject/emile-guillemot-LSP9Tpavbms-unsplash_io6cgp.jpg",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    age: 33,
    gender: "male",
    availabilityDays: ["Saturday", "Sunday"],
    availabilityHours: [
      "8:00 - 9:00",
      "9:00 - 10:00",
      "17:00 - 18:00",
      "18:00 - 19:00",
      "19:00 - 20:00"
    ],
    city: "Madrid"
  },
  {
    username: "maria0407",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(bcryptSalt)),
    email: "maria1990@gmail.com",
    imgPath:
      "https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576314534/FinalProject/matthew-hamilton-tNCH0sKSZbA-unsplash_nbmh1a.jpg",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    age: 28,
    gender: "female",
    availabilityDays: ["Monday", "Saturday", "Sunday"],
    availabilityHours: [
      "8:00 - 9:00",
      "9:00 - 10:00",
      "12:00 - 13:00",
      "18:00 - 19:00",
      "20:00 - 21:00"
    ],
    city: "Madrid"
  },
  {
    username: "john",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(bcryptSalt)),
    email: "john@gmail.com",
    imgPath:
      "https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576314153/FinalProject/eduardo-dutra-RPKmkxJw_a0-unsplash_nt7n5n.jpg",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    age: 30,
    gender: "male",
    availabilityDays: ["Monday", "Wednesday", "Sunday"],
    availabilityHours: [
      "12:00 - 13:00",
      "13:00 - 14:00",
      "16:00 - 17:00",
      "18:00 - 19:00"
    ],
    city: "Madrid"
  },
  {
    username: "hannah-taylor2",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(bcryptSalt)),
    email: "email@gmail.com",
    imgPath:
      "https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576314476/FinalProject/brooke-cagle-6e9NdtnJYxU-unsplash_kroybd.jpg",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    age: 30,
    gender: "female",
    availabilityDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
    availabilityHours: [
      "11:00 - 12:00",
      "13:00 - 14:00",
      "16:00 - 17:00",
      "20:00 - 21:00"
    ],
    city: "Madrid"
  },
  {
    username: "david",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(bcryptSalt)),
    email: "email@gmail.com",
    imgPath:
      "https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576258511/FinalProject/luis-villasmil-hh3ViD0r0Rc-unsplash_zymevr.jpg",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    age: 34,
    gender: "female",
    availabilityDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Saturday",
      "Sunday"
    ],
    availabilityHours: [
      "10:00 - 11:00",
      "11:00 - 12:00",
      "13:00 - 14:00",
      "14:00 - 15:00",
      "16:00 - 17:00"
    ],
    city: "Madrid"
  },
  {
    username: "lisa-p",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(bcryptSalt)),
    email: "email@gmail.com",
    imgPath:
      "https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576258492/FinalProject/alina-kovalchuk-Cd7dYdJKIKk-unsplash_vghzre.jpg",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    age: 22,
    gender: "female",
    availabilityDays: ["Monday", "Tuesday", "Wednesday"],
    availabilityHours: [
      "9:00 - 10:00",
      "10:00 - 11:00",
      "11:00 - 12:00",
      "13:00 - 14:00",
      "19:00 - 20:00",
      "20:00 - 21:00"
    ],
    city: "Madrid"
  },
  {
    username: "richardnewton",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(bcryptSalt)),
    email: "email@gmail.com",
    imgPath:
      "https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576314175/FinalProject/jack-finnigan-rriAI0nhcbc-unsplash_o6pjuc.jpg",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    age: 36,
    gender: "male",
    availabilityDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Saturday",
      "Sunday"
    ],
    availabilityHours: [
      "8:00 - 9:00",
      "16:00 - 17:00",
      "17:00 - 18:00",
      "19:00 - 20:00"
    ],
    city: "Madrid"
  },

  {
    username: "paul",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(bcryptSalt)),
    email: "email@gmail.com",
    imgPath:
      "https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576259228/FinalProject/ethan-hoover-0YHIlxeCuhg-unsplash_nboloq.jpg",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    age: 23,
    gender: "female",
    availabilityDays: ["Monday", "Tuesday", "Wednesday"],
    availabilityHours: ["10:00 - 11:00", "11:00 - 12:00"],
    city: "Madrid"
  },
  {
    username: "laurachen",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(bcryptSalt)),
    email: "email@gmail.com",
    imgPath:
      "https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576314481/FinalProject/azamat-kinzhitaev-yyf5DCBtm4E-unsplash_kp0pwp.jpg",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    age: 27,
    gender: "female",
    availabilityDays: ["Wednesday", "Thursday", "Saturday", "Sunday"],
    availabilityHours: [
      "13:00 - 14:00",
      "14:00 - 15:00",
      "16:00 - 17:00",
      "17:00 - 18:00",
      "18:00 - 19:00",
      "19:00 - 20:00"
    ],
    city: "Madrid"
  },
  {
    username: "cooltyler5",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(bcryptSalt)),
    email: "email@gmail.com",
    imgPath:
      "https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576314106/FinalProject/tyler-nix-PQeoQdkU9jQ-unsplash_gyssij.jpg",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    age: 31,
    gender: "male",
    availabilityDays: ["Saturday", "Sunday"],
    availabilityHours: [
      "10:00 - 11:00",
      "11:00 - 12:00",
      "14:00 - 15:00",
      "16:00 - 17:00"
    ],
    city: "Madrid"
  },
  {
    username: "happybetty",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(bcryptSalt)),
    email: "email@gmail.com",
    imgPath:
      "https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576314482/FinalProject/clem-onojeghuo-FbTOrJ2G8KI-unsplash_swhvfb.jpg",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    age: 34,
    gender: "female",
    availabilityDays: ["Monday", "Tuesday", "Friday", "Saturday", "Sunday"],
    availabilityHours: [
      "8:00 - 9:00",
      "9:00 - 10:00",
      "11:00 - 12:00",
      "13:00 - 14:00"
    ],
    city: "Madrid"
  },
  {
    username: "nadia567",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(bcryptSalt)),
    email: "email@gmail.com",
    imgPath:
      "https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576314504/FinalProject/aziz-acharki-SKFdd8JGU-0-unsplash_m7mg56.jpg",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    age: 34,
    gender: "female",
    availabilityDays: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    availabilityHours: [
      "10:00 - 11:00",
      "11:00 - 12:00",
      "13:00 - 14:00",
      "14:00 - 15:00",
      "16:00 - 17:00"
    ],
    city: "Madrid"
  },
  {
    username: "isabel-profe",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(bcryptSalt)),
    email: "email@gmail.com",
    imgPath:
      "https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576314504/FinalProject/aziz-acharki-SKFdd8JGU-0-unsplash_m7mg56.jpg",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    age: 40,
    gender: "female",
    availabilityDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    availabilityHours: [
      "10:00 - 11:00",
      "11:00 - 12:00",
      "13:00 - 14:00",
      "14:00 - 15:00",
      "16:00 - 17:00",
      "17:00 - 18:00",
      "18:00 - 19:00"
    ],
    city: "Madrid"
  },
  {
    username: "rowensmith",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(bcryptSalt)),
    email: "email@gmail.com",
    imgPath:
      "https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576314851/FinalProject/javier-sierra-6jopFhZkGGk-unsplash_h4d0qr.jpg",
    bio:
      "https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576314653/FinalProject/rowen-smith-RQ1HNnopBbY-unsplash_rqjw55.jpg",
    age: 34,
    gender: "male",
    availabilityDays: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    availabilityHours: [
      "10:00 - 11:00",
      "11:00 - 12:00",
      "13:00 - 14:00",
      "17:00 - 18:00",
      "18:00 - 19:00"
    ],
    city: "Madrid"
  },
  {
    username: "andy",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(bcryptSalt)),
    email: "email@gmail.com",
    imgPath:
      "https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576314847/FinalProject/vince-fleming-_THUISs23CI-unsplash_ctl6ij.jpg",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    age: 40,
    gender: "male",
    availabilityDays: ["Monday", "Tuesday", "Saturday", "Sunday"],
    availabilityHours: [
      "16:00 - 17:00",
      "17:00 - 18:00",
      "18:00 - 19:00",
      "19:00 - 20:00",
      "20:00 - 21:00"
    ],
    city: "Madrid"
  },
  {
    username: "lucia1409",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(bcryptSalt)),
    email: "email@gmail.com",
    imgPath:
      "https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576314791/FinalProject/marius-ciocirlan-vMV6r4VRhJ8-unsplash_alfsle.jpg",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    age: 45,
    gender: "female",
    availabilityDays: ["Monday", "Tuesday", "Friday", "Saturday", "Sunday"],
    availabilityHours: [
      "8:00 - 9:00",
      "10:00 - 11:00",
      "12:00 - 13:00",
      "13:00 - 14:00",
      "14:00 - 15:00"
    ],
    city: "Madrid"
  },
  {
    username: "teachermarius",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(bcryptSalt)),
    email: "email@gmail.com",
    imgPath:
      "https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576314794/FinalProject/bbh-singapore-Kp0zyajw228-unsplash_oeylvr.jpg",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    age: 45,
    gender: "male",
    availabilityDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    availabilityHours: [
      "8:00 - 9:00",
      "10:00 - 11:00",
      "12:00 - 13:00",
      "13:00 - 14:00",
      "14:00 - 15:00",
      "15:00 - 16:00",
      "19:00 - 20:00",
      "20:00 - 21:00"
    ],
    city: "Madrid"
  },
  {
    username: "deborah-madrid",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(bcryptSalt)),
    email: "email@gmail.com",
    imgPath:
      "https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576314794/FinalProject/bbh-singapore-Kp0zyajw228-unsplash_oeylvr.jpg",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    age: 43,
    gender: "female",
    availabilityDays: ["Monday", "Tuesday", "Thursday", "Friday"],
    availabilityHours: [
      "8:00 - 9:00",
      "10:00 - 11:00",
      "12:00 - 13:00",
      "13:00 - 14:00",
      "14:00 - 15:00"
    ],
    city: "Madrid"
  },
  {
    username: "judy",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(bcryptSalt)),
    email: "email@gmail.com",
    imgPath:
      "https://res.cloudinary.com/ddfbpuv7c/image/upload/v1576314077/FinalProject/michael-mims-fWWiaDox0BU-unsplash_klhyg4.jpg",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    age: 43,
    gender: "female",
    availabilityDays: ["Monday", "Tuesday", "Thursday", "Friday"],
    availabilityHours: [
      "12:00 - 13:00",
      "13:00 - 14:00",
      "14:00 - 15:00",
      "18:00 - 19:00",
      "19:00 - 20:00"
    ],
    city: "Madrid"
  }
];
// User.deleteMany()
//   .then(() => {
//     return User.create(users);
//   })
//   .then(usersCreated => {
//     console.log(`${usersCreated.length} users created with the following id:`);
//     console.log(usersCreated.map(u => u._id));
//   })
//   .then(() => {
//     // Close properly the connection to Mongoose
//     mongoose.disconnect();
//   })
//   .catch(err => {
//     mongoose.disconnect();
//     throw err;
//   });

let teachers = [
  {
    username: "nadia567",
    price: 20,
    teachingLanguages: ["English", "Spanish", "French"],
    conditions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    qualifications: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    username: "isabel-profe",
    price: 15,
    teachingLanguages: ["German", "Spanish", "Italian"],
    conditions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    qualifications: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    username: "rowensmith",
    price: 18,
    teachingLanguages: ["Portuguese", "Italian"],
    conditions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    qualifications: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    username: "andy",
    price: 12,
    teachingLanguages: ["English", "German"],
    conditions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    qualifications: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    username: "lucia1409",
    price: 28,
    teachingLanguages: ["English", "German", "Spanish", "Mandarin Chinese"],
    conditions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    qualifications: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    username: "teachermarius",
    price: 22,
    teachingLanguages: ["English", "German", "Russian"],
    conditions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    qualifications: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    username: "deborah-madrid",
    price: 20,
    teachingLanguages: ["English", "Spanish", "Italian", "Portuguese"],
    conditions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    qualifications: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    username: "judy",
    price: 19,
    teachingLanguages: ["English", "French", "Italian", "Portuguese"],
    conditions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    qualifications: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  }
];
// Teacher.deleteMany()
//   .then(() => {
//     return Teacher.create(users);
//   })
//   .then(usersCreated => {
//     console.log(`${Created.length} teachers created with the following id:`);
//     console.log(usersCreated.map(u => u._id));
//   })
//   .then(() => {
//     // Close properly the connection to Mongoose
//     mongoose.disconnect();
//   })
//   .catch(err => {
//     mongoose.disconnect();
//     throw err;
//   });

let buddies = [
  {
    username: "anna_rockss",
    buddyPreferences: { maxAge: 35, minAge: 18, gender: "female" },
    languagesSpoken: ["Russian", "Portuguese"],
    learningLanguages: ["French", "English", "Spanish"],
    interests: ["Literature", "Art & Design", "Sports", "Business", "Music"]
  },
  {
    username: "french-celine",
    buddyPreferences: { maxAge: 40, minAge: 18, gender: "female" },
    languagesSpoken: ["French", "English", "Spanish"],
    learningLanguages: ["Russian", "Portuguese"],
    interests: ["Yoga", "Movies", "Cooking"]
  },
  {
    username: "maria0407",
    buddyPreferences: { maxAge: 40, minAge: 18, gender: "male" },
    languagesSpoken: ["German", "Portuguese", "Italian"],
    learningLanguages: ["French", "English", "Spanish"],
    interests: ["Literature", "Art & Design", "Sports", "Business", "Music"]
  },
  {
    username: "john",
    buddyPreferences: { maxAge: 40, minAge: 18, gender: "female" },
    languagesSpoken: ["Spanish", "Russian", "French"],
    learningLanguages: ["German", "Portuguese", "Italian"],
    interests: ["Traveling", "Video Games", "Blogging"]
  },
  {
    username: "hannah-taylor2",
    buddyPreferences: { maxAge: 40, minAge: 18, gender: "male" },
    languagesSpoken: ["Spanish", "German", "French"],
    learningLanguages: ["Portuguese", "Italian"],
    interests: ["Literature", "Art & Design", "Sports", "Business", "Music"]
  },
  {
    username: "david",
    buddyPreferences: { maxAge: 40, minAge: 18, gender: "female" },
    languagesSpoken: ["Portuguese", "Italian"],
    learningLanguages: ["Spanish", "German", "French"],
    interests: ["Yoga", "Movies", "Cooking"]
  },
  {
    username: "lisa-p",
    buddyPreferences: { maxAge: 39, minAge: 18, gender: "male" },
    languagesSpoken: ["Spanish", "Portuguese", "Russian"],
    learningLanguages: ["Spanish", "Portuguese", "Russian"],
    interests: ["Yoga", "Movies", "Cooking"]
  },
  {
    username: "richardnewton",
    buddyPreferences: { maxAge: 40, minAge: 18, gender: "female" },
    languagesSpoken: ["Spanish", "Portuguese", "Russian"],
    learningLanguages: ["Spanish", "Portuguese", "Russian"],
    interests: ["Traveling", "Video Games", "Blogging"]
  },
  {
    username: "paul",
    buddyPreferences: { maxAge: 40, minAge: 18, gender: "female" },
    languagesSpoken: ["German", "English"],
    learningLanguages: ["Spanish", "Manderin Chinese"],
    interests: ["Traveling", "Video Games", "Blogging"]
  },
  {
    username: "laurachen",
    buddyPreferences: { maxAge: 40, minAge: 18, gender: "male" },
    languagesSpoken: ["Spanish", "Manderin Chinese"],
    learningLanguages: ["German", "English"],
    interests: ["Yoga", "Movies", "Cooking"]
  },
  {
    username: "cooltyler5",
    buddyPreferences: { maxAge: 40, minAge: 18, gender: "male" },
    languagesSpoken: ["Spanish", "Portuguese", "Russian"],
    learningLanguages: ["German", "English"],
    interests: ["Yoga", "Movies", "Cooking"]
  },
  {
    username: "happybetty",
    buddyPreferences: { maxAge: 40, minAge: 18, gender: "male" },
    languagesSpoken: ["Spanish", "Manderin Chinese"],
    learningLanguages: ["Russian", "French"],
    interests: ["Literature", "Art & Design", "Sports", "Business", "Music"]
  }
];

User.collection
  .drop()
  .then(() => User.create(users))
  .then(usersCreated => {
    console.log(`${usersCreated.length} Users created`);
    return Buddy.collection.drop();
  })
  .then(() => Buddy.create(buddies))
  .then(buddiesCreated => {
    console.log(buddiesCreated, "these are the buddies");
    // console.log(`${buddiesCreated.length} Buddies created`);
    buddiesCreated.forEach(buddyField => {
      User.findOne({ username: buddyField.username }).then(user => {
        user.buddy = new mongoose.Types.ObjectId(buddyField._id);
        user
          .save()
          .then(() => console.log("user saved"))
          .catch(err => console.log(err, "error buddy collection"));
      });
    });
  })
  .then(() => Teacher.collection.drop())
  .then(() => Teacher.create(teachers))
  .then(teachersCreated => {
    console.log(`${teachersCreated.length} teachers created`);

    teachersCreated.forEach(teacherField => {
      User.findOne({ username: teacherField.username }).then(user => {
        user.teacher = new mongoose.Types.ObjectId(teacherField._id);
        user.save().catch(err => console.log(err, "error teacher collection"));
      });
    });
  });
// .finally(() => mongoose.disconnect());

// Buddy.deleteMany()
//   .then(() => {
//     return Buddy.create(users);
//   })
//   .then(usersCreated => {
//     console.log(
//       `${usersCreated.length} buddies created with the following id:`
//     );
//     console.log(usersCreated.map(u => u._id));
//   })
//   .then(() => {
//     // Close properly the connection to Mongoose
//     mongoose.disconnect();
//   })
//   .catch(err => {
//     mongoose.disconnect();
//     throw err;
//   });
