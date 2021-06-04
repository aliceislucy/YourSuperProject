require("../config/dbConnection");
const CartModel = require("../models/Cart");
const UserModel = require("../models/User");
const ProductModel = require("../models/Product");

const products = [
  {
    user: "",
    products: [],
    price: 0,
  },
  {
    user: "",
    products: [],
    price: 0,
  },
];

CartModel.deleteMany()
  .then(() => CartModel.create(carts))
  .then((documents) => {
    console.log("THE CART SEEDS HAVE BEEN PLANTED 🌱");
    console.log(documents);
  })
  .catch((error) => {
    console.log(error);
  });
