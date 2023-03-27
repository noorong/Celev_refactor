const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/views/guest.js",
  output: {
    filename: "guest_bundle.js",
    path: path.resolve(__dirname, "./src/views/guest"),
  },
};
