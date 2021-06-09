const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
require("../config/dbConnection");
const CartModel = require("../models/Cart");
const UserModel = require("../models/User");
const ProductModel = require("../models/Product");
const carts = [
  {
    user: "60bf1a6340a4c2a72a1b9fe1",
    products: [{quantity: 3, product : '60bf34f69fc5c4b7382174c5'},{quantity: 2, product : '60bf34f69fc5c4b7382174c9'}],
  },
];

UserModel.find()
  .then((userDocuments) => {
    for (let i = 0; i < carts.length; i++) {
      carts[i].user = userDocuments[i]._id;
    }
    ProductModel.find()
      .then((productDocuments) => {
        for (let i = 0; i < 6; i++) {
          carts.forEach((cart) => {
            const randomIndex = Math.floor(
              Math.random() * (productDocuments.length - 1 - 0 + 1) + 0
            );
            cart.products.push(productDocuments[randomIndex]._id);
          });
        }
        CartModel.deleteMany()
          .then(() => CartModel.create(carts))
          .then((documents) => {
            console.log("THE CART SEEDS HAVE BEEN PLANTED 🌱");
            console.log(documents);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });