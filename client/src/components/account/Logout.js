import React from "react";

const Logout = () => {
  return (
    <div id="log-out" className="col-md-8 pb-5">
      <div className="row">
        <h3 className="">Log Out</h3>
      </div>
      <hr />
      <div className="empty-order-history d-md-flex align-items-md-center">
        <div className="container text-center space-2 space-3--lg">
          <div className="w-md-80 w-lg-60 text-center mx-md-auto">
            <div className="mb-5">
              <h2 className="">We're sorry to see you go!</h2>
            </div>
            <a href="/api/logout" className="btn text-uppercase">
              Log Out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
