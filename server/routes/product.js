const express = require("express");
const router = express.Router();
const Product = require("./../models/Product");


////  ----- ROUTE PREFIX === /api/product ----- ////

// Get every product inside the database

router.get("/", (req, res, next) => {
  Product.find()
    .then((allProducts) => {
      res.status(200).json(allProducts);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});


// Get a product by ID (when you click on it to get the details)

router.get("/:id", (req, res, next) => {
  Product.findById(req.params.id)
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});


// Create a new product

router.post("/", (req, res, next) => {

  const { name, productImg, description, price, quantity, reference, ingredients, saleByPercentage, saleByValue } = req.body;

  if (!name || !productImg || !description || !price || !quantity || !ingredients) {
    return res.status(400).json({ message: "No empty fields please !" });
  }

  const newProduct = {
    name,
    productImg,
    description,
    price,
    quantity,
    reference,
    ingredients,
    saleByPercentage,
    saleByValue
  };

  Product.create(newProduct)
    .then((product) => {
      res.status(201).json(product);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});


//  Update a product (has to be by id to target a certain product)

router.patch("/:id", (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedProduct) => {
      res.status(200).json(updatedProduct);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});


//  Delete a product (has to be by id, of cuuurse)

router.delete("/:id", (req, res, next) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
