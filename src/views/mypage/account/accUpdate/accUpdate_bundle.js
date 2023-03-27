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

/***/ "./src/views/api.js":
/*!**************************!*\
  !*** ./src/views/api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"delete\": () => (/* binding */ del),\n/* harmony export */   \"get\": () => (/* binding */ get),\n/* harmony export */   \"patch\": () => (/* binding */ patch),\n/* harmony export */   \"post\": () => (/* binding */ post)\n/* harmony export */ });\n// api 로 GET 요청 (/endpoint/params 형태로 요청함)\r\nasync function get(endpoint, params = \"\") {\r\n  const apiUrl = `${endpoint}/${params}`;\r\n  console.log(`%cGET 요청: ${apiUrl} `, \"color: #a25cd1;\");\r\n\r\n  const res = await fetch(apiUrl, {\r\n    // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.\r\n    headers: {\r\n      Authorization: `Bearer ${sessionStorage.getItem(\"token\")}`,\r\n    },\r\n  });\r\n\r\n  // 응답 코드가 4XX 계열일 때 (400, 403 등)\r\n  if (!res.ok) {\r\n    const errorContent = await res.json();\r\n    const { reason } = errorContent;\r\n\r\n    throw new Error(reason);\r\n  }\r\n\r\n  const result = await res.json();\r\n\r\n  return result;\r\n}\r\n\r\n// api 로 POST 요청 (/endpoint 로, JSON 데이터 형태로 요청함)\r\nasync function post(endpoint, data) {\r\n  const apiUrl = endpoint;\r\n  // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.\r\n  // 예시: {name: \"Kim\"} => {\"name\": \"Kim\"}\r\n  const bodyData = JSON.stringify(data);\r\n  console.log(`%cPOST 요청: ${apiUrl}`, \"color: #296aba;\");\r\n  console.log(`%cPOST 요청 데이터: ${bodyData}`, \"color: #296aba;\");\r\n\r\n  const res = await fetch(apiUrl, {\r\n    method: \"POST\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n      Authorization: `Bearer ${sessionStorage.getItem(\"token\")}`,\r\n    },\r\n    body: bodyData,\r\n  });\r\n\r\n  // 응답 코드가 4XX 계열일 때 (400, 403 등)\r\n  if (!res.ok) {\r\n    const errorContent = await res.json();\r\n    const { reason } = errorContent;\r\n\r\n    throw new Error(reason);\r\n  }\r\n\r\n  const result = await res.json();\r\n\r\n  return result;\r\n}\r\n\r\n\r\n\r\n// api 로 PATCH 요청 (/endpoint/params 로, JSON 데이터 형태로 요청함)\r\nasync function patch(endpoint, params = \"\", data) {\r\n  const apiUrl = `${endpoint}/${params}`;\r\n\r\n  // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.\r\n  // 예시: {name: \"Kim\"} => {\"name\": \"Kim\"}\r\n  const bodyData = JSON.stringify(data);\r\n  console.log(`%cPATCH 요청: ${apiUrl}`, \"color: #059c4b;\");\r\n  console.log(`%cPATCH 요청 데이터: ${bodyData}`, \"color: #059c4b;\");\r\n\r\n  const res = await fetch(apiUrl, {\r\n    method: \"PATCH\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n      Authorization: `Bearer ${sessionStorage.getItem(\"token\")}`,\r\n    },\r\n    body: bodyData,\r\n  });\r\n\r\n  // 응답 코드가 4XX 계열일 때 (400, 403 등)\r\n  if (!res.ok) {\r\n    const errorContent = await res.json();\r\n    const { reason } = errorContent;\r\n\r\n    throw new Error(reason);\r\n  }\r\n\r\n  const result = await res.json();\r\n\r\n  return result;\r\n}\r\n\r\n// 아래 함수명에 관해, delete 단어는 자바스크립트의 reserved 단어이기에,\r\n// 여기서는 우선 delete 대신 del로 쓰고 아래 export 시에 delete로 alias 함.\r\nasync function del(endpoint, params = \"\", data = {}) {\r\n  const apiUrl = `${endpoint}/${params}`;\r\n  const bodyData = JSON.stringify(data);\r\n\r\n  console.log(`DELETE 요청 ${apiUrl}`);\r\n  console.log(`DELETE 요청 데이터: ${bodyData}`);\r\n\r\n  const res = await fetch(apiUrl, {\r\n    method: \"DELETE\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n      Authorization: `Bearer ${sessionStorage.getItem(\"token\")}`,\r\n    },\r\n    body: bodyData,\r\n  });\r\n\r\n  // 응답 코드가 4XX 계열일 때 (400, 403 등)\r\n  if (!res.ok) {\r\n    const errorContent = await res.json();\r\n    const { reason } = errorContent;\r\n\r\n    throw new Error(reason);\r\n  }\r\n\r\n  const result = await res.json();\r\n\r\n  return result;\r\n}\r\n\r\n// 아래처럼 export하면, import * as Api 로 할 시 Api.get, Api.post 등으로 쓸 수 있음.\r\n\r\n\n\n//# sourceURL=webpack://shopping-mall/./src/views/api.js?");

/***/ }),

/***/ "./src/views/mypage/account/accUpdate/accUpdate.js":
/*!*********************************************************!*\
  !*** ./src/views/mypage/account/accUpdate/accUpdate.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api.js */ \"./src/views/api.js\");\n/* harmony import */ var _utils_useful_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/useful-functions.js */ \"./src/views/utils/useful-functions.js\");\n\r\n\r\n\r\nconst inputnameTag = document.querySelector(\"#fullNameInput\");\r\nconst emailTag = document.querySelector(\"#emailInput\");\r\nconst passwordTag = document.querySelector(\"#passwordInput\");\r\nconst passwordConfirmTag = document.querySelector(\"#passwordConfirmInput\");\r\nconst currentPasswordTag = document.querySelector(\"#currentPasswordInput\");\r\nconst numberTag = document.querySelector(\"#numberInput\");\r\nconst addressTag = document.querySelector(\"#addressInput\");\r\nconst updatebtn = document.querySelector(\"#updateButton\");\r\n\r\n(0,_utils_useful_functions_js__WEBPACK_IMPORTED_MODULE_1__.checkLogin)();\r\naddAllEvents();\r\n\r\nlet userData;\r\nasync function addAllEvents() {\r\n  userData = await _api_js__WEBPACK_IMPORTED_MODULE_0__.get(\"/api/user\");\r\n\r\n  const { email, name, phoneNum, address } = userData;\r\n\r\n  userData.password = \"\";\r\n  inputnameTag.value = name;\r\n  numberTag.value = phoneNum;\r\n  emailTag.value = email;\r\n  addressTag.value = `${address}`;\r\n\r\n  passwordTag.value = \"\"; //크롬 자동완성 삭제\r\n\r\n  updatebtn.addEventListener(\"click\", saveUserData);\r\n}\r\n\r\n//db 저장\r\nasync function saveUserData(e) {\r\n  e.preventDefault();\r\n\r\n  const name = inputnameTag.value;\r\n  const email = emailTag.value;\r\n  const password = passwordTag.value;\r\n  const passwordConfirm = passwordConfirmTag.value;\r\n  const address = addressTag.value;\r\n  const phoneNum = numberTag.value;\r\n  const currentPassword = currentPasswordTag.value;\r\n\r\n  const isPasswordLong = password.length >= 4;\r\n  const isPasswordSame = password === passwordConfirm;\r\n\r\n  //비밀번호 변경\r\n  if (password && !isPasswordLong) {\r\n    alert(\"비밀번호는 4글자 이상이어야 합니다.\");\r\n  }\r\n  if (password && !isPasswordSame) {\r\n    alert(\"비밀번호와 비밀번호확인이 일치하지 않습니다.\");\r\n  }\r\n\r\n  const data = { currentPassword };\r\n\r\n  if (name !== userData.name) {\r\n    data.name = name;\r\n  }\r\n\r\n  if (password !== userData.password) {\r\n    data.password = password;\r\n  }\r\n\r\n  if (address !== userData.address) {\r\n    data.address = address;\r\n  }\r\n\r\n  if (phoneNum !== userData.phoneNum) {\r\n    data.phoneNum = phoneNum;\r\n  }\r\n\r\n  if (email != userData.email) {\r\n    data.email = email;\r\n  }\r\n\r\n  const toUpdate = Object.keys(data);\r\n  if (toUpdate.length === 1) {\r\n    alert(\"업데이트한 정보가 없습니다.\");\r\n  }\r\n\r\n  try {\r\n    const { _id } = userData;\r\n    await _api_js__WEBPACK_IMPORTED_MODULE_0__.patch(\"/api/users\", _id, data);\r\n    alert(\"회원정보가 수정되었습니다.\");\r\n    window.location.assign(\"/\");\r\n  } catch (err) {\r\n    alert(`회원정보 저장 과정에서 오류가 발생하였습니다: ${err}`);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://shopping-mall/./src/views/mypage/account/accUpdate/accUpdate.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/views/mypage/account/accUpdate/accUpdate.js");
/******/ 	
/******/ })()
;