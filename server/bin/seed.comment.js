const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
require("../config/dbConnection");
const CommentModel = require("../models/Comment");
const UserModel = require("../models/User");
const ProductModel = require("../models/Product");

const comments = [
  {
    user: "",
    product: "",
    comment:
      "I am very pleased with this product. I drink it in my morning smoothie, wish it was a little more tasty but it's still great.",
    rating: 4,
  },
  {
    user: "",
    product: "",
    comment: "This is my favorite !",
    rating: 5,
  },
  {
    user: "",
    product: "",
    comment: "It's not very good... Better next time !",
    rating: 3,
  },
  {
    user: "",
    product: "",
    comment: "Yummy!",
    rating: 5,
  },
  {
    user: "",
    product: "",
    comment: "I feel so much better thanks to this product! Thank you !",
    rating: 5,
  },
];

UserModel.find()
  .then((userDocuments) => {
    comments.forEach((comment) => {
      const randomIndex = Math.floor(
        Math.random() * (userDocuments.length - 1 - 0 + 1) + 0
      );
      comment.user = userDocuments[randomIndex]._id;
    });
    ProductModel.find()
      .then((productDocuments) => {
        comments.forEach((comment) => {
          const randomIndex = Math.floor(
            Math.random() * (productDocuments.length - 1 - 0 + 1) + 0
          );
          comment.product = productDocuments[randomIndex]._id;
        });

        CommentModel.deleteMany()
          .then(() => CommentModel.create(comments))
          .then((documents) => {
            console.log("THE COMMENT SEEDS HAVE BEEN PLANTED 🌱");
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
