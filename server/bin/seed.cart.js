require("../config/dbConnection");
const CartModel = require("../models/Cart");
const UserModel = require("../models/User");
const ProductModel = require("../models/Product");

const carts = [
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
