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
router.get("/shoppingsession/:userid", async (req, res) => {
  const session = await ShoppingSession.find({ user_id: req.params.userid });

  res.send(session);
});

// POST NEW SHOPPING SESSION
router.post("/shoppingsession", async (req, res) => {
  const session = await ShoppingSession.create({
    user_id: req.body.user_id,
    email: req.body.email,
  });

  res.send(session);
});

// PUT ADD ITEM TO SHOPPING SESSION
router.put("/shoppingsession/additem/:userid", async (req, res) => {
  const session = await ShoppingSession.findOne({ user_id: req.params.userid });

  const newTotal = session.total + req.body.subtotal;
  const newProducts = [...session.products, req.body];

  session.products = newProducts;
  session.total = newTotal;

  session.save();
  res.send(session);
});

// PUT REMOVE ITEM FROM SHOPPING SESSION
router.put("/shoppingsession/removeitem/:userid", async (req, res) => {
  const session = await ShoppingSession.findOne({ user_id: req.params.userid });

  session.total -= session.products.id(req.body._id).subtotal;

  session.products.id(req.body._id).remove();
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
