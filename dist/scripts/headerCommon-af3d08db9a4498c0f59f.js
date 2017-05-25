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
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function (designWidth, rem2px) {
	var win = window;
	var doc = win.document;
	var docEl = doc.documentElement;
	var metaEl = doc.querySelector('meta[name="viewport"]');
	var dpr = 0;
	var scale = 0;
	var tid;
	if (!dpr && !scale) {
		var devicePixelRatio = win.devicePixelRatio;
		if (win.navigator.appVersion.match(/iphone/gi)) {
			if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
				dpr = 3;
			} else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
				dpr = 2;
			} else {
				dpr = 1;
			}
		} else {
			dpr = 1;
		}
		scale = 1 / dpr;
	}
	docEl.setAttribute('data-dpr', dpr);
	if (!metaEl) {
		metaEl = doc.createElement('meta');
		metaEl.setAttribute('name', 'viewport');
		metaEl.setAttribute('content', 'width=device-width,initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');

		if (docEl.firstElementChild) {
			docEl.firstElementChild.appendChild(metaEl);
		} else {
			var wrap = doc.createElement('div');
			wrap.appendChild(metaEl);
			doc.write(wrap.innerHTML);
		}
	} else {
		metaEl.setAttribute('name', 'viewport');
		metaEl.setAttribute('content', 'width=device-width,initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
	}

	function refreshRem(_designWidth, _rem2px) {
		var width = docEl.getBoundingClientRect().width;
		var d = window.document.createElement('div');
		d.style.width = '1rem';
		d.style.display = "none";
		docEl.firstElementChild.appendChild(d);
		var defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'));
		// d.remove();
		var portrait = "@media screen and (width: " + width + "px) {html{font-size:" + width / (_designWidth / _rem2px) / defaultFontSize * 100 + "%;}}";
		var dpStyleEl = doc.getElementById('dpAdapt');
		if (!dpStyleEl) {
			dpStyleEl = document.createElement('style');
			dpStyleEl.id = 'dpAdapt';
			dpStyleEl.innerHTML = portrait;
			docEl.firstElementChild.appendChild(dpStyleEl);
		} else {
			dpStyleEl.innerHTML = portrait;
		}
		// 由于 height 的响应速度比较慢，所以在加个延时处理横屏的情况。
		setTimeout(function () {
			var height = docEl.getBoundingClientRect().height;
			var landscape = "@media screen and (width: " + height + "px) {html{font-size:" + height / (_designWidth / _rem2px) / defaultFontSize * 100 + "%;}}";
			var dlStyleEl = doc.getElementById('dlAdapt');
			if (!dlStyleEl) {
				dlStyleEl = document.createElement('style');
				dlStyleEl.id = 'dlAdapt';
				dlStyleEl.innerHTML = landscape;
				docEl.firstElementChild.appendChild(dlStyleEl);
			} else {
				dlStyleEl.innerHTML = landscape;
			}
		}, 500);
	}
	// 延时，让浏览器处理完viewport造成的影响，然后再计算root font-size。
	setTimeout(function () {
		refreshRem(designWidth, rem2px);
	}, 1);
})(640, 100);

/***/ })

/******/ });