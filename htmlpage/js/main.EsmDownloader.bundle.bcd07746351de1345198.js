var EsmDownloader =
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.EsmDownloader.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/js-file-download/file-download.js":
/*!********************************************************!*\
  !*** ./node_modules/js-file-download/file-download.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(data, filename, mime, bom) {\n    var blobData = (typeof bom !== 'undefined') ? [bom, data] : [data]\n    var blob = new Blob(blobData, {type: mime || 'application/octet-stream'});\n    if (typeof window.navigator.msSaveBlob !== 'undefined') {\n        // IE workaround for \"HTML7007: One or more blob URLs were\n        // revoked by closing the blob for which they were created.\n        // These URLs will no longer resolve as the data backing\n        // the URL has been freed.\"\n        window.navigator.msSaveBlob(blob, filename);\n    }\n    else {\n        var blobURL = (window.URL && window.URL.createObjectURL) ? window.URL.createObjectURL(blob) : window.webkitURL.createObjectURL(blob);\n        var tempLink = document.createElement('a');\n        tempLink.style.display = 'none';\n        tempLink.href = blobURL;\n        tempLink.setAttribute('download', filename);\n\n        // Safari thinks _blank anchor are pop ups. We only want to set _blank\n        // target if the browser does not support the HTML5 download attribute.\n        // This allows you to download files in desktop safari if pop up blocking\n        // is enabled.\n        if (typeof tempLink.download === 'undefined') {\n            tempLink.setAttribute('target', '_blank');\n        }\n\n        document.body.appendChild(tempLink);\n        tempLink.click();\n\n        // Fixes \"webkit blob resource error 1\"\n        setTimeout(function() {\n            document.body.removeChild(tempLink);\n            window.URL.revokeObjectURL(blobURL);\n        }, 0)\n    }\n}\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/js-file-download/file-download.js?");

/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar DataView = getNative(root, 'DataView');\n\nmodule.exports = DataView;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_DataView.js?");

/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hashClear = __webpack_require__(/*! ./_hashClear */ \"./node_modules/lodash/_hashClear.js\"),\n    hashDelete = __webpack_require__(/*! ./_hashDelete */ \"./node_modules/lodash/_hashDelete.js\"),\n    hashGet = __webpack_require__(/*! ./_hashGet */ \"./node_modules/lodash/_hashGet.js\"),\n    hashHas = __webpack_require__(/*! ./_hashHas */ \"./node_modules/lodash/_hashHas.js\"),\n    hashSet = __webpack_require__(/*! ./_hashSet */ \"./node_modules/lodash/_hashSet.js\");\n\n/**\n * Creates a hash object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Hash(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `Hash`.\nHash.prototype.clear = hashClear;\nHash.prototype['delete'] = hashDelete;\nHash.prototype.get = hashGet;\nHash.prototype.has = hashHas;\nHash.prototype.set = hashSet;\n\nmodule.exports = Hash;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_Hash.js?");

/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ \"./node_modules/lodash/_listCacheClear.js\"),\n    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ \"./node_modules/lodash/_listCacheDelete.js\"),\n    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ \"./node_modules/lodash/_listCacheGet.js\"),\n    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ \"./node_modules/lodash/_listCacheHas.js\"),\n    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ \"./node_modules/lodash/_listCacheSet.js\");\n\n/**\n * Creates an list cache object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction ListCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `ListCache`.\nListCache.prototype.clear = listCacheClear;\nListCache.prototype['delete'] = listCacheDelete;\nListCache.prototype.get = listCacheGet;\nListCache.prototype.has = listCacheHas;\nListCache.prototype.set = listCacheSet;\n\nmodule.exports = ListCache;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_ListCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar Map = getNative(root, 'Map');\n\nmodule.exports = Map;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_Map.js?");

/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ \"./node_modules/lodash/_mapCacheClear.js\"),\n    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ \"./node_modules/lodash/_mapCacheDelete.js\"),\n    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ \"./node_modules/lodash/_mapCacheGet.js\"),\n    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ \"./node_modules/lodash/_mapCacheHas.js\"),\n    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ \"./node_modules/lodash/_mapCacheSet.js\");\n\n/**\n * Creates a map cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction MapCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `MapCache`.\nMapCache.prototype.clear = mapCacheClear;\nMapCache.prototype['delete'] = mapCacheDelete;\nMapCache.prototype.get = mapCacheGet;\nMapCache.prototype.has = mapCacheHas;\nMapCache.prototype.set = mapCacheSet;\n\nmodule.exports = MapCache;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_MapCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar Promise = getNative(root, 'Promise');\n\nmodule.exports = Promise;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_Promise.js?");

/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar Set = getNative(root, 'Set');\n\nmodule.exports = Set;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_Set.js?");

/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MapCache = __webpack_require__(/*! ./_MapCache */ \"./node_modules/lodash/_MapCache.js\"),\n    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ \"./node_modules/lodash/_setCacheAdd.js\"),\n    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ \"./node_modules/lodash/_setCacheHas.js\");\n\n/**\n *\n * Creates an array cache object to store unique values.\n *\n * @private\n * @constructor\n * @param {Array} [values] The values to cache.\n */\nfunction SetCache(values) {\n  var index = -1,\n      length = values == null ? 0 : values.length;\n\n  this.__data__ = new MapCache;\n  while (++index < length) {\n    this.add(values[index]);\n  }\n}\n\n// Add methods to `SetCache`.\nSetCache.prototype.add = SetCache.prototype.push = setCacheAdd;\nSetCache.prototype.has = setCacheHas;\n\nmodule.exports = SetCache;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_SetCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    stackClear = __webpack_require__(/*! ./_stackClear */ \"./node_modules/lodash/_stackClear.js\"),\n    stackDelete = __webpack_require__(/*! ./_stackDelete */ \"./node_modules/lodash/_stackDelete.js\"),\n    stackGet = __webpack_require__(/*! ./_stackGet */ \"./node_modules/lodash/_stackGet.js\"),\n    stackHas = __webpack_require__(/*! ./_stackHas */ \"./node_modules/lodash/_stackHas.js\"),\n    stackSet = __webpack_require__(/*! ./_stackSet */ \"./node_modules/lodash/_stackSet.js\");\n\n/**\n * Creates a stack cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Stack(entries) {\n  var data = this.__data__ = new ListCache(entries);\n  this.size = data.size;\n}\n\n// Add methods to `Stack`.\nStack.prototype.clear = stackClear;\nStack.prototype['delete'] = stackDelete;\nStack.prototype.get = stackGet;\nStack.prototype.has = stackHas;\nStack.prototype.set = stackSet;\n\nmodule.exports = Stack;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_Stack.js?");

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Uint8Array = root.Uint8Array;\n\nmodule.exports = Uint8Array;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_Uint8Array.js?");

/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar WeakMap = getNative(root, 'WeakMap');\n\nmodule.exports = WeakMap;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_WeakMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.filter` for arrays without support for\n * iteratee shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} predicate The function invoked per iteration.\n * @returns {Array} Returns the new filtered array.\n */\nfunction arrayFilter(array, predicate) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      resIndex = 0,\n      result = [];\n\n  while (++index < length) {\n    var value = array[index];\n    if (predicate(value, index, array)) {\n      result[resIndex++] = value;\n    }\n  }\n  return result;\n}\n\nmodule.exports = arrayFilter;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_arrayFilter.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseTimes = __webpack_require__(/*! ./_baseTimes */ \"./node_modules/lodash/_baseTimes.js\"),\n    isArguments = __webpack_require__(/*! ./isArguments */ \"./node_modules/lodash/isArguments.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isBuffer = __webpack_require__(/*! ./isBuffer */ \"./node_modules/lodash/isBuffer.js\"),\n    isIndex = __webpack_require__(/*! ./_isIndex */ \"./node_modules/lodash/_isIndex.js\"),\n    isTypedArray = __webpack_require__(/*! ./isTypedArray */ \"./node_modules/lodash/isTypedArray.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Creates an array of the enumerable property names of the array-like `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @param {boolean} inherited Specify returning inherited property names.\n * @returns {Array} Returns the array of property names.\n */\nfunction arrayLikeKeys(value, inherited) {\n  var isArr = isArray(value),\n      isArg = !isArr && isArguments(value),\n      isBuff = !isArr && !isArg && isBuffer(value),\n      isType = !isArr && !isArg && !isBuff && isTypedArray(value),\n      skipIndexes = isArr || isArg || isBuff || isType,\n      result = skipIndexes ? baseTimes(value.length, String) : [],\n      length = result.length;\n\n  for (var key in value) {\n    if ((inherited || hasOwnProperty.call(value, key)) &&\n        !(skipIndexes && (\n           // Safari 9 has enumerable `arguments.length` in strict mode.\n           key == 'length' ||\n           // Node.js 0.10 has enumerable non-index properties on buffers.\n           (isBuff && (key == 'offset' || key == 'parent')) ||\n           // PhantomJS 2 has enumerable non-index properties on typed arrays.\n           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||\n           // Skip index properties.\n           isIndex(key, length)\n        ))) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = arrayLikeKeys;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_arrayLikeKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.map` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction arrayMap(array, iteratee) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      result = Array(length);\n\n  while (++index < length) {\n    result[index] = iteratee(array[index], index, array);\n  }\n  return result;\n}\n\nmodule.exports = arrayMap;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_arrayMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Appends the elements of `values` to `array`.\n *\n * @private\n * @param {Array} array The array to modify.\n * @param {Array} values The values to append.\n * @returns {Array} Returns `array`.\n */\nfunction arrayPush(array, values) {\n  var index = -1,\n      length = values.length,\n      offset = array.length;\n\n  while (++index < length) {\n    array[offset + index] = values[index];\n  }\n  return array;\n}\n\nmodule.exports = arrayPush;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_arrayPush.js?");

/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.some` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} predicate The function invoked per iteration.\n * @returns {boolean} Returns `true` if any element passes the predicate check,\n *  else `false`.\n */\nfunction arraySome(array, predicate) {\n  var index = -1,\n      length = array == null ? 0 : array.length;\n\n  while (++index < length) {\n    if (predicate(array[index], index, array)) {\n      return true;\n    }\n  }\n  return false;\n}\n\nmodule.exports = arraySome;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_arraySome.js?");

/***/ }),

/***/ "./node_modules/lodash/_asciiSize.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_asciiSize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseProperty = __webpack_require__(/*! ./_baseProperty */ \"./node_modules/lodash/_baseProperty.js\");\n\n/**\n * Gets the size of an ASCII `string`.\n *\n * @private\n * @param {string} string The string inspect.\n * @returns {number} Returns the string size.\n */\nvar asciiSize = baseProperty('length');\n\nmodule.exports = asciiSize;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_asciiSize.js?");

/***/ }),

/***/ "./node_modules/lodash/_asciiToArray.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_asciiToArray.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Converts an ASCII `string` to an array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the converted array.\n */\nfunction asciiToArray(string) {\n  return string.split('');\n}\n\nmodule.exports = asciiToArray;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_asciiToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\");\n\n/**\n * Gets the index at which the `key` is found in `array` of key-value pairs.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} key The key to search for.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction assocIndexOf(array, key) {\n  var length = array.length;\n  while (length--) {\n    if (eq(array[length][0], key)) {\n      return length;\n    }\n  }\n  return -1;\n}\n\nmodule.exports = assocIndexOf;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_assocIndexOf.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.findIndex` and `_.findLastIndex` without\n * support for iteratee shorthands.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {Function} predicate The function invoked per iteration.\n * @param {number} fromIndex The index to search from.\n * @param {boolean} [fromRight] Specify iterating from right to left.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction baseFindIndex(array, predicate, fromIndex, fromRight) {\n  var length = array.length,\n      index = fromIndex + (fromRight ? 1 : -1);\n\n  while ((fromRight ? index-- : ++index < length)) {\n    if (predicate(array[index], index, array)) {\n      return index;\n    }\n  }\n  return -1;\n}\n\nmodule.exports = baseFindIndex;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_baseFindIndex.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var castPath = __webpack_require__(/*! ./_castPath */ \"./node_modules/lodash/_castPath.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/**\n * The base implementation of `_.get` without support for default values.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Array|string} path The path of the property to get.\n * @returns {*} Returns the resolved value.\n */\nfunction baseGet(object, path) {\n  path = castPath(path, object);\n\n  var index = 0,\n      length = path.length;\n\n  while (object != null && index < length) {\n    object = object[toKey(path[index++])];\n  }\n  return (index && index == length) ? object : undefined;\n}\n\nmodule.exports = baseGet;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_baseGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayPush = __webpack_require__(/*! ./_arrayPush */ \"./node_modules/lodash/_arrayPush.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\");\n\n/**\n * The base implementation of `getAllKeys` and `getAllKeysIn` which uses\n * `keysFunc` and `symbolsFunc` to get the enumerable property names and\n * symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Function} keysFunc The function to get the keys of `object`.\n * @param {Function} symbolsFunc The function to get the symbols of `object`.\n * @returns {Array} Returns the array of property names and symbols.\n */\nfunction baseGetAllKeys(object, keysFunc, symbolsFunc) {\n  var result = keysFunc(object);\n  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));\n}\n\nmodule.exports = baseGetAllKeys;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_baseGetAllKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.hasIn` without support for deep paths.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {Array|string} key The key to check.\n * @returns {boolean} Returns `true` if `key` exists, else `false`.\n */\nfunction baseHasIn(object, key) {\n  return object != null && key in Object(object);\n}\n\nmodule.exports = baseHasIn;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_baseHasIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]';\n\n/**\n * The base implementation of `_.isArguments`.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n */\nfunction baseIsArguments(value) {\n  return isObjectLike(value) && baseGetTag(value) == argsTag;\n}\n\nmodule.exports = baseIsArguments;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_baseIsArguments.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ \"./node_modules/lodash/_baseIsEqualDeep.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/**\n * The base implementation of `_.isEqual` which supports partial comparisons\n * and tracks traversed objects.\n *\n * @private\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @param {boolean} bitmask The bitmask flags.\n *  1 - Unordered comparison\n *  2 - Partial comparison\n * @param {Function} [customizer] The function to customize comparisons.\n * @param {Object} [stack] Tracks traversed `value` and `other` objects.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n */\nfunction baseIsEqual(value, other, bitmask, customizer, stack) {\n  if (value === other) {\n    return true;\n  }\n  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {\n    return value !== value && other !== other;\n  }\n  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);\n}\n\nmodule.exports = baseIsEqual;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_baseIsEqual.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Stack = __webpack_require__(/*! ./_Stack */ \"./node_modules/lodash/_Stack.js\"),\n    equalArrays = __webpack_require__(/*! ./_equalArrays */ \"./node_modules/lodash/_equalArrays.js\"),\n    equalByTag = __webpack_require__(/*! ./_equalByTag */ \"./node_modules/lodash/_equalByTag.js\"),\n    equalObjects = __webpack_require__(/*! ./_equalObjects */ \"./node_modules/lodash/_equalObjects.js\"),\n    getTag = __webpack_require__(/*! ./_getTag */ \"./node_modules/lodash/_getTag.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isBuffer = __webpack_require__(/*! ./isBuffer */ \"./node_modules/lodash/isBuffer.js\"),\n    isTypedArray = __webpack_require__(/*! ./isTypedArray */ \"./node_modules/lodash/isTypedArray.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1;\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    arrayTag = '[object Array]',\n    objectTag = '[object Object]';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * A specialized version of `baseIsEqual` for arrays and objects which performs\n * deep comparisons and tracks traversed objects enabling objects with circular\n * references to be compared.\n *\n * @private\n * @param {Object} object The object to compare.\n * @param {Object} other The other object to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} [stack] Tracks traversed `object` and `other` objects.\n * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.\n */\nfunction baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {\n  var objIsArr = isArray(object),\n      othIsArr = isArray(other),\n      objTag = objIsArr ? arrayTag : getTag(object),\n      othTag = othIsArr ? arrayTag : getTag(other);\n\n  objTag = objTag == argsTag ? objectTag : objTag;\n  othTag = othTag == argsTag ? objectTag : othTag;\n\n  var objIsObj = objTag == objectTag,\n      othIsObj = othTag == objectTag,\n      isSameTag = objTag == othTag;\n\n  if (isSameTag && isBuffer(object)) {\n    if (!isBuffer(other)) {\n      return false;\n    }\n    objIsArr = true;\n    objIsObj = false;\n  }\n  if (isSameTag && !objIsObj) {\n    stack || (stack = new Stack);\n    return (objIsArr || isTypedArray(object))\n      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)\n      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);\n  }\n  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {\n    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),\n        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');\n\n    if (objIsWrapped || othIsWrapped) {\n      var objUnwrapped = objIsWrapped ? object.value() : object,\n          othUnwrapped = othIsWrapped ? other.value() : other;\n\n      stack || (stack = new Stack);\n      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);\n    }\n  }\n  if (!isSameTag) {\n    return false;\n  }\n  stack || (stack = new Stack);\n  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);\n}\n\nmodule.exports = baseIsEqualDeep;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_baseIsEqualDeep.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Stack = __webpack_require__(/*! ./_Stack */ \"./node_modules/lodash/_Stack.js\"),\n    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ \"./node_modules/lodash/_baseIsEqual.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1,\n    COMPARE_UNORDERED_FLAG = 2;\n\n/**\n * The base implementation of `_.isMatch` without support for iteratee shorthands.\n *\n * @private\n * @param {Object} object The object to inspect.\n * @param {Object} source The object of property values to match.\n * @param {Array} matchData The property names, values, and compare flags to match.\n * @param {Function} [customizer] The function to customize comparisons.\n * @returns {boolean} Returns `true` if `object` is a match, else `false`.\n */\nfunction baseIsMatch(object, source, matchData, customizer) {\n  var index = matchData.length,\n      length = index,\n      noCustomizer = !customizer;\n\n  if (object == null) {\n    return !length;\n  }\n  object = Object(object);\n  while (index--) {\n    var data = matchData[index];\n    if ((noCustomizer && data[2])\n          ? data[1] !== object[data[0]]\n          : !(data[0] in object)\n        ) {\n      return false;\n    }\n  }\n  while (++index < length) {\n    data = matchData[index];\n    var key = data[0],\n        objValue = object[key],\n        srcValue = data[1];\n\n    if (noCustomizer && data[2]) {\n      if (objValue === undefined && !(key in object)) {\n        return false;\n      }\n    } else {\n      var stack = new Stack;\n      if (customizer) {\n        var result = customizer(objValue, srcValue, key, object, source, stack);\n      }\n      if (!(result === undefined\n            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)\n            : result\n          )) {\n        return false;\n      }\n    }\n  }\n  return true;\n}\n\nmodule.exports = baseIsMatch;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_baseIsMatch.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isMasked = __webpack_require__(/*! ./_isMasked */ \"./node_modules/lodash/_isMasked.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    toSource = __webpack_require__(/*! ./_toSource */ \"./node_modules/lodash/_toSource.js\");\n\n/**\n * Used to match `RegExp`\n * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).\n */\nvar reRegExpChar = /[\\\\^$.*+?()[\\]{}|]/g;\n\n/** Used to detect host constructors (Safari). */\nvar reIsHostCtor = /^\\[object .+?Constructor\\]$/;\n\n/** Used for built-in method references. */\nvar funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Used to detect if a method is native. */\nvar reIsNative = RegExp('^' +\n  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\\\$&')\n  .replace(/hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g, '$1.*?') + '$'\n);\n\n/**\n * The base implementation of `_.isNative` without bad shim checks.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a native function,\n *  else `false`.\n */\nfunction baseIsNative(value) {\n  if (!isObject(value) || isMasked(value)) {\n    return false;\n  }\n  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;\n  return pattern.test(toSource(value));\n}\n\nmodule.exports = baseIsNative;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_baseIsNative.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    arrayTag = '[object Array]',\n    boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    errorTag = '[object Error]',\n    funcTag = '[object Function]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    objectTag = '[object Object]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    weakMapTag = '[object WeakMap]';\n\nvar arrayBufferTag = '[object ArrayBuffer]',\n    dataViewTag = '[object DataView]',\n    float32Tag = '[object Float32Array]',\n    float64Tag = '[object Float64Array]',\n    int8Tag = '[object Int8Array]',\n    int16Tag = '[object Int16Array]',\n    int32Tag = '[object Int32Array]',\n    uint8Tag = '[object Uint8Array]',\n    uint8ClampedTag = '[object Uint8ClampedArray]',\n    uint16Tag = '[object Uint16Array]',\n    uint32Tag = '[object Uint32Array]';\n\n/** Used to identify `toStringTag` values of typed arrays. */\nvar typedArrayTags = {};\ntypedArrayTags[float32Tag] = typedArrayTags[float64Tag] =\ntypedArrayTags[int8Tag] = typedArrayTags[int16Tag] =\ntypedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =\ntypedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =\ntypedArrayTags[uint32Tag] = true;\ntypedArrayTags[argsTag] = typedArrayTags[arrayTag] =\ntypedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =\ntypedArrayTags[dataViewTag] = typedArrayTags[dateTag] =\ntypedArrayTags[errorTag] = typedArrayTags[funcTag] =\ntypedArrayTags[mapTag] = typedArrayTags[numberTag] =\ntypedArrayTags[objectTag] = typedArrayTags[regexpTag] =\ntypedArrayTags[setTag] = typedArrayTags[stringTag] =\ntypedArrayTags[weakMapTag] = false;\n\n/**\n * The base implementation of `_.isTypedArray` without Node.js optimizations.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.\n */\nfunction baseIsTypedArray(value) {\n  return isObjectLike(value) &&\n    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];\n}\n\nmodule.exports = baseIsTypedArray;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_baseIsTypedArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseMatches = __webpack_require__(/*! ./_baseMatches */ \"./node_modules/lodash/_baseMatches.js\"),\n    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ \"./node_modules/lodash/_baseMatchesProperty.js\"),\n    identity = __webpack_require__(/*! ./identity */ \"./node_modules/lodash/identity.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    property = __webpack_require__(/*! ./property */ \"./node_modules/lodash/property.js\");\n\n/**\n * The base implementation of `_.iteratee`.\n *\n * @private\n * @param {*} [value=_.identity] The value to convert to an iteratee.\n * @returns {Function} Returns the iteratee.\n */\nfunction baseIteratee(value) {\n  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.\n  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.\n  if (typeof value == 'function') {\n    return value;\n  }\n  if (value == null) {\n    return identity;\n  }\n  if (typeof value == 'object') {\n    return isArray(value)\n      ? baseMatchesProperty(value[0], value[1])\n      : baseMatches(value);\n  }\n  return property(value);\n}\n\nmodule.exports = baseIteratee;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_baseIteratee.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isPrototype = __webpack_require__(/*! ./_isPrototype */ \"./node_modules/lodash/_isPrototype.js\"),\n    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ \"./node_modules/lodash/_nativeKeys.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction baseKeys(object) {\n  if (!isPrototype(object)) {\n    return nativeKeys(object);\n  }\n  var result = [];\n  for (var key in Object(object)) {\n    if (hasOwnProperty.call(object, key) && key != 'constructor') {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = baseKeys;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_baseKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ \"./node_modules/lodash/_baseIsMatch.js\"),\n    getMatchData = __webpack_require__(/*! ./_getMatchData */ \"./node_modules/lodash/_getMatchData.js\"),\n    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ \"./node_modules/lodash/_matchesStrictComparable.js\");\n\n/**\n * The base implementation of `_.matches` which doesn't clone `source`.\n *\n * @private\n * @param {Object} source The object of property values to match.\n * @returns {Function} Returns the new spec function.\n */\nfunction baseMatches(source) {\n  var matchData = getMatchData(source);\n  if (matchData.length == 1 && matchData[0][2]) {\n    return matchesStrictComparable(matchData[0][0], matchData[0][1]);\n  }\n  return function(object) {\n    return object === source || baseIsMatch(object, source, matchData);\n  };\n}\n\nmodule.exports = baseMatches;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_baseMatches.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ \"./node_modules/lodash/_baseIsEqual.js\"),\n    get = __webpack_require__(/*! ./get */ \"./node_modules/lodash/get.js\"),\n    hasIn = __webpack_require__(/*! ./hasIn */ \"./node_modules/lodash/hasIn.js\"),\n    isKey = __webpack_require__(/*! ./_isKey */ \"./node_modules/lodash/_isKey.js\"),\n    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ \"./node_modules/lodash/_isStrictComparable.js\"),\n    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ \"./node_modules/lodash/_matchesStrictComparable.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1,\n    COMPARE_UNORDERED_FLAG = 2;\n\n/**\n * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.\n *\n * @private\n * @param {string} path The path of the property to get.\n * @param {*} srcValue The value to match.\n * @returns {Function} Returns the new spec function.\n */\nfunction baseMatchesProperty(path, srcValue) {\n  if (isKey(path) && isStrictComparable(srcValue)) {\n    return matchesStrictComparable(toKey(path), srcValue);\n  }\n  return function(object) {\n    var objValue = get(object, path);\n    return (objValue === undefined && objValue === srcValue)\n      ? hasIn(object, path)\n      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);\n  };\n}\n\nmodule.exports = baseMatchesProperty;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_baseMatchesProperty.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.property` without support for deep paths.\n *\n * @private\n * @param {string} key The key of the property to get.\n * @returns {Function} Returns the new accessor function.\n */\nfunction baseProperty(key) {\n  return function(object) {\n    return object == null ? undefined : object[key];\n  };\n}\n\nmodule.exports = baseProperty;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_baseProperty.js?");

/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGet = __webpack_require__(/*! ./_baseGet */ \"./node_modules/lodash/_baseGet.js\");\n\n/**\n * A specialized version of `baseProperty` which supports deep paths.\n *\n * @private\n * @param {Array|string} path The path of the property to get.\n * @returns {Function} Returns the new accessor function.\n */\nfunction basePropertyDeep(path) {\n  return function(object) {\n    return baseGet(object, path);\n  };\n}\n\nmodule.exports = basePropertyDeep;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_basePropertyDeep.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseRepeat.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseRepeat.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeFloor = Math.floor;\n\n/**\n * The base implementation of `_.repeat` which doesn't coerce arguments.\n *\n * @private\n * @param {string} string The string to repeat.\n * @param {number} n The number of times to repeat the string.\n * @returns {string} Returns the repeated string.\n */\nfunction baseRepeat(string, n) {\n  var result = '';\n  if (!string || n < 1 || n > MAX_SAFE_INTEGER) {\n    return result;\n  }\n  // Leverage the exponentiation by squaring algorithm for a faster repeat.\n  // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.\n  do {\n    if (n % 2) {\n      result += string;\n    }\n    n = nativeFloor(n / 2);\n    if (n) {\n      string += string;\n    }\n  } while (n);\n\n  return result;\n}\n\nmodule.exports = baseRepeat;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_baseRepeat.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.slice` without an iteratee call guard.\n *\n * @private\n * @param {Array} array The array to slice.\n * @param {number} [start=0] The start position.\n * @param {number} [end=array.length] The end position.\n * @returns {Array} Returns the slice of `array`.\n */\nfunction baseSlice(array, start, end) {\n  var index = -1,\n      length = array.length;\n\n  if (start < 0) {\n    start = -start > length ? 0 : (length + start);\n  }\n  end = end > length ? length : end;\n  if (end < 0) {\n    end += length;\n  }\n  length = start > end ? 0 : ((end - start) >>> 0);\n  start >>>= 0;\n\n  var result = Array(length);\n  while (++index < length) {\n    result[index] = array[index + start];\n  }\n  return result;\n}\n\nmodule.exports = baseSlice;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_baseSlice.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.times` without support for iteratee shorthands\n * or max array length checks.\n *\n * @private\n * @param {number} n The number of times to invoke `iteratee`.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the array of results.\n */\nfunction baseTimes(n, iteratee) {\n  var index = -1,\n      result = Array(n);\n\n  while (++index < n) {\n    result[index] = iteratee(index);\n  }\n  return result;\n}\n\nmodule.exports = baseTimes;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_baseTimes.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0;\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolToString = symbolProto ? symbolProto.toString : undefined;\n\n/**\n * The base implementation of `_.toString` which doesn't convert nullish\n * values to empty strings.\n *\n * @private\n * @param {*} value The value to process.\n * @returns {string} Returns the string.\n */\nfunction baseToString(value) {\n  // Exit early for strings to avoid a performance hit in some environments.\n  if (typeof value == 'string') {\n    return value;\n  }\n  if (isArray(value)) {\n    // Recursively convert values (susceptible to call stack limits).\n    return arrayMap(value, baseToString) + '';\n  }\n  if (isSymbol(value)) {\n    return symbolToString ? symbolToString.call(value) : '';\n  }\n  var result = (value + '');\n  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;\n}\n\nmodule.exports = baseToString;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_baseToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.unary` without support for storing metadata.\n *\n * @private\n * @param {Function} func The function to cap arguments for.\n * @returns {Function} Returns the new capped function.\n */\nfunction baseUnary(func) {\n  return function(value) {\n    return func(value);\n  };\n}\n\nmodule.exports = baseUnary;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_baseUnary.js?");

/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if a `cache` value for `key` exists.\n *\n * @private\n * @param {Object} cache The cache to query.\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction cacheHas(cache, key) {\n  return cache.has(key);\n}\n\nmodule.exports = cacheHas;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_cacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isKey = __webpack_require__(/*! ./_isKey */ \"./node_modules/lodash/_isKey.js\"),\n    stringToPath = __webpack_require__(/*! ./_stringToPath */ \"./node_modules/lodash/_stringToPath.js\"),\n    toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n\n/**\n * Casts `value` to a path array if it's not one.\n *\n * @private\n * @param {*} value The value to inspect.\n * @param {Object} [object] The object to query keys on.\n * @returns {Array} Returns the cast property path array.\n */\nfunction castPath(value, object) {\n  if (isArray(value)) {\n    return value;\n  }\n  return isKey(value, object) ? [value] : stringToPath(toString(value));\n}\n\nmodule.exports = castPath;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_castPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_castSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_castSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseSlice = __webpack_require__(/*! ./_baseSlice */ \"./node_modules/lodash/_baseSlice.js\");\n\n/**\n * Casts `array` to a slice if it's needed.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {number} start The start position.\n * @param {number} [end=array.length] The end position.\n * @returns {Array} Returns the cast slice.\n */\nfunction castSlice(array, start, end) {\n  var length = array.length;\n  end = end === undefined ? length : end;\n  return (!start && end >= length) ? array : baseSlice(array, start, end);\n}\n\nmodule.exports = castSlice;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_castSlice.js?");

/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Used to detect overreaching core-js shims. */\nvar coreJsData = root['__core-js_shared__'];\n\nmodule.exports = coreJsData;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_coreJsData.js?");

/***/ }),

/***/ "./node_modules/lodash/_createPadding.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createPadding.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseRepeat = __webpack_require__(/*! ./_baseRepeat */ \"./node_modules/lodash/_baseRepeat.js\"),\n    baseToString = __webpack_require__(/*! ./_baseToString */ \"./node_modules/lodash/_baseToString.js\"),\n    castSlice = __webpack_require__(/*! ./_castSlice */ \"./node_modules/lodash/_castSlice.js\"),\n    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ \"./node_modules/lodash/_hasUnicode.js\"),\n    stringSize = __webpack_require__(/*! ./_stringSize */ \"./node_modules/lodash/_stringSize.js\"),\n    stringToArray = __webpack_require__(/*! ./_stringToArray */ \"./node_modules/lodash/_stringToArray.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeCeil = Math.ceil;\n\n/**\n * Creates the padding for `string` based on `length`. The `chars` string\n * is truncated if the number of characters exceeds `length`.\n *\n * @private\n * @param {number} length The padding length.\n * @param {string} [chars=' '] The string used as padding.\n * @returns {string} Returns the padding for `string`.\n */\nfunction createPadding(length, chars) {\n  chars = chars === undefined ? ' ' : baseToString(chars);\n\n  var charsLength = chars.length;\n  if (charsLength < 2) {\n    return charsLength ? baseRepeat(chars, length) : chars;\n  }\n  var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));\n  return hasUnicode(chars)\n    ? castSlice(stringToArray(result), 0, length).join('')\n    : result.slice(0, length);\n}\n\nmodule.exports = createPadding;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_createPadding.js?");

/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var SetCache = __webpack_require__(/*! ./_SetCache */ \"./node_modules/lodash/_SetCache.js\"),\n    arraySome = __webpack_require__(/*! ./_arraySome */ \"./node_modules/lodash/_arraySome.js\"),\n    cacheHas = __webpack_require__(/*! ./_cacheHas */ \"./node_modules/lodash/_cacheHas.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1,\n    COMPARE_UNORDERED_FLAG = 2;\n\n/**\n * A specialized version of `baseIsEqualDeep` for arrays with support for\n * partial deep comparisons.\n *\n * @private\n * @param {Array} array The array to compare.\n * @param {Array} other The other array to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} stack Tracks traversed `array` and `other` objects.\n * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.\n */\nfunction equalArrays(array, other, bitmask, customizer, equalFunc, stack) {\n  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,\n      arrLength = array.length,\n      othLength = other.length;\n\n  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {\n    return false;\n  }\n  // Assume cyclic values are equal.\n  var stacked = stack.get(array);\n  if (stacked && stack.get(other)) {\n    return stacked == other;\n  }\n  var index = -1,\n      result = true,\n      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;\n\n  stack.set(array, other);\n  stack.set(other, array);\n\n  // Ignore non-index properties.\n  while (++index < arrLength) {\n    var arrValue = array[index],\n        othValue = other[index];\n\n    if (customizer) {\n      var compared = isPartial\n        ? customizer(othValue, arrValue, index, other, array, stack)\n        : customizer(arrValue, othValue, index, array, other, stack);\n    }\n    if (compared !== undefined) {\n      if (compared) {\n        continue;\n      }\n      result = false;\n      break;\n    }\n    // Recursively compare arrays (susceptible to call stack limits).\n    if (seen) {\n      if (!arraySome(other, function(othValue, othIndex) {\n            if (!cacheHas(seen, othIndex) &&\n                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {\n              return seen.push(othIndex);\n            }\n          })) {\n        result = false;\n        break;\n      }\n    } else if (!(\n          arrValue === othValue ||\n            equalFunc(arrValue, othValue, bitmask, customizer, stack)\n        )) {\n      result = false;\n      break;\n    }\n  }\n  stack['delete'](array);\n  stack['delete'](other);\n  return result;\n}\n\nmodule.exports = equalArrays;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_equalArrays.js?");

/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ \"./node_modules/lodash/_Uint8Array.js\"),\n    eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\"),\n    equalArrays = __webpack_require__(/*! ./_equalArrays */ \"./node_modules/lodash/_equalArrays.js\"),\n    mapToArray = __webpack_require__(/*! ./_mapToArray */ \"./node_modules/lodash/_mapToArray.js\"),\n    setToArray = __webpack_require__(/*! ./_setToArray */ \"./node_modules/lodash/_setToArray.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1,\n    COMPARE_UNORDERED_FLAG = 2;\n\n/** `Object#toString` result references. */\nvar boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    errorTag = '[object Error]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    symbolTag = '[object Symbol]';\n\nvar arrayBufferTag = '[object ArrayBuffer]',\n    dataViewTag = '[object DataView]';\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;\n\n/**\n * A specialized version of `baseIsEqualDeep` for comparing objects of\n * the same `toStringTag`.\n *\n * **Note:** This function only supports comparing values with tags of\n * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.\n *\n * @private\n * @param {Object} object The object to compare.\n * @param {Object} other The other object to compare.\n * @param {string} tag The `toStringTag` of the objects to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} stack Tracks traversed `object` and `other` objects.\n * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.\n */\nfunction equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {\n  switch (tag) {\n    case dataViewTag:\n      if ((object.byteLength != other.byteLength) ||\n          (object.byteOffset != other.byteOffset)) {\n        return false;\n      }\n      object = object.buffer;\n      other = other.buffer;\n\n    case arrayBufferTag:\n      if ((object.byteLength != other.byteLength) ||\n          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {\n        return false;\n      }\n      return true;\n\n    case boolTag:\n    case dateTag:\n    case numberTag:\n      // Coerce booleans to `1` or `0` and dates to milliseconds.\n      // Invalid dates are coerced to `NaN`.\n      return eq(+object, +other);\n\n    case errorTag:\n      return object.name == other.name && object.message == other.message;\n\n    case regexpTag:\n    case stringTag:\n      // Coerce regexes to strings and treat strings, primitives and objects,\n      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring\n      // for more details.\n      return object == (other + '');\n\n    case mapTag:\n      var convert = mapToArray;\n\n    case setTag:\n      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;\n      convert || (convert = setToArray);\n\n      if (object.size != other.size && !isPartial) {\n        return false;\n      }\n      // Assume cyclic values are equal.\n      var stacked = stack.get(object);\n      if (stacked) {\n        return stacked == other;\n      }\n      bitmask |= COMPARE_UNORDERED_FLAG;\n\n      // Recursively compare objects (susceptible to call stack limits).\n      stack.set(object, other);\n      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);\n      stack['delete'](object);\n      return result;\n\n    case symbolTag:\n      if (symbolValueOf) {\n        return symbolValueOf.call(object) == symbolValueOf.call(other);\n      }\n  }\n  return false;\n}\n\nmodule.exports = equalByTag;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_equalByTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ \"./node_modules/lodash/_getAllKeys.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1;\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * A specialized version of `baseIsEqualDeep` for objects with support for\n * partial deep comparisons.\n *\n * @private\n * @param {Object} object The object to compare.\n * @param {Object} other The other object to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} stack Tracks traversed `object` and `other` objects.\n * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.\n */\nfunction equalObjects(object, other, bitmask, customizer, equalFunc, stack) {\n  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,\n      objProps = getAllKeys(object),\n      objLength = objProps.length,\n      othProps = getAllKeys(other),\n      othLength = othProps.length;\n\n  if (objLength != othLength && !isPartial) {\n    return false;\n  }\n  var index = objLength;\n  while (index--) {\n    var key = objProps[index];\n    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {\n      return false;\n    }\n  }\n  // Assume cyclic values are equal.\n  var stacked = stack.get(object);\n  if (stacked && stack.get(other)) {\n    return stacked == other;\n  }\n  var result = true;\n  stack.set(object, other);\n  stack.set(other, object);\n\n  var skipCtor = isPartial;\n  while (++index < objLength) {\n    key = objProps[index];\n    var objValue = object[key],\n        othValue = other[key];\n\n    if (customizer) {\n      var compared = isPartial\n        ? customizer(othValue, objValue, key, other, object, stack)\n        : customizer(objValue, othValue, key, object, other, stack);\n    }\n    // Recursively compare objects (susceptible to call stack limits).\n    if (!(compared === undefined\n          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))\n          : compared\n        )) {\n      result = false;\n      break;\n    }\n    skipCtor || (skipCtor = key == 'constructor');\n  }\n  if (result && !skipCtor) {\n    var objCtor = object.constructor,\n        othCtor = other.constructor;\n\n    // Non `Object` object instances with different constructors are not equal.\n    if (objCtor != othCtor &&\n        ('constructor' in object && 'constructor' in other) &&\n        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&\n          typeof othCtor == 'function' && othCtor instanceof othCtor)) {\n      result = false;\n    }\n  }\n  stack['delete'](object);\n  stack['delete'](other);\n  return result;\n}\n\nmodule.exports = equalObjects;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_equalObjects.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\nmodule.exports = freeGlobal;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ \"./node_modules/lodash/_baseGetAllKeys.js\"),\n    getSymbols = __webpack_require__(/*! ./_getSymbols */ \"./node_modules/lodash/_getSymbols.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/lodash/keys.js\");\n\n/**\n * Creates an array of own enumerable property names and symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names and symbols.\n */\nfunction getAllKeys(object) {\n  return baseGetAllKeys(object, keys, getSymbols);\n}\n\nmodule.exports = getAllKeys;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_getAllKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isKeyable = __webpack_require__(/*! ./_isKeyable */ \"./node_modules/lodash/_isKeyable.js\");\n\n/**\n * Gets the data for `map`.\n *\n * @private\n * @param {Object} map The map to query.\n * @param {string} key The reference key.\n * @returns {*} Returns the map data.\n */\nfunction getMapData(map, key) {\n  var data = map.__data__;\n  return isKeyable(key)\n    ? data[typeof key == 'string' ? 'string' : 'hash']\n    : data.map;\n}\n\nmodule.exports = getMapData;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_getMapData.js?");

/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ \"./node_modules/lodash/_isStrictComparable.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/lodash/keys.js\");\n\n/**\n * Gets the property names, values, and compare flags of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the match data of `object`.\n */\nfunction getMatchData(object) {\n  var result = keys(object),\n      length = result.length;\n\n  while (length--) {\n    var key = result[length],\n        value = object[key];\n\n    result[length] = [key, value, isStrictComparable(value)];\n  }\n  return result;\n}\n\nmodule.exports = getMatchData;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_getMatchData.js?");

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ \"./node_modules/lodash/_baseIsNative.js\"),\n    getValue = __webpack_require__(/*! ./_getValue */ \"./node_modules/lodash/_getValue.js\");\n\n/**\n * Gets the native function at `key` of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the method to get.\n * @returns {*} Returns the function if it's native, else `undefined`.\n */\nfunction getNative(object, key) {\n  var value = getValue(object, key);\n  return baseIsNative(value) ? value : undefined;\n}\n\nmodule.exports = getNative;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_getNative.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ \"./node_modules/lodash/_arrayFilter.js\"),\n    stubArray = __webpack_require__(/*! ./stubArray */ \"./node_modules/lodash/stubArray.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Built-in value references. */\nvar propertyIsEnumerable = objectProto.propertyIsEnumerable;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeGetSymbols = Object.getOwnPropertySymbols;\n\n/**\n * Creates an array of the own enumerable symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of symbols.\n */\nvar getSymbols = !nativeGetSymbols ? stubArray : function(object) {\n  if (object == null) {\n    return [];\n  }\n  object = Object(object);\n  return arrayFilter(nativeGetSymbols(object), function(symbol) {\n    return propertyIsEnumerable.call(object, symbol);\n  });\n};\n\nmodule.exports = getSymbols;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_getSymbols.js?");

/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DataView = __webpack_require__(/*! ./_DataView */ \"./node_modules/lodash/_DataView.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\"),\n    Promise = __webpack_require__(/*! ./_Promise */ \"./node_modules/lodash/_Promise.js\"),\n    Set = __webpack_require__(/*! ./_Set */ \"./node_modules/lodash/_Set.js\"),\n    WeakMap = __webpack_require__(/*! ./_WeakMap */ \"./node_modules/lodash/_WeakMap.js\"),\n    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    toSource = __webpack_require__(/*! ./_toSource */ \"./node_modules/lodash/_toSource.js\");\n\n/** `Object#toString` result references. */\nvar mapTag = '[object Map]',\n    objectTag = '[object Object]',\n    promiseTag = '[object Promise]',\n    setTag = '[object Set]',\n    weakMapTag = '[object WeakMap]';\n\nvar dataViewTag = '[object DataView]';\n\n/** Used to detect maps, sets, and weakmaps. */\nvar dataViewCtorString = toSource(DataView),\n    mapCtorString = toSource(Map),\n    promiseCtorString = toSource(Promise),\n    setCtorString = toSource(Set),\n    weakMapCtorString = toSource(WeakMap);\n\n/**\n * Gets the `toStringTag` of `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nvar getTag = baseGetTag;\n\n// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.\nif ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||\n    (Map && getTag(new Map) != mapTag) ||\n    (Promise && getTag(Promise.resolve()) != promiseTag) ||\n    (Set && getTag(new Set) != setTag) ||\n    (WeakMap && getTag(new WeakMap) != weakMapTag)) {\n  getTag = function(value) {\n    var result = baseGetTag(value),\n        Ctor = result == objectTag ? value.constructor : undefined,\n        ctorString = Ctor ? toSource(Ctor) : '';\n\n    if (ctorString) {\n      switch (ctorString) {\n        case dataViewCtorString: return dataViewTag;\n        case mapCtorString: return mapTag;\n        case promiseCtorString: return promiseTag;\n        case setCtorString: return setTag;\n        case weakMapCtorString: return weakMapTag;\n      }\n    }\n    return result;\n  };\n}\n\nmodule.exports = getTag;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_getTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Gets the value at `key` of `object`.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {string} key The key of the property to get.\n * @returns {*} Returns the property value.\n */\nfunction getValue(object, key) {\n  return object == null ? undefined : object[key];\n}\n\nmodule.exports = getValue;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_getValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var castPath = __webpack_require__(/*! ./_castPath */ \"./node_modules/lodash/_castPath.js\"),\n    isArguments = __webpack_require__(/*! ./isArguments */ \"./node_modules/lodash/isArguments.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isIndex = __webpack_require__(/*! ./_isIndex */ \"./node_modules/lodash/_isIndex.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/**\n * Checks if `path` exists on `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Array|string} path The path to check.\n * @param {Function} hasFunc The function to check properties.\n * @returns {boolean} Returns `true` if `path` exists, else `false`.\n */\nfunction hasPath(object, path, hasFunc) {\n  path = castPath(path, object);\n\n  var index = -1,\n      length = path.length,\n      result = false;\n\n  while (++index < length) {\n    var key = toKey(path[index]);\n    if (!(result = object != null && hasFunc(object, key))) {\n      break;\n    }\n    object = object[key];\n  }\n  if (result || ++index != length) {\n    return result;\n  }\n  length = object == null ? 0 : object.length;\n  return !!length && isLength(length) && isIndex(key, length) &&\n    (isArray(object) || isArguments(object));\n}\n\nmodule.exports = hasPath;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_hasPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_hasUnicode.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hasUnicode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to compose unicode character classes. */\nvar rsAstralRange = '\\\\ud800-\\\\udfff',\n    rsComboMarksRange = '\\\\u0300-\\\\u036f',\n    reComboHalfMarksRange = '\\\\ufe20-\\\\ufe2f',\n    rsComboSymbolsRange = '\\\\u20d0-\\\\u20ff',\n    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,\n    rsVarRange = '\\\\ufe0e\\\\ufe0f';\n\n/** Used to compose unicode capture groups. */\nvar rsZWJ = '\\\\u200d';\n\n/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */\nvar reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');\n\n/**\n * Checks if `string` contains Unicode symbols.\n *\n * @private\n * @param {string} string The string to inspect.\n * @returns {boolean} Returns `true` if a symbol is found, else `false`.\n */\nfunction hasUnicode(string) {\n  return reHasUnicode.test(string);\n}\n\nmodule.exports = hasUnicode;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_hasUnicode.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/**\n * Removes all key-value entries from the hash.\n *\n * @private\n * @name clear\n * @memberOf Hash\n */\nfunction hashClear() {\n  this.__data__ = nativeCreate ? nativeCreate(null) : {};\n  this.size = 0;\n}\n\nmodule.exports = hashClear;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_hashClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Removes `key` and its value from the hash.\n *\n * @private\n * @name delete\n * @memberOf Hash\n * @param {Object} hash The hash to modify.\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction hashDelete(key) {\n  var result = this.has(key) && delete this.__data__[key];\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = hashDelete;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_hashDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Gets the hash value for `key`.\n *\n * @private\n * @name get\n * @memberOf Hash\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction hashGet(key) {\n  var data = this.__data__;\n  if (nativeCreate) {\n    var result = data[key];\n    return result === HASH_UNDEFINED ? undefined : result;\n  }\n  return hasOwnProperty.call(data, key) ? data[key] : undefined;\n}\n\nmodule.exports = hashGet;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_hashGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Checks if a hash value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Hash\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction hashHas(key) {\n  var data = this.__data__;\n  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);\n}\n\nmodule.exports = hashHas;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_hashHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/**\n * Sets the hash `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Hash\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the hash instance.\n */\nfunction hashSet(key, value) {\n  var data = this.__data__;\n  this.size += this.has(key) ? 0 : 1;\n  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;\n  return this;\n}\n\nmodule.exports = hashSet;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_hashSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/** Used to detect unsigned integer values. */\nvar reIsUint = /^(?:0|[1-9]\\d*)$/;\n\n/**\n * Checks if `value` is a valid array-like index.\n *\n * @private\n * @param {*} value The value to check.\n * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.\n * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.\n */\nfunction isIndex(value, length) {\n  var type = typeof value;\n  length = length == null ? MAX_SAFE_INTEGER : length;\n\n  return !!length &&\n    (type == 'number' ||\n      (type != 'symbol' && reIsUint.test(value))) &&\n        (value > -1 && value % 1 == 0 && value < length);\n}\n\nmodule.exports = isIndex;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_isIndex.js?");

/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used to match property names within property paths. */\nvar reIsDeepProp = /\\.|\\[(?:[^[\\]]*|([\"'])(?:(?!\\1)[^\\\\]|\\\\.)*?\\1)\\]/,\n    reIsPlainProp = /^\\w*$/;\n\n/**\n * Checks if `value` is a property name and not a property path.\n *\n * @private\n * @param {*} value The value to check.\n * @param {Object} [object] The object to query keys on.\n * @returns {boolean} Returns `true` if `value` is a property name, else `false`.\n */\nfunction isKey(value, object) {\n  if (isArray(value)) {\n    return false;\n  }\n  var type = typeof value;\n  if (type == 'number' || type == 'symbol' || type == 'boolean' ||\n      value == null || isSymbol(value)) {\n    return true;\n  }\n  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||\n    (object != null && value in Object(object));\n}\n\nmodule.exports = isKey;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_isKey.js?");

/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is suitable for use as unique object key.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is suitable, else `false`.\n */\nfunction isKeyable(value) {\n  var type = typeof value;\n  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')\n    ? (value !== '__proto__')\n    : (value === null);\n}\n\nmodule.exports = isKeyable;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_isKeyable.js?");

/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var coreJsData = __webpack_require__(/*! ./_coreJsData */ \"./node_modules/lodash/_coreJsData.js\");\n\n/** Used to detect methods masquerading as native. */\nvar maskSrcKey = (function() {\n  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');\n  return uid ? ('Symbol(src)_1.' + uid) : '';\n}());\n\n/**\n * Checks if `func` has its source masked.\n *\n * @private\n * @param {Function} func The function to check.\n * @returns {boolean} Returns `true` if `func` is masked, else `false`.\n */\nfunction isMasked(func) {\n  return !!maskSrcKey && (maskSrcKey in func);\n}\n\nmodule.exports = isMasked;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_isMasked.js?");

/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Checks if `value` is likely a prototype object.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.\n */\nfunction isPrototype(value) {\n  var Ctor = value && value.constructor,\n      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;\n\n  return value === proto;\n}\n\nmodule.exports = isPrototype;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_isPrototype.js?");

/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/**\n * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` if suitable for strict\n *  equality comparisons, else `false`.\n */\nfunction isStrictComparable(value) {\n  return value === value && !isObject(value);\n}\n\nmodule.exports = isStrictComparable;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_isStrictComparable.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Removes all key-value entries from the list cache.\n *\n * @private\n * @name clear\n * @memberOf ListCache\n */\nfunction listCacheClear() {\n  this.__data__ = [];\n  this.size = 0;\n}\n\nmodule.exports = listCacheClear;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_listCacheClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/** Used for built-in method references. */\nvar arrayProto = Array.prototype;\n\n/** Built-in value references. */\nvar splice = arrayProto.splice;\n\n/**\n * Removes `key` and its value from the list cache.\n *\n * @private\n * @name delete\n * @memberOf ListCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction listCacheDelete(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    return false;\n  }\n  var lastIndex = data.length - 1;\n  if (index == lastIndex) {\n    data.pop();\n  } else {\n    splice.call(data, index, 1);\n  }\n  --this.size;\n  return true;\n}\n\nmodule.exports = listCacheDelete;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_listCacheDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Gets the list cache value for `key`.\n *\n * @private\n * @name get\n * @memberOf ListCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction listCacheGet(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  return index < 0 ? undefined : data[index][1];\n}\n\nmodule.exports = listCacheGet;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_listCacheGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Checks if a list cache value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf ListCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction listCacheHas(key) {\n  return assocIndexOf(this.__data__, key) > -1;\n}\n\nmodule.exports = listCacheHas;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_listCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Sets the list cache `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf ListCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the list cache instance.\n */\nfunction listCacheSet(key, value) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    ++this.size;\n    data.push([key, value]);\n  } else {\n    data[index][1] = value;\n  }\n  return this;\n}\n\nmodule.exports = listCacheSet;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_listCacheSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Hash = __webpack_require__(/*! ./_Hash */ \"./node_modules/lodash/_Hash.js\"),\n    ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\");\n\n/**\n * Removes all key-value entries from the map.\n *\n * @private\n * @name clear\n * @memberOf MapCache\n */\nfunction mapCacheClear() {\n  this.size = 0;\n  this.__data__ = {\n    'hash': new Hash,\n    'map': new (Map || ListCache),\n    'string': new Hash\n  };\n}\n\nmodule.exports = mapCacheClear;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_mapCacheClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Removes `key` and its value from the map.\n *\n * @private\n * @name delete\n * @memberOf MapCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction mapCacheDelete(key) {\n  var result = getMapData(this, key)['delete'](key);\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = mapCacheDelete;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_mapCacheDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Gets the map value for `key`.\n *\n * @private\n * @name get\n * @memberOf MapCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction mapCacheGet(key) {\n  return getMapData(this, key).get(key);\n}\n\nmodule.exports = mapCacheGet;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_mapCacheGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Checks if a map value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf MapCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction mapCacheHas(key) {\n  return getMapData(this, key).has(key);\n}\n\nmodule.exports = mapCacheHas;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_mapCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Sets the map `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf MapCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the map cache instance.\n */\nfunction mapCacheSet(key, value) {\n  var data = getMapData(this, key),\n      size = data.size;\n\n  data.set(key, value);\n  this.size += data.size == size ? 0 : 1;\n  return this;\n}\n\nmodule.exports = mapCacheSet;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_mapCacheSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Converts `map` to its key-value pairs.\n *\n * @private\n * @param {Object} map The map to convert.\n * @returns {Array} Returns the key-value pairs.\n */\nfunction mapToArray(map) {\n  var index = -1,\n      result = Array(map.size);\n\n  map.forEach(function(value, key) {\n    result[++index] = [key, value];\n  });\n  return result;\n}\n\nmodule.exports = mapToArray;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_mapToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `matchesProperty` for source values suitable\n * for strict equality comparisons, i.e. `===`.\n *\n * @private\n * @param {string} key The key of the property to get.\n * @param {*} srcValue The value to match.\n * @returns {Function} Returns the new spec function.\n */\nfunction matchesStrictComparable(key, srcValue) {\n  return function(object) {\n    if (object == null) {\n      return false;\n    }\n    return object[key] === srcValue &&\n      (srcValue !== undefined || (key in Object(object)));\n  };\n}\n\nmodule.exports = matchesStrictComparable;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_matchesStrictComparable.js?");

/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var memoize = __webpack_require__(/*! ./memoize */ \"./node_modules/lodash/memoize.js\");\n\n/** Used as the maximum memoize cache size. */\nvar MAX_MEMOIZE_SIZE = 500;\n\n/**\n * A specialized version of `_.memoize` which clears the memoized function's\n * cache when it exceeds `MAX_MEMOIZE_SIZE`.\n *\n * @private\n * @param {Function} func The function to have its output memoized.\n * @returns {Function} Returns the new memoized function.\n */\nfunction memoizeCapped(func) {\n  var result = memoize(func, function(key) {\n    if (cache.size === MAX_MEMOIZE_SIZE) {\n      cache.clear();\n    }\n    return key;\n  });\n\n  var cache = result.cache;\n  return result;\n}\n\nmodule.exports = memoizeCapped;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_memoizeCapped.js?");

/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\");\n\n/* Built-in method references that are verified to be native. */\nvar nativeCreate = getNative(Object, 'create');\n\nmodule.exports = nativeCreate;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_nativeCreate.js?");

/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var overArg = __webpack_require__(/*! ./_overArg */ \"./node_modules/lodash/_overArg.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeKeys = overArg(Object.keys, Object);\n\nmodule.exports = nativeKeys;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_nativeKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `exports`. */\nvar freeExports =  true && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Detect free variable `process` from Node.js. */\nvar freeProcess = moduleExports && freeGlobal.process;\n\n/** Used to access faster Node.js helpers. */\nvar nodeUtil = (function() {\n  try {\n    // Use `util.types` for Node.js 10+.\n    var types = freeModule && freeModule.require && freeModule.require('util').types;\n\n    if (types) {\n      return types;\n    }\n\n    // Legacy `process.binding('util')` for Node.js < 10.\n    return freeProcess && freeProcess.binding && freeProcess.binding('util');\n  } catch (e) {}\n}());\n\nmodule.exports = nodeUtil;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_nodeUtil.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Creates a unary function that invokes `func` with its argument transformed.\n *\n * @private\n * @param {Function} func The function to wrap.\n * @param {Function} transform The argument transform.\n * @returns {Function} Returns the new function.\n */\nfunction overArg(func, transform) {\n  return function(arg) {\n    return func(transform(arg));\n  };\n}\n\nmodule.exports = overArg;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_overArg.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/**\n * Adds `value` to the array cache.\n *\n * @private\n * @name add\n * @memberOf SetCache\n * @alias push\n * @param {*} value The value to cache.\n * @returns {Object} Returns the cache instance.\n */\nfunction setCacheAdd(value) {\n  this.__data__.set(value, HASH_UNDEFINED);\n  return this;\n}\n\nmodule.exports = setCacheAdd;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_setCacheAdd.js?");

/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is in the array cache.\n *\n * @private\n * @name has\n * @memberOf SetCache\n * @param {*} value The value to search for.\n * @returns {number} Returns `true` if `value` is found, else `false`.\n */\nfunction setCacheHas(value) {\n  return this.__data__.has(value);\n}\n\nmodule.exports = setCacheHas;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_setCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Converts `set` to an array of its values.\n *\n * @private\n * @param {Object} set The set to convert.\n * @returns {Array} Returns the values.\n */\nfunction setToArray(set) {\n  var index = -1,\n      result = Array(set.size);\n\n  set.forEach(function(value) {\n    result[++index] = value;\n  });\n  return result;\n}\n\nmodule.exports = setToArray;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_setToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\");\n\n/**\n * Removes all key-value entries from the stack.\n *\n * @private\n * @name clear\n * @memberOf Stack\n */\nfunction stackClear() {\n  this.__data__ = new ListCache;\n  this.size = 0;\n}\n\nmodule.exports = stackClear;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_stackClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Removes `key` and its value from the stack.\n *\n * @private\n * @name delete\n * @memberOf Stack\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction stackDelete(key) {\n  var data = this.__data__,\n      result = data['delete'](key);\n\n  this.size = data.size;\n  return result;\n}\n\nmodule.exports = stackDelete;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_stackDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Gets the stack value for `key`.\n *\n * @private\n * @name get\n * @memberOf Stack\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction stackGet(key) {\n  return this.__data__.get(key);\n}\n\nmodule.exports = stackGet;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_stackGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if a stack value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Stack\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction stackHas(key) {\n  return this.__data__.has(key);\n}\n\nmodule.exports = stackHas;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_stackHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\"),\n    MapCache = __webpack_require__(/*! ./_MapCache */ \"./node_modules/lodash/_MapCache.js\");\n\n/** Used as the size to enable large array optimizations. */\nvar LARGE_ARRAY_SIZE = 200;\n\n/**\n * Sets the stack `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Stack\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the stack cache instance.\n */\nfunction stackSet(key, value) {\n  var data = this.__data__;\n  if (data instanceof ListCache) {\n    var pairs = data.__data__;\n    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {\n      pairs.push([key, value]);\n      this.size = ++data.size;\n      return this;\n    }\n    data = this.__data__ = new MapCache(pairs);\n  }\n  data.set(key, value);\n  this.size = data.size;\n  return this;\n}\n\nmodule.exports = stackSet;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_stackSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_stringSize.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stringSize.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var asciiSize = __webpack_require__(/*! ./_asciiSize */ \"./node_modules/lodash/_asciiSize.js\"),\n    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ \"./node_modules/lodash/_hasUnicode.js\"),\n    unicodeSize = __webpack_require__(/*! ./_unicodeSize */ \"./node_modules/lodash/_unicodeSize.js\");\n\n/**\n * Gets the number of symbols in `string`.\n *\n * @private\n * @param {string} string The string to inspect.\n * @returns {number} Returns the string size.\n */\nfunction stringSize(string) {\n  return hasUnicode(string)\n    ? unicodeSize(string)\n    : asciiSize(string);\n}\n\nmodule.exports = stringSize;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_stringSize.js?");

/***/ }),

/***/ "./node_modules/lodash/_stringToArray.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_stringToArray.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var asciiToArray = __webpack_require__(/*! ./_asciiToArray */ \"./node_modules/lodash/_asciiToArray.js\"),\n    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ \"./node_modules/lodash/_hasUnicode.js\"),\n    unicodeToArray = __webpack_require__(/*! ./_unicodeToArray */ \"./node_modules/lodash/_unicodeToArray.js\");\n\n/**\n * Converts `string` to an array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the converted array.\n */\nfunction stringToArray(string) {\n  return hasUnicode(string)\n    ? unicodeToArray(string)\n    : asciiToArray(string);\n}\n\nmodule.exports = stringToArray;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_stringToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ \"./node_modules/lodash/_memoizeCapped.js\");\n\n/** Used to match property names within property paths. */\nvar rePropName = /[^.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))/g;\n\n/** Used to match backslashes in property paths. */\nvar reEscapeChar = /\\\\(\\\\)?/g;\n\n/**\n * Converts `string` to a property path array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the property path array.\n */\nvar stringToPath = memoizeCapped(function(string) {\n  var result = [];\n  if (string.charCodeAt(0) === 46 /* . */) {\n    result.push('');\n  }\n  string.replace(rePropName, function(match, number, quote, subString) {\n    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));\n  });\n  return result;\n});\n\nmodule.exports = stringToPath;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_stringToPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0;\n\n/**\n * Converts `value` to a string key if it's not a string or symbol.\n *\n * @private\n * @param {*} value The value to inspect.\n * @returns {string|symbol} Returns the key.\n */\nfunction toKey(value) {\n  if (typeof value == 'string' || isSymbol(value)) {\n    return value;\n  }\n  var result = (value + '');\n  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;\n}\n\nmodule.exports = toKey;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_toKey.js?");

/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar funcProto = Function.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/**\n * Converts `func` to its source code.\n *\n * @private\n * @param {Function} func The function to convert.\n * @returns {string} Returns the source code.\n */\nfunction toSource(func) {\n  if (func != null) {\n    try {\n      return funcToString.call(func);\n    } catch (e) {}\n    try {\n      return (func + '');\n    } catch (e) {}\n  }\n  return '';\n}\n\nmodule.exports = toSource;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_toSource.js?");

/***/ }),

/***/ "./node_modules/lodash/_unicodeSize.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_unicodeSize.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to compose unicode character classes. */\nvar rsAstralRange = '\\\\ud800-\\\\udfff',\n    rsComboMarksRange = '\\\\u0300-\\\\u036f',\n    reComboHalfMarksRange = '\\\\ufe20-\\\\ufe2f',\n    rsComboSymbolsRange = '\\\\u20d0-\\\\u20ff',\n    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,\n    rsVarRange = '\\\\ufe0e\\\\ufe0f';\n\n/** Used to compose unicode capture groups. */\nvar rsAstral = '[' + rsAstralRange + ']',\n    rsCombo = '[' + rsComboRange + ']',\n    rsFitz = '\\\\ud83c[\\\\udffb-\\\\udfff]',\n    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',\n    rsNonAstral = '[^' + rsAstralRange + ']',\n    rsRegional = '(?:\\\\ud83c[\\\\udde6-\\\\uddff]){2}',\n    rsSurrPair = '[\\\\ud800-\\\\udbff][\\\\udc00-\\\\udfff]',\n    rsZWJ = '\\\\u200d';\n\n/** Used to compose unicode regexes. */\nvar reOptMod = rsModifier + '?',\n    rsOptVar = '[' + rsVarRange + ']?',\n    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',\n    rsSeq = rsOptVar + reOptMod + rsOptJoin,\n    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';\n\n/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */\nvar reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');\n\n/**\n * Gets the size of a Unicode `string`.\n *\n * @private\n * @param {string} string The string inspect.\n * @returns {number} Returns the string size.\n */\nfunction unicodeSize(string) {\n  var result = reUnicode.lastIndex = 0;\n  while (reUnicode.test(string)) {\n    ++result;\n  }\n  return result;\n}\n\nmodule.exports = unicodeSize;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_unicodeSize.js?");

/***/ }),

/***/ "./node_modules/lodash/_unicodeToArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_unicodeToArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to compose unicode character classes. */\nvar rsAstralRange = '\\\\ud800-\\\\udfff',\n    rsComboMarksRange = '\\\\u0300-\\\\u036f',\n    reComboHalfMarksRange = '\\\\ufe20-\\\\ufe2f',\n    rsComboSymbolsRange = '\\\\u20d0-\\\\u20ff',\n    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,\n    rsVarRange = '\\\\ufe0e\\\\ufe0f';\n\n/** Used to compose unicode capture groups. */\nvar rsAstral = '[' + rsAstralRange + ']',\n    rsCombo = '[' + rsComboRange + ']',\n    rsFitz = '\\\\ud83c[\\\\udffb-\\\\udfff]',\n    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',\n    rsNonAstral = '[^' + rsAstralRange + ']',\n    rsRegional = '(?:\\\\ud83c[\\\\udde6-\\\\uddff]){2}',\n    rsSurrPair = '[\\\\ud800-\\\\udbff][\\\\udc00-\\\\udfff]',\n    rsZWJ = '\\\\u200d';\n\n/** Used to compose unicode regexes. */\nvar reOptMod = rsModifier + '?',\n    rsOptVar = '[' + rsVarRange + ']?',\n    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',\n    rsSeq = rsOptVar + reOptMod + rsOptJoin,\n    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';\n\n/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */\nvar reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');\n\n/**\n * Converts a Unicode `string` to an array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the converted array.\n */\nfunction unicodeToArray(string) {\n  return string.match(reUnicode) || [];\n}\n\nmodule.exports = unicodeToArray;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/_unicodeToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Performs a\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * comparison between two values to determine if they are equivalent.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.eq(object, object);\n * // => true\n *\n * _.eq(object, other);\n * // => false\n *\n * _.eq('a', 'a');\n * // => true\n *\n * _.eq('a', Object('a'));\n * // => false\n *\n * _.eq(NaN, NaN);\n * // => true\n */\nfunction eq(value, other) {\n  return value === other || (value !== value && other !== other);\n}\n\nmodule.exports = eq;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/eq.js?");

/***/ }),

/***/ "./node_modules/lodash/findIndex.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/findIndex.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ \"./node_modules/lodash/_baseFindIndex.js\"),\n    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ \"./node_modules/lodash/_baseIteratee.js\"),\n    toInteger = __webpack_require__(/*! ./toInteger */ \"./node_modules/lodash/toInteger.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeMax = Math.max;\n\n/**\n * This method is like `_.find` except that it returns the index of the first\n * element `predicate` returns truthy for instead of the element itself.\n *\n * @static\n * @memberOf _\n * @since 1.1.0\n * @category Array\n * @param {Array} array The array to inspect.\n * @param {Function} [predicate=_.identity] The function invoked per iteration.\n * @param {number} [fromIndex=0] The index to search from.\n * @returns {number} Returns the index of the found element, else `-1`.\n * @example\n *\n * var users = [\n *   { 'user': 'barney',  'active': false },\n *   { 'user': 'fred',    'active': false },\n *   { 'user': 'pebbles', 'active': true }\n * ];\n *\n * _.findIndex(users, function(o) { return o.user == 'barney'; });\n * // => 0\n *\n * // The `_.matches` iteratee shorthand.\n * _.findIndex(users, { 'user': 'fred', 'active': false });\n * // => 1\n *\n * // The `_.matchesProperty` iteratee shorthand.\n * _.findIndex(users, ['active', false]);\n * // => 0\n *\n * // The `_.property` iteratee shorthand.\n * _.findIndex(users, 'active');\n * // => 2\n */\nfunction findIndex(array, predicate, fromIndex) {\n  var length = array == null ? 0 : array.length;\n  if (!length) {\n    return -1;\n  }\n  var index = fromIndex == null ? 0 : toInteger(fromIndex);\n  if (index < 0) {\n    index = nativeMax(length + index, 0);\n  }\n  return baseFindIndex(array, baseIteratee(predicate, 3), index);\n}\n\nmodule.exports = findIndex;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/findIndex.js?");

/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGet = __webpack_require__(/*! ./_baseGet */ \"./node_modules/lodash/_baseGet.js\");\n\n/**\n * Gets the value at `path` of `object`. If the resolved value is\n * `undefined`, the `defaultValue` is returned in its place.\n *\n * @static\n * @memberOf _\n * @since 3.7.0\n * @category Object\n * @param {Object} object The object to query.\n * @param {Array|string} path The path of the property to get.\n * @param {*} [defaultValue] The value returned for `undefined` resolved values.\n * @returns {*} Returns the resolved value.\n * @example\n *\n * var object = { 'a': [{ 'b': { 'c': 3 } }] };\n *\n * _.get(object, 'a[0].b.c');\n * // => 3\n *\n * _.get(object, ['a', '0', 'b', 'c']);\n * // => 3\n *\n * _.get(object, 'a.b.c', 'default');\n * // => 'default'\n */\nfunction get(object, path, defaultValue) {\n  var result = object == null ? undefined : baseGet(object, path);\n  return result === undefined ? defaultValue : result;\n}\n\nmodule.exports = get;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/get.js?");

/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ \"./node_modules/lodash/_baseHasIn.js\"),\n    hasPath = __webpack_require__(/*! ./_hasPath */ \"./node_modules/lodash/_hasPath.js\");\n\n/**\n * Checks if `path` is a direct or inherited property of `object`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Object\n * @param {Object} object The object to query.\n * @param {Array|string} path The path to check.\n * @returns {boolean} Returns `true` if `path` exists, else `false`.\n * @example\n *\n * var object = _.create({ 'a': _.create({ 'b': 2 }) });\n *\n * _.hasIn(object, 'a');\n * // => true\n *\n * _.hasIn(object, 'a.b');\n * // => true\n *\n * _.hasIn(object, ['a', 'b']);\n * // => true\n *\n * _.hasIn(object, 'b');\n * // => false\n */\nfunction hasIn(object, path) {\n  return object != null && hasPath(object, path, baseHasIn);\n}\n\nmodule.exports = hasIn;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/hasIn.js?");

/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns the first argument it receives.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Util\n * @param {*} value Any value.\n * @returns {*} Returns `value`.\n * @example\n *\n * var object = { 'a': 1 };\n *\n * console.log(_.identity(object) === object);\n * // => true\n */\nfunction identity(value) {\n  return value;\n}\n\nmodule.exports = identity;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/identity.js?");

/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ \"./node_modules/lodash/_baseIsArguments.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Built-in value references. */\nvar propertyIsEnumerable = objectProto.propertyIsEnumerable;\n\n/**\n * Checks if `value` is likely an `arguments` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n *  else `false`.\n * @example\n *\n * _.isArguments(function() { return arguments; }());\n * // => true\n *\n * _.isArguments([1, 2, 3]);\n * // => false\n */\nvar isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {\n  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&\n    !propertyIsEnumerable.call(value, 'callee');\n};\n\nmodule.exports = isArguments;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/isArguments.js?");

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\nmodule.exports = isArray;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/isArray.js?");

/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\");\n\n/**\n * Checks if `value` is array-like. A value is considered array-like if it's\n * not a function and has a `value.length` that's an integer greater than or\n * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n * @example\n *\n * _.isArrayLike([1, 2, 3]);\n * // => true\n *\n * _.isArrayLike(document.body.children);\n * // => true\n *\n * _.isArrayLike('abc');\n * // => true\n *\n * _.isArrayLike(_.noop);\n * // => false\n */\nfunction isArrayLike(value) {\n  return value != null && isLength(value.length) && !isFunction(value);\n}\n\nmodule.exports = isArrayLike;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/isArrayLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\"),\n    stubFalse = __webpack_require__(/*! ./stubFalse */ \"./node_modules/lodash/stubFalse.js\");\n\n/** Detect free variable `exports`. */\nvar freeExports =  true && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Built-in value references. */\nvar Buffer = moduleExports ? root.Buffer : undefined;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;\n\n/**\n * Checks if `value` is a buffer.\n *\n * @static\n * @memberOf _\n * @since 4.3.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.\n * @example\n *\n * _.isBuffer(new Buffer(2));\n * // => true\n *\n * _.isBuffer(new Uint8Array(2));\n * // => false\n */\nvar isBuffer = nativeIsBuffer || stubFalse;\n\nmodule.exports = isBuffer;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/isBuffer.js?");

/***/ }),

/***/ "./node_modules/lodash/isEmpty.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEmpty.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseKeys = __webpack_require__(/*! ./_baseKeys */ \"./node_modules/lodash/_baseKeys.js\"),\n    getTag = __webpack_require__(/*! ./_getTag */ \"./node_modules/lodash/_getTag.js\"),\n    isArguments = __webpack_require__(/*! ./isArguments */ \"./node_modules/lodash/isArguments.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\"),\n    isBuffer = __webpack_require__(/*! ./isBuffer */ \"./node_modules/lodash/isBuffer.js\"),\n    isPrototype = __webpack_require__(/*! ./_isPrototype */ \"./node_modules/lodash/_isPrototype.js\"),\n    isTypedArray = __webpack_require__(/*! ./isTypedArray */ \"./node_modules/lodash/isTypedArray.js\");\n\n/** `Object#toString` result references. */\nvar mapTag = '[object Map]',\n    setTag = '[object Set]';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Checks if `value` is an empty object, collection, map, or set.\n *\n * Objects are considered empty if they have no own enumerable string keyed\n * properties.\n *\n * Array-like values such as `arguments` objects, arrays, buffers, strings, or\n * jQuery-like collections are considered empty if they have a `length` of `0`.\n * Similarly, maps and sets are considered empty if they have a `size` of `0`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is empty, else `false`.\n * @example\n *\n * _.isEmpty(null);\n * // => true\n *\n * _.isEmpty(true);\n * // => true\n *\n * _.isEmpty(1);\n * // => true\n *\n * _.isEmpty([1, 2, 3]);\n * // => false\n *\n * _.isEmpty({ 'a': 1 });\n * // => false\n */\nfunction isEmpty(value) {\n  if (value == null) {\n    return true;\n  }\n  if (isArrayLike(value) &&\n      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||\n        isBuffer(value) || isTypedArray(value) || isArguments(value))) {\n    return !value.length;\n  }\n  var tag = getTag(value);\n  if (tag == mapTag || tag == setTag) {\n    return !value.size;\n  }\n  if (isPrototype(value)) {\n    return !baseKeys(value).length;\n  }\n  for (var key in value) {\n    if (hasOwnProperty.call(value, key)) {\n      return false;\n    }\n  }\n  return true;\n}\n\nmodule.exports = isEmpty;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/isEmpty.js?");

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** `Object#toString` result references. */\nvar asyncTag = '[object AsyncFunction]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    proxyTag = '[object Proxy]';\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  if (!isObject(value)) {\n    return false;\n  }\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 9 which returns 'object' for typed arrays and other constructors.\n  var tag = baseGetTag(value);\n  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;\n}\n\nmodule.exports = isFunction;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/isFunction.js?");

/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This method is loosely based on\n * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n * @example\n *\n * _.isLength(3);\n * // => true\n *\n * _.isLength(Number.MIN_VALUE);\n * // => false\n *\n * _.isLength(Infinity);\n * // => false\n *\n * _.isLength('3');\n * // => false\n */\nfunction isLength(value) {\n  return typeof value == 'number' &&\n    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\nmodule.exports = isLength;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/isLength.js?");

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/isObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && baseGetTag(value) == symbolTag);\n}\n\nmodule.exports = isSymbol;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/isSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ \"./node_modules/lodash/_baseIsTypedArray.js\"),\n    baseUnary = __webpack_require__(/*! ./_baseUnary */ \"./node_modules/lodash/_baseUnary.js\"),\n    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ \"./node_modules/lodash/_nodeUtil.js\");\n\n/* Node.js helper references. */\nvar nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;\n\n/**\n * Checks if `value` is classified as a typed array.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.\n * @example\n *\n * _.isTypedArray(new Uint8Array);\n * // => true\n *\n * _.isTypedArray([]);\n * // => false\n */\nvar isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;\n\nmodule.exports = isTypedArray;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/isTypedArray.js?");

/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ \"./node_modules/lodash/_arrayLikeKeys.js\"),\n    baseKeys = __webpack_require__(/*! ./_baseKeys */ \"./node_modules/lodash/_baseKeys.js\"),\n    isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\");\n\n/**\n * Creates an array of the own enumerable property names of `object`.\n *\n * **Note:** Non-object values are coerced to objects. See the\n * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)\n * for more details.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.keys(new Foo);\n * // => ['a', 'b'] (iteration order is not guaranteed)\n *\n * _.keys('hi');\n * // => ['0', '1']\n */\nfunction keys(object) {\n  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);\n}\n\nmodule.exports = keys;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/keys.js?");

/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MapCache = __webpack_require__(/*! ./_MapCache */ \"./node_modules/lodash/_MapCache.js\");\n\n/** Error message constants. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/**\n * Creates a function that memoizes the result of `func`. If `resolver` is\n * provided, it determines the cache key for storing the result based on the\n * arguments provided to the memoized function. By default, the first argument\n * provided to the memoized function is used as the map cache key. The `func`\n * is invoked with the `this` binding of the memoized function.\n *\n * **Note:** The cache is exposed as the `cache` property on the memoized\n * function. Its creation may be customized by replacing the `_.memoize.Cache`\n * constructor with one whose instances implement the\n * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)\n * method interface of `clear`, `delete`, `get`, `has`, and `set`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to have its output memoized.\n * @param {Function} [resolver] The function to resolve the cache key.\n * @returns {Function} Returns the new memoized function.\n * @example\n *\n * var object = { 'a': 1, 'b': 2 };\n * var other = { 'c': 3, 'd': 4 };\n *\n * var values = _.memoize(_.values);\n * values(object);\n * // => [1, 2]\n *\n * values(other);\n * // => [3, 4]\n *\n * object.a = 2;\n * values(object);\n * // => [1, 2]\n *\n * // Modify the result cache.\n * values.cache.set(object, ['a', 'b']);\n * values(object);\n * // => ['a', 'b']\n *\n * // Replace `_.memoize.Cache`.\n * _.memoize.Cache = WeakMap;\n */\nfunction memoize(func, resolver) {\n  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  var memoized = function() {\n    var args = arguments,\n        key = resolver ? resolver.apply(this, args) : args[0],\n        cache = memoized.cache;\n\n    if (cache.has(key)) {\n      return cache.get(key);\n    }\n    var result = func.apply(this, args);\n    memoized.cache = cache.set(key, result) || cache;\n    return result;\n  };\n  memoized.cache = new (memoize.Cache || MapCache);\n  return memoized;\n}\n\n// Expose `MapCache`.\nmemoize.Cache = MapCache;\n\nmodule.exports = memoize;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/memoize.js?");

/***/ }),

/***/ "./node_modules/lodash/padStart.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/padStart.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createPadding = __webpack_require__(/*! ./_createPadding */ \"./node_modules/lodash/_createPadding.js\"),\n    stringSize = __webpack_require__(/*! ./_stringSize */ \"./node_modules/lodash/_stringSize.js\"),\n    toInteger = __webpack_require__(/*! ./toInteger */ \"./node_modules/lodash/toInteger.js\"),\n    toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n\n/**\n * Pads `string` on the left side if it's shorter than `length`. Padding\n * characters are truncated if they exceed `length`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category String\n * @param {string} [string=''] The string to pad.\n * @param {number} [length=0] The padding length.\n * @param {string} [chars=' '] The string used as padding.\n * @returns {string} Returns the padded string.\n * @example\n *\n * _.padStart('abc', 6);\n * // => '   abc'\n *\n * _.padStart('abc', 6, '_-');\n * // => '_-_abc'\n *\n * _.padStart('abc', 3);\n * // => 'abc'\n */\nfunction padStart(string, length, chars) {\n  string = toString(string);\n  length = toInteger(length);\n\n  var strLength = length ? stringSize(string) : 0;\n  return (length && strLength < length)\n    ? (createPadding(length - strLength, chars) + string)\n    : string;\n}\n\nmodule.exports = padStart;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/padStart.js?");

/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseProperty = __webpack_require__(/*! ./_baseProperty */ \"./node_modules/lodash/_baseProperty.js\"),\n    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ \"./node_modules/lodash/_basePropertyDeep.js\"),\n    isKey = __webpack_require__(/*! ./_isKey */ \"./node_modules/lodash/_isKey.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/**\n * Creates a function that returns the value at `path` of a given object.\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Util\n * @param {Array|string} path The path of the property to get.\n * @returns {Function} Returns the new accessor function.\n * @example\n *\n * var objects = [\n *   { 'a': { 'b': 2 } },\n *   { 'a': { 'b': 1 } }\n * ];\n *\n * _.map(objects, _.property('a.b'));\n * // => [2, 1]\n *\n * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');\n * // => [1, 2]\n */\nfunction property(path) {\n  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);\n}\n\nmodule.exports = property;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/property.js?");

/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns a new empty array.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {Array} Returns the new empty array.\n * @example\n *\n * var arrays = _.times(2, _.stubArray);\n *\n * console.log(arrays);\n * // => [[], []]\n *\n * console.log(arrays[0] === arrays[1]);\n * // => false\n */\nfunction stubArray() {\n  return [];\n}\n\nmodule.exports = stubArray;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/stubArray.js?");

/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns `false`.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {boolean} Returns `false`.\n * @example\n *\n * _.times(2, _.stubFalse);\n * // => [false, false]\n */\nfunction stubFalse() {\n  return false;\n}\n\nmodule.exports = stubFalse;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/stubFalse.js?");

/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toNumber = __webpack_require__(/*! ./toNumber */ \"./node_modules/lodash/toNumber.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0,\n    MAX_INTEGER = 1.7976931348623157e+308;\n\n/**\n * Converts `value` to a finite number.\n *\n * @static\n * @memberOf _\n * @since 4.12.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {number} Returns the converted number.\n * @example\n *\n * _.toFinite(3.2);\n * // => 3.2\n *\n * _.toFinite(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toFinite(Infinity);\n * // => 1.7976931348623157e+308\n *\n * _.toFinite('3.2');\n * // => 3.2\n */\nfunction toFinite(value) {\n  if (!value) {\n    return value === 0 ? value : 0;\n  }\n  value = toNumber(value);\n  if (value === INFINITY || value === -INFINITY) {\n    var sign = (value < 0 ? -1 : 1);\n    return sign * MAX_INTEGER;\n  }\n  return value === value ? value : 0;\n}\n\nmodule.exports = toFinite;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/toFinite.js?");

/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toFinite = __webpack_require__(/*! ./toFinite */ \"./node_modules/lodash/toFinite.js\");\n\n/**\n * Converts `value` to an integer.\n *\n * **Note:** This method is loosely based on\n * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {number} Returns the converted integer.\n * @example\n *\n * _.toInteger(3.2);\n * // => 3\n *\n * _.toInteger(Number.MIN_VALUE);\n * // => 0\n *\n * _.toInteger(Infinity);\n * // => 1.7976931348623157e+308\n *\n * _.toInteger('3.2');\n * // => 3\n */\nfunction toInteger(value) {\n  var result = toFinite(value),\n      remainder = result % 1;\n\n  return result === result ? (remainder ? result - remainder : result) : 0;\n}\n\nmodule.exports = toInteger;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/toInteger.js?");

/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar NAN = 0 / 0;\n\n/** Used to match leading and trailing whitespace. */\nvar reTrim = /^\\s+|\\s+$/g;\n\n/** Used to detect bad signed hexadecimal string values. */\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n\n/** Used to detect binary string values. */\nvar reIsBinary = /^0b[01]+$/i;\n\n/** Used to detect octal string values. */\nvar reIsOctal = /^0o[0-7]+$/i;\n\n/** Built-in method references without a dependency on `root`. */\nvar freeParseInt = parseInt;\n\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return NAN;\n  }\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? (other + '') : other;\n  }\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n  value = value.replace(reTrim, '');\n  var isBinary = reIsBinary.test(value);\n  return (isBinary || reIsOctal.test(value))\n    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\n    : (reIsBadHex.test(value) ? NAN : +value);\n}\n\nmodule.exports = toNumber;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/toNumber.js?");

/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseToString = __webpack_require__(/*! ./_baseToString */ \"./node_modules/lodash/_baseToString.js\");\n\n/**\n * Converts `value` to a string. An empty string is returned for `null`\n * and `undefined` values. The sign of `-0` is preserved.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n * @example\n *\n * _.toString(null);\n * // => ''\n *\n * _.toString(-0);\n * // => '-0'\n *\n * _.toString([1, 2, 3]);\n * // => '1,2,3'\n */\nfunction toString(value) {\n  return value == null ? '' : baseToString(value);\n}\n\nmodule.exports = toString;\n\n\n//# sourceURL=webpack://EsmDownloader/./node_modules/lodash/toString.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://EsmDownloader/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack://EsmDownloader/(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/CardBlocks/CardBlock.ts":
/*!*************************************!*\
  !*** ./src/CardBlocks/CardBlock.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar TopLevelBlock_1 = __webpack_require__(/*! DataTypes/TopLevelBlock */ \"./src/DataTypes/TopLevelBlock.ts\");\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar CardBlock = /** @class */ (function (_super) {\n    __extends(CardBlock, _super);\n    function CardBlock(data) {\n        var _this = _super.call(this) || this;\n        _this.datasize = DataReader_1.default.readUint16(data, 3);\n        var bytesLeft = data.slice(5 + _this.datasize).byteLength;\n        if (bytesLeft >= 5 + 128) {\n            if (DataReader_1.default.readUint16(data, 5 + _this.datasize) == DataReader_1.default.readUint16(data, 0)\n                && DataReader_1.default.readUint8(data, 5 + _this.datasize + 2) == 1) {\n                _this.hasSignature = true;\n            }\n        }\n        return _this;\n    }\n    CardBlock.prototype.dataBlockSize = function () {\n        return this.datasize + 5;\n    };\n    CardBlock.prototype.size = function () {\n        return this.datasize + 5 + (this.hasSignature ? 5 + 128 : 0);\n    };\n    return CardBlock;\n}(TopLevelBlock_1.default));\nexports.default = CardBlock;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/CardBlocks/CardBlock.ts?");

/***/ }),

/***/ "./src/CardBlocks/CardCertificate.ts":
/*!*******************************************!*\
  !*** ./src/CardBlocks/CardCertificate.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ \"./src/CardBlocks/CardBlock.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar EncryptedCertificate_1 = __webpack_require__(/*! DataTypes/EncryptedCertificate */ \"./src/DataTypes/EncryptedCertificate.ts\");\nvar CardCertificate = /** @class */ (function (_super) {\n    __extends(CardCertificate, _super);\n    function CardCertificate(data) {\n        var _this = _super.call(this, data) || this;\n        _this.certificate = new EncryptedCertificate_1.default(data.slice(5));\n        return _this;\n    }\n    CardCertificate.prototype.className = function () {\n        return \"CardCertificate\";\n    };\n    CardCertificate.prototype.title = function () {\n        return \"Card Certificate\";\n    };\n    CardCertificate.prototype.toString = function () {\n        var qs = new QString_1.default('CardCertificate');\n        return qs.toString();\n    };\n    CardCertificate.prototype.printOn = function (report) {\n        report.writeBlock(this.certificate, Translation_1.tr(\"certificate\"));\n        if (this.dataBlockSize() != 199) {\n            report.tagValuePair(\"should have\", 199);\n            report.tagValuePair(\"has\", this.dataBlockSize());\n        }\n    };\n    CardCertificate.BLOCK_TYPE = 0xc100;\n    return CardCertificate;\n}(CardBlock_1.default));\nexports.default = CardCertificate;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/CardBlocks/CardCertificate.ts?");

/***/ }),

/***/ "./src/CardBlocks/CardChipIdentification.ts":
/*!**************************************************!*\
  !*** ./src/CardBlocks/CardChipIdentification.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ \"./src/CardBlocks/CardBlock.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar CardChipIdentification = /** @class */ (function (_super) {\n    __extends(CardChipIdentification, _super);\n    function CardChipIdentification(data) {\n        var _this = _super.call(this, data) || this;\n        _this.icSerialNumber = DataReader_1.default.readRawData(data, 5, 4);\n        _this.icManufacturingReference = DataReader_1.default.readRawData(data, 9, 4);\n        return _this;\n    }\n    CardChipIdentification.prototype.className = function () {\n        return \"CardChipIdentification\";\n    };\n    CardChipIdentification.prototype.title = function () {\n        return \"Card chip identification\";\n    };\n    CardChipIdentification.prototype.toString = function () {\n        var qs = new QString_1.default('CardChipIdentification');\n        return qs.toString();\n    };\n    CardChipIdentification.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"icSerialNumber\"), this.icSerialNumber.toString());\n        report.tagValuePair(Translation_1.tr(\"icManufacturingReference\"), this.icManufacturingReference.toString());\n        if (this.dataBlockSize() != 13) {\n            report.tagValuePair(\"should have\", 13);\n            report.tagValuePair(\"has\", this.dataBlockSize());\n        }\n    };\n    CardChipIdentification.BLOCK_TYPE = 0x0005;\n    return CardChipIdentification;\n}(CardBlock_1.default));\nexports.default = CardChipIdentification;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/CardBlocks/CardChipIdentification.ts?");

/***/ }),

/***/ "./src/CardBlocks/CardControlActivityDataRecord.ts":
/*!*********************************************************!*\
  !*** ./src/CardBlocks/CardControlActivityDataRecord.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ \"./src/CardBlocks/CardBlock.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ \"./src/DataTypes/TimeReal.ts\");\nvar Timespan_1 = __webpack_require__(/*! DataTypes/Timespan */ \"./src/DataTypes/Timespan.ts\");\nvar VehicleRegistration_1 = __webpack_require__(/*! DataTypes/VehicleRegistration */ \"./src/DataTypes/VehicleRegistration.ts\");\nvar FullCardNumber_1 = __webpack_require__(/*! DataTypes/FullCardNumber */ \"./src/DataTypes/FullCardNumber.ts\");\nvar CardControlActivityDataRecord = /** @class */ (function (_super) {\n    __extends(CardControlActivityDataRecord, _super);\n    function CardControlActivityDataRecord(data) {\n        var _this = _super.call(this, data) || this;\n        _this.controlType = DataReader_1.default.readUint8(data, 5);\n        _this.controlTime = new TimeReal_1.default(data.slice(6));\n        _this.controlCardNumber = new FullCardNumber_1.default(data.slice(10));\n        _this.controlVehicleRegistration = new VehicleRegistration_1.default(data.slice(28));\n        _this.controlDownloadPeriod = new Timespan_1.default(data.slice(43));\n        return _this;\n    }\n    CardControlActivityDataRecord.prototype.className = function () {\n        return \"CardControlActivityDataRecord\";\n    };\n    CardControlActivityDataRecord.prototype.title = function () {\n        return \"Control Activity Data\";\n    };\n    CardControlActivityDataRecord.prototype.toString = function () {\n        var qs = new QString_1.default('CardControlActivityDataRecord');\n        return qs.toString();\n    };\n    CardControlActivityDataRecord.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"controlType\"), this.controlType);\n        report.writeBlock(this.controlTime, Translation_1.tr(\"controlTime\"));\n        report.writeBlock(this.controlCardNumber, Translation_1.tr(\"controlCardNumber\"));\n        report.writeBlock(this.controlVehicleRegistration, Translation_1.tr(\"controlVehicleRegistration\"));\n        report.writeBlock(this.controlDownloadPeriod, Translation_1.tr(\"controlDownloadPeriod\"));\n        if (this.dataBlockSize() != 51) {\n            report.tagValuePair(\"should have\", 51);\n            report.tagValuePair(\"has\", this.dataBlockSize());\n        }\n    };\n    CardControlActivityDataRecord.BLOCK_TYPE = 0x0508;\n    return CardControlActivityDataRecord;\n}(CardBlock_1.default));\nexports.default = CardControlActivityDataRecord;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/CardBlocks/CardControlActivityDataRecord.ts?");

/***/ }),

/***/ "./src/CardBlocks/CardCurrentUse.ts":
/*!******************************************!*\
  !*** ./src/CardBlocks/CardCurrentUse.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ \"./src/CardBlocks/CardBlock.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ \"./src/DataTypes/TimeReal.ts\");\nvar VehicleRegistration_1 = __webpack_require__(/*! DataTypes/VehicleRegistration */ \"./src/DataTypes/VehicleRegistration.ts\");\nvar CardCurrentUse = /** @class */ (function (_super) {\n    __extends(CardCurrentUse, _super);\n    function CardCurrentUse(data) {\n        var _this = _super.call(this, data) || this;\n        _this.sessionOpenTime = new TimeReal_1.default(data.slice(5));\n        _this.sessionOpenVehicle = new VehicleRegistration_1.default(data.slice(9));\n        return _this;\n    }\n    CardCurrentUse.prototype.className = function () {\n        return \"CardCurrentUse\";\n    };\n    CardCurrentUse.prototype.title = function () {\n        return \"Current Usage\";\n    };\n    CardCurrentUse.prototype.toString = function () {\n        var qs = new QString_1.default('CardCurrentUse');\n        return qs.toString();\n    };\n    CardCurrentUse.prototype.printOn = function (report) {\n        report.writeBlock(this.sessionOpenTime, Translation_1.tr(\"sessionOpenTime\"));\n        report.writeBlock(this.sessionOpenVehicle, Translation_1.tr(\"sessionOpenVehicle\"));\n        if (this.dataBlockSize() != 24) {\n            report.tagValuePair(\"should have\", 24);\n            report.tagValuePair(\"has\", this.dataBlockSize());\n        }\n    };\n    CardCurrentUse.BLOCK_TYPE = 0x0507;\n    return CardCurrentUse;\n}(CardBlock_1.default));\nexports.default = CardCurrentUse;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/CardBlocks/CardCurrentUse.ts?");

/***/ }),

/***/ "./src/CardBlocks/CardDriverActivity.ts":
/*!**********************************************!*\
  !*** ./src/CardBlocks/CardDriverActivity.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ \"./src/utils/FormatStrings.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar RawCardDriverActivity_1 = __webpack_require__(/*! CardBlocks/RawCardDriverActivity */ \"./src/CardBlocks/RawCardDriverActivity.ts\");\nvar CardActivityDailyRecord_1 = __webpack_require__(/*! DataTypes/CardActivityDailyRecord */ \"./src/DataTypes/CardActivityDailyRecord.ts\");\nvar ActivityChangeInfo_1 = __webpack_require__(/*! DataTypes/ActivityChangeInfo */ \"./src/DataTypes/ActivityChangeInfo.ts\");\nvar CardDriverActivity = /** @class */ (function (_super) {\n    __extends(CardDriverActivity, _super);\n    function CardDriverActivity(data) {\n        var _this = _super.call(this, data) || this;\n        _this.activityDataUncycled = _this.readCyclicData();\n        _this.cardActivityDailyRecords = DataReader_1.default.readSubblocksByLength(CardActivityDailyRecord_1.default, _this.activityDataUncycled, 0, _this.activityDataUncycled.byteLength);\n        return _this;\n    }\n    CardDriverActivity.prototype.readCyclicData = function () {\n        var rv;\n        var cd = this.cyclicData.toUint8Array();\n        var newestRecordLength = DataReader_1.default.readUint16(this.cyclicData.data, this.newestRecord + 2); // (cd[cd[2] % cd.length] << 8) + cd[cd[3] % cd.length]\n        var endOfNewestRecord = (this.newestRecord + newestRecordLength) % cd.length;\n        if (endOfNewestRecord < this.oldestRecord) {\n            // console.log(`readCyclicData #1 ${endOfNewestRecord} < ${this.oldestRecord}, newestRecordLength: ${newestRecordLength}, lenth: ${cd.length}`);\n            var a1 = cd.slice(this.oldestRecord, this.oldestRecord + cd.length - this.oldestRecord);\n            var a2 = cd.slice(0, endOfNewestRecord);\n            rv = new Uint8Array(a1.length + a2.length);\n            rv.set(a1, 0);\n            rv.set(a2, a1.length);\n        }\n        else {\n            // console.log(`readCyclicData #2 ${this.oldestRecord}, ${endOfNewestRecord}, ${cd.length}`);\n            rv = cd.slice(this.oldestRecord, this.oldestRecord + endOfNewestRecord - this.oldestRecord);\n        }\n        return rv.buffer;\n    };\n    CardDriverActivity.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"oldestRecord\"), this.oldestRecord);\n        report.tagValuePair(Translation_1.tr(\"newestRecord\"), this.newestRecord);\n        report.writeArray(this.cardActivityDailyRecords, Translation_1.tr(\"cardActivityDailyRecords\"));\n        if (report.allowSvg() && this.cardActivityDailyRecords.numberOfBlocks() > 0) {\n            this.printHtmlTimesheet(report);\n        }\n    };\n    CardDriverActivity.prototype.printHtmlTimesheet = function (report) {\n        var tablehead = \"<table><tr><th></th><th>Driving</th><th>Working</th><th>Rest</th><th>Available</th></tr>\";\n        var durationsMonth = [0, 0, 0, 0, 0, 0];\n        var currentMonth = this.cardActivityDailyRecords.get(0).activityRecordDate.date().getMonth();\n        var table = new QString_1.default(\"<ul><li>%1:\")\n            .arg(new QString_1.default(Translation_1.tr(\"Timesheet for %1\"))\n            .arg(FormatStrings_1.default.longMonthName(currentMonth).toString())) + tablehead;\n        for (var j = 0; j < this.cardActivityDailyRecords.numberOfBlocks(); j++) {\n            if (this.cardActivityDailyRecords.get(j).activityRecordDate.date().getMonth() != currentMonth) {\n                currentMonth = this.cardActivityDailyRecords.get(j).activityRecordDate.date().getMonth();\n                table += new QString_1.default(\"<tr><th>Summary</th><th>%1</th><th>%2</th><th>%3</th><th>%4</th></tr>\")\n                    .arg(ActivityChangeInfo_1.default.formatClock(durationsMonth[ActivityChangeInfo_1.default.DRIVING]))\n                    .arg(ActivityChangeInfo_1.default.formatClock(durationsMonth[ActivityChangeInfo_1.default.WORK]))\n                    .arg(ActivityChangeInfo_1.default.formatClock(durationsMonth[ActivityChangeInfo_1.default.REST] + durationsMonth[ActivityChangeInfo_1.default.SHORTREST]))\n                    .arg(ActivityChangeInfo_1.default.formatClock(durationsMonth[ActivityChangeInfo_1.default.AVAILABLE]));\n                durationsMonth = [0, 0, 0, 0, 0, 0];\n                table += new QString_1.default(\"</table></li><li>%1:\")\n                    .arg(new QString_1.default(Translation_1.tr(\"Timesheet for %1\"))\n                    .arg(FormatStrings_1.default.longMonthName(currentMonth)).toString()) + tablehead;\n            }\n            var durations = [0, 0, 0, 0, 0, 0];\n            for (var k = 0; k < this.cardActivityDailyRecords.get(j).activityChangeInfos.numberOfBlocks(); k++) {\n                durations[this.cardActivityDailyRecords.get(j).activityChangeInfos.get(k).activity] += this.cardActivityDailyRecords.get(j).activityChangeInfos.get(k).duration;\n            }\n            table += new QString_1.default(\"<tr><td>%1</td><td>%2</td><td>%3</td><td>%4</td><td>%5</td></tr>\")\n                .arg(this.cardActivityDailyRecords.get(j).activityRecordDate.toString())\n                .arg(ActivityChangeInfo_1.default.formatClock(durations[ActivityChangeInfo_1.default.DRIVING]))\n                .arg(ActivityChangeInfo_1.default.formatClock(durations[ActivityChangeInfo_1.default.WORK]))\n                .arg(ActivityChangeInfo_1.default.formatClock(durations[ActivityChangeInfo_1.default.REST] + durations[ActivityChangeInfo_1.default.SHORTREST]))\n                .arg(ActivityChangeInfo_1.default.formatClock(durations[ActivityChangeInfo_1.default.AVAILABLE]));\n            durations.forEach(function (d, i) {\n                durationsMonth[i] += d;\n            });\n        }\n        table += new QString_1.default(\"<tr><th>Summary</th><th>%1</th><th>%2</th><th>%3</th><th>%4</th></tr>\")\n            .arg(ActivityChangeInfo_1.default.formatClock(durationsMonth[ActivityChangeInfo_1.default.DRIVING]))\n            .arg(ActivityChangeInfo_1.default.formatClock(durationsMonth[ActivityChangeInfo_1.default.WORK]))\n            .arg(ActivityChangeInfo_1.default.formatClock(durationsMonth[ActivityChangeInfo_1.default.REST] + durationsMonth[ActivityChangeInfo_1.default.SHORTREST]))\n            .arg(ActivityChangeInfo_1.default.formatClock(durationsMonth[ActivityChangeInfo_1.default.AVAILABLE]));\n        table += \"</table></li></ul>\";\n        report.tagValuePair(Translation_1.tr(\"Timesheet\"), table);\n    };\n    return CardDriverActivity;\n}(RawCardDriverActivity_1.default));\nexports.default = CardDriverActivity;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/CardBlocks/CardDriverActivity.ts?");

/***/ }),

/***/ "./src/CardBlocks/CardDrivingLicenseInformation.ts":
/*!*********************************************************!*\
  !*** ./src/CardBlocks/CardDrivingLicenseInformation.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ \"./src/utils/FormatStrings.ts\");\nvar CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ \"./src/CardBlocks/CardBlock.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar CardDrivingLicenseInformation = /** @class */ (function (_super) {\n    __extends(CardDrivingLicenseInformation, _super);\n    function CardDrivingLicenseInformation(data) {\n        var _this = _super.call(this, data) || this;\n        _this.drivingLicenseIssuingAuthorithy = DataReader_1.default.readCodePageString(data, 5, 36).toString();\n        _this.drivingLicenseIssuingNation = DataReader_1.default.readUint8(data, 41);\n        _this.drivingLicenseNumber = DataReader_1.default.readString(data, 42, 16).toString();\n        return _this;\n    }\n    CardDrivingLicenseInformation.prototype.className = function () {\n        return \"CardDrivingLicenseInformation\";\n    };\n    CardDrivingLicenseInformation.prototype.title = function () {\n        return \"Driving License Info\";\n    };\n    CardDrivingLicenseInformation.prototype.toString = function () {\n        var qs = new QString_1.default('CardDrivingLicenseInformation');\n        return qs.toString();\n    };\n    CardDrivingLicenseInformation.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"drivingLicenseIssuingAuthorithy\"), this.drivingLicenseIssuingAuthorithy);\n        report.tagValuePair(Translation_1.tr(\"drivingLicenseIssuingNation\"), FormatStrings_1.default.nationNumeric(this.drivingLicenseIssuingNation));\n        report.tagValuePair(Translation_1.tr(\"drivingLicenseNumber\"), this.drivingLicenseNumber);\n        if (this.dataBlockSize() != 58) {\n            report.tagValuePair(\"should have\", 58);\n            report.tagValuePair(\"has\", this.dataBlockSize());\n        }\n    };\n    CardDrivingLicenseInformation.BLOCK_TYPE = 0x0521;\n    return CardDrivingLicenseInformation;\n}(CardBlock_1.default));\nexports.default = CardDrivingLicenseInformation;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/CardBlocks/CardDrivingLicenseInformation.ts?");

/***/ }),

/***/ "./src/CardBlocks/CardEventData.ts":
/*!*****************************************!*\
  !*** ./src/CardBlocks/CardEventData.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ \"./src/CardBlocks/CardBlock.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar CardEventRecord_1 = __webpack_require__(/*! DataTypes/CardEventRecord */ \"./src/DataTypes/CardEventRecord.ts\");\nvar CardEventData = /** @class */ (function (_super) {\n    __extends(CardEventData, _super);\n    function CardEventData(data) {\n        var _this = _super.call(this, data) || this;\n        _this.cardEventRecord = DataReader_1.default.readSubblocksByLength(CardEventRecord_1.default, data.slice(5), 0, _this.dataBlockSize() - (5));\n        return _this;\n    }\n    CardEventData.prototype.className = function () {\n        return \"CardEventData\";\n    };\n    CardEventData.prototype.title = function () {\n        return \"Events Data\";\n    };\n    CardEventData.prototype.toString = function () {\n        var qs = new QString_1.default('CardEventData');\n        return qs.toString();\n    };\n    CardEventData.prototype.printOn = function (report) {\n        report.writeArray(this.cardEventRecord, Translation_1.tr(\"cardEventRecord\"));\n        if (this.dataBlockSize() != 5 + this.cardEventRecord.size()) {\n            report.tagValuePair(\"should have\", 5 + this.cardEventRecord.size());\n            report.tagValuePair(\"has\", this.dataBlockSize());\n        }\n    };\n    CardEventData.BLOCK_TYPE = 0x0502;\n    return CardEventData;\n}(CardBlock_1.default));\nexports.default = CardEventData;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/CardBlocks/CardEventData.ts?");

/***/ }),

/***/ "./src/CardBlocks/CardFaultData.ts":
/*!*****************************************!*\
  !*** ./src/CardBlocks/CardFaultData.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ \"./src/CardBlocks/CardBlock.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar CardEventRecord_1 = __webpack_require__(/*! DataTypes/CardEventRecord */ \"./src/DataTypes/CardEventRecord.ts\");\nvar CardFaultData = /** @class */ (function (_super) {\n    __extends(CardFaultData, _super);\n    function CardFaultData(data) {\n        var _this = _super.call(this, data) || this;\n        _this.cardEventRecord = DataReader_1.default.readSubblocksByLength(CardEventRecord_1.default, data.slice(5), 0, _this.dataBlockSize() - (5));\n        return _this;\n    }\n    CardFaultData.prototype.className = function () {\n        return \"CardFaultData\";\n    };\n    CardFaultData.prototype.title = function () {\n        return \"Faults Data\";\n    };\n    CardFaultData.prototype.toString = function () {\n        var qs = new QString_1.default('CardFaultData');\n        return qs.toString();\n    };\n    CardFaultData.prototype.printOn = function (report) {\n        report.writeArray(this.cardEventRecord, Translation_1.tr(\"cardEventRecord\"));\n        if (this.dataBlockSize() != 5 + this.cardEventRecord.size()) {\n            report.tagValuePair(\"should have\", 5 + this.cardEventRecord.size());\n            report.tagValuePair(\"has\", this.dataBlockSize());\n        }\n    };\n    CardFaultData.BLOCK_TYPE = 0x0503;\n    return CardFaultData;\n}(CardBlock_1.default));\nexports.default = CardFaultData;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/CardBlocks/CardFaultData.ts?");

/***/ }),

/***/ "./src/CardBlocks/CardIccIdentification.ts":
/*!*************************************************!*\
  !*** ./src/CardBlocks/CardIccIdentification.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ \"./src/CardBlocks/CardBlock.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar ExtendedSerialNumber_1 = __webpack_require__(/*! DataTypes/ExtendedSerialNumber */ \"./src/DataTypes/ExtendedSerialNumber.ts\");\nvar CardIccIdentification = /** @class */ (function (_super) {\n    __extends(CardIccIdentification, _super);\n    function CardIccIdentification(data) {\n        var _this = _super.call(this, data) || this;\n        _this.clockStop = DataReader_1.default.readUint8(data, 5);\n        _this.cardExtendedSerialNumber = new ExtendedSerialNumber_1.default(data.slice(6));\n        _this.cardApprovalNumber = DataReader_1.default.readRawData(data, 14, 8);\n        _this.cardPersonaliserID = DataReader_1.default.readRawData(data, 22, 1);\n        _this.embedderIcAssemblerId = DataReader_1.default.readRawData(data, 23, 5);\n        _this.icIdentifier = DataReader_1.default.readRawData(data, 28, 2);\n        return _this;\n    }\n    CardIccIdentification.prototype.className = function () {\n        return \"CardIccIdentification\";\n    };\n    CardIccIdentification.prototype.title = function () {\n        return \"Card ICC identification\";\n    };\n    CardIccIdentification.prototype.toString = function () {\n        var qs = new QString_1.default('CardIccIdentification');\n        return qs.toString();\n    };\n    CardIccIdentification.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"clockStop\"), this.clockStop);\n        report.writeBlock(this.cardExtendedSerialNumber, Translation_1.tr(\"cardExtendedSerialNumber\"));\n        report.tagValuePair(Translation_1.tr(\"cardApprovalNumber\"), this.cardApprovalNumber.toString());\n        report.tagValuePair(Translation_1.tr(\"cardPersonaliserID\"), this.cardPersonaliserID.toString());\n        report.tagValuePair(Translation_1.tr(\"embedderIcAssemblerId\"), this.embedderIcAssemblerId.toString());\n        report.tagValuePair(Translation_1.tr(\"icIdentifier\"), this.icIdentifier.toString());\n        if (this.dataBlockSize() != 30) {\n            report.tagValuePair(\"should have\", 30);\n            report.tagValuePair(\"has\", this.dataBlockSize());\n        }\n    };\n    CardIccIdentification.BLOCK_TYPE = 0x0002;\n    return CardIccIdentification;\n}(CardBlock_1.default));\nexports.default = CardIccIdentification;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/CardBlocks/CardIccIdentification.ts?");

/***/ }),

/***/ "./src/CardBlocks/CardPlaceDailyWorkPeriod.ts":
/*!****************************************************!*\
  !*** ./src/CardBlocks/CardPlaceDailyWorkPeriod.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ \"./src/CardBlocks/CardBlock.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar PlaceRecord_1 = __webpack_require__(/*! DataTypes/PlaceRecord */ \"./src/DataTypes/PlaceRecord.ts\");\nvar CardPlaceDailyWorkPeriod = /** @class */ (function (_super) {\n    __extends(CardPlaceDailyWorkPeriod, _super);\n    function CardPlaceDailyWorkPeriod(data) {\n        var _this = _super.call(this, data) || this;\n        _this.placePointerNewestRecord = DataReader_1.default.readUint8(data, 5);\n        _this.placeRecord = DataReader_1.default.readSubblocksByLength(PlaceRecord_1.default, data.slice(6), 0, _this.dataBlockSize() - (6));\n        return _this;\n    }\n    CardPlaceDailyWorkPeriod.prototype.className = function () {\n        return \"CardPlaceDailyWorkPeriod\";\n    };\n    CardPlaceDailyWorkPeriod.prototype.title = function () {\n        return \"Places\";\n    };\n    CardPlaceDailyWorkPeriod.prototype.toString = function () {\n        var qs = new QString_1.default('CardPlaceDailyWorkPeriod');\n        return qs.toString();\n    };\n    CardPlaceDailyWorkPeriod.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"placePointerNewestRecord\"), this.placePointerNewestRecord);\n        report.writeArray(this.placeRecord, Translation_1.tr(\"placeRecord\"));\n        if (this.dataBlockSize() != 6 + this.placeRecord.size()) {\n            report.tagValuePair(\"should have\", 6 + this.placeRecord.size());\n            report.tagValuePair(\"has\", this.dataBlockSize());\n        }\n    };\n    CardPlaceDailyWorkPeriod.BLOCK_TYPE = 0x0506;\n    return CardPlaceDailyWorkPeriod;\n}(CardBlock_1.default));\nexports.default = CardPlaceDailyWorkPeriod;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/CardBlocks/CardPlaceDailyWorkPeriod.ts?");

/***/ }),

/***/ "./src/CardBlocks/CardVehiclesUsed.ts":
/*!********************************************!*\
  !*** ./src/CardBlocks/CardVehiclesUsed.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ \"./src/CardBlocks/CardBlock.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar CardVehicleRecord_1 = __webpack_require__(/*! DataTypes/CardVehicleRecord */ \"./src/DataTypes/CardVehicleRecord.ts\");\nvar CardVehiclesUsed = /** @class */ (function (_super) {\n    __extends(CardVehiclesUsed, _super);\n    function CardVehiclesUsed(data) {\n        var _this = _super.call(this, data) || this;\n        _this.vehiclePointerNewestRecord = DataReader_1.default.readUint16(data, 5);\n        _this.cardVehicleRecord = DataReader_1.default.readSubblocksByLength(CardVehicleRecord_1.default, data.slice(7), 0, _this.dataBlockSize() - (7));\n        return _this;\n    }\n    CardVehiclesUsed.prototype.className = function () {\n        return \"CardVehiclesUsed\";\n    };\n    CardVehiclesUsed.prototype.title = function () {\n        return \"Vehicles Used\";\n    };\n    CardVehiclesUsed.prototype.toString = function () {\n        var qs = new QString_1.default('CardVehiclesUsed');\n        return qs.toString();\n    };\n    CardVehiclesUsed.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"vehiclePointerNewestRecord\"), this.vehiclePointerNewestRecord);\n        report.writeArray(this.cardVehicleRecord, Translation_1.tr(\"cardVehicleRecord\"));\n        if (this.dataBlockSize() != 7 + this.cardVehicleRecord.size()) {\n            report.tagValuePair(\"should have\", 7 + this.cardVehicleRecord.size());\n            report.tagValuePair(\"has\", this.dataBlockSize());\n        }\n    };\n    CardVehiclesUsed.BLOCK_TYPE = 0x0505;\n    return CardVehiclesUsed;\n}(CardBlock_1.default));\nexports.default = CardVehiclesUsed;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/CardBlocks/CardVehiclesUsed.ts?");

/***/ }),

/***/ "./src/CardBlocks/DriverCardApplicationIdentification.ts":
/*!***************************************************************!*\
  !*** ./src/CardBlocks/DriverCardApplicationIdentification.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ \"./src/utils/FormatStrings.ts\");\nvar CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ \"./src/CardBlocks/CardBlock.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar DriverCardApplicationIdentification = /** @class */ (function (_super) {\n    __extends(DriverCardApplicationIdentification, _super);\n    function DriverCardApplicationIdentification(data) {\n        var _this = _super.call(this, data) || this;\n        _this.typeOfTachographCardId = DataReader_1.default.readUint8(data, 5);\n        _this.cardStructureVersion = DataReader_1.default.readRawData(data, 6, 2);\n        _this.noOfEventsPerType = DataReader_1.default.readUint8(data, 8);\n        _this.noOfFaultsPerType = DataReader_1.default.readUint8(data, 9);\n        _this.activityStructureLength = DataReader_1.default.readUint16(data, 10);\n        _this.noOfCardVehicleRecords = DataReader_1.default.readUint16(data, 12);\n        _this.noOfCardPlaceRecords = DataReader_1.default.readUint8(data, 14);\n        return _this;\n    }\n    DriverCardApplicationIdentification.prototype.className = function () {\n        return \"DriverCardApplicationIdentification\";\n    };\n    DriverCardApplicationIdentification.prototype.title = function () {\n        return \"Application Identification\";\n    };\n    DriverCardApplicationIdentification.prototype.toString = function () {\n        var qs = new QString_1.default('DriverCardApplicationIdentification');\n        return qs.toString();\n    };\n    DriverCardApplicationIdentification.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"typeOfTachographCardId\"), FormatStrings_1.default.equipmentType(this.typeOfTachographCardId));\n        report.tagValuePair(Translation_1.tr(\"cardStructureVersion\"), this.cardStructureVersion.toString());\n        report.tagValuePair(Translation_1.tr(\"noOfEventsPerType\"), this.noOfEventsPerType);\n        report.tagValuePair(Translation_1.tr(\"noOfFaultsPerType\"), this.noOfFaultsPerType);\n        report.tagValuePair(Translation_1.tr(\"activityStructureLength\"), new QString_1.default(\"%1 Bytes\").arg(this.activityStructureLength).toString());\n        report.tagValuePair(Translation_1.tr(\"noOfCardVehicleRecords\"), this.noOfCardVehicleRecords);\n        report.tagValuePair(Translation_1.tr(\"noOfCardPlaceRecords\"), this.noOfCardPlaceRecords);\n        if (this.dataBlockSize() != 15) {\n            report.tagValuePair(\"should have\", 15);\n            report.tagValuePair(\"has\", this.dataBlockSize());\n        }\n    };\n    DriverCardApplicationIdentification.BLOCK_TYPE = 0x0501;\n    return DriverCardApplicationIdentification;\n}(CardBlock_1.default));\nexports.default = DriverCardApplicationIdentification;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/CardBlocks/DriverCardApplicationIdentification.ts?");

/***/ }),

/***/ "./src/CardBlocks/Identification.ts":
/*!******************************************!*\
  !*** ./src/CardBlocks/Identification.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ \"./src/utils/FormatStrings.ts\");\nvar CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ \"./src/CardBlocks/CardBlock.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ \"./src/DataTypes/TimeReal.ts\");\nvar Name_1 = __webpack_require__(/*! DataTypes/Name */ \"./src/DataTypes/Name.ts\");\nvar BcdDate_1 = __webpack_require__(/*! DataTypes/BcdDate */ \"./src/DataTypes/BcdDate.ts\");\nvar Identification = /** @class */ (function (_super) {\n    __extends(Identification, _super);\n    function Identification(data) {\n        var _this = _super.call(this, data) || this;\n        _this.cardIssuingMemberState = DataReader_1.default.readUint8(data, 5);\n        _this.cardNumber = DataReader_1.default.readString(data, 6, 16).toString();\n        _this.cardIssuingAuthorityName = DataReader_1.default.readCodePageString(data, 22, 36).toString();\n        _this.cardIssueDate = new TimeReal_1.default(data.slice(58));\n        _this.cardValidityBegin = new TimeReal_1.default(data.slice(62));\n        _this.cardExpiryDate = new TimeReal_1.default(data.slice(66));\n        _this.cardHolderName = new Name_1.default(data.slice(70));\n        _this.cardHolderBirthDate = new BcdDate_1.default(data.slice(142));\n        _this.cardHolderPreferredLanguage = DataReader_1.default.readString(data, 146, 2).toString();\n        return _this;\n    }\n    Identification.prototype.className = function () {\n        return \"Identification\";\n    };\n    Identification.prototype.title = function () {\n        return \"Card identification and card holder identification\";\n    };\n    Identification.prototype.toString = function () {\n        var qs = new QString_1.default('Identification');\n        return qs.toString();\n    };\n    Identification.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"cardIssuingMemberState\"), FormatStrings_1.default.nationNumeric(this.cardIssuingMemberState));\n        report.tagValuePair(Translation_1.tr(\"cardNumber\"), this.cardNumber);\n        report.tagValuePair(Translation_1.tr(\"cardIssuingAuthorityName\"), this.cardIssuingAuthorityName);\n        report.writeBlock(this.cardIssueDate, Translation_1.tr(\"cardIssueDate\"));\n        report.writeBlock(this.cardValidityBegin, Translation_1.tr(\"cardValidityBegin\"));\n        report.writeBlock(this.cardExpiryDate, Translation_1.tr(\"cardExpiryDate\"));\n        report.writeBlock(this.cardHolderName, Translation_1.tr(\"cardHolderName\"));\n        report.writeBlock(this.cardHolderBirthDate, Translation_1.tr(\"cardHolderBirthDate\"));\n        report.tagValuePair(Translation_1.tr(\"cardHolderPreferredLanguage\"), this.cardHolderPreferredLanguage);\n        if (this.dataBlockSize() != 148) {\n            report.tagValuePair(\"should have\", 148);\n            report.tagValuePair(\"has\", this.dataBlockSize());\n        }\n    };\n    Identification.BLOCK_TYPE = 0x0520;\n    return Identification;\n}(CardBlock_1.default));\nexports.default = Identification;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/CardBlocks/Identification.ts?");

/***/ }),

/***/ "./src/CardBlocks/LastCardDownload.ts":
/*!********************************************!*\
  !*** ./src/CardBlocks/LastCardDownload.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ \"./src/CardBlocks/CardBlock.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ \"./src/DataTypes/TimeReal.ts\");\nvar LastCardDownload = /** @class */ (function (_super) {\n    __extends(LastCardDownload, _super);\n    function LastCardDownload(data) {\n        var _this = _super.call(this, data) || this;\n        _this.lastCardDownload = new TimeReal_1.default(data.slice(5));\n        return _this;\n    }\n    LastCardDownload.prototype.className = function () {\n        return \"LastCardDownload\";\n    };\n    LastCardDownload.prototype.title = function () {\n        return \"Card Download\";\n    };\n    LastCardDownload.prototype.toString = function () {\n        var qs = new QString_1.default('LastCardDownload');\n        return qs.toString();\n    };\n    LastCardDownload.prototype.printOn = function (report) {\n        report.writeBlock(this.lastCardDownload, Translation_1.tr(\"lastCardDownload\"));\n        if (this.dataBlockSize() != 9) {\n            report.tagValuePair(\"should have\", 9);\n            report.tagValuePair(\"has\", this.dataBlockSize());\n        }\n    };\n    LastCardDownload.BLOCK_TYPE = 0x050e;\n    return LastCardDownload;\n}(CardBlock_1.default));\nexports.default = LastCardDownload;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/CardBlocks/LastCardDownload.ts?");

/***/ }),

/***/ "./src/CardBlocks/MemberStateCertificate.ts":
/*!**************************************************!*\
  !*** ./src/CardBlocks/MemberStateCertificate.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ \"./src/CardBlocks/CardBlock.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar EncryptedCertificate_1 = __webpack_require__(/*! DataTypes/EncryptedCertificate */ \"./src/DataTypes/EncryptedCertificate.ts\");\nvar MemberStateCertificate = /** @class */ (function (_super) {\n    __extends(MemberStateCertificate, _super);\n    function MemberStateCertificate(data) {\n        var _this = _super.call(this, data) || this;\n        _this.certificate = new EncryptedCertificate_1.default(data.slice(5));\n        return _this;\n    }\n    MemberStateCertificate.prototype.className = function () {\n        return \"MemberStateCertificate\";\n    };\n    MemberStateCertificate.prototype.title = function () {\n        return \"CA Certificate\";\n    };\n    MemberStateCertificate.prototype.toString = function () {\n        var qs = new QString_1.default('MemberStateCertificate');\n        return qs.toString();\n    };\n    MemberStateCertificate.prototype.printOn = function (report) {\n        report.writeBlock(this.certificate, Translation_1.tr(\"certificate\"));\n        if (this.dataBlockSize() != 199) {\n            report.tagValuePair(\"should have\", 199);\n            report.tagValuePair(\"has\", this.dataBlockSize());\n        }\n    };\n    MemberStateCertificate.BLOCK_TYPE = 0xc108;\n    return MemberStateCertificate;\n}(CardBlock_1.default));\nexports.default = MemberStateCertificate;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/CardBlocks/MemberStateCertificate.ts?");

/***/ }),

/***/ "./src/CardBlocks/RawCardDriverActivity.ts":
/*!*************************************************!*\
  !*** ./src/CardBlocks/RawCardDriverActivity.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ \"./src/CardBlocks/CardBlock.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar RawCardDriverActivity = /** @class */ (function (_super) {\n    __extends(RawCardDriverActivity, _super);\n    function RawCardDriverActivity(data) {\n        var _this = _super.call(this, data) || this;\n        _this.oldestRecord = DataReader_1.default.readUint16(data, 5);\n        _this.newestRecord = DataReader_1.default.readUint16(data, 7);\n        _this.cyclicData = DataReader_1.default.readRawData(data, 9, _this.dataBlockSize() - (9));\n        return _this;\n    }\n    RawCardDriverActivity.prototype.className = function () {\n        return \"RawCardDriverActivity\";\n    };\n    RawCardDriverActivity.prototype.title = function () {\n        return \"Driver Activity Data\";\n    };\n    RawCardDriverActivity.prototype.toString = function () {\n        var qs = new QString_1.default('CardDriverActivity');\n        return qs.toString();\n    };\n    RawCardDriverActivity.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"oldestRecord\"), this.oldestRecord);\n        report.tagValuePair(Translation_1.tr(\"newestRecord\"), this.newestRecord);\n        report.tagValuePair(Translation_1.tr(\"cyclicData\"), this.cyclicData.toString());\n        if (this.dataBlockSize() != 9) {\n            report.tagValuePair(\"should have\", 9);\n            report.tagValuePair(\"has\", this.dataBlockSize());\n        }\n    };\n    RawCardDriverActivity.BLOCK_TYPE = 0x0504;\n    return RawCardDriverActivity;\n}(CardBlock_1.default));\nexports.default = RawCardDriverActivity;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/CardBlocks/RawCardDriverActivity.ts?");

/***/ }),

/***/ "./src/CardBlocks/SpecificConditions.ts":
/*!**********************************************!*\
  !*** ./src/CardBlocks/SpecificConditions.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ \"./src/CardBlocks/CardBlock.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar SpecificConditionRecord_1 = __webpack_require__(/*! DataTypes/SpecificConditionRecord */ \"./src/DataTypes/SpecificConditionRecord.ts\");\nvar SpecificConditions = /** @class */ (function (_super) {\n    __extends(SpecificConditions, _super);\n    function SpecificConditions(data) {\n        var _this = _super.call(this, data) || this;\n        _this.specificConditionRecord = DataReader_1.default.readSubblocksByLength(SpecificConditionRecord_1.default, data.slice(5), 0, _this.dataBlockSize() - (5));\n        return _this;\n    }\n    SpecificConditions.prototype.className = function () {\n        return \"SpecificConditions\";\n    };\n    SpecificConditions.prototype.title = function () {\n        return \"Specific Conditions\";\n    };\n    SpecificConditions.prototype.toString = function () {\n        var qs = new QString_1.default('SpecificConditions');\n        return qs.toString();\n    };\n    SpecificConditions.prototype.printOn = function (report) {\n        report.writeArray(this.specificConditionRecord, Translation_1.tr(\"specificConditionRecord\"));\n        if (this.dataBlockSize() != 5 + this.specificConditionRecord.size()) {\n            report.tagValuePair(\"should have\", 5 + this.specificConditionRecord.size());\n            report.tagValuePair(\"has\", this.dataBlockSize());\n        }\n    };\n    SpecificConditions.BLOCK_TYPE = 0x0522;\n    return SpecificConditions;\n}(CardBlock_1.default));\nexports.default = SpecificConditions;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/CardBlocks/SpecificConditions.ts?");

/***/ }),

/***/ "./src/CardBlocks/cardBlockFactory.ts":
/*!********************************************!*\
  !*** ./src/CardBlocks/cardBlockFactory.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ \"./src/CardBlocks/CardBlock.ts\");\nvar Converter_1 = __webpack_require__(/*! utils/Converter */ \"./src/utils/Converter.ts\");\nvar FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ \"./src/utils/FormatStrings.ts\");\nvar DriverCardApplicationIdentification_1 = __webpack_require__(/*! CardBlocks/DriverCardApplicationIdentification */ \"./src/CardBlocks/DriverCardApplicationIdentification.ts\");\nvar LastCardDownload_1 = __webpack_require__(/*! CardBlocks/LastCardDownload */ \"./src/CardBlocks/LastCardDownload.ts\");\nvar CardDrivingLicenseInformation_1 = __webpack_require__(/*! CardBlocks/CardDrivingLicenseInformation */ \"./src/CardBlocks/CardDrivingLicenseInformation.ts\");\nvar Identification_1 = __webpack_require__(/*! CardBlocks/Identification */ \"./src/CardBlocks/Identification.ts\");\nvar CardCurrentUse_1 = __webpack_require__(/*! CardBlocks/CardCurrentUse */ \"./src/CardBlocks/CardCurrentUse.ts\");\nvar CardChipIdentification_1 = __webpack_require__(/*! CardBlocks/CardChipIdentification */ \"./src/CardBlocks/CardChipIdentification.ts\");\nvar CardIccIdentification_1 = __webpack_require__(/*! CardBlocks/CardIccIdentification */ \"./src/CardBlocks/CardIccIdentification.ts\");\nvar CardControlActivityDataRecord_1 = __webpack_require__(/*! CardBlocks/CardControlActivityDataRecord */ \"./src/CardBlocks/CardControlActivityDataRecord.ts\");\nvar CardDriverActivity_1 = __webpack_require__(/*! CardBlocks/CardDriverActivity */ \"./src/CardBlocks/CardDriverActivity.ts\");\nvar CardEventData_1 = __webpack_require__(/*! CardBlocks/CardEventData */ \"./src/CardBlocks/CardEventData.ts\");\nvar CardFaultData_1 = __webpack_require__(/*! CardBlocks/CardFaultData */ \"./src/CardBlocks/CardFaultData.ts\");\nvar SpecificConditions_1 = __webpack_require__(/*! CardBlocks/SpecificConditions */ \"./src/CardBlocks/SpecificConditions.ts\");\nvar MemberStateCertificate_1 = __webpack_require__(/*! CardBlocks/MemberStateCertificate */ \"./src/CardBlocks/MemberStateCertificate.ts\");\nvar CardCertificate_1 = __webpack_require__(/*! CardBlocks/CardCertificate */ \"./src/CardBlocks/CardCertificate.ts\");\nvar CardPlaceDailyWorkPeriod_1 = __webpack_require__(/*! CardBlocks/CardPlaceDailyWorkPeriod */ \"./src/CardBlocks/CardPlaceDailyWorkPeriod.ts\");\nvar CardVehiclesUsed_1 = __webpack_require__(/*! CardBlocks/CardVehiclesUsed */ \"./src/CardBlocks/CardVehiclesUsed.ts\");\nfunction cardBlockFactory(data, pos) {\n    var blockType = DataReader_1.default.readUint16(data, pos);\n    //console.log(\"cardBlockFactory: \" + Converter.dec2hexString(blockType));\n    data = data.slice(pos);\n    if (data.byteLength < 5) {\n        return new CardBlock_1.default(data);\n    }\n    switch (blockType) {\n        case DriverCardApplicationIdentification_1.default.BLOCK_TYPE: {\n            var rv = new DriverCardApplicationIdentification_1.default(data);\n            console.log(\"Parsed DriverCardApplicationIdentification.typeOfTachographCardId: '\" + FormatStrings_1.default.equipmentType(rv.typeOfTachographCardId) + \"'\");\n            return rv;\n        }\n        case LastCardDownload_1.default.BLOCK_TYPE: {\n            return new LastCardDownload_1.default(data);\n        }\n        case CardDrivingLicenseInformation_1.default.BLOCK_TYPE: {\n            return new CardDrivingLicenseInformation_1.default(data);\n        }\n        case Identification_1.default.BLOCK_TYPE: {\n            return new Identification_1.default(data);\n        }\n        case CardCurrentUse_1.default.BLOCK_TYPE: {\n            return new CardCurrentUse_1.default(data);\n        }\n        case CardChipIdentification_1.default.BLOCK_TYPE: {\n            return new CardChipIdentification_1.default(data);\n        }\n        case CardIccIdentification_1.default.BLOCK_TYPE: {\n            return new CardIccIdentification_1.default(data);\n        }\n        case CardControlActivityDataRecord_1.default.BLOCK_TYPE: {\n            return new CardControlActivityDataRecord_1.default(data);\n        }\n        case CardDriverActivity_1.default.BLOCK_TYPE: {\n            return new CardDriverActivity_1.default(data);\n        }\n        case CardEventData_1.default.BLOCK_TYPE: {\n            return new CardEventData_1.default(data);\n        }\n        case CardFaultData_1.default.BLOCK_TYPE: {\n            return new CardFaultData_1.default(data);\n        }\n        case SpecificConditions_1.default.BLOCK_TYPE: {\n            return new SpecificConditions_1.default(data);\n        }\n        case MemberStateCertificate_1.default.BLOCK_TYPE: {\n            return new MemberStateCertificate_1.default(data);\n        }\n        case CardCertificate_1.default.BLOCK_TYPE: {\n            return new CardCertificate_1.default(data);\n        }\n        case CardPlaceDailyWorkPeriod_1.default.BLOCK_TYPE: {\n            return new CardPlaceDailyWorkPeriod_1.default(data);\n        }\n        case CardVehiclesUsed_1.default.BLOCK_TYPE: {\n            return new CardVehiclesUsed_1.default(data);\n        }\n        default: {\n            console.warn(\"Unknown card block type: \" + Converter_1.default.dec2hexString(blockType));\n            return new CardBlock_1.default(data);\n        }\n    }\n}\nexports.cardBlockFactory = cardBlockFactory;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/CardBlocks/cardBlockFactory.ts?");

/***/ }),

/***/ "./src/DataTypes/ActivityChangeInfo.ts":
/*!*********************************************!*\
  !*** ./src/DataTypes/ActivityChangeInfo.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar padStart = __webpack_require__(/*! lodash/padStart */ \"./node_modules/lodash/padStart.js\");\nvar DataType_1 = __webpack_require__(/*! DataTypes/DataType */ \"./src/DataTypes/DataType.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar ActivityChangeInfo = /** @class */ (function (_super) {\n    __extends(ActivityChangeInfo, _super);\n    function ActivityChangeInfo(data) {\n        var _this = _super.call(this, data) || this;\n        var start = new Uint8Array(data);\n        _this.s = (start[0] & (1 << 7)) >> 7;\n        _this.c = (start[0] & (1 << 6)) >> 6;\n        _this.p = (start[0] & (1 << 5)) >> 5;\n        _this.a = (start[0] & ((1 << 4) | (1 << 3))) >> 3;\n        _this.t = Number((start[0] & 7) << 8) + start[1];\n        _this.duration = 0;\n        _this.activity = _this.a;\n        return _this;\n    }\n    ActivityChangeInfo.prototype.setDuration = function (newDuration, newIsSlotState) {\n        this.duration = newDuration;\n        this.isSlotState = newIsSlotState;\n        if (this.a == 0 && this.duration < 15) {\n            this.activity = ActivityChangeInfo.SHORTREST;\n        }\n        if (!this.isSlotState && (this.p != 0) && (this.c == 0)) {\n            this.activity = ActivityChangeInfo.UNKNOWN;\n        }\n    };\n    ActivityChangeInfo.prototype.heightHint = function () {\n        switch (this.activity) {\n            case ActivityChangeInfo.REST: return 0.3;\n            case ActivityChangeInfo.AVAILABLE: return 0.15;\n            case ActivityChangeInfo.WORK: return 0.7;\n            case ActivityChangeInfo.DRIVING: return 1.0;\n            case ActivityChangeInfo.UNKNOWN: return 0.2;\n            case ActivityChangeInfo.SHORTREST: return 0.4;\n        }\n        return 0.5;\n    };\n    ActivityChangeInfo.prototype.className = function () {\n        return \"ActivityChangeInfo\";\n    };\n    ActivityChangeInfo.prototype.size = function () {\n        return 2;\n    };\n    ActivityChangeInfo.prototype.isDefaultValue = function () {\n        return false;\n    };\n    ActivityChangeInfo.prototype.activityName = function () {\n        switch (this.activity) {\n            case ActivityChangeInfo.REST: {\n                return Translation_1.tr(\"break/rest\");\n            }\n            case ActivityChangeInfo.AVAILABLE: {\n                return Translation_1.tr(\"availability\");\n            }\n            case ActivityChangeInfo.WORK: {\n                return Translation_1.tr(\"work\");\n            }\n            case ActivityChangeInfo.DRIVING: {\n                return Translation_1.tr(\"driving\");\n            }\n            case ActivityChangeInfo.UNKNOWN: {\n                return Translation_1.tr(\"unknown\");\n            }\n            case ActivityChangeInfo.SHORTREST: {\n                return Translation_1.tr(\"short break\");\n            }\n        }\n        return Translation_1.tr(\"unknown activity\");\n    };\n    ActivityChangeInfo.prototype.color = function () {\n        switch (this.activity) {\n            case ActivityChangeInfo.REST: return \"red\";\n            case ActivityChangeInfo.AVAILABLE: return \"black\";\n            case ActivityChangeInfo.WORK: return \"yellow\";\n            case ActivityChangeInfo.DRIVING: return \"green\";\n            case ActivityChangeInfo.UNKNOWN: return \"purple\";\n            case ActivityChangeInfo.SHORTREST: return \"orange\";\n        }\n        return \"blue\";\n    };\n    ActivityChangeInfo.formatClock = function (time) {\n        return new QString_1.default(\"%1:%2\")\n            .arg(padStart(Math.floor(time / 60), 2, '0'))\n            .arg(padStart(time % 60, 2, '0')).toString();\n    };\n    ActivityChangeInfo.prototype.title = function () {\n        return new QString_1.default(Translation_1.tr(\"%1 for %2 h\"))\n            .arg(this.activityName())\n            .arg(ActivityChangeInfo.formatClock(this.duration)).toString();\n    };\n    ActivityChangeInfo.REST = 0;\n    ActivityChangeInfo.AVAILABLE = 1;\n    ActivityChangeInfo.WORK = 2;\n    ActivityChangeInfo.DRIVING = 3;\n    ActivityChangeInfo.UNKNOWN = 4;\n    ActivityChangeInfo.SHORTREST = 5;\n    ActivityChangeInfo.staticSize = 2;\n    return ActivityChangeInfo;\n}(DataType_1.default));\nexports.default = ActivityChangeInfo;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/ActivityChangeInfo.ts?");

/***/ }),

/***/ "./src/DataTypes/BcdDate.ts":
/*!**********************************!*\
  !*** ./src/DataTypes/BcdDate.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar padStart = __webpack_require__(/*! lodash/padStart */ \"./node_modules/lodash/padStart.js\");\nvar DataType_1 = __webpack_require__(/*! DataTypes/DataType */ \"./src/DataTypes/DataType.ts\");\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar Converter_1 = __webpack_require__(/*! utils/Converter */ \"./src/utils/Converter.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar BcdDate = /** @class */ (function (_super) {\n    __extends(BcdDate, _super);\n    function BcdDate(data) {\n        var _this = _super.call(this, data) || this;\n        _this.encodedDate = DataReader_1.default.readRawData(data, 0, 4);\n        return _this;\n    }\n    BcdDate.prototype.className = function () {\n        return \"BcdDate\";\n    };\n    BcdDate.prototype.title = function () {\n        return \"\";\n    };\n    BcdDate.prototype.size = function () {\n        return 4;\n    };\n    BcdDate.prototype.toString = function () {\n        var qs = '';\n        var d = this.encodedDate.toUint8Array();\n        qs = '' + Converter_1.default.bcdbyte(d[0]) + Converter_1.default.bcdbyte(d[1]) + '-' + padStart(Converter_1.default.bcdbyte(d[2]), 2, '0') + '-' + padStart(Converter_1.default.bcdbyte(d[3]), 2, '0');\n        ;\n        return qs.toString();\n    };\n    BcdDate.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"encodedDate\"), this.encodedDate.toString());\n    };\n    BcdDate.BLOCK_TYPE = 0;\n    BcdDate.staticSize = 4;\n    return BcdDate;\n}(DataType_1.default));\nexports.default = BcdDate;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/BcdDate.ts?");

/***/ }),

/***/ "./src/DataTypes/BcdMonthYear.ts":
/*!***************************************!*\
  !*** ./src/DataTypes/BcdMonthYear.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar padStart = __webpack_require__(/*! lodash/padStart */ \"./node_modules/lodash/padStart.js\");\nvar DataType_1 = __webpack_require__(/*! DataTypes/DataType */ \"./src/DataTypes/DataType.ts\");\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar Converter_1 = __webpack_require__(/*! utils/Converter */ \"./src/utils/Converter.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar BcdMonthYear = /** @class */ (function (_super) {\n    __extends(BcdMonthYear, _super);\n    function BcdMonthYear(data) {\n        var _this = _super.call(this, data) || this;\n        _this.encodedDate = DataReader_1.default.readRawData(data, 0, 2);\n        return _this;\n    }\n    BcdMonthYear.prototype.className = function () {\n        return \"BcdMonthYear\";\n    };\n    BcdMonthYear.prototype.title = function () {\n        return \"\";\n    };\n    BcdMonthYear.prototype.size = function () {\n        return 2;\n    };\n    BcdMonthYear.prototype.toString = function () {\n        var qs = '';\n        var d = this.encodedDate.toUint8Array();\n        qs = \"20\" + padStart(Converter_1.default.bcdbyte(d[1]), 2, '0') + '-' + padStart(Converter_1.default.bcdbyte(d[0]), 2, '0');\n        ;\n        return qs.toString();\n    };\n    BcdMonthYear.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"encodedDate\"), this.encodedDate.toString());\n    };\n    BcdMonthYear.BLOCK_TYPE = 0;\n    BcdMonthYear.staticSize = 2;\n    return BcdMonthYear;\n}(DataType_1.default));\nexports.default = BcdMonthYear;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/BcdMonthYear.ts?");

/***/ }),

/***/ "./src/DataTypes/Block.ts":
/*!********************************!*\
  !*** ./src/DataTypes/Block.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Block = /** @class */ (function () {\n    function Block(data) {\n        this.dataStart = data;\n    }\n    Block.build = function (data) {\n        var nm = { 'class': this };\n        return new nm['class'](data);\n    };\n    Block.prototype.size = function () {\n        return 0;\n    };\n    Block.prototype.className = function () {\n        return this.constructor.name;\n    };\n    Block.prototype.title = function () {\n        return \"\";\n    };\n    Block.prototype.toString = function () {\n        return \"\";\n    };\n    Block.prototype.printOn = function (o) {\n    };\n    return Block;\n}());\nexports.default = Block;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/Block.ts?");

/***/ }),

/***/ "./src/DataTypes/Block11Record.ts":
/*!****************************************!*\
  !*** ./src/DataTypes/Block11Record.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataType_1 = __webpack_require__(/*! DataTypes/DataType */ \"./src/DataTypes/DataType.ts\");\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar Timespan_1 = __webpack_require__(/*! DataTypes/Timespan */ \"./src/DataTypes/Timespan.ts\");\nvar FullCardNumber_1 = __webpack_require__(/*! DataTypes/FullCardNumber */ \"./src/DataTypes/FullCardNumber.ts\");\nvar Block11Record = /** @class */ (function (_super) {\n    __extends(Block11Record, _super);\n    function Block11Record(data) {\n        var _this = _super.call(this, data) || this;\n        _this.cardNumber = new FullCardNumber_1.default(data.slice(0));\n        _this.time = new Timespan_1.default(data.slice(18));\n        _this.sometimesDuration = DataReader_1.default.readUint16(data, 26);\n        _this.payloadData = DataReader_1.default.readRawData(data, 28, 30);\n        return _this;\n    }\n    Block11Record.prototype.className = function () {\n        return \"Block11Record\";\n    };\n    Block11Record.prototype.title = function () {\n        return \"\";\n    };\n    Block11Record.prototype.size = function () {\n        return 58;\n    };\n    Block11Record.prototype.toString = function () {\n        var qs = new QString_1.default('Block11Record');\n        return qs.toString();\n    };\n    Block11Record.prototype.printOn = function (report) {\n        report.writeBlock(this.cardNumber, Translation_1.tr(\"cardNumber\"));\n        report.writeBlock(this.time, Translation_1.tr(\"time\"));\n        report.tagValuePair(Translation_1.tr(\"sometimesDuration\"), new QString_1.default(\"%1 s\").arg(this.sometimesDuration).toString());\n        report.tagValuePair(Translation_1.tr(\"payloadData\"), this.payloadData.toString());\n    };\n    Block11Record.BLOCK_TYPE = 0;\n    Block11Record.staticSize = 58;\n    return Block11Record;\n}(DataType_1.default));\nexports.default = Block11Record;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/Block11Record.ts?");

/***/ }),

/***/ "./src/DataTypes/CardActivityDailyRecord.ts":
/*!**************************************************!*\
  !*** ./src/DataTypes/CardActivityDailyRecord.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar ActivityChangeInfo_1 = __webpack_require__(/*! DataTypes/ActivityChangeInfo */ \"./src/DataTypes/ActivityChangeInfo.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar SvgDayActivity_1 = __webpack_require__(/*! DataTypes/SvgDayActivity */ \"./src/DataTypes/SvgDayActivity.ts\");\nvar RawCardActivityDailyRecord_1 = __webpack_require__(/*! DataTypes/RawCardActivityDailyRecord */ \"./src/DataTypes/RawCardActivityDailyRecord.ts\");\nvar CardActivityDailyRecord = /** @class */ (function (_super) {\n    __extends(CardActivityDailyRecord, _super);\n    function CardActivityDailyRecord(data) {\n        var _this = _super.call(this, data) || this;\n        _this.activityChangeInfos = DataReader_1.default.readSubblocksByLength(ActivityChangeInfo_1.default, data, RawCardActivityDailyRecord_1.default.staticSize, _this.activityRecordLength - RawCardActivityDailyRecord_1.default.staticSize);\n        if (_this.activityChangeInfos.numberOfBlocks() > 0) {\n            for (var j = 0; j < _this.activityChangeInfos.numberOfBlocks() - 1; j++) {\n                if (_this.activityChangeInfos.get(j + 1).t != 0) {\n                    _this.activityChangeInfos.get(j).setDuration(_this.activityChangeInfos.get(j + 1).t - _this.activityChangeInfos.get(j).t, false);\n                }\n                else {\n                    _this.activityChangeInfos.get(j).setDuration(60 * 24 - _this.activityChangeInfos.get(j).t, false);\n                }\n            }\n            _this.activityChangeInfos.get(_this.activityChangeInfos.numberOfBlocks() - 1).setDuration(60 * 24 - _this.activityChangeInfos.get(_this.activityChangeInfos.numberOfBlocks() - 1).t, false);\n        }\n        return _this;\n    }\n    CardActivityDailyRecord.prototype.title = function () {\n        return new QString_1.default(Translation_1.tr(\"Activities on %1\"))\n            .arg(this.activityRecordDate.toString()).toString();\n    };\n    CardActivityDailyRecord.prototype.size = function () {\n        if (this.activityRecordLength < RawCardActivityDailyRecord_1.default.staticSize) {\n            console.log(\"Size too small in CardActivityDailyRecord\");\n            return RawCardActivityDailyRecord_1.default.staticSize;\n        }\n        if (this.activityRecordLength > RawCardActivityDailyRecord_1.default.staticSize + 2 * 60 * 24) {\n            console.log(\"Size of CardActivityDailyRecord excessive: \" + this.activityRecordLength);\n        }\n        return this.activityRecordLength;\n    };\n    CardActivityDailyRecord.prototype.printOn = function (report) {\n        _super.prototype.printOn.call(this, report);\n        if (report.allowSvg()) {\n            var visualization = new SvgDayActivity_1.default();\n            for (var j = 0; j < this.activityChangeInfos.numberOfBlocks(); ++j) {\n                visualization.add(this.activityChangeInfos.get(j).t, this.activityChangeInfos.get(j).duration, this.activityChangeInfos.get(j).heightHint(), this.activityChangeInfos.get(j).color(), this.activityChangeInfos.get(j).toString());\n            }\n            report.tagValuePair(Translation_1.tr(\"Visualization\"), visualization.toString());\n        }\n        report.writeArray(this.activityChangeInfos, Translation_1.tr(\"activityChangeInfos\"), false);\n    };\n    return CardActivityDailyRecord;\n}(RawCardActivityDailyRecord_1.default));\nexports.default = CardActivityDailyRecord;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/CardActivityDailyRecord.ts?");

/***/ }),

/***/ "./src/DataTypes/CardEventRecord.ts":
/*!******************************************!*\
  !*** ./src/DataTypes/CardEventRecord.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataType_1 = __webpack_require__(/*! DataTypes/DataType */ \"./src/DataTypes/DataType.ts\");\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ \"./src/utils/FormatStrings.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar Timespan_1 = __webpack_require__(/*! DataTypes/Timespan */ \"./src/DataTypes/Timespan.ts\");\nvar VehicleRegistration_1 = __webpack_require__(/*! DataTypes/VehicleRegistration */ \"./src/DataTypes/VehicleRegistration.ts\");\nvar CardEventRecord = /** @class */ (function (_super) {\n    __extends(CardEventRecord, _super);\n    function CardEventRecord(data) {\n        var _this = _super.call(this, data) || this;\n        _this.eventType = DataReader_1.default.readUint8(data, 0);\n        _this.eventTime = new Timespan_1.default(data.slice(1));\n        _this.eventVehicleRegistration = new VehicleRegistration_1.default(data.slice(9));\n        return _this;\n    }\n    CardEventRecord.prototype.className = function () {\n        return \"CardEventRecord\";\n    };\n    CardEventRecord.prototype.title = function () {\n        return \"\";\n    };\n    CardEventRecord.prototype.size = function () {\n        return 24;\n    };\n    CardEventRecord.prototype.toString = function () {\n        var qs = new QString_1.default('CardEventRecord');\n        return qs.toString();\n    };\n    CardEventRecord.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"eventType\"), FormatStrings_1.default.eventType(this.eventType));\n        report.writeBlock(this.eventTime, Translation_1.tr(\"eventTime\"));\n        report.writeBlock(this.eventVehicleRegistration, Translation_1.tr(\"eventVehicleRegistration\"));\n    };\n    CardEventRecord.BLOCK_TYPE = 0;\n    CardEventRecord.staticSize = 24;\n    return CardEventRecord;\n}(DataType_1.default));\nexports.default = CardEventRecord;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/CardEventRecord.ts?");

/***/ }),

/***/ "./src/DataTypes/CardSlots.ts":
/*!************************************!*\
  !*** ./src/DataTypes/CardSlots.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar DataType_1 = __webpack_require__(/*! DataTypes/DataType */ \"./src/DataTypes/DataType.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar FullCardNumber_1 = __webpack_require__(/*! DataTypes/FullCardNumber */ \"./src/DataTypes/FullCardNumber.ts\");\nvar CardSlots = /** @class */ (function (_super) {\n    __extends(CardSlots, _super);\n    function CardSlots(data) {\n        var _this = _super.call(this, data) || this;\n        _this.cardNumberDriverSlotBegin = new FullCardNumber_1.default(data.slice(0));\n        _this.cardNumberCoDriverSlotBegin = new FullCardNumber_1.default(data.slice(18));\n        _this.cardNumberDriverSlotEnd = new FullCardNumber_1.default(data.slice(36));\n        _this.cardNumberCoDriverSlotEnd = new FullCardNumber_1.default(data.slice(54));\n        return _this;\n    }\n    CardSlots.prototype.className = function () {\n        return \"CardSlots\";\n    };\n    CardSlots.prototype.title = function () {\n        return \"\";\n    };\n    CardSlots.prototype.size = function () {\n        return 72;\n    };\n    CardSlots.prototype.toString = function () {\n        var qs = new QString_1.default('CardSlots');\n        return qs.toString();\n    };\n    CardSlots.prototype.printOn = function (report) {\n        report.writeBlock(this.cardNumberDriverSlotBegin, Translation_1.tr(\"cardNumberDriverSlotBegin\"));\n        report.writeBlock(this.cardNumberCoDriverSlotBegin, Translation_1.tr(\"cardNumberCoDriverSlotBegin\"));\n        report.writeBlock(this.cardNumberDriverSlotEnd, Translation_1.tr(\"cardNumberDriverSlotEnd\"));\n        report.writeBlock(this.cardNumberCoDriverSlotEnd, Translation_1.tr(\"cardNumberCoDriverSlotEnd\"));\n    };\n    CardSlots.BLOCK_TYPE = 0;\n    return CardSlots;\n}(DataType_1.default));\nexports.default = CardSlots;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/CardSlots.ts?");

/***/ }),

/***/ "./src/DataTypes/CardVehicleRecord.ts":
/*!********************************************!*\
  !*** ./src/DataTypes/CardVehicleRecord.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataType_1 = __webpack_require__(/*! DataTypes/DataType */ \"./src/DataTypes/DataType.ts\");\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar Timespan_1 = __webpack_require__(/*! DataTypes/Timespan */ \"./src/DataTypes/Timespan.ts\");\nvar VehicleRegistration_1 = __webpack_require__(/*! DataTypes/VehicleRegistration */ \"./src/DataTypes/VehicleRegistration.ts\");\nvar CardVehicleRecord = /** @class */ (function (_super) {\n    __extends(CardVehicleRecord, _super);\n    function CardVehicleRecord(data) {\n        var _this = _super.call(this, data) || this;\n        _this.vehicleOdometerBegin = DataReader_1.default.readUint24(data, 0);\n        _this.vehicleOdometerEnd = DataReader_1.default.readUint24(data, 3);\n        _this.vehicleUse = new Timespan_1.default(data.slice(6));\n        _this.registration = new VehicleRegistration_1.default(data.slice(14));\n        _this.vuDataBlockCounter = DataReader_1.default.readBCD16(data, 29);\n        return _this;\n    }\n    CardVehicleRecord.prototype.className = function () {\n        return \"CardVehicleRecord\";\n    };\n    CardVehicleRecord.prototype.title = function () {\n        return \"\";\n    };\n    CardVehicleRecord.prototype.size = function () {\n        return 31;\n    };\n    CardVehicleRecord.prototype.toString = function () {\n        var qs = new QString_1.default(Translation_1.tr(\"%1 km on %2 (%3)\"))\n            .arg(this.vehicleOdometerEnd - this.vehicleOdometerBegin)\n            .arg(this.registration.toString())\n            .arg(this.vehicleUse.toString()).toString();\n        return qs.toString();\n    };\n    CardVehicleRecord.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"vehicleOdometerBegin\"), new QString_1.default(\"%1 km\").arg(this.vehicleOdometerBegin).toString());\n        report.tagValuePair(Translation_1.tr(\"vehicleOdometerEnd\"), new QString_1.default(\"%1 km\").arg(this.vehicleOdometerEnd).toString());\n        report.writeBlock(this.vehicleUse, Translation_1.tr(\"vehicleUse\"));\n        report.writeBlock(this.registration, Translation_1.tr(\"registration\"));\n        report.tagValuePair(Translation_1.tr(\"vuDataBlockCounter\"), this.vuDataBlockCounter);\n    };\n    CardVehicleRecord.BLOCK_TYPE = 0;\n    CardVehicleRecord.staticSize = 31;\n    return CardVehicleRecord;\n}(DataType_1.default));\nexports.default = CardVehicleRecord;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/CardVehicleRecord.ts?");

/***/ }),

/***/ "./src/DataTypes/CertificateAuthority.ts":
/*!***********************************************!*\
  !*** ./src/DataTypes/CertificateAuthority.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataType_1 = __webpack_require__(/*! DataTypes/DataType */ \"./src/DataTypes/DataType.ts\");\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ \"./src/utils/FormatStrings.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar CertificateAuthority = /** @class */ (function (_super) {\n    __extends(CertificateAuthority, _super);\n    function CertificateAuthority(data) {\n        var _this = _super.call(this, data) || this;\n        _this.nationNumeric = DataReader_1.default.readUint8(data, 0);\n        _this.nationAlpha = DataReader_1.default.readString(data, 1, 3).toString();\n        _this.keySerialNumber = DataReader_1.default.readUint8(data, 4);\n        _this.additionalInfo = DataReader_1.default.readRawData(data, 5, 2);\n        _this.caIdentifer = DataReader_1.default.readUint8(data, 7);\n        return _this;\n    }\n    CertificateAuthority.prototype.className = function () {\n        return \"CertificateAuthority\";\n    };\n    CertificateAuthority.prototype.title = function () {\n        return \"\";\n    };\n    CertificateAuthority.prototype.size = function () {\n        return 8;\n    };\n    CertificateAuthority.prototype.toString = function () {\n        var qs = new QString_1.default('CertificateAuthority');\n        return qs.toString();\n    };\n    CertificateAuthority.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"nationNumeric\"), FormatStrings_1.default.nationNumeric(this.nationNumeric));\n        report.tagValuePair(Translation_1.tr(\"nationAlpha\"), this.nationAlpha);\n        report.tagValuePair(Translation_1.tr(\"keySerialNumber\"), this.keySerialNumber);\n        report.tagValuePair(Translation_1.tr(\"additionalInfo\"), this.additionalInfo.toString());\n        report.tagValuePair(Translation_1.tr(\"caIdentifer\"), this.caIdentifer);\n    };\n    CertificateAuthority.BLOCK_TYPE = 0;\n    CertificateAuthority.staticSize = 8;\n    return CertificateAuthority;\n}(DataType_1.default));\nexports.default = CertificateAuthority;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/CertificateAuthority.ts?");

/***/ }),

/***/ "./src/DataTypes/DataType.ts":
/*!***********************************!*\
  !*** ./src/DataTypes/DataType.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Block_1 = __webpack_require__(/*! DataTypes/Block */ \"./src/DataTypes/Block.ts\");\nvar DataType = /** @class */ (function (_super) {\n    __extends(DataType, _super);\n    function DataType(data) {\n        return _super.call(this, data) || this;\n    }\n    DataType.prototype.isDefaultValue = function () {\n        var items = new Uint8Array(this.dataStart.slice(0, this.size()));\n        for (var j = 0; j < items.length; j++) {\n            if (items[j] != 0x0 && items[j] != 0xFF && items[j] != 0x20) {\n                return false;\n            }\n        }\n        return true;\n    };\n    return DataType;\n}(Block_1.default));\nexports.default = DataType;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/DataType.ts?");

/***/ }),

/***/ "./src/DataTypes/EncryptedCertificate.ts":
/*!***********************************************!*\
  !*** ./src/DataTypes/EncryptedCertificate.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar DataType_1 = __webpack_require__(/*! DataTypes/DataType */ \"./src/DataTypes/DataType.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar CertificateAuthority_1 = __webpack_require__(/*! DataTypes/CertificateAuthority */ \"./src/DataTypes/CertificateAuthority.ts\");\nvar EncryptedCertificate = /** @class */ (function (_super) {\n    __extends(EncryptedCertificate, _super);\n    function EncryptedCertificate(data) {\n        var _this = _super.call(this, data) || this;\n        _this.sign = DataReader_1.default.readRawData(data, 0, 128);\n        _this.cndash = DataReader_1.default.readRawData(data, 128, 58);\n        _this.certificateAuthorityReference = new CertificateAuthority_1.default(data.slice(186));\n        return _this;\n    }\n    EncryptedCertificate.prototype.className = function () {\n        return \"EncryptedCertificate\";\n    };\n    EncryptedCertificate.prototype.title = function () {\n        return \"\";\n    };\n    EncryptedCertificate.prototype.size = function () {\n        return 194;\n    };\n    EncryptedCertificate.prototype.toString = function () {\n        var qs = new QString_1.default('EncryptedCertificate');\n        return qs.toString();\n    };\n    EncryptedCertificate.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"sign\"), this.sign.toString());\n        report.tagValuePair(Translation_1.tr(\"cndash\"), this.cndash.toString());\n        report.writeBlock(this.certificateAuthorityReference, Translation_1.tr(\"certificateAuthorityReference\"));\n    };\n    EncryptedCertificate.BLOCK_TYPE = 0;\n    return EncryptedCertificate;\n}(DataType_1.default));\nexports.default = EncryptedCertificate;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/EncryptedCertificate.ts?");

/***/ }),

/***/ "./src/DataTypes/ExtendedSerialNumber.ts":
/*!***********************************************!*\
  !*** ./src/DataTypes/ExtendedSerialNumber.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataType_1 = __webpack_require__(/*! DataTypes/DataType */ \"./src/DataTypes/DataType.ts\");\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ \"./src/utils/FormatStrings.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar BcdMonthYear_1 = __webpack_require__(/*! DataTypes/BcdMonthYear */ \"./src/DataTypes/BcdMonthYear.ts\");\nvar ExtendedSerialNumber = /** @class */ (function (_super) {\n    __extends(ExtendedSerialNumber, _super);\n    function ExtendedSerialNumber(data) {\n        var _this = _super.call(this, data) || this;\n        _this.serialNumber = DataReader_1.default.readUint32(data, 0);\n        _this.date = new BcdMonthYear_1.default(data.slice(4));\n        _this.equipmentType = DataReader_1.default.readUint8(data, 6);\n        _this.manufacturerCode = DataReader_1.default.readUint8(data, 7);\n        return _this;\n    }\n    ExtendedSerialNumber.prototype.className = function () {\n        return \"ExtendedSerialNumber\";\n    };\n    ExtendedSerialNumber.prototype.title = function () {\n        return \"\";\n    };\n    ExtendedSerialNumber.prototype.size = function () {\n        return 8;\n    };\n    ExtendedSerialNumber.prototype.toString = function () {\n        var qs = new QString_1.default(\"%1 (%2) %3, %4\")\n            .arg(this.serialNumber)\n            .arg(this.date.toString())\n            .arg(FormatStrings_1.default.equipmentType(this.equipmentType))\n            .arg(FormatStrings_1.default.manufacturerCode(this.manufacturerCode)).toString();\n        return qs.toString();\n    };\n    ExtendedSerialNumber.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"serialNumber\"), this.serialNumber);\n        report.writeBlock(this.date, Translation_1.tr(\"date\"));\n        report.tagValuePair(Translation_1.tr(\"equipmentType\"), FormatStrings_1.default.equipmentType(this.equipmentType));\n        report.tagValuePair(Translation_1.tr(\"manufacturerCode\"), FormatStrings_1.default.manufacturerCode(this.manufacturerCode));\n    };\n    ExtendedSerialNumber.BLOCK_TYPE = 0;\n    ExtendedSerialNumber.staticSize = 8;\n    return ExtendedSerialNumber;\n}(DataType_1.default));\nexports.default = ExtendedSerialNumber;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/ExtendedSerialNumber.ts?");

/***/ }),

/***/ "./src/DataTypes/FullCardNumber.ts":
/*!*****************************************!*\
  !*** ./src/DataTypes/FullCardNumber.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar DataType_1 = __webpack_require__(/*! DataTypes/DataType */ \"./src/DataTypes/DataType.ts\");\nvar FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ \"./src/utils/FormatStrings.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar FullCardNumber = /** @class */ (function (_super) {\n    __extends(FullCardNumber, _super);\n    function FullCardNumber(data) {\n        var _this = _super.call(this, data) || this;\n        _this.cardType = DataReader_1.default.readUint8(data, 0);\n        _this.cardIssuingMemberState = DataReader_1.default.readUint8(data, 1);\n        _this.cardNumber = DataReader_1.default.readString(data, 2, 16).toString();\n        return _this;\n    }\n    FullCardNumber.prototype.className = function () {\n        return \"FullCardNumber\";\n    };\n    FullCardNumber.prototype.title = function () {\n        return \"\";\n    };\n    FullCardNumber.prototype.size = function () {\n        return 18;\n    };\n    FullCardNumber.prototype.toString = function () {\n        var qs = new QString_1.default(\"%1 (%2, %3)\")\n            .arg(this.cardNumber)\n            .arg(FormatStrings_1.default.nationNumeric(this.cardIssuingMemberState))\n            .arg(FormatStrings_1.default.equipmentType(this.cardType));\n        return qs.toString();\n    };\n    FullCardNumber.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"cardType\"), FormatStrings_1.default.equipmentType(this.cardType));\n        report.tagValuePair(Translation_1.tr(\"cardIssuingMemberState\"), FormatStrings_1.default.nationNumeric(this.cardIssuingMemberState));\n        report.tagValuePair(Translation_1.tr(\"cardNumber\"), this.cardNumber);\n    };\n    FullCardNumber.BLOCK_TYPE = 0;\n    return FullCardNumber;\n}(DataType_1.default));\nexports.default = FullCardNumber;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/FullCardNumber.ts?");

/***/ }),

/***/ "./src/DataTypes/Name.ts":
/*!*******************************!*\
  !*** ./src/DataTypes/Name.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataType_1 = __webpack_require__(/*! DataTypes/DataType */ \"./src/DataTypes/DataType.ts\");\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar Name = /** @class */ (function (_super) {\n    __extends(Name, _super);\n    function Name(data) {\n        var _this = _super.call(this, data) || this;\n        _this.surname = DataReader_1.default.readCodePageString(data, 0, 36).toString();\n        _this.firstNames = DataReader_1.default.readCodePageString(data, 36, 36).toString();\n        return _this;\n    }\n    Name.prototype.className = function () {\n        return \"Name\";\n    };\n    Name.prototype.title = function () {\n        return \"\";\n    };\n    Name.prototype.size = function () {\n        return 72;\n    };\n    Name.prototype.toString = function () {\n        var qs = this.surname + \", \" + this.firstNames;\n        return qs.toString();\n    };\n    Name.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"surname\"), this.surname);\n        report.tagValuePair(Translation_1.tr(\"firstNames\"), this.firstNames);\n    };\n    Name.BLOCK_TYPE = 0;\n    Name.staticSize = 72;\n    return Name;\n}(DataType_1.default));\nexports.default = Name;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/Name.ts?");

/***/ }),

/***/ "./src/DataTypes/PictureGenerator.ts":
/*!*******************************************!*\
  !*** ./src/DataTypes/PictureGenerator.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar PictureGenerator = /** @class */ (function () {\n    function PictureGenerator() {\n        this.collected = '';\n    }\n    return PictureGenerator;\n}());\nexports.default = PictureGenerator;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/PictureGenerator.ts?");

/***/ }),

/***/ "./src/DataTypes/PlaceRecord.ts":
/*!**************************************!*\
  !*** ./src/DataTypes/PlaceRecord.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataType_1 = __webpack_require__(/*! DataTypes/DataType */ \"./src/DataTypes/DataType.ts\");\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ \"./src/utils/FormatStrings.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ \"./src/DataTypes/TimeReal.ts\");\nvar PlaceRecord = /** @class */ (function (_super) {\n    __extends(PlaceRecord, _super);\n    function PlaceRecord(data) {\n        var _this = _super.call(this, data) || this;\n        _this.entryTime = new TimeReal_1.default(data.slice(0));\n        _this.entryTypeDailyWorkPeriod = DataReader_1.default.readUint8(data, 4);\n        _this.dailyWorkPeriodCountry = DataReader_1.default.readUint8(data, 5);\n        _this.dailyWorkPeriodRegion = DataReader_1.default.readUint8(data, 6);\n        _this.vehicleOdometerValue = DataReader_1.default.readUint24(data, 7);\n        return _this;\n    }\n    PlaceRecord.prototype.className = function () {\n        return \"PlaceRecord\";\n    };\n    PlaceRecord.prototype.title = function () {\n        return \"\";\n    };\n    PlaceRecord.prototype.size = function () {\n        return 10;\n    };\n    PlaceRecord.prototype.toString = function () {\n        var qs = new QString_1.default(\"%1%2 - %3 - %4 km\")\n            .arg(FormatStrings_1.default.nationNumeric(this.dailyWorkPeriodCountry))\n            .arg(this.dailyWorkPeriodRegion == 0 ? new QString_1.default() : \", \" + FormatStrings_1.default.regionNumeric(this.dailyWorkPeriodRegion))\n            .arg(this.entryTime.toString())\n            .arg(this.vehicleOdometerValue).toString();\n        return qs.toString();\n    };\n    PlaceRecord.prototype.printOn = function (report) {\n        report.writeBlock(this.entryTime, Translation_1.tr(\"entryTime\"));\n        report.tagValuePair(Translation_1.tr(\"entryTypeDailyWorkPeriod\"), FormatStrings_1.default.dailyWorkPeriod(this.entryTypeDailyWorkPeriod));\n        report.tagValuePair(Translation_1.tr(\"dailyWorkPeriodCountry\"), FormatStrings_1.default.nationNumeric(this.dailyWorkPeriodCountry));\n        report.tagValuePair(Translation_1.tr(\"dailyWorkPeriodRegion\"), FormatStrings_1.default.regionNumeric(this.dailyWorkPeriodRegion));\n        report.tagValuePair(Translation_1.tr(\"vehicleOdometerValue\"), new QString_1.default(\"%1 km\").arg(this.vehicleOdometerValue).toString());\n    };\n    PlaceRecord.BLOCK_TYPE = 0;\n    PlaceRecord.staticSize = 10;\n    return PlaceRecord;\n}(DataType_1.default));\nexports.default = PlaceRecord;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/PlaceRecord.ts?");

/***/ }),

/***/ "./src/DataTypes/RawCardActivityDailyRecord.ts":
/*!*****************************************************!*\
  !*** ./src/DataTypes/RawCardActivityDailyRecord.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataType_1 = __webpack_require__(/*! DataTypes/DataType */ \"./src/DataTypes/DataType.ts\");\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ \"./src/DataTypes/TimeReal.ts\");\nvar RawCardActivityDailyRecord = /** @class */ (function (_super) {\n    __extends(RawCardActivityDailyRecord, _super);\n    function RawCardActivityDailyRecord(data) {\n        var _this = _super.call(this, data) || this;\n        _this.activityRecordPreviousLength = DataReader_1.default.readUint16(data, 0);\n        _this.activityRecordLength = DataReader_1.default.readUint16(data, 2);\n        _this.activityRecordDate = new TimeReal_1.default(data.slice(4));\n        _this.activityPresenceCounter = DataReader_1.default.readBCD16(data, 8);\n        _this.activityDayDistance = DataReader_1.default.readUint16(data, 10);\n        return _this;\n    }\n    RawCardActivityDailyRecord.prototype.className = function () {\n        return \"RawCardActivityDailyRecord\";\n    };\n    RawCardActivityDailyRecord.prototype.title = function () {\n        return new QString_1.default(Translation_1.tr(\"Activities on %1\")).arg(this.activityRecordDate.toString()).toString();\n    };\n    RawCardActivityDailyRecord.prototype.size = function () {\n        return 12;\n    };\n    RawCardActivityDailyRecord.prototype.toString = function () {\n        var qs = new QString_1.default('CardActivityDailyRecord');\n        return qs.toString();\n    };\n    RawCardActivityDailyRecord.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"activityRecordPreviousLength\"), new QString_1.default(\"%1 Bytes\").arg(this.activityRecordPreviousLength).toString());\n        report.tagValuePair(Translation_1.tr(\"activityRecordLength\"), new QString_1.default(\"%1 Bytes\").arg(this.activityRecordLength).toString());\n        report.writeBlock(this.activityRecordDate, Translation_1.tr(\"activityRecordDate\"));\n        report.tagValuePair(Translation_1.tr(\"activityPresenceCounter\"), this.activityPresenceCounter);\n        report.tagValuePair(Translation_1.tr(\"activityDayDistance\"), new QString_1.default(\"%1 km\").arg(this.activityDayDistance).toString());\n    };\n    RawCardActivityDailyRecord.BLOCK_TYPE = 0;\n    RawCardActivityDailyRecord.staticSize = 12;\n    return RawCardActivityDailyRecord;\n}(DataType_1.default));\nexports.default = RawCardActivityDailyRecord;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/RawCardActivityDailyRecord.ts?");

/***/ }),

/***/ "./src/DataTypes/RawData.ts":
/*!**********************************!*\
  !*** ./src/DataTypes/RawData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar findIndex = __webpack_require__(/*! lodash/findIndex */ \"./node_modules/lodash/findIndex.js\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar Block_1 = __webpack_require__(/*! DataTypes/Block */ \"./src/DataTypes/Block.ts\");\nvar RawData = /** @class */ (function (_super) {\n    __extends(RawData, _super);\n    function RawData(data, length) {\n        var _this = _super.call(this) || this;\n        _this.data = data.slice(0, length);\n        return _this;\n    }\n    RawData.prototype.toString = function () {\n        return RawData.toHexString(new Uint8Array(this.data));\n    };\n    RawData.toHexString = function (data) {\n        var allzeros = findIndex(data, function (c) { return c !== 0; }) < 0;\n        if (allzeros) {\n            return Translation_1.tr(\"All \" + data.byteLength + \" Bytes are zeroed.\");\n        }\n        var rv = '';\n        data.forEach(function (c) {\n            rv += ('0' + c.toString(16)).slice(-2) + ' ';\n        });\n        return rv.replace(/ *$/, '');\n    };\n    RawData.prototype.toTextString = function () {\n        return String.fromCharCode.apply(null, new Uint8Array(this.data));\n    };\n    RawData.prototype.toUint8Array = function () {\n        return new Uint8Array(this.data);\n    };\n    RawData.prototype.printOn = function (report) {\n        report.tagValuePair(\"Raw data(hex encoded)\", this.toString());\n    };\n    RawData.prototype.className = function () {\n        return \"RawData\";\n    };\n    RawData.prototype.size = function () {\n        return this.data.byteLength;\n    };\n    return RawData;\n}(Block_1.default));\nexports.default = RawData;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/RawData.ts?");

/***/ }),

/***/ "./src/DataTypes/SpecificConditionRecord.ts":
/*!**************************************************!*\
  !*** ./src/DataTypes/SpecificConditionRecord.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataType_1 = __webpack_require__(/*! DataTypes/DataType */ \"./src/DataTypes/DataType.ts\");\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ \"./src/utils/FormatStrings.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ \"./src/DataTypes/TimeReal.ts\");\nvar SpecificConditionRecord = /** @class */ (function (_super) {\n    __extends(SpecificConditionRecord, _super);\n    function SpecificConditionRecord(data) {\n        var _this = _super.call(this, data) || this;\n        _this.entryTime = new TimeReal_1.default(data.slice(0));\n        _this.specificConditionType = DataReader_1.default.readUint8(data, 4);\n        return _this;\n    }\n    SpecificConditionRecord.prototype.className = function () {\n        return \"SpecificConditionRecord\";\n    };\n    SpecificConditionRecord.prototype.title = function () {\n        return \"\";\n    };\n    SpecificConditionRecord.prototype.size = function () {\n        return 5;\n    };\n    SpecificConditionRecord.prototype.toString = function () {\n        var qs = new QString_1.default('SpecificConditionRecord');\n        return qs.toString();\n    };\n    SpecificConditionRecord.prototype.printOn = function (report) {\n        report.writeBlock(this.entryTime, Translation_1.tr(\"entryTime\"));\n        report.tagValuePair(Translation_1.tr(\"specificConditionType\"), FormatStrings_1.default.specificCondition(this.specificConditionType));\n    };\n    SpecificConditionRecord.BLOCK_TYPE = 0;\n    SpecificConditionRecord.staticSize = 5;\n    return SpecificConditionRecord;\n}(DataType_1.default));\nexports.default = SpecificConditionRecord;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/SpecificConditionRecord.ts?");

/***/ }),

/***/ "./src/DataTypes/Subblocks.ts":
/*!************************************!*\
  !*** ./src/DataTypes/Subblocks.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataType_1 = __webpack_require__(/*! DataTypes/DataType */ \"./src/DataTypes/DataType.ts\");\nvar Subblocks = /** @class */ (function (_super) {\n    __extends(Subblocks, _super);\n    function Subblocks() {\n        var _this = _super.call(this) || this;\n        _this.numberOfBytes = 0;\n        _this.items = [];\n        return _this;\n    }\n    Subblocks.prototype.append = function (block) {\n        if (!block.isDefaultValue()) {\n            this.items.push(block);\n        }\n        this.numberOfBytes += block.size();\n        //console.log(\"this.numberOfBytes: \" + this.numberOfBytes);\n    };\n    Subblocks.prototype.get = function (i) {\n        return this.items[i];\n    };\n    Subblocks.prototype.numberOfBlocks = function () {\n        return this.items.length;\n    };\n    Subblocks.prototype.size = function () {\n        return this.numberOfBytes;\n    };\n    Subblocks.prototype.printOn = function (o) {\n        o.writeArray(this, this.title());\n    };\n    Subblocks.prototype.className = function () {\n        return \"Subblocks<\" + this.constructor.name + \">\";\n    };\n    return Subblocks;\n}(DataType_1.default));\nexports.default = Subblocks;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/Subblocks.ts?");

/***/ }),

/***/ "./src/DataTypes/SvgDayActivity.ts":
/*!*****************************************!*\
  !*** ./src/DataTypes/SvgDayActivity.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar SvgDayGraph_1 = __webpack_require__(/*! DataTypes/SvgDayGraph */ \"./src/DataTypes/SvgDayGraph.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar SvgDayActivity = /** @class */ (function (_super) {\n    __extends(SvgDayActivity, _super);\n    function SvgDayActivity() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    SvgDayActivity.prototype.toString = function () {\n        return this.addSvgHull(\"\\n\\t\\t<g transform='scale(0.5,-1) translate(0,-100)'>\"\n            + this.collected + \"\\n\\t\\t</g>\"\n            + this.drawBorderAndTimeAxis()\n            + this.drawLegend(), 900);\n    };\n    SvgDayActivity.prototype.add = function (from, duration, height, color, title) {\n        this.collected += \"\\n\\t\\t\\t<rect x='\" + from + \"' fill='\" + color + \"' width='\"\n            + duration + \"' height='\" + Math.floor(height * 80) + \"'><title>\" + title + \"</title></rect>\";\n    };\n    SvgDayActivity.prototype.drawLegend = function () {\n        return new QString_1.default(\"\\n\\t\\t<g style='font-size:16px;text-anchor:left'>\" +\n            \"\\n\\t\\t\\t<rect x='730' y='106' fill='purple' width='30' height='16'/><text x='765' y='120'>= %6</text>\" +\n            \"\\n\\t\\t\\t<rect x='730' y='86' fill='red' width='30' height='16'/><text x='765' y='100'>= %1</text>\" +\n            \"\\n\\t\\t\\t<rect x='730' y='66' fill='orange' width='30' height='16'/><text x='765' y='80'>= %2</text>\" +\n            \"\\n\\t\\t\\t<rect x='730' y='46' fill='yellow' width='30' height='16'/><text x='765' y='60'>= %3</text>\" +\n            \"\\n\\t\\t\\t<rect x='730' y='26' fill='green' width='30' height='16'/><text x='765' y='40'>= %4</text>\" +\n            \"\\n\\t\\t\\t<rect x='730' y='6' fill='black' width='30' height='16'/><text x='765' y='20'>= %5</text>\" +\n            \"\\n\\t\\t</g>\")\n            .arg(Translation_1.tr(\"break/rest\"))\n            .arg(Translation_1.tr(\"short break\"))\n            .arg(Translation_1.tr(\"working\"))\n            .arg(Translation_1.tr(\"driving\"))\n            .arg(Translation_1.tr(\"available\"))\n            .arg(Translation_1.tr(\"unknown\")).toString();\n    };\n    return SvgDayActivity;\n}(SvgDayGraph_1.default));\nexports.default = SvgDayActivity;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/SvgDayActivity.ts?");

/***/ }),

/***/ "./src/DataTypes/SvgDayGraph.ts":
/*!**************************************!*\
  !*** ./src/DataTypes/SvgDayGraph.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar PictureGenerator_1 = __webpack_require__(/*! ./PictureGenerator */ \"./src/DataTypes/PictureGenerator.ts\");\nvar SvgDayGraph = /** @class */ (function (_super) {\n    __extends(SvgDayGraph, _super);\n    function SvgDayGraph() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    SvgDayGraph.prototype.drawBorderAndTimeAxis = function () {\n        var rv = \"\";\n        rv += \"\\n\\t\\t<g style='font-size:16px;text-anchor:middle'>\";\n        for (var j = 0; j < 25; j++) {\n            rv += \"\\n\\t\\t\\t<text x='\" + (j * 30) + \"' y='118'>\" + j + \"</text>\";\n        }\n        rv += \"\\n\\t\\t\\t<text x='360' y='132'>\" + Translation_1.tr(\"Time of day (UTC)\") + \"</text>\";\n        rv += \"\\n\\t\\t</g>\";\n        rv += \"\\n\\t\\t<g style='stroke:black;stroke-width:2'>\";\n        for (var j = 0; j < 25; j++) {\n            rv += \"\\n\\t\\t\\t<line x1='\" + (j * 30) + \"' y1='100' x2='\" + (j * 30) + \"' y2='104'/>\";\n        }\n        rv += \"\\n\\t\\t\\t<polyline points='0,0 720,0 720,100 0,100 0,0' style='fill:none'/>\";\n        rv += \"\\n\\t\\t</g>\";\n        return rv;\n    };\n    SvgDayGraph.prototype.addSvgHull = function (content, width) {\n        return new QString_1.default(\"\\n<svg xmlns='http://www.w3.org/2000/svg' width='%1' height='135'>\\n\\t<g transform='translate(10,0)'>\")\n            .arg(width).toString()\n            + content\n            + \"\\n\\t</g>\\n</svg>\";\n    };\n    return SvgDayGraph;\n}(PictureGenerator_1.default));\nexports.default = SvgDayGraph;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/SvgDayGraph.ts?");

/***/ }),

/***/ "./src/DataTypes/TimeReal.ts":
/*!***********************************!*\
  !*** ./src/DataTypes/TimeReal.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Block_1 = __webpack_require__(/*! DataTypes/Block */ \"./src/DataTypes/Block.ts\");\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar TimeReal = /** @class */ (function (_super) {\n    __extends(TimeReal, _super);\n    function TimeReal(data) {\n        var _this = _super.call(this) || this;\n        var tm = DataReader_1.default.readUint32(data, 0);\n        if (tm) {\n            _this.time = TimeReal.fromTime_t(tm);\n        }\n        return _this;\n    }\n    TimeReal.prototype.date = function () {\n        return this.time;\n    };\n    TimeReal.fromTime_t = function (seconds) {\n        return new Date(seconds * 1000);\n    };\n    TimeReal.prototype.toString = function () {\n        if (!this.time) {\n            return Translation_1.tr(\"undefined\");\n        }\n        var rv = this.time.toJSON();\n        if (rv.match(/.*T00:00:00.000Z$/)) {\n            rv = rv.slice(0, 10);\n        }\n        return rv;\n    };\n    return TimeReal;\n}(Block_1.default));\nexports.default = TimeReal;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/TimeReal.ts?");

/***/ }),

/***/ "./src/DataTypes/Timespan.ts":
/*!***********************************!*\
  !*** ./src/DataTypes/Timespan.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Block_1 = __webpack_require__(/*! DataTypes/Block */ \"./src/DataTypes/Block.ts\");\nvar TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ \"./src/DataTypes/TimeReal.ts\");\nvar Timespan = /** @class */ (function (_super) {\n    __extends(Timespan, _super);\n    function Timespan(data) {\n        var _this = _super.call(this) || this;\n        _this.begin = new TimeReal_1.default(data);\n        _this.end = new TimeReal_1.default(data.slice(4));\n        return _this;\n    }\n    Timespan.prototype.toString = function () {\n        //TODO\n        return \"From \" + this.begin + \" To \" + this.end;\n    };\n    return Timespan;\n}(Block_1.default));\nexports.default = Timespan;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/Timespan.ts?");

/***/ }),

/***/ "./src/DataTypes/TopLevelBlock.ts":
/*!****************************************!*\
  !*** ./src/DataTypes/TopLevelBlock.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Block_1 = __webpack_require__(/*! DataTypes/Block */ \"./src/DataTypes/Block.ts\");\nvar TopLevelBlock = /** @class */ (function (_super) {\n    __extends(TopLevelBlock, _super);\n    function TopLevelBlock() {\n        var _this = _super.call(this) || this;\n        _this.validSignature = false;\n        _this.hasSignature = false;\n        return _this;\n    }\n    TopLevelBlock.prototype.getBlockType = function () {\n        return this.constructor.BLOCK_TYPE;\n    };\n    TopLevelBlock.BLOCK_TYPE = 0;\n    return TopLevelBlock;\n}(Block_1.default));\nexports.default = TopLevelBlock;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/TopLevelBlock.ts?");

/***/ }),

/***/ "./src/DataTypes/VehicleRegistration.ts":
/*!**********************************************!*\
  !*** ./src/DataTypes/VehicleRegistration.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataType_1 = __webpack_require__(/*! DataTypes/DataType */ \"./src/DataTypes/DataType.ts\");\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ \"./src/utils/FormatStrings.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar VehicleRegistration = /** @class */ (function (_super) {\n    __extends(VehicleRegistration, _super);\n    function VehicleRegistration(data) {\n        var _this = _super.call(this, data) || this;\n        _this.vehicleRegistrationNation = DataReader_1.default.readUint8(data, 0);\n        _this.vehicleRegistrationNumber = DataReader_1.default.readCodePageString(data, 1, 14).toString();\n        return _this;\n    }\n    VehicleRegistration.prototype.className = function () {\n        return \"VehicleRegistration\";\n    };\n    VehicleRegistration.prototype.title = function () {\n        return \"\";\n    };\n    VehicleRegistration.prototype.size = function () {\n        return 15;\n    };\n    VehicleRegistration.prototype.toString = function () {\n        var qs = new QString_1.default(\"%1 (%2)\")\n            .arg(this.vehicleRegistrationNumber)\n            .arg(FormatStrings_1.default.nationNumeric(this.vehicleRegistrationNation)).toString();\n        return qs.toString();\n    };\n    VehicleRegistration.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"vehicleRegistrationNation\"), FormatStrings_1.default.nationNumeric(this.vehicleRegistrationNation));\n        report.tagValuePair(Translation_1.tr(\"vehicleRegistrationNumber\"), this.vehicleRegistrationNumber);\n    };\n    VehicleRegistration.BLOCK_TYPE = 0;\n    VehicleRegistration.staticSize = 15;\n    return VehicleRegistration;\n}(DataType_1.default));\nexports.default = VehicleRegistration;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/VehicleRegistration.ts?");

/***/ }),

/***/ "./src/DataTypes/VuCalibrationRecord.ts":
/*!**********************************************!*\
  !*** ./src/DataTypes/VuCalibrationRecord.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataType_1 = __webpack_require__(/*! DataTypes/DataType */ \"./src/DataTypes/DataType.ts\");\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ \"./src/utils/FormatStrings.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ \"./src/DataTypes/TimeReal.ts\");\nvar VehicleRegistration_1 = __webpack_require__(/*! DataTypes/VehicleRegistration */ \"./src/DataTypes/VehicleRegistration.ts\");\nvar FullCardNumber_1 = __webpack_require__(/*! DataTypes/FullCardNumber */ \"./src/DataTypes/FullCardNumber.ts\");\nvar VuCalibrationRecord = /** @class */ (function (_super) {\n    __extends(VuCalibrationRecord, _super);\n    function VuCalibrationRecord(data) {\n        var _this = _super.call(this, data) || this;\n        _this.calibrationPurpose = DataReader_1.default.readUint8(data, 0);\n        _this.workshopName = DataReader_1.default.readCodePageString(data, 1, 36).toString();\n        _this.workshopAddress = DataReader_1.default.readCodePageString(data, 37, 36).toString();\n        _this.workshopCardNumber = new FullCardNumber_1.default(data.slice(73));\n        _this.workshopCardExpiryDate = new TimeReal_1.default(data.slice(91));\n        _this.vehicleIdentificationNumber = DataReader_1.default.readString(data, 95, 17).toString();\n        _this.vehicleRegistrationIdentification = new VehicleRegistration_1.default(data.slice(112));\n        _this.wVehicleCharacteristicConstant = DataReader_1.default.readUint16(data, 127);\n        _this.kConstantOfRecordingEquipment = DataReader_1.default.readUint16(data, 129);\n        _this.lTyreCircumference = DataReader_1.default.readUint16(data, 131);\n        _this.tyreSize = DataReader_1.default.readString(data, 133, 15).toString();\n        _this.authorisedSpeed = DataReader_1.default.readUint8(data, 148);\n        _this.oldOdometerValue = DataReader_1.default.readUint24(data, 149);\n        _this.newOdometerValue = DataReader_1.default.readUint24(data, 152);\n        _this.oldTimeValue = new TimeReal_1.default(data.slice(155));\n        _this.newTimeValue = new TimeReal_1.default(data.slice(159));\n        _this.nextCalibrationDate = new TimeReal_1.default(data.slice(163));\n        return _this;\n    }\n    VuCalibrationRecord.prototype.className = function () {\n        return \"VuCalibrationRecord\";\n    };\n    VuCalibrationRecord.prototype.title = function () {\n        return \"VuCalibrationRecord\";\n    };\n    VuCalibrationRecord.prototype.size = function () {\n        return 167;\n    };\n    VuCalibrationRecord.prototype.toString = function () {\n        var qs = new QString_1.default('VuCalibrationRecord');\n        return qs.toString();\n    };\n    VuCalibrationRecord.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"calibrationPurpose\"), FormatStrings_1.default.calibrationPurpose(this.calibrationPurpose));\n        report.tagValuePair(Translation_1.tr(\"workshopName\"), this.workshopName);\n        report.tagValuePair(Translation_1.tr(\"workshopAddress\"), this.workshopAddress);\n        report.writeBlock(this.workshopCardNumber, Translation_1.tr(\"workshopCardNumber\"));\n        report.writeBlock(this.workshopCardExpiryDate, Translation_1.tr(\"workshopCardExpiryDate\"));\n        report.tagValuePair(Translation_1.tr(\"vehicleIdentificationNumber\"), this.vehicleIdentificationNumber);\n        report.writeBlock(this.vehicleRegistrationIdentification, Translation_1.tr(\"vehicleRegistrationIdentification\"));\n        report.tagValuePair(Translation_1.tr(\"wVehicleCharacteristicConstant\"), new QString_1.default(\"%1 Impulses/km\").arg(this.wVehicleCharacteristicConstant).toString());\n        report.tagValuePair(Translation_1.tr(\"kConstantOfRecordingEquipment\"), new QString_1.default(\"%1 Impulses/km\").arg(this.kConstantOfRecordingEquipment).toString());\n        report.tagValuePair(Translation_1.tr(\"lTyreCircumference\"), new QString_1.default(\"%1 /8 mm\").arg(this.lTyreCircumference).toString());\n        report.tagValuePair(Translation_1.tr(\"tyreSize\"), this.tyreSize);\n        report.tagValuePair(Translation_1.tr(\"authorisedSpeed\"), new QString_1.default(\"%1 km/h\").arg(this.authorisedSpeed).toString());\n        report.tagValuePair(Translation_1.tr(\"oldOdometerValue\"), new QString_1.default(\"%1 km\").arg(this.oldOdometerValue).toString());\n        report.tagValuePair(Translation_1.tr(\"newOdometerValue\"), new QString_1.default(\"%1 km\").arg(this.newOdometerValue).toString());\n        report.writeBlock(this.oldTimeValue, Translation_1.tr(\"oldTimeValue\"));\n        report.writeBlock(this.newTimeValue, Translation_1.tr(\"newTimeValue\"));\n        report.writeBlock(this.nextCalibrationDate, Translation_1.tr(\"nextCalibrationDate\"));\n    };\n    VuCalibrationRecord.BLOCK_TYPE = 0;\n    VuCalibrationRecord.staticSize = 167;\n    return VuCalibrationRecord;\n}(DataType_1.default));\nexports.default = VuCalibrationRecord;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/VuCalibrationRecord.ts?");

/***/ }),

/***/ "./src/DataTypes/VuEventRecord.ts":
/*!****************************************!*\
  !*** ./src/DataTypes/VuEventRecord.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataType_1 = __webpack_require__(/*! DataTypes/DataType */ \"./src/DataTypes/DataType.ts\");\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ \"./src/utils/FormatStrings.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar CardSlots_1 = __webpack_require__(/*! DataTypes/CardSlots */ \"./src/DataTypes/CardSlots.ts\");\nvar Timespan_1 = __webpack_require__(/*! DataTypes/Timespan */ \"./src/DataTypes/Timespan.ts\");\nvar VuEventRecord = /** @class */ (function (_super) {\n    __extends(VuEventRecord, _super);\n    function VuEventRecord(data) {\n        var _this = _super.call(this, data) || this;\n        _this.eventType = DataReader_1.default.readUint8(data, 0);\n        _this.eventRecordPurpose = DataReader_1.default.readUint8(data, 1);\n        _this.eventTime = new Timespan_1.default(data.slice(2));\n        _this.cardSlots = new CardSlots_1.default(data.slice(10));\n        _this.similarEventsNumber = DataReader_1.default.readUint8(data, 82);\n        return _this;\n    }\n    VuEventRecord.prototype.className = function () {\n        return \"VuEventRecord\";\n    };\n    VuEventRecord.prototype.title = function () {\n        return \"\";\n    };\n    VuEventRecord.prototype.size = function () {\n        return 83;\n    };\n    VuEventRecord.prototype.toString = function () {\n        var qs = new QString_1.default('VuEventRecord');\n        return qs.toString();\n    };\n    VuEventRecord.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"eventType\"), FormatStrings_1.default.eventType(this.eventType));\n        report.tagValuePair(Translation_1.tr(\"eventRecordPurpose\"), FormatStrings_1.default.eventRecordPurpose(this.eventRecordPurpose));\n        report.writeBlock(this.eventTime, Translation_1.tr(\"eventTime\"));\n        report.writeBlock(this.cardSlots, Translation_1.tr(\"cardSlots\"));\n        report.tagValuePair(Translation_1.tr(\"similarEventsNumber\"), this.similarEventsNumber);\n    };\n    VuEventRecord.BLOCK_TYPE = 0;\n    VuEventRecord.staticSize = 83;\n    return VuEventRecord;\n}(DataType_1.default));\nexports.default = VuEventRecord;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/VuEventRecord.ts?");

/***/ }),

/***/ "./src/DataTypes/VuFaultRecord.ts":
/*!****************************************!*\
  !*** ./src/DataTypes/VuFaultRecord.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataType_1 = __webpack_require__(/*! DataTypes/DataType */ \"./src/DataTypes/DataType.ts\");\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ \"./src/utils/FormatStrings.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar CardSlots_1 = __webpack_require__(/*! DataTypes/CardSlots */ \"./src/DataTypes/CardSlots.ts\");\nvar Timespan_1 = __webpack_require__(/*! DataTypes/Timespan */ \"./src/DataTypes/Timespan.ts\");\nvar VuFaultRecord = /** @class */ (function (_super) {\n    __extends(VuFaultRecord, _super);\n    function VuFaultRecord(data) {\n        var _this = _super.call(this, data) || this;\n        _this.eventType = DataReader_1.default.readUint8(data, 0);\n        _this.eventRecordPurpose = DataReader_1.default.readUint8(data, 1);\n        _this.eventTime = new Timespan_1.default(data.slice(2));\n        _this.cardSlots = new CardSlots_1.default(data.slice(10));\n        return _this;\n    }\n    VuFaultRecord.prototype.className = function () {\n        return \"VuFaultRecord\";\n    };\n    VuFaultRecord.prototype.title = function () {\n        return \"\";\n    };\n    VuFaultRecord.prototype.size = function () {\n        return 82;\n    };\n    VuFaultRecord.prototype.toString = function () {\n        var qs = new QString_1.default('VuFaultRecord');\n        return qs.toString();\n    };\n    VuFaultRecord.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"eventType\"), FormatStrings_1.default.eventType(this.eventType));\n        report.tagValuePair(Translation_1.tr(\"eventRecordPurpose\"), FormatStrings_1.default.eventRecordPurpose(this.eventRecordPurpose));\n        report.writeBlock(this.eventTime, Translation_1.tr(\"eventTime\"));\n        report.writeBlock(this.cardSlots, Translation_1.tr(\"cardSlots\"));\n    };\n    VuFaultRecord.BLOCK_TYPE = 0;\n    VuFaultRecord.staticSize = 82;\n    return VuFaultRecord;\n}(DataType_1.default));\nexports.default = VuFaultRecord;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/VuFaultRecord.ts?");

/***/ }),

/***/ "./src/DataTypes/VuOverspeedingEventRecord.ts":
/*!****************************************************!*\
  !*** ./src/DataTypes/VuOverspeedingEventRecord.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataType_1 = __webpack_require__(/*! DataTypes/DataType */ \"./src/DataTypes/DataType.ts\");\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ \"./src/utils/FormatStrings.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar Timespan_1 = __webpack_require__(/*! DataTypes/Timespan */ \"./src/DataTypes/Timespan.ts\");\nvar FullCardNumber_1 = __webpack_require__(/*! DataTypes/FullCardNumber */ \"./src/DataTypes/FullCardNumber.ts\");\nvar VuOverspeedingEventRecord = /** @class */ (function (_super) {\n    __extends(VuOverspeedingEventRecord, _super);\n    function VuOverspeedingEventRecord(data) {\n        var _this = _super.call(this, data) || this;\n        _this.eventType = DataReader_1.default.readUint8(data, 0);\n        _this.eventRecordPurpose = DataReader_1.default.readUint8(data, 1);\n        _this.eventTime = new Timespan_1.default(data.slice(2));\n        _this.maxSpeedValue = DataReader_1.default.readUint8(data, 10);\n        _this.averageSpeedValue = DataReader_1.default.readUint8(data, 11);\n        _this.cardNumberDriverSlotBegin = new FullCardNumber_1.default(data.slice(12));\n        _this.similarEventsNumber = DataReader_1.default.readUint8(data, 30);\n        return _this;\n    }\n    VuOverspeedingEventRecord.prototype.className = function () {\n        return \"VuOverspeedingEventRecord\";\n    };\n    VuOverspeedingEventRecord.prototype.title = function () {\n        return \"\";\n    };\n    VuOverspeedingEventRecord.prototype.size = function () {\n        return 31;\n    };\n    VuOverspeedingEventRecord.prototype.toString = function () {\n        var qs = new QString_1.default('VuOverspeedingEventRecord');\n        return qs.toString();\n    };\n    VuOverspeedingEventRecord.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"eventType\"), FormatStrings_1.default.eventType(this.eventType));\n        report.tagValuePair(Translation_1.tr(\"eventRecordPurpose\"), FormatStrings_1.default.eventRecordPurpose(this.eventRecordPurpose));\n        report.writeBlock(this.eventTime, Translation_1.tr(\"eventTime\"));\n        report.tagValuePair(Translation_1.tr(\"maxSpeedValue\"), new QString_1.default(\"%1 km/h\").arg(this.maxSpeedValue).toString());\n        report.tagValuePair(Translation_1.tr(\"averageSpeedValue\"), new QString_1.default(\"%1 km/h\").arg(this.averageSpeedValue).toString());\n        report.writeBlock(this.cardNumberDriverSlotBegin, Translation_1.tr(\"cardNumberDriverSlotBegin\"));\n        report.tagValuePair(Translation_1.tr(\"similarEventsNumber\"), this.similarEventsNumber);\n    };\n    VuOverspeedingEventRecord.BLOCK_TYPE = 0;\n    VuOverspeedingEventRecord.staticSize = 31;\n    return VuOverspeedingEventRecord;\n}(DataType_1.default));\nexports.default = VuOverspeedingEventRecord;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/VuOverspeedingEventRecord.ts?");

/***/ }),

/***/ "./src/DataTypes/VuTimeAdjustmentRecord.ts":
/*!*************************************************!*\
  !*** ./src/DataTypes/VuTimeAdjustmentRecord.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataType_1 = __webpack_require__(/*! DataTypes/DataType */ \"./src/DataTypes/DataType.ts\");\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ \"./src/DataTypes/TimeReal.ts\");\nvar FullCardNumber_1 = __webpack_require__(/*! DataTypes/FullCardNumber */ \"./src/DataTypes/FullCardNumber.ts\");\nvar VuTimeAdjustmentRecord = /** @class */ (function (_super) {\n    __extends(VuTimeAdjustmentRecord, _super);\n    function VuTimeAdjustmentRecord(data) {\n        var _this = _super.call(this, data) || this;\n        _this.oldTimeValue = new TimeReal_1.default(data.slice(0));\n        _this.newTimeValue = new TimeReal_1.default(data.slice(4));\n        _this.workshopName = DataReader_1.default.readString(data, 8, 36).toString();\n        _this.workshopAddress = DataReader_1.default.readString(data, 44, 36).toString();\n        _this.workshopCardNumber = new FullCardNumber_1.default(data.slice(80));\n        return _this;\n    }\n    VuTimeAdjustmentRecord.prototype.className = function () {\n        return \"VuTimeAdjustmentRecord\";\n    };\n    VuTimeAdjustmentRecord.prototype.title = function () {\n        return \"\";\n    };\n    VuTimeAdjustmentRecord.prototype.size = function () {\n        return 98;\n    };\n    VuTimeAdjustmentRecord.prototype.toString = function () {\n        var qs = new QString_1.default('VuTimeAdjustmentRecord');\n        return qs.toString();\n    };\n    VuTimeAdjustmentRecord.prototype.printOn = function (report) {\n        report.writeBlock(this.oldTimeValue, Translation_1.tr(\"oldTimeValue\"));\n        report.writeBlock(this.newTimeValue, Translation_1.tr(\"newTimeValue\"));\n        report.tagValuePair(Translation_1.tr(\"workshopName\"), this.workshopName);\n        report.tagValuePair(Translation_1.tr(\"workshopAddress\"), this.workshopAddress);\n        report.writeBlock(this.workshopCardNumber, Translation_1.tr(\"workshopCardNumber\"));\n    };\n    VuTimeAdjustmentRecord.BLOCK_TYPE = 0;\n    VuTimeAdjustmentRecord.staticSize = 98;\n    return VuTimeAdjustmentRecord;\n}(DataType_1.default));\nexports.default = VuTimeAdjustmentRecord;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/DataTypes/VuTimeAdjustmentRecord.ts?");

/***/ }),

/***/ "./src/EsmFile.ts":
/*!************************!*\
  !*** ./src/EsmFile.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar blockFactory_1 = __webpack_require__(/*! VuBlocks/blockFactory */ \"./src/VuBlocks/blockFactory.ts\");\nvar Identification_1 = __webpack_require__(/*! CardBlocks/Identification */ \"./src/CardBlocks/Identification.ts\");\nvar CardDriverActivity_1 = __webpack_require__(/*! CardBlocks/CardDriverActivity */ \"./src/CardBlocks/CardDriverActivity.ts\");\nvar VuOverview_1 = __webpack_require__(/*! VuBlocks/VuOverview */ \"./src/VuBlocks/VuOverview.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar EsmFile = /** @class */ (function () {\n    function EsmFile(data) {\n        this.fileData = data;\n        this.blocks = [];\n    }\n    EsmFile.parseData = function (data) {\n        var block;\n        var pos = 0;\n        var ef = new EsmFile(data);\n        while (pos < data.byteLength) {\n            block = blockFactory_1.blockFactory(data, pos);\n            pos += block.size();\n            ef.blocks.push(block);\n            // console.log(\"card size: \" + block.size());\n        }\n        return ef;\n    };\n    EsmFile.prototype.printOn = function (report) {\n        report.setTitle(this.suggestTitle());\n        this.blocks.forEach(function (b) {\n            report.writeBlock(b);\n        });\n    };\n    EsmFile.prototype.suggestTitle = function () {\n        var rv = \"Esm data\";\n        var ov = EsmFile.findTypeInVector(VuOverview_1.default, this.blocks);\n        var id = EsmFile.findTypeInVector(Identification_1.default, this.blocks);\n        var act = EsmFile.findTypeInVector(CardDriverActivity_1.default, this.blocks);\n        var dateSuggestion;\n        if (ov) {\n            rv = ov.vehicleRegistrationIdentification.vehicleRegistrationNumber;\n            dateSuggestion = ov.currentDateTime.toString();\n        }\n        if (id) {\n            rv = id.cardHolderName.toString();\n        }\n        if (act) {\n            if (act.cardActivityDailyRecords.numberOfBlocks() > 1) {\n                dateSuggestion = new QString_1.default(Translation_1.tr(\"%1 to %2\"))\n                    .arg(act.cardActivityDailyRecords.get(0).activityRecordDate.toString())\n                    .arg(act.cardActivityDailyRecords.get(act.cardActivityDailyRecords.numberOfBlocks() - 1).activityRecordDate.toString())\n                    .toString();\n            }\n        }\n        if (dateSuggestion) {\n            rv += \" \" + dateSuggestion;\n        }\n        return rv;\n    };\n    EsmFile.findTypeInVector = function (blockType, blocks) {\n        var rv;\n        blocks.forEach(function (it) {\n            if (it instanceof blockType) {\n                rv = it;\n            }\n        });\n        return rv;\n    };\n    return EsmFile;\n}());\nexports.default = EsmFile;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/EsmFile.ts?");

/***/ }),

/***/ "./src/Reporter/JsonReporter.ts":
/*!**************************************!*\
  !*** ./src/Reporter/JsonReporter.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Reporter_1 = __webpack_require__(/*! Reporter/Reporter */ \"./src/Reporter/Reporter.ts\");\nvar isEmpty = __webpack_require__(/*! lodash/isEmpty */ \"./node_modules/lodash/isEmpty.js\");\nvar JsonEntry = /** @class */ (function () {\n    function JsonEntry(title, className) {\n        if (title === void 0) { title = undefined; }\n        if (className === void 0) { className = undefined; }\n        this.title = title;\n        this.className = className;\n    }\n    JsonEntry.build = function (title, className) {\n        if (title === void 0) { title = undefined; }\n        if (className === void 0) { className = undefined; }\n        return {\n            title: title,\n            className: className\n        };\n    };\n    return JsonEntry;\n}());\nvar JsonReporter = /** @class */ (function (_super) {\n    __extends(JsonReporter, _super);\n    function JsonReporter() {\n        var _this = _super.call(this) || this;\n        _this.jsonCollected = JsonEntry.build();\n        _this.nestPath = [_this.jsonCollected];\n        _this.currentEntry = _this.jsonCollected;\n        return _this;\n    }\n    JsonReporter.prototype.setTitle = function (newTitle) {\n        _super.prototype.setTitle.call(this, newTitle);\n        this.jsonCollected['title'] = newTitle;\n    };\n    JsonReporter.prototype.renderReport = function () {\n        return JSON.stringify(this.jsonCollected, null, 4);\n    };\n    JsonReporter.prototype.tagValuePair = function (tag, value) {\n        this.currentEntry[tag.toString()] = value;\n    };\n    JsonReporter.prototype.writeBlock = function (value, tag) {\n        if (tag === void 0) { tag = ''; }\n        if (isEmpty(tag)) {\n            tag = value.title() || value.toString();\n            var newEntry = JsonEntry.build(tag, value.className());\n            this.nestPath.push(newEntry);\n            if (!this.currentEntry.blocks) {\n                this.currentEntry.blocks = [];\n            }\n            this.currentEntry.blocks.push(newEntry);\n            this.currentEntry = newEntry;\n            this.nestLevel += 1;\n            this.subBlock(value, tag);\n            this.nestPath.pop();\n            this.currentEntry = this.nestPath.slice(-1)[0];\n            this.nestLevel -= 1;\n        }\n        else {\n            var newEntry = JsonEntry.build(value.title() || value.toString(), value.className());\n            this.currentEntry[tag] = newEntry;\n            this.currentEntry = newEntry;\n            this.subBlock(value, tag);\n            this.currentEntry = this.nestPath.slice(-1)[0];\n        }\n    };\n    JsonReporter.prototype.subBlock = function (value, tag) {\n        value.printOn(this);\n    };\n    JsonReporter.prototype.allowSvg = function () {\n        return false;\n    };\n    JsonReporter.prototype.arrayStart = function (count, title, defaultShown) {\n    };\n    JsonReporter.prototype.arrayEnd = function (count) {\n    };\n    return JsonReporter;\n}(Reporter_1.default));\nexports.default = JsonReporter;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/Reporter/JsonReporter.ts?");

/***/ }),

/***/ "./src/Reporter/Reporter.ts":
/*!**********************************!*\
  !*** ./src/Reporter/Reporter.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar isEmpty = __webpack_require__(/*! lodash/isEmpty */ \"./node_modules/lodash/isEmpty.js\");\nvar Reporter = /** @class */ (function () {\n    function Reporter() {\n        this.nestLevel = 0;\n        this.collected = '';\n    }\n    Reporter.prototype.setTitle = function (newTitle) {\n        this.title = newTitle;\n    };\n    Reporter.prototype.allowSvg = function () {\n        return false;\n    };\n    Reporter.prototype.tagValuePair = function (tag, value) {\n    };\n    Reporter.prototype.writeArray = function (ray, title, defaultShown) {\n        if (title === void 0) { title = ''; }\n        if (defaultShown === void 0) { defaultShown = true; }\n        this.arrayStart(ray.numberOfBlocks(), title, defaultShown);\n        this.nestLevel += 1;\n        for (var j = 0; j < ray.numberOfBlocks(); j++) {\n            this.writeBlock(ray.get(j));\n        }\n        this.nestLevel -= 1;\n        this.arrayEnd(ray.numberOfBlocks());\n    };\n    Reporter.prototype.writeBlock = function (value, tag) {\n        if (tag === void 0) { tag = ''; }\n        this.nestLevel += 1;\n        tag = tag.toString();\n        if (isEmpty(tag) && !isEmpty(value.title())) {\n            this.subBlock(value, value.title());\n        }\n        else {\n            this.subBlock(value, tag);\n        }\n        this.nestLevel -= 1;\n    };\n    Reporter.prototype.subBlock = function (value, tag) {\n    };\n    Reporter.prototype.arrayStart = function (count, title, defaultShown) {\n    };\n    Reporter.prototype.arrayEnd = function (count) {\n    };\n    return Reporter;\n}());\nexports.default = Reporter;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/Reporter/Reporter.ts?");

/***/ }),

/***/ "./src/VuBlocks/Block11.ts":
/*!*********************************!*\
  !*** ./src/VuBlocks/Block11.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar VuBlock_1 = __webpack_require__(/*! VuBlocks/VuBlock */ \"./src/VuBlocks/VuBlock.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar Block11Record_1 = __webpack_require__(/*! DataTypes/Block11Record */ \"./src/DataTypes/Block11Record.ts\");\nvar Block11 = /** @class */ (function (_super) {\n    __extends(Block11, _super);\n    function Block11(data) {\n        var _this = _super.call(this, data) || this;\n        _this.header = DataReader_1.default.readRawData(data, 0, 15);\n        _this.block11Record = DataReader_1.default.readSubblocksByCount(Block11Record_1.default, data.slice(15 + 2), 0, (DataReader_1.default.readUint16(data, 15)));\n        _this.hasSignature = false;\n        return _this;\n    }\n    Block11.prototype.className = function () {\n        return \"Block11\";\n    };\n    Block11.prototype.title = function () {\n        return \"Unknown Block with TREP 0x11\";\n    };\n    Block11.prototype.size = function () {\n        return 17;\n    };\n    Block11.prototype.toString = function () {\n        var qs = new QString_1.default('Block11');\n        return qs.toString();\n    };\n    Block11.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"header\"), this.header.toString());\n        report.writeArray(this.block11Record, Translation_1.tr(\"block11Record\"));\n    };\n    Block11.BLOCK_TYPE = 0x11;\n    return Block11;\n}(VuBlock_1.default));\nexports.default = Block11;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/VuBlocks/Block11.ts?");

/***/ }),

/***/ "./src/VuBlocks/Block13.ts":
/*!*********************************!*\
  !*** ./src/VuBlocks/Block13.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar VuBlock_1 = __webpack_require__(/*! VuBlocks/VuBlock */ \"./src/VuBlocks/VuBlock.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar Block11Record_1 = __webpack_require__(/*! DataTypes/Block11Record */ \"./src/DataTypes/Block11Record.ts\");\nvar Block13 = /** @class */ (function (_super) {\n    __extends(Block13, _super);\n    function Block13(data) {\n        var _this = _super.call(this, data) || this;\n        _this.header = DataReader_1.default.readRawData(data, 0, 30);\n        _this.block11Record = DataReader_1.default.readSubblocksByCount(Block11Record_1.default, data.slice(30 + 2), 0, (DataReader_1.default.readUint16(data, 30)));\n        _this.hasSignature = false;\n        return _this;\n    }\n    Block13.prototype.className = function () {\n        return \"Block13\";\n    };\n    Block13.prototype.title = function () {\n        return \"Unknown Block with TREP 0x13\";\n    };\n    Block13.prototype.size = function () {\n        return 32;\n    };\n    Block13.prototype.toString = function () {\n        var qs = new QString_1.default('Block13');\n        return qs.toString();\n    };\n    Block13.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"header\"), this.header.toString());\n        report.writeArray(this.block11Record, Translation_1.tr(\"block11Record\"));\n    };\n    Block13.BLOCK_TYPE = 0x13;\n    return Block13;\n}(VuBlock_1.default));\nexports.default = Block13;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/VuBlocks/Block13.ts?");

/***/ }),

/***/ "./src/VuBlocks/Block14.ts":
/*!*********************************!*\
  !*** ./src/VuBlocks/Block14.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar VuBlock_1 = __webpack_require__(/*! VuBlocks/VuBlock */ \"./src/VuBlocks/VuBlock.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar Block14 = /** @class */ (function (_super) {\n    __extends(Block14, _super);\n    function Block14(data) {\n        var _this = _super.call(this, data) || this;\n        _this.data = DataReader_1.default.readRawData(data, 0, 2);\n        _this.hasSignature = false;\n        return _this;\n    }\n    Block14.prototype.className = function () {\n        return \"Block14\";\n    };\n    Block14.prototype.title = function () {\n        return \"Unknown Block with TREP 0x14\";\n    };\n    Block14.prototype.size = function () {\n        return 2;\n    };\n    Block14.prototype.toString = function () {\n        var qs = new QString_1.default('Block14');\n        return qs.toString();\n    };\n    Block14.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"data\"), this.data.toString());\n    };\n    Block14.BLOCK_TYPE = 0x14;\n    return Block14;\n}(VuBlock_1.default));\nexports.default = Block14;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/VuBlocks/Block14.ts?");

/***/ }),

/***/ "./src/VuBlocks/VuActivities.ts":
/*!**************************************!*\
  !*** ./src/VuBlocks/VuActivities.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar VuBlock_1 = __webpack_require__(/*! VuBlocks/VuBlock */ \"./src/VuBlocks/VuBlock.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ \"./src/DataTypes/TimeReal.ts\");\nvar VuActivities = /** @class */ (function (_super) {\n    __extends(VuActivities, _super);\n    function VuActivities(data) {\n        var _this = _super.call(this, data) || this;\n        _this.timeReal = new TimeReal_1.default(data.slice(0));\n        _this.odometerValueMidnight = DataReader_1.default.readUint24(data, 4);\n        return _this;\n    }\n    VuActivities.prototype.className = function () {\n        return \"VuActivities\";\n    };\n    VuActivities.prototype.title = function () {\n        return \"\";\n    };\n    VuActivities.prototype.size = function () {\n        return 171;\n    };\n    VuActivities.prototype.toString = function () {\n        var qs = new QString_1.default('VuActivities');\n        return qs.toString();\n    };\n    VuActivities.prototype.printOn = function (report) {\n        report.writeBlock(this.timeReal, Translation_1.tr(\"timeReal\"));\n        report.tagValuePair(Translation_1.tr(\"odometerValueMidnight\"), this.odometerValueMidnight);\n    };\n    VuActivities.BLOCK_TYPE = 0x2;\n    return VuActivities;\n}(VuBlock_1.default));\nexports.default = VuActivities;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/VuBlocks/VuActivities.ts?");

/***/ }),

/***/ "./src/VuBlocks/VuBlock.ts":
/*!*********************************!*\
  !*** ./src/VuBlocks/VuBlock.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar TopLevelBlock_1 = __webpack_require__(/*! DataTypes/TopLevelBlock */ \"./src/DataTypes/TopLevelBlock.ts\");\nvar VuBlock = /** @class */ (function (_super) {\n    __extends(VuBlock, _super);\n    function VuBlock(data) {\n        return _super.call(this) || this;\n    }\n    return VuBlock;\n}(TopLevelBlock_1.default));\nexports.default = VuBlock;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/VuBlocks/VuBlock.ts?");

/***/ }),

/***/ "./src/VuBlocks/VuCardData.ts":
/*!************************************!*\
  !*** ./src/VuBlocks/VuCardData.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar VuBlock_1 = __webpack_require__(/*! VuBlocks/VuBlock */ \"./src/VuBlocks/VuBlock.ts\");\nvar VuCardData = /** @class */ (function (_super) {\n    __extends(VuCardData, _super);\n    function VuCardData(data) {\n        var _this = _super.call(this, data) || this;\n        _this.hasSignature = false;\n        return _this;\n    }\n    VuCardData.prototype.className = function () {\n        return \"VuCardData\";\n    };\n    VuCardData.prototype.title = function () {\n        return \"Card Data\";\n    };\n    VuCardData.prototype.toString = function () {\n        var qs = new QString_1.default('VuCardData');\n        return qs.toString();\n    };\n    VuCardData.prototype.printOn = function (report) {\n    };\n    VuCardData.BLOCK_TYPE = 0x6;\n    return VuCardData;\n}(VuBlock_1.default));\nexports.default = VuCardData;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/VuBlocks/VuCardData.ts?");

/***/ }),

/***/ "./src/VuBlocks/VuDetailedSpeedData.ts":
/*!*********************************************!*\
  !*** ./src/VuBlocks/VuDetailedSpeedData.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar VuBlock_1 = __webpack_require__(/*! VuBlocks/VuBlock */ \"./src/VuBlocks/VuBlock.ts\");\nvar VuDetailedSpeedData = /** @class */ (function (_super) {\n    __extends(VuDetailedSpeedData, _super);\n    function VuDetailedSpeedData(data) {\n        return _super.call(this, data) || this;\n    }\n    VuDetailedSpeedData.prototype.className = function () {\n        return \"VuDetailedSpeedData\";\n    };\n    VuDetailedSpeedData.prototype.title = function () {\n        return \"\";\n    };\n    VuDetailedSpeedData.prototype.size = function () {\n        return 64;\n    };\n    VuDetailedSpeedData.prototype.toString = function () {\n        var qs = new QString_1.default('VuDetailedSpeedData');\n        return qs.toString();\n    };\n    VuDetailedSpeedData.prototype.printOn = function (report) {\n    };\n    VuDetailedSpeedData.BLOCK_TYPE = 0x4;\n    return VuDetailedSpeedData;\n}(VuBlock_1.default));\nexports.default = VuDetailedSpeedData;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/VuBlocks/VuDetailedSpeedData.ts?");

/***/ }),

/***/ "./src/VuBlocks/VuEventsFaults.ts":
/*!****************************************!*\
  !*** ./src/VuBlocks/VuEventsFaults.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar VuBlock_1 = __webpack_require__(/*! VuBlocks/VuBlock */ \"./src/VuBlocks/VuBlock.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar VuTimeAdjustmentRecord_1 = __webpack_require__(/*! DataTypes/VuTimeAdjustmentRecord */ \"./src/DataTypes/VuTimeAdjustmentRecord.ts\");\nvar VuEventRecord_1 = __webpack_require__(/*! DataTypes/VuEventRecord */ \"./src/DataTypes/VuEventRecord.ts\");\nvar TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ \"./src/DataTypes/TimeReal.ts\");\nvar VuFaultRecord_1 = __webpack_require__(/*! DataTypes/VuFaultRecord */ \"./src/DataTypes/VuFaultRecord.ts\");\nvar VuOverspeedingEventRecord_1 = __webpack_require__(/*! DataTypes/VuOverspeedingEventRecord */ \"./src/DataTypes/VuOverspeedingEventRecord.ts\");\nvar VuEventsFaults = /** @class */ (function (_super) {\n    __extends(VuEventsFaults, _super);\n    function VuEventsFaults(data) {\n        var _this = _super.call(this, data) || this;\n        _this.vuFaultRecord = DataReader_1.default.readSubblocksByCount(VuFaultRecord_1.default, data.slice(0 + 1), 0, (DataReader_1.default.readUint8(data, 0)));\n        _this.vuEventRecord = DataReader_1.default.readSubblocksByCount(VuEventRecord_1.default, data.slice(1 + 1), 0, (DataReader_1.default.readUint8(data, 1)));\n        _this.lastOverspeedControlTime = new TimeReal_1.default(data.slice(2));\n        _this.firstOverspeedSince = new TimeReal_1.default(data.slice(6));\n        _this.numberOfOverspeedSince = DataReader_1.default.readUint8(data, 10);\n        _this.vuOverspeedingEventRecord = DataReader_1.default.readSubblocksByCount(VuOverspeedingEventRecord_1.default, data.slice(11 + 1), 0, (DataReader_1.default.readUint8(data, 11)));\n        _this.vuTimeAdjustmentRecord = DataReader_1.default.readSubblocksByCount(VuTimeAdjustmentRecord_1.default, data.slice(12 + 1), 0, (DataReader_1.default.readUint8(data, 12)));\n        return _this;\n    }\n    VuEventsFaults.prototype.className = function () {\n        return \"VuEventsFaults\";\n    };\n    VuEventsFaults.prototype.title = function () {\n        return \"Events and faults\";\n    };\n    VuEventsFaults.prototype.size = function () {\n        return 13;\n    };\n    VuEventsFaults.prototype.toString = function () {\n        var qs = new QString_1.default('VuEventsFaults');\n        return qs.toString();\n    };\n    VuEventsFaults.prototype.printOn = function (report) {\n        report.writeArray(this.vuFaultRecord, Translation_1.tr(\"vuFaultRecord\"));\n        report.writeArray(this.vuEventRecord, Translation_1.tr(\"vuEventRecord\"));\n        report.writeBlock(this.lastOverspeedControlTime, Translation_1.tr(\"lastOverspeedControlTime\"));\n        report.writeBlock(this.firstOverspeedSince, Translation_1.tr(\"firstOverspeedSince\"));\n        report.tagValuePair(Translation_1.tr(\"numberOfOverspeedSince\"), this.numberOfOverspeedSince);\n        report.writeArray(this.vuOverspeedingEventRecord, Translation_1.tr(\"vuOverspeedingEventRecord\"));\n        report.writeArray(this.vuTimeAdjustmentRecord, Translation_1.tr(\"vuTimeAdjustmentRecord\"));\n    };\n    VuEventsFaults.BLOCK_TYPE = 0x3;\n    return VuEventsFaults;\n}(VuBlock_1.default));\nexports.default = VuEventsFaults;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/VuBlocks/VuEventsFaults.ts?");

/***/ }),

/***/ "./src/VuBlocks/VuOverview.ts":
/*!************************************!*\
  !*** ./src/VuBlocks/VuOverview.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar VuBlock_1 = __webpack_require__(/*! VuBlocks/VuBlock */ \"./src/VuBlocks/VuBlock.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar Timespan_1 = __webpack_require__(/*! DataTypes/Timespan */ \"./src/DataTypes/Timespan.ts\");\nvar VehicleRegistration_1 = __webpack_require__(/*! DataTypes/VehicleRegistration */ \"./src/DataTypes/VehicleRegistration.ts\");\nvar FullCardNumber_1 = __webpack_require__(/*! DataTypes/FullCardNumber */ \"./src/DataTypes/FullCardNumber.ts\");\nvar TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ \"./src/DataTypes/TimeReal.ts\");\nvar EncryptedCertificate_1 = __webpack_require__(/*! DataTypes/EncryptedCertificate */ \"./src/DataTypes/EncryptedCertificate.ts\");\nvar VuOverview = /** @class */ (function (_super) {\n    __extends(VuOverview, _super);\n    function VuOverview(data) {\n        var _this = _super.call(this, data) || this;\n        _this.memberStateCertificate = new EncryptedCertificate_1.default(data.slice(0));\n        _this.vuCertificate = new EncryptedCertificate_1.default(data.slice(194));\n        _this.vehicleIdentificationNumber = DataReader_1.default.readString(data, 388, 17).toString();\n        _this.vehicleRegistrationIdentification = new VehicleRegistration_1.default(data.slice(405));\n        _this.currentDateTime = new TimeReal_1.default(data.slice(420));\n        _this.vuDownloadablePeriod = new Timespan_1.default(data.slice(424));\n        _this.CardSlotsStatus = DataReader_1.default.readUint8(data, 432);\n        _this.downloadingTime = new TimeReal_1.default(data.slice(433));\n        _this.cardNumber = new FullCardNumber_1.default(data.slice(437));\n        _this.companyOrWorkshopName = DataReader_1.default.readCodePageString(data, 455, 36).toString();\n        return _this;\n    }\n    VuOverview.prototype.className = function () {\n        return \"VuOverview\";\n    };\n    VuOverview.prototype.title = function () {\n        return \"\";\n    };\n    VuOverview.prototype.size = function () {\n        return 620;\n    };\n    VuOverview.prototype.toString = function () {\n        var qs = new QString_1.default('VuOverview');\n        return qs.toString();\n    };\n    VuOverview.prototype.printOn = function (report) {\n        report.writeBlock(this.memberStateCertificate, Translation_1.tr(\"memberStateCertificate\"));\n        report.writeBlock(this.vuCertificate, Translation_1.tr(\"vuCertificate\"));\n        report.tagValuePair(Translation_1.tr(\"vehicleIdentificationNumber\"), this.vehicleIdentificationNumber);\n        report.writeBlock(this.vehicleRegistrationIdentification, Translation_1.tr(\"vehicleRegistrationIdentification\"));\n        report.writeBlock(this.currentDateTime, Translation_1.tr(\"currentDateTime\"));\n        report.writeBlock(this.vuDownloadablePeriod, Translation_1.tr(\"vuDownloadablePeriod\"));\n        report.tagValuePair(Translation_1.tr(\"CardSlotsStatus\"), this.CardSlotsStatus);\n        report.writeBlock(this.downloadingTime, Translation_1.tr(\"downloadingTime\"));\n        report.writeBlock(this.cardNumber, Translation_1.tr(\"cardNumber\"));\n        report.tagValuePair(Translation_1.tr(\"companyOrWorkshopName\"), this.companyOrWorkshopName);\n    };\n    VuOverview.BLOCK_TYPE = 0x1;\n    return VuOverview;\n}(VuBlock_1.default));\nexports.default = VuOverview;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/VuBlocks/VuOverview.ts?");

/***/ }),

/***/ "./src/VuBlocks/VuTechnical.ts":
/*!*************************************!*\
  !*** ./src/VuBlocks/VuTechnical.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// This file was AUTO-GENERATED.\n// Make changes in the generator script generate.py,\n// the data definitions in DataDefinitions.xml\n// or derive a class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nvar VuBlock_1 = __webpack_require__(/*! VuBlocks/VuBlock */ \"./src/VuBlocks/VuBlock.ts\");\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ \"./src/DataTypes/TimeReal.ts\");\nvar VuCalibrationRecord_1 = __webpack_require__(/*! DataTypes/VuCalibrationRecord */ \"./src/DataTypes/VuCalibrationRecord.ts\");\nvar ExtendedSerialNumber_1 = __webpack_require__(/*! DataTypes/ExtendedSerialNumber */ \"./src/DataTypes/ExtendedSerialNumber.ts\");\nvar VuTechnical = /** @class */ (function (_super) {\n    __extends(VuTechnical, _super);\n    function VuTechnical(data) {\n        var _this = _super.call(this, data) || this;\n        _this.vuManufacturerName = DataReader_1.default.readCodePageString(data, 0, 36).toString();\n        _this.vuManufacturerAddress = DataReader_1.default.readCodePageString(data, 36, 36).toString();\n        _this.vuPartNumber = DataReader_1.default.readString(data, 72, 16).toString();\n        _this.vuSerialNumber = new ExtendedSerialNumber_1.default(data.slice(88));\n        _this.vuSoftwareVersion = DataReader_1.default.readString(data, 96, 4).toString();\n        _this.vuSoftInstallationDate = new TimeReal_1.default(data.slice(100));\n        _this.vuManufacturingDate = new TimeReal_1.default(data.slice(104));\n        _this.vuApprovalNumber = DataReader_1.default.readString(data, 108, 8).toString();\n        _this.sensorSerialNumber = new ExtendedSerialNumber_1.default(data.slice(116));\n        _this.sensorApprovalNumber = DataReader_1.default.readString(data, 124, 8).toString();\n        _this.sensorPairingDateFirst = new TimeReal_1.default(data.slice(132));\n        _this.vuCalibrationRecord = DataReader_1.default.readSubblocksByCount(VuCalibrationRecord_1.default, data.slice(136 + 1), 0, (DataReader_1.default.readUint8(data, 136)));\n        return _this;\n    }\n    VuTechnical.prototype.className = function () {\n        return \"VuTechnical\";\n    };\n    VuTechnical.prototype.title = function () {\n        return \"Technical Data\";\n    };\n    VuTechnical.prototype.size = function () {\n        return 137;\n    };\n    VuTechnical.prototype.toString = function () {\n        var qs = new QString_1.default('VuTechnical');\n        return qs.toString();\n    };\n    VuTechnical.prototype.printOn = function (report) {\n        report.tagValuePair(Translation_1.tr(\"vuManufacturerName\"), this.vuManufacturerName);\n        report.tagValuePair(Translation_1.tr(\"vuManufacturerAddress\"), this.vuManufacturerAddress);\n        report.tagValuePair(Translation_1.tr(\"vuPartNumber\"), this.vuPartNumber);\n        report.writeBlock(this.vuSerialNumber, Translation_1.tr(\"vuSerialNumber\"));\n        report.tagValuePair(Translation_1.tr(\"vuSoftwareVersion\"), this.vuSoftwareVersion);\n        report.writeBlock(this.vuSoftInstallationDate, Translation_1.tr(\"vuSoftInstallationDate\"));\n        report.writeBlock(this.vuManufacturingDate, Translation_1.tr(\"vuManufacturingDate\"));\n        report.tagValuePair(Translation_1.tr(\"vuApprovalNumber\"), this.vuApprovalNumber);\n        report.writeBlock(this.sensorSerialNumber, Translation_1.tr(\"sensorSerialNumber\"));\n        report.tagValuePair(Translation_1.tr(\"sensorApprovalNumber\"), this.sensorApprovalNumber);\n        report.writeBlock(this.sensorPairingDateFirst, Translation_1.tr(\"sensorPairingDateFirst\"));\n        report.writeArray(this.vuCalibrationRecord, Translation_1.tr(\"vuCalibrationRecord\"));\n    };\n    VuTechnical.BLOCK_TYPE = 0x5;\n    return VuTechnical;\n}(VuBlock_1.default));\nexports.default = VuTechnical;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/VuBlocks/VuTechnical.ts?");

/***/ }),

/***/ "./src/VuBlocks/blockFactory.ts":
/*!**************************************!*\
  !*** ./src/VuBlocks/blockFactory.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar cardBlockFactory_1 = __webpack_require__(/*! CardBlocks/cardBlockFactory */ \"./src/CardBlocks/cardBlockFactory.ts\");\nvar vuBlockFactory_1 = __webpack_require__(/*! VuBlocks/vuBlockFactory */ \"./src/VuBlocks/vuBlockFactory.ts\");\nfunction blockFactory(data, pos) {\n    if (data[pos] == 0x76) {\n        return vuBlockFactory_1.vuBlockFactory(data, pos);\n    }\n    else {\n        return cardBlockFactory_1.cardBlockFactory(data, pos);\n    }\n}\nexports.blockFactory = blockFactory;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/VuBlocks/blockFactory.ts?");

/***/ }),

/***/ "./src/VuBlocks/vuBlockFactory.ts":
/*!****************************************!*\
  !*** ./src/VuBlocks/vuBlockFactory.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataReader_1 = __webpack_require__(/*! utils/DataReader */ \"./src/utils/DataReader.ts\");\nvar VuBlock_1 = __webpack_require__(/*! VuBlocks/VuBlock */ \"./src/VuBlocks/VuBlock.ts\");\nvar Converter_1 = __webpack_require__(/*! utils/Converter */ \"./src/utils/Converter.ts\");\nvar VuOverview_1 = __webpack_require__(/*! VuBlocks/VuOverview */ \"./src/VuBlocks/VuOverview.ts\");\nvar VuTechnical_1 = __webpack_require__(/*! VuBlocks/VuTechnical */ \"./src/VuBlocks/VuTechnical.ts\");\nvar VuCardData_1 = __webpack_require__(/*! VuBlocks/VuCardData */ \"./src/VuBlocks/VuCardData.ts\");\nvar Block11_1 = __webpack_require__(/*! VuBlocks/Block11 */ \"./src/VuBlocks/Block11.ts\");\nvar Block13_1 = __webpack_require__(/*! VuBlocks/Block13 */ \"./src/VuBlocks/Block13.ts\");\nvar Block14_1 = __webpack_require__(/*! VuBlocks/Block14 */ \"./src/VuBlocks/Block14.ts\");\nvar VuEventsFaults_1 = __webpack_require__(/*! VuBlocks/VuEventsFaults */ \"./src/VuBlocks/VuEventsFaults.ts\");\nvar VuActivities_1 = __webpack_require__(/*! VuBlocks/VuActivities */ \"./src/VuBlocks/VuActivities.ts\");\nvar VuDetailedSpeedData_1 = __webpack_require__(/*! VuBlocks/VuDetailedSpeedData */ \"./src/VuBlocks/VuDetailedSpeedData.ts\");\nfunction vuBlockFactory(data, pos) {\n    var blockType = DataReader_1.default.readUint8(data, pos + 1);\n    //console.log(\"vuBlockFactory: \" + Converter.dec2hexString(blockType));\n    data = data.slice(pos);\n    if (data.byteLength < 2 || data[0] != 0x76) {\n        return new VuBlock_1.default(data);\n    }\n    switch (blockType) {\n        case VuOverview_1.default.BLOCK_TYPE: {\n            return new VuOverview_1.default(data);\n        }\n        case VuTechnical_1.default.BLOCK_TYPE: {\n            return new VuTechnical_1.default(data);\n        }\n        case VuCardData_1.default.BLOCK_TYPE: {\n            return new VuCardData_1.default(data);\n        }\n        case Block11_1.default.BLOCK_TYPE: {\n            return new Block11_1.default(data);\n        }\n        case Block13_1.default.BLOCK_TYPE: {\n            return new Block13_1.default(data);\n        }\n        case Block14_1.default.BLOCK_TYPE: {\n            return new Block14_1.default(data);\n        }\n        case VuEventsFaults_1.default.BLOCK_TYPE: {\n            return new VuEventsFaults_1.default(data);\n        }\n        case VuActivities_1.default.BLOCK_TYPE: {\n            return new VuActivities_1.default(data);\n        }\n        case VuDetailedSpeedData_1.default.BLOCK_TYPE: {\n            return new VuDetailedSpeedData_1.default(data);\n        }\n        default: {\n            console.log(\"Unknown vu block type: \" + Converter_1.default.dec2hexString(blockType));\n            return new VuBlock_1.default(data);\n        }\n    }\n}\nexports.vuBlockFactory = vuBlockFactory;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/VuBlocks/vuBlockFactory.ts?");

/***/ }),

/***/ "./src/main.EsmDownloader.ts":
/*!***********************************!*\
  !*** ./src/main.EsmDownloader.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar fileDownload = __webpack_require__(/*! js-file-download */ \"./node_modules/js-file-download/file-download.js\"); // use require() because it fails with import\nvar EsmFile_1 = __webpack_require__(/*! EsmFile */ \"./src/EsmFile.ts\");\nvar JsonReporter_1 = __webpack_require__(/*! Reporter/JsonReporter */ \"./src/Reporter/JsonReporter.ts\");\nfunction downloadEsmAsJson(filename) {\n    console.log(\"downloadEsmAsJson: \" + filename);\n    downloadEsmData(filename, function (data) {\n        var ef = EsmFile_1.default.parseData(data);\n        var report = new JsonReporter_1.default();\n        ef.printOn(report);\n        var j = report.renderReport();\n        fileDownload(j, filename.replace(/^.*\\//, '') + '.json', 'application/json');\n    });\n}\nexports.downloadEsmAsJson = downloadEsmAsJson;\nfunction downloadEsmData(filename, callback) {\n    var xhr = new XMLHttpRequest();\n    xhr.open(\"GET\", filename);\n    xhr.responseType = \"arraybuffer\";\n    xhr.onload = function () {\n        if (this.status === 200) {\n            callback(xhr.response);\n        }\n    };\n    xhr.send();\n}\n\n\n//# sourceURL=webpack://EsmDownloader/./src/main.EsmDownloader.ts?");

/***/ }),

/***/ "./src/utils/Converter.ts":
/*!********************************!*\
  !*** ./src/utils/Converter.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Converter = /** @class */ (function () {\n    function Converter() {\n    }\n    Converter.dec2hexString = function (dec) {\n        // source: https://gist.github.com/agirorn/0e740d012b620968225de58859ccef5c\n        return '0x' + (dec + 0x10000).toString(16).substr(-4);\n    };\n    Converter.concatArrays = function (a1, a2) {\n        var b1 = new Uint8Array(a1);\n        var b2 = new Uint8Array(a2);\n        var b = new Uint8Array(b1.byteLength + b2.byteLength);\n        b.set(b1, 0);\n        b.set(b2, b1.byteLength);\n        return b.buffer;\n    };\n    Converter.bcdbyte = function (c) {\n        var n = 0;\n        var m = 1;\n        n += (c & 0x0F) * m;\n        n += ((c >> 4) & 0x0F) * m * 10;\n        return n;\n    };\n    return Converter;\n}());\nexports.default = Converter;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/utils/Converter.ts?");

/***/ }),

/***/ "./src/utils/DataReader.ts":
/*!*********************************!*\
  !*** ./src/utils/DataReader.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Converter_1 = __webpack_require__(/*! utils/Converter */ \"./src/utils/Converter.ts\");\nvar RawData_1 = __webpack_require__(/*! DataTypes/RawData */ \"./src/DataTypes/RawData.ts\");\nvar Subblocks_1 = __webpack_require__(/*! DataTypes/Subblocks */ \"./src/DataTypes/Subblocks.ts\");\nvar DataReader = /** @class */ (function () {\n    function DataReader() {\n    }\n    DataReader.readUint8 = function (data, pos) {\n        return new DataView(data.slice(pos, pos + 1)).getUint8(0);\n    };\n    DataReader.readUint16 = function (data, pos) {\n        return new DataView(data.slice(pos, pos + 2)).getUint16(0);\n    };\n    DataReader.readUint24 = function (data, pos) {\n        return new DataView(Converter_1.default.concatArrays([0], data.slice(pos, pos + 3))).getUint32(0);\n    };\n    DataReader.readUint32 = function (data, pos) {\n        return new DataView(data.slice(pos, pos + 4)).getUint32(0);\n    };\n    DataReader.readBCD16 = function (data, pos) {\n        var start = new Uint8Array(data.slice(pos, pos + 2));\n        var rv = (start[0] >> 4) * 1000 + (start[0] & 0x0F) * 100 + (start[1] >> 4) * 10 + (start[1] & 0x0F);\n        // console.log(\"readBCD16: \" + RawData.toHexString(start) + \" -> \" + rv + \" (\" + DataReader.readUint16(data, pos) + \")\");\n        return rv;\n    };\n    DataReader.readRawData = function (data, pos, length) {\n        return new RawData_1.default(data.slice(pos), length);\n    };\n    DataReader.readString = function (data, pos, length) {\n        var rd = new RawData_1.default(data.slice(pos), length);\n        var rv = rd.toTextString();\n        rv = rv.replace(/\\s+$/g, '');\n        return rv;\n    };\n    DataReader.readCodePageString = function (data, pos, length) {\n        var stringData = new Uint8Array(data.slice(pos, pos + length));\n        if (!DataReader.checkString(stringData.slice(1, -1))) {\n            return \"Not a string: \" + RawData_1.default.toHexString(stringData);\n        }\n        if (DataReader.isISO8859CodePageNumber(stringData[0])) {\n            // add support for codecs\n        }\n        else {\n            console.log(stringData[0] + \" is not a code page\");\n        }\n        var rv = String.fromCharCode.apply(null, stringData.slice(1, -1));\n        rv = rv.replace(/\\0/g, ' ');\n        rv = rv.replace(/\\s+$/g, '');\n        return rv;\n    };\n    DataReader.isISO8859CodePageNumber = function (number) {\n        return number <= 16 && number != 0 && number != 12;\n    };\n    DataReader.checkString = function (str) {\n        for (var j = 0; j < str.length; ++j) {\n            if (str[j] > 0x20 && str[j] != 0xFF && String.fromCharCode(str[j]) != '?') {\n                return true;\n            }\n        }\n        return false;\n    };\n    DataReader.readSubblocksByCount = function (blockType, data, pos, count) {\n        var blocks = new Subblocks_1.default();\n        for (var i = 0; i < count; i++) {\n            var b = blockType.build(data.slice(pos));\n            blocks.append(b);\n            pos += b.size();\n        }\n        return blocks;\n    };\n    DataReader.readSubblocksByLength = function (blockType, data, pos, length) {\n        var i = 0;\n        var blocks = new Subblocks_1.default();\n        while (i < length) {\n            //console.log(`Read subblock ${blockType.name} at ${i} of ${length}`);\n            var b = blockType.build(data.slice(pos + i));\n            blocks.append(b);\n            i += b.size();\n        }\n        return blocks;\n    };\n    return DataReader;\n}());\nexports.default = DataReader;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/utils/DataReader.ts?");

/***/ }),

/***/ "./src/utils/FormatStrings.ts":
/*!************************************!*\
  !*** ./src/utils/FormatStrings.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Translation_1 = __webpack_require__(/*! utils/Translation */ \"./src/utils/Translation.ts\");\nvar QString_1 = __webpack_require__(/*! utils/QString */ \"./src/utils/QString.ts\");\nfunction QT_TR_NOOP(x) {\n    return x;\n}\nvar FormatStrings = /** @class */ (function () {\n    function FormatStrings() {\n    }\n    FormatStrings.eventType = function (etype) {\n        var major = etype >> 4;\n        var minor = etype & 0xF;\n        var rv = Number(etype) + \" - \";\n        if (major == 0) {\n            rv += Translation_1.tr(\"General events: \");\n            var generalEvents = [\n                QT_TR_NOOP(\"No further details\"),\n                QT_TR_NOOP(\"Insertion of a non-valid card\"),\n                QT_TR_NOOP(\"Card conflict\"),\n                QT_TR_NOOP(\"Time overlap\"),\n                QT_TR_NOOP(\"Driving without an appropriate card\"),\n                QT_TR_NOOP(\"Card insertion while driving\"),\n                QT_TR_NOOP(\"Last card session not correctly closed\"),\n                QT_TR_NOOP(\"Over speeding\"),\n                QT_TR_NOOP(\"Power supply interruption\"),\n                QT_TR_NOOP(\"Motion data error\")\n            ];\n            if (minor <= 0x9) {\n                rv += Translation_1.tr(generalEvents[minor]);\n            }\n            else {\n                rv += Translation_1.tr(\"RFU\");\n            }\n        }\n        else if (major == 1) {\n            rv += Translation_1.tr(\"Vehicle unit related security breach attempt events: \");\n            var sevents = [\n                QT_TR_NOOP(\"No further details\"),\n                QT_TR_NOOP(\"Motion sensor authentication failure\"),\n                QT_TR_NOOP(\"Tachograph card authentication failure\"),\n                QT_TR_NOOP(\"Unauthorised change of motion sensor\"),\n                QT_TR_NOOP(\"Card data input integrity error\"),\n                QT_TR_NOOP(\"Stored user data integrity error\"),\n                QT_TR_NOOP(\"Internal data transfer error\"),\n                QT_TR_NOOP(\"Unauthorised case opening\"),\n                QT_TR_NOOP(\"Hardware sabotage\")\n            ];\n            if (minor <= 0x8) {\n                rv += Translation_1.tr(sevents[minor]);\n            }\n            else {\n                rv += Translation_1.tr(\"RFU\");\n            }\n        }\n        else if (major == 2) {\n            rv += Translation_1.tr(\"Sensor related security breach attempt events: \");\n            var sevents = [\n                QT_TR_NOOP(\"No further details\"),\n                QT_TR_NOOP(\"Authentication failure\"),\n                QT_TR_NOOP(\"Stored data integrity error\"),\n                QT_TR_NOOP(\"Internal data transfer error\"),\n                QT_TR_NOOP(\"Unauthorised case opening\"),\n                QT_TR_NOOP(\"Hardware sabotage\")\n            ];\n            if (minor <= 0x5) {\n                rv += Translation_1.tr(sevents[minor]);\n            }\n            else {\n                rv += Translation_1.tr(\"RFU\");\n            }\n        }\n        else if (major == 3) {\n            rv += Translation_1.tr(\"Recording equipment faults: \");\n            var sevents = [\n                QT_TR_NOOP(\"No further details\"),\n                QT_TR_NOOP(\"VU internal fault\"),\n                QT_TR_NOOP(\"Printer fault\"),\n                QT_TR_NOOP(\"Display fault\"),\n                QT_TR_NOOP(\"Downloading fault\"),\n                QT_TR_NOOP(\"Sensor fault\")\n            ];\n            if (minor <= 0x5) {\n                rv += Translation_1.tr(sevents[minor]);\n            }\n            else {\n                rv += Translation_1.tr(\"RFU\");\n            }\n        }\n        else if (major == 4) {\n            rv += Translation_1.tr(\"Card faults: \");\n            var sevents = [\n                \"No further details\"\n            ];\n            if (minor <= 0x1) {\n                rv += Translation_1.tr(sevents[minor]);\n            }\n            else {\n                rv += Translation_1.tr(\"RFU\");\n            }\n        }\n        else if (major >= 5 && major <= 7) {\n            rv += Translation_1.tr(\"RFU groups\");\n        }\n        else if (major >= 8 && major <= 0xF) {\n            rv += Translation_1.tr(\"Manufacturer specific\");\n        }\n        else {\n            rv += Translation_1.tr(\"(error: blame programmer)\");\n        }\n        return rv;\n    };\n    FormatStrings.eventRecordPurpose = function (etype) {\n        var recordingPurposes = [\n            QT_TR_NOOP(\"one of the 10 most recent (or last) events or faults\"),\n            QT_TR_NOOP(\"the longest event for one of the last 10 days of occurrence\"),\n            QT_TR_NOOP(\"one of the 5 longest events over the last 365 days\"),\n            QT_TR_NOOP(\"the last event for one of the last 10 days of occurrence\"),\n            QT_TR_NOOP(\"the most serious event for one of the last 10 days of occurrence\"),\n            QT_TR_NOOP(\"one of the 5 most serious events over the last 365 days\"),\n            QT_TR_NOOP(\"the first event or fault having occurred after the last calibration\"),\n            QT_TR_NOOP(\"an active/on-going event or fault\")\n        ];\n        if (etype <= 7) {\n            return Translation_1.tr(recordingPurposes[etype]);\n        }\n        else if (8 <= etype && etype <= 0x7F) {\n            return Translation_1.tr(\"RFU\");\n        }\n        else if (0x80 <= etype && etype <= 0xFF) {\n            return Translation_1.tr(\"Manufacturer specific\");\n        }\n        else {\n            return Translation_1.tr(\"(error: blame programmer)\");\n        }\n    };\n    FormatStrings.nationNumeric = function (country) {\n        var countries = [\n            QT_TR_NOOP(\"No information available\"),\n            QT_TR_NOOP(\"Austria\"),\n            QT_TR_NOOP(\"Albania\"),\n            QT_TR_NOOP(\"Andorra\"),\n            QT_TR_NOOP(\"Armenia\"),\n            QT_TR_NOOP(\"Azerbaijan\"),\n            QT_TR_NOOP(\"Belgium\"),\n            QT_TR_NOOP(\"Bulgaria\"),\n            QT_TR_NOOP(\"Bosnia and Herzegovina\"),\n            QT_TR_NOOP(\"Belarus\"),\n            QT_TR_NOOP(\"Switzerland\"),\n            QT_TR_NOOP(\"Cyprus\"),\n            QT_TR_NOOP(\"Czech Republic\"),\n            QT_TR_NOOP(\"Germany\"),\n            QT_TR_NOOP(\"Denmark\"),\n            QT_TR_NOOP(\"Spain\"),\n            QT_TR_NOOP(\"Estonia\"),\n            QT_TR_NOOP(\"France\"),\n            QT_TR_NOOP(\"Finland\"),\n            QT_TR_NOOP(\"Liechtenstein\"),\n            QT_TR_NOOP(\"Faeroe Islands\"),\n            QT_TR_NOOP(\"United Kingdom\"),\n            QT_TR_NOOP(\"Georgia\"),\n            QT_TR_NOOP(\"Greece\"),\n            QT_TR_NOOP(\"Hungary\"),\n            QT_TR_NOOP(\"Croatia\"),\n            QT_TR_NOOP(\"Italy\"),\n            QT_TR_NOOP(\"Ireland\"),\n            QT_TR_NOOP(\"Iceland\"),\n            QT_TR_NOOP(\"Kazakhstan\"),\n            QT_TR_NOOP(\"Luxembourg\"),\n            QT_TR_NOOP(\"Lithuania\"),\n            QT_TR_NOOP(\"Latvia\"),\n            QT_TR_NOOP(\"Malta\"),\n            QT_TR_NOOP(\"Monaco\"),\n            QT_TR_NOOP(\"Republic of Moldova\"),\n            QT_TR_NOOP(\"Macedonia\"),\n            QT_TR_NOOP(\"Norway\"),\n            QT_TR_NOOP(\"Netherlands\"),\n            QT_TR_NOOP(\"Portugal\"),\n            QT_TR_NOOP(\"Poland\"),\n            QT_TR_NOOP(\"Romania\"),\n            QT_TR_NOOP(\"San Marino\"),\n            QT_TR_NOOP(\"Russian Federation\"),\n            QT_TR_NOOP(\"Sweden\"),\n            QT_TR_NOOP(\"Slovakia\"),\n            QT_TR_NOOP(\"Slovenia\"),\n            QT_TR_NOOP(\"Turkmenistan\"),\n            QT_TR_NOOP(\"Turkey\"),\n            QT_TR_NOOP(\"Ukraine\"),\n            QT_TR_NOOP(\"Vatican City\"),\n            QT_TR_NOOP(\"Yugoslavia\"),\n            QT_TR_NOOP(\"Montenegro\"),\n            QT_TR_NOOP(\"Serbia\"),\n            QT_TR_NOOP(\"Uzbekistan\"),\n            QT_TR_NOOP(\"Tajikistan\")\n        ];\n        if (country <= 0x37) {\n            return Translation_1.tr(countries[country]);\n        }\n        if (country <= 0xFC) {\n            return new QString_1.default(Translation_1.tr(\"%1 - Reserved for future use\"))\n                .arg(country).toString();\n        }\n        if (country == 0xFD) {\n            return Translation_1.tr(\"European Community\");\n        }\n        if (country == 0xFE) {\n            return Translation_1.tr(\"Europe, but not EC and not registered\");\n        }\n        if (country == 0xFF) {\n            return Translation_1.tr(\"outside of Europe, not registered\");\n        }\n        return Translation_1.tr(\"error in nationNumeric\");\n    };\n    FormatStrings.specificCondition = function (scond) {\n        var specificConditions = [\n            QT_TR_NOOP(\"RFU\"),\n            QT_TR_NOOP(\"Out of scope - Begin\"),\n            QT_TR_NOOP(\"Out of scope - End\"),\n            QT_TR_NOOP(\"Ferry/Train crossing\")\n        ];\n        if (scond <= 0x3) {\n            return Translation_1.tr(specificConditions[scond]);\n        }\n        else {\n            return Translation_1.tr(\"RFU\");\n        }\n    };\n    FormatStrings.calibrationPurpose = function (cpurp) {\n        var cpurps = [\n            QT_TR_NOOP(\"reserved value (should not appear)\"),\n            QT_TR_NOOP(\"activation: recording of calibration parameters known, at the moment of the VU activation\"),\n            QT_TR_NOOP(\"first installation: first calibration of the VU after its activation\"),\n            QT_TR_NOOP(\"installation: first calibration of the VU in the current vehicle\"),\n            QT_TR_NOOP(\"periodic inspection\")\n        ];\n        if (cpurp <= 4) {\n            return Translation_1.tr(cpurps[cpurp]);\n        }\n        else {\n            return Translation_1.tr(\"(not specified)\");\n        }\n    };\n    FormatStrings.controlType = function (ctype) {\n        var rv = \"\";\n        if (ctype & (1 << 7)) {\n            rv += Translation_1.tr(\"card downloaded\") + \", \";\n        }\n        if (ctype & (1 << 6)) {\n            rv += Translation_1.tr(\"VU downloaded\") + \", \";\n        }\n        if (ctype & (1 << 5)) {\n            rv += Translation_1.tr(\"printing done\") + \", \";\n        }\n        if (ctype & (1 << 4)) {\n            rv += Translation_1.tr(\"display used\") + \", \";\n        }\n        return rv;\n    };\n    FormatStrings.equipmentType = function (value) {\n        var codes = [\n            QT_TR_NOOP(\"Reserved\"),\n            QT_TR_NOOP(\"Driver Card\"),\n            QT_TR_NOOP(\"Workshop Card\"),\n            QT_TR_NOOP(\"Control Card\"),\n            QT_TR_NOOP(\"Company Card\"),\n            QT_TR_NOOP(\"Manufacturing Card\"),\n            QT_TR_NOOP(\"Vehicle Unit\"),\n            QT_TR_NOOP(\"Motion Sensor\")\n        ];\n        var rv;\n        if (value >= 0 && value <= 7) {\n            rv = Translation_1.tr(codes[value]);\n        }\n        else {\n            rv = new QString_1.default(Translation_1.tr(\"RFU: %1\")).arg(value).toString();\n        }\n        return rv;\n    };\n    FormatStrings.dailyWorkPeriod = function (value) {\n        var vals = [\n            QT_TR_NOOP(\"Begin, related time = card insertion time or time of entry\"),\n            QT_TR_NOOP(\"End, related time = card withdrawal time or time of entry\"),\n            QT_TR_NOOP(\"Begin, related time manually entered (start time)\"),\n            QT_TR_NOOP(\"End, related time manually entered (end of work period)\"),\n            QT_TR_NOOP(\"Begin, related time assumed by VU\"),\n            QT_TR_NOOP(\"End, related time assumed by VU\")\n        ];\n        if (value <= 5) {\n            return Translation_1.tr(vals[value]);\n        }\n        else {\n            return new QString_1.default(Translation_1.tr(\"(not specified: %1)\"))\n                .arg(value).toString();\n        }\n    };\n    FormatStrings.regionNumeric = function (region) {\n        var vals = [\n            QT_TR_NOOP(\"No information available\"),\n            QT_TR_NOOP(\"Andalucía\"),\n            QT_TR_NOOP(\"Aragón\"),\n            QT_TR_NOOP(\"Asturias\"),\n            QT_TR_NOOP(\"Cantabria\"),\n            QT_TR_NOOP(\"Cataluña\"),\n            QT_TR_NOOP(\"Castilla-León\"),\n            QT_TR_NOOP(\"Castilla-La-Mancha\"),\n            QT_TR_NOOP(\"Valencia\"),\n            QT_TR_NOOP(\"Extremadura\"),\n            QT_TR_NOOP(\"Galicia\"),\n            QT_TR_NOOP(\"Baleares\"),\n            QT_TR_NOOP(\"Canarias\"),\n            QT_TR_NOOP(\"La Rioja\"),\n            QT_TR_NOOP(\"Madrid\"),\n            QT_TR_NOOP(\"Murcia\"),\n            QT_TR_NOOP(\"Navarra\"),\n            QT_TR_NOOP(\"País Vasco\"),\n            QT_TR_NOOP(\"Ceuta\"),\n            QT_TR_NOOP(\"Melilla\")\n        ];\n        if (region <= 0x13) {\n            return Translation_1.tr(vals[region]);\n        }\n        else {\n            return new QString_1.default(Translation_1.tr(\"Unknown region %1\"))\n                .arg(region).toString();\n        }\n    };\n    FormatStrings.previous2 = function (now, past) {\n        return new QString_1.default(Translation_1.tr(\"%1 (formerly %2)\"))\n            .arg(now).arg(past).toString();\n    };\n    FormatStrings.previous3 = function (now, past, ancientpast) {\n        return new QString_1.default(Translation_1.tr(\"%1 (formerly %2 and before that %3)\"))\n            .arg(now).arg(past).arg(ancientpast).toString();\n    };\n    FormatStrings.previous4 = function (now, past, ancientpast, prehistory) {\n        return new QString_1.default(Translation_1.tr(\"%1 (formerly %2, before that %3 and before that %4)\"))\n            .arg(now).arg(past).arg(ancientpast).arg(prehistory).toString();\n    };\n    FormatStrings.manufacturerCode = function (code) {\n        switch (code) {\n            case 0x00: return Translation_1.tr(\"No information available\");\n            case 0x01: return Translation_1.tr(\"Reserved value\");\n            case 0x10: return \"Actia S.A.\";\n            case 0x11: return \"Security Printing and Systems Ltd.\";\n            case 0x12: return FormatStrings.previous2(\"Austria Card Plastikkarten und Ausweissysteme GmbH\", \"Austria Card\");\n            case 0x13: return \"Agencija za komercijalnu djelatnost d.o.o (AKD)\";\n            case 0x15: return \"ASELSAN\";\n            case 0x17: return \"Real Casa de la Moneda\";\n            case 0x18: return \"BARBÉ S.R.L.\";\n            case 0x20: return \"CETIS d.d.\";\n            case 0x21: return \"certSIGN\";\n            case 0x22: return \"RUE Cryptotech\";\n            case 0x23: return \"Centr Modernizatcii Transporta OOO (CMT - LLC)\";\n            case 0x24: return \"Pars Ar-Ge Ltd\";\n            case 0x28: return \"Datakom\";\n            case 0x29: return \"DVLA\";\n            case 0x30: return FormatStrings.previous4(\"IDEMIA The Netherlands BV\", \"Morpho BV\", \"Sdu Identification B.V.\", \"Enschedé/Sdu B.V.\");\n            case 0x32: return FormatStrings.previous2(\"intellic GmbH\", \"EFKON AG.\");\n            case 0x38: return \"Fábrica Nacional de Moneda y Timbre\";\n            case 0x39: return \"First Print Yard\";\n            case 0x40: return \"Giesecke & Devrient GmbH\";\n            case 0x43: return \"Giesecke & Devrient GB Ltd.\";\n            case 0x44: return \"Giesecke & Devrient sa/nv\";\n            case 0x45: return \"GrafoCARD\";\n            case 0x48: return FormatStrings.previous2(\"Hungarian Banknote Printing Co. Ltd.\", \"PJRT\");\n            case 0x50: return \"Imprimerie Nationale\";\n            case 0x51: return \"Imprensa Nacional-Casa da Moeda, SA\";\n            case 0x52: return \"InfoCamere S.C.p.A\";\n            case 0x61: return \"KazTACHOnet LLP\";\n            case 0x68: return \"LESIKAR a.s.\";\n            case 0x69: return \"LEDA-SL\";\n            case 0x78: return \"NAP automotive Produkte GmbH\";\n            case 0x81: return FormatStrings.previous3(\"Morpho e-documents\", \"Sagem Orga\", \"ORGA Kartensysteme GmbH\");\n            case 0x82: return \"ORGA Zelenograd ZAO\";\n            case 0x84: return \"ORGA Kartensysteme GmbH\";\n            case 0x88: return FormatStrings.previous2(\"Asseco Czech Republic a.s.\", \"PVT a.s.\");\n            case 0x89: return \"Polska Wytwórnia Papierów Wartosciowych S.A. - PWPW S.A.\";\n            case 0x8A: return \"Papiery Powlekane Pasaco Sp. z o.o.\";\n            case 0x98: return \"TahoNetSoft\";\n            case 0xA1: return FormatStrings.previous4(\"Continental Automotive GmbH\", \"Siemens AG\", \"Siemens VDO Automotive\", \"Siemens Automotive\");\n            case 0xA2: return \"Stoneridge Electronics AB\";\n            case 0xA3: return FormatStrings.previous2(\"Gemalto\", \"Schlumberger SEMA, Axalto\");\n            case 0xA4: return \"3M Security Printing and Systems Ltd.\";\n            case 0xA5: return \"STMicroelectronics - Incard Division\";\n            case 0xA6: return \"STÁTNÍ TISKÁRNA CENIN, státní podnik\";\n            case 0xAB: return \"T-Systems International GmbH\";\n            case 0xAC: return FormatStrings.previous2(\"Gemalto AG\", \"Trüb AG\");\n            case 0xAD: return \"Trüb Baltic AS\";\n            case 0xAE: return \"TEMPEST a.s.\";\n            case 0xAF: return \"Trueb - DEMAX PLC\";\n            case 0xB0: return \"TAYROL LIMITED\";\n            case 0xB1: return \"UŽDAROJI AKCINĖ BENDROVĖ \\\"LODVILA\\\"\";\n            case 0xD8: return \"Union of Chambers and Commodity Exchanges of Turkey - TOBB\";\n            case 0xE0: return \"Turker Roll Paper Trade\";\n        }\n        return new QString_1.default(Translation_1.tr(\"Unknown Manufacturer %1 or equipment not type approved\")).arg(code).toString();\n    };\n    FormatStrings.longMonthName = function (month) {\n        var months = [\n            'January',\n            'February',\n            'March',\n            'April',\n            'May',\n            'June',\n            'July',\n            'August',\n            'September',\n            'October',\n            'November',\n            'December'\n        ];\n        return months[month];\n    };\n    return FormatStrings;\n}());\nexports.default = FormatStrings;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/utils/FormatStrings.ts?");

/***/ }),

/***/ "./src/utils/QString.ts":
/*!******************************!*\
  !*** ./src/utils/QString.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar QString = /** @class */ (function () {\n    function QString(value) {\n        if (value === void 0) { value = ''; }\n        this.value = value.toString();\n        this.argIndex = 0;\n    }\n    QString.prototype.arg = function (argValue) {\n        var rv = new QString();\n        rv.argIndex = this.argIndex + 1;\n        rv.value = this.value.replace(new RegExp(\"%\" + rv.argIndex, 'g'), \"\" + argValue);\n        return rv;\n    };\n    QString.prototype.toString = function () {\n        return this.value;\n    };\n    return QString;\n}());\nexports.default = QString;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/utils/QString.ts?");

/***/ }),

/***/ "./src/utils/Translation.ts":
/*!**********************************!*\
  !*** ./src/utils/Translation.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction tr(text) {\n    // no translation implemented\n    return text;\n}\nexports.tr = tr;\n\n\n//# sourceURL=webpack://EsmDownloader/./src/utils/Translation.ts?");

/***/ })

/******/ });