/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/views/mypage/mypageCart/mypageCart.js":
/*!***************************************************!*\
  !*** ./src/views/mypage/mypageCart/mypageCart.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/header.js */ \"./src/views/utils/header.js\");\n/* harmony import */ var _utils_footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/footer.js */ \"./src/views/utils/footer.js\");\n\r\n\r\n(0,_utils_header_js__WEBPACK_IMPORTED_MODULE_0__.header)();\r\n(0,_utils_footer_js__WEBPACK_IMPORTED_MODULE_1__.footer)();\r\n\r\nlet cart = JSON.parse(localStorage.getItem(\"products\"));\r\n// 데이터를 받아 요소를 만든 후, html에 삽입\r\n\r\ninsertOrderElement();\r\nfuncTotalPrice();\r\nfuncTotalAmount();\r\nasync function insertOrderElement() {\r\n  cart.forEach((product) => {\r\n    const orderForm = document.querySelector(\".content_box\");\r\n    const _id = product._id;\r\n    const name = product.name;\r\n    const price = product.price;\r\n    const img = product.img;\r\n    const size = product.selectSize;\r\n    const color = product.selectColor;\r\n    const category = product.category;\r\n    const description = product.description;\r\n    const num = product.num;\r\n    const quantity = product.quantity;\r\n\r\n    orderForm.insertAdjacentHTML(\r\n      \"beforeend\",\r\n      `\r\n      \r\n      <div class=\"content\">\r\n        <div class=\"first ${_id}\">\r\n          <img class=\"product_img\" src=\"${img}\" id=\"image${_id}\"/>\r\n        </div> \r\n        <div class=\"product_box\">\r\n          <p class=\"product_name\">\r\n            상품명 : ${name}\r\n          </p>\r\n          <p class=\"product_size\">\r\n              사이즈 : ${size}\r\n          </p>\r\n          <p class=\"product_color\">\r\n              색상 : ${color}\r\n          </p>\r\n        </div>\r\n        <div>\r\n        </div>\r\n\r\n        <div class=\"productPrice\">\r\n          <button class=\"button minus\" id=\"minus-${_id}\">-</button>\r\n          <input class=\"input\" \r\n            id=\"quantityInput-${_id}\" \r\n           type=\"number\" \r\n            min=1 \r\n            max=99\r\n            value=\"1\"/>\r\n             <button class=\"button plus\" id=\"plus-${_id}\">+</button>\r\n              <p class=initial-${_id}>${price}</p>\r\n              <div class=\"price-${_id}\">${price}</div>\r\n             \r\n        </div>\r\n\r\n          <div class=\"status\">\r\n           <button class=\"delete-button\" id=\"delete-${_id}\">delete\r\n           </button>\r\n          </div> \r\n      </div>\r\n        \r\n      `\r\n    );\r\n\r\n    document.querySelector(`#delete-${_id}`).addEventListener(\"click\", () => {\r\n      deleteItem(_id);\r\n      window.location.assign(\"/mypage/myPageCart\");\r\n    });\r\n\r\n    document.querySelector(`#plus-${_id}`).addEventListener(\"click\", () => {\r\n      if (\r\n        parseInt(document.querySelector(`#quantityInput-${_id}`).value) < 99\r\n      ) {\r\n        increaseItemQuantity(_id);\r\n        funcTotalPrice();\r\n      }\r\n    });\r\n\r\n    document.querySelector(`#minus-${_id}`).addEventListener(\"click\", () => {\r\n      if (parseInt(document.querySelector(`#quantityInput-${_id}`).value) > 1) {\r\n        decreaseItemQuantity(_id);\r\n        funcTotalPrice();\r\n      }\r\n    });\r\n    document\r\n      .querySelector(`#quantityInput-${_id}`)\r\n      .addEventListener(\"change\", () => handleQuantityInput(_id));\r\n  });\r\n}\r\nasync function increaseItemQuantity(_id) {\r\n  // indexedDB의 cart 데이터 업데이트\r\n  let perPrice = document.querySelector(`.initial-${_id}`).innerHTML;\r\n  let amount = ++document.querySelector(`#quantityInput-${_id}`).value;\r\n  let totalPrice = document.querySelector(`.price-${_id}`).innerHTML;\r\n  //prPrice는 , 뺀 값\r\n  totalPrice = parseInt(perPrice.replace(/(,|개|원)/g, \"\")) * amount;\r\n\r\n  document.querySelector(`.price-${_id}`).innerHTML = totalPrice\r\n    .toString()\r\n    .replace(/\\B(?=(\\d{3})+(?!\\d))/g, \",\");\r\n  return;\r\n}\r\n\r\n// 수량 변경박스(-버튼, 입력칸, +버튼) 상태 업데이트\r\nasync function decreaseItemQuantity(_id) {\r\n  let perPrice = document.querySelector(`.initial-${_id}`).innerHTML;\r\n  let amount = --document.querySelector(`#quantityInput-${_id}`).value;\r\n\r\n  let totalPrice = document.querySelector(`.price-${_id}`).innerHTML;\r\n  totalPrice = parseInt(perPrice.replace(/(,|개|원)/g, \"\")) * amount;\r\n  document.querySelector(`.price-${_id}`).innerHTML = totalPrice\r\n    .toString()\r\n    .replace(/\\B(?=(\\d{3})+(?!\\d))/g, \",\");\r\n  return;\r\n}\r\nasync function funcTotalPrice() {\r\n  let totalPrice = 0;\r\n  cart.forEach((product) => {\r\n    const _id = product._id;\r\n    let pPrice = document.querySelector(`.price-${_id}`).innerHTML;\r\n    totalPrice = totalPrice + parseInt(pPrice.replace(/(,|개|원)/g, \"\"));\r\n  });\r\n  document.querySelector(\".totalPrice\").innerHTML = totalPrice\r\n    .toString()\r\n    .replace(/\\B(?=(\\d{3})+(?!\\d))/g, \",\");\r\n}\r\nasync function deleteItem(_id) {\r\n  const btn = document.querySelector(`#delete-${_id}`);\r\n  const deleteForm = btn.parentNode.parentNode;\r\n  document.querySelector(\".content_box\").removeChild(deleteForm);\r\n  const cleanStorage = cart.filter(function (x) {\r\n    return x._id !== _id;\r\n  });\r\n\r\n  cart = cleanStorage;\r\n  localStorage.setItem(\"products\", JSON.stringify(cart));\r\n}\r\n\r\nasync function moveToOrder() {\r\n  let a = [];\r\n  cart.forEach((item, i) => {\r\n    const id = item._id;\r\n    const newPrice = document.querySelector(`.price-${id}`).innerHTML;\r\n    const newCount = document.querySelector(`#quantityInput-${id}`).value;\r\n\r\n    item.totalPrice = newPrice;\r\n    item.totalCount = newCount;\r\n\r\n    a.push(item);\r\n\r\n    localStorage.setItem(\"orderProducts\", JSON.stringify(a));\r\n  });\r\n\r\n  location.href = \"/order\";\r\n}\r\n\r\ndocument.querySelector(\".payNow\").addEventListener(\"click\", moveToOrder);\r\n\r\nasync function funcTotalAmount() {\r\n  document.querySelector(\".totalAmount\").innerHTML = cart.length;\r\n}\r\n\n\n//# sourceURL=webpack://shopping-mall/./src/views/mypage/mypageCart/mypageCart.js?");

/***/ }),

/***/ "./src/views/utils/footer.js":
/*!***********************************!*\
  !*** ./src/views/utils/footer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footer\": () => (/* binding */ footer)\n/* harmony export */ });\nconst footer = () => {\r\n  const main = document.querySelector(\".main\");\r\n\r\n  window.addEventListener(\"load\", () => {\r\n    main.insertAdjacentHTML(\r\n      \"beforeend\",\r\n      `\r\n      <footer class=\"footer\">\r\n      <address class=\"address_left\">\r\n      <ul class=\"addressLink\">\r\n        <li>\r\n          <a href=\"/\" id=\"footer_logo\">\r\n            Ce1ev.\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\">개인정보 취급방침</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\">이용약관</a>\r\n        </li>\r\n      </ul>\r\n  \r\n      <div class=\"addressText\">\r\n        <p>셀레브 주식회사 · 대표 김원송 사업자등록번호 : 000-00-00000</p>\r\n        <p>\r\n          사업장소재지 : 경기도 성남시 분당구 분당내곡로 131 판교테크원 타워1, 8층\r\n        </p>\r\n        <p>ⓒ CELEV. Corp.</p>\r\n      </div>\r\n    </address>\r\n    <address class=\"address_right\">\r\n      <p>\r\n        <strong style=\"font-size: 20px; font-weight: 600\">\r\n          고객센터 1588-0000\r\n        </strong>\r\n      </p>\r\n      <p>\r\n        운영시간 평일 11:00 - 18:00 (토∙일, 공휴일 휴무)\r\n        <br />\r\n        점심시간 평일 13:00 - 14:00\r\n        <br />\r\n        1:1 문의하기는 앱에서만 가능합니다.\r\n      </p>\r\n    </address>\r\n      </footer>\r\n    \r\n    `\r\n    );\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://shopping-mall/./src/views/utils/footer.js?");

/***/ }),

/***/ "./src/views/utils/header.js":
/*!***********************************!*\
  !*** ./src/views/utils/header.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\n/* harmony import */ var _searching_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searching.js */ \"./src/views/utils/searching.js\");\n\r\n\r\nfunction header() {\r\n  window.addEventListener(\"load\", async () => {\r\n    const main = document.querySelector(\".main\");\r\n    main.insertAdjacentHTML(\r\n      \"afterBegin\",\r\n      `\r\n    <header class=\"header\">\r\n      <div class=\"header_logo\">\r\n        <a href=\"/\">\r\n          Ce1ev.\r\n        </a>\r\n      </div>\r\n      <ul class=\"search\">\r\n        <li>\r\n          <input type=\"text\" placeholder=\"검색어를 입력하세요.\" class=\"header_search\" id=\"text\" />\r\n          <button type=\"button\" class=\"searchBtn\">\r\n            <i class=\"fa fa-magnifying-glass fa-2x\"></i>\r\n          </button>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"header_right\"></ul>\r\n    </header>\r\n    `\r\n    );\r\n\r\n    const rightHeader = document.querySelector(\".header_right\");\r\n\r\n    const token = sessionStorage.getItem(\"token\");\r\n    if (token) {\r\n      const res = await fetch(\"/api/admin/check\", {\r\n        headers: {\r\n          Authorization: `Bearer ${token}`,\r\n        },\r\n      });\r\n\r\n      const { result } = await res.json();\r\n\r\n      if (result === \"success\") {\r\n        rightHeader.insertAdjacentHTML(\r\n          \"afterBegin\",\r\n          `      \r\n        <li id=\"header_addProduct\">\r\n          <a href=\"/admin/addProduct\">\r\n            ADD-PRODUCT\r\n          </a>  \r\n        </li>\r\n        <li id=\"header_mypage\">\r\n          <a href=\"/admin\">\r\n            ADMIN-PAGE\r\n          </a>  \r\n        </li>\r\n        <li id=\"header_notice\">\r\n          <a href=\"/notice\"> \r\n            NOTICE \r\n          </a>\r\n        </li>\r\n        <li id=\"header_logout\">\r\n          <a href=\"/#\" id=\"logout\">\r\n            LOG OUT\r\n          </a>\r\n        </li>\r\n        `\r\n        );\r\n      } else {\r\n        rightHeader.insertAdjacentHTML(\r\n          \"afterBegin\",\r\n          `      \r\n        <li id=\"header_cart\">\r\n          <a href=\"/mypage/myPageCart\">\r\n            CART\r\n          </a>\r\n        </li>\r\n        <li id=\"header_myPage\">\r\n          <a href=\"/mypage\">\r\n            MY PAGE\r\n          </a>\r\n        </li>\r\n        <li id=\"header_notice\">\r\n          <a href=\"/notice\"> NOTICE </a>\r\n        </li>\r\n        <li id=\"header_logout\">\r\n          <a href=\"/#\" id=\"logout\">\r\n             LOG OUT\r\n          </a>\r\n        </li>\r\n        `\r\n        );\r\n      }\r\n\r\n      const logoutBtn = document.querySelector(\"#logout\");\r\n\r\n      logoutBtn.addEventListener(\"click\", () => {\r\n        sessionStorage.removeItem(\"token\");\r\n        window.location.href = \"/\";\r\n      });\r\n    } else {\r\n      rightHeader.insertAdjacentHTML(\r\n        \"afterBegin\",\r\n        `\r\n      <li id=\"header_login\">\r\n        <a href=\"/login\">\r\n          LOGIN\r\n        </a>\r\n      </li>\r\n      <li id=\"header_wish\">\r\n        <a href=\"/register\">\r\n          REGISTER\r\n        </a>\r\n      </li>\r\n      <li id=\"header_cart\">            \r\n        <a href=\"/guest\">\r\n          GUEST\r\n        </a>\r\n      </li>\r\n      <li id=\"header_notice\">\r\n        <a href=\"/notice\"> \r\n          NOTICE \r\n        </a>\r\n      </li>\r\n      `\r\n      );\r\n    }\r\n    const searchBtn = document.querySelector(\".searchBtn\");\r\n    const searchBar = document.querySelector(\".header_search\");\r\n\r\n    searchBtn.addEventListener(\"click\", (searchBtn) =>\r\n      (0,_searching_js__WEBPACK_IMPORTED_MODULE_0__.searchProduct)(searchBar)\r\n    );\r\n    searchBar.addEventListener(\"keyup\", function (e) {\r\n      if (e.keyCode === 13) {\r\n        (0,_searching_js__WEBPACK_IMPORTED_MODULE_0__.searchProduct)(searchBar);\r\n      }\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://shopping-mall/./src/views/utils/header.js?");

/***/ }),

/***/ "./src/views/utils/searching.js":
/*!**************************************!*\
  !*** ./src/views/utils/searching.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchProduct\": () => (/* binding */ searchProduct)\n/* harmony export */ });\nfunction searchProduct(searchBar) {\r\n  const productAll = document.querySelectorAll(\".pd_block\");\r\n\r\n  const modelName = document.querySelectorAll(\".tag_name\");\r\n  const brand = document.querySelectorAll(\".pd_brd\");\r\n  const name = document.querySelectorAll(\".pd_name\");\r\n  const category = document.querySelectorAll(\".tag_name\");\r\n\r\n  for (let i = 0; i < productAll.length; i++) {\r\n    productAll[i].classList.add(\"hidden\");\r\n    if (\r\n      modelName[i].innerHTML === searchBar.value.trim() ||\r\n      modelName[i].innerHTML.includes(searchBar.value.trim()) ||\r\n      brand[i].innerHTML === searchBar.value.trim() ||\r\n      brand[i].innerHTML.includes(searchBar.value.trim()) ||\r\n      name[i].innerHTML === searchBar.value.trim() ||\r\n      name[i].innerHTML.includes(searchBar.value.trim()) ||\r\n      category[i].innerHTML === searchBar.value.trim() ||\r\n      category[i].innerHTML.includes(searchBar.value.trim())\r\n    )\r\n      productAll[i].classList.remove(\"hidden\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://shopping-mall/./src/views/utils/searching.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/views/mypage/mypageCart/mypageCart.js");
/******/ 	
/******/ })()
;