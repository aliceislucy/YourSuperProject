const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  productImg: {
    type: String,
    default:
      "https://lh3.googleusercontent.com/proxy/R17EXartFlmfSBmHJwyVhWaXg2005HaAvM6yFmk-idRIXDXpp3vY3bouLHhEuXXleTII6By3kDDknXX5VJyB",
  },
  description: String,
  price: Number,
  quantity: Number,
  reference: String,
  ingredients: [
    { type: Schema.Types.ObjectId, ref: "Ingredient" },
  ], 
  recipe: String,
  saleByPercentage: Number,
  saleByValor: Number,
});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
