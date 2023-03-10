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

/***/ "./src/views/home/home.js":
/*!********************************!*\
  !*** ./src/views/home/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '/api.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _useful_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useful-functions.js */ \"./src/views/useful-functions.js\");\n/* harmony import */ var _utils_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/header.js */ \"./src/views/utils/header.js\");\n/* harmony import */ var _utils_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/footer.js */ \"./src/views/utils/footer.js\");\n/* harmony import */ var _utils_slideScript_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/slideScript.js */ \"./src/views/utils/slideScript.js\");\n/* harmony import */ var _utils_category_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/category.js */ \"./src/views/utils/category.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_utils_header_js__WEBPACK_IMPORTED_MODULE_2__.header)();\r\n(0,_utils_footer_js__WEBPACK_IMPORTED_MODULE_3__.footer)();\r\n(0,_utils_slideScript_js__WEBPACK_IMPORTED_MODULE_4__.slideScript)();\r\n\r\n//필터링\r\nconst categoryBox = document.querySelector(\".category\");\r\ncategoryBox.addEventListener(\"click\", _utils_category_js__WEBPACK_IMPORTED_MODULE_5__.filtering);\r\n\r\n// 상품 목록 렌더링, 좋아요 기능\r\ninsertProductElement();\r\nconst productList = document.querySelector(\".section_box\");\r\nconst token = sessionStorage.getItem(\"token\");\r\n\r\nasync function insertProductElement() {\r\n  const res = await fetch(`api/products`);\r\n  const products = await res.json();\r\n\r\n  products.forEach((product) => {\r\n    const brand = product.brand;\r\n    const name = product.name;\r\n    const price = product.price;\r\n    const img = product.img;\r\n    const category = product.category;\r\n    const description = product.description;\r\n    const num = product.num;\r\n    const like = product.like;\r\n\r\n    productList.insertAdjacentHTML(\r\n      \"beforeend\",\r\n      `\r\n    <section class=\"pd_block\" id=\"${category}\">\r\n    <img src=\"${img}\"class=\"box\" id=\"${num}\"/>\r\n    <article class=\"pd_text\">\r\n      <p class=\"pd_brd\" id=\"${brand}\">${brand}</p>\r\n      <p class=\"pd_name\" id=\"${name}\">${name}</p>\r\n      <div class=\"tag_box\">\r\n        <a class=\"tag_category\">${category}</a>\r\n        <a class=\"tag_name\" id=\"${description}\">${description}</a>\r\n        <div class=\"tag_like\">\r\n          <img class=\"like_src\" src=\"../image/like.png\" alt=\"\" width=\"30px\" id=\"like_${num}\">\r\n        </div>\r\n      </div>\r\n      <p class=\"like_count\" id=\"likeCount_${num}\">${like}</p>\r\n      <p class=\"pd_price\">${price} 원</p>\r\n    </article>\r\n  </section>\r\n    `\r\n    );\r\n\r\n    const productItem = document.getElementById(`${num}`);\r\n    const likeBtn = document.getElementById(`like_${num}`);\r\n    const likeCount = document.getElementById(`likeCount_${num}`);\r\n\r\n    productItem.addEventListener(\"click\", moveToProduct);\r\n    likeBtn.addEventListener(\"click\", toggle);\r\n    function moveToProduct() {\r\n      window.location.assign(`/productDetail/${num}`);\r\n    }\r\n    async function toggle(e) {\r\n      e.preventDefault();\r\n      if (likeBtn.src.split(\"/\")[4] === \"like.png\") {\r\n        countIncrease(e);\r\n      } else {\r\n        countDecrease(e);\r\n      }\r\n    }\r\n    async function countIncrease(e) {\r\n      e.preventDefault();\r\n      if (token) {\r\n        (0,_useful_functions_js__WEBPACK_IMPORTED_MODULE_1__.checkLogin)();\r\n        let userData = await Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '/api.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\"/api/user\");\r\n        const { likeProduct } = userData;\r\n        const userId = userData._id;\r\n\r\n        const data = { num, like };\r\n        likeProduct.push(num);\r\n        const newLike = like + 1;\r\n        if (like != newLike) {\r\n          data.like = newLike;\r\n          await Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '/api.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\"/api/products\", num, data);\r\n          await Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '/api.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\"/api/usersLike/like\", userId, {\r\n            likeProduct: likeProduct,\r\n          });\r\n          likeCount.innerText = data.like;\r\n          likeBtn.src = \"../image/like_hover.png\";\r\n        }\r\n      } else {\r\n        alert(\"로그인이 필요합니다.\");\r\n        window.location.href = \"/login\";\r\n      }\r\n    }\r\n    async function countDecrease(e) {\r\n      e.preventDefault();\r\n      if (token) {\r\n        (0,_useful_functions_js__WEBPACK_IMPORTED_MODULE_1__.checkLogin)();\r\n        let userData = await Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '/api.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\"/api/user\");\r\n        const { likeProduct } = userData;\r\n        const userId = userData._id;\r\n        const data = { num, like };\r\n        likeProduct.pop(num);\r\n        const newLike = like - 1;\r\n        if (like != newLike) {\r\n          data.like = like;\r\n          await Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '/api.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\"/api/products\", num, data);\r\n          await Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '/api.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\"/api/usersLike/like\", userId, {\r\n            likeProduct: likeProduct,\r\n          });\r\n          likeCount.innerText = data.like;\r\n          likeBtn.src = \"../image/like.png\";\r\n        }\r\n      } else {\r\n        alert(\"로그인이 필요합니다.\");\r\n        window.location.href = \"/login\";\r\n      }\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://shopping-mall/./src/views/home/home.js?");

/***/ }),

/***/ "./src/views/useful-functions.js":
/*!***************************************!*\
  !*** ./src/views/useful-functions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCommas\": () => (/* binding */ addCommas),\n/* harmony export */   \"checkAdmin\": () => (/* binding */ checkAdmin),\n/* harmony export */   \"checkLogin\": () => (/* binding */ checkLogin),\n/* harmony export */   \"convertToNumber\": () => (/* binding */ convertToNumber),\n/* harmony export */   \"footerComponent\": () => (/* binding */ footerComponent),\n/* harmony export */   \"getToday\": () => (/* binding */ getToday),\n/* harmony export */   \"headerFooterComponent\": () => (/* binding */ headerFooterComponent),\n/* harmony export */   \"randomId\": () => (/* binding */ randomId),\n/* harmony export */   \"validateEmail\": () => (/* binding */ validateEmail),\n/* harmony export */   \"wait\": () => (/* binding */ wait)\n/* harmony export */ });\n// 문자열+숫자로 이루어진 랜덤 5글자 반환\r\nconst randomId = () => {\r\n  return Math.random().toString(36).substring(2, 7);\r\n};\r\n\r\n// 이메일 형식인지 확인 (true 혹은 false 반환)\r\nconst validateEmail = (email) => {\r\n  return String(email)\r\n    .toLowerCase()\r\n    .match(\r\n      /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/\r\n    );\r\n};\r\n\r\n// 숫자에 쉼표를 추가함. (10000 -> 10,000)\r\nconst addCommas = (n) => {\r\n  return n.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \",\");\r\n};\r\n\r\n// 13,000원, 2개 등의 문자열에서 쉼표, 글자 등 제외 후 숫자만 뺴냄\r\n// 예시: 13,000원 -> 13000, 20,000개 -> 20000\r\nconst convertToNumber = (string) => {\r\n  return parseInt(string.replace(/(,|개|원)/g, \"\"));\r\n};\r\n\r\n// ms만큼 기다리게 함.\r\nconst wait = (ms) => {\r\n  return new Promise((r) => setTimeout(r, ms));\r\n};\r\n\r\n// 현재 날짜 YYYYMMDD로 출력\r\nconst getToday = () => {\r\n  var date = new Date();\r\n  var year = date.getFullYear();\r\n  var month = (\"0\" + (1 + date.getMonth())).slice(-2);\r\n  var day = (\"0\" + date.getDate()).slice(-2);\r\n\r\n  return year + month + day;\r\n};\r\n\r\n// 로그인 여부(토큰 존재 여부 확인) 확인\r\nconst checkLogin = () => {\r\n  const token = sessionStorage.getItem(\"token\");\r\n  if (!token) {\r\n    //현재 주소 url 추출\r\n    const pathname = window.location.pathname;\r\n    const search = window.location.search;\r\n\r\n    //언제든지 로그인 후 원래 페이지로 이동하기 위함\r\n    window.location.replace(`/login?previouspage=${pathname + search}`);\r\n  }\r\n};\r\n\r\n//관리자 여부 확인\r\nconst checkAdmin = async () => {\r\n  window.document.body.style.display = \"none\"; //화면 가리고 시작\r\n  const token = sessionStorage.getItem(\"token\");\r\n  if (!token) {\r\n    const pathname = window.location.pathname;\r\n    const search = window.location.search;\r\n\r\n    window.location.replace(`/login?previouspage=${pathname + search}`);\r\n  }\r\n\r\n  const res = await fetch(\"/api/admin/check\", {\r\n    headers: {\r\n      Authorization: `Bearer ${token}`,\r\n    },\r\n  });\r\n\r\n  const { result } = await res.json();\r\n\r\n  if (result === \"success\") {\r\n    window.document.body.style.display = \"block\";\r\n\r\n    return;\r\n  } else {\r\n    alert(\"관리자 전용 페이지 입니다.\");\r\n\r\n    window.location.replace(\"/\");\r\n  }\r\n};\r\n\r\nconst headerFooterComponent = () => {\r\n  const headerEl = document.querySelector(\"#header\");\r\n  const footerEl = document.querySelector(\"#footer\");\r\n\r\n  if (headerEl) {\r\n    const header = fetch(\"../headerFooter/header.html\");\r\n    header\r\n      .then((res) => res.text())\r\n      .then((text) => {\r\n        document.querySelector(\"#header\").innerHTML = text;\r\n        let style = document.createElement(\"link\");\r\n        style.href = \"/mypage/HeaderFooter.css\";\r\n        style.rel = \"stylesheet\";\r\n        document.head.appendChild(style);\r\n        let script = document.createElement(\"script\");\r\n        script.type = \"module\";\r\n        script.src = \"./header.js\";\r\n        document.body.appendChild(script);\r\n      });\r\n  }\r\n\r\n  if (footerEl) {\r\n    const footer = fetch(\"../headerFooter/footer.html\");\r\n    footer\r\n      .then((res) => res.text())\r\n      .then((text) => {\r\n        document.querySelector(\"#footer\").innerHTML = text;\r\n      });\r\n  }\r\n};\r\n\r\nconst footerComponent = () => {};\r\n\n\n//# sourceURL=webpack://shopping-mall/./src/views/useful-functions.js?");

/***/ }),

/***/ "./src/views/utils/category.js":
/*!*************************************!*\
  !*** ./src/views/utils/category.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filtering\": () => (/* binding */ filtering)\n/* harmony export */ });\nfunction filtering(e) {\r\n  const productAll = document.querySelectorAll(\".pd_block\");\r\n\r\n  for (let i = 0; i < productAll.length; i++) {\r\n    if (e.target.id === \"category_box\" || e.target.id === \"\") return;\r\n    else if (e.target.id === \"all\") {\r\n      productAll.forEach((element) => {\r\n        element.classList.remove(\"hidden\");\r\n      });\r\n    } else if (e.target.id === productAll[i].id) {\r\n      productAll[i].classList.remove(\"hidden\");\r\n    } else if (e.target.id !== productAll[i].id) {\r\n      productAll[i].classList.add(\"hidden\");\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://shopping-mall/./src/views/utils/category.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\n/* harmony import */ var _searching_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searching.js */ \"./src/views/utils/searching.js\");\n\r\n\r\nfunction header() {\r\n  window.addEventListener(\"load\", async () => {\r\n    const body = document.querySelector(\".body\");\r\n    body.insertAdjacentHTML(\r\n      \"afterBegin\",\r\n      `\r\n    <header class=\"header\">\r\n      <div class=\"header_logo\">\r\n        <a href=\"/\">\r\n          Ce1ev.\r\n        </a>\r\n      </div>\r\n      <ul class=\"search\">\r\n        <li>\r\n          <input type=\"text\" placeholder=\"검색어를 입력하세요.\" class=\"header_search\" id=\"text\" />\r\n          <button type=\"button\" class=\"searchBtn\">\r\n            <i class=\"fa fa-magnifying-glass fa-2x\"></i>\r\n          </button>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"header_right\"></ul>\r\n    </header>\r\n    `\r\n    );\r\n\r\n    const rightHeader = document.querySelector(\".header_right\");\r\n\r\n    const token = sessionStorage.getItem(\"token\");\r\n    if (token) {\r\n      const res = await fetch(\"/api/admin/check\", {\r\n        headers: {\r\n          Authorization: `Bearer ${token}`,\r\n        },\r\n      });\r\n\r\n      const { result } = await res.json();\r\n\r\n      if (result === \"success\") {\r\n        rightHeader.insertAdjacentHTML(\r\n          \"afterBegin\",\r\n          `      \r\n        <li id=\"header_addProduct\">\r\n          <a href=\"/products\">\r\n            ADD-PRODUCT\r\n          </a>  \r\n        </li>\r\n        <li id=\"header_mypage\">\r\n          <a href=\"/admin\">\r\n            ADMIN-PAGE\r\n          </a>  \r\n        </li>\r\n        <li id=\"header_notice\">\r\n          <a href=\"/notice\"> \r\n            NOTICE \r\n          </a>\r\n        </li>\r\n        <li id=\"header_logout\">\r\n          <a href=\"/#\" id=\"logout\">\r\n            LOG OUT\r\n          </a>\r\n        </li>\r\n        `\r\n        );\r\n      } else {\r\n        rightHeader.insertAdjacentHTML(\r\n          \"afterBegin\",\r\n          `      \r\n        <li id=\"header_cart\">\r\n          <a href=\"/mypage/myPageCart\">\r\n            CART\r\n          </a>\r\n        </li>\r\n        <li id=\"header_myPage\">\r\n          <a href=\"/mypage\">\r\n            MY PAGE\r\n          </a>\r\n        </li>\r\n        <li id=\"header_notice\">\r\n          <a href=\"/notice\"> NOTICE </a>\r\n        </li>\r\n        <li id=\"header_logout\">\r\n          <a href=\"/#\" id=\"logout\">\r\n             LOG OUT\r\n          </a>\r\n        </li>\r\n        `\r\n        );\r\n      }\r\n\r\n      const logoutBtn = document.querySelector(\"#logout\");\r\n\r\n      logoutBtn.addEventListener(\"click\", () => {\r\n        sessionStorage.removeItem(\"token\");\r\n        window.location.href = \"/\";\r\n      });\r\n    } else {\r\n      rightHeader.insertAdjacentHTML(\r\n        \"afterBegin\",\r\n        `\r\n      <li id=\"header_login\">\r\n        <a href=\"/login\">\r\n          LOGIN\r\n        </a>\r\n      </li>\r\n      <li id=\"header_wish\">\r\n        <a href=\"/register\">\r\n          REGISTER\r\n        </a>\r\n      </li>\r\n      <li id=\"header_cart\">            \r\n        <a href=\"/guest\">\r\n          GUEST\r\n        </a>\r\n      </li>\r\n      <li id=\"header_notice\">\r\n        <a href=\"/notice\"> \r\n          NOTICE \r\n        </a>\r\n      </li>\r\n      `\r\n      );\r\n    }\r\n    const searchBtn = document.querySelector(\".searchBtn\");\r\n    const searchBar = document.querySelector(\".header_search\");\r\n\r\n    searchBtn.addEventListener(\"click\", (searchBtn) =>\r\n      (0,_searching_js__WEBPACK_IMPORTED_MODULE_0__.searchProduct)(searchBar)\r\n    );\r\n    searchBar.addEventListener(\"keyup\", function (e) {\r\n      if (e.keyCode === 13) {\r\n        (0,_searching_js__WEBPACK_IMPORTED_MODULE_0__.searchProduct)(searchBar);\r\n      }\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://shopping-mall/./src/views/utils/header.js?");

/***/ }),

/***/ "./src/views/utils/searching.js":
/*!**************************************!*\
  !*** ./src/views/utils/searching.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchProduct\": () => (/* binding */ searchProduct)\n/* harmony export */ });\nfunction searchProduct(searchBar) {\r\n  const productAll = document.querySelectorAll(\".pd_block\");\r\n\r\n  const modelName = document.querySelectorAll(\".tag_name\");\r\n  const brand = document.querySelectorAll(\".pd_brd\");\r\n  const name = document.querySelectorAll(\".pd_name\");\r\n  const category = document.querySelectorAll(\".tag_name\");\r\n\r\n  for (let i = 0; i < productAll.length; i++) {\r\n    productAll[i].classList.add(\"hidden\");\r\n    if (\r\n      modelName[i].innerHTML === searchBar.value.trim() ||\r\n      modelName[i].innerHTML.includes(searchBar.value.trim()) ||\r\n      brand[i].innerHTML === searchBar.value.trim() ||\r\n      brand[i].innerHTML.includes(searchBar.value.trim()) ||\r\n      name[i].innerHTML === searchBar.value.trim() ||\r\n      name[i].innerHTML.includes(searchBar.value.trim()) ||\r\n      category[i].innerHTML === searchBar.value.trim() ||\r\n      category[i].innerHTML.includes(searchBar.value.trim())\r\n    )\r\n      productAll[i].classList.remove(\"hidden\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://shopping-mall/./src/views/utils/searching.js?");

/***/ }),

/***/ "./src/views/utils/slideScript.js":
/*!****************************************!*\
  !*** ./src/views/utils/slideScript.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slideScript\": () => (/* binding */ slideScript)\n/* harmony export */ });\nfunction slideScript() {\r\n\r\n// 슬라이크 전체 크기(width 구하기)\r\nconst slide = document.querySelector(\".slide\");\r\nlet slideWidth = slide.offsetWidth;\r\n\r\n// 버튼 엘리먼트 선택하기\r\nconst prevBtn = document.querySelector(\".slide_prev_button\");\r\nconst nextBtn = document.querySelector(\".slide_next_button\");\r\n\r\n// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기\r\nconst slideItems = document.querySelectorAll(\".slide_item\");\r\n// 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수\r\nconst maxSlide = slideItems.length;\r\n\r\n// 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수\r\nlet currSlide = 1;\r\n\r\n// 페이지네이션 생성\r\nconst pagination = document.querySelector(\".slide_pagination\");\r\n\r\nfor (let i = 0; i < maxSlide; i++) {\r\n  if (i === 0) pagination.innerHTML += `<li class=\"active\">•</li>`;\r\n  else pagination.innerHTML += `<li>•</li>`;\r\n}\r\n\r\nconst paginationItems = document.querySelectorAll(\".slide_pagination > li\");\r\n\r\n// 무한 슬라이드를 위해 start, end 슬라이드 복사하기\r\nconst startSlide = slideItems[0];\r\nconst endSlide = slideItems[slideItems.length - 1];\r\n\r\n// 엘리먼트 생성\r\nconst startElem = document.createElement(startSlide.tagName);\r\nconst endElem = document.createElement(endSlide.tagName);\r\n\r\n// 엘리먼트에 클래스 적용 동일하게 하기\r\nendSlide.classList.forEach((c) => endElem.classList.add(c));\r\nendElem.innerHTML = endSlide.innerHTML;\r\nstartSlide.classList.forEach((c) => startElem.classList.add(c));\r\nstartElem.innerHTML = startSlide.innerHTML;\r\n\r\n// 각 복제한 엘리먼트를 각 위치에 추가하기\r\nslideItems[0].before(endElem);\r\nslideItems[slideItems.length - 1].after(startElem);\r\n\r\n// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기\r\n\r\nlet offset = slideWidth * currSlide;\r\nslideItems.forEach((i) => {\r\n  i.setAttribute(\"style\", `left: ${-offset}px`);\r\n});\r\n\r\nfunction nextMove() {\r\n  currSlide++;\r\n  // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서\r\n  if (currSlide <= maxSlide) {\r\n    // 슬라이드를 이동시키기 위한 offset 계산\r\n    const offset = slideWidth * currSlide;\r\n    // 각 슬라이드 아이템의 left에 offset 적용\r\n    slideItems.forEach((i) => {\r\n      i.setAttribute(\"style\", `left: ${-offset}px`);\r\n    });\r\n    // 슬라이드 이동 시 현재 활성화된 pagination 변경\r\n    paginationItems.forEach((i) => i.classList.remove(\"active\"));\r\n    paginationItems[currSlide - 1].classList.add(\"active\");\r\n  } else {\r\n    // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성\r\n    currSlide = 0;\r\n    let offset = slideWidth * currSlide;\r\n    slideItems.forEach((i) => {\r\n      i.setAttribute(\"style\", `transition: ${0}s; left: ${-offset}px`);\r\n    });\r\n    currSlide++;\r\n    offset = slideWidth * currSlide;\r\n    // 각 슬라이드 아이템의 left에 offset 적용\r\n    // setTimeout을 사용하는 이유는 비동기 처리를 이용해 transition이 제대로 적용되게 하기 위함\r\n    setTimeout(() => {\r\n      // 각 슬라이드 아이템의 left에 offset 적용\r\n      slideItems.forEach((i) => {\r\n        i.setAttribute(\"style\", `transition: ${0.15}s; left: ${-offset}px`);\r\n      });\r\n    }, 0);\r\n    // // 슬라이드 이동 시 현재 활성화된 pagination 변경\r\n    paginationItems.forEach((i) => i.classList.remove(\"active\"));\r\n    paginationItems[currSlide - 1].classList.add(\"active\");\r\n  }\r\n}\r\nfunction prevMove() {\r\n  currSlide--;\r\n  // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서\r\n  if (currSlide > 0) {\r\n    // 슬라이드를 이동시키기 위한 offset 계산\r\n    const offset = slideWidth * currSlide;\r\n    // 각 슬라이드 아이템의 left에 offset 적용\r\n    slideItems.forEach((i) => {\r\n      i.setAttribute(\"style\", `left: ${-offset}px`);\r\n    });\r\n    // 슬라이드 이동 시 현재 활성화된 pagination 변경\r\n    paginationItems.forEach((i) => i.classList.remove(\"active\"));\r\n    paginationItems[currSlide - 1].classList.add(\"active\");\r\n  } else {\r\n    // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성\r\n    currSlide = maxSlide + 1;\r\n    let offset = slideWidth * currSlide;\r\n    // 각 슬라이드 아이템의 left에 offset 적용\r\n    slideItems.forEach((i) => {\r\n      i.setAttribute(\"style\", `transition: ${0}s; left: ${-offset}px`);\r\n    });\r\n    currSlide--;\r\n    offset = slideWidth * currSlide;\r\n    setTimeout(() => {\r\n      // 각 슬라이드 아이템의 left에 offset 적용\r\n      slideItems.forEach((i) => {\r\n        // i.setAttribute(\"style\", `transition: ${0}s; left: ${-offset}px`);\r\n        i.setAttribute(\"style\", `transition: ${0.15}s; left: ${-offset}px`);\r\n      });\r\n    }, 0);\r\n    // 슬라이드 이동 시 현재 활성화된 pagination 변경\r\n    paginationItems.forEach((i) => i.classList.remove(\"active\"));\r\n    paginationItems[currSlide - 1].classList.add(\"active\");\r\n  }\r\n}\r\n\r\n\r\n// 버튼 엘리먼트에 클릭 이벤트 추가하기\r\nnextBtn.addEventListener(\"click\", () => {\r\n  nextMove();\r\n});\r\n// 버튼 엘리먼트에 클릭 이벤트 추가하기\r\nprevBtn.addEventListener(\"click\", () => {\r\n  prevMove();\r\n});\r\n\r\n// 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해\r\nwindow.addEventListener(\"resize\", () => {\r\n  slideWidth = slide.clientWidth;\r\n});\r\n\r\n// 각 페이지네이션 클릭 시 해당 슬라이드로 이동하기\r\nfor (let i = 0; i < maxSlide; i++) {\r\n  // 각 페이지네이션마다 클릭 이벤트 추가하기\r\n  paginationItems[i].addEventListener(\"click\", () => {\r\n    // 클릭한 페이지네이션에 따라 현재 슬라이드 변경해주기(currSlide는 시작 위치가 1이기 때문에 + 1)\r\n    currSlide = i + 1;\r\n    // 슬라이드를 이동시키기 위한 offset 계산\r\n    const offset = slideWidth * (currSlide - 1);\r\n    // 각 슬라이드 아이템의 left에 offset 적용\r\n    slideItems.forEach((i) => {\r\n      i.setAttribute(\"style\", `left: ${-offset}px`);\r\n    });\r\n    // 슬라이드 이동 시 현재 활성화된 pagination 변경\r\n    paginationItems.forEach((i) => i.classList.remove(\"active\"));\r\n    paginationItems[currSlide - 1].classList.add(\"active\");\r\n  });\r\n}\r\n\r\n// 기본적으로 슬라이드 루프 시작하기\r\nlet loopInterval = setInterval(() => {\r\n  nextMove();\r\n}, 3000);\r\n\r\n// 슬라이드에 마우스가 올라간 경우 루프 멈추기\r\nslide.addEventListener(\"mouseover\", () => {\r\n  clearInterval(loopInterval);\r\n});\r\n\r\n// 슬라이드에서 마우스가 나온 경우 루프 재시작하기\r\nslide.addEventListener(\"mouseout\", () => {\r\n  loopInterval = setInterval(() => {\r\n    nextMove();\r\n  }, 3000);\r\n});\r\n}\n\n//# sourceURL=webpack://shopping-mall/./src/views/utils/slideScript.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/views/home/home.js");
/******/ 	
/******/ })()
;