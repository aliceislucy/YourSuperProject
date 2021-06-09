const express = require("express");
const router = express.Router();
const Order = require("./../models/Order");


////  ----- ROUTE PREFIX === /api/order ----- ////


// Get the current user's order (for dahsboard)

router.get("/", (req, res, next) => {
  Order.find({user: req.session.currentUser.id})
    .then((userOrders) => {
      res.status(200).json(userOrders);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});


// Get a order by ID (when you click on it to get the details -> for client)

router.get("/:id", (req, res, next) => {
  Order.findById(req.params.id)
    .then((order) => {
      res.status(200).json(order);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

// Create a new Order

// must copy the cart's info inside the order and create an order
// number  =>  (array of all orders.length + 1)
// user: copy the objectID from cart
// products: [copy ObjectIDs from cart],
// price: copy price from cart
// timestamps => can be user to view the date of the order 

//  Update an order ==> cannot update order

//  Delete a Order ===> not relevant for this project

module.exports = router;