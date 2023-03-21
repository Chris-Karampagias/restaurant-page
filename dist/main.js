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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHomePage)\n/* harmony export */ });\nfunction createHomePage() {\n  const body = document.querySelector(\"body\");\n  body.classList.remove(\"body-menu\");\n  body.classList.add(\"body-home\");\n  const content = document.getElementById(\"content\");\n  const homeContainer = document.createElement(\"div\");\n  homeContainer.classList.add(\"home-container\");\n  const interior = document.createElement(\"img\");\n  interior.setAttribute(\"src\", \"../src/assets/images/home-image.jpg\");\n  interior.setAttribute(\"alt\", `A sketch of the restaurant's interior`);\n  interior.classList.add(\"home-image\");\n  const para = document.createElement(\"p\");\n  para.classList.add(\"welcome\");\n  para.textContent = `Welcome to our 2d Restaurant! Have a look around and don't forget to\n  check out our delicious homemade dishes!`;\n  homeContainer.append(interior, para);\n  content.appendChild(homeContainer);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n\n(0,_navbar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* menuPage();\nconst menuButton = document.querySelector(\".home-button\");\nconst content = document.getElementById(\"content\");\nconst homeWrapper = document.querySelector(\"menu-wrapper\");\nmenuButton.addEventListener(\"click\", () => {\n  content.removeChild(homeWrapper);\n  homePage();\n}); */\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenu)\n/* harmony export */ });\n/* eslint-disable no-case-declarations */\n/* eslint-disable default-case */\nfunction createMenu() {\n  const body = document.querySelector(\"body\");\n  body.classList.add(\"body-menu\");\n  const content = document.getElementById(\"content\");\n  const menuWrapper = document.createElement(\"div\");\n  menuWrapper.classList.add(\"menu-wrapper\");\n  const menuContainer = document.createElement(\"div\");\n  menuContainer.classList.add(\"menu-container\");\n  const menuTitle = document.createElement(\"p\");\n  menuTitle.textContent = \"Our Menu\";\n  menuContainer.appendChild(menuTitle);\n  for (let i = 0; i < 3; i++) {\n    switch (i) {\n      case 0:\n        const div1 = document.createElement(\"div\");\n        div1.classList.add(\"starter\");\n        const title1 = document.createElement(\"p\");\n        title1.textContent = \"STARTER\";\n        const egg = document.createElement(\"p\");\n        egg.textContent = \"Scotch Egg-----------------$2.00\";\n        const pickles = document.createElement(\"p\");\n        pickles.textContent = \"Fried Pickles---------------$3.00\";\n        const dip = document.createElement(\"p\");\n        dip.textContent = \"Bacon Artichoke Dip------$4.00\";\n        div1.append(title1, egg, pickles, dip);\n        menuContainer.appendChild(div1);\n        break;\n      case 1:\n        const div2 = document.createElement(\"div\");\n        div2.classList.add(\"soups\");\n        const title2 = document.createElement(\"p\");\n        title2.textContent = \"SOUPS\";\n        const soupDay = document.createElement(\"p\");\n        soupDay.textContent = \"Soup of the day------------$4.00\";\n        const onion = document.createElement(\"p\");\n        onion.textContent = \"French onion---------------$5.25\";\n        const potato = document.createElement(\"p\");\n        potato.textContent = \"Potato Leek----------------$3.75\";\n        div2.append(title2, soupDay, onion, potato);\n        menuContainer.appendChild(div2);\n        break;\n      case 2:\n        const div3 = document.createElement(\"div\");\n        div3.classList.add(\"salads\");\n        const title3 = document.createElement(\"p\");\n        title3.textContent = \"SALADS\";\n        const special = document.createElement(\"p\");\n        special.textContent = \"House special salad--------$1.75\";\n        const ceasar = document.createElement(\"p\");\n        ceasar.textContent = \"Caesar salad---------------$2.45\";\n        div3.append(title3, special, ceasar);\n        menuContainer.appendChild(div3);\n        break;\n    }\n  }\n  menuWrapper.appendChild(menuContainer);\n  content.appendChild(menuWrapper);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createNavbar)\n/* harmony export */ });\n/* eslint-disable default-case */\nfunction createNavbar() {\n  const content = document.getElementById(\"content\");\n  const navbar = document.createElement(\"div\");\n  const logo = document.createElement(\"img\");\n  navbar.classList.add(\"navbar\");\n  logo.setAttribute(\"src\", \"../src/assets/images/2d-logo.png\");\n  logo.setAttribute(\"alt\", `The restaurant's logo`);\n  logo.classList.add(\"logo-image\");\n  navbar.appendChild(logo);\n  for (let i = 0; i < 3; i++) {\n    const button = document.createElement(\"button\");\n    switch (i) {\n      case 0:\n        button.classList.add(\"home-button\");\n        button.textContent = \"Home\";\n        navbar.appendChild(button);\n        break;\n      case 1:\n        button.classList.add(\"menu-button\");\n        button.textContent = \"Menu\";\n        navbar.appendChild(button);\n        break;\n      case 2:\n        button.classList.add(\"contact-button\");\n        button.textContent = \"Contact Us\";\n        navbar.appendChild(button);\n        break;\n    }\n  }\n  content.appendChild(navbar);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/navbar.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;