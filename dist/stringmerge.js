/*!
 * The MIT License
 * 
 * Copyright (c) 2017 Tyler Schultz
 * https://github.com/artisin/stringmerge
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */


/* eslint-disable */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("core-js/modules/es6.typed.array-buffer"), require("core-js/modules/es6.typed.int8-array"), require("core-js/modules/es6.typed.uint8-array"), require("core-js/modules/es6.typed.uint8-clamped-array"), require("core-js/modules/es6.typed.int16-array"), require("core-js/modules/es6.typed.uint16-array"), require("core-js/modules/es6.typed.int32-array"), require("core-js/modules/es6.typed.uint32-array"), require("core-js/modules/es6.typed.float32-array"), require("core-js/modules/es6.typed.float64-array"), require("core-js/modules/es6.map"), require("core-js/modules/es6.set"), require("core-js/modules/es6.weak-map"), require("core-js/modules/es6.weak-set"), require("core-js/modules/es6.reflect.apply"), require("core-js/modules/es6.reflect.construct"), require("core-js/modules/es6.reflect.define-property"), require("core-js/modules/es6.reflect.delete-property"), require("core-js/modules/es6.reflect.get"), require("core-js/modules/es6.reflect.get-own-property-descriptor"), require("core-js/modules/es6.reflect.get-prototype-of"), require("core-js/modules/es6.reflect.has"), require("core-js/modules/es6.reflect.is-extensible"), require("core-js/modules/es6.reflect.own-keys"), require("core-js/modules/es6.reflect.prevent-extensions"), require("core-js/modules/es6.reflect.set"), require("core-js/modules/es6.reflect.set-prototype-of"), require("core-js/modules/es6.promise"), require("core-js/modules/es6.symbol"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.is"), require("core-js/modules/es6.object.set-prototype-of"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.string.raw"), require("core-js/modules/es6.string.from-code-point"), require("core-js/modules/es6.string.code-point-at"), require("core-js/modules/es6.string.repeat"), require("core-js/modules/es6.string.starts-with"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.includes"), require("core-js/modules/es6.regexp.flags"), require("core-js/modules/es6.regexp.match"), require("core-js/modules/es6.regexp.replace"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.search"), require("core-js/modules/es6.array.from"), require("core-js/modules/es6.array.of"), require("core-js/modules/es6.array.copy-within"), require("core-js/modules/es6.array.find"), require("core-js/modules/es6.array.find-index"), require("core-js/modules/es6.array.fill"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.number.is-finite"), require("core-js/modules/es6.number.is-integer"), require("core-js/modules/es6.number.is-safe-integer"), require("core-js/modules/es6.number.is-nan"), require("core-js/modules/es6.number.epsilon"), require("core-js/modules/es6.number.min-safe-integer"), require("core-js/modules/es6.number.max-safe-integer"), require("core-js/modules/es6.math.acosh"), require("core-js/modules/es6.math.asinh"), require("core-js/modules/es6.math.atanh"), require("core-js/modules/es6.math.cbrt"), require("core-js/modules/es6.math.clz32"), require("core-js/modules/es6.math.cosh"), require("core-js/modules/es6.math.expm1"), require("core-js/modules/es6.math.fround"), require("core-js/modules/es6.math.hypot"), require("core-js/modules/es6.math.imul"), require("core-js/modules/es6.math.log1p"), require("core-js/modules/es6.math.log10"), require("core-js/modules/es6.math.log2"), require("core-js/modules/es6.math.sign"), require("core-js/modules/es6.math.sinh"), require("core-js/modules/es6.math.tanh"), require("core-js/modules/es6.math.trunc"), require("core-js/modules/es7.array.includes"), require("core-js/modules/es7.object.values"), require("core-js/modules/es7.object.entries"), require("core-js/modules/es7.object.get-own-property-descriptors"), require("core-js/modules/es7.string.pad-start"), require("core-js/modules/es7.string.pad-end"), require("core-js/modules/web.timers"), require("core-js/modules/web.immediate"), require("core-js/modules/web.dom.iterable"));
	else if(typeof define === 'function' && define.amd)
		define(["core-js/modules/es6.typed.array-buffer", "core-js/modules/es6.typed.int8-array", "core-js/modules/es6.typed.uint8-array", "core-js/modules/es6.typed.uint8-clamped-array", "core-js/modules/es6.typed.int16-array", "core-js/modules/es6.typed.uint16-array", "core-js/modules/es6.typed.int32-array", "core-js/modules/es6.typed.uint32-array", "core-js/modules/es6.typed.float32-array", "core-js/modules/es6.typed.float64-array", "core-js/modules/es6.map", "core-js/modules/es6.set", "core-js/modules/es6.weak-map", "core-js/modules/es6.weak-set", "core-js/modules/es6.reflect.apply", "core-js/modules/es6.reflect.construct", "core-js/modules/es6.reflect.define-property", "core-js/modules/es6.reflect.delete-property", "core-js/modules/es6.reflect.get", "core-js/modules/es6.reflect.get-own-property-descriptor", "core-js/modules/es6.reflect.get-prototype-of", "core-js/modules/es6.reflect.has", "core-js/modules/es6.reflect.is-extensible", "core-js/modules/es6.reflect.own-keys", "core-js/modules/es6.reflect.prevent-extensions", "core-js/modules/es6.reflect.set", "core-js/modules/es6.reflect.set-prototype-of", "core-js/modules/es6.promise", "core-js/modules/es6.symbol", "core-js/modules/es6.object.assign", "core-js/modules/es6.object.is", "core-js/modules/es6.object.set-prototype-of", "core-js/modules/es6.function.name", "core-js/modules/es6.string.raw", "core-js/modules/es6.string.from-code-point", "core-js/modules/es6.string.code-point-at", "core-js/modules/es6.string.repeat", "core-js/modules/es6.string.starts-with", "core-js/modules/es6.string.ends-with", "core-js/modules/es6.string.includes", "core-js/modules/es6.regexp.flags", "core-js/modules/es6.regexp.match", "core-js/modules/es6.regexp.replace", "core-js/modules/es6.regexp.split", "core-js/modules/es6.regexp.search", "core-js/modules/es6.array.from", "core-js/modules/es6.array.of", "core-js/modules/es6.array.copy-within", "core-js/modules/es6.array.find", "core-js/modules/es6.array.find-index", "core-js/modules/es6.array.fill", "core-js/modules/es6.array.iterator", "core-js/modules/es6.number.is-finite", "core-js/modules/es6.number.is-integer", "core-js/modules/es6.number.is-safe-integer", "core-js/modules/es6.number.is-nan", "core-js/modules/es6.number.epsilon", "core-js/modules/es6.number.min-safe-integer", "core-js/modules/es6.number.max-safe-integer", "core-js/modules/es6.math.acosh", "core-js/modules/es6.math.asinh", "core-js/modules/es6.math.atanh", "core-js/modules/es6.math.cbrt", "core-js/modules/es6.math.clz32", "core-js/modules/es6.math.cosh", "core-js/modules/es6.math.expm1", "core-js/modules/es6.math.fround", "core-js/modules/es6.math.hypot", "core-js/modules/es6.math.imul", "core-js/modules/es6.math.log1p", "core-js/modules/es6.math.log10", "core-js/modules/es6.math.log2", "core-js/modules/es6.math.sign", "core-js/modules/es6.math.sinh", "core-js/modules/es6.math.tanh", "core-js/modules/es6.math.trunc", "core-js/modules/es7.array.includes", "core-js/modules/es7.object.values", "core-js/modules/es7.object.entries", "core-js/modules/es7.object.get-own-property-descriptors", "core-js/modules/es7.string.pad-start", "core-js/modules/es7.string.pad-end", "core-js/modules/web.timers", "core-js/modules/web.immediate", "core-js/modules/web.dom.iterable"], factory);
	else if(typeof exports === 'object')
		exports["stringmerge"] = factory(require("core-js/modules/es6.typed.array-buffer"), require("core-js/modules/es6.typed.int8-array"), require("core-js/modules/es6.typed.uint8-array"), require("core-js/modules/es6.typed.uint8-clamped-array"), require("core-js/modules/es6.typed.int16-array"), require("core-js/modules/es6.typed.uint16-array"), require("core-js/modules/es6.typed.int32-array"), require("core-js/modules/es6.typed.uint32-array"), require("core-js/modules/es6.typed.float32-array"), require("core-js/modules/es6.typed.float64-array"), require("core-js/modules/es6.map"), require("core-js/modules/es6.set"), require("core-js/modules/es6.weak-map"), require("core-js/modules/es6.weak-set"), require("core-js/modules/es6.reflect.apply"), require("core-js/modules/es6.reflect.construct"), require("core-js/modules/es6.reflect.define-property"), require("core-js/modules/es6.reflect.delete-property"), require("core-js/modules/es6.reflect.get"), require("core-js/modules/es6.reflect.get-own-property-descriptor"), require("core-js/modules/es6.reflect.get-prototype-of"), require("core-js/modules/es6.reflect.has"), require("core-js/modules/es6.reflect.is-extensible"), require("core-js/modules/es6.reflect.own-keys"), require("core-js/modules/es6.reflect.prevent-extensions"), require("core-js/modules/es6.reflect.set"), require("core-js/modules/es6.reflect.set-prototype-of"), require("core-js/modules/es6.promise"), require("core-js/modules/es6.symbol"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.is"), require("core-js/modules/es6.object.set-prototype-of"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.string.raw"), require("core-js/modules/es6.string.from-code-point"), require("core-js/modules/es6.string.code-point-at"), require("core-js/modules/es6.string.repeat"), require("core-js/modules/es6.string.starts-with"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.includes"), require("core-js/modules/es6.regexp.flags"), require("core-js/modules/es6.regexp.match"), require("core-js/modules/es6.regexp.replace"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.search"), require("core-js/modules/es6.array.from"), require("core-js/modules/es6.array.of"), require("core-js/modules/es6.array.copy-within"), require("core-js/modules/es6.array.find"), require("core-js/modules/es6.array.find-index"), require("core-js/modules/es6.array.fill"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.number.is-finite"), require("core-js/modules/es6.number.is-integer"), require("core-js/modules/es6.number.is-safe-integer"), require("core-js/modules/es6.number.is-nan"), require("core-js/modules/es6.number.epsilon"), require("core-js/modules/es6.number.min-safe-integer"), require("core-js/modules/es6.number.max-safe-integer"), require("core-js/modules/es6.math.acosh"), require("core-js/modules/es6.math.asinh"), require("core-js/modules/es6.math.atanh"), require("core-js/modules/es6.math.cbrt"), require("core-js/modules/es6.math.clz32"), require("core-js/modules/es6.math.cosh"), require("core-js/modules/es6.math.expm1"), require("core-js/modules/es6.math.fround"), require("core-js/modules/es6.math.hypot"), require("core-js/modules/es6.math.imul"), require("core-js/modules/es6.math.log1p"), require("core-js/modules/es6.math.log10"), require("core-js/modules/es6.math.log2"), require("core-js/modules/es6.math.sign"), require("core-js/modules/es6.math.sinh"), require("core-js/modules/es6.math.tanh"), require("core-js/modules/es6.math.trunc"), require("core-js/modules/es7.array.includes"), require("core-js/modules/es7.object.values"), require("core-js/modules/es7.object.entries"), require("core-js/modules/es7.object.get-own-property-descriptors"), require("core-js/modules/es7.string.pad-start"), require("core-js/modules/es7.string.pad-end"), require("core-js/modules/web.timers"), require("core-js/modules/web.immediate"), require("core-js/modules/web.dom.iterable"));
	else
		root["stringmerge"] = factory(root["core-js/modules/es6.typed.array-buffer"], root["core-js/modules/es6.typed.int8-array"], root["core-js/modules/es6.typed.uint8-array"], root["core-js/modules/es6.typed.uint8-clamped-array"], root["core-js/modules/es6.typed.int16-array"], root["core-js/modules/es6.typed.uint16-array"], root["core-js/modules/es6.typed.int32-array"], root["core-js/modules/es6.typed.uint32-array"], root["core-js/modules/es6.typed.float32-array"], root["core-js/modules/es6.typed.float64-array"], root["core-js/modules/es6.map"], root["core-js/modules/es6.set"], root["core-js/modules/es6.weak-map"], root["core-js/modules/es6.weak-set"], root["core-js/modules/es6.reflect.apply"], root["core-js/modules/es6.reflect.construct"], root["core-js/modules/es6.reflect.define-property"], root["core-js/modules/es6.reflect.delete-property"], root["core-js/modules/es6.reflect.get"], root["core-js/modules/es6.reflect.get-own-property-descriptor"], root["core-js/modules/es6.reflect.get-prototype-of"], root["core-js/modules/es6.reflect.has"], root["core-js/modules/es6.reflect.is-extensible"], root["core-js/modules/es6.reflect.own-keys"], root["core-js/modules/es6.reflect.prevent-extensions"], root["core-js/modules/es6.reflect.set"], root["core-js/modules/es6.reflect.set-prototype-of"], root["core-js/modules/es6.promise"], root["core-js/modules/es6.symbol"], root["core-js/modules/es6.object.assign"], root["core-js/modules/es6.object.is"], root["core-js/modules/es6.object.set-prototype-of"], root["core-js/modules/es6.function.name"], root["core-js/modules/es6.string.raw"], root["core-js/modules/es6.string.from-code-point"], root["core-js/modules/es6.string.code-point-at"], root["core-js/modules/es6.string.repeat"], root["core-js/modules/es6.string.starts-with"], root["core-js/modules/es6.string.ends-with"], root["core-js/modules/es6.string.includes"], root["core-js/modules/es6.regexp.flags"], root["core-js/modules/es6.regexp.match"], root["core-js/modules/es6.regexp.replace"], root["core-js/modules/es6.regexp.split"], root["core-js/modules/es6.regexp.search"], root["core-js/modules/es6.array.from"], root["core-js/modules/es6.array.of"], root["core-js/modules/es6.array.copy-within"], root["core-js/modules/es6.array.find"], root["core-js/modules/es6.array.find-index"], root["core-js/modules/es6.array.fill"], root["core-js/modules/es6.array.iterator"], root["core-js/modules/es6.number.is-finite"], root["core-js/modules/es6.number.is-integer"], root["core-js/modules/es6.number.is-safe-integer"], root["core-js/modules/es6.number.is-nan"], root["core-js/modules/es6.number.epsilon"], root["core-js/modules/es6.number.min-safe-integer"], root["core-js/modules/es6.number.max-safe-integer"], root["core-js/modules/es6.math.acosh"], root["core-js/modules/es6.math.asinh"], root["core-js/modules/es6.math.atanh"], root["core-js/modules/es6.math.cbrt"], root["core-js/modules/es6.math.clz32"], root["core-js/modules/es6.math.cosh"], root["core-js/modules/es6.math.expm1"], root["core-js/modules/es6.math.fround"], root["core-js/modules/es6.math.hypot"], root["core-js/modules/es6.math.imul"], root["core-js/modules/es6.math.log1p"], root["core-js/modules/es6.math.log10"], root["core-js/modules/es6.math.log2"], root["core-js/modules/es6.math.sign"], root["core-js/modules/es6.math.sinh"], root["core-js/modules/es6.math.tanh"], root["core-js/modules/es6.math.trunc"], root["core-js/modules/es7.array.includes"], root["core-js/modules/es7.object.values"], root["core-js/modules/es7.object.entries"], root["core-js/modules/es7.object.get-own-property-descriptors"], root["core-js/modules/es7.string.pad-start"], root["core-js/modules/es7.string.pad-end"], root["core-js/modules/web.timers"], root["core-js/modules/web.immediate"], root["core-js/modules/web.dom.iterable"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_33__, __WEBPACK_EXTERNAL_MODULE_34__, __WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_40__, __WEBPACK_EXTERNAL_MODULE_41__, __WEBPACK_EXTERNAL_MODULE_42__, __WEBPACK_EXTERNAL_MODULE_43__, __WEBPACK_EXTERNAL_MODULE_44__, __WEBPACK_EXTERNAL_MODULE_45__, __WEBPACK_EXTERNAL_MODULE_46__, __WEBPACK_EXTERNAL_MODULE_47__, __WEBPACK_EXTERNAL_MODULE_48__, __WEBPACK_EXTERNAL_MODULE_49__, __WEBPACK_EXTERNAL_MODULE_50__, __WEBPACK_EXTERNAL_MODULE_51__, __WEBPACK_EXTERNAL_MODULE_52__, __WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_54__, __WEBPACK_EXTERNAL_MODULE_55__, __WEBPACK_EXTERNAL_MODULE_56__, __WEBPACK_EXTERNAL_MODULE_57__, __WEBPACK_EXTERNAL_MODULE_58__, __WEBPACK_EXTERNAL_MODULE_59__, __WEBPACK_EXTERNAL_MODULE_60__, __WEBPACK_EXTERNAL_MODULE_61__, __WEBPACK_EXTERNAL_MODULE_62__, __WEBPACK_EXTERNAL_MODULE_63__, __WEBPACK_EXTERNAL_MODULE_64__, __WEBPACK_EXTERNAL_MODULE_65__, __WEBPACK_EXTERNAL_MODULE_66__, __WEBPACK_EXTERNAL_MODULE_67__, __WEBPACK_EXTERNAL_MODULE_68__, __WEBPACK_EXTERNAL_MODULE_69__, __WEBPACK_EXTERNAL_MODULE_70__, __WEBPACK_EXTERNAL_MODULE_71__, __WEBPACK_EXTERNAL_MODULE_72__, __WEBPACK_EXTERNAL_MODULE_73__, __WEBPACK_EXTERNAL_MODULE_74__, __WEBPACK_EXTERNAL_MODULE_75__, __WEBPACK_EXTERNAL_MODULE_76__, __WEBPACK_EXTERNAL_MODULE_77__, __WEBPACK_EXTERNAL_MODULE_78__, __WEBPACK_EXTERNAL_MODULE_79__, __WEBPACK_EXTERNAL_MODULE_80__, __WEBPACK_EXTERNAL_MODULE_81__, __WEBPACK_EXTERNAL_MODULE_82__, __WEBPACK_EXTERNAL_MODULE_83__, __WEBPACK_EXTERNAL_MODULE_84__, __WEBPACK_EXTERNAL_MODULE_85__, __WEBPACK_EXTERNAL_MODULE_86__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeGenerator = exports.merge = undefined;

__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

__webpack_require__(16);

__webpack_require__(17);

__webpack_require__(18);

__webpack_require__(19);

__webpack_require__(20);

__webpack_require__(21);

__webpack_require__(22);

__webpack_require__(23);

__webpack_require__(24);

__webpack_require__(25);

__webpack_require__(26);

__webpack_require__(27);

__webpack_require__(28);

__webpack_require__(29);

__webpack_require__(30);

__webpack_require__(31);

__webpack_require__(32);

__webpack_require__(33);

__webpack_require__(34);

__webpack_require__(35);

__webpack_require__(36);

__webpack_require__(37);

__webpack_require__(38);

__webpack_require__(39);

__webpack_require__(40);

__webpack_require__(41);

__webpack_require__(42);

__webpack_require__(43);

__webpack_require__(44);

__webpack_require__(45);

__webpack_require__(46);

__webpack_require__(47);

__webpack_require__(48);

__webpack_require__(49);

__webpack_require__(50);

__webpack_require__(51);

__webpack_require__(52);

__webpack_require__(53);

__webpack_require__(54);

__webpack_require__(55);

__webpack_require__(56);

__webpack_require__(57);

__webpack_require__(58);

__webpack_require__(59);

__webpack_require__(60);

__webpack_require__(61);

__webpack_require__(62);

__webpack_require__(63);

__webpack_require__(64);

__webpack_require__(65);

__webpack_require__(66);

__webpack_require__(67);

__webpack_require__(68);

__webpack_require__(69);

__webpack_require__(70);

__webpack_require__(71);

__webpack_require__(72);

__webpack_require__(73);

__webpack_require__(74);

__webpack_require__(75);

__webpack_require__(76);

__webpack_require__(77);

__webpack_require__(78);

__webpack_require__(79);

__webpack_require__(80);

__webpack_require__(81);

__webpack_require__(82);

__webpack_require__(83);

__webpack_require__(84);

__webpack_require__(85);

__webpack_require__(86);

/**
 * Merge string arguments together via alternating merge
 *   - default export
 * @param  {...[any]} args
 * @return {str}           -> merged alternating string (ab, def, ...) -> adbef...
 */
var merge = exports.merge = function merge() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  //return single argument, nothing to build
  if (args.length === 1) {
    return args.pop();
  }
  //filter any non-string args and create letter sub-array struc
  args = args.filter(function (arg) {
    return typeof arg === 'string';
  }).map(function (str) {
    return str.split('');
  });

  // //Loop through args and push letters to buildArr
  var buildArr = [];
  var index = 0;
  while (args.length) {
    var arr = args[index];
    var str = arr.shift();
    buildArr.push(str);
    //remove sub array if empty
    if (!arr.length) {
      args.splice(index, 1);
    }
    //next index or reset
    index = args[index + 1] ? ++index : 0;
  }

  //join and return merged results
  return buildArr.join('');
};
exports.default = merge;

/**
 * Alternating merge strings args generator
 * @param {arr} args -> [[str, str], ...]
 * @yield {arr}      -> single merge string array
 */

var mergeStrGen = function* mergeStrGen(args) {
  var buildArr = [];
  var index = 0;
  while (args.length) {
    var arr = args[index];
    var str = arr.shift();
    buildArr.push(str);
    //remove sub array if empty
    if (!arr.length) {
      args.splice(index, 1);
    }
    //next index or reset
    index = args[index + 1] ? ++index : 0;

    var reset = yield buildArr;
    if (reset) {
      buildArr.length = 0;
    }
  }
};

/**
 * Merge string arguments together via alternating merge
 *  - Utilizes generator for cases in which the computation is large/expensive
 * @param  {...[any]} args
 * @return {str}           -> merged alternating string (ab, def, ...) -> adbef...
 */
var mergeGenerator = exports.mergeGenerator = function mergeGenerator() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  //return single argument, nothing to build
  if (args.length === 1) {
    return args.pop();
  }

  //filter any non-string args, create letter sub-array struc, gen iterator
  var it = mergeStrGen(args.filter(function (arg) {
    return typeof arg === 'string';
  }).map(function (str) {
    return str.split('');
  }));

  //cylce through iterator until done
  var next = it.next();
  var buildArr = [];
  while (!next.done && (buildArr = next.value)) {
    next = it.next();
  }

  //join and return merged results
  return buildArr.join('');
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.array-buffer");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.int8-array");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.uint8-array");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.uint8-clamped-array");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.int16-array");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.uint16-array");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.int32-array");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.uint32-array");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.float32-array");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.float64-array");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.map");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.set");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.weak-map");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.weak-set");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.apply");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.construct");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.define-property");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.delete-property");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.get");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.get-own-property-descriptor");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.get-prototype-of");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.has");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.is-extensible");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.own-keys");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.prevent-extensions");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.set");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.set-prototype-of");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.promise");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.symbol");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.assign");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.is");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.set-prototype-of");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.function.name");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.raw");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.from-code-point");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.code-point-at");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.repeat");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.starts-with");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.ends-with");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.includes");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.flags");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.match");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.replace");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.split");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.search");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.from");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.of");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.copy-within");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.find");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.find-index");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.fill");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.iterator");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.number.is-finite");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.number.is-integer");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.number.is-safe-integer");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.number.is-nan");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.number.epsilon");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.number.min-safe-integer");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.number.max-safe-integer");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.acosh");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.asinh");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.atanh");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.cbrt");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.clz32");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.cosh");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.expm1");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.fround");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.hypot");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.imul");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.log1p");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.log10");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.log2");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.sign");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.sinh");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.tanh");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.trunc");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.array.includes");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.object.values");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.object.entries");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.object.get-own-property-descriptors");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.string.pad-start");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.string.pad-end");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.timers");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.immediate");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom.iterable");

/***/ })
/******/ ]);
});
//# sourceMappingURL=stringmerge.js.map