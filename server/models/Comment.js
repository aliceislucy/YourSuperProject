const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  rating: Number,
  comment: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
  product: { type: Schema.Types.ObjectId, ref: "Product" },
});

const CommentModel = mongoose.model("Comment", commentSchema);

module.exports = CommentModel;
