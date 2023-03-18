import { checkLogin } from "../useful-functions.js";
import * as Api from "/api.js";
import { header } from "../utils/header.js";
import { footer } from "../utils/footer.js";
footer();
header();

const mypageAccount = document.querySelector("#mypageAccount_button");
const mypageOrderList = document.querySelector("#mypageOrderList_button");
const mypageCart = document.querySelector("#mypageCart_button");
const mypageReview = document.querySelector("#mypageReview_button");
const mypageWithdrawal = document.querySelector("#mypageWithdrawal_button");
const nameTag = document.querySelector(".name");
const emailTag = document.querySelector(".email");
const roleTag = document.querySelector(".role");

checkLogin();
addAllEvent();

let userData;
async function addAllEvent() {
  userData = await Api.get("/api/user");
  const { email, name, role } = userData;

  nameTag.innerText = `${name}`;
  emailTag.innerText = `${email}`;
  roleTag.innerText = `${role}`;

  function moveTomypageAccount() {
    window.location.assign("/mypage/mypageAccount");
  }

  mypageAccount.addEventListener("click", moveTomypageAccount);

  function moveTomypageOrderList() {
    window.location.assign(`/mypage/myPageOrderList/${email}`);
  }

  mypageOrderList.addEventListener("click", moveTomypageOrderList);

  function moveTomypageCart() {
    window.location.assign("/mypage/myPageCart");
  }

  mypageCart.addEventListener("click", moveTomypageCart);

  function moveTomypageReview() {
    window.location.assign("/mypage/myPageReview");
  }

  mypageReview.addEventListener("click", moveTomypageReview);

  function moveTomypageWithdrawal() {
    window.location.assign("/mypage/mypageWithdrawal");
  }

  mypageWithdrawal.addEventListener("click", moveTomypageWithdrawal);
}
