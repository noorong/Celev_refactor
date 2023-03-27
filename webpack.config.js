const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/views/notice/addNotice/addNotice.js",
  output: {
    filename: "addNotice_bundle.js",
    path: path.resolve(__dirname, "./src/views/notice/addNotice"),
  },
};
