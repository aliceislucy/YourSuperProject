const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");


/// ROUTE BEGINS WITH : /api/cart ///

router.get("/", (req, res, next) => {
    Cart.findOne({user: req.session.currentUser.id})
    .populate("products.product")
    .then((cart) => {
      
      console.log('cart');
      console.log(cart);
      res.status(200).json(cart);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json(error);
      });
});


//POST (when you click on "Add to Cart" button the Id of the product is added to the user's Cart)

// DELETE
  
  module.exports = router;