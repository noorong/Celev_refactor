// import * as Api from "../api";
const sizeBlockTag = document.querySelector('.size_block');
const sizeTag = document.querySelector('size');
const buyButttonTag = document.querySelector(".button_buy");
const cartButtonTag = document.querySelector(".button_cart");
const productImageTag = document.querySelector(".bb2");
const brandTag = document.querySelector(".pd_brd");
const nameTag = document.querySelector(".pd_name");
const categoryTag = document.querySelector('.tag_category');
const descriptionTag = document.querySelector('.tag_name')

const productId = window.location.pathname.split('/')[2];
let product = {};
let selectSize = '';

const drawProduct = async () => {
    const res = await fetch(`/api/productDetail/${productId}`);
    product = await res.json();
    productImageTag.setAttribute('src', product.img);
    brandTag.innerHTML  =  product.brand;
    nameTag.innerHTML =  product.name;
    categoryTag.innerHTML =  product.category;
    descriptionTag.innerHTML =  product.description;
    console.log(product.size)

    buyButttonTag.addEventListener('click', () => location.href = `/order`);

    // 제품 데이터 로컬에 담기
   
    localStorage.setItem('product', JSON.stringify(product))
    cartButtonTag.addEventListener('click', () => location.href = "/mypage/myPageCart")

    // [product.size].forEach((size)=>{
    //     sizeBlockTag.insertAdjacentHTML(
    //         "beforeend",
    //         `
    //         <button id="content_box" class="size" type="button">${size}</button>
    //         `
    //     )
    // });
    }
    // product.size.forEach((a)=>{
    //     const sizeselect = product.size;
drawProduct();

// const addCart = async (id) => {
//         const cart = await JSON.parse(localStorage.getItem('cart'));
//         if (!cart) {
//             localStorage.setItem(
//                 'cart',
//                 JSON.stringify({
//                     [product._id]: {
//                         productName: product.productName,
//                         price: product.price,
//                         quantity: 1,
//                         size: selectSize,
//                     },
//                 }),
//             );
//             alert('장바구니에 담겼습니다.');
//             ref.cartCount.innerText = parseInt(ref.cartCount.innerText) + 1;
//         } else {
//             if (!cart[product._id]) {
//                 cart[product._id] = {
//                     productName: product.productName,
//                     price: product.price,
//                     quantity: 1,
//                     size: selectSize,
//                 };
//                 localStorage.setItem('cart', JSON.stringify(cart));
//                 alert('장바구니에 담겼습니다.');
//                 ref.cartCount.innerText = parseInt(ref.cartCount.innerText) + 1;
//             } else {
//                 alert('이미 담긴 상품입니다.');
//             }
//         }
//     }
// };

// const setEvents = () => {
//     // 장바구니
//     cartBtn.addEventListener('click', addCart);

//     // 즉시구매
//     buyNowBtn.addEventListener('click', () => {
//         if (!selectSize) {
//             alert('사이즈를 선택해 주세요');
//         } else {
//             localStorage.setItem(
//                 'payment',
//                 JSON.stringify({
//                     [product._id]: {
//                         productName: product.productName,
//                         price: product.price,
//                         quantity: 1,
//                         size: selectSize,
//                     },
//                 }),
//             );
//             location.href = '/order';
//         }
//     });
// };
// const productImg = document.querySelector(".productImg");
// const productDetail = document.querySelector(".productDetail");

// const productCount = 0;

// const orderProduct = (productId) => {
//     // location.href = `/order`
//     console.log("asdasd",productId)
// }

// async function start(){
//     try{
//         const res = await fetch(`/api/productDetail/${productId}`);
      
//         const img = data.image
//         const description = data.description;
//         const price = data.price;
//         const id = data.product_id;
//         const name = data.product_name;
//         const title = data.product_title;
//         const type = data.stone_type;

//         productImg.insertAdjacentHTML(
//             'afterbegin',
//             `
//                 <figure>
//                     <img src="${img}"/>
//                 </figure>
//             `
//         )

//         productDetail.insertAdjacentHTML(
//             'afterbegin',
//             ` 
//                 <ul class="productDesc">
//                     <li><h1>${title}</h1></li>
//                     <li>${name}</li>
//                     <li>판매가 <span>${price}</span></li>
//                     <li>${description}</li>
                    
//                     <li>
//                         <select>
//                             <label>-[필수]옵션을 선택해 주세요-</label>
//                             <option>원석: ${type}</option>
//                         </select>
//                     </li>

//                     <li><strong>최소주문수량 1개 이상</strong></li>

//                     <li>
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>상품명</th>
//                                     <th>상품수</th>
//                                     <th>가격</th>
//                                 </tr>
//                             </thead>
//                         </table>
//                     </li>

//                     <li>
//                         <p>Total : ${price}<span>(${productCount}개)</span></p>
//                     </li>

//                     <li>
//                         <figuare class="routeBtn">
//                             <button type="button" class="moveOrder">구매하기</button>
//                             <button type="button" class="moveCart">장바구니</button>
//                             <button type="button">관심상품</button>
//                         </figuare>  
//                     </li>
                    
//                 </ul>
        
//             `
//         )

//         // 구매하기 버튼 클릭 시 라우팅
//         const moveOrder = document.querySelector(".moveOrder");
//         moveOrder.addEventListener('click', () => location.href = `/order`);

//         // 제품 데이터 로컬에 담기
//         const moveCart = document.querySelector(".moveCart");
//         localStorage.setItem('product', JSON.stringify(data))
//         moveCart.addEventListener('click', () => location.href = "/cart")

//     }catch(err){
//         console.log(err)
//     }
// }


// async function createDetail(){
//     await clientSideInclude();
//     await start();
// }

// createDetail()

// const num = product.num;
// drawProduct();
// const render = () => {
//     drawProduct();
    // drawCartCount();
    // drawModal();
// };

// /////////
// import * as Api from "../../api.js";
// import {
//     getUrlParams,
//     addCommas,
//     checkUrlParams,
//     createNavbar,
//   } from "../../useful-functions.js";

// // 요소(element), input 혹은 상수
// const productImageTag = document.querySelector(".bb2");
// const brandTag = document.querySelector(".pd_brd");
// const nameTag = document.querySelector(".pd_name");
// const categoryTag = document.querySelector('.tag_category');
// const descriptionTag =document.querySelector('.tag_name');

// checkUrlParams("num");
// addAllElements();
// addAllEvents();

// // html에 요소를 추가하는 함수들을 묶어주어서 코드를 깔끔하게 하는 역할임.
// function addAllElements() {
//   createNavbar();
//   insertProductData();
// }

// // addEventListener들을 묶어주어서 코드를 깔끔하게 하는 역할임.
// function addAllEvents() {}

// async function insertProductData() {
//   const { num } = getUrlParams();
//   const product = await Api.get(`/api/productDetail/${num}`);
// console.log(product)
//   // 객체 destructuring
//   const brand = product.brand;
//   const name = product.name;
//   const price = product.price;
//   const img = product.img;
//   const category = product.category;
//   const description = product.description;
//   const number = product.num;

//   productImageTag.src = img;
//   brandTag.innerText = brand;
//   nameTag.innerText = name;
//   categoryTag.innerText = category;
//   descriptionTag.innerText = description;
// }
//   if (isRecommended) {
//     titleTag.insertAdjacentHTML(
//       "beforeend",
//       '<span class="tag is-success is-rounded">추천</span>'
//     );
//   }

//   addToCartButton.addEventListener("click", async () => {
//     try {
//       await insertDb(product);

//       alert("장바구니에 추가되었습니다.");
//     } catch (err) {
//       // Key already exists 에러면 아래와 같이 alert함
//       if (err.message.includes("Key")) {
//         alert("이미 장바구니에 추가되어 있습니다.");
//       }

//       console.log(err);
//     }
//   });

//   purchaseButton.addEventListener("click", async () => {
//     try {
//       await insertDb(product);

//       window.location.href = "/order";
//     } catch (err) {
//       console.log(err);

//       //insertDb가 에러가 되는 경우는 이미 제품이 장바구니에 있던 경우임
//       //따라서 다시 추가 안 하고 바로 order 페이지로 이동함
//       window.location.href = "/order";
//     }
//   });
// }

// async function insertDb(product) {
//   // 객체 destructuring
//   const { _id: id, price } = product;

//   // 장바구니 추가 시, indexedDB에 제품 데이터 및
//   // 주문수량 (기본값 1)을 저장함.
//   await addToDb("cart", { …product, quantity: 1 }, id);

//   // 장바구니 요약(=전체 총합)을 업데이트함.
//   await putToDb("order", "summary", (data) => {
//     // 기존 데이터를 가져옴
//     const count = data.productsCount;
//     const total = data.productsTotal;
//     const ids = data.ids;
//     const selectedIds = data.selectedIds;

//     // 기존 데이터가 있다면 1을 추가하고, 없다면 초기값 1을 줌
//     data.productsCount = count ? count + 1 : 1;

//     // 기존 데이터가 있다면 가격만큼 추가하고, 없다면 초기값으로 해당 가격을 줌
//     data.productsTotal = total ? total + price : price;

//     // 기존 데이터(배열)가 있다면 id만 추가하고, 없다면 배열 새로 만듦
//     data.ids = ids ? […ids, id] : [id];

//     // 위와 마찬가지 방식
//     data.selectedIds = selectedIds ? […selectedIds, id] : [id];
//   });
// }
