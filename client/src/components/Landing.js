import React from "react";
import { LinkContainer } from "react-router-bootstrap";

const Landing = () => {
  return (
    <section
      id="landing"
      className="d-flex mx-auto justify-content-center align-items-center"
    >
      <div className="landing-content-wrapper border p-4 bg-white rounded-3">
        <p className="fs-1">Wecome to Krause Co!</p>
        <LinkContainer to="/shop" className="mx-auto">
          <button
            type="button"
            className="btn btn-success text-uppercase text-center mx-auto d-block"
          >
            View our seeds!
          </button>
        </LinkContainer>
      </div>
    </section>
  );
};

export default Landing;
