// import { checkLogin } from "../utils/useful-functions.js";
import * as Api from "/api.js";
import { header } from "../../utils/header.js";
import { footer } from "../../utils/footer.js";
header();
footer();

const section = document.querySelector(".title");
// const product = document.querySelector(".product_name");
const userEmail = window.location.pathname.split("/")[3];
let ref = {};
insertOrderListElement();

let orderLists = {};
async function insertOrderListElement() {
  const res = await fetch(`/api/myOrders/${userEmail}`);
  orderLists = await res.json();
  console.log(orderLists);
  orderLists.forEach((orderList) => {
    orderList.products.forEach((productList) => {
      const name = productList.name;
      const img = productList.img;
      const orderNumber = orderList.orderNumber;
      const num = productList.totalCount;
      const orderDate = orderList.createdAt.substr(0, 10);
      const price = productList.totalPrice;
      const status = orderList.status;
      const deleteButton = `delete-${parseInt(orderNumber)}`;
      if (status === "상품 준비중") {
        section.insertAdjacentHTML(
          "afterend",
          `<div class="content">
            <div class="first">
              <img class="product_img" src="${img}"/>
              <div class="product_script">
                <p class="product_name">
                  상품명 : ${name}
                </p>
                <div class="order_number">주문 번호 : ${orderNumber}</div>
                <div class="order_date">주문 일자 : ${orderDate}</div>
              </div>
            </div>
            <div class="product_price">
              ${price}원<br />
              (${num}개)
            </div>
            <div class="${status} statusBtn">${status}
            <button class="${deleteButton}">주문취소</button>
            </div>
          </div>`
        );
        ref[deleteButton] = document.querySelector(`.${deleteButton}`);
        ref[deleteButton].addEventListener("click", (event) =>
          deleteOrderList(event, orderNumber)
        );
      } else {
        section.insertAdjacentHTML(
          "afterend",
          `<div class="content">
              <div class="first">
                <img class="product_img" src="${img}"/>
                <div class="product_script">
                  <p class="product_name">
                    상품명 : ${name}
                  </p>
                  <div class="order_number">주문 번호 : ${orderNumber}</div>
                  <div class="order_date">주문 일자 : ${orderDate}</div>
                </div>
              </div>
              <div class="product_price">
                ${price}원<br />
                (${num}개)
              </div>
              <div class="${status}">${status}</div>
            </div>`
        );
      }
    });
  });
}
async function deleteOrderList(event, orderNumber) {
  event.preventDefault();
  const value = confirm("주문 취소 시 관련 상품이 전부 취소됩니다.");
  if (value === true) {
    try {
      await Api.delete(`/api/orders/${orderNumber}`);
      alert("주문내역이 삭제되었습니다.");
      window.location.href = `/myPageOrderList/${userEmail}`;
    } catch {
      (err) => {
        console.log(err);
      };
    }
  }
}
