import express from "express";
import path from "path";

const viewsRouter = express.Router();

// 페이지별로 html, css, js 파일들을 라우팅함
// 아래와 같이 하면, http://localhost:5000/ 에서는 views/home/home.html 파일을,
// http://localhost:5000/register 에서는 views/register/register.html 파일을 화면에 띄움
viewsRouter.use("/", serveStatic("home"));
viewsRouter.use("/register", serveStatic("register"));
viewsRouter.use("/login", serveStatic("login"));
viewsRouter.use("/guest", serveStatic("guest"));
viewsRouter.use("/productDetail/:num", serveStatic("productDetail"));
viewsRouter.use("/order_now", serveStatic("order_now"));
viewsRouter.use("/order", serveStatic("order"));
viewsRouter.use("/guestOrderList/:orderNumber", serveStatic("guestOrderList"));

//mypage
viewsRouter.use("/mypage", serveStatic("mypage"));

viewsRouter.use("/mypage/mypageOrderList/:email", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../views/mypage/mypageOrderList/mypageOrderList.html")
  );
});

viewsRouter.use("/mypage/mypageAccount", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../views/mypage/mypageAccount/mypageAccount.html")
  );
});
viewsRouter.use("/mypage/accountUpdate", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../views/mypage/accountUpdate/accountUpdate.html")
  );
});
viewsRouter.use("/mypage/mypageCart", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../views/mypage/mypageCart/mypageCart.html")
  );
});
viewsRouter.use("/mypage/mypageReview", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../views/mypage/mypageReview/mypageReview.html")
  );
});
viewsRouter.use("/mypage/mypageWithdrawal", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "../views/mypage/mypageWithdrawal/mypageWithdrawal.html"
    )
  );
});

// admin
viewsRouter.use("/admin", serveStatic("admin"));

viewsRouter.use("/admin/addProduct", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../views/admin/addProduct/addProduct.html")
  );
});

viewsRouter.use("/admin/adminMember", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../views/admin/adminMember/adminMember.html")
  );
});

viewsRouter.get("/admin/adminProductList", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "../views/admin/adminProductList/adminProductList.html"
    )
  );
});

viewsRouter.get("/admin/adminProductDetail/:productId", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "../views/admin/adminProductDetail/adminProductDetail.html"
    )
  );
});

viewsRouter.use("/admin/adminOrder", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../views/admin/adminOrder/adminOrder.html")
  );
});

viewsRouter.use("/admin/adminReview", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../views/admin/adminReview/adminReview.html")
  );
});

viewsRouter.use("/adminProductDetail/:productId/updateProduct", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "../views/admin/adminProductDetail/updateProduct/updateProduct.html"
    )
  );
});

//notice
viewsRouter.use("/notice", serveStatic("notice"));

viewsRouter.use("/notice/addPost", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/notice/addPost/addPost.html"));
});

viewsRouter.use("/notice/postDetail/:postNo", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../views/notice/postDetail/postDetail.html")
  );
});

viewsRouter.use(
  "/notice/postEdit/:postNo",
  serveStatic("../views/notice/postEdit/postEdit.html")
);

// views 폴더의 최상단 파일인 rabbit.png, api.js 등을 쓸 수 있게 함
viewsRouter.use("/", serveStatic(""));

// views폴더 내의 ${resource} 폴더 내의 모든 파일을 웹에 띄우며,
// 이 때 ${resource}.html 을 기본 파일로 설정함.
function serveStatic(resource) {
  const resourcePath = path.join(__dirname, `../views/${resource}`);
  const option = { index: `${resource}.html` };

  // express.static 은 express 가 기본으로 제공하는 함수임
  return express.static(resourcePath, option);
}

export { viewsRouter };
