const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");


/// ROUTE BEGINS WITH : /api/cart ///

router.get("/", (req, res, next) => {
    //if user is not logged in : add a key "cart" to the cookie
    //if user is logged in : add to session
    Cart.findById({})
      .populate("user")
      .populate("products")
      .then((cartDocuments) => {
        res.status(200).json(cartDocuments);
      })
      .catch(next);
});


//POST (when you click on "Add to Cart" button the Id of the product is added to the user's Cart)

// DELETE
  
  module.exports = router;