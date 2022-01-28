const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  botanical_name: String,
  img: String,
  seed_per_packet: Number,
  fruit_color: String,
  zones: Array,
  sun: String,
  description: String,
  inventory: Number,
  price: Number,
  discount: {
    name: String,
    desc: String,
    discount_percent: Number,
    active: Boolean,
  },
  category: String,
  type: String,
  slug: String,
});

mongoose.model("products", productSchema);
