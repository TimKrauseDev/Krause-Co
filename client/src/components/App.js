import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Login from "./account/Login";
import Landing from "./Landing";
import Shop from "./shop/Shop";
import Product from "./product/Product";
const Account = () => (
  <div>Account/Settings; Account/Logout; Account/Orders</div>
);
const About = () => <div>About</div>;
const Checkout = () => <div>Checkout</div>;

const App = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser();
  });

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop/:category" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default connect(null, actions)(App);
