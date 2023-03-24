const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/views/home/home.js",
  output: {
    filename: "home_bundle.js",
    path: path.resolve(__dirname, "./src/views/home"),
  },
};
