const mongoose = require("mongoose");
const { Schema } = mongoose;

const shoppingSessionProductSubSchema = new Schema({
  product_id: String,
  product_name: String,
  image: String,
  quantity: Number,
  subtotal: Number,
  productInventory: Number,
});

module.exports = shoppingSessionProductSubSchema;
