const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
require("../config/dbConnection");
const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const salt = 10;

const users = [
  {
    firstName: "Pol",
    lastName: "Seznec",
    profileImg: "https://res.cloudinary.com/debzbm2xr/image/upload/v1623079758/YourSuper/users_img/seed-pp_pol_z2wg5t.png",
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
    profileImg: "https://res.cloudinary.com/debzbm2xr/image/upload/v1623080077/YourSuper/users_img/seed-pp_alice_sb1apj.png",
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
    profileImg: "https://res.cloudinary.com/debzbm2xr/image/upload/v1623079758/YourSuper/users_img/seed-pp_client1_yqg6qa.jpg",
    email: "a@a",
    password: bcrypt.hashSync("000", salt),
    address: "2 avenue du Carrefour, 49006 Nantes",
    stripeId: "",
    isAdmin: false,
    isMember: false,
  },
  {
    firstName: "Josseline",
    lastName: "Dupuis",
    profileImg: "https://res.cloudinary.com/debzbm2xr/image/upload/v1623079758/YourSuper/users_img/seed-pp_client2_v3lxui.png",
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
