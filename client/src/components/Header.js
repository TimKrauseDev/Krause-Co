/* eslint-disable default-case */
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ShoppingCartDropdown from "./header/ShoppingCartDropdown";

export const Header = ({ auth, shoppingSession }) => {
  const renderLogin = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <ul className="navbar-nav mx-3">
            <li className="nav-item ">
              <Link
                className="nav-item btn btn-outline-dark"
                aria-current="page"
                to="/login"
              >
                Login
              </Link>
            </li>
          </ul>
        );
      default:
        return (
          <ul className="navbar-nav mx-3">
            <li className="nav-item ">
              <Link className="nav-item" aria-current="page" to="/account">
                <img
                  src={auth.photos}
                  alt="profile"
                  className="profile-picture"
                  style={{ border: "2px solid #222" }}
                />
              </Link>
            </li>
          </ul>
        );
    }
  };

  return (
    <header id="Header" className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom border-2 border-dark">
        <div className="container px-4 px-lg-5">
          <Link className="navbar-brand" to="/">
            Krause Co
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/shop"
                  id="nav-barDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className="nav-link dropdown-toggle"
                >
                  Shop
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/shop">
                      All Seeds
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/shop/flower">
                      Flower
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/shop/fruit">
                      Fruits
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/shop/herb">
                      Herbs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/shop/vegetable">
                      Vegetables
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            {renderLogin()}
            <Link to="/cart">
              <form className="d-flex">
                <button className="btn btn-outline-dark" type="submit">
                  <i className="fa fa-shopping-basket me-1"></i>
                  Basket
                  <span className="badge bg-dark text-white ms-1 rounded-pill">
                    {shoppingSession ? shoppingSession.products.length : 0}
                  </span>
                </button>
              </form>
            </Link>
          </div>
        </div>
      </nav>
      <ShoppingCartDropdown />
    </header>
  );
};

const mapStateToProps = ({ auth, shoppingSession }) => {
  return { auth, shoppingSession };
};

export default connect(mapStateToProps, null)(Header);
