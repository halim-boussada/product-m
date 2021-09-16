const mongoose = require("mongoose");
const db = require("./connect.js");
mongoose.Promise = global.Promise;

const PreProductsSchema = new mongoose.Schema(
  {
    name: String,
    desription: String,
    image: String,
    type: String,
    number: Number,
    type: { type: String, default: "PreProducts" },
  },
  {
    timestamps: true,
  }
);

const PreProducts = mongoose.model("PreProducts", PreProductsSchema);

module.exports = PreProducts;
