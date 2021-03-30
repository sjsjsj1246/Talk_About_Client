const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/data",
    createProxyMiddleware({
      target: "https://talk-about-server.herokuapp.com/",
      changeOrigin: true,
    })
  );
};
