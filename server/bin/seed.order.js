const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
require("../config/dbConnection");
const OrderModel = require("../models/Order");
const UserModel = require("../models/User");
const ProductModel = require("../models/Product");

const orders = [
  {
    number: "",
    user: "",
    products: [],
  },
  {
    number: "",
    user: "",
    products: [],
  },
  {
    number: "",
    user: "",
    products: [],
  },
  {
    number: "",
    user: "",
    products: [],
  }
];

UserModel.findOne({ firstName : "Josseline"})
  .then((josseline) => {
    for (let i = 0; i < orders.length; i++) {
      orders[i].user = josseline._id;
      orders[i].number = `ORD-NUM-0${i}`
    }
    ProductModel.find()
      .then((allProducts) => {
        for (let i = 0; i < 6; i++) {
          orders.forEach((order) => {
            const randomIndex = Math.floor(
              Math.random() * (allProducts.length - 1 - 0 + 1) + 0
            );
            order.products.push(allProducts[randomIndex]._id);
          });
        }
        OrderModel.deleteMany()
          .then(() => OrderModel.create(orders))
          .then((documents) => {
            console.log("THE ORDER SEEDS HAVE BEEN PLANTED 🌱");
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
