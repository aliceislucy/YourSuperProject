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
      $pull: { products: { product: req.params.id } },
    },
    { new: true }
  ).then((updatedCart) => {
    console.log(updatedCart);
    res.status(200).json(updatedCart);
  });
});

// => TO ADD A PRODUCT TO THE CURRENT USER'S CART

router.post("/", (req, res, next) => {


  console.log(req.body)

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
      
        const foundProduct = cart.products.find(item => item.product.toString() === req.body.product)

        if(foundProduct){
          foundProduct.quantity += req.body.quantity
        }else{
          cart.products.push(req.body)
        }

        cart.save().then(savedCart => {
          console.log(savedCart)
          res.status(200).json(savedCart)
        }).catch(error => {
          next(error)
        })




      

      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

module.exports = router;
