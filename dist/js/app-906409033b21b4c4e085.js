/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Cannot find module 'node-sass'\n    at Function.Module._resolveFilename (module.js:469:15)\n    at Function.Module._load (module.js:417:25)\n    at Module.require (module.js:497:17)\n    at require (internal/module.js:20:19)\n    at Object.<anonymous> (F:\\lyndi\\node_modules\\sass-loader\\lib\\loader.js:3:14)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)\n    at Function.Module._load (module.js:438:3)\n    at Module.require (module.js:497:17)\n    at require (internal/module.js:20:19)\n    at loadLoader (F:\\lyndi\\node_modules\\loader-runner\\lib\\loadLoader.js:13:17)\n    at iteratePitchingLoaders (F:\\lyndi\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at runLoaders (F:\\lyndi\\node_modules\\loader-runner\\lib\\LoaderRunner.js:362:2)\n    at NormalModule.doBuild (F:\\lyndi\\node_modules\\webpack\\lib\\NormalModule.js:179:3)\n    at NormalModule.build (F:\\lyndi\\node_modules\\webpack\\lib\\NormalModule.js:268:15)\n    at Compilation.buildModule (F:\\lyndi\\node_modules\\webpack\\lib\\Compilation.js:146:10)\n    at moduleFactory.create (F:\\lyndi\\node_modules\\webpack\\lib\\Compilation.js:433:9)\n    at factory (F:\\lyndi\\node_modules\\webpack\\lib\\NormalModuleFactory.js:253:5)\n    at applyPluginsAsyncWaterfall (F:\\lyndi\\node_modules\\webpack\\lib\\NormalModuleFactory.js:99:14)\n    at F:\\lyndi\\node_modules\\tapable\\lib\\Tapable.js:204:11\n    at NormalModuleFactory.params.normalModuleFactory.plugin (F:\\lyndi\\node_modules\\webpack\\lib\\CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (F:\\lyndi\\node_modules\\tapable\\lib\\Tapable.js:208:13)\n    at resolver (F:\\lyndi\\node_modules\\webpack\\lib\\NormalModuleFactory.js:74:11)\n    at process.nextTick (F:\\lyndi\\node_modules\\webpack\\lib\\NormalModuleFactory.js:205:8)\n    at _combinedTickCallback (internal/process/next_tick.js:73:7)\n    at process._tickCallback (internal/process/next_tick.js:104:9)\n    at runLoaders (F:\\lyndi\\node_modules\\webpack\\lib\\NormalModule.js:192:19)\n    at F:\\lyndi\\node_modules\\loader-runner\\lib\\LoaderRunner.js:364:11\n    at F:\\lyndi\\node_modules\\loader-runner\\lib\\LoaderRunner.js:170:18\n    at loadLoader (F:\\lyndi\\node_modules\\loader-runner\\lib\\loadLoader.js:27:11)\n    at iteratePitchingLoaders (F:\\lyndi\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at runLoaders (F:\\lyndi\\node_modules\\loader-runner\\lib\\LoaderRunner.js:362:2)\n    at NormalModule.doBuild (F:\\lyndi\\node_modules\\webpack\\lib\\NormalModule.js:179:3)\n    at NormalModule.build (F:\\lyndi\\node_modules\\webpack\\lib\\NormalModule.js:268:15)\n    at Compilation.buildModule (F:\\lyndi\\node_modules\\webpack\\lib\\Compilation.js:146:10)\n    at moduleFactory.create (F:\\lyndi\\node_modules\\webpack\\lib\\Compilation.js:433:9)\n    at factory (F:\\lyndi\\node_modules\\webpack\\lib\\NormalModuleFactory.js:253:5)\n    at applyPluginsAsyncWaterfall (F:\\lyndi\\node_modules\\webpack\\lib\\NormalModuleFactory.js:99:14)\n    at F:\\lyndi\\node_modules\\tapable\\lib\\Tapable.js:204:11\n    at NormalModuleFactory.params.normalModuleFactory.plugin (F:\\lyndi\\node_modules\\webpack\\lib\\CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (F:\\lyndi\\node_modules\\tapable\\lib\\Tapable.js:208:13)\n    at resolver (F:\\lyndi\\node_modules\\webpack\\lib\\NormalModuleFactory.js:74:11)\n    at process.nextTick (F:\\lyndi\\node_modules\\webpack\\lib\\NormalModuleFactory.js:205:8)\n    at _combinedTickCallback (internal/process/next_tick.js:73:7)\n    at process._tickCallback (internal/process/next_tick.js:104:9)");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// import tpl from './layer.html';
function layer(){
	return{
		name:'layer',
		tpl:tpl
	};
}
/* harmony default export */ __webpack_exports__["a"] = (layer);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_styles_common_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_styles_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_styles_common_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_styles_one_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_styles_one_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_styles_one_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layer_layer_js__ = __webpack_require__(3);



const App=function(){
	const NUM=1;
	alert(NUM);
	console.log(__WEBPACK_IMPORTED_MODULE_2__components_layer_layer_js__["a" /* default */]);
}
new App();

/***/ })
/******/ ]);