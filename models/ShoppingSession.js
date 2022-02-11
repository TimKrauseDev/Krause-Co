const mongoose = require("mongoose");
const { Schema } = mongoose;

const IndividualProductSubSchema = require("./ShoppingSessionProducts");

const shoppingSessionSchema = new Schema({
  user_id: String,
  email: { type: String, default: "" },
  products: { type: [IndividualProductSubSchema], default: Array },
  total: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
});

mongoose.model("shoppingSession", shoppingSessionSchema);
