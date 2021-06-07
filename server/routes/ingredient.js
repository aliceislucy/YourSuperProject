const express = require("express");
const router = express.Router();
const Ingredient = require("../models/Ingredient");


////  ----- ROUTE PREFIX === /api/ingredient ----- ////

// Get every ingredient inside the database (no need but just in case)

router.get("/", (req, res, next) => {
  Ingredient.find()
    .then((allIngredients) => {
      res.status(200).json(allIngredients);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});


// Get a ingredient by ID (when you click on it to get the details) BONUUUS

router.get("/:id", (req, res, next) => {
  Ingredient.findById(req.params.id)
    .then((ingredient) => {
      res.status(200).json(ingredient);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});


// Create a new ingredient => ADMIN ONLY

router.post("/", (req, res, next) => {

  const { name, ingredientImg, description } = req.body;

  if (!name || !ingredientImg || !description) {
    return res.status(400).json({ message: "No empty fields please !" });
  }

  const newIngredient = {
    name,
    ingredientImg,
    description,
  };

  Ingredient.create(newIngredient)
    .then((ingredient) => {
      res.status(201).json(ingredient);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});


//  Update a ingredient (has to be by id to target a certain ingredient)

router.patch("/:id", (req, res, next) => {
  Ingredient.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedIngredient) => {
      res.status(200).json(updatedIngredient);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});


//  DELETE => DON'T NEED IT = BONUS

router.delete("/:id", (req, res, next) => {
  Ingredient.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
