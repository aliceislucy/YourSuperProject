require("../config/dbConnection");
const UserModel = require("../models/User");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const bcrypt = require("bcrypt");
const salt = 10;

const users = [
  {
    firstName: "Pol",
    lastName: "Seznec",
    profileImg: "./../public/images/users_img/seed-pp_pol.png",
    email: "pol@y",
    password: bcrypt.hashSync("000", salt),
    address: "5 rue des Paquerettes, 74236 Charleville-Mézières",
    stripeId: "",
    isAdmin: true,
    isMember: false,
  },
  {
    firstName: "Alice",
    lastName: "Lefevre",
    profileImg: "./../public/images/users_img/seed-pp_alice.png",
    email: "alice@y",
    password: bcrypt.hashSync("000", salt),
    address: "25 rue des lapins, 45978 Bobine-les-Bois",
    stripeId: "",
    isAdmin: true,
    isMember: false,
  },
  {
    firstName: "Angela",
    lastName: "Thomas",
    profileImg: "./../public/images/users_img/seed-pp_client1.jpg",
    email: "",
    password: bcrypt.hashSync("000", salt),
    address: "2 avenue du Carrefour, 49006 Nantes",
    stripeId: "a@a",
    isAdmin: false,
    isMember: false,
  },
  {
    firstName: "Josseline",
    lastName: "Dupuis",
    profileImg: "./../public/images/users_img/seed-pp_client2.png",
    email: "b@b",
    password: bcrypt.hashSync("000", salt),
    address: "54 impasse Berlioz, 83720 Saint Raphaël",
    stripeId: "",
    isAdmin: false,
    isMember: true,
  },
];

UserModel.deleteMany()
  .then(() => UserModel.create(users))
  .then((documents) => {
    console.log("THE USER SEEDS HAVE BEEN PLANTED 🌱");
    console.log(documents);
  })
  .catch((error) => {
    console.log(error);
  });
