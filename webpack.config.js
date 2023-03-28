const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/views/mypage/mypageReview/mypageReview.js",
  output: {
    filename: "mypageReview_bundle.js",
    path: path.resolve(__dirname, "./src/views/mypage/mypageReview"),
  },
  experiments: {
    topLevelAwait: true,
  },
};
