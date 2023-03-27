const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/views/mypage/mypageWithdrawal/mypageWithdrawal.js",
  output: {
    filename: "mypageWithdrawal_bundle.js",
    path: path.resolve(__dirname, "./src/views/mypage/mypageWithdrawal"),
  },
};
