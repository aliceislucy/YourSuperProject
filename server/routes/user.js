const express = require("express");
const router = express.Router();
const User = require("../models/User");


////  ----- ROUTE PREFIX === /api/user ----- ////

// Get every user inside the database (relevant I guess for admin ?)

router.get("/", (req, res, next) => {
  User.findById(req.session.currentUser.id)
  .then((currentUser) => {
    // console.log("-----THIS IS CURRENT USER-----");
    // console.log(currentUser);
    res.status(200).json(currentUser);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});


// Get a currentUser (client/src/pages/Profile) for profile page

router.post("/", (req, res, next) => {
  User.findByIdAndUpdate(req.session.currentUser.id)
  .then((userToUpdate) => {
    userToUpdate = req.body
    console.log("-----THIS IS UPDATED USER-----");
    console.log(userToUpdate);
    res.status(200).json(userToUpdate);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

// Create a new user (SEE AUTH.JS => SIGN UP

//  Update a user (has to be by id to target a certain user)

router.patch("/:id", (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedUser) => {
      res.status(200).json(updatedUser);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});


//  Delete a user (has to be by id will definetely delete a user => button DELETE MY ACCOUNT
//  Logout, delete and redirect to home page

router.delete("/:id", (req, res, next) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
