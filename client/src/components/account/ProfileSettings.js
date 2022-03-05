import React from "react";
import { connect } from "react-redux";

const ProfileSettings = ({ auth }) => {
  if (!auth) {
    return <div className="col-md-8 pb-5">Loading...</div>;
  }

  const { display_name, email, provider } = auth;

  return (
    <div id="profile-settings" className="col-md-8 pb-5">
      <div className="row">
        <h3 className="">Profile Settings</h3>
      </div>
      <hr />
      <form className="row">
        <div className="col-md-6 my-2">
          <div className="form-group">
            <label htmlFor="display_name" className="pb-1">
              Display Name
            </label>
            <input
              className="form-control"
              type="text"
              id="display_name"
              value={display_name}
              disabled="disabled"
            />
          </div>
        </div>
        <div className="col-md-6 my-2">
          <div className="form-group">
            <label htmlFor="email" className="pb-1">
              Email Address
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              value={email}
              disabled="disabled"
            />
          </div>
        </div>
        <div className="col-md-6 my-2">
          <div className="form-group">
            <label htmlFor="provider" className="pb-1">
              Sign In Provider
            </label>
            <input
              className="form-control text-capitalize"
              type="text"
              id="provider"
              value={provider}
              disabled="disabled"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, null)(ProfileSettings);
