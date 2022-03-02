import React from "react";

const ProfileSettings = ({ displayName, email, provider }) => {
  return (
    <div id="profile-settings" className="col-md-8 pb-5">
      <div className="row">
        <h3 className="">Profile Settings</h3>
      </div>
      <hr />
      <form className="row">
        <div className="col-md-6 my-2">
          <div className="form-group">
            <label for="display_name" className="pb-1">
              Display Name
            </label>
            <input
              className="form-control"
              type="text"
              id="display_name"
              value={displayName}
              disabled="disabled"
            />
          </div>
        </div>
        <div className="col-md-6 my-2">
          <div className="form-group">
            <label for="email" className="pb-1">
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
            <label for="provider" className="pb-1">
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

export default ProfileSettings;
