import * as Api from "../../api.js";
import { checkLogin } from "../../utils/useful-functions.js";
import { header } from "../../utils/header.js";
import { footer } from "../../utils/footer.js";
header();
footer();

const nameTag = document.querySelector(".name");
const phoneNumTag = document.querySelector(".phoneNum");
const emailTag = document.querySelector(".email");
const addressTag = document.querySelector(".address");
const updateBtn = document.querySelector(".update");

checkLogin();
addAllEvents();

let userData;
async function addAllEvents() {
  userData = await Api.get("/api/user");

  const { email, name, phoneNum, address } = userData;

  nameTag.innerText = `${name}`;
  phoneNumTag.innerText = `${phoneNum}`;
  emailTag.innerText = `${email}`;
  addressTag.innerText = `${address}`;
}
function update() {
  window.location.assign("/mypage/account/accUpdate");
}

updateBtn.addEventListener("click", update);
