import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div class="jumbotron text-center vh-100 d-flex flex-column justify-content-center">
      <h1 class="display-3">Thank You!</h1>
      <p class="lead">
        You will recieve an email reciept shortly. We will start packing up your
        basket and let you know when everything is on it's way!
      </p>

      <p class="lead">
        <Link class="btn btn-dark btn" to="/" role="button">
          Continue to Homepage
        </Link>
      </p>
    </div>
  );
};

export default ThankYouPage;
