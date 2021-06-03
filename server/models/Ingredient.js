const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  name: String,
  ingredientImg: {
    type: String,
    default:
      "https://www.kellyservices.fr/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcTllIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1c88a45561642ecb86e0529f1bce5b049e34fc08/img-placeholder.jpg",
  },
  description : String,
});

const IngredientModel = mongoose.model("Ingredient", ingredientSchema);

module.exports = IngredientModel;
