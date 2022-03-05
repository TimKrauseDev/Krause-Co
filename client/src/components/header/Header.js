/* eslint-disable default-case */
import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ShoppingCartDropdown from "./ShoppingCartDropdown";

//render login
const renderLogin = (auth) => {
  switch (auth) {
    case null:
      return;
    case false:
      return (
        <ul className="navbar-nav mx-md-3">
          <li className="nav-item">
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
        <ul className="navbar-nav mx-md-3">
          <li className="nav-item">
            <Link className="nav-item" aria-current="page" to="/account">
              <img
                src={auth.photos}
                onError={(e) => {
                  e.target.onError = null;
                  e.target.src = require("../../imgs/account/default_img.png");
                }}
                alt="profile"
                className="profile-picture"
              />
            </Link>
          </li>
        </ul>
      );
  }
};

const useOutsideAlerter = (ref, dropDownActive, setDropDownActive) => {
  useEffect(() => {
    function handleClickOutside(e) {
      const flag = Array.from(e.srcElement.classList).includes("basket-nav");
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        dropDownActive &&
        !flag
      ) {
        setDropDownActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, dropDownActive, setDropDownActive]);
};

export const Header = ({ auth, shoppingSession }) => {
  const [dropDownActive, setDropDownActive] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, dropDownActive, setDropDownActive);

  const closeDropdown = () => {
    setDropDownActive(false);
  };

  return (
    <header id="Header" className="">
      <nav className="navbar navbar-expand-md navbar-light border-bottom border-2 border-dark">
        <div className="container px-4 px-md-5">
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
            <ul className="navbar-nav me-auto mb-2 mb-md-0 ms-md-4">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
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

            {/* Basket Desktop */}
            <div className="d-flex basket-desktop">
              <button
                className="btn basket-nav shadow-none p-0"
                onClick={() => {
                  setDropDownActive(!dropDownActive);
                }}
              >
                <i className="fa fa-shopping-basket me-md-1"></i>
                Basket
                <span className="badge bg-dark text-white ms-md-1 rounded-pill">
                  {shoppingSession ? shoppingSession.products.length : 0}
                </span>
              </button>
            </div>

            {/* Basket Mobile */}
            <Link to="/cart" className="basket-mobile">
              <div className="d-flex">
                <button className="btn basket-nav shadow-none py-3 px-0 p-md-0">
                  <i className="fa fa-shopping-basket me-2"></i>
                  Basket
                  <span className="badge bg-dark text-white mx-1 rounded-pill">
                    {shoppingSession ? shoppingSession.products.length : 0}
                  </span>
                </button>
              </div>
            </Link>
            {renderLogin(auth)}
          </div>
        </div>
      </nav>
      <div ref={wrapperRef}>
        {dropDownActive && (
          <ShoppingCartDropdown closeDropdown={closeDropdown} />
        )}
      </div>
    </header>
  );
};

const mapStateToProps = ({ auth, shoppingSession }) => {
  return { auth, shoppingSession };
};

export default connect(mapStateToProps, null)(Header);
