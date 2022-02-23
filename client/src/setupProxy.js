const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    ["/api", "/auth", "/create-checkout-session"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
