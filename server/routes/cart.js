const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");


/// ROUTE BEGINS WITH : /api/cart ///

router.get("/:id", (req, res, next) => {
    //if user is not logged in : add a key "cart" to the cookie
    //if user is logged in : add to session
    console.log('ptit chat')
    console.log(req.params)

    Cart.findOne(req.params.id)
    .populate("user")
    .populate("products")
    .then((cart) => {
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