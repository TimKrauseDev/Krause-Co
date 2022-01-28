const mongoose = require("mongoose");
const Products = mongoose.model("products");

module.exports = (app) => {
  // Get all products
  app.get("/api/products/:category?", async (req, res) => {
    const { category } = req.params;
    let filter = {};

    if (category) {
      filter = { category };
    }

    const products = await Products.find(filter);

    res.send(products);
  });

  //Get product by Slug
  app.get("/api/productbyslug/:slug", async (req, res) => {
    const { slug } = req.params;
    let filter = {};

    if (slug) {
      filter = { slug };
    }

    const product = await Products.find(filter);
    res.send(product);
  });
};
