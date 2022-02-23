const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const ShoppingSession = mongoose.model("shoppingSession");

// GET ALL SHOPPING SESSIONS
router.get("/shoppingsession", async (req, res) => {
  const session = await ShoppingSession.find({});

  res.send(session);
});

// GET ONE SHOPPING SESSION
router.get("/shoppingsession/:user_id", async (req, res) => {
  const { user_id } = req.params;

  const session = await ShoppingSession.find({ user_id });

  res.send(session);
});

// POST NEW SHOPPING SESSION
router.post("/shoppingsession", async (req, res) => {
  const { user_id, email } = req.body;

  const session = await ShoppingSession.create({
    user_id,
    email,
  });

  res.send(session);
});

// PUT ADD ITEM TO SHOPPING SESSION
router.put("/shoppingsession/additem/:user_id", async (req, res) => {
  const { user_id } = req.params;
  const { subtotal } = req.body;
  const product = req.body;

  const session = await ShoppingSession.findOne({ user_id });

  session.total = session.total + subtotal;
  session.products = [...session.products, product];

  session.save();

  res.send(session);
});

// PUT REMOVE ITEM FROM SHOPPING SESSION
router.put("/shoppingsession/removeitem/:user_id", async (req, res) => {
  const { user_id } = req.params;

  const session = await ShoppingSession.findOne({ user_id });

  session.total -= session.products.id(req.body._id).subtotal;

  if (session.total < 0) {
    session.total = 0;
  }

  session.products.id(req.body._id).remove();
  session.save();

  res.send(session);
});

// PATCH UPDATE PRODUCT QUANTITY
router.put("/shoppingsession/updatequantity/:user_id", async (req, res) => {
  const { user_id } = req.params;
  const { _id, new_qty } = req.body;

  const session = await ShoppingSession.findOne({ user_id });
  const product = session.products.id(_id);

  if (!product) {
    res.send("Product not found");
    return;
  }

  session.total -= product.subtotal;

  const productPrice = product.subtotal / product.quantity;
  const newSubtotal = new_qty * productPrice;

  product.subtotal = newSubtotal;
  product.quantity = new_qty;

  session.total += product.subtotal;

  session.save();

  res.send(session);
});

// DELETE USER SHOPPING SESSION
router.delete("/shoppingsession/:userid", async (req, res) => {
  const session = await ShoppingSession.findOneAndDelete({
    _id: req.params.userid,
  });

  res.send(session);
});

// EXPORT ROUTER
module.exports = router;
