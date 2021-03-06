import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./header/Header";
import Footer from "./Footer";
import Login from "./account/Login";
import Landing from "./Landing";
import About from "./about/About";
import Shop from "./shop/Shop";
import Product from "./product/Product";
import Cart from "./cart/Cart";
import ThankYouPage from "./cart/ThankYouPage";
import Account from "./account/Account";
import ProfileSettings from "./account/ProfileSettings";
import OrderHistory from "./account/OrderHistory";
import Logout from "./account/Logout";

const App = ({ fetchUserAndShoppingSession }) => {
  useEffect(() => {
    fetchUserAndShoppingSession();
  });

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" index element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="account" element={<Account />}>
          <Route index element={<ProfileSettings />} />
          <Route path="basket" element={<Cart />} />
          <Route path="orders" element={<OrderHistory />} />
          <Route path="logout" element={<Logout />} />
          <Route path="*" element={<ProfileSettings />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="shop/:category" element={<Shop />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product/:slug" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="thank-you" element={<ThankYouPage />} />
        <Route path="*" element={<Landing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default connect(null, actions)(App);
