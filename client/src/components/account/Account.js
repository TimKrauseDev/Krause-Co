import React, { useState } from "react";
import { connect } from "react-redux";

import ProfileSettings from "./ProfileSettings";
import OrderHistory from "./OrderHistory";

const Account = ({ auth }) => {
  const [activePage, setActivePage] = useState(0);

  if (!auth) return <div>Loading...</div>;

  const userJoinDate = new Date(auth.created_at);
  console.log(userJoinDate.getMonth());

  return (
    <section id="account">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 pb-5">
            <div className="author-card pb-3">
              <div className="author-card-cover"></div>
              <div className="author-card-profile">
                <div className="author-card-avatar">
                  <img
                    src={auth.photos}
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
                <div
                  className={`list-group-item ${
                    activePage === 0 ? "active" : ""
                  }`}
                  onClick={() => setActivePage(0)}
                >
                  <i className="fe-icon-user text-muted"></i>Profile Settings
                </div>
                <div
                  className={`list-group-item ${
                    activePage === 1 ? "active" : ""
                  }`}
                  onClick={() => setActivePage(1)}
                >
                  <i className="fe-icon-user text-muted"></i>Orders
                </div>
              </nav>
            </div>
          </div>
          {activePage === 0 && (
            <ProfileSettings
              displayName={auth.display_name}
              email={auth.email}
              provider={auth.provider}
            />
          )}
          {activePage === 1 && <OrderHistory />}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, null)(Account);
