import React from "react";

import { Stack } from "react-bootstrap";

const Login = () => {
  return (
    <section
      id="login"
      className="d-flex mx-auto"
      style={{ height: "calc(100vh - 56px)" }}
    >
      <Stack
        gap={3}
        className="login-inner border bg-dark rounded-3 align-self-center col-md-6 m-2 p-4 mx-auto"
        style={{ maxWidth: "500px" }}
      >
        <p className="fs-2 text-white text-center">Login or Signup!</p>
        <a
          href="/auth/google"
          className="btn btn-danger btn-block w-75 mx-auto"
        >
          <i class="fa fa-google"></i> Sign in with <b>Google</b>
        </a>
        <a href="/auth/twitter" className="btn btn-info btn-block w-75 mx-auto">
          <i class="fa fa-twitter"></i> Sign in with <b>Twitter</b>
        </a>
        <a
          href="/auth/github"
          className="btn btn-secondary btn-block w-75 mx-auto"
        >
          <i class="fa fa-github"></i> Sign in with <b>Github</b>
        </a>
        <a
          href="/"
          className="btn border-secondary text-secondary btn-block w-50 mt-4 mx-auto"
        >
          Cancel
        </a>
      </Stack>
    </section>
  );
};

export default Login;
