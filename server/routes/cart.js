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
  Cart.findOneAndUpdate(
    { user: req.session.currentUser.id },
    {
      $pull : {products : {product: req.params.id} },
    },
    { new: true }
  ).then((updatedCart) => {
    console.log(updatedCart);
    res.status(200).json(updatedCart);
  });
});

// => TO ADD A PRODUCT TO THE CURRENT USER'S CART

router.post("/", (req, res, next) => {
  Cart.findOne({ user: req.session.currentUser.id })
    .then((cart) => {
      if (cart === null) {
        const newCart = {
          user: req.session.currentUser.id,
          products: [req.body],
        };
        Cart.create(newCart)
          .then((newCart) => {
            res.status(200).json(newCart);
          })
          .catch(next);
      } else {
        //make a loop, If productId Match  => quantity
        

        // {product: 1, quantity : 3}
        // {prduct: 17, quantity: 1}
        // [{product: 1, quantity: 10}, {product: 2, quantity: 4}]

        cart.products.push(req.body);
        cart
          .save()
          .then(() => {
            res.status(200).json(cart);
          })
          .catch(next);
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

module.exports = router;
