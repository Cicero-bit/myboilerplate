/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_CPFutil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/CPFutil.js */ \"./src/modules/CPFutil.js\");\n\r\n\r\nconst coisacpf = '206.846.257.50'\r\nlet valido = _modules_CPFutil_js__WEBPACK_IMPORTED_MODULE_0__.validate(coisacpf);\r\nconsole.log(valido);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3BmIGZyb20gJy4vbW9kdWxlcy9DUEZ1dGlsLmpzJztcclxuXHJcbmNvbnN0IGNvaXNhY3BmID0gJzIwNi44NDYuMjU3LjUwJ1xyXG5sZXQgdmFsaWRvID0gY3BmLnZhbGlkYXRlKGNvaXNhY3BmKTtcclxuY29uc29sZS5sb2codmFsaWRvKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

/***/ "./src/modules/CPFutil.js":
/*!********************************!*\
  !*** ./src/modules/CPFutil.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generate: () => (/* binding */ generate),\n/* harmony export */   validate: () => (/* binding */ validate)\n/* harmony export */ });\n//validates the brazilian CPF\r\nfunction validate(cpf){\r\n    const _cpf = Array.from(cpf.replace(/\\D+/g, ''))\r\n    if(typeof cpf === 'undefined' || _cpf.length !== 11 || _cpf.every((v, i, a) => {return v === a[0]}) || typeof cpf !== 'string') return false;\r\n    function calculateVerifierDigit(numarray){ \r\n        let sum = 0;\r\n        for(let i = 0; i < numarray.length; i++){\r\n            sum += Number(numarray[i]) * (numarray.length + 1 - i);\r\n        };\r\n        return (11 - (sum % 11) > 9) ? 0 : 11 - (sum % 11) \r\n    };\r\n\r\n    return (calculateVerifierDigit(_cpf.slice(0,9)) === Number(_cpf[9]) && calculateVerifierDigit(_cpf.slice(0,10)) === Number(_cpf[10]))\r\n};\r\n\r\nfunction generate(){\r\n    let base = (min = 100000000, max = 999999999) => {\r\n        return String(Math.floor(Math.random() * (max - min) + min))\r\n    }\r\n    let _cpf = Array.from(base());\r\n    function returnVerifierDigit(base){ \r\n        let sum = 0;\r\n        for(let i = 0; i < base.length; i++){\r\n            sum += Number(base[i]) * (base.length + 1 - i);\r\n        };\r\n        return (11 - (sum % 11) > 9) ? 0 : 11 - (sum % 11);\r\n    }; \r\n    _cpf.push(String(returnVerifierDigit(_cpf)));\r\n    _cpf.push(String(returnVerifierDigit(_cpf)));\r\n    return _cpf;\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9DUEZ1dGlsLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL0NQRnV0aWwuanM/Mjg3NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL3ZhbGlkYXRlcyB0aGUgYnJhemlsaWFuIENQRlxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGUoY3BmKXtcclxuICAgIGNvbnN0IF9jcGYgPSBBcnJheS5mcm9tKGNwZi5yZXBsYWNlKC9cXEQrL2csICcnKSlcclxuICAgIGlmKHR5cGVvZiBjcGYgPT09ICd1bmRlZmluZWQnIHx8IF9jcGYubGVuZ3RoICE9PSAxMSB8fCBfY3BmLmV2ZXJ5KCh2LCBpLCBhKSA9PiB7cmV0dXJuIHYgPT09IGFbMF19KSB8fCB0eXBlb2YgY3BmICE9PSAnc3RyaW5nJykgcmV0dXJuIGZhbHNlO1xyXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlVmVyaWZpZXJEaWdpdChudW1hcnJheSl7IFxyXG4gICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBudW1hcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHN1bSArPSBOdW1iZXIobnVtYXJyYXlbaV0pICogKG51bWFycmF5Lmxlbmd0aCArIDEgLSBpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiAoMTEgLSAoc3VtICUgMTEpID4gOSkgPyAwIDogMTEgLSAoc3VtICUgMTEpIFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKGNhbGN1bGF0ZVZlcmlmaWVyRGlnaXQoX2NwZi5zbGljZSgwLDkpKSA9PT0gTnVtYmVyKF9jcGZbOV0pICYmIGNhbGN1bGF0ZVZlcmlmaWVyRGlnaXQoX2NwZi5zbGljZSgwLDEwKSkgPT09IE51bWJlcihfY3BmWzEwXSkpXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGUoKXtcclxuICAgIGxldCBiYXNlID0gKG1pbiA9IDEwMDAwMDAwMCwgbWF4ID0gOTk5OTk5OTk5KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbikpXHJcbiAgICB9XHJcbiAgICBsZXQgX2NwZiA9IEFycmF5LmZyb20oYmFzZSgpKTtcclxuICAgIGZ1bmN0aW9uIHJldHVyblZlcmlmaWVyRGlnaXQoYmFzZSl7IFxyXG4gICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBiYXNlLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgc3VtICs9IE51bWJlcihiYXNlW2ldKSAqIChiYXNlLmxlbmd0aCArIDEgLSBpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiAoMTEgLSAoc3VtICUgMTEpID4gOSkgPyAwIDogMTEgLSAoc3VtICUgMTEpO1xyXG4gICAgfTsgXHJcbiAgICBfY3BmLnB1c2goU3RyaW5nKHJldHVyblZlcmlmaWVyRGlnaXQoX2NwZikpKTtcclxuICAgIF9jcGYucHVzaChTdHJpbmcocmV0dXJuVmVyaWZpZXJEaWdpdChfY3BmKSkpO1xyXG4gICAgcmV0dXJuIF9jcGY7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/CPFutil.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;