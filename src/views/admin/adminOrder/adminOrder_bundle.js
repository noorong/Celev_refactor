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

/***/ "./src/views/admin/adminOrder/adminOrder.js":
/*!**************************************************!*\
  !*** ./src/views/admin/adminOrder/adminOrder.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api.js */ \"./src/views/api.js\");\n/* harmony import */ var _utils_useful_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/useful-functions.js */ \"./src/views/utils/useful-functions.js\");\n/* harmony import */ var _utils_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/header.js */ \"./src/views/utils/header.js\");\n/* harmony import */ var _utils_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/footer.js */ \"./src/views/utils/footer.js\");\n\r\n\r\n\r\n\r\n(0,_utils_header_js__WEBPACK_IMPORTED_MODULE_2__.header)();\r\n(0,_utils_footer_js__WEBPACK_IMPORTED_MODULE_3__.footer)();\r\n\r\nconst ordersCount = document.querySelector(\"#ordersCount\");\r\nconst prepareCount = document.querySelector(\"#prepareCount\");\r\nconst deliveryCount = document.querySelector(\"#deliveryCount\");\r\nconst completeCount = document.querySelector(\"#completeCount\");\r\nconst listing = document.querySelector(\".listing-order\");\r\n\r\nconst modal = document.querySelector(\"#modal\");\r\nconst modalBackground = document.querySelector(\"#modalBackground\");\r\nconst modalCloseButton = document.querySelector(\"#modalCloseButton\");\r\nconst deleteCompleteButton = document.querySelector(\"#deleteComplete\");\r\nconst deleteCancelButton = document.querySelector(\"#deleteCancelButton\");\r\n\r\n//admimn checking 함수 필요\r\n(0,_utils_useful_functions_js__WEBPACK_IMPORTED_MODULE_1__.checkAdmin)();\r\ninsertOrders();\r\naddAllEvents();\r\n\r\n//addEventListner 묶음\r\nfunction addAllEvents() {\r\n  modalBackground.addEventListener(\"click\", closeModal);\r\n  modalCloseButton.addEventListener(\"click\", closeModal);\r\n  document.addEventListener(\"keydown\", keyDownCloseModal);\r\n  deleteCompleteButton.addEventListener(\"click\", deleteOrderDate);\r\n  deleteCancelButton.addEventListener(\"click\", cancelDelete);\r\n}\r\n\r\nlet orderNumDelete;\r\nasync function insertOrders() {\r\n  const orders = await _api_js__WEBPACK_IMPORTED_MODULE_0__.get(\"/api/orderlist/all\");\r\n  const summary = {\r\n    ordersCount: 0,\r\n    prepareCount: 0,\r\n    deliveryCount: 0,\r\n    completeCount: 0,\r\n  };\r\n\r\n  for (const order of orders) {\r\n    const { _id, orderNumber, products, cost, status, createdAt } = order;\r\n    const date = createdAt.split(\"T\")[0];\r\n    const names = [];\r\n    products.forEach((product) => {\r\n      names.push(product[\"name\"]);\r\n    });\r\n    const name = names.toString().split(\",\").join(\"   ||   \");\r\n    summary.ordersCount += 1;\r\n\r\n    if (status === \"상품 준비중\") {\r\n      summary.prepareCount += 1;\r\n    }\r\n    if (status === \"상품 배송중\") {\r\n      summary.deliveryCount += 1;\r\n    }\r\n    if (status === \"배송 완료\") {\r\n      summary.completeCount += 1;\r\n    }\r\n\r\n    listing.insertAdjacentHTML(\r\n      \"beforeend\",\r\n      `\r\n      <div class=\"listing\" id=\"order-${_id}\">\r\n      <div class=\"column1\" id=\"date\">${date}</div>\r\n      <div class=\"column1\" id=\"products\">\r\n        <div>${orderNumber}</div>\r\n      </div>\r\n      <div class=\"column1\" id=\"cost\">${(0,_utils_useful_functions_js__WEBPACK_IMPORTED_MODULE_1__.addCommas)(cost)}</div>\r\n      <div class=\"colmun1 id=\"status>${status}</div>\r\n      <div class=\"column2\" id=\"delivery\">\r\n        <div class=\"selectBox\">\r\n          <select name=\"sB\" class=\"select\" id=\"status-${_id}\">\r\n            <option\r\n             class=\"has-background-danger-light has-text-danger\"\r\n             ${\r\n               status === \"상품 준비중\" ? \"selected\" : \"\"\r\n             } value=\"상품 준비중\">상품 준비중</option>\r\n            <option\r\n             class=\"has-background-primary-light has-text-primary\"\r\n             ${\r\n               status === \"상품 배송중\" ? \"selected\" : \"\"\r\n             }value=\"상품 배송중\">상품 배송중</option>\r\n            <option\r\n              class=\"has-background-grey-light\"\r\n             ${\r\n               status === \"배송 완료\" ? \"selected:\" : \"\"\r\n             }value=\"배송 완료\">배송 완료</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"column1\">\r\n        <button class=\"order_cancel\" id=\"deleteBtn-${_id}\">\r\n          주문 취소\r\n        </button>\r\n      </div>\r\n    </div>  \r\n      `\r\n    );\r\n\r\n    const statusBox = document.querySelector(`#status-${_id}`);\r\n    const deleteBtn = document.querySelector(`#deleteBtn-${_id}`);\r\n\r\n    const index = statusBox.selectedIndex;\r\n    statusBox.className = statusBox[index].className;\r\n\r\n    statusBox.addEventListener(\"change\", async () => {\r\n      const value = confirm(\"수정하시겠습니까?\");\r\n      if (value) {\r\n        const newStatus = statusBox.value;\r\n        const data = { status: newStatus };\r\n\r\n        const index = statusBox.selectedIndex;\r\n        statusBox.className = statusBox[index].calssName;\r\n\r\n        await _api_js__WEBPACK_IMPORTED_MODULE_0__.patch(\"/api/orders/status\", _id, data);\r\n        location.reload();\r\n      }\r\n    });\r\n    deleteBtn.addEventListener(\"click\", async (event) => {\r\n      deleteOrderDate(event, orderNumber);\r\n    });\r\n  }\r\n\r\n  ordersCount.innerText = (0,_utils_useful_functions_js__WEBPACK_IMPORTED_MODULE_1__.addCommas)(summary.ordersCount);\r\n  prepareCount.innerText = (0,_utils_useful_functions_js__WEBPACK_IMPORTED_MODULE_1__.addCommas)(summary.prepareCount);\r\n  deliveryCount.innerText = (0,_utils_useful_functions_js__WEBPACK_IMPORTED_MODULE_1__.addCommas)(summary.deliveryCount);\r\n  completeCount.innerText = (0,_utils_useful_functions_js__WEBPACK_IMPORTED_MODULE_1__.addCommas)(summary.completeCount);\r\n}\r\n\r\n//db에 order 삭제\r\nasync function deleteOrderDate(event, orderNumber) {\r\n  event.preventDefault();\r\n  const value = confirm(\"삭제 하시겠습니까?\");\r\n  if (value === true) {\r\n    try {\r\n      await _api_js__WEBPACK_IMPORTED_MODULE_0__[\"delete\"](`/api/orders/${orderNumber}`);\r\n      alert(\"주문이 삭제되었습니다.\");\r\n\r\n      const deleteItem = document.querySelector(`#order-${orderNumDelete}`);\r\n      deleteItem.remove();\r\n    } catch {\r\n      (err) => {\r\n        alert(`주문 삭제 과정에서 오류가 발생하였습니다: ${err}`);\r\n      };\r\n    }\r\n  }\r\n  window.location.href = \"/admin/adminOrder\";\r\n}\r\n\r\nfunction cancelDelete() {\r\n  userIdToDelete = \"\";\r\n  closeModal();\r\n}\r\n\r\n//modal용 script\r\nfunction closeModal() {\r\n  modal.style.display = \"none\";\r\n}\r\nfunction openModal() {\r\n  modal.style.display = \"flex\";\r\n}\r\n\r\n/*esc close module*/\r\ndocument.addEventListener(\"keydown\", keyDownCloseModal);\r\nfunction keyDownCloseModal(e) {\r\n  if (e.keyCode === 27) {\r\n    closeModal();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://shopping-mall/./src/views/admin/adminOrder/adminOrder.js?");

/***/ }),

/***/ "./src/views/api.js":
/*!**************************!*\
  !*** ./src/views/api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"delete\": () => (/* binding */ del),\n/* harmony export */   \"get\": () => (/* binding */ get),\n/* harmony export */   \"patch\": () => (/* binding */ patch),\n/* harmony export */   \"post\": () => (/* binding */ post)\n/* harmony export */ });\n// api 로 GET 요청 (/endpoint/params 형태로 요청함)\r\nasync function get(endpoint, params = \"\") {\r\n  const apiUrl = `${endpoint}/${params}`;\r\n  console.log(`%cGET 요청: ${apiUrl} `, \"color: #a25cd1;\");\r\n\r\n  const res = await fetch(apiUrl, {\r\n    // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.\r\n    headers: {\r\n      Authorization: `Bearer ${sessionStorage.getItem(\"token\")}`,\r\n    },\r\n  });\r\n\r\n  // 응답 코드가 4XX 계열일 때 (400, 403 등)\r\n  if (!res.ok) {\r\n    const errorContent = await res.json();\r\n    const { reason } = errorContent;\r\n\r\n    throw new Error(reason);\r\n  }\r\n\r\n  const result = await res.json();\r\n\r\n  return result;\r\n}\r\n\r\n// api 로 POST 요청 (/endpoint 로, JSON 데이터 형태로 요청함)\r\nasync function post(endpoint, data) {\r\n  const apiUrl = endpoint;\r\n  // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.\r\n  // 예시: {name: \"Kim\"} => {\"name\": \"Kim\"}\r\n  const bodyData = JSON.stringify(data);\r\n  console.log(`%cPOST 요청: ${apiUrl}`, \"color: #296aba;\");\r\n  console.log(`%cPOST 요청 데이터: ${bodyData}`, \"color: #296aba;\");\r\n\r\n  const res = await fetch(apiUrl, {\r\n    method: \"POST\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n      Authorization: `Bearer ${sessionStorage.getItem(\"token\")}`,\r\n    },\r\n    body: bodyData,\r\n  });\r\n\r\n  // 응답 코드가 4XX 계열일 때 (400, 403 등)\r\n  if (!res.ok) {\r\n    const errorContent = await res.json();\r\n    const { reason } = errorContent;\r\n\r\n    throw new Error(reason);\r\n  }\r\n\r\n  const result = await res.json();\r\n\r\n  return result;\r\n}\r\n\r\n\r\n\r\n// api 로 PATCH 요청 (/endpoint/params 로, JSON 데이터 형태로 요청함)\r\nasync function patch(endpoint, params = \"\", data) {\r\n  const apiUrl = `${endpoint}/${params}`;\r\n\r\n  // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.\r\n  // 예시: {name: \"Kim\"} => {\"name\": \"Kim\"}\r\n  const bodyData = JSON.stringify(data);\r\n  console.log(`%cPATCH 요청: ${apiUrl}`, \"color: #059c4b;\");\r\n  console.log(`%cPATCH 요청 데이터: ${bodyData}`, \"color: #059c4b;\");\r\n\r\n  const res = await fetch(apiUrl, {\r\n    method: \"PATCH\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n      Authorization: `Bearer ${sessionStorage.getItem(\"token\")}`,\r\n    },\r\n    body: bodyData,\r\n  });\r\n\r\n  // 응답 코드가 4XX 계열일 때 (400, 403 등)\r\n  if (!res.ok) {\r\n    const errorContent = await res.json();\r\n    const { reason } = errorContent;\r\n\r\n    throw new Error(reason);\r\n  }\r\n\r\n  const result = await res.json();\r\n\r\n  return result;\r\n}\r\n\r\n// 아래 함수명에 관해, delete 단어는 자바스크립트의 reserved 단어이기에,\r\n// 여기서는 우선 delete 대신 del로 쓰고 아래 export 시에 delete로 alias 함.\r\nasync function del(endpoint, params = \"\", data = {}) {\r\n  const apiUrl = `${endpoint}/${params}`;\r\n  const bodyData = JSON.stringify(data);\r\n\r\n  console.log(`DELETE 요청 ${apiUrl}`);\r\n  console.log(`DELETE 요청 데이터: ${bodyData}`);\r\n\r\n  const res = await fetch(apiUrl, {\r\n    method: \"DELETE\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n      Authorization: `Bearer ${sessionStorage.getItem(\"token\")}`,\r\n    },\r\n    body: bodyData,\r\n  });\r\n\r\n  // 응답 코드가 4XX 계열일 때 (400, 403 등)\r\n  if (!res.ok) {\r\n    const errorContent = await res.json();\r\n    const { reason } = errorContent;\r\n\r\n    throw new Error(reason);\r\n  }\r\n\r\n  const result = await res.json();\r\n\r\n  return result;\r\n}\r\n\r\n// 아래처럼 export하면, import * as Api 로 할 시 Api.get, Api.post 등으로 쓸 수 있음.\r\n\r\n\n\n//# sourceURL=webpack://shopping-mall/./src/views/api.js?");

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

/***/ }),

/***/ "./src/views/utils/useful-functions.js":
/*!*********************************************!*\
  !*** ./src/views/utils/useful-functions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCommas\": () => (/* binding */ addCommas),\n/* harmony export */   \"checkAdmin\": () => (/* binding */ checkAdmin),\n/* harmony export */   \"checkLogin\": () => (/* binding */ checkLogin),\n/* harmony export */   \"convertToNumber\": () => (/* binding */ convertToNumber),\n/* harmony export */   \"getToday\": () => (/* binding */ getToday),\n/* harmony export */   \"randomId\": () => (/* binding */ randomId),\n/* harmony export */   \"validateEmail\": () => (/* binding */ validateEmail),\n/* harmony export */   \"wait\": () => (/* binding */ wait)\n/* harmony export */ });\n// 문자열+숫자로 이루어진 랜덤 5글자 반환\r\nconst randomId = () => {\r\n  return Math.random().toString(36).substring(2, 7);\r\n};\r\n\r\n// 이메일 형식인지 확인 (true 혹은 false 반환)\r\nconst validateEmail = (email) => {\r\n  return String(email)\r\n    .toLowerCase()\r\n    .match(\r\n      /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/\r\n    );\r\n};\r\n\r\n// 숫자에 쉼표를 추가함. (10000 -> 10,000)\r\nconst addCommas = (n) => {\r\n  return n.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \",\");\r\n};\r\n\r\n// 13,000원, 2개 등의 문자열에서 쉼표, 글자 등 제외 후 숫자만 뺴냄\r\n// 예시: 13,000원 -> 13000, 20,000개 -> 20000\r\nconst convertToNumber = (string) => {\r\n  return parseInt(string.replace(/(,|개|원)/g, \"\"));\r\n};\r\n\r\n// ms만큼 기다리게 함.\r\nconst wait = (ms) => {\r\n  return new Promise((r) => setTimeout(r, ms));\r\n};\r\n\r\n// 현재 날짜 YYYYMMDD로 출력\r\nconst getToday = () => {\r\n  var date = new Date();\r\n  var year = date.getFullYear();\r\n  var month = (\"0\" + (1 + date.getMonth())).slice(-2);\r\n  var day = (\"0\" + date.getDate()).slice(-2);\r\n\r\n  return year + month + day;\r\n};\r\n\r\n// 로그인 여부(토큰 존재 여부 확인) 확인\r\nconst checkLogin = () => {\r\n  const token = sessionStorage.getItem(\"token\");\r\n  if (!token) {\r\n    //현재 주소 url 추출\r\n    const pathname = window.location.pathname;\r\n    const search = window.location.search;\r\n\r\n    //언제든지 로그인 후 원래 페이지로 이동하기 위함\r\n    window.location.replace(`/login?previouspage=${pathname + search}`);\r\n  }\r\n};\r\n\r\n//관리자 여부 확인\r\nconst checkAdmin = async () => {\r\n  window.document.body.style.display = \"none\"; //화면 가리고 시작\r\n  const token = sessionStorage.getItem(\"token\");\r\n  if (!token) {\r\n    const pathname = window.location.pathname;\r\n    const search = window.location.search;\r\n\r\n    window.location.replace(`/login?previouspage=${pathname + search}`);\r\n  }\r\n\r\n  const res = await fetch(\"/api/admin/check\", {\r\n    headers: {\r\n      Authorization: `Bearer ${token}`,\r\n    },\r\n  });\r\n\r\n  const { result } = await res.json();\r\n\r\n  if (result === \"success\") {\r\n    window.document.body.style.display = \"block\";\r\n\r\n    return;\r\n  } else {\r\n    alert(\"관리자 전용 페이지 입니다.\");\r\n\r\n    window.location.replace(\"/\");\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://shopping-mall/./src/views/utils/useful-functions.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/views/admin/adminOrder/adminOrder.js");
/******/ 	
/******/ })()
;