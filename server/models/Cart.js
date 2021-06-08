const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', unique: true},
  products: [{quantity: Number, product:{  type: Schema.Types.ObjectId, ref: "Product" }}],
});

const CartModel = mongoose.model("Cart", cartSchema);

module.exports = CartModel;
