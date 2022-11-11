const productList = document.querySelector(".section_box");

// 데이터를 받아 요소를 만든 후, html에 삽입
insertProductElement();

async function insertProductElement() {
  const res = await fetch(`api/products`); //백엔드 url
  const products = await res.json();

  products.forEach((product) => {
    const brand = product.brand;
    const name = product.name;
    const price = product.price;
    const img = product.img;
    const category = product.category;
    const description = product.description;
    const num = product.num;

    productList.insertAdjacentHTML(
      "beforeend",
      `
    <section class="pd_block" id="${category}">
    <img src="${img}"class="box" id="${num}"/>
    <article class="pd_text">
      <p class="pd_brd" id="${brand}">${brand}</p>
      <p class="pd_name" id="${name}">
        ${name}
      </p>
  
      <div class="tag_box">
      <a class="tag_category">${category}</a>
      <a class="tag_name" id="${description}">${description}</a>
      </div>
      <p class="pd_price">${price} 원</p>
    </article>
  </section>
    `
    );
    const productItem = document.getElementById(`${num}`);

    //관리자 여부 확인
    async function moveToProductAsRole() {
      const token = sessionStorage.getItem("token");
      if (!token) {
        window.location.assign(`/productDetail/${num}`);
      }

      const res = await fetch("/api/admin/check", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { result } = await res.json();

      if (result === "success") {
        window.location.assign(`/admin/adminProduct/${num}`);

        return;
      } else {
        window.location.assign(`/productDetail/${num}`);
      }
    }

    productItem.addEventListener("click", moveToProductAsRole);
  });
}

/** 슬라이드 전환 자동화 코드인데요..
 * 원래 class right를 이용해 클릭해주는 매크로를 작성하려 했습니다.
 * 근데 두번째 페이지부터 right 클릭이 의도대로 작동하지 않아,
 * id 쪼개서 강제로 순환하는 하드코딩으로 작성되었습니다.
 * 그런 이유로 마우스 호버를 통한 루프 제어도 이용하지 못하게 되었습니다.
 * 감사합니다. 윤수 올림
 */
const slidelist = document.querySelector(".slidelist");
const right1 = document.querySelector("#right1");
const right2 = document.querySelector("#right2");
const right3 = document.querySelector("#right3");
const right4 = document.querySelector("#right4");

function nextMove1() {
  right1.click();
}
function nextMove2() {
  right2.click();
}
function nextMove3() {
  right3.click();
}
function nextMove4() {
  right4.click();
}

let loopInterval = setInterval(() => {
  setTimeout(nextMove1, 2000);
  setTimeout(nextMove2, 4000);
  setTimeout(nextMove3, 6000);
  setTimeout(nextMove4, 8000);
}, 8000);

// let loopInterval = setInterval(() => {
//   nextMove(); // 다음 슬라이드를 보여주는 함수
// }, 3000);

// let loopInterval = setInterval(() => {
//       nextMove(); // 다음 슬라이드를 보여주는 함수
//     }, 3000);

// 슬라이드에 마우스가 올라간 경우 루프 멈추기
// 되긴하는데 loopInterval을 전체 순환으로 했더니 무조건 한바퀴 돌고 발동함
// slidelist.addEventListener("mouseover", () => {
//   clearInterval(loopInterval);
// });

// // 슬라이드에서 마우스가 나온 경우 루프 재시작하기
// slidelist.addEventListener("mouseout", () => {
//   loopInterval = setInterval(() => {
//     nextMove(); // 다음 슬라이드를 보여주는 함수
//   }, 1);
// });

// slidelist.addEventListener("mouseout", () => {
//   Interval = setInterval(loopInterval);
// });