import React from "react";

const Footer = () => {
  return (
    <footer id="Footer" className="border-top border-2 border-dark">
      <div className="footer-content text-center p-3">
        <p>Krause Co Copyright 2022</p>
        <p>
          Created By{" "}
          <a
            href="https://timkrause.dev"
            rel="noopener noreferrer"
            target="_blank"
          >
            Tim Krause
          </a>
        </p>
        <p>
          Plant images and details sourced from{" "}
          <a
            href="https://www.ufseeds.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Urban Farmer
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
