const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecret);

const mongoose = require("mongoose");
const ShoppingSession = mongoose.model("shoppingSession");
const orderHistory = mongoose.model("orderHistory");

module.exports = (app) => {
  app.post("/api/create-checkout-session", async (req, res) => {
    const { lineItems, user_id, email } = req.body;

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      phone_number_collection: {
        enabled: true,
      },
      customer_email: email,
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 0,
              currency: "usd",
            },
            display_name: "Free shipping",
            // Delivers between 5-7 business days
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 5,
              },
              maximum: {
                unit: "business_day",
                value: 7,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 1500,
              currency: "usd",
            },
            display_name: "Next day air",
            // Delivers in exactly 1 business day
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 1,
              },
              maximum: {
                unit: "business_day",
                value: 1,
              },
            },
          },
        },
      ],
      success_url: `${keys.domain}/api/ordersuccess/${user_id}`,
      cancel_url: `${keys.domain}/cart`,
    });

    res.json({ url: session.url });
  });

  app.get("/api/ordersuccess/:user_id", async (req, res) => {
    const { user_id } = req.params;

    const session = await ShoppingSession.findOne({ user_id });

    const order = await orderHistory.create({
      user_id: session.user_id,
      email: session.email,
      products: session.products,
      total: session.total,
    });

    session.products = [];

    session.save();

    res.redirect(307, "/thank-you");
  });

  app.get("/api/orderhistory/:user_id", async (req, res) => {
    const { user_id } = req.params;

    const orders = await orderHistory.find({ user_id });

    res.send(orders);
  });
}; //end export
