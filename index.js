const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const stripe = require("stripe")(keys.stripeSecret);
require("./models/User");
require("./models/Product");
require("./services/passport");
require("./models/ShoppingSession");
require("./models/orderHistory");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: [keys.cookieKey],
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("public"));
app.use(express.json());
app.use("/api", require("./routes/shoppingSessionRoutes"));

app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});

require("./routes/authRoutes")(app);
require("./routes/productRoutes")(app);
require("./routes/checkoutRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT);
