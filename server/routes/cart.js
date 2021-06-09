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



router.post("/", (req, res, next) => {
  console.log("REQ BODY");
  console.log(req.body);
  Cart.findOne({user: req.session.currentUser.id})
  .then((cart) => {
    cart.products.push(req.body)
    cart.save().then(() => {
      console.log("----------------fffff------------fffffff------");
      console.log(cart);
      res.status(200).json(cart);
    }).catch(next)

   
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});


// DELETE
  
  module.exports = router;