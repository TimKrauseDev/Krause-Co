import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";

import * as actions from "../../actions";

const renderNotLoggedIn = () => {
  return (
    <section id="account" className="p-5">
      <div className="empty-order-history d-md-flex align-items-md-center">
        <div className="container text-center space-2 space-3--lg">
          <div className="w-md-80 w-lg-60 text-center mx-md-auto">
            <div className="mb-5">
              <h1 className="h2">Please Login To Continue.</h1>
            </div>
            <Link to="/shop" className="btn btn-dark btn-wide">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Account = ({ auth }) => {
  const [activePage, setActivePage] = useState(0);

  const { pathname } = useLocation();
  const page = pathname.split("/")[2];

  useEffect(() => {
    switch (page) {
      case "settings":
        setActivePage(0);
        break;
      case "basket":
        setActivePage(1);
        break;
      case "orders":
        setActivePage(2);
        break;
      case "logout":
        setActivePage(3);
        break;
      default:
        setActivePage(0);
    }
  }, [page]);

  if (auth === false) {
    return renderNotLoggedIn();
  }

  if (!auth) {
    <div>Loading...</div>;
  }

  const userJoinDate = new Date(auth.created_at);

  return (
    <section id="account">
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-4 pb-5">
            <div className="author-card pb-3">
              <div className="author-card-cover"></div>
              <div className="author-card-profile">
                <div className="author-card-avatar">
                  <img
                    src={auth.photos}
                    onError={(e) => {
                      e.target.onError = null;
                      e.target.src = require("../../imgs/account/default_img.png");
                    }}
                    alt="profile"
                    className="profile-picture"
                  />
                </div>
                <div className="author-card-details">
                  <h5 className="author-card-name text-lg">
                    {auth.display_name}
                  </h5>
                  <span className="author-card-position">
                    Joined{" "}
                    {(userJoinDate.getMonth() > 8
                      ? userJoinDate.getMonth() + 1
                      : "0" + (userJoinDate.getMonth() + 1)) +
                      "/" +
                      (userJoinDate.getDate() > 9
                        ? userJoinDate.getDate()
                        : "0" + userJoinDate.getDate()) +
                      "/" +
                      userJoinDate.getFullYear()}
                  </span>
                </div>
              </div>
            </div>
            <div className="wizard">
              <nav className="list-group list-group-flush">
                <Link
                  to="settings"
                  className={`list-group-item ${
                    activePage === 0 ? "active" : ""
                  }`}
                  //onClick={() => setActivePage(0)}
                >
                  Profile Settings
                </Link>
                <Link
                  to="basket"
                  className={`list-group-item ${
                    activePage === 1 ? "active" : ""
                  }`}
                  //onClick={() => setActivePage(0)}
                >
                  Shopping Basket
                </Link>
                <Link
                  to="orders"
                  className={`list-group-item ${
                    activePage === 2 ? "active" : ""
                  }`}
                  //onClick={() => setActivePage(1)}
                >
                  Order History
                </Link>
                <Link
                  to="logout"
                  className={`list-group-item ${
                    activePage === 3 ? "active" : ""
                  }`}
                  //onClick={() => setActivePage(2)}
                >
                  Log Out
                </Link>
              </nav>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, actions)(Account);
