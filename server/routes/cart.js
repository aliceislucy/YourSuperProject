const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

/// ------- ROUTE BEGINS WITH : /api/cart ------- ///

// => TO GET THE CURRENT USER'S CART

router.get("/", (req, res, next) => {
  Cart.findOne({ user: req.session.currentUser.id })
    .populate("products.product")
    .then((cart) => {
      console.log("cart");
      console.log(cart);
      res.status(200).json(cart);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

// => TO ADD A PRODUCT TO THE CURRENT USER'S CART

router.post("/", (req, res, next) => {
  Cart.findOne({ user: req.session.currentUser.id })
    .then((cart) => {
      if (cart === null) {
        const newCart = {
          user: req.session.currentUser.id,
          products: [],
        };
        Cart.create(newCart);
      }
      cart.products.push(req.body);
      cart
        .save()
        .then(() => {
          res.status(200).json(cart);
        })
        .catch(next);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

module.exports = router;
