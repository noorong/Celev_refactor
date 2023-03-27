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

/***/ "./src/views/admin/addProduct/addProduct.js":
/*!**************************************************!*\
  !*** ./src/views/admin/addProduct/addProduct.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _aws_s3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../aws-s3.js */ \"./src/views/aws-s3.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api.js */ \"./src/views/api.js\");\n/* harmony import */ var _utils_useful_functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/useful-functions.js */ \"./src/views/utils/useful-functions.js\");\n\r\n\r\n\r\n\r\n\r\nconst submitBtn = document.querySelector(\"#category-button\");\r\nconst categoryInput = document.querySelector(\"#categoryInput\");\r\nconst nameInput = document.querySelector(\"#nameInput\");\r\nconst brandInput = document.querySelector(\"#brandInput\");\r\nconst imgInput = document.querySelector(\"#imgInput\");\r\nconst sizeInput = document.querySelector(\"#sizeInput\");\r\nconst priceInput = document.querySelector(\"#priceInput\");\r\nconst descriptionInput = document.querySelector(\"#descriptionInput\");\r\nconst colorInput = document.querySelector(\"#colorInput\");\r\n\r\n(0,_utils_useful_functions_js__WEBPACK_IMPORTED_MODULE_2__.checkLogin)();\r\naddAllEvents();\r\n\r\nfunction addAllEvents() {\r\n  // imgInput.addEventListener(\"change\", handleImageUpload);\r\n  submitBtn.addEventListener(\"click\", handleSubmit);\r\n}\r\nasync function handleSubmit(e) {\r\n  e.preventDefault();\r\n\r\n  const category = categoryInput.value;\r\n  const brand = brandInput.value;\r\n  const name = nameInput.value;\r\n  const price = priceInput.value;\r\n  const image = imgInput.files[0];\r\n  const description = descriptionInput.value;\r\n  const color = getColorArray(colorInput.value);\r\n  const size = getSizeArray(sizeInput.value);\r\n\r\n  if (\r\n    !category ||\r\n    !brand ||\r\n    !name ||\r\n    !price ||\r\n    !description ||\r\n    !color ||\r\n    !size\r\n  ) {\r\n    return alert(\"입력하지 않은 값이 있습니다.\");\r\n  }\r\n\r\n  if (image.size > 3e6) {\r\n    return alert(\"사진은 최대 2.5MB 크기까지 가능합니다.\");\r\n  }\r\n\r\n  if (image.size > 3e6) {\r\n    return alert(\"사진은 최대 2.5MB 크기까지 가능합니다.\");\r\n  }\r\n\r\n  try {\r\n    const imageKey = await (0,_aws_s3_js__WEBPACK_IMPORTED_MODULE_0__.addImageToS3)(imgInput, category);\r\n    const img = await (0,_aws_s3_js__WEBPACK_IMPORTED_MODULE_0__.getImageUrl)(imageKey);\r\n    const data = {\r\n      category,\r\n      brand,\r\n      name,\r\n      price,\r\n      img,\r\n      description,\r\n      color,\r\n      size,\r\n    };\r\n\r\n    //경로 재설정 필요함 어디로 보낼지를 정해야됨!\r\n    const result = await _api_js__WEBPACK_IMPORTED_MODULE_1__.post(\"/api/products\", data);\r\n    if (result) {\r\n      alert(`${result.name} 상품이 성공적으로 등록되었습니다!`);\r\n      window.location.href = \"/\";\r\n    }\r\n  } catch (err) {\r\n    console.log(err.stack);\r\n    alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);\r\n  }\r\n}\r\n\r\n// 배열 처리함수\r\nfunction getSizeArray(value) {\r\n  const sizeArray = value.split(\",\");\r\n\r\n  const sizes = [];\r\n\r\n  for (let i = 0; i < sizeArray.length; i++) {\r\n    const size = sizeArray[i];\r\n    if (sizeArray[i] !== \" \") {\r\n      sizes.push(size);\r\n    }\r\n  }\r\n  return sizes;\r\n}\r\n// 색상 처리함수\r\nfunction getColorArray(value) {\r\n  const colorArray = value.split(\",\");\r\n\r\n  const colors = [];\r\n\r\n  for (let i = 0; i < colorArray.length; i++) {\r\n    const color = colorArray[i];\r\n    if (colorArray[i] !== \" \") {\r\n      colors.push(color);\r\n    }\r\n  }\r\n  return colors;\r\n}\r\n\n\n//# sourceURL=webpack://shopping-mall/./src/views/admin/addProduct/addProduct.js?");

/***/ }),

/***/ "./src/views/api.js":
/*!**************************!*\
  !*** ./src/views/api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"delete\": () => (/* binding */ del),\n/* harmony export */   \"get\": () => (/* binding */ get),\n/* harmony export */   \"patch\": () => (/* binding */ patch),\n/* harmony export */   \"post\": () => (/* binding */ post)\n/* harmony export */ });\n// api 로 GET 요청 (/endpoint/params 형태로 요청함)\r\nasync function get(endpoint, params = \"\") {\r\n  const apiUrl = `${endpoint}/${params}`;\r\n  console.log(`%cGET 요청: ${apiUrl} `, \"color: #a25cd1;\");\r\n\r\n  const res = await fetch(apiUrl, {\r\n    // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.\r\n    headers: {\r\n      Authorization: `Bearer ${sessionStorage.getItem(\"token\")}`,\r\n    },\r\n  });\r\n\r\n  // 응답 코드가 4XX 계열일 때 (400, 403 등)\r\n  if (!res.ok) {\r\n    const errorContent = await res.json();\r\n    const { reason } = errorContent;\r\n\r\n    throw new Error(reason);\r\n  }\r\n\r\n  const result = await res.json();\r\n\r\n  return result;\r\n}\r\n\r\n// api 로 POST 요청 (/endpoint 로, JSON 데이터 형태로 요청함)\r\nasync function post(endpoint, data) {\r\n  const apiUrl = endpoint;\r\n  // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.\r\n  // 예시: {name: \"Kim\"} => {\"name\": \"Kim\"}\r\n  const bodyData = JSON.stringify(data);\r\n  console.log(`%cPOST 요청: ${apiUrl}`, \"color: #296aba;\");\r\n  console.log(`%cPOST 요청 데이터: ${bodyData}`, \"color: #296aba;\");\r\n\r\n  const res = await fetch(apiUrl, {\r\n    method: \"POST\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n      Authorization: `Bearer ${sessionStorage.getItem(\"token\")}`,\r\n    },\r\n    body: bodyData,\r\n  });\r\n\r\n  // 응답 코드가 4XX 계열일 때 (400, 403 등)\r\n  if (!res.ok) {\r\n    const errorContent = await res.json();\r\n    const { reason } = errorContent;\r\n\r\n    throw new Error(reason);\r\n  }\r\n\r\n  const result = await res.json();\r\n\r\n  return result;\r\n}\r\n\r\n\r\n\r\n// api 로 PATCH 요청 (/endpoint/params 로, JSON 데이터 형태로 요청함)\r\nasync function patch(endpoint, params = \"\", data) {\r\n  const apiUrl = `${endpoint}/${params}`;\r\n\r\n  // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.\r\n  // 예시: {name: \"Kim\"} => {\"name\": \"Kim\"}\r\n  const bodyData = JSON.stringify(data);\r\n  console.log(`%cPATCH 요청: ${apiUrl}`, \"color: #059c4b;\");\r\n  console.log(`%cPATCH 요청 데이터: ${bodyData}`, \"color: #059c4b;\");\r\n\r\n  const res = await fetch(apiUrl, {\r\n    method: \"PATCH\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n      Authorization: `Bearer ${sessionStorage.getItem(\"token\")}`,\r\n    },\r\n    body: bodyData,\r\n  });\r\n\r\n  // 응답 코드가 4XX 계열일 때 (400, 403 등)\r\n  if (!res.ok) {\r\n    const errorContent = await res.json();\r\n    const { reason } = errorContent;\r\n\r\n    throw new Error(reason);\r\n  }\r\n\r\n  const result = await res.json();\r\n\r\n  return result;\r\n}\r\n\r\n// 아래 함수명에 관해, delete 단어는 자바스크립트의 reserved 단어이기에,\r\n// 여기서는 우선 delete 대신 del로 쓰고 아래 export 시에 delete로 alias 함.\r\nasync function del(endpoint, params = \"\", data = {}) {\r\n  const apiUrl = `${endpoint}/${params}`;\r\n  const bodyData = JSON.stringify(data);\r\n\r\n  console.log(`DELETE 요청 ${apiUrl}`);\r\n  console.log(`DELETE 요청 데이터: ${bodyData}`);\r\n\r\n  const res = await fetch(apiUrl, {\r\n    method: \"DELETE\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n      Authorization: `Bearer ${sessionStorage.getItem(\"token\")}`,\r\n    },\r\n    body: bodyData,\r\n  });\r\n\r\n  // 응답 코드가 4XX 계열일 때 (400, 403 등)\r\n  if (!res.ok) {\r\n    const errorContent = await res.json();\r\n    const { reason } = errorContent;\r\n\r\n    throw new Error(reason);\r\n  }\r\n\r\n  const result = await res.json();\r\n\r\n  return result;\r\n}\r\n\r\n// 아래처럼 export하면, import * as Api 로 할 시 Api.get, Api.post 등으로 쓸 수 있음.\r\n\r\n\n\n//# sourceURL=webpack://shopping-mall/./src/views/api.js?");

/***/ }),

/***/ "./src/views/aws-s3.js":
/*!*****************************!*\
  !*** ./src/views/aws-s3.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addImageToS3\": () => (/* binding */ addImageToS3),\n/* harmony export */   \"getImageUrl\": () => (/* binding */ getImageUrl)\n/* harmony export */ });\n/* harmony import */ var _utils_useful_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/useful-functions.js */ \"./src/views/utils/useful-functions.js\");\n\r\n// aws-s3 사이트에서의 설정값들\r\nconst s3BucketName = \"celev-bucket\";\r\nconst bucketRegion = \"ap-northeast-2\"; // 한국은 항상 ap-northeast-2임.\r\nconst IdentityPoolId = \"ap-northeast-2:68d1e8c4-e9f1-41f1-914a-87ac70f7171f\";\r\n\r\n// aws 공식문서 그대로 가져옴\r\nAWS.config.update({\r\n  region: bucketRegion,\r\n  credentials: new AWS.CognitoIdentityCredentials({\r\n    IdentityPoolId: IdentityPoolId,\r\n  }),\r\n});\r\n\r\n// aws 공식문서 그대로 가져옴\r\nconst s3 = new AWS.S3({\r\n  apiVersion: \"2006-03-01\",\r\n  params: { Bucket: s3BucketName, Expires: 1200 },\r\n});\r\n\r\n// 아마존 S3에 사진파일 올리는 함수\r\n// fileInputElement: input 요소\r\n// album: S3에서 업로드된 사진파일이 속할 폴더 이름.\r\nasync function addImageToS3(fileInputElement, album) {\r\n  // 파일 input 요소에, 사용자가 올린 파일이 있는지 여부 확인\r\n  const files = fileInputElement.files;\r\n  if (!files.length) {\r\n    throw new Error(\"사진 파일을 업로드해 주세요.\");\r\n  }\r\n\r\n  // 파일 input 요소에서 사진파일 추출 등 AWS S3로의 업로드 준비\r\n  const file = files[0];\r\n  // 유니크한 사진파일 주소를 만들 수 있게 함.\r\n  const fileName = (0,_utils_useful_functions_js__WEBPACK_IMPORTED_MODULE_0__.randomId)() + \"_\" + file.name;\r\n  const albumPhotosKey = encodeURIComponent(album) + \"/\";\r\n  const photoKey = albumPhotosKey + fileName;\r\n\r\n  const upload = new AWS.S3.ManagedUpload({\r\n    params: {\r\n      Bucket: s3BucketName,\r\n      Key: photoKey,\r\n      Body: file,\r\n    },\r\n  });\r\n\r\n  // AWS S3에 업로드 진행 -> 성공 시, 업로드된 파일 주소\r\n  // (정확히는, 주소의 뒷부분만 - 폴더/파일이름 만)를 반환\r\n  try {\r\n    const uploadedFile = await upload.promise();\r\n\r\n    const fileKey = uploadedFile.Key;\r\n    console.log(\r\n      `AWS S3에 정상적으로 사진이 업로드되었습니다.\\n파일 위치: ${fileKey}`\r\n    );\r\n\r\n    return fileKey;\r\n  } catch (err) {\r\n    throw new Error(\r\n      `S3에 업로드하는 과정에서 에러가 발생하였습니다.\\n${err.message}`\r\n    );\r\n  }\r\n}\r\n\r\n// 업로드한 사진을 바로 링크를 통해 보고 싶어도, 그냥 url로 접근하면,\r\n// 권한 인증이 없어서 사진 열람이 불가함.\r\n// 아래 함수로, 인증코드가 추가된 특별한 url을 만든 후, img 요소의 src로 삽입해야 함.\r\nfunction getImageUrl(imageKey) {\r\n  const imageUrl = new Promise((resolve) => {\r\n    const params = {\r\n      Bucket: s3BucketName,\r\n      Key: imageKey,\r\n      Expires: 604800,\r\n    };\r\n\r\n    s3.getSignedUrl(\"getObject\", params, (_, url) => {\r\n      resolve(url);\r\n    });\r\n  });\r\n\r\n  return imageUrl;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://shopping-mall/./src/views/aws-s3.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/views/admin/addProduct/addProduct.js");
/******/ 	
/******/ })()
;