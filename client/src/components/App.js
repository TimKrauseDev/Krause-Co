import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Login from "./account/Login";
const Landing = () => <div>Landing</div>;
const Account = () => <div>Account</div>;
const Shop = () => <div>Shop</div>;
const ProductPage = () => <div>Product Page</div>;
const Checkout = () => <div>Checkout</div>;

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
