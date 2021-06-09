const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const Product = require("../models/Product");

/// ------- ROUTE BEGINS WITH : /api/cart ------- ///

// => TO GET THE CURRENT USER'S CART

router.get("/", (req, res, next) => {
  Cart.findOne({ user: req.session.currentUser.id })
    .populate("products.product")
    .then((cart) => {
      res.status(200).json(cart);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});
// => TO DELECT THE CURRENT USER'S CART
router.delete("/:id", (req, res, next) => {
  console.log("req.params.id");
  console.log(req.params.id);
  Cart.findOne({ user: req.session.currentUser.id })
  .then((userCart)=>{
    userCart.products.filter(product => product._id !== productId)
  })
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch((error) => {
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
