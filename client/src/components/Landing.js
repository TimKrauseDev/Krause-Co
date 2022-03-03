import React from "react";
import { LinkContainer } from "react-router-bootstrap";

const Landing = () => {
  return (
    <section
      id="landing"
      className="d-flex mx-auto justify-content-center align-items-center"
    >
      <div className="landing-content-wrapper p-4 rounded-3">
        <h1 className="masthead-heading text-light mb-4">
          Your favorite place to buy quality seeds!
        </h1>
        <LinkContainer to="/shop" className="mx-auto">
          <button
            type="button"
            className="btn text-uppercase text-center mx-auto d-block"
          >
            View our seeds!
          </button>
        </LinkContainer>
      </div>
    </section>
  );
};

export default Landing;
