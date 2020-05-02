module.exports =
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

module.exports = function(data, filename, mime, bom) {
    var blobData = (typeof bom !== 'undefined') ? [bom, data] : [data]
    var blob = new Blob(blobData, {type: mime || 'application/octet-stream'});
    if (typeof window.navigator.msSaveBlob !== 'undefined') {
        // IE workaround for "HTML7007: One or more blob URLs were
        // revoked by closing the blob for which they were created.
        // These URLs will no longer resolve as the data backing
        // the URL has been freed."
        window.navigator.msSaveBlob(blob, filename);
    }
    else {
        var blobURL = (window.URL && window.URL.createObjectURL) ? window.URL.createObjectURL(blob) : window.webkitURL.createObjectURL(blob);
        var tempLink = document.createElement('a');
        tempLink.style.display = 'none';
        tempLink.href = blobURL;
        tempLink.setAttribute('download', filename);

        // Safari thinks _blank anchor are pop ups. We only want to set _blank
        // target if the browser does not support the HTML5 download attribute.
        // This allows you to download files in desktop safari if pop up blocking
        // is enabled.
        if (typeof tempLink.download === 'undefined') {
            tempLink.setAttribute('target', '_blank');
        }

        document.body.appendChild(tempLink);
        tempLink.click();

        // Fixes "webkit blob resource error 1"
        setTimeout(function() {
            document.body.removeChild(tempLink);
            window.URL.revokeObjectURL(blobURL);
        }, 0)
    }
}


/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_asciiSize.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_asciiSize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js");

/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize = baseProperty('length');

module.exports = asciiSize;


/***/ }),

/***/ "./node_modules/lodash/_asciiToArray.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_asciiToArray.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseRepeat.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseRepeat.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor;

/**
 * The base implementation of `_.repeat` which doesn't coerce arguments.
 *
 * @private
 * @param {string} string The string to repeat.
 * @param {number} n The number of times to repeat the string.
 * @returns {string} Returns the repeated string.
 */
function baseRepeat(string, n) {
  var result = '';
  if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
    return result;
  }
  // Leverage the exponentiation by squaring algorithm for a faster repeat.
  // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
  do {
    if (n % 2) {
      result += string;
    }
    n = nativeFloor(n / 2);
    if (n) {
      string += string;
    }
  } while (n);

  return result;
}

module.exports = baseRepeat;


/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_castSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_castSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(/*! ./_baseSlice */ "./node_modules/lodash/_baseSlice.js");

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createPadding.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createPadding.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRepeat = __webpack_require__(/*! ./_baseRepeat */ "./node_modules/lodash/_baseRepeat.js"),
    baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js"),
    castSlice = __webpack_require__(/*! ./_castSlice */ "./node_modules/lodash/_castSlice.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    stringSize = __webpack_require__(/*! ./_stringSize */ "./node_modules/lodash/_stringSize.js"),
    stringToArray = __webpack_require__(/*! ./_stringToArray */ "./node_modules/lodash/_stringToArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil;

/**
 * Creates the padding for `string` based on `length`. The `chars` string
 * is truncated if the number of characters exceeds `length`.
 *
 * @private
 * @param {number} length The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padding for `string`.
 */
function createPadding(length, chars) {
  chars = chars === undefined ? ' ' : baseToString(chars);

  var charsLength = chars.length;
  if (charsLength < 2) {
    return charsLength ? baseRepeat(chars, length) : chars;
  }
  var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
  return hasUnicode(chars)
    ? castSlice(stringToArray(result), 0, length).join('')
    : result.slice(0, length);
}

module.exports = createPadding;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hasUnicode.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hasUnicode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_stringSize.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stringSize.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var asciiSize = __webpack_require__(/*! ./_asciiSize */ "./node_modules/lodash/_asciiSize.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    unicodeSize = __webpack_require__(/*! ./_unicodeSize */ "./node_modules/lodash/_unicodeSize.js");

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return hasUnicode(string)
    ? unicodeSize(string)
    : asciiSize(string);
}

module.exports = stringSize;


/***/ }),

/***/ "./node_modules/lodash/_stringToArray.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_stringToArray.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(/*! ./_asciiToArray */ "./node_modules/lodash/_asciiToArray.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    unicodeToArray = __webpack_require__(/*! ./_unicodeToArray */ "./node_modules/lodash/_unicodeToArray.js");

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/_unicodeSize.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_unicodeSize.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}

module.exports = unicodeSize;


/***/ }),

/***/ "./node_modules/lodash/_unicodeToArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_unicodeToArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/findIndex.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/findIndex.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isEmpty.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEmpty.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/padStart.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/padStart.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createPadding = __webpack_require__(/*! ./_createPadding */ "./node_modules/lodash/_createPadding.js"),
    stringSize = __webpack_require__(/*! ./_stringSize */ "./node_modules/lodash/_stringSize.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Pads `string` on the left side if it's shorter than `length`. Padding
 * characters are truncated if they exceed `length`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * _.padStart('abc', 6);
 * // => '   abc'
 *
 * _.padStart('abc', 6, '_-');
 * // => '_-_abc'
 *
 * _.padStart('abc', 3);
 * // => 'abc'
 */
function padStart(string, length, chars) {
  string = toString(string);
  length = toInteger(length);

  var strLength = length ? stringSize(string) : 0;
  return (length && strLength < length)
    ? (createPadding(length - strLength, chars) + string)
    : string;
}

module.exports = padStart;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/CardBlocks/CardBlock.ts":
/*!*************************************!*\
  !*** ./src/CardBlocks/CardBlock.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TopLevelBlock_1 = __webpack_require__(/*! DataTypes/TopLevelBlock */ "./src/DataTypes/TopLevelBlock.ts");
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var CardBlock = /** @class */ (function (_super) {
    __extends(CardBlock, _super);
    function CardBlock(data) {
        var _this = _super.call(this) || this;
        _this.datasize = DataReader_1.default.readUint16(data, 3);
        var bytesLeft = data.slice(5 + _this.datasize).byteLength;
        if (bytesLeft >= 5 + 128) {
            if (DataReader_1.default.readUint16(data, 5 + _this.datasize) == DataReader_1.default.readUint16(data, 0)
                && DataReader_1.default.readUint8(data, 5 + _this.datasize + 2) == 1) {
                _this.hasSignature = true;
            }
        }
        return _this;
    }
    CardBlock.prototype.dataBlockSize = function () {
        return this.datasize + 5;
    };
    CardBlock.prototype.size = function () {
        return this.datasize + 5 + (this.hasSignature ? 5 + 128 : 0);
    };
    return CardBlock;
}(TopLevelBlock_1.default));
exports.default = CardBlock;


/***/ }),

/***/ "./src/CardBlocks/CardCertificate.ts":
/*!*******************************************!*\
  !*** ./src/CardBlocks/CardCertificate.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ "./src/CardBlocks/CardBlock.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var EncryptedCertificate_1 = __webpack_require__(/*! DataTypes/EncryptedCertificate */ "./src/DataTypes/EncryptedCertificate.ts");
var CardCertificate = /** @class */ (function (_super) {
    __extends(CardCertificate, _super);
    function CardCertificate(data) {
        var _this = _super.call(this, data) || this;
        _this.certificate = new EncryptedCertificate_1.default(data.slice(5));
        return _this;
    }
    CardCertificate.prototype.className = function () {
        return "CardCertificate";
    };
    CardCertificate.prototype.title = function () {
        return "Card Certificate";
    };
    CardCertificate.prototype.toString = function () {
        var qs = new QString_1.default('CardCertificate');
        return qs.toString();
    };
    CardCertificate.prototype.printOn = function (report) {
        report.writeBlock(this.certificate, Translation_1.tr("certificate"));
        if (this.dataBlockSize() != 199) {
            report.tagValuePair("should have", 199);
            report.tagValuePair("has", this.dataBlockSize());
        }
    };
    CardCertificate.BLOCK_TYPE = 0xc100;
    return CardCertificate;
}(CardBlock_1.default));
exports.default = CardCertificate;


/***/ }),

/***/ "./src/CardBlocks/CardChipIdentification.ts":
/*!**************************************************!*\
  !*** ./src/CardBlocks/CardChipIdentification.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ "./src/CardBlocks/CardBlock.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var CardChipIdentification = /** @class */ (function (_super) {
    __extends(CardChipIdentification, _super);
    function CardChipIdentification(data) {
        var _this = _super.call(this, data) || this;
        _this.icSerialNumber = DataReader_1.default.readRawData(data, 5, 4);
        _this.icManufacturingReference = DataReader_1.default.readRawData(data, 9, 4);
        return _this;
    }
    CardChipIdentification.prototype.className = function () {
        return "CardChipIdentification";
    };
    CardChipIdentification.prototype.title = function () {
        return "Card chip identification";
    };
    CardChipIdentification.prototype.toString = function () {
        var qs = new QString_1.default('CardChipIdentification');
        return qs.toString();
    };
    CardChipIdentification.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("icSerialNumber"), this.icSerialNumber.toString());
        report.tagValuePair(Translation_1.tr("icManufacturingReference"), this.icManufacturingReference.toString());
        if (this.dataBlockSize() != 13) {
            report.tagValuePair("should have", 13);
            report.tagValuePair("has", this.dataBlockSize());
        }
    };
    CardChipIdentification.BLOCK_TYPE = 0x0005;
    return CardChipIdentification;
}(CardBlock_1.default));
exports.default = CardChipIdentification;


/***/ }),

/***/ "./src/CardBlocks/CardControlActivityDataRecord.ts":
/*!*********************************************************!*\
  !*** ./src/CardBlocks/CardControlActivityDataRecord.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ "./src/CardBlocks/CardBlock.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ "./src/DataTypes/TimeReal.ts");
var Timespan_1 = __webpack_require__(/*! DataTypes/Timespan */ "./src/DataTypes/Timespan.ts");
var VehicleRegistration_1 = __webpack_require__(/*! DataTypes/VehicleRegistration */ "./src/DataTypes/VehicleRegistration.ts");
var FullCardNumber_1 = __webpack_require__(/*! DataTypes/FullCardNumber */ "./src/DataTypes/FullCardNumber.ts");
var CardControlActivityDataRecord = /** @class */ (function (_super) {
    __extends(CardControlActivityDataRecord, _super);
    function CardControlActivityDataRecord(data) {
        var _this = _super.call(this, data) || this;
        _this.controlType = DataReader_1.default.readUint8(data, 5);
        _this.controlTime = new TimeReal_1.default(data.slice(6));
        _this.controlCardNumber = new FullCardNumber_1.default(data.slice(10));
        _this.controlVehicleRegistration = new VehicleRegistration_1.default(data.slice(28));
        _this.controlDownloadPeriod = new Timespan_1.default(data.slice(43));
        return _this;
    }
    CardControlActivityDataRecord.prototype.className = function () {
        return "CardControlActivityDataRecord";
    };
    CardControlActivityDataRecord.prototype.title = function () {
        return "Control Activity Data";
    };
    CardControlActivityDataRecord.prototype.toString = function () {
        var qs = new QString_1.default('CardControlActivityDataRecord');
        return qs.toString();
    };
    CardControlActivityDataRecord.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("controlType"), this.controlType);
        report.tagValuePair(Translation_1.tr("controlTime"), this.controlTime.toString());
        report.writeBlock(this.controlCardNumber, Translation_1.tr("controlCardNumber"));
        report.writeBlock(this.controlVehicleRegistration, Translation_1.tr("controlVehicleRegistration"));
        report.tagValuePair(Translation_1.tr("controlDownloadPeriod"), this.controlDownloadPeriod.toString());
        if (this.dataBlockSize() != 51) {
            report.tagValuePair("should have", 51);
            report.tagValuePair("has", this.dataBlockSize());
        }
    };
    CardControlActivityDataRecord.BLOCK_TYPE = 0x0508;
    return CardControlActivityDataRecord;
}(CardBlock_1.default));
exports.default = CardControlActivityDataRecord;


/***/ }),

/***/ "./src/CardBlocks/CardCurrentUse.ts":
/*!******************************************!*\
  !*** ./src/CardBlocks/CardCurrentUse.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ "./src/CardBlocks/CardBlock.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ "./src/DataTypes/TimeReal.ts");
var VehicleRegistration_1 = __webpack_require__(/*! DataTypes/VehicleRegistration */ "./src/DataTypes/VehicleRegistration.ts");
var CardCurrentUse = /** @class */ (function (_super) {
    __extends(CardCurrentUse, _super);
    function CardCurrentUse(data) {
        var _this = _super.call(this, data) || this;
        _this.sessionOpenTime = new TimeReal_1.default(data.slice(5));
        _this.sessionOpenVehicle = new VehicleRegistration_1.default(data.slice(9));
        return _this;
    }
    CardCurrentUse.prototype.className = function () {
        return "CardCurrentUse";
    };
    CardCurrentUse.prototype.title = function () {
        return "Current Usage";
    };
    CardCurrentUse.prototype.toString = function () {
        var qs = new QString_1.default('CardCurrentUse');
        return qs.toString();
    };
    CardCurrentUse.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("sessionOpenTime"), this.sessionOpenTime.toString());
        report.writeBlock(this.sessionOpenVehicle, Translation_1.tr("sessionOpenVehicle"));
        if (this.dataBlockSize() != 24) {
            report.tagValuePair("should have", 24);
            report.tagValuePair("has", this.dataBlockSize());
        }
    };
    CardCurrentUse.BLOCK_TYPE = 0x0507;
    return CardCurrentUse;
}(CardBlock_1.default));
exports.default = CardCurrentUse;


/***/ }),

/***/ "./src/CardBlocks/CardDriverActivity.ts":
/*!**********************************************!*\
  !*** ./src/CardBlocks/CardDriverActivity.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ "./src/utils/FormatStrings.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var RawCardDriverActivity_1 = __webpack_require__(/*! CardBlocks/RawCardDriverActivity */ "./src/CardBlocks/RawCardDriverActivity.ts");
var CardActivityDailyRecord_1 = __webpack_require__(/*! DataTypes/CardActivityDailyRecord */ "./src/DataTypes/CardActivityDailyRecord.ts");
var ActivityChangeInfo_1 = __webpack_require__(/*! DataTypes/ActivityChangeInfo */ "./src/DataTypes/ActivityChangeInfo.ts");
var CardDriverActivity = /** @class */ (function (_super) {
    __extends(CardDriverActivity, _super);
    function CardDriverActivity(data) {
        var _this = _super.call(this, data) || this;
        _this.activityDataUncycled = _this.readCyclicData();
        _this.cardActivityDailyRecords = DataReader_1.default.readSubblocksByLength(CardActivityDailyRecord_1.default, _this.activityDataUncycled, 0, _this.activityDataUncycled.byteLength);
        return _this;
    }
    CardDriverActivity.prototype.className = function () {
        return "CardDriverActivity";
    };
    CardDriverActivity.prototype.readCyclicData = function () {
        var rv;
        var cd = this.cyclicData.toUint8Array();
        var newestRecordLength = DataReader_1.default.readUint16(this.cyclicData.data, this.newestRecord + 2); // (cd[cd[2] % cd.length] << 8) + cd[cd[3] % cd.length]
        var endOfNewestRecord = (this.newestRecord + newestRecordLength) % cd.length;
        if (endOfNewestRecord < this.oldestRecord) {
            // console.log(`readCyclicData #1 ${endOfNewestRecord} < ${this.oldestRecord}, newestRecordLength: ${newestRecordLength}, lenth: ${cd.length}`);
            var a1 = cd.slice(this.oldestRecord, this.oldestRecord + cd.length - this.oldestRecord);
            var a2 = cd.slice(0, endOfNewestRecord);
            rv = new Uint8Array(a1.length + a2.length);
            rv.set(a1, 0);
            rv.set(a2, a1.length);
        }
        else {
            // console.log(`readCyclicData #2 ${this.oldestRecord}, ${endOfNewestRecord}, ${cd.length}`);
            rv = cd.slice(this.oldestRecord, this.oldestRecord + endOfNewestRecord - this.oldestRecord);
        }
        return rv.buffer;
    };
    CardDriverActivity.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("oldestRecord"), this.oldestRecord);
        report.tagValuePair(Translation_1.tr("newestRecord"), this.newestRecord);
        report.writeArray(this.cardActivityDailyRecords, Translation_1.tr("cardActivityDailyRecords"));
        if (report.allowSvg() && this.cardActivityDailyRecords.numberOfBlocks() > 0) {
            this.printHtmlTimesheet(report);
        }
    };
    CardDriverActivity.prototype.printHtmlTimesheet = function (report) {
        var tablehead = "<table><tr><th></th><th>Driving</th><th>Working</th><th>Rest</th><th>Available</th></tr>";
        var durationsMonth = [0, 0, 0, 0, 0, 0];
        var currentMonth = this.cardActivityDailyRecords.get(0).activityRecordDate.date().getMonth();
        var table = new QString_1.default("<ul><li>%1:")
            .arg(new QString_1.default(Translation_1.tr("Timesheet for %1"))
            .arg(FormatStrings_1.default.longMonthName(currentMonth).toString())) + tablehead;
        for (var j = 0; j < this.cardActivityDailyRecords.numberOfBlocks(); j++) {
            if (this.cardActivityDailyRecords.get(j).activityRecordDate.date().getMonth() != currentMonth) {
                currentMonth = this.cardActivityDailyRecords.get(j).activityRecordDate.date().getMonth();
                table += new QString_1.default("<tr><th>Summary</th><th>%1</th><th>%2</th><th>%3</th><th>%4</th></tr>")
                    .arg(ActivityChangeInfo_1.default.formatClock(durationsMonth[ActivityChangeInfo_1.default.DRIVING]))
                    .arg(ActivityChangeInfo_1.default.formatClock(durationsMonth[ActivityChangeInfo_1.default.WORK]))
                    .arg(ActivityChangeInfo_1.default.formatClock(durationsMonth[ActivityChangeInfo_1.default.REST] + durationsMonth[ActivityChangeInfo_1.default.SHORTREST]))
                    .arg(ActivityChangeInfo_1.default.formatClock(durationsMonth[ActivityChangeInfo_1.default.AVAILABLE]));
                durationsMonth = [0, 0, 0, 0, 0, 0];
                table += new QString_1.default("</table></li><li>%1:")
                    .arg(new QString_1.default(Translation_1.tr("Timesheet for %1"))
                    .arg(FormatStrings_1.default.longMonthName(currentMonth)).toString()) + tablehead;
            }
            var durations = [0, 0, 0, 0, 0, 0];
            for (var k = 0; k < this.cardActivityDailyRecords.get(j).activityChangeInfos.numberOfBlocks(); k++) {
                durations[this.cardActivityDailyRecords.get(j).activityChangeInfos.get(k).activity] += this.cardActivityDailyRecords.get(j).activityChangeInfos.get(k).duration;
            }
            table += new QString_1.default("<tr><td>%1</td><td>%2</td><td>%3</td><td>%4</td><td>%5</td></tr>")
                .arg(this.cardActivityDailyRecords.get(j).activityRecordDate.toString())
                .arg(ActivityChangeInfo_1.default.formatClock(durations[ActivityChangeInfo_1.default.DRIVING]))
                .arg(ActivityChangeInfo_1.default.formatClock(durations[ActivityChangeInfo_1.default.WORK]))
                .arg(ActivityChangeInfo_1.default.formatClock(durations[ActivityChangeInfo_1.default.REST] + durations[ActivityChangeInfo_1.default.SHORTREST]))
                .arg(ActivityChangeInfo_1.default.formatClock(durations[ActivityChangeInfo_1.default.AVAILABLE]));
            durations.forEach(function (d, i) {
                durationsMonth[i] += d;
            });
        }
        table += new QString_1.default("<tr><th>Summary</th><th>%1</th><th>%2</th><th>%3</th><th>%4</th></tr>")
            .arg(ActivityChangeInfo_1.default.formatClock(durationsMonth[ActivityChangeInfo_1.default.DRIVING]))
            .arg(ActivityChangeInfo_1.default.formatClock(durationsMonth[ActivityChangeInfo_1.default.WORK]))
            .arg(ActivityChangeInfo_1.default.formatClock(durationsMonth[ActivityChangeInfo_1.default.REST] + durationsMonth[ActivityChangeInfo_1.default.SHORTREST]))
            .arg(ActivityChangeInfo_1.default.formatClock(durationsMonth[ActivityChangeInfo_1.default.AVAILABLE]));
        table += "</table></li></ul>";
        report.tagValuePair(Translation_1.tr("Timesheet"), table);
    };
    return CardDriverActivity;
}(RawCardDriverActivity_1.default));
exports.default = CardDriverActivity;


/***/ }),

/***/ "./src/CardBlocks/CardDrivingLicenseInformation.ts":
/*!*********************************************************!*\
  !*** ./src/CardBlocks/CardDrivingLicenseInformation.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ "./src/utils/FormatStrings.ts");
var CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ "./src/CardBlocks/CardBlock.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var CardDrivingLicenseInformation = /** @class */ (function (_super) {
    __extends(CardDrivingLicenseInformation, _super);
    function CardDrivingLicenseInformation(data) {
        var _this = _super.call(this, data) || this;
        _this.drivingLicenseIssuingAuthorithy = DataReader_1.default.readCodePageString(data, 5, 36).toString();
        _this.drivingLicenseIssuingNation = DataReader_1.default.readUint8(data, 41);
        _this.drivingLicenseNumber = DataReader_1.default.readString(data, 42, 16).toString();
        return _this;
    }
    CardDrivingLicenseInformation.prototype.className = function () {
        return "CardDrivingLicenseInformation";
    };
    CardDrivingLicenseInformation.prototype.title = function () {
        return "Driving License Info";
    };
    CardDrivingLicenseInformation.prototype.toString = function () {
        var qs = new QString_1.default('CardDrivingLicenseInformation');
        return qs.toString();
    };
    CardDrivingLicenseInformation.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("drivingLicenseIssuingAuthorithy"), this.drivingLicenseIssuingAuthorithy);
        report.tagValuePair(Translation_1.tr("drivingLicenseIssuingNation"), FormatStrings_1.default.nationNumeric(this.drivingLicenseIssuingNation));
        report.tagValuePair(Translation_1.tr("drivingLicenseNumber"), this.drivingLicenseNumber);
        if (this.dataBlockSize() != 58) {
            report.tagValuePair("should have", 58);
            report.tagValuePair("has", this.dataBlockSize());
        }
    };
    CardDrivingLicenseInformation.BLOCK_TYPE = 0x0521;
    return CardDrivingLicenseInformation;
}(CardBlock_1.default));
exports.default = CardDrivingLicenseInformation;


/***/ }),

/***/ "./src/CardBlocks/CardEventData.ts":
/*!*****************************************!*\
  !*** ./src/CardBlocks/CardEventData.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ "./src/CardBlocks/CardBlock.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var CardEventRecord_1 = __webpack_require__(/*! DataTypes/CardEventRecord */ "./src/DataTypes/CardEventRecord.ts");
var CardEventData = /** @class */ (function (_super) {
    __extends(CardEventData, _super);
    function CardEventData(data) {
        var _this = _super.call(this, data) || this;
        _this.cardEventRecord = DataReader_1.default.readSubblocksByLength(CardEventRecord_1.default, data.slice(5), 0, _this.dataBlockSize() - (5));
        return _this;
    }
    CardEventData.prototype.className = function () {
        return "CardEventData";
    };
    CardEventData.prototype.title = function () {
        return "Events Data";
    };
    CardEventData.prototype.toString = function () {
        var qs = new QString_1.default('CardEventData');
        return qs.toString();
    };
    CardEventData.prototype.printOn = function (report) {
        report.writeArray(this.cardEventRecord, Translation_1.tr("cardEventRecord"));
        if (this.dataBlockSize() != 5 + this.cardEventRecord.size()) {
            report.tagValuePair("should have", 5 + this.cardEventRecord.size());
            report.tagValuePair("has", this.dataBlockSize());
        }
    };
    CardEventData.BLOCK_TYPE = 0x0502;
    return CardEventData;
}(CardBlock_1.default));
exports.default = CardEventData;


/***/ }),

/***/ "./src/CardBlocks/CardFaultData.ts":
/*!*****************************************!*\
  !*** ./src/CardBlocks/CardFaultData.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ "./src/CardBlocks/CardBlock.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var CardEventRecord_1 = __webpack_require__(/*! DataTypes/CardEventRecord */ "./src/DataTypes/CardEventRecord.ts");
var CardFaultData = /** @class */ (function (_super) {
    __extends(CardFaultData, _super);
    function CardFaultData(data) {
        var _this = _super.call(this, data) || this;
        _this.cardEventRecord = DataReader_1.default.readSubblocksByLength(CardEventRecord_1.default, data.slice(5), 0, _this.dataBlockSize() - (5));
        return _this;
    }
    CardFaultData.prototype.className = function () {
        return "CardFaultData";
    };
    CardFaultData.prototype.title = function () {
        return "Faults Data";
    };
    CardFaultData.prototype.toString = function () {
        var qs = new QString_1.default('CardFaultData');
        return qs.toString();
    };
    CardFaultData.prototype.printOn = function (report) {
        report.writeArray(this.cardEventRecord, Translation_1.tr("cardEventRecord"));
        if (this.dataBlockSize() != 5 + this.cardEventRecord.size()) {
            report.tagValuePair("should have", 5 + this.cardEventRecord.size());
            report.tagValuePair("has", this.dataBlockSize());
        }
    };
    CardFaultData.BLOCK_TYPE = 0x0503;
    return CardFaultData;
}(CardBlock_1.default));
exports.default = CardFaultData;


/***/ }),

/***/ "./src/CardBlocks/CardIccIdentification.ts":
/*!*************************************************!*\
  !*** ./src/CardBlocks/CardIccIdentification.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ "./src/CardBlocks/CardBlock.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var ExtendedSerialNumber_1 = __webpack_require__(/*! DataTypes/ExtendedSerialNumber */ "./src/DataTypes/ExtendedSerialNumber.ts");
var CardIccIdentification = /** @class */ (function (_super) {
    __extends(CardIccIdentification, _super);
    function CardIccIdentification(data) {
        var _this = _super.call(this, data) || this;
        _this.clockStop = DataReader_1.default.readUint8(data, 5);
        _this.cardExtendedSerialNumber = new ExtendedSerialNumber_1.default(data.slice(6));
        _this.cardApprovalNumber = DataReader_1.default.readRawData(data, 14, 8);
        _this.cardPersonaliserID = DataReader_1.default.readRawData(data, 22, 1);
        _this.embedderIcAssemblerId = DataReader_1.default.readRawData(data, 23, 5);
        _this.icIdentifier = DataReader_1.default.readRawData(data, 28, 2);
        return _this;
    }
    CardIccIdentification.prototype.className = function () {
        return "CardIccIdentification";
    };
    CardIccIdentification.prototype.title = function () {
        return "Card ICC identification";
    };
    CardIccIdentification.prototype.toString = function () {
        var qs = new QString_1.default('CardIccIdentification');
        return qs.toString();
    };
    CardIccIdentification.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("clockStop"), this.clockStop);
        report.writeBlock(this.cardExtendedSerialNumber, Translation_1.tr("cardExtendedSerialNumber"));
        report.tagValuePair(Translation_1.tr("cardApprovalNumber"), this.cardApprovalNumber.toString());
        report.tagValuePair(Translation_1.tr("cardPersonaliserID"), this.cardPersonaliserID.toString());
        report.tagValuePair(Translation_1.tr("embedderIcAssemblerId"), this.embedderIcAssemblerId.toString());
        report.tagValuePair(Translation_1.tr("icIdentifier"), this.icIdentifier.toString());
        if (this.dataBlockSize() != 30) {
            report.tagValuePair("should have", 30);
            report.tagValuePair("has", this.dataBlockSize());
        }
    };
    CardIccIdentification.BLOCK_TYPE = 0x0002;
    return CardIccIdentification;
}(CardBlock_1.default));
exports.default = CardIccIdentification;


/***/ }),

/***/ "./src/CardBlocks/CardPlaceDailyWorkPeriod.ts":
/*!****************************************************!*\
  !*** ./src/CardBlocks/CardPlaceDailyWorkPeriod.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ "./src/CardBlocks/CardBlock.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var PlaceRecord_1 = __webpack_require__(/*! DataTypes/PlaceRecord */ "./src/DataTypes/PlaceRecord.ts");
var CardPlaceDailyWorkPeriod = /** @class */ (function (_super) {
    __extends(CardPlaceDailyWorkPeriod, _super);
    function CardPlaceDailyWorkPeriod(data) {
        var _this = _super.call(this, data) || this;
        _this.placePointerNewestRecord = DataReader_1.default.readUint8(data, 5);
        _this.placeRecord = DataReader_1.default.readSubblocksByLength(PlaceRecord_1.default, data.slice(6), 0, _this.dataBlockSize() - (6));
        return _this;
    }
    CardPlaceDailyWorkPeriod.prototype.className = function () {
        return "CardPlaceDailyWorkPeriod";
    };
    CardPlaceDailyWorkPeriod.prototype.title = function () {
        return "Places";
    };
    CardPlaceDailyWorkPeriod.prototype.toString = function () {
        var qs = new QString_1.default('CardPlaceDailyWorkPeriod');
        return qs.toString();
    };
    CardPlaceDailyWorkPeriod.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("placePointerNewestRecord"), this.placePointerNewestRecord);
        report.writeArray(this.placeRecord, Translation_1.tr("placeRecord"));
        if (this.dataBlockSize() != 6 + this.placeRecord.size()) {
            report.tagValuePair("should have", 6 + this.placeRecord.size());
            report.tagValuePair("has", this.dataBlockSize());
        }
    };
    CardPlaceDailyWorkPeriod.BLOCK_TYPE = 0x0506;
    return CardPlaceDailyWorkPeriod;
}(CardBlock_1.default));
exports.default = CardPlaceDailyWorkPeriod;


/***/ }),

/***/ "./src/CardBlocks/CardVehiclesUsed.ts":
/*!********************************************!*\
  !*** ./src/CardBlocks/CardVehiclesUsed.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ "./src/CardBlocks/CardBlock.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var CardVehicleRecord_1 = __webpack_require__(/*! DataTypes/CardVehicleRecord */ "./src/DataTypes/CardVehicleRecord.ts");
var CardVehiclesUsed = /** @class */ (function (_super) {
    __extends(CardVehiclesUsed, _super);
    function CardVehiclesUsed(data) {
        var _this = _super.call(this, data) || this;
        _this.vehiclePointerNewestRecord = DataReader_1.default.readUint16(data, 5);
        _this.cardVehicleRecord = DataReader_1.default.readSubblocksByLength(CardVehicleRecord_1.default, data.slice(7), 0, _this.dataBlockSize() - (7));
        return _this;
    }
    CardVehiclesUsed.prototype.className = function () {
        return "CardVehiclesUsed";
    };
    CardVehiclesUsed.prototype.title = function () {
        return "Vehicles Used";
    };
    CardVehiclesUsed.prototype.toString = function () {
        var qs = new QString_1.default('CardVehiclesUsed');
        return qs.toString();
    };
    CardVehiclesUsed.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("vehiclePointerNewestRecord"), this.vehiclePointerNewestRecord);
        report.writeArray(this.cardVehicleRecord, Translation_1.tr("cardVehicleRecord"));
        if (this.dataBlockSize() != 7 + this.cardVehicleRecord.size()) {
            report.tagValuePair("should have", 7 + this.cardVehicleRecord.size());
            report.tagValuePair("has", this.dataBlockSize());
        }
    };
    CardVehiclesUsed.BLOCK_TYPE = 0x0505;
    return CardVehiclesUsed;
}(CardBlock_1.default));
exports.default = CardVehiclesUsed;


/***/ }),

/***/ "./src/CardBlocks/DriverCardApplicationIdentification.ts":
/*!***************************************************************!*\
  !*** ./src/CardBlocks/DriverCardApplicationIdentification.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ "./src/utils/FormatStrings.ts");
var CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ "./src/CardBlocks/CardBlock.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var DriverCardApplicationIdentification = /** @class */ (function (_super) {
    __extends(DriverCardApplicationIdentification, _super);
    function DriverCardApplicationIdentification(data) {
        var _this = _super.call(this, data) || this;
        _this.typeOfTachographCardId = DataReader_1.default.readUint8(data, 5);
        _this.cardStructureVersion = DataReader_1.default.readRawData(data, 6, 2);
        _this.noOfEventsPerType = DataReader_1.default.readUint8(data, 8);
        _this.noOfFaultsPerType = DataReader_1.default.readUint8(data, 9);
        _this.activityStructureLength = DataReader_1.default.readUint16(data, 10);
        _this.noOfCardVehicleRecords = DataReader_1.default.readUint16(data, 12);
        _this.noOfCardPlaceRecords = DataReader_1.default.readUint8(data, 14);
        return _this;
    }
    DriverCardApplicationIdentification.prototype.className = function () {
        return "DriverCardApplicationIdentification";
    };
    DriverCardApplicationIdentification.prototype.title = function () {
        return "Application Identification";
    };
    DriverCardApplicationIdentification.prototype.toString = function () {
        var qs = new QString_1.default('DriverCardApplicationIdentification');
        return qs.toString();
    };
    DriverCardApplicationIdentification.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("typeOfTachographCardId"), FormatStrings_1.default.equipmentType(this.typeOfTachographCardId));
        report.tagValuePair(Translation_1.tr("cardStructureVersion"), this.cardStructureVersion.toString());
        report.tagValuePair(Translation_1.tr("noOfEventsPerType"), this.noOfEventsPerType);
        report.tagValuePair(Translation_1.tr("noOfFaultsPerType"), this.noOfFaultsPerType);
        report.tagValuePair(Translation_1.tr("activityStructureLength"), new QString_1.default("%1 Bytes").arg(this.activityStructureLength).toString());
        report.tagValuePair(Translation_1.tr("noOfCardVehicleRecords"), this.noOfCardVehicleRecords);
        report.tagValuePair(Translation_1.tr("noOfCardPlaceRecords"), this.noOfCardPlaceRecords);
        if (this.dataBlockSize() != 15) {
            report.tagValuePair("should have", 15);
            report.tagValuePair("has", this.dataBlockSize());
        }
    };
    DriverCardApplicationIdentification.BLOCK_TYPE = 0x0501;
    return DriverCardApplicationIdentification;
}(CardBlock_1.default));
exports.default = DriverCardApplicationIdentification;


/***/ }),

/***/ "./src/CardBlocks/Identification.ts":
/*!******************************************!*\
  !*** ./src/CardBlocks/Identification.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ "./src/utils/FormatStrings.ts");
var CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ "./src/CardBlocks/CardBlock.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ "./src/DataTypes/TimeReal.ts");
var Name_1 = __webpack_require__(/*! DataTypes/Name */ "./src/DataTypes/Name.ts");
var BcdDate_1 = __webpack_require__(/*! DataTypes/BcdDate */ "./src/DataTypes/BcdDate.ts");
var Identification = /** @class */ (function (_super) {
    __extends(Identification, _super);
    function Identification(data) {
        var _this = _super.call(this, data) || this;
        _this.cardIssuingMemberState = DataReader_1.default.readUint8(data, 5);
        _this.cardNumber = DataReader_1.default.readString(data, 6, 16).toString();
        _this.cardIssuingAuthorityName = DataReader_1.default.readCodePageString(data, 22, 36).toString();
        _this.cardIssueDate = new TimeReal_1.default(data.slice(58));
        _this.cardValidityBegin = new TimeReal_1.default(data.slice(62));
        _this.cardExpiryDate = new TimeReal_1.default(data.slice(66));
        _this.cardHolderName = new Name_1.default(data.slice(70));
        _this.cardHolderBirthDate = new BcdDate_1.default(data.slice(142));
        _this.cardHolderPreferredLanguage = DataReader_1.default.readString(data, 146, 2).toString();
        return _this;
    }
    Identification.prototype.className = function () {
        return "Identification";
    };
    Identification.prototype.title = function () {
        return "Card identification and card holder identification";
    };
    Identification.prototype.toString = function () {
        var qs = new QString_1.default('Identification');
        return qs.toString();
    };
    Identification.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("cardIssuingMemberState"), FormatStrings_1.default.nationNumeric(this.cardIssuingMemberState));
        report.tagValuePair(Translation_1.tr("cardNumber"), this.cardNumber);
        report.tagValuePair(Translation_1.tr("cardIssuingAuthorityName"), this.cardIssuingAuthorityName);
        report.tagValuePair(Translation_1.tr("cardIssueDate"), this.cardIssueDate.toString());
        report.tagValuePair(Translation_1.tr("cardValidityBegin"), this.cardValidityBegin.toString());
        report.tagValuePair(Translation_1.tr("cardExpiryDate"), this.cardExpiryDate.toString());
        report.writeBlock(this.cardHolderName, Translation_1.tr("cardHolderName"));
        report.writeBlock(this.cardHolderBirthDate, Translation_1.tr("cardHolderBirthDate"));
        report.tagValuePair(Translation_1.tr("cardHolderPreferredLanguage"), this.cardHolderPreferredLanguage);
        if (this.dataBlockSize() != 148) {
            report.tagValuePair("should have", 148);
            report.tagValuePair("has", this.dataBlockSize());
        }
    };
    Identification.BLOCK_TYPE = 0x0520;
    return Identification;
}(CardBlock_1.default));
exports.default = Identification;


/***/ }),

/***/ "./src/CardBlocks/LastCardDownload.ts":
/*!********************************************!*\
  !*** ./src/CardBlocks/LastCardDownload.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ "./src/CardBlocks/CardBlock.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ "./src/DataTypes/TimeReal.ts");
var LastCardDownload = /** @class */ (function (_super) {
    __extends(LastCardDownload, _super);
    function LastCardDownload(data) {
        var _this = _super.call(this, data) || this;
        _this.lastCardDownload = new TimeReal_1.default(data.slice(5));
        return _this;
    }
    LastCardDownload.prototype.className = function () {
        return "LastCardDownload";
    };
    LastCardDownload.prototype.title = function () {
        return "Card Download";
    };
    LastCardDownload.prototype.toString = function () {
        var qs = new QString_1.default('LastCardDownload');
        return qs.toString();
    };
    LastCardDownload.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("lastCardDownload"), this.lastCardDownload.toString());
        if (this.dataBlockSize() != 9) {
            report.tagValuePair("should have", 9);
            report.tagValuePair("has", this.dataBlockSize());
        }
    };
    LastCardDownload.BLOCK_TYPE = 0x050e;
    return LastCardDownload;
}(CardBlock_1.default));
exports.default = LastCardDownload;


/***/ }),

/***/ "./src/CardBlocks/MemberStateCertificate.ts":
/*!**************************************************!*\
  !*** ./src/CardBlocks/MemberStateCertificate.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ "./src/CardBlocks/CardBlock.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var EncryptedCertificate_1 = __webpack_require__(/*! DataTypes/EncryptedCertificate */ "./src/DataTypes/EncryptedCertificate.ts");
var MemberStateCertificate = /** @class */ (function (_super) {
    __extends(MemberStateCertificate, _super);
    function MemberStateCertificate(data) {
        var _this = _super.call(this, data) || this;
        _this.certificate = new EncryptedCertificate_1.default(data.slice(5));
        return _this;
    }
    MemberStateCertificate.prototype.className = function () {
        return "MemberStateCertificate";
    };
    MemberStateCertificate.prototype.title = function () {
        return "CA Certificate";
    };
    MemberStateCertificate.prototype.toString = function () {
        var qs = new QString_1.default('MemberStateCertificate');
        return qs.toString();
    };
    MemberStateCertificate.prototype.printOn = function (report) {
        report.writeBlock(this.certificate, Translation_1.tr("certificate"));
        if (this.dataBlockSize() != 199) {
            report.tagValuePair("should have", 199);
            report.tagValuePair("has", this.dataBlockSize());
        }
    };
    MemberStateCertificate.BLOCK_TYPE = 0xc108;
    return MemberStateCertificate;
}(CardBlock_1.default));
exports.default = MemberStateCertificate;


/***/ }),

/***/ "./src/CardBlocks/RawCardDriverActivity.ts":
/*!*************************************************!*\
  !*** ./src/CardBlocks/RawCardDriverActivity.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ "./src/CardBlocks/CardBlock.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var RawCardDriverActivity = /** @class */ (function (_super) {
    __extends(RawCardDriverActivity, _super);
    function RawCardDriverActivity(data) {
        var _this = _super.call(this, data) || this;
        _this.oldestRecord = DataReader_1.default.readUint16(data, 5);
        _this.newestRecord = DataReader_1.default.readUint16(data, 7);
        _this.cyclicData = DataReader_1.default.readRawData(data, 9, _this.dataBlockSize() - (9));
        return _this;
    }
    RawCardDriverActivity.prototype.className = function () {
        return "RawCardDriverActivity";
    };
    RawCardDriverActivity.prototype.title = function () {
        return "Driver Activity Data";
    };
    RawCardDriverActivity.prototype.toString = function () {
        var qs = new QString_1.default('CardDriverActivity');
        return qs.toString();
    };
    RawCardDriverActivity.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("oldestRecord"), this.oldestRecord);
        report.tagValuePair(Translation_1.tr("newestRecord"), this.newestRecord);
        report.tagValuePair(Translation_1.tr("cyclicData"), this.cyclicData.toString());
        if (this.dataBlockSize() != 9) {
            report.tagValuePair("should have", 9);
            report.tagValuePair("has", this.dataBlockSize());
        }
    };
    RawCardDriverActivity.BLOCK_TYPE = 0x0504;
    return RawCardDriverActivity;
}(CardBlock_1.default));
exports.default = RawCardDriverActivity;


/***/ }),

/***/ "./src/CardBlocks/SpecificConditions.ts":
/*!**********************************************!*\
  !*** ./src/CardBlocks/SpecificConditions.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ "./src/CardBlocks/CardBlock.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var SpecificConditionRecord_1 = __webpack_require__(/*! DataTypes/SpecificConditionRecord */ "./src/DataTypes/SpecificConditionRecord.ts");
var SpecificConditions = /** @class */ (function (_super) {
    __extends(SpecificConditions, _super);
    function SpecificConditions(data) {
        var _this = _super.call(this, data) || this;
        _this.specificConditionRecord = DataReader_1.default.readSubblocksByLength(SpecificConditionRecord_1.default, data.slice(5), 0, _this.dataBlockSize() - (5));
        return _this;
    }
    SpecificConditions.prototype.className = function () {
        return "SpecificConditions";
    };
    SpecificConditions.prototype.title = function () {
        return "Specific Conditions";
    };
    SpecificConditions.prototype.toString = function () {
        var qs = new QString_1.default('SpecificConditions');
        return qs.toString();
    };
    SpecificConditions.prototype.printOn = function (report) {
        report.writeArray(this.specificConditionRecord, Translation_1.tr("specificConditionRecord"));
        if (this.dataBlockSize() != 5 + this.specificConditionRecord.size()) {
            report.tagValuePair("should have", 5 + this.specificConditionRecord.size());
            report.tagValuePair("has", this.dataBlockSize());
        }
    };
    SpecificConditions.BLOCK_TYPE = 0x0522;
    return SpecificConditions;
}(CardBlock_1.default));
exports.default = SpecificConditions;


/***/ }),

/***/ "./src/CardBlocks/cardBlockFactory.ts":
/*!********************************************!*\
  !*** ./src/CardBlocks/cardBlockFactory.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var CardBlock_1 = __webpack_require__(/*! CardBlocks/CardBlock */ "./src/CardBlocks/CardBlock.ts");
var Converter_1 = __webpack_require__(/*! utils/Converter */ "./src/utils/Converter.ts");
var FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ "./src/utils/FormatStrings.ts");
var DriverCardApplicationIdentification_1 = __webpack_require__(/*! CardBlocks/DriverCardApplicationIdentification */ "./src/CardBlocks/DriverCardApplicationIdentification.ts");
var LastCardDownload_1 = __webpack_require__(/*! CardBlocks/LastCardDownload */ "./src/CardBlocks/LastCardDownload.ts");
var CardDrivingLicenseInformation_1 = __webpack_require__(/*! CardBlocks/CardDrivingLicenseInformation */ "./src/CardBlocks/CardDrivingLicenseInformation.ts");
var Identification_1 = __webpack_require__(/*! CardBlocks/Identification */ "./src/CardBlocks/Identification.ts");
var CardCurrentUse_1 = __webpack_require__(/*! CardBlocks/CardCurrentUse */ "./src/CardBlocks/CardCurrentUse.ts");
var CardChipIdentification_1 = __webpack_require__(/*! CardBlocks/CardChipIdentification */ "./src/CardBlocks/CardChipIdentification.ts");
var CardIccIdentification_1 = __webpack_require__(/*! CardBlocks/CardIccIdentification */ "./src/CardBlocks/CardIccIdentification.ts");
var CardControlActivityDataRecord_1 = __webpack_require__(/*! CardBlocks/CardControlActivityDataRecord */ "./src/CardBlocks/CardControlActivityDataRecord.ts");
var CardDriverActivity_1 = __webpack_require__(/*! CardBlocks/CardDriverActivity */ "./src/CardBlocks/CardDriverActivity.ts");
var CardEventData_1 = __webpack_require__(/*! CardBlocks/CardEventData */ "./src/CardBlocks/CardEventData.ts");
var CardFaultData_1 = __webpack_require__(/*! CardBlocks/CardFaultData */ "./src/CardBlocks/CardFaultData.ts");
var SpecificConditions_1 = __webpack_require__(/*! CardBlocks/SpecificConditions */ "./src/CardBlocks/SpecificConditions.ts");
var MemberStateCertificate_1 = __webpack_require__(/*! CardBlocks/MemberStateCertificate */ "./src/CardBlocks/MemberStateCertificate.ts");
var CardCertificate_1 = __webpack_require__(/*! CardBlocks/CardCertificate */ "./src/CardBlocks/CardCertificate.ts");
var CardPlaceDailyWorkPeriod_1 = __webpack_require__(/*! CardBlocks/CardPlaceDailyWorkPeriod */ "./src/CardBlocks/CardPlaceDailyWorkPeriod.ts");
var CardVehiclesUsed_1 = __webpack_require__(/*! CardBlocks/CardVehiclesUsed */ "./src/CardBlocks/CardVehiclesUsed.ts");
var BlockParseError_1 = __webpack_require__(/*! DataTypes/BlockParseError */ "./src/DataTypes/BlockParseError.ts");
function cardBlockFactory(data, pos) {
    var blockType = DataReader_1.default.readUint16(data, pos);
    //console.log("cardBlockFactory: " + Converter.dec2hexString(blockType));
    data = data.slice(pos);
    if (data.byteLength < 5) {
        return new CardBlock_1.default(data);
    }
    switch (blockType) {
        case DriverCardApplicationIdentification_1.default.BLOCK_TYPE: {
            var rv = new DriverCardApplicationIdentification_1.default(data);
            console.log("Parsed DriverCardApplicationIdentification.typeOfTachographCardId: '" + FormatStrings_1.default.equipmentType(rv.typeOfTachographCardId) + "'");
            return rv;
        }
        case LastCardDownload_1.default.BLOCK_TYPE: {
            return new LastCardDownload_1.default(data);
        }
        case CardDrivingLicenseInformation_1.default.BLOCK_TYPE: {
            return new CardDrivingLicenseInformation_1.default(data);
        }
        case Identification_1.default.BLOCK_TYPE: {
            return new Identification_1.default(data);
        }
        case CardCurrentUse_1.default.BLOCK_TYPE: {
            return new CardCurrentUse_1.default(data);
        }
        case CardChipIdentification_1.default.BLOCK_TYPE: {
            return new CardChipIdentification_1.default(data);
        }
        case CardIccIdentification_1.default.BLOCK_TYPE: {
            return new CardIccIdentification_1.default(data);
        }
        case CardControlActivityDataRecord_1.default.BLOCK_TYPE: {
            return new CardControlActivityDataRecord_1.default(data);
        }
        case CardDriverActivity_1.default.BLOCK_TYPE: {
            return new CardDriverActivity_1.default(data);
        }
        case CardEventData_1.default.BLOCK_TYPE: {
            return new CardEventData_1.default(data);
        }
        case CardFaultData_1.default.BLOCK_TYPE: {
            return new CardFaultData_1.default(data);
        }
        case SpecificConditions_1.default.BLOCK_TYPE: {
            return new SpecificConditions_1.default(data);
        }
        case MemberStateCertificate_1.default.BLOCK_TYPE: {
            return new MemberStateCertificate_1.default(data);
        }
        case CardCertificate_1.default.BLOCK_TYPE: {
            return new CardCertificate_1.default(data);
        }
        case CardPlaceDailyWorkPeriod_1.default.BLOCK_TYPE: {
            return new CardPlaceDailyWorkPeriod_1.default(data);
        }
        case CardVehiclesUsed_1.default.BLOCK_TYPE: {
            return new CardVehiclesUsed_1.default(data);
        }
        default: {
            console.warn("Unknown card block type: " + Converter_1.default.dec2hexString(blockType));
            return new BlockParseError_1.default("Unknown card block type: " + Converter_1.default.dec2hexString(blockType));
        }
    }
}
exports.cardBlockFactory = cardBlockFactory;


/***/ }),

/***/ "./src/DataTypes/ActivityChangeInfo.ts":
/*!*********************************************!*\
  !*** ./src/DataTypes/ActivityChangeInfo.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var padStart = __webpack_require__(/*! lodash/padStart */ "./node_modules/lodash/padStart.js");
var DataType_1 = __webpack_require__(/*! DataTypes/DataType */ "./src/DataTypes/DataType.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var ActivityChangeInfo = /** @class */ (function (_super) {
    __extends(ActivityChangeInfo, _super);
    function ActivityChangeInfo(data) {
        var _this = _super.call(this, data) || this;
        var start = new Uint8Array(data);
        _this.s = (start[0] & (1 << 7)) >> 7;
        _this.c = (start[0] & (1 << 6)) >> 6;
        _this.p = (start[0] & (1 << 5)) >> 5;
        _this.a = (start[0] & ((1 << 4) | (1 << 3))) >> 3;
        _this.t = Number((start[0] & 7) << 8) + start[1];
        _this.duration = 0;
        _this.activity = _this.a;
        return _this;
    }
    ActivityChangeInfo.prototype.setDuration = function (newDuration, newIsSlotState) {
        this.duration = newDuration;
        this.isSlotState = newIsSlotState;
        if (this.a == 0 && this.duration < 15) {
            this.activity = ActivityChangeInfo.SHORTREST;
        }
        if (!this.isSlotState && (this.p != 0) && (this.c == 0)) {
            this.activity = ActivityChangeInfo.UNKNOWN;
        }
    };
    ActivityChangeInfo.prototype.heightHint = function () {
        switch (this.activity) {
            case ActivityChangeInfo.REST: return 0.3;
            case ActivityChangeInfo.AVAILABLE: return 0.15;
            case ActivityChangeInfo.WORK: return 0.7;
            case ActivityChangeInfo.DRIVING: return 1.0;
            case ActivityChangeInfo.UNKNOWN: return 0.2;
            case ActivityChangeInfo.SHORTREST: return 0.4;
        }
        return 0.5;
    };
    ActivityChangeInfo.prototype.className = function () {
        return "ActivityChangeInfo";
    };
    ActivityChangeInfo.prototype.size = function () {
        return 2;
    };
    ActivityChangeInfo.prototype.isDefaultValue = function () {
        return false;
    };
    ActivityChangeInfo.prototype.activityName = function () {
        switch (this.activity) {
            case ActivityChangeInfo.REST: {
                return Translation_1.tr("break/rest");
            }
            case ActivityChangeInfo.AVAILABLE: {
                return Translation_1.tr("availability");
            }
            case ActivityChangeInfo.WORK: {
                return Translation_1.tr("work");
            }
            case ActivityChangeInfo.DRIVING: {
                return Translation_1.tr("driving");
            }
            case ActivityChangeInfo.UNKNOWN: {
                return Translation_1.tr("unknown");
            }
            case ActivityChangeInfo.SHORTREST: {
                return Translation_1.tr("short break");
            }
        }
        return Translation_1.tr("unknown activity");
    };
    ActivityChangeInfo.prototype.color = function () {
        switch (this.activity) {
            case ActivityChangeInfo.REST: return "red";
            case ActivityChangeInfo.AVAILABLE: return "black";
            case ActivityChangeInfo.WORK: return "yellow";
            case ActivityChangeInfo.DRIVING: return "green";
            case ActivityChangeInfo.UNKNOWN: return "purple";
            case ActivityChangeInfo.SHORTREST: return "orange";
        }
        return "blue";
    };
    ActivityChangeInfo.formatClock = function (time) {
        return new QString_1.default("%1:%2")
            .arg(padStart(Math.floor(time / 60), 2, '0'))
            .arg(padStart(time % 60, 2, '0')).toString();
    };
    ActivityChangeInfo.prototype.timespan = function () {
        return new QString_1.default(Translation_1.tr("from %1 to %2 (%3 h)"))
            .arg(ActivityChangeInfo.formatClock(this.t))
            .arg(ActivityChangeInfo.formatClock(this.t + this.duration))
            .arg(ActivityChangeInfo.formatClock(this.duration))
            .toString();
    };
    ActivityChangeInfo.prototype.extraString = function () {
        var rv = '';
        if (this.isSlotState) {
            rv += (this.p == 0 ? Translation_1.tr("Card inserted") : Translation_1.tr("Card not inserted or withdrawn")) + ", ";
            rv += (this.s == 0 ? Translation_1.tr("driver slot") : Translation_1.tr("co-driver slot")) + ", ";
            rv += (this.c == 0 ? Translation_1.tr("single") : Translation_1.tr("crew"));
        }
        else {
            if (this.p == 0) {
                rv += Translation_1.tr("Card inserted") + ", ";
                rv += (this.s == 0 ? Translation_1.tr("driver slot") : Translation_1.tr("co-driver slot")) + ", ";
                rv += (this.c == 0 ? Translation_1.tr("single") : Translation_1.tr("crew"));
            }
            else {
                rv += Translation_1.tr("Card not inserted or withdrawn") + ", ";
                rv += (this.s == 0 ? Translation_1.tr("driver slot") : Translation_1.tr("co-driver slot")) + ", ";
                rv += (this.c == 0 ? Translation_1.tr("following activity unknown") : Translation_1.tr("following activity manually entered"));
            }
        }
        return rv;
    };
    ActivityChangeInfo.prototype.title = function () {
        return new QString_1.default(Translation_1.tr("%1 for %2 h"))
            .arg(this.activityName())
            .arg(ActivityChangeInfo.formatClock(this.duration)).toString();
    };
    ActivityChangeInfo.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("activity"), this.activityName());
        report.tagValuePair(Translation_1.tr("activityCode"), this.activity);
        report.tagValuePair(Translation_1.tr("time"), this.timespan());
        report.tagValuePair(Translation_1.tr("from"), ActivityChangeInfo.formatClock(this.t));
        report.tagValuePair(Translation_1.tr("duration"), ActivityChangeInfo.formatClock(this.duration));
        report.tagValuePair(Translation_1.tr("slot status"), this.extraString());
        report.tagValuePair(Translation_1.tr("Raw data"), new QString_1.default("s=%1, c=%2, p=%3, a=%4, t=%5")
            .arg(this.s)
            .arg(this.c)
            .arg(this.p)
            .arg(this.a)
            .arg(this.t).toString());
    };
    ActivityChangeInfo.REST = 0;
    ActivityChangeInfo.AVAILABLE = 1;
    ActivityChangeInfo.WORK = 2;
    ActivityChangeInfo.DRIVING = 3;
    ActivityChangeInfo.UNKNOWN = 4;
    ActivityChangeInfo.SHORTREST = 5;
    ActivityChangeInfo.staticSize = 2;
    return ActivityChangeInfo;
}(DataType_1.default));
exports.default = ActivityChangeInfo;


/***/ }),

/***/ "./src/DataTypes/BcdDate.ts":
/*!**********************************!*\
  !*** ./src/DataTypes/BcdDate.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var padStart = __webpack_require__(/*! lodash/padStart */ "./node_modules/lodash/padStart.js");
var DataType_1 = __webpack_require__(/*! DataTypes/DataType */ "./src/DataTypes/DataType.ts");
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var Converter_1 = __webpack_require__(/*! utils/Converter */ "./src/utils/Converter.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var BcdDate = /** @class */ (function (_super) {
    __extends(BcdDate, _super);
    function BcdDate(data) {
        var _this = _super.call(this, data) || this;
        _this.encodedDate = DataReader_1.default.readRawData(data, 0, 4);
        return _this;
    }
    BcdDate.prototype.className = function () {
        return "BcdDate";
    };
    BcdDate.prototype.title = function () {
        return "";
    };
    BcdDate.prototype.size = function () {
        return 4;
    };
    BcdDate.prototype.toString = function () {
        var qs = '';
        var d = this.encodedDate.toUint8Array();
        qs = '' + Converter_1.default.bcdbyte(d[0]) + Converter_1.default.bcdbyte(d[1]) + '-' + padStart(Converter_1.default.bcdbyte(d[2]), 2, '0') + '-' + padStart(Converter_1.default.bcdbyte(d[3]), 2, '0');
        ;
        return qs.toString();
    };
    BcdDate.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("encodedDate"), this.encodedDate.toString());
    };
    BcdDate.BLOCK_TYPE = 0;
    BcdDate.staticSize = 4;
    return BcdDate;
}(DataType_1.default));
exports.default = BcdDate;


/***/ }),

/***/ "./src/DataTypes/BcdMonthYear.ts":
/*!***************************************!*\
  !*** ./src/DataTypes/BcdMonthYear.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var padStart = __webpack_require__(/*! lodash/padStart */ "./node_modules/lodash/padStart.js");
var DataType_1 = __webpack_require__(/*! DataTypes/DataType */ "./src/DataTypes/DataType.ts");
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var Converter_1 = __webpack_require__(/*! utils/Converter */ "./src/utils/Converter.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var BcdMonthYear = /** @class */ (function (_super) {
    __extends(BcdMonthYear, _super);
    function BcdMonthYear(data) {
        var _this = _super.call(this, data) || this;
        _this.encodedDate = DataReader_1.default.readRawData(data, 0, 2);
        return _this;
    }
    BcdMonthYear.prototype.className = function () {
        return "BcdMonthYear";
    };
    BcdMonthYear.prototype.title = function () {
        return "";
    };
    BcdMonthYear.prototype.size = function () {
        return 2;
    };
    BcdMonthYear.prototype.toString = function () {
        var qs = '';
        var d = this.encodedDate.toUint8Array();
        qs = "20" + padStart(Converter_1.default.bcdbyte(d[1]), 2, '0') + '-' + padStart(Converter_1.default.bcdbyte(d[0]), 2, '0');
        ;
        return qs.toString();
    };
    BcdMonthYear.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("encodedDate"), this.encodedDate.toString());
    };
    BcdMonthYear.BLOCK_TYPE = 0;
    BcdMonthYear.staticSize = 2;
    return BcdMonthYear;
}(DataType_1.default));
exports.default = BcdMonthYear;


/***/ }),

/***/ "./src/DataTypes/Block.ts":
/*!********************************!*\
  !*** ./src/DataTypes/Block.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Block = /** @class */ (function () {
    function Block(data) {
        this.dataStart = data;
    }
    Block.build = function (data) {
        var nm = { 'class': this };
        return new nm['class'](data);
    };
    Block.prototype.size = function () {
        return 0;
    };
    Block.prototype.className = function () {
        return this.constructor.name;
    };
    Block.prototype.title = function () {
        return "";
    };
    Block.prototype.toString = function () {
        return "";
    };
    Block.prototype.printOn = function (o) {
    };
    return Block;
}());
exports.default = Block;


/***/ }),

/***/ "./src/DataTypes/Block11Record.ts":
/*!****************************************!*\
  !*** ./src/DataTypes/Block11Record.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataType_1 = __webpack_require__(/*! DataTypes/DataType */ "./src/DataTypes/DataType.ts");
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var Timespan_1 = __webpack_require__(/*! DataTypes/Timespan */ "./src/DataTypes/Timespan.ts");
var FullCardNumber_1 = __webpack_require__(/*! DataTypes/FullCardNumber */ "./src/DataTypes/FullCardNumber.ts");
var Block11Record = /** @class */ (function (_super) {
    __extends(Block11Record, _super);
    function Block11Record(data) {
        var _this = _super.call(this, data) || this;
        _this.cardNumber = new FullCardNumber_1.default(data.slice(0));
        _this.time = new Timespan_1.default(data.slice(18));
        _this.sometimesDuration = DataReader_1.default.readUint16(data, 26);
        _this.payloadData = DataReader_1.default.readRawData(data, 28, 30);
        return _this;
    }
    Block11Record.prototype.className = function () {
        return "Block11Record";
    };
    Block11Record.prototype.title = function () {
        return "";
    };
    Block11Record.prototype.size = function () {
        return 58;
    };
    Block11Record.prototype.toString = function () {
        var qs = new QString_1.default('Block11Record');
        return qs.toString();
    };
    Block11Record.prototype.printOn = function (report) {
        report.writeBlock(this.cardNumber, Translation_1.tr("cardNumber"));
        report.tagValuePair(Translation_1.tr("time"), this.time.toString());
        report.tagValuePair(Translation_1.tr("sometimesDuration"), new QString_1.default("%1 s").arg(this.sometimesDuration).toString());
        report.tagValuePair(Translation_1.tr("payloadData"), this.payloadData.toString());
    };
    Block11Record.BLOCK_TYPE = 0;
    Block11Record.staticSize = 58;
    return Block11Record;
}(DataType_1.default));
exports.default = Block11Record;


/***/ }),

/***/ "./src/DataTypes/BlockParseError.ts":
/*!******************************************!*\
  !*** ./src/DataTypes/BlockParseError.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TopLevelBlock_1 = __webpack_require__(/*! DataTypes/TopLevelBlock */ "./src/DataTypes/TopLevelBlock.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var BlockParseError = /** @class */ (function (_super) {
    __extends(BlockParseError, _super);
    function BlockParseError(errorMessage) {
        var _this = _super.call(this) || this;
        _this.errorMessage = errorMessage.toString();
        return _this;
    }
    BlockParseError.prototype.className = function () {
        return "BlockParseError";
    };
    BlockParseError.prototype.title = function () {
        return "Block Parse Error";
    };
    BlockParseError.prototype.toString = function () {
        return "Block Parse Error: " + this.errorMessage;
    };
    BlockParseError.prototype.printOn = function (report) {
        if (report.allowSvg()) {
            report.tagValuePair(Translation_1.tr("errorMessage"), "<h3 style=\"color: red\">" + this.errorMessage + "</h3>");
        }
        else {
            report.tagValuePair(Translation_1.tr("errorMessage"), this.errorMessage.toString());
        }
    };
    return BlockParseError;
}(TopLevelBlock_1.default));
exports.default = BlockParseError;


/***/ }),

/***/ "./src/DataTypes/CardActivityDailyRecord.ts":
/*!**************************************************!*\
  !*** ./src/DataTypes/CardActivityDailyRecord.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var ActivityChangeInfo_1 = __webpack_require__(/*! DataTypes/ActivityChangeInfo */ "./src/DataTypes/ActivityChangeInfo.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var SvgDayActivity_1 = __webpack_require__(/*! DataTypes/SvgDayActivity */ "./src/DataTypes/SvgDayActivity.ts");
var RawCardActivityDailyRecord_1 = __webpack_require__(/*! DataTypes/RawCardActivityDailyRecord */ "./src/DataTypes/RawCardActivityDailyRecord.ts");
var CardActivityDailyRecord = /** @class */ (function (_super) {
    __extends(CardActivityDailyRecord, _super);
    function CardActivityDailyRecord(data) {
        var _this = _super.call(this, data) || this;
        _this.activityChangeInfos = DataReader_1.default.readSubblocksByLength(ActivityChangeInfo_1.default, data, RawCardActivityDailyRecord_1.default.staticSize, _this.activityRecordLength - RawCardActivityDailyRecord_1.default.staticSize);
        if (_this.activityChangeInfos.numberOfBlocks() > 0) {
            for (var j = 0; j < _this.activityChangeInfos.numberOfBlocks() - 1; j++) {
                if (_this.activityChangeInfos.get(j + 1).t != 0) {
                    _this.activityChangeInfos.get(j).setDuration(_this.activityChangeInfos.get(j + 1).t - _this.activityChangeInfos.get(j).t, false);
                }
                else {
                    _this.activityChangeInfos.get(j).setDuration(60 * 24 - _this.activityChangeInfos.get(j).t, false);
                }
            }
            _this.activityChangeInfos.get(_this.activityChangeInfos.numberOfBlocks() - 1).setDuration(60 * 24 - _this.activityChangeInfos.get(_this.activityChangeInfos.numberOfBlocks() - 1).t, false);
        }
        return _this;
    }
    CardActivityDailyRecord.prototype.className = function () {
        return "CardActivityDailyRecord";
    };
    CardActivityDailyRecord.prototype.title = function () {
        return new QString_1.default(Translation_1.tr("Activities on %1"))
            .arg(this.activityRecordDate.toString()).toString();
    };
    CardActivityDailyRecord.prototype.size = function () {
        if (this.activityRecordLength < RawCardActivityDailyRecord_1.default.staticSize) {
            console.log("Size too small in CardActivityDailyRecord");
            return RawCardActivityDailyRecord_1.default.staticSize;
        }
        if (this.activityRecordLength > RawCardActivityDailyRecord_1.default.staticSize + 2 * 60 * 24) {
            console.log("Size of CardActivityDailyRecord excessive: " + this.activityRecordLength);
        }
        return this.activityRecordLength;
    };
    CardActivityDailyRecord.prototype.printOn = function (report) {
        _super.prototype.printOn.call(this, report);
        if (report.allowSvg()) {
            var visualization = new SvgDayActivity_1.default();
            for (var j = 0; j < this.activityChangeInfos.numberOfBlocks(); ++j) {
                visualization.add(this.activityChangeInfos.get(j).t, this.activityChangeInfos.get(j).duration, this.activityChangeInfos.get(j).heightHint(), this.activityChangeInfos.get(j).color(), this.activityChangeInfos.get(j).toString());
            }
            report.tagValuePair(Translation_1.tr("Visualization"), visualization.toString());
        }
        report.writeArray(this.activityChangeInfos, Translation_1.tr("activityChangeInfos"), false);
    };
    return CardActivityDailyRecord;
}(RawCardActivityDailyRecord_1.default));
exports.default = CardActivityDailyRecord;


/***/ }),

/***/ "./src/DataTypes/CardEventRecord.ts":
/*!******************************************!*\
  !*** ./src/DataTypes/CardEventRecord.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataType_1 = __webpack_require__(/*! DataTypes/DataType */ "./src/DataTypes/DataType.ts");
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ "./src/utils/FormatStrings.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var Timespan_1 = __webpack_require__(/*! DataTypes/Timespan */ "./src/DataTypes/Timespan.ts");
var VehicleRegistration_1 = __webpack_require__(/*! DataTypes/VehicleRegistration */ "./src/DataTypes/VehicleRegistration.ts");
var CardEventRecord = /** @class */ (function (_super) {
    __extends(CardEventRecord, _super);
    function CardEventRecord(data) {
        var _this = _super.call(this, data) || this;
        _this.eventType = DataReader_1.default.readUint8(data, 0);
        _this.eventTime = new Timespan_1.default(data.slice(1));
        _this.eventVehicleRegistration = new VehicleRegistration_1.default(data.slice(9));
        return _this;
    }
    CardEventRecord.prototype.className = function () {
        return "CardEventRecord";
    };
    CardEventRecord.prototype.title = function () {
        return "";
    };
    CardEventRecord.prototype.size = function () {
        return 24;
    };
    CardEventRecord.prototype.toString = function () {
        var qs = new QString_1.default('CardEventRecord');
        return qs.toString();
    };
    CardEventRecord.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("eventType"), FormatStrings_1.default.eventType(this.eventType));
        report.tagValuePair(Translation_1.tr("eventTime"), this.eventTime.toString());
        report.writeBlock(this.eventVehicleRegistration, Translation_1.tr("eventVehicleRegistration"));
    };
    CardEventRecord.BLOCK_TYPE = 0;
    CardEventRecord.staticSize = 24;
    return CardEventRecord;
}(DataType_1.default));
exports.default = CardEventRecord;


/***/ }),

/***/ "./src/DataTypes/CardSlots.ts":
/*!************************************!*\
  !*** ./src/DataTypes/CardSlots.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var DataType_1 = __webpack_require__(/*! DataTypes/DataType */ "./src/DataTypes/DataType.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var FullCardNumber_1 = __webpack_require__(/*! DataTypes/FullCardNumber */ "./src/DataTypes/FullCardNumber.ts");
var CardSlots = /** @class */ (function (_super) {
    __extends(CardSlots, _super);
    function CardSlots(data) {
        var _this = _super.call(this, data) || this;
        _this.cardNumberDriverSlotBegin = new FullCardNumber_1.default(data.slice(0));
        _this.cardNumberCoDriverSlotBegin = new FullCardNumber_1.default(data.slice(18));
        _this.cardNumberDriverSlotEnd = new FullCardNumber_1.default(data.slice(36));
        _this.cardNumberCoDriverSlotEnd = new FullCardNumber_1.default(data.slice(54));
        return _this;
    }
    CardSlots.prototype.className = function () {
        return "CardSlots";
    };
    CardSlots.prototype.title = function () {
        return "";
    };
    CardSlots.prototype.size = function () {
        return 72;
    };
    CardSlots.prototype.toString = function () {
        var qs = new QString_1.default('CardSlots');
        return qs.toString();
    };
    CardSlots.prototype.printOn = function (report) {
        report.writeBlock(this.cardNumberDriverSlotBegin, Translation_1.tr("cardNumberDriverSlotBegin"));
        report.writeBlock(this.cardNumberCoDriverSlotBegin, Translation_1.tr("cardNumberCoDriverSlotBegin"));
        report.writeBlock(this.cardNumberDriverSlotEnd, Translation_1.tr("cardNumberDriverSlotEnd"));
        report.writeBlock(this.cardNumberCoDriverSlotEnd, Translation_1.tr("cardNumberCoDriverSlotEnd"));
    };
    CardSlots.BLOCK_TYPE = 0;
    return CardSlots;
}(DataType_1.default));
exports.default = CardSlots;


/***/ }),

/***/ "./src/DataTypes/CardVehicleRecord.ts":
/*!********************************************!*\
  !*** ./src/DataTypes/CardVehicleRecord.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataType_1 = __webpack_require__(/*! DataTypes/DataType */ "./src/DataTypes/DataType.ts");
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var Timespan_1 = __webpack_require__(/*! DataTypes/Timespan */ "./src/DataTypes/Timespan.ts");
var VehicleRegistration_1 = __webpack_require__(/*! DataTypes/VehicleRegistration */ "./src/DataTypes/VehicleRegistration.ts");
var CardVehicleRecord = /** @class */ (function (_super) {
    __extends(CardVehicleRecord, _super);
    function CardVehicleRecord(data) {
        var _this = _super.call(this, data) || this;
        _this.vehicleOdometerBegin = DataReader_1.default.readUint24(data, 0);
        _this.vehicleOdometerEnd = DataReader_1.default.readUint24(data, 3);
        _this.vehicleUse = new Timespan_1.default(data.slice(6));
        _this.registration = new VehicleRegistration_1.default(data.slice(14));
        _this.vuDataBlockCounter = DataReader_1.default.readBCD16(data, 29);
        return _this;
    }
    CardVehicleRecord.prototype.className = function () {
        return "CardVehicleRecord";
    };
    CardVehicleRecord.prototype.title = function () {
        return "";
    };
    CardVehicleRecord.prototype.size = function () {
        return 31;
    };
    CardVehicleRecord.prototype.toString = function () {
        var qs = new QString_1.default(Translation_1.tr("%1 km on %2 (%3)"))
            .arg(this.vehicleOdometerEnd - this.vehicleOdometerBegin)
            .arg(this.registration.toString())
            .arg(this.vehicleUse.toString()).toString();
        return qs.toString();
    };
    CardVehicleRecord.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("vehicleOdometerBegin"), new QString_1.default("%1 km").arg(this.vehicleOdometerBegin).toString());
        report.tagValuePair(Translation_1.tr("vehicleOdometerEnd"), new QString_1.default("%1 km").arg(this.vehicleOdometerEnd).toString());
        report.tagValuePair(Translation_1.tr("vehicleUse"), this.vehicleUse.toString());
        report.writeBlock(this.registration, Translation_1.tr("registration"));
        report.tagValuePair(Translation_1.tr("vuDataBlockCounter"), this.vuDataBlockCounter);
    };
    CardVehicleRecord.BLOCK_TYPE = 0;
    CardVehicleRecord.staticSize = 31;
    return CardVehicleRecord;
}(DataType_1.default));
exports.default = CardVehicleRecord;


/***/ }),

/***/ "./src/DataTypes/CertificateAuthority.ts":
/*!***********************************************!*\
  !*** ./src/DataTypes/CertificateAuthority.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataType_1 = __webpack_require__(/*! DataTypes/DataType */ "./src/DataTypes/DataType.ts");
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ "./src/utils/FormatStrings.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var CertificateAuthority = /** @class */ (function (_super) {
    __extends(CertificateAuthority, _super);
    function CertificateAuthority(data) {
        var _this = _super.call(this, data) || this;
        _this.nationNumeric = DataReader_1.default.readUint8(data, 0);
        _this.nationAlpha = DataReader_1.default.readString(data, 1, 3).toString();
        _this.keySerialNumber = DataReader_1.default.readUint8(data, 4);
        _this.additionalInfo = DataReader_1.default.readRawData(data, 5, 2);
        _this.caIdentifer = DataReader_1.default.readUint8(data, 7);
        return _this;
    }
    CertificateAuthority.prototype.className = function () {
        return "CertificateAuthority";
    };
    CertificateAuthority.prototype.title = function () {
        return "";
    };
    CertificateAuthority.prototype.size = function () {
        return 8;
    };
    CertificateAuthority.prototype.toString = function () {
        var qs = new QString_1.default('CertificateAuthority');
        return qs.toString();
    };
    CertificateAuthority.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("nationNumeric"), FormatStrings_1.default.nationNumeric(this.nationNumeric));
        report.tagValuePair(Translation_1.tr("nationAlpha"), this.nationAlpha);
        report.tagValuePair(Translation_1.tr("keySerialNumber"), this.keySerialNumber);
        report.tagValuePair(Translation_1.tr("additionalInfo"), this.additionalInfo.toString());
        report.tagValuePair(Translation_1.tr("caIdentifer"), this.caIdentifer);
    };
    CertificateAuthority.BLOCK_TYPE = 0;
    CertificateAuthority.staticSize = 8;
    return CertificateAuthority;
}(DataType_1.default));
exports.default = CertificateAuthority;


/***/ }),

/***/ "./src/DataTypes/DataType.ts":
/*!***********************************!*\
  !*** ./src/DataTypes/DataType.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Block_1 = __webpack_require__(/*! DataTypes/Block */ "./src/DataTypes/Block.ts");
var DataType = /** @class */ (function (_super) {
    __extends(DataType, _super);
    function DataType(data) {
        return _super.call(this, data) || this;
    }
    DataType.prototype.isDefaultValue = function () {
        var items = new Uint8Array(this.dataStart.slice(0, this.size()));
        for (var j = 0; j < items.length; j++) {
            if (items[j] != 0x0 && items[j] != 0xFF && items[j] != 0x20) {
                return false;
            }
        }
        return true;
    };
    return DataType;
}(Block_1.default));
exports.default = DataType;


/***/ }),

/***/ "./src/DataTypes/EncryptedCertificate.ts":
/*!***********************************************!*\
  !*** ./src/DataTypes/EncryptedCertificate.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var DataType_1 = __webpack_require__(/*! DataTypes/DataType */ "./src/DataTypes/DataType.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var CertificateAuthority_1 = __webpack_require__(/*! DataTypes/CertificateAuthority */ "./src/DataTypes/CertificateAuthority.ts");
var EncryptedCertificate = /** @class */ (function (_super) {
    __extends(EncryptedCertificate, _super);
    function EncryptedCertificate(data) {
        var _this = _super.call(this, data) || this;
        _this.sign = DataReader_1.default.readRawData(data, 0, 128);
        _this.cndash = DataReader_1.default.readRawData(data, 128, 58);
        _this.certificateAuthorityReference = new CertificateAuthority_1.default(data.slice(186));
        return _this;
    }
    EncryptedCertificate.prototype.className = function () {
        return "EncryptedCertificate";
    };
    EncryptedCertificate.prototype.title = function () {
        return "";
    };
    EncryptedCertificate.prototype.size = function () {
        return 194;
    };
    EncryptedCertificate.prototype.toString = function () {
        var qs = new QString_1.default('EncryptedCertificate');
        return qs.toString();
    };
    EncryptedCertificate.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("sign"), this.sign.toString());
        report.tagValuePair(Translation_1.tr("cndash"), this.cndash.toString());
        report.writeBlock(this.certificateAuthorityReference, Translation_1.tr("certificateAuthorityReference"));
    };
    EncryptedCertificate.BLOCK_TYPE = 0;
    return EncryptedCertificate;
}(DataType_1.default));
exports.default = EncryptedCertificate;


/***/ }),

/***/ "./src/DataTypes/ExtendedSerialNumber.ts":
/*!***********************************************!*\
  !*** ./src/DataTypes/ExtendedSerialNumber.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataType_1 = __webpack_require__(/*! DataTypes/DataType */ "./src/DataTypes/DataType.ts");
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ "./src/utils/FormatStrings.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var BcdMonthYear_1 = __webpack_require__(/*! DataTypes/BcdMonthYear */ "./src/DataTypes/BcdMonthYear.ts");
var ExtendedSerialNumber = /** @class */ (function (_super) {
    __extends(ExtendedSerialNumber, _super);
    function ExtendedSerialNumber(data) {
        var _this = _super.call(this, data) || this;
        _this.serialNumber = DataReader_1.default.readUint32(data, 0);
        _this.date = new BcdMonthYear_1.default(data.slice(4));
        _this.equipmentType = DataReader_1.default.readUint8(data, 6);
        _this.manufacturerCode = DataReader_1.default.readUint8(data, 7);
        return _this;
    }
    ExtendedSerialNumber.prototype.className = function () {
        return "ExtendedSerialNumber";
    };
    ExtendedSerialNumber.prototype.title = function () {
        return "";
    };
    ExtendedSerialNumber.prototype.size = function () {
        return 8;
    };
    ExtendedSerialNumber.prototype.toString = function () {
        var qs = new QString_1.default("%1 (%2) %3, %4")
            .arg(this.serialNumber)
            .arg(this.date.toString())
            .arg(FormatStrings_1.default.equipmentType(this.equipmentType))
            .arg(FormatStrings_1.default.manufacturerCode(this.manufacturerCode)).toString();
        return qs.toString();
    };
    ExtendedSerialNumber.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("serialNumber"), this.serialNumber);
        report.writeBlock(this.date, Translation_1.tr("date"));
        report.tagValuePair(Translation_1.tr("equipmentType"), FormatStrings_1.default.equipmentType(this.equipmentType));
        report.tagValuePair(Translation_1.tr("manufacturerCode"), FormatStrings_1.default.manufacturerCode(this.manufacturerCode));
    };
    ExtendedSerialNumber.BLOCK_TYPE = 0;
    ExtendedSerialNumber.staticSize = 8;
    return ExtendedSerialNumber;
}(DataType_1.default));
exports.default = ExtendedSerialNumber;


/***/ }),

/***/ "./src/DataTypes/FullCardNumber.ts":
/*!*****************************************!*\
  !*** ./src/DataTypes/FullCardNumber.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var DataType_1 = __webpack_require__(/*! DataTypes/DataType */ "./src/DataTypes/DataType.ts");
var FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ "./src/utils/FormatStrings.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var FullCardNumber = /** @class */ (function (_super) {
    __extends(FullCardNumber, _super);
    function FullCardNumber(data) {
        var _this = _super.call(this, data) || this;
        _this.cardType = DataReader_1.default.readUint8(data, 0);
        _this.cardIssuingMemberState = DataReader_1.default.readUint8(data, 1);
        _this.cardNumber = DataReader_1.default.readString(data, 2, 16).toString();
        return _this;
    }
    FullCardNumber.prototype.className = function () {
        return "FullCardNumber";
    };
    FullCardNumber.prototype.title = function () {
        return "";
    };
    FullCardNumber.prototype.size = function () {
        return 18;
    };
    FullCardNumber.prototype.toString = function () {
        var qs = new QString_1.default("%1 (%2, %3)")
            .arg(this.cardNumber)
            .arg(FormatStrings_1.default.nationNumeric(this.cardIssuingMemberState))
            .arg(FormatStrings_1.default.equipmentType(this.cardType));
        return qs.toString();
    };
    FullCardNumber.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("cardType"), FormatStrings_1.default.equipmentType(this.cardType));
        report.tagValuePair(Translation_1.tr("cardIssuingMemberState"), FormatStrings_1.default.nationNumeric(this.cardIssuingMemberState));
        report.tagValuePair(Translation_1.tr("cardNumber"), this.cardNumber);
    };
    FullCardNumber.BLOCK_TYPE = 0;
    return FullCardNumber;
}(DataType_1.default));
exports.default = FullCardNumber;


/***/ }),

/***/ "./src/DataTypes/Name.ts":
/*!*******************************!*\
  !*** ./src/DataTypes/Name.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataType_1 = __webpack_require__(/*! DataTypes/DataType */ "./src/DataTypes/DataType.ts");
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var Name = /** @class */ (function (_super) {
    __extends(Name, _super);
    function Name(data) {
        var _this = _super.call(this, data) || this;
        _this.surname = DataReader_1.default.readCodePageString(data, 0, 36).toString();
        _this.firstNames = DataReader_1.default.readCodePageString(data, 36, 36).toString();
        return _this;
    }
    Name.prototype.className = function () {
        return "Name";
    };
    Name.prototype.title = function () {
        return "";
    };
    Name.prototype.size = function () {
        return 72;
    };
    Name.prototype.toString = function () {
        var qs = this.surname + ", " + this.firstNames;
        return qs.toString();
    };
    Name.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("surname"), this.surname);
        report.tagValuePair(Translation_1.tr("firstNames"), this.firstNames);
    };
    Name.BLOCK_TYPE = 0;
    Name.staticSize = 72;
    return Name;
}(DataType_1.default));
exports.default = Name;


/***/ }),

/***/ "./src/DataTypes/PictureGenerator.ts":
/*!*******************************************!*\
  !*** ./src/DataTypes/PictureGenerator.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PictureGenerator = /** @class */ (function () {
    function PictureGenerator() {
        this.collected = '';
    }
    return PictureGenerator;
}());
exports.default = PictureGenerator;


/***/ }),

/***/ "./src/DataTypes/PlaceRecord.ts":
/*!**************************************!*\
  !*** ./src/DataTypes/PlaceRecord.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataType_1 = __webpack_require__(/*! DataTypes/DataType */ "./src/DataTypes/DataType.ts");
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ "./src/utils/FormatStrings.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ "./src/DataTypes/TimeReal.ts");
var PlaceRecord = /** @class */ (function (_super) {
    __extends(PlaceRecord, _super);
    function PlaceRecord(data) {
        var _this = _super.call(this, data) || this;
        _this.entryTime = new TimeReal_1.default(data.slice(0));
        _this.entryTypeDailyWorkPeriod = DataReader_1.default.readUint8(data, 4);
        _this.dailyWorkPeriodCountry = DataReader_1.default.readUint8(data, 5);
        _this.dailyWorkPeriodRegion = DataReader_1.default.readUint8(data, 6);
        _this.vehicleOdometerValue = DataReader_1.default.readUint24(data, 7);
        return _this;
    }
    PlaceRecord.prototype.className = function () {
        return "PlaceRecord";
    };
    PlaceRecord.prototype.title = function () {
        return "";
    };
    PlaceRecord.prototype.size = function () {
        return 10;
    };
    PlaceRecord.prototype.toString = function () {
        var qs = new QString_1.default("%1%2 - %3 - %4 km")
            .arg(FormatStrings_1.default.nationNumeric(this.dailyWorkPeriodCountry))
            .arg(this.dailyWorkPeriodRegion == 0 ? new QString_1.default() : ", " + FormatStrings_1.default.regionNumeric(this.dailyWorkPeriodRegion))
            .arg(this.entryTime.toString())
            .arg(this.vehicleOdometerValue).toString();
        return qs.toString();
    };
    PlaceRecord.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("entryTime"), this.entryTime.toString());
        report.tagValuePair(Translation_1.tr("entryTypeDailyWorkPeriod"), FormatStrings_1.default.dailyWorkPeriod(this.entryTypeDailyWorkPeriod));
        report.tagValuePair(Translation_1.tr("dailyWorkPeriodCountry"), FormatStrings_1.default.nationNumeric(this.dailyWorkPeriodCountry));
        report.tagValuePair(Translation_1.tr("dailyWorkPeriodRegion"), FormatStrings_1.default.regionNumeric(this.dailyWorkPeriodRegion));
        report.tagValuePair(Translation_1.tr("vehicleOdometerValue"), new QString_1.default("%1 km").arg(this.vehicleOdometerValue).toString());
    };
    PlaceRecord.BLOCK_TYPE = 0;
    PlaceRecord.staticSize = 10;
    return PlaceRecord;
}(DataType_1.default));
exports.default = PlaceRecord;


/***/ }),

/***/ "./src/DataTypes/RawCardActivityDailyRecord.ts":
/*!*****************************************************!*\
  !*** ./src/DataTypes/RawCardActivityDailyRecord.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataType_1 = __webpack_require__(/*! DataTypes/DataType */ "./src/DataTypes/DataType.ts");
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ "./src/DataTypes/TimeReal.ts");
var RawCardActivityDailyRecord = /** @class */ (function (_super) {
    __extends(RawCardActivityDailyRecord, _super);
    function RawCardActivityDailyRecord(data) {
        var _this = _super.call(this, data) || this;
        _this.activityRecordPreviousLength = DataReader_1.default.readUint16(data, 0);
        _this.activityRecordLength = DataReader_1.default.readUint16(data, 2);
        _this.activityRecordDate = new TimeReal_1.default(data.slice(4));
        _this.activityPresenceCounter = DataReader_1.default.readBCD16(data, 8);
        _this.activityDayDistance = DataReader_1.default.readUint16(data, 10);
        return _this;
    }
    RawCardActivityDailyRecord.prototype.className = function () {
        return "RawCardActivityDailyRecord";
    };
    RawCardActivityDailyRecord.prototype.title = function () {
        return new QString_1.default(Translation_1.tr("Activities on %1")).arg(this.activityRecordDate.toString()).toString();
    };
    RawCardActivityDailyRecord.prototype.size = function () {
        return 12;
    };
    RawCardActivityDailyRecord.prototype.toString = function () {
        var qs = new QString_1.default('CardActivityDailyRecord');
        return qs.toString();
    };
    RawCardActivityDailyRecord.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("activityRecordPreviousLength"), new QString_1.default("%1 Bytes").arg(this.activityRecordPreviousLength).toString());
        report.tagValuePair(Translation_1.tr("activityRecordLength"), new QString_1.default("%1 Bytes").arg(this.activityRecordLength).toString());
        report.tagValuePair(Translation_1.tr("activityRecordDate"), this.activityRecordDate.toString());
        report.tagValuePair(Translation_1.tr("activityPresenceCounter"), this.activityPresenceCounter);
        report.tagValuePair(Translation_1.tr("activityDayDistance"), new QString_1.default("%1 km").arg(this.activityDayDistance).toString());
    };
    RawCardActivityDailyRecord.BLOCK_TYPE = 0;
    RawCardActivityDailyRecord.staticSize = 12;
    return RawCardActivityDailyRecord;
}(DataType_1.default));
exports.default = RawCardActivityDailyRecord;


/***/ }),

/***/ "./src/DataTypes/RawData.ts":
/*!**********************************!*\
  !*** ./src/DataTypes/RawData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var findIndex = __webpack_require__(/*! lodash/findIndex */ "./node_modules/lodash/findIndex.js");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var Block_1 = __webpack_require__(/*! DataTypes/Block */ "./src/DataTypes/Block.ts");
var RawData = /** @class */ (function (_super) {
    __extends(RawData, _super);
    function RawData(data, length) {
        var _this = _super.call(this) || this;
        _this.data = data.slice(0, length);
        return _this;
    }
    RawData.prototype.toString = function () {
        return RawData.toHexString(new Uint8Array(this.data));
    };
    RawData.toHexString = function (data) {
        var allzeros = findIndex(data, function (c) { return c !== 0; }) < 0;
        if (allzeros) {
            return Translation_1.tr("All " + data.byteLength + " Bytes are zeroed.");
        }
        var rv = '';
        data.forEach(function (c) {
            rv += ('0' + c.toString(16)).slice(-2) + ' ';
        });
        return rv.replace(/ *$/, '');
    };
    RawData.prototype.toTextString = function () {
        return String.fromCharCode.apply(null, new Uint8Array(this.data));
    };
    RawData.prototype.toUint8Array = function () {
        return new Uint8Array(this.data);
    };
    RawData.prototype.printOn = function (report) {
        report.tagValuePair("Raw data(hex encoded)", this.toString());
    };
    RawData.prototype.className = function () {
        return "RawData";
    };
    RawData.prototype.size = function () {
        return this.data.byteLength;
    };
    return RawData;
}(Block_1.default));
exports.default = RawData;


/***/ }),

/***/ "./src/DataTypes/SpecificConditionRecord.ts":
/*!**************************************************!*\
  !*** ./src/DataTypes/SpecificConditionRecord.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataType_1 = __webpack_require__(/*! DataTypes/DataType */ "./src/DataTypes/DataType.ts");
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ "./src/utils/FormatStrings.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ "./src/DataTypes/TimeReal.ts");
var SpecificConditionRecord = /** @class */ (function (_super) {
    __extends(SpecificConditionRecord, _super);
    function SpecificConditionRecord(data) {
        var _this = _super.call(this, data) || this;
        _this.entryTime = new TimeReal_1.default(data.slice(0));
        _this.specificConditionType = DataReader_1.default.readUint8(data, 4);
        return _this;
    }
    SpecificConditionRecord.prototype.className = function () {
        return "SpecificConditionRecord";
    };
    SpecificConditionRecord.prototype.title = function () {
        return "";
    };
    SpecificConditionRecord.prototype.size = function () {
        return 5;
    };
    SpecificConditionRecord.prototype.toString = function () {
        var qs = new QString_1.default('SpecificConditionRecord');
        return qs.toString();
    };
    SpecificConditionRecord.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("entryTime"), this.entryTime.toString());
        report.tagValuePair(Translation_1.tr("specificConditionType"), FormatStrings_1.default.specificCondition(this.specificConditionType));
    };
    SpecificConditionRecord.BLOCK_TYPE = 0;
    SpecificConditionRecord.staticSize = 5;
    return SpecificConditionRecord;
}(DataType_1.default));
exports.default = SpecificConditionRecord;


/***/ }),

/***/ "./src/DataTypes/Subblocks.ts":
/*!************************************!*\
  !*** ./src/DataTypes/Subblocks.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataType_1 = __webpack_require__(/*! DataTypes/DataType */ "./src/DataTypes/DataType.ts");
var Subblocks = /** @class */ (function (_super) {
    __extends(Subblocks, _super);
    function Subblocks() {
        var _this = _super.call(this) || this;
        _this.numberOfBytes = 0;
        _this.items = [];
        return _this;
    }
    Subblocks.prototype.append = function (block) {
        if (!block.isDefaultValue()) {
            this.items.push(block);
        }
        this.numberOfBytes += block.size();
        //console.log("this.numberOfBytes: " + this.numberOfBytes);
    };
    Subblocks.prototype.get = function (i) {
        return this.items[i];
    };
    Subblocks.prototype.numberOfBlocks = function () {
        return this.items.length;
    };
    Subblocks.prototype.size = function () {
        return this.numberOfBytes;
    };
    Subblocks.prototype.printOn = function (o) {
        o.writeArray(this, this.title());
    };
    Subblocks.prototype.className = function () {
        return "Subblocks<" + this.constructor.name + ">";
    };
    return Subblocks;
}(DataType_1.default));
exports.default = Subblocks;


/***/ }),

/***/ "./src/DataTypes/SvgDayActivity.ts":
/*!*****************************************!*\
  !*** ./src/DataTypes/SvgDayActivity.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SvgDayGraph_1 = __webpack_require__(/*! DataTypes/SvgDayGraph */ "./src/DataTypes/SvgDayGraph.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var SvgDayActivity = /** @class */ (function (_super) {
    __extends(SvgDayActivity, _super);
    function SvgDayActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SvgDayActivity.prototype.toString = function () {
        return this.addSvgHull("\n\t\t<g transform='scale(0.5,-1) translate(0,-100)'>"
            + this.collected + "\n\t\t</g>"
            + this.drawBorderAndTimeAxis()
            + this.drawLegend(), 900);
    };
    SvgDayActivity.prototype.add = function (from, duration, height, color, title) {
        this.collected += "\n\t\t\t<rect x='" + from + "' fill='" + color + "' width='"
            + duration + "' height='" + Math.floor(height * 80) + "'><title>" + title + "</title></rect>";
    };
    SvgDayActivity.prototype.drawLegend = function () {
        return new QString_1.default("\n\t\t<g style='font-size:16px;text-anchor:left'>" +
            "\n\t\t\t<rect x='730' y='106' fill='purple' width='30' height='16'/><text x='765' y='120' text-anchor='start'>= %6</text>" +
            "\n\t\t\t<rect x='730' y='86' fill='red' width='30' height='16'/><text x='765' y='100' text-anchor='start'>= %1</text>" +
            "\n\t\t\t<rect x='730' y='66' fill='orange' width='30' height='16'/><text x='765' y='80' text-anchor='start'>= %2</text>" +
            "\n\t\t\t<rect x='730' y='46' fill='yellow' width='30' height='16'/><text x='765' y='60' text-anchor='start'>= %3</text>" +
            "\n\t\t\t<rect x='730' y='26' fill='green' width='30' height='16'/><text x='765' y='40' text-anchor='start'>= %4</text>" +
            "\n\t\t\t<rect x='730' y='6' fill='black' width='30' height='16'/><text x='765' y='20' text-anchor='start'>= %5</text>" +
            "\n\t\t</g>")
            .arg(Translation_1.tr("break/rest"))
            .arg(Translation_1.tr("short break"))
            .arg(Translation_1.tr("working"))
            .arg(Translation_1.tr("driving"))
            .arg(Translation_1.tr("available"))
            .arg(Translation_1.tr("unknown")).toString();
    };
    return SvgDayActivity;
}(SvgDayGraph_1.default));
exports.default = SvgDayActivity;


/***/ }),

/***/ "./src/DataTypes/SvgDayGraph.ts":
/*!**************************************!*\
  !*** ./src/DataTypes/SvgDayGraph.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var PictureGenerator_1 = __webpack_require__(/*! ./PictureGenerator */ "./src/DataTypes/PictureGenerator.ts");
var SvgDayGraph = /** @class */ (function (_super) {
    __extends(SvgDayGraph, _super);
    function SvgDayGraph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SvgDayGraph.prototype.drawBorderAndTimeAxis = function () {
        var rv = "";
        rv += "\n\t\t<g style='font-size:16px;text-anchor:middle'>";
        for (var j = 0; j < 25; j++) {
            rv += "\n\t\t\t<text x='" + (j * 30) + "' y='118'>" + j + "</text>";
        }
        rv += "\n\t\t\t<text x='360' y='132'>" + Translation_1.tr("Time of day (UTC)") + "</text>";
        rv += "\n\t\t</g>";
        rv += "\n\t\t<g style='stroke:black;stroke-width:2'>";
        for (var j = 0; j < 25; j++) {
            rv += "\n\t\t\t<line x1='" + (j * 30) + "' y1='100' x2='" + (j * 30) + "' y2='104'/>";
        }
        rv += "\n\t\t\t<polyline points='0,0 720,0 720,100 0,100 0,0' style='fill:none'/>";
        rv += "\n\t\t</g>";
        return rv;
    };
    SvgDayGraph.prototype.addSvgHull = function (content, width) {
        return new QString_1.default("\n<div><svg xmlns='http://www.w3.org/2000/svg' width='%1' height='135'>\n\t<g transform='translate(10,0)'>")
            .arg(width).toString()
            + content
            + "\n\t</g>\n</svg></div>";
    };
    return SvgDayGraph;
}(PictureGenerator_1.default));
exports.default = SvgDayGraph;


/***/ }),

/***/ "./src/DataTypes/TimeReal.ts":
/*!***********************************!*\
  !*** ./src/DataTypes/TimeReal.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Block_1 = __webpack_require__(/*! DataTypes/Block */ "./src/DataTypes/Block.ts");
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var TimeReal = /** @class */ (function (_super) {
    __extends(TimeReal, _super);
    function TimeReal(data) {
        var _this = _super.call(this) || this;
        var tm = DataReader_1.default.readUint32(data, 0);
        if (tm) {
            _this.time = TimeReal.fromTime_t(tm);
        }
        return _this;
    }
    TimeReal.prototype.date = function () {
        return this.time;
    };
    TimeReal.fromTime_t = function (seconds) {
        return new Date(seconds * 1000);
    };
    TimeReal.prototype.toString = function () {
        if (!this.time) {
            return Translation_1.tr("undefined");
        }
        var rv = this.time.toJSON();
        if (rv.match(/.*T00:00:00.000Z$/)) {
            rv = rv.slice(0, 10);
        }
        return rv;
    };
    return TimeReal;
}(Block_1.default));
exports.default = TimeReal;


/***/ }),

/***/ "./src/DataTypes/Timespan.ts":
/*!***********************************!*\
  !*** ./src/DataTypes/Timespan.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Block_1 = __webpack_require__(/*! DataTypes/Block */ "./src/DataTypes/Block.ts");
var TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ "./src/DataTypes/TimeReal.ts");
var Timespan = /** @class */ (function (_super) {
    __extends(Timespan, _super);
    function Timespan(data) {
        var _this = _super.call(this) || this;
        _this.begin = new TimeReal_1.default(data);
        _this.end = new TimeReal_1.default(data.slice(4));
        return _this;
    }
    Timespan.prototype.toString = function () {
        //TODO
        return "From " + this.begin + " To " + this.end;
    };
    return Timespan;
}(Block_1.default));
exports.default = Timespan;


/***/ }),

/***/ "./src/DataTypes/TopLevelBlock.ts":
/*!****************************************!*\
  !*** ./src/DataTypes/TopLevelBlock.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Block_1 = __webpack_require__(/*! DataTypes/Block */ "./src/DataTypes/Block.ts");
var TopLevelBlock = /** @class */ (function (_super) {
    __extends(TopLevelBlock, _super);
    function TopLevelBlock() {
        var _this = _super.call(this) || this;
        _this.validSignature = false;
        _this.hasSignature = false;
        return _this;
    }
    TopLevelBlock.prototype.getBlockType = function () {
        return this.constructor.BLOCK_TYPE;
    };
    TopLevelBlock.BLOCK_TYPE = 0;
    return TopLevelBlock;
}(Block_1.default));
exports.default = TopLevelBlock;


/***/ }),

/***/ "./src/DataTypes/VehicleRegistration.ts":
/*!**********************************************!*\
  !*** ./src/DataTypes/VehicleRegistration.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataType_1 = __webpack_require__(/*! DataTypes/DataType */ "./src/DataTypes/DataType.ts");
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ "./src/utils/FormatStrings.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var VehicleRegistration = /** @class */ (function (_super) {
    __extends(VehicleRegistration, _super);
    function VehicleRegistration(data) {
        var _this = _super.call(this, data) || this;
        _this.vehicleRegistrationNation = DataReader_1.default.readUint8(data, 0);
        _this.vehicleRegistrationNumber = DataReader_1.default.readCodePageString(data, 1, 14).toString();
        return _this;
    }
    VehicleRegistration.prototype.className = function () {
        return "VehicleRegistration";
    };
    VehicleRegistration.prototype.title = function () {
        return "";
    };
    VehicleRegistration.prototype.size = function () {
        return 15;
    };
    VehicleRegistration.prototype.toString = function () {
        var qs = new QString_1.default("%1 (%2)")
            .arg(this.vehicleRegistrationNumber)
            .arg(FormatStrings_1.default.nationNumeric(this.vehicleRegistrationNation)).toString();
        return qs.toString();
    };
    VehicleRegistration.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("vehicleRegistrationNation"), FormatStrings_1.default.nationNumeric(this.vehicleRegistrationNation));
        report.tagValuePair(Translation_1.tr("vehicleRegistrationNumber"), this.vehicleRegistrationNumber);
    };
    VehicleRegistration.BLOCK_TYPE = 0;
    VehicleRegistration.staticSize = 15;
    return VehicleRegistration;
}(DataType_1.default));
exports.default = VehicleRegistration;


/***/ }),

/***/ "./src/DataTypes/VuCalibrationRecord.ts":
/*!**********************************************!*\
  !*** ./src/DataTypes/VuCalibrationRecord.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataType_1 = __webpack_require__(/*! DataTypes/DataType */ "./src/DataTypes/DataType.ts");
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ "./src/utils/FormatStrings.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ "./src/DataTypes/TimeReal.ts");
var VehicleRegistration_1 = __webpack_require__(/*! DataTypes/VehicleRegistration */ "./src/DataTypes/VehicleRegistration.ts");
var FullCardNumber_1 = __webpack_require__(/*! DataTypes/FullCardNumber */ "./src/DataTypes/FullCardNumber.ts");
var VuCalibrationRecord = /** @class */ (function (_super) {
    __extends(VuCalibrationRecord, _super);
    function VuCalibrationRecord(data) {
        var _this = _super.call(this, data) || this;
        _this.calibrationPurpose = DataReader_1.default.readUint8(data, 0);
        _this.workshopName = DataReader_1.default.readCodePageString(data, 1, 36).toString();
        _this.workshopAddress = DataReader_1.default.readCodePageString(data, 37, 36).toString();
        _this.workshopCardNumber = new FullCardNumber_1.default(data.slice(73));
        _this.workshopCardExpiryDate = new TimeReal_1.default(data.slice(91));
        _this.vehicleIdentificationNumber = DataReader_1.default.readString(data, 95, 17).toString();
        _this.vehicleRegistrationIdentification = new VehicleRegistration_1.default(data.slice(112));
        _this.wVehicleCharacteristicConstant = DataReader_1.default.readUint16(data, 127);
        _this.kConstantOfRecordingEquipment = DataReader_1.default.readUint16(data, 129);
        _this.lTyreCircumference = DataReader_1.default.readUint16(data, 131);
        _this.tyreSize = DataReader_1.default.readString(data, 133, 15).toString();
        _this.authorisedSpeed = DataReader_1.default.readUint8(data, 148);
        _this.oldOdometerValue = DataReader_1.default.readUint24(data, 149);
        _this.newOdometerValue = DataReader_1.default.readUint24(data, 152);
        _this.oldTimeValue = new TimeReal_1.default(data.slice(155));
        _this.newTimeValue = new TimeReal_1.default(data.slice(159));
        _this.nextCalibrationDate = new TimeReal_1.default(data.slice(163));
        return _this;
    }
    VuCalibrationRecord.prototype.className = function () {
        return "VuCalibrationRecord";
    };
    VuCalibrationRecord.prototype.title = function () {
        return "VuCalibrationRecord";
    };
    VuCalibrationRecord.prototype.size = function () {
        return 167;
    };
    VuCalibrationRecord.prototype.toString = function () {
        var qs = new QString_1.default('VuCalibrationRecord');
        return qs.toString();
    };
    VuCalibrationRecord.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("calibrationPurpose"), FormatStrings_1.default.calibrationPurpose(this.calibrationPurpose));
        report.tagValuePair(Translation_1.tr("workshopName"), this.workshopName);
        report.tagValuePair(Translation_1.tr("workshopAddress"), this.workshopAddress);
        report.writeBlock(this.workshopCardNumber, Translation_1.tr("workshopCardNumber"));
        report.tagValuePair(Translation_1.tr("workshopCardExpiryDate"), this.workshopCardExpiryDate.toString());
        report.tagValuePair(Translation_1.tr("vehicleIdentificationNumber"), this.vehicleIdentificationNumber);
        report.writeBlock(this.vehicleRegistrationIdentification, Translation_1.tr("vehicleRegistrationIdentification"));
        report.tagValuePair(Translation_1.tr("wVehicleCharacteristicConstant"), new QString_1.default("%1 Impulses/km").arg(this.wVehicleCharacteristicConstant).toString());
        report.tagValuePair(Translation_1.tr("kConstantOfRecordingEquipment"), new QString_1.default("%1 Impulses/km").arg(this.kConstantOfRecordingEquipment).toString());
        report.tagValuePair(Translation_1.tr("lTyreCircumference"), new QString_1.default("%1 /8 mm").arg(this.lTyreCircumference).toString());
        report.tagValuePair(Translation_1.tr("tyreSize"), this.tyreSize);
        report.tagValuePair(Translation_1.tr("authorisedSpeed"), new QString_1.default("%1 km/h").arg(this.authorisedSpeed).toString());
        report.tagValuePair(Translation_1.tr("oldOdometerValue"), new QString_1.default("%1 km").arg(this.oldOdometerValue).toString());
        report.tagValuePair(Translation_1.tr("newOdometerValue"), new QString_1.default("%1 km").arg(this.newOdometerValue).toString());
        report.tagValuePair(Translation_1.tr("oldTimeValue"), this.oldTimeValue.toString());
        report.tagValuePair(Translation_1.tr("newTimeValue"), this.newTimeValue.toString());
        report.tagValuePair(Translation_1.tr("nextCalibrationDate"), this.nextCalibrationDate.toString());
    };
    VuCalibrationRecord.BLOCK_TYPE = 0;
    VuCalibrationRecord.staticSize = 167;
    return VuCalibrationRecord;
}(DataType_1.default));
exports.default = VuCalibrationRecord;


/***/ }),

/***/ "./src/DataTypes/VuEventRecord.ts":
/*!****************************************!*\
  !*** ./src/DataTypes/VuEventRecord.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataType_1 = __webpack_require__(/*! DataTypes/DataType */ "./src/DataTypes/DataType.ts");
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ "./src/utils/FormatStrings.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var CardSlots_1 = __webpack_require__(/*! DataTypes/CardSlots */ "./src/DataTypes/CardSlots.ts");
var Timespan_1 = __webpack_require__(/*! DataTypes/Timespan */ "./src/DataTypes/Timespan.ts");
var VuEventRecord = /** @class */ (function (_super) {
    __extends(VuEventRecord, _super);
    function VuEventRecord(data) {
        var _this = _super.call(this, data) || this;
        _this.eventType = DataReader_1.default.readUint8(data, 0);
        _this.eventRecordPurpose = DataReader_1.default.readUint8(data, 1);
        _this.eventTime = new Timespan_1.default(data.slice(2));
        _this.cardSlots = new CardSlots_1.default(data.slice(10));
        _this.similarEventsNumber = DataReader_1.default.readUint8(data, 82);
        return _this;
    }
    VuEventRecord.prototype.className = function () {
        return "VuEventRecord";
    };
    VuEventRecord.prototype.title = function () {
        return "";
    };
    VuEventRecord.prototype.size = function () {
        return 83;
    };
    VuEventRecord.prototype.toString = function () {
        var qs = new QString_1.default('VuEventRecord');
        return qs.toString();
    };
    VuEventRecord.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("eventType"), FormatStrings_1.default.eventType(this.eventType));
        report.tagValuePair(Translation_1.tr("eventRecordPurpose"), FormatStrings_1.default.eventRecordPurpose(this.eventRecordPurpose));
        report.tagValuePair(Translation_1.tr("eventTime"), this.eventTime.toString());
        report.writeBlock(this.cardSlots, Translation_1.tr("cardSlots"));
        report.tagValuePair(Translation_1.tr("similarEventsNumber"), this.similarEventsNumber);
    };
    VuEventRecord.BLOCK_TYPE = 0;
    VuEventRecord.staticSize = 83;
    return VuEventRecord;
}(DataType_1.default));
exports.default = VuEventRecord;


/***/ }),

/***/ "./src/DataTypes/VuFaultRecord.ts":
/*!****************************************!*\
  !*** ./src/DataTypes/VuFaultRecord.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataType_1 = __webpack_require__(/*! DataTypes/DataType */ "./src/DataTypes/DataType.ts");
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ "./src/utils/FormatStrings.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var CardSlots_1 = __webpack_require__(/*! DataTypes/CardSlots */ "./src/DataTypes/CardSlots.ts");
var Timespan_1 = __webpack_require__(/*! DataTypes/Timespan */ "./src/DataTypes/Timespan.ts");
var VuFaultRecord = /** @class */ (function (_super) {
    __extends(VuFaultRecord, _super);
    function VuFaultRecord(data) {
        var _this = _super.call(this, data) || this;
        _this.eventType = DataReader_1.default.readUint8(data, 0);
        _this.eventRecordPurpose = DataReader_1.default.readUint8(data, 1);
        _this.eventTime = new Timespan_1.default(data.slice(2));
        _this.cardSlots = new CardSlots_1.default(data.slice(10));
        return _this;
    }
    VuFaultRecord.prototype.className = function () {
        return "VuFaultRecord";
    };
    VuFaultRecord.prototype.title = function () {
        return "";
    };
    VuFaultRecord.prototype.size = function () {
        return 82;
    };
    VuFaultRecord.prototype.toString = function () {
        var qs = new QString_1.default('VuFaultRecord');
        return qs.toString();
    };
    VuFaultRecord.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("eventType"), FormatStrings_1.default.eventType(this.eventType));
        report.tagValuePair(Translation_1.tr("eventRecordPurpose"), FormatStrings_1.default.eventRecordPurpose(this.eventRecordPurpose));
        report.tagValuePair(Translation_1.tr("eventTime"), this.eventTime.toString());
        report.writeBlock(this.cardSlots, Translation_1.tr("cardSlots"));
    };
    VuFaultRecord.BLOCK_TYPE = 0;
    VuFaultRecord.staticSize = 82;
    return VuFaultRecord;
}(DataType_1.default));
exports.default = VuFaultRecord;


/***/ }),

/***/ "./src/DataTypes/VuOverspeedingEventRecord.ts":
/*!****************************************************!*\
  !*** ./src/DataTypes/VuOverspeedingEventRecord.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataType_1 = __webpack_require__(/*! DataTypes/DataType */ "./src/DataTypes/DataType.ts");
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var FormatStrings_1 = __webpack_require__(/*! utils/FormatStrings */ "./src/utils/FormatStrings.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var Timespan_1 = __webpack_require__(/*! DataTypes/Timespan */ "./src/DataTypes/Timespan.ts");
var FullCardNumber_1 = __webpack_require__(/*! DataTypes/FullCardNumber */ "./src/DataTypes/FullCardNumber.ts");
var VuOverspeedingEventRecord = /** @class */ (function (_super) {
    __extends(VuOverspeedingEventRecord, _super);
    function VuOverspeedingEventRecord(data) {
        var _this = _super.call(this, data) || this;
        _this.eventType = DataReader_1.default.readUint8(data, 0);
        _this.eventRecordPurpose = DataReader_1.default.readUint8(data, 1);
        _this.eventTime = new Timespan_1.default(data.slice(2));
        _this.maxSpeedValue = DataReader_1.default.readUint8(data, 10);
        _this.averageSpeedValue = DataReader_1.default.readUint8(data, 11);
        _this.cardNumberDriverSlotBegin = new FullCardNumber_1.default(data.slice(12));
        _this.similarEventsNumber = DataReader_1.default.readUint8(data, 30);
        return _this;
    }
    VuOverspeedingEventRecord.prototype.className = function () {
        return "VuOverspeedingEventRecord";
    };
    VuOverspeedingEventRecord.prototype.title = function () {
        return "";
    };
    VuOverspeedingEventRecord.prototype.size = function () {
        return 31;
    };
    VuOverspeedingEventRecord.prototype.toString = function () {
        var qs = new QString_1.default('VuOverspeedingEventRecord');
        return qs.toString();
    };
    VuOverspeedingEventRecord.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("eventType"), FormatStrings_1.default.eventType(this.eventType));
        report.tagValuePair(Translation_1.tr("eventRecordPurpose"), FormatStrings_1.default.eventRecordPurpose(this.eventRecordPurpose));
        report.tagValuePair(Translation_1.tr("eventTime"), this.eventTime.toString());
        report.tagValuePair(Translation_1.tr("maxSpeedValue"), new QString_1.default("%1 km/h").arg(this.maxSpeedValue).toString());
        report.tagValuePair(Translation_1.tr("averageSpeedValue"), new QString_1.default("%1 km/h").arg(this.averageSpeedValue).toString());
        report.writeBlock(this.cardNumberDriverSlotBegin, Translation_1.tr("cardNumberDriverSlotBegin"));
        report.tagValuePair(Translation_1.tr("similarEventsNumber"), this.similarEventsNumber);
    };
    VuOverspeedingEventRecord.BLOCK_TYPE = 0;
    VuOverspeedingEventRecord.staticSize = 31;
    return VuOverspeedingEventRecord;
}(DataType_1.default));
exports.default = VuOverspeedingEventRecord;


/***/ }),

/***/ "./src/DataTypes/VuTimeAdjustmentRecord.ts":
/*!*************************************************!*\
  !*** ./src/DataTypes/VuTimeAdjustmentRecord.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataType_1 = __webpack_require__(/*! DataTypes/DataType */ "./src/DataTypes/DataType.ts");
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ "./src/DataTypes/TimeReal.ts");
var FullCardNumber_1 = __webpack_require__(/*! DataTypes/FullCardNumber */ "./src/DataTypes/FullCardNumber.ts");
var VuTimeAdjustmentRecord = /** @class */ (function (_super) {
    __extends(VuTimeAdjustmentRecord, _super);
    function VuTimeAdjustmentRecord(data) {
        var _this = _super.call(this, data) || this;
        _this.oldTimeValue = new TimeReal_1.default(data.slice(0));
        _this.newTimeValue = new TimeReal_1.default(data.slice(4));
        _this.workshopName = DataReader_1.default.readString(data, 8, 36).toString();
        _this.workshopAddress = DataReader_1.default.readString(data, 44, 36).toString();
        _this.workshopCardNumber = new FullCardNumber_1.default(data.slice(80));
        return _this;
    }
    VuTimeAdjustmentRecord.prototype.className = function () {
        return "VuTimeAdjustmentRecord";
    };
    VuTimeAdjustmentRecord.prototype.title = function () {
        return "";
    };
    VuTimeAdjustmentRecord.prototype.size = function () {
        return 98;
    };
    VuTimeAdjustmentRecord.prototype.toString = function () {
        var qs = new QString_1.default('VuTimeAdjustmentRecord');
        return qs.toString();
    };
    VuTimeAdjustmentRecord.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("oldTimeValue"), this.oldTimeValue.toString());
        report.tagValuePair(Translation_1.tr("newTimeValue"), this.newTimeValue.toString());
        report.tagValuePair(Translation_1.tr("workshopName"), this.workshopName);
        report.tagValuePair(Translation_1.tr("workshopAddress"), this.workshopAddress);
        report.writeBlock(this.workshopCardNumber, Translation_1.tr("workshopCardNumber"));
    };
    VuTimeAdjustmentRecord.BLOCK_TYPE = 0;
    VuTimeAdjustmentRecord.staticSize = 98;
    return VuTimeAdjustmentRecord;
}(DataType_1.default));
exports.default = VuTimeAdjustmentRecord;


/***/ }),

/***/ "./src/EsmFile.ts":
/*!************************!*\
  !*** ./src/EsmFile.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var blockFactory_1 = __webpack_require__(/*! VuBlocks/blockFactory */ "./src/VuBlocks/blockFactory.ts");
var Identification_1 = __webpack_require__(/*! CardBlocks/Identification */ "./src/CardBlocks/Identification.ts");
var CardDriverActivity_1 = __webpack_require__(/*! CardBlocks/CardDriverActivity */ "./src/CardBlocks/CardDriverActivity.ts");
var VuOverview_1 = __webpack_require__(/*! VuBlocks/VuOverview */ "./src/VuBlocks/VuOverview.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var BlockParseError_1 = __webpack_require__(/*! DataTypes/BlockParseError */ "./src/DataTypes/BlockParseError.ts");
var EsmFile = /** @class */ (function () {
    function EsmFile(data) {
        this.fileData = data;
        this.blocks = [];
    }
    EsmFile.parseData = function (data) {
        var block;
        var pos = 0;
        var ef = new EsmFile(data);
        var errorCounter = 0;
        try {
            while (pos < data.byteLength) {
                block = blockFactory_1.blockFactory(data, pos);
                pos += block.size();
                ef.blocks.push(block);
                // console.log("card size: " + block.size());
                if (block instanceof BlockParseError_1.default) {
                    errorCounter += 1;
                    if (errorCounter > 5) {
                        throw new Error("Too many parse errors");
                    }
                }
                else {
                    errorCounter = 0;
                }
            }
        }
        catch (err) {
            console.error("Parse error: " + err.toString());
            console.trace();
            ef.blocks.push(new BlockParseError_1.default(err));
        }
        return ef;
    };
    EsmFile.prototype.printOn = function (report) {
        report.setTitle(this.suggestTitle());
        this.blocks.forEach(function (b) {
            report.writeBlock(b);
        });
    };
    EsmFile.prototype.suggestTitle = function () {
        var rv = "Esm data";
        var ov = EsmFile.findTypeInVector(VuOverview_1.default, this.blocks);
        var id = EsmFile.findTypeInVector(Identification_1.default, this.blocks);
        var act = EsmFile.findTypeInVector(CardDriverActivity_1.default, this.blocks);
        var dateSuggestion;
        if (ov) {
            rv = ov.vehicleRegistrationIdentification.vehicleRegistrationNumber;
            dateSuggestion = ov.currentDateTime.toString();
        }
        if (id) {
            rv = id.cardHolderName.toString();
        }
        if (act) {
            if (act.cardActivityDailyRecords.numberOfBlocks() > 1) {
                dateSuggestion = new QString_1.default(Translation_1.tr("%1 to %2"))
                    .arg(act.cardActivityDailyRecords.get(0).activityRecordDate.toString())
                    .arg(act.cardActivityDailyRecords.get(act.cardActivityDailyRecords.numberOfBlocks() - 1).activityRecordDate.toString())
                    .toString();
            }
        }
        if (dateSuggestion) {
            rv += " " + dateSuggestion;
        }
        return rv;
    };
    EsmFile.findTypeInVector = function (blockType, blocks) {
        var rv;
        blocks.forEach(function (it) {
            if (it instanceof blockType) {
                rv = it;
            }
        });
        return rv;
    };
    return EsmFile;
}());
exports.default = EsmFile;


/***/ }),

/***/ "./src/Reporter/HtmlReporter.ts":
/*!**************************************!*\
  !*** ./src/Reporter/HtmlReporter.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Reporter_1 = __webpack_require__(/*! Reporter/Reporter */ "./src/Reporter/Reporter.ts");
var isEmpty = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
var HtmlReporterTemplate_html_1 = __webpack_require__(/*! Reporter/HtmlReporterTemplate.html */ "./src/Reporter/HtmlReporterTemplate.html.ts");
var HtmlReporter = /** @class */ (function (_super) {
    __extends(HtmlReporter, _super);
    function HtmlReporter() {
        var _this = _super.call(this) || this;
        _this.linkNumber = 0;
        _this.toggleNumber = 0;
        _this.linkCollected = "<h3>Content</h3><ul>";
        return _this;
    }
    HtmlReporter.prototype.renderReport = function () {
        var html = HtmlReporterTemplate_html_1.HTML_TEMPLATE;
        html = html.replace(/\$title/g, this.title);
        html = html.replace("$content", this.collected);
        html = html.replace(/\$show/g, "show");
        html = html.replace(/\$hide/g, "hide");
        html = html.replace("$links", this.linkCollected + "</ul>");
        html = html.replace(/\$version/g, "ReadESM (1.0.2)");
        return html;
    };
    HtmlReporter.prototype.tagValuePair = function (tag, value) {
        var copy = HtmlReporter.replaceAmp(value.toString());
        this.collected += "\n<li>" + tag + ": <b>" + copy + "</b></li>";
    };
    HtmlReporter.prototype.subBlock = function (value, tag) {
        var lTag = tag;
        if (this.nestLevel === 1) {
            this.linkNumber += 1;
            this.linkCollected += "<li><a href='#" + this.linkNumber + "'>" + tag + "</a></li>";
            lTag = "<a name='" + this.linkNumber + "'>" + tag + "</a>";
        }
        if (this.nestLevel === 1) {
            this.collected += "\n<h3>" + lTag + "</h3>";
            this.collected += "<ul>";
            value.printOn(this);
            this.collected += "</ul>";
        }
        else {
            if (!isEmpty(value.toString())) {
                if (isEmpty(tag)) {
                    this.collected += this.toggleAbleBlocks(HtmlReporter.replaceAmp(value.toString()), false);
                }
                else {
                    this.collected += this.toggleAbleBlocks(lTag + ": <b>" + HtmlReporter.replaceAmp(value.toString()) + "</b>", true);
                }
                value.printOn(this);
                this.collected += "</ul></li>";
            }
            else {
                if (!isEmpty(tag)) {
                    this.collected += "\n<li>" + lTag + ": <ul>";
                }
                else {
                    this.collected += "\n<li><ul>";
                }
                value.printOn(this);
                this.collected += "</ul></li>";
            }
        }
    };
    HtmlReporter.prototype.toggleAbleBlocks = function (title, showByDefault) {
        this.toggleNumber += 1;
        return "\n<li>" + title + " \n            (<a href='#link" + this.toggleNumber + "' \n                onclick='return toggle_visibility(" + this.toggleNumber + ");' \n                name='link" + this.toggleNumber + "' \n                id='link" + this.toggleNumber + "'>" + (showByDefault ? 'hide' : 'show') + "</a>)\n                <ul style='" + (showByDefault ? '' : 'display:none') + "' \n                    name='toggled" + this.toggleNumber + "' \n                    id='toggled" + this.toggleNumber + "'>";
    };
    HtmlReporter.prototype.allowSvg = function () {
        return true;
    };
    HtmlReporter.prototype.arrayStart = function (count, title, defaultShown) {
        if (count > 0) {
            this.collected += this.toggleAbleBlocks(count + " " + title, defaultShown);
        }
        else {
            this.collected += "<li>No " + title + ".</li>";
        }
    };
    HtmlReporter.prototype.arrayEnd = function (count) {
        if (count > 0) {
            this.collected += '</ul></li>';
        }
    };
    HtmlReporter.replaceAmp = function (value) {
        return value.replace(/&/g, "&amp;");
    };
    return HtmlReporter;
}(Reporter_1.default));
exports.default = HtmlReporter;


/***/ }),

/***/ "./src/Reporter/HtmlReporterTemplate.html.ts":
/*!***************************************************!*\
  !*** ./src/Reporter/HtmlReporterTemplate.html.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HTML_TEMPLATE = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n\n<html xmlns=\"http://www.w3.org/1999/xhtml\" dir=\"ltr\" lang=\"en-US\">\n\n<head>\n\t<title>$title</title>\n\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n\t<style type=\"text/css\">\n\t\tbody\t\t\t\t{ font-family:sans-serif }\n\t\ttable\t\t\t\t{ border-style:solid; border-collapse:collapse; border-width:2px }\n\t\ttr\t\t\t\t{ border-top-width:1px; border-top-style:dashed }\n\t\ttr:hover\t\t\t{ border-style:outset; background-color:#EEE }\n\t\t.center\t\t\t\t{ text-align:center }\n\t\tth\t\t\t\t{ text-align:left; vertical-align:top }\n\t\ttd, th.max, th.avg, th.min\t{ text-align:left; border-left:1px dotted }\n\t\tcaption\t\t\t\t{ font-size:0.5em }\n\t\tsmall\t\t\t\t{ font-size:0.8em }\n\t</style>\n\t<script type=\"text/javascript\">\n\t\tfunction toggle_visibility(id) {\n\t\t\tvar toggledContent = document.getElementById('toggled' + id);\n\t\t\tvar link = document.getElementById('link' + id);\n\t\t\tif (toggledContent.style.display != 'none') {\n\t\t\t\ttoggledContent.style.display = 'none';\n\t\t\t\tlink.innerHTML = '$show';\n\t\t\t} else {\n\t\t\t\ttoggledContent.style.display = 'block';\n\t\t\t\tlink.innerHTML = '$hide';\n\t\t\t}\n\t\t\treturn false;\n\t\t}\n\t</script>\n</head>\n<body>\n<h1>$title</h1>\n$links\n$content\n<hr/>\nReport generated with <a href=\"http://readesm.sourceforge.net/\" target=\"_blank\">ReadESM</a> <small>($version)</small>.\n</body>\n</html>\n";


/***/ }),

/***/ "./src/Reporter/JsonReporter.ts":
/*!**************************************!*\
  !*** ./src/Reporter/JsonReporter.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Reporter_1 = __webpack_require__(/*! Reporter/Reporter */ "./src/Reporter/Reporter.ts");
var isEmpty = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
var JsonEntry = /** @class */ (function () {
    function JsonEntry(title, className) {
        if (title === void 0) { title = undefined; }
        if (className === void 0) { className = undefined; }
        this.title = title;
        this.className = className;
    }
    JsonEntry.build = function (title, className) {
        if (title === void 0) { title = undefined; }
        if (className === void 0) { className = undefined; }
        return {
            title: title
        };
    };
    return JsonEntry;
}());
var JsonReporter = /** @class */ (function (_super) {
    __extends(JsonReporter, _super);
    function JsonReporter() {
        var _this = _super.call(this) || this;
        _this.jsonCollected = JsonEntry.build();
        _this.nestPath = [_this.jsonCollected];
        _this.currentEntry = _this.jsonCollected;
        return _this;
    }
    JsonReporter.prototype.setTitle = function (newTitle) {
        _super.prototype.setTitle.call(this, newTitle);
        this.jsonCollected['title'] = newTitle;
    };
    JsonReporter.prototype.normalizeJsonReport = function () {
        var r = (this.jsonCollected['CardDriverActivity'] || {}).CardActivityDailyRecord;
        var dailyRecords = {};
        if (r && r.records) {
            r.records.forEach(function (d) {
                dailyRecords[d.activityRecordDate.toString()] = d;
            });
            r['dailyRecords'] = dailyRecords;
            delete r.records;
        }
    };
    JsonReporter.prototype.renderReport = function () {
        this.normalizeJsonReport();
        return JSON.stringify(this.jsonCollected, null, 4);
    };
    JsonReporter.prototype.tagValuePair = function (tag, value) {
        this.currentEntry[tag.toString()] = value;
    };
    JsonReporter.prototype.writeArray = function (ray, title, defaultShown) {
        if (title === void 0) { title = ''; }
        if (defaultShown === void 0) { defaultShown = true; }
        this.nestLevel += 1;
        for (var j = 0; j < ray.numberOfBlocks(); j++) {
            var value = ray.get(j);
            var tag = value.title() || value.toString();
            var newEntry = JsonEntry.build(tag, value.className());
            this.nestPath.push(newEntry);
            if (!this.currentEntry[value.className()]) {
                this.currentEntry[value.className()] = {
                    'records': []
                };
            }
            this.currentEntry[value.className()].records.push(newEntry);
            this.currentEntry = newEntry;
            this.nestLevel += 1;
            this.subBlock(value, tag);
            this.nestPath.pop();
            this.currentEntry = this.nestPath.slice(-1)[0];
            this.nestLevel -= 1;
        }
        this.nestLevel -= 1;
    };
    JsonReporter.prototype.writeBlock = function (value, tag) {
        if (tag === void 0) { tag = ''; }
        if (isEmpty(tag)) {
            tag = value.title() || value.toString();
            var newEntry = JsonEntry.build(tag, value.className());
            this.nestPath.push(newEntry);
            if (!this.currentEntry[value.className()]) {
                this.currentEntry[value.className()] = newEntry;
            }
            else {
                console.warn("The block attribute will override " + this.currentEntry + "::" + value.className);
            }
            this.currentEntry = newEntry;
            this.nestLevel += 1;
            this.subBlock(value, tag);
            this.nestPath.pop();
            this.currentEntry = this.nestPath.slice(-1)[0];
            this.nestLevel -= 1;
        }
        else {
            var newEntry = JsonEntry.build(value.title() || value.toString(), value.className());
            this.currentEntry[tag] = newEntry;
            this.currentEntry = newEntry;
            this.subBlock(value, tag);
            this.currentEntry = this.nestPath.slice(-1)[0];
        }
    };
    JsonReporter.prototype.subBlock = function (value, tag) {
        value.printOn(this);
    };
    JsonReporter.prototype.allowSvg = function () {
        return false;
    };
    JsonReporter.prototype.arrayStart = function (count, title, defaultShown) {
    };
    JsonReporter.prototype.arrayEnd = function (count) {
    };
    return JsonReporter;
}(Reporter_1.default));
exports.default = JsonReporter;


/***/ }),

/***/ "./src/Reporter/Reporter.ts":
/*!**********************************!*\
  !*** ./src/Reporter/Reporter.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isEmpty = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
var Reporter = /** @class */ (function () {
    function Reporter() {
        this.nestLevel = 0;
        this.collected = '';
    }
    Reporter.prototype.setTitle = function (newTitle) {
        this.title = newTitle;
    };
    Reporter.prototype.allowSvg = function () {
        return false;
    };
    Reporter.prototype.tagValuePair = function (tag, value) {
    };
    Reporter.prototype.writeArray = function (ray, title, defaultShown) {
        if (title === void 0) { title = ''; }
        if (defaultShown === void 0) { defaultShown = true; }
        this.arrayStart(ray.numberOfBlocks(), title, defaultShown);
        this.nestLevel += 1;
        for (var j = 0; j < ray.numberOfBlocks(); j++) {
            this.writeBlock(ray.get(j));
        }
        this.nestLevel -= 1;
        this.arrayEnd(ray.numberOfBlocks());
    };
    Reporter.prototype.writeBlock = function (value, tag) {
        if (tag === void 0) { tag = ''; }
        this.nestLevel += 1;
        tag = tag.toString();
        if (isEmpty(tag) && !isEmpty(value.title())) {
            this.subBlock(value, value.title());
        }
        else {
            this.subBlock(value, tag);
        }
        this.nestLevel -= 1;
    };
    Reporter.prototype.subBlock = function (value, tag) {
    };
    Reporter.prototype.arrayStart = function (count, title, defaultShown) {
    };
    Reporter.prototype.arrayEnd = function (count) {
    };
    return Reporter;
}());
exports.default = Reporter;


/***/ }),

/***/ "./src/VuBlocks/Block11.ts":
/*!*********************************!*\
  !*** ./src/VuBlocks/Block11.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var VuBlock_1 = __webpack_require__(/*! VuBlocks/VuBlock */ "./src/VuBlocks/VuBlock.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var Block11Record_1 = __webpack_require__(/*! DataTypes/Block11Record */ "./src/DataTypes/Block11Record.ts");
var Block11 = /** @class */ (function (_super) {
    __extends(Block11, _super);
    function Block11(data) {
        var _this = _super.call(this, data) || this;
        _this.header = DataReader_1.default.readRawData(data, 0, 15);
        _this.block11Record = DataReader_1.default.readSubblocksByCount(Block11Record_1.default, data.slice(15 + 2), 0, (DataReader_1.default.readUint16(data, 15)));
        _this.hasSignature = false;
        return _this;
    }
    Block11.prototype.className = function () {
        return "Block11";
    };
    Block11.prototype.title = function () {
        return "Unknown Block with TREP 0x11";
    };
    Block11.prototype.size = function () {
        return 17;
    };
    Block11.prototype.toString = function () {
        var qs = new QString_1.default('Block11');
        return qs.toString();
    };
    Block11.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("header"), this.header.toString());
        report.writeArray(this.block11Record, Translation_1.tr("block11Record"));
    };
    Block11.BLOCK_TYPE = 0x11;
    return Block11;
}(VuBlock_1.default));
exports.default = Block11;


/***/ }),

/***/ "./src/VuBlocks/Block13.ts":
/*!*********************************!*\
  !*** ./src/VuBlocks/Block13.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var VuBlock_1 = __webpack_require__(/*! VuBlocks/VuBlock */ "./src/VuBlocks/VuBlock.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var Block11Record_1 = __webpack_require__(/*! DataTypes/Block11Record */ "./src/DataTypes/Block11Record.ts");
var Block13 = /** @class */ (function (_super) {
    __extends(Block13, _super);
    function Block13(data) {
        var _this = _super.call(this, data) || this;
        _this.header = DataReader_1.default.readRawData(data, 0, 30);
        _this.block11Record = DataReader_1.default.readSubblocksByCount(Block11Record_1.default, data.slice(30 + 2), 0, (DataReader_1.default.readUint16(data, 30)));
        _this.hasSignature = false;
        return _this;
    }
    Block13.prototype.className = function () {
        return "Block13";
    };
    Block13.prototype.title = function () {
        return "Unknown Block with TREP 0x13";
    };
    Block13.prototype.size = function () {
        return 32;
    };
    Block13.prototype.toString = function () {
        var qs = new QString_1.default('Block13');
        return qs.toString();
    };
    Block13.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("header"), this.header.toString());
        report.writeArray(this.block11Record, Translation_1.tr("block11Record"));
    };
    Block13.BLOCK_TYPE = 0x13;
    return Block13;
}(VuBlock_1.default));
exports.default = Block13;


/***/ }),

/***/ "./src/VuBlocks/Block14.ts":
/*!*********************************!*\
  !*** ./src/VuBlocks/Block14.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var VuBlock_1 = __webpack_require__(/*! VuBlocks/VuBlock */ "./src/VuBlocks/VuBlock.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var Block14 = /** @class */ (function (_super) {
    __extends(Block14, _super);
    function Block14(data) {
        var _this = _super.call(this, data) || this;
        _this.data = DataReader_1.default.readRawData(data, 0, 2);
        _this.hasSignature = false;
        return _this;
    }
    Block14.prototype.className = function () {
        return "Block14";
    };
    Block14.prototype.title = function () {
        return "Unknown Block with TREP 0x14";
    };
    Block14.prototype.size = function () {
        return 2;
    };
    Block14.prototype.toString = function () {
        var qs = new QString_1.default('Block14');
        return qs.toString();
    };
    Block14.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("data"), this.data.toString());
    };
    Block14.BLOCK_TYPE = 0x14;
    return Block14;
}(VuBlock_1.default));
exports.default = Block14;


/***/ }),

/***/ "./src/VuBlocks/VuActivities.ts":
/*!**************************************!*\
  !*** ./src/VuBlocks/VuActivities.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var VuBlock_1 = __webpack_require__(/*! VuBlocks/VuBlock */ "./src/VuBlocks/VuBlock.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ "./src/DataTypes/TimeReal.ts");
var VuActivities = /** @class */ (function (_super) {
    __extends(VuActivities, _super);
    function VuActivities(data) {
        var _this = _super.call(this, data) || this;
        _this.timeReal = new TimeReal_1.default(data.slice(0));
        _this.odometerValueMidnight = DataReader_1.default.readUint24(data, 4);
        return _this;
    }
    VuActivities.prototype.className = function () {
        return "VuActivities";
    };
    VuActivities.prototype.title = function () {
        return "";
    };
    VuActivities.prototype.size = function () {
        return 171;
    };
    VuActivities.prototype.toString = function () {
        var qs = new QString_1.default('VuActivities');
        return qs.toString();
    };
    VuActivities.prototype.printOn = function (report) {
        report.writeBlock(this.timeReal, Translation_1.tr("timeReal"));
        report.tagValuePair(Translation_1.tr("odometerValueMidnight"), this.odometerValueMidnight);
    };
    VuActivities.BLOCK_TYPE = 0x2;
    return VuActivities;
}(VuBlock_1.default));
exports.default = VuActivities;


/***/ }),

/***/ "./src/VuBlocks/VuBlock.ts":
/*!*********************************!*\
  !*** ./src/VuBlocks/VuBlock.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TopLevelBlock_1 = __webpack_require__(/*! DataTypes/TopLevelBlock */ "./src/DataTypes/TopLevelBlock.ts");
var VuBlock = /** @class */ (function (_super) {
    __extends(VuBlock, _super);
    function VuBlock(data) {
        return _super.call(this) || this;
    }
    return VuBlock;
}(TopLevelBlock_1.default));
exports.default = VuBlock;


/***/ }),

/***/ "./src/VuBlocks/VuCardData.ts":
/*!************************************!*\
  !*** ./src/VuBlocks/VuCardData.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var VuBlock_1 = __webpack_require__(/*! VuBlocks/VuBlock */ "./src/VuBlocks/VuBlock.ts");
var VuCardData = /** @class */ (function (_super) {
    __extends(VuCardData, _super);
    function VuCardData(data) {
        var _this = _super.call(this, data) || this;
        _this.hasSignature = false;
        return _this;
    }
    VuCardData.prototype.className = function () {
        return "VuCardData";
    };
    VuCardData.prototype.title = function () {
        return "Card Data";
    };
    VuCardData.prototype.toString = function () {
        var qs = new QString_1.default('VuCardData');
        return qs.toString();
    };
    VuCardData.prototype.printOn = function (report) {
    };
    VuCardData.BLOCK_TYPE = 0x6;
    return VuCardData;
}(VuBlock_1.default));
exports.default = VuCardData;


/***/ }),

/***/ "./src/VuBlocks/VuDetailedSpeedData.ts":
/*!*********************************************!*\
  !*** ./src/VuBlocks/VuDetailedSpeedData.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var VuBlock_1 = __webpack_require__(/*! VuBlocks/VuBlock */ "./src/VuBlocks/VuBlock.ts");
var VuDetailedSpeedData = /** @class */ (function (_super) {
    __extends(VuDetailedSpeedData, _super);
    function VuDetailedSpeedData(data) {
        return _super.call(this, data) || this;
    }
    VuDetailedSpeedData.prototype.className = function () {
        return "VuDetailedSpeedData";
    };
    VuDetailedSpeedData.prototype.title = function () {
        return "";
    };
    VuDetailedSpeedData.prototype.size = function () {
        return 64;
    };
    VuDetailedSpeedData.prototype.toString = function () {
        var qs = new QString_1.default('VuDetailedSpeedData');
        return qs.toString();
    };
    VuDetailedSpeedData.prototype.printOn = function (report) {
    };
    VuDetailedSpeedData.BLOCK_TYPE = 0x4;
    return VuDetailedSpeedData;
}(VuBlock_1.default));
exports.default = VuDetailedSpeedData;


/***/ }),

/***/ "./src/VuBlocks/VuEventsFaults.ts":
/*!****************************************!*\
  !*** ./src/VuBlocks/VuEventsFaults.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var VuBlock_1 = __webpack_require__(/*! VuBlocks/VuBlock */ "./src/VuBlocks/VuBlock.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var VuTimeAdjustmentRecord_1 = __webpack_require__(/*! DataTypes/VuTimeAdjustmentRecord */ "./src/DataTypes/VuTimeAdjustmentRecord.ts");
var VuEventRecord_1 = __webpack_require__(/*! DataTypes/VuEventRecord */ "./src/DataTypes/VuEventRecord.ts");
var TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ "./src/DataTypes/TimeReal.ts");
var VuFaultRecord_1 = __webpack_require__(/*! DataTypes/VuFaultRecord */ "./src/DataTypes/VuFaultRecord.ts");
var VuOverspeedingEventRecord_1 = __webpack_require__(/*! DataTypes/VuOverspeedingEventRecord */ "./src/DataTypes/VuOverspeedingEventRecord.ts");
var VuEventsFaults = /** @class */ (function (_super) {
    __extends(VuEventsFaults, _super);
    function VuEventsFaults(data) {
        var _this = _super.call(this, data) || this;
        _this.vuFaultRecord = DataReader_1.default.readSubblocksByCount(VuFaultRecord_1.default, data.slice(0 + 1), 0, (DataReader_1.default.readUint8(data, 0)));
        _this.vuEventRecord = DataReader_1.default.readSubblocksByCount(VuEventRecord_1.default, data.slice(1 + 1), 0, (DataReader_1.default.readUint8(data, 1)));
        _this.lastOverspeedControlTime = new TimeReal_1.default(data.slice(2));
        _this.firstOverspeedSince = new TimeReal_1.default(data.slice(6));
        _this.numberOfOverspeedSince = DataReader_1.default.readUint8(data, 10);
        _this.vuOverspeedingEventRecord = DataReader_1.default.readSubblocksByCount(VuOverspeedingEventRecord_1.default, data.slice(11 + 1), 0, (DataReader_1.default.readUint8(data, 11)));
        _this.vuTimeAdjustmentRecord = DataReader_1.default.readSubblocksByCount(VuTimeAdjustmentRecord_1.default, data.slice(12 + 1), 0, (DataReader_1.default.readUint8(data, 12)));
        return _this;
    }
    VuEventsFaults.prototype.className = function () {
        return "VuEventsFaults";
    };
    VuEventsFaults.prototype.title = function () {
        return "Events and faults";
    };
    VuEventsFaults.prototype.size = function () {
        return 13;
    };
    VuEventsFaults.prototype.toString = function () {
        var qs = new QString_1.default('VuEventsFaults');
        return qs.toString();
    };
    VuEventsFaults.prototype.printOn = function (report) {
        report.writeArray(this.vuFaultRecord, Translation_1.tr("vuFaultRecord"));
        report.writeArray(this.vuEventRecord, Translation_1.tr("vuEventRecord"));
        report.tagValuePair(Translation_1.tr("lastOverspeedControlTime"), this.lastOverspeedControlTime.toString());
        report.tagValuePair(Translation_1.tr("firstOverspeedSince"), this.firstOverspeedSince.toString());
        report.tagValuePair(Translation_1.tr("numberOfOverspeedSince"), this.numberOfOverspeedSince);
        report.writeArray(this.vuOverspeedingEventRecord, Translation_1.tr("vuOverspeedingEventRecord"));
        report.writeArray(this.vuTimeAdjustmentRecord, Translation_1.tr("vuTimeAdjustmentRecord"));
    };
    VuEventsFaults.BLOCK_TYPE = 0x3;
    return VuEventsFaults;
}(VuBlock_1.default));
exports.default = VuEventsFaults;


/***/ }),

/***/ "./src/VuBlocks/VuOverview.ts":
/*!************************************!*\
  !*** ./src/VuBlocks/VuOverview.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var VuBlock_1 = __webpack_require__(/*! VuBlocks/VuBlock */ "./src/VuBlocks/VuBlock.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var Timespan_1 = __webpack_require__(/*! DataTypes/Timespan */ "./src/DataTypes/Timespan.ts");
var VehicleRegistration_1 = __webpack_require__(/*! DataTypes/VehicleRegistration */ "./src/DataTypes/VehicleRegistration.ts");
var FullCardNumber_1 = __webpack_require__(/*! DataTypes/FullCardNumber */ "./src/DataTypes/FullCardNumber.ts");
var TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ "./src/DataTypes/TimeReal.ts");
var EncryptedCertificate_1 = __webpack_require__(/*! DataTypes/EncryptedCertificate */ "./src/DataTypes/EncryptedCertificate.ts");
var VuOverview = /** @class */ (function (_super) {
    __extends(VuOverview, _super);
    function VuOverview(data) {
        var _this = _super.call(this, data) || this;
        _this.memberStateCertificate = new EncryptedCertificate_1.default(data.slice(0));
        _this.vuCertificate = new EncryptedCertificate_1.default(data.slice(194));
        _this.vehicleIdentificationNumber = DataReader_1.default.readString(data, 388, 17).toString();
        _this.vehicleRegistrationIdentification = new VehicleRegistration_1.default(data.slice(405));
        _this.currentDateTime = new TimeReal_1.default(data.slice(420));
        _this.vuDownloadablePeriod = new Timespan_1.default(data.slice(424));
        _this.CardSlotsStatus = DataReader_1.default.readUint8(data, 432);
        _this.downloadingTime = new TimeReal_1.default(data.slice(433));
        _this.cardNumber = new FullCardNumber_1.default(data.slice(437));
        _this.companyOrWorkshopName = DataReader_1.default.readCodePageString(data, 455, 36).toString();
        return _this;
    }
    VuOverview.prototype.className = function () {
        return "VuOverview";
    };
    VuOverview.prototype.title = function () {
        return "";
    };
    VuOverview.prototype.size = function () {
        return 620;
    };
    VuOverview.prototype.toString = function () {
        var qs = new QString_1.default('VuOverview');
        return qs.toString();
    };
    VuOverview.prototype.printOn = function (report) {
        report.writeBlock(this.memberStateCertificate, Translation_1.tr("memberStateCertificate"));
        report.writeBlock(this.vuCertificate, Translation_1.tr("vuCertificate"));
        report.tagValuePair(Translation_1.tr("vehicleIdentificationNumber"), this.vehicleIdentificationNumber);
        report.writeBlock(this.vehicleRegistrationIdentification, Translation_1.tr("vehicleRegistrationIdentification"));
        report.writeBlock(this.currentDateTime, Translation_1.tr("currentDateTime"));
        report.writeBlock(this.vuDownloadablePeriod, Translation_1.tr("vuDownloadablePeriod"));
        report.tagValuePair(Translation_1.tr("CardSlotsStatus"), this.CardSlotsStatus);
        report.writeBlock(this.downloadingTime, Translation_1.tr("downloadingTime"));
        report.writeBlock(this.cardNumber, Translation_1.tr("cardNumber"));
        report.tagValuePair(Translation_1.tr("companyOrWorkshopName"), this.companyOrWorkshopName);
    };
    VuOverview.BLOCK_TYPE = 0x1;
    return VuOverview;
}(VuBlock_1.default));
exports.default = VuOverview;


/***/ }),

/***/ "./src/VuBlocks/VuTechnical.ts":
/*!*************************************!*\
  !*** ./src/VuBlocks/VuTechnical.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
var VuBlock_1 = __webpack_require__(/*! VuBlocks/VuBlock */ "./src/VuBlocks/VuBlock.ts");
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var TimeReal_1 = __webpack_require__(/*! DataTypes/TimeReal */ "./src/DataTypes/TimeReal.ts");
var VuCalibrationRecord_1 = __webpack_require__(/*! DataTypes/VuCalibrationRecord */ "./src/DataTypes/VuCalibrationRecord.ts");
var ExtendedSerialNumber_1 = __webpack_require__(/*! DataTypes/ExtendedSerialNumber */ "./src/DataTypes/ExtendedSerialNumber.ts");
var VuTechnical = /** @class */ (function (_super) {
    __extends(VuTechnical, _super);
    function VuTechnical(data) {
        var _this = _super.call(this, data) || this;
        _this.vuManufacturerName = DataReader_1.default.readCodePageString(data, 0, 36).toString();
        _this.vuManufacturerAddress = DataReader_1.default.readCodePageString(data, 36, 36).toString();
        _this.vuPartNumber = DataReader_1.default.readString(data, 72, 16).toString();
        _this.vuSerialNumber = new ExtendedSerialNumber_1.default(data.slice(88));
        _this.vuSoftwareVersion = DataReader_1.default.readString(data, 96, 4).toString();
        _this.vuSoftInstallationDate = new TimeReal_1.default(data.slice(100));
        _this.vuManufacturingDate = new TimeReal_1.default(data.slice(104));
        _this.vuApprovalNumber = DataReader_1.default.readString(data, 108, 8).toString();
        _this.sensorSerialNumber = new ExtendedSerialNumber_1.default(data.slice(116));
        _this.sensorApprovalNumber = DataReader_1.default.readString(data, 124, 8).toString();
        _this.sensorPairingDateFirst = new TimeReal_1.default(data.slice(132));
        _this.vuCalibrationRecord = DataReader_1.default.readSubblocksByCount(VuCalibrationRecord_1.default, data.slice(136 + 1), 0, (DataReader_1.default.readUint8(data, 136)));
        return _this;
    }
    VuTechnical.prototype.className = function () {
        return "VuTechnical";
    };
    VuTechnical.prototype.title = function () {
        return "Technical Data";
    };
    VuTechnical.prototype.size = function () {
        return 137;
    };
    VuTechnical.prototype.toString = function () {
        var qs = new QString_1.default('VuTechnical');
        return qs.toString();
    };
    VuTechnical.prototype.printOn = function (report) {
        report.tagValuePair(Translation_1.tr("vuManufacturerName"), this.vuManufacturerName);
        report.tagValuePair(Translation_1.tr("vuManufacturerAddress"), this.vuManufacturerAddress);
        report.tagValuePair(Translation_1.tr("vuPartNumber"), this.vuPartNumber);
        report.writeBlock(this.vuSerialNumber, Translation_1.tr("vuSerialNumber"));
        report.tagValuePair(Translation_1.tr("vuSoftwareVersion"), this.vuSoftwareVersion);
        report.tagValuePair(Translation_1.tr("vuSoftInstallationDate"), this.vuSoftInstallationDate.toString());
        report.tagValuePair(Translation_1.tr("vuManufacturingDate"), this.vuManufacturingDate.toString());
        report.tagValuePair(Translation_1.tr("vuApprovalNumber"), this.vuApprovalNumber);
        report.writeBlock(this.sensorSerialNumber, Translation_1.tr("sensorSerialNumber"));
        report.tagValuePair(Translation_1.tr("sensorApprovalNumber"), this.sensorApprovalNumber);
        report.tagValuePair(Translation_1.tr("sensorPairingDateFirst"), this.sensorPairingDateFirst.toString());
        report.writeArray(this.vuCalibrationRecord, Translation_1.tr("vuCalibrationRecord"));
    };
    VuTechnical.BLOCK_TYPE = 0x5;
    return VuTechnical;
}(VuBlock_1.default));
exports.default = VuTechnical;


/***/ }),

/***/ "./src/VuBlocks/blockFactory.ts":
/*!**************************************!*\
  !*** ./src/VuBlocks/blockFactory.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cardBlockFactory_1 = __webpack_require__(/*! CardBlocks/cardBlockFactory */ "./src/CardBlocks/cardBlockFactory.ts");
var vuBlockFactory_1 = __webpack_require__(/*! VuBlocks/vuBlockFactory */ "./src/VuBlocks/vuBlockFactory.ts");
function blockFactory(data, pos) {
    if (data[pos] == 0x76) {
        return vuBlockFactory_1.vuBlockFactory(data, pos);
    }
    else {
        return cardBlockFactory_1.cardBlockFactory(data, pos);
    }
}
exports.blockFactory = blockFactory;


/***/ }),

/***/ "./src/VuBlocks/vuBlockFactory.ts":
/*!****************************************!*\
  !*** ./src/VuBlocks/vuBlockFactory.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = __webpack_require__(/*! utils/DataReader */ "./src/utils/DataReader.ts");
var VuBlock_1 = __webpack_require__(/*! VuBlocks/VuBlock */ "./src/VuBlocks/VuBlock.ts");
var Converter_1 = __webpack_require__(/*! utils/Converter */ "./src/utils/Converter.ts");
var VuOverview_1 = __webpack_require__(/*! VuBlocks/VuOverview */ "./src/VuBlocks/VuOverview.ts");
var VuTechnical_1 = __webpack_require__(/*! VuBlocks/VuTechnical */ "./src/VuBlocks/VuTechnical.ts");
var VuCardData_1 = __webpack_require__(/*! VuBlocks/VuCardData */ "./src/VuBlocks/VuCardData.ts");
var Block11_1 = __webpack_require__(/*! VuBlocks/Block11 */ "./src/VuBlocks/Block11.ts");
var Block13_1 = __webpack_require__(/*! VuBlocks/Block13 */ "./src/VuBlocks/Block13.ts");
var Block14_1 = __webpack_require__(/*! VuBlocks/Block14 */ "./src/VuBlocks/Block14.ts");
var VuEventsFaults_1 = __webpack_require__(/*! VuBlocks/VuEventsFaults */ "./src/VuBlocks/VuEventsFaults.ts");
var VuActivities_1 = __webpack_require__(/*! VuBlocks/VuActivities */ "./src/VuBlocks/VuActivities.ts");
var VuDetailedSpeedData_1 = __webpack_require__(/*! VuBlocks/VuDetailedSpeedData */ "./src/VuBlocks/VuDetailedSpeedData.ts");
var BlockParseError_1 = __webpack_require__(/*! DataTypes/BlockParseError */ "./src/DataTypes/BlockParseError.ts");
function vuBlockFactory(data, pos) {
    var blockType = DataReader_1.default.readUint8(data, pos + 1);
    //console.log("vuBlockFactory: " + Converter.dec2hexString(blockType));
    data = data.slice(pos);
    if (data.byteLength < 2 || data[0] != 0x76) {
        return new VuBlock_1.default(data);
    }
    switch (blockType) {
        case VuOverview_1.default.BLOCK_TYPE: {
            return new VuOverview_1.default(data);
        }
        case VuTechnical_1.default.BLOCK_TYPE: {
            return new VuTechnical_1.default(data);
        }
        case VuCardData_1.default.BLOCK_TYPE: {
            return new VuCardData_1.default(data);
        }
        case Block11_1.default.BLOCK_TYPE: {
            return new Block11_1.default(data);
        }
        case Block13_1.default.BLOCK_TYPE: {
            return new Block13_1.default(data);
        }
        case Block14_1.default.BLOCK_TYPE: {
            return new Block14_1.default(data);
        }
        case VuEventsFaults_1.default.BLOCK_TYPE: {
            return new VuEventsFaults_1.default(data);
        }
        case VuActivities_1.default.BLOCK_TYPE: {
            return new VuActivities_1.default(data);
        }
        case VuDetailedSpeedData_1.default.BLOCK_TYPE: {
            return new VuDetailedSpeedData_1.default(data);
        }
        default: {
            console.log("Unknown vu block type: " + Converter_1.default.dec2hexString(blockType));
            return new BlockParseError_1.default("Unknown vu block type: " + Converter_1.default.dec2hexString(blockType));
        }
    }
}
exports.vuBlockFactory = vuBlockFactory;


/***/ }),

/***/ "./src/main.EsmDownloader.ts":
/*!***********************************!*\
  !*** ./src/main.EsmDownloader.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fileDownload = __webpack_require__(/*! js-file-download */ "./node_modules/js-file-download/file-download.js"); // use require() because it fails with import
var EsmFile_1 = __webpack_require__(/*! EsmFile */ "./src/EsmFile.ts");
var JsonReporter_1 = __webpack_require__(/*! Reporter/JsonReporter */ "./src/Reporter/JsonReporter.ts");
var HtmlReporter_1 = __webpack_require__(/*! Reporter/HtmlReporter */ "./src/Reporter/HtmlReporter.ts");
function downloadEsmAsJson(filename) {
    console.log("downloadEsmAsJson: " + filename);
    readEsmData(filename).then(function (data) {
        var j = convertToJson(data);
        var jsonData = JSON.stringify(j, null, 4);
        saveFile(jsonData, filename + '.json', 'application/json');
    });
}
exports.downloadEsmAsJson = downloadEsmAsJson;
function downloadEsmAsHtml(filename) {
    console.log("downloadEsmAsHtml: " + filename);
    readEsmData(filename).then(function (data) {
        var html = convertToHtml(data);
        saveFile(html, filename + '.html', 'text/html');
    });
}
exports.downloadEsmAsHtml = downloadEsmAsHtml;
function convertToJson(data) {
    var ef = EsmFile_1.default.parseData(data);
    var report = new JsonReporter_1.default();
    ef.printOn(report);
    report.renderReport();
    return report.jsonCollected;
}
exports.convertToJson = convertToJson;
function convertToHtml(data) {
    var ef = EsmFile_1.default.parseData(data);
    var report = new HtmlReporter_1.default();
    ef.printOn(report);
    return report.renderReport();
}
exports.convertToHtml = convertToHtml;
function saveFile(data, filename, mime) {
    fileDownload(data, filename.replace(/^.*\//, ''), mime);
}
exports.saveFile = saveFile;
function readEsmData(filename) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", filename);
        xhr.responseType = "arraybuffer";
        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(xhr.response);
            }
            else {
                reject(Error("Failed to GET filename " + filename + " HTTP " + xhr.status + " - " + xhr.statusText));
            }
        };
        xhr.onerror = function () {
            var msg = "Connection Error while GET filename " + filename;
            console.error(msg);
            reject(Error(msg));
        };
        xhr.send();
    });
}
exports.readEsmData = readEsmData;


/***/ }),

/***/ "./src/utils/Converter.ts":
/*!********************************!*\
  !*** ./src/utils/Converter.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Converter = /** @class */ (function () {
    function Converter() {
    }
    Converter.dec2hexString = function (dec) {
        // source: https://gist.github.com/agirorn/0e740d012b620968225de58859ccef5c
        return '0x' + (dec + 0x10000).toString(16).substr(-4);
    };
    Converter.concatArrays = function (a1, a2) {
        var b1 = new Uint8Array(a1);
        var b2 = new Uint8Array(a2);
        var b = new Uint8Array(b1.byteLength + b2.byteLength);
        b.set(b1, 0);
        b.set(b2, b1.byteLength);
        return b.buffer;
    };
    Converter.bcdbyte = function (c) {
        var n = 0;
        var m = 1;
        n += (c & 0x0F) * m;
        n += ((c >> 4) & 0x0F) * m * 10;
        return n;
    };
    return Converter;
}());
exports.default = Converter;


/***/ }),

/***/ "./src/utils/DataReader.ts":
/*!*********************************!*\
  !*** ./src/utils/DataReader.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Converter_1 = __webpack_require__(/*! utils/Converter */ "./src/utils/Converter.ts");
var RawData_1 = __webpack_require__(/*! DataTypes/RawData */ "./src/DataTypes/RawData.ts");
var Subblocks_1 = __webpack_require__(/*! DataTypes/Subblocks */ "./src/DataTypes/Subblocks.ts");
var DataReader = /** @class */ (function () {
    function DataReader() {
    }
    DataReader.readUint8 = function (data, pos) {
        return new DataView(data.slice(pos, pos + 1)).getUint8(0);
    };
    DataReader.readUint16 = function (data, pos) {
        return new DataView(data.slice(pos, pos + 2)).getUint16(0);
    };
    DataReader.readUint24 = function (data, pos) {
        return new DataView(Converter_1.default.concatArrays([0], data.slice(pos, pos + 3))).getUint32(0);
    };
    DataReader.readUint32 = function (data, pos) {
        return new DataView(data.slice(pos, pos + 4)).getUint32(0);
    };
    DataReader.readBCD16 = function (data, pos) {
        var start = new Uint8Array(data.slice(pos, pos + 2));
        var rv = (start[0] >> 4) * 1000 + (start[0] & 0x0F) * 100 + (start[1] >> 4) * 10 + (start[1] & 0x0F);
        // console.log("readBCD16: " + RawData.toHexString(start) + " -> " + rv + " (" + DataReader.readUint16(data, pos) + ")");
        return rv;
    };
    DataReader.readRawData = function (data, pos, length) {
        return new RawData_1.default(data.slice(pos), length);
    };
    DataReader.readString = function (data, pos, length) {
        var rd = new RawData_1.default(data.slice(pos), length);
        var rv = rd.toTextString();
        rv = rv.replace(/\s+$/g, '');
        return rv;
    };
    DataReader.readCodePageString = function (data, pos, length) {
        var stringData = new Uint8Array(data.slice(pos, pos + length));
        if (!DataReader.checkString(stringData.slice(1, -1))) {
            return "Not a string: " + RawData_1.default.toHexString(stringData);
        }
        if (DataReader.isISO8859CodePageNumber(stringData[0])) {
            // add support for codecs
        }
        else {
            console.log(stringData[0] + " is not a code page");
        }
        var rv = String.fromCharCode.apply(null, stringData.slice(1, -1));
        rv = rv.replace(/\0/g, ' ');
        rv = rv.replace(/\s+$/g, '');
        return rv;
    };
    DataReader.isISO8859CodePageNumber = function (number) {
        return number <= 16 && number != 0 && number != 12;
    };
    DataReader.checkString = function (str) {
        for (var j = 0; j < str.length; ++j) {
            if (str[j] > 0x20 && str[j] != 0xFF && String.fromCharCode(str[j]) != '?') {
                return true;
            }
        }
        return false;
    };
    DataReader.readSubblocksByCount = function (blockType, data, pos, count) {
        var blocks = new Subblocks_1.default();
        for (var i = 0; i < count; i++) {
            var b = blockType.build(data.slice(pos));
            blocks.append(b);
            pos += b.size();
        }
        return blocks;
    };
    DataReader.readSubblocksByLength = function (blockType, data, pos, length) {
        var i = 0;
        var blocks = new Subblocks_1.default();
        while (i < length) {
            //console.log(`Read subblock ${blockType.name} at ${i} of ${length}`);
            var b = blockType.build(data.slice(pos + i));
            blocks.append(b);
            i += b.size();
        }
        return blocks;
    };
    return DataReader;
}());
exports.default = DataReader;


/***/ }),

/***/ "./src/utils/FormatStrings.ts":
/*!************************************!*\
  !*** ./src/utils/FormatStrings.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Translation_1 = __webpack_require__(/*! utils/Translation */ "./src/utils/Translation.ts");
var QString_1 = __webpack_require__(/*! utils/QString */ "./src/utils/QString.ts");
function QT_TR_NOOP(x) {
    return x;
}
var FormatStrings = /** @class */ (function () {
    function FormatStrings() {
    }
    FormatStrings.eventType = function (etype) {
        var major = etype >> 4;
        var minor = etype & 0xF;
        var rv = Number(etype) + " - ";
        if (major == 0) {
            rv += Translation_1.tr("General events: ");
            var generalEvents = [
                QT_TR_NOOP("No further details"),
                QT_TR_NOOP("Insertion of a non-valid card"),
                QT_TR_NOOP("Card conflict"),
                QT_TR_NOOP("Time overlap"),
                QT_TR_NOOP("Driving without an appropriate card"),
                QT_TR_NOOP("Card insertion while driving"),
                QT_TR_NOOP("Last card session not correctly closed"),
                QT_TR_NOOP("Over speeding"),
                QT_TR_NOOP("Power supply interruption"),
                QT_TR_NOOP("Motion data error")
            ];
            if (minor <= 0x9) {
                rv += Translation_1.tr(generalEvents[minor]);
            }
            else {
                rv += Translation_1.tr("RFU");
            }
        }
        else if (major == 1) {
            rv += Translation_1.tr("Vehicle unit related security breach attempt events: ");
            var sevents = [
                QT_TR_NOOP("No further details"),
                QT_TR_NOOP("Motion sensor authentication failure"),
                QT_TR_NOOP("Tachograph card authentication failure"),
                QT_TR_NOOP("Unauthorised change of motion sensor"),
                QT_TR_NOOP("Card data input integrity error"),
                QT_TR_NOOP("Stored user data integrity error"),
                QT_TR_NOOP("Internal data transfer error"),
                QT_TR_NOOP("Unauthorised case opening"),
                QT_TR_NOOP("Hardware sabotage")
            ];
            if (minor <= 0x8) {
                rv += Translation_1.tr(sevents[minor]);
            }
            else {
                rv += Translation_1.tr("RFU");
            }
        }
        else if (major == 2) {
            rv += Translation_1.tr("Sensor related security breach attempt events: ");
            var sevents = [
                QT_TR_NOOP("No further details"),
                QT_TR_NOOP("Authentication failure"),
                QT_TR_NOOP("Stored data integrity error"),
                QT_TR_NOOP("Internal data transfer error"),
                QT_TR_NOOP("Unauthorised case opening"),
                QT_TR_NOOP("Hardware sabotage")
            ];
            if (minor <= 0x5) {
                rv += Translation_1.tr(sevents[minor]);
            }
            else {
                rv += Translation_1.tr("RFU");
            }
        }
        else if (major == 3) {
            rv += Translation_1.tr("Recording equipment faults: ");
            var sevents = [
                QT_TR_NOOP("No further details"),
                QT_TR_NOOP("VU internal fault"),
                QT_TR_NOOP("Printer fault"),
                QT_TR_NOOP("Display fault"),
                QT_TR_NOOP("Downloading fault"),
                QT_TR_NOOP("Sensor fault")
            ];
            if (minor <= 0x5) {
                rv += Translation_1.tr(sevents[minor]);
            }
            else {
                rv += Translation_1.tr("RFU");
            }
        }
        else if (major == 4) {
            rv += Translation_1.tr("Card faults: ");
            var sevents = [
                "No further details"
            ];
            if (minor <= 0x1) {
                rv += Translation_1.tr(sevents[minor]);
            }
            else {
                rv += Translation_1.tr("RFU");
            }
        }
        else if (major >= 5 && major <= 7) {
            rv += Translation_1.tr("RFU groups");
        }
        else if (major >= 8 && major <= 0xF) {
            rv += Translation_1.tr("Manufacturer specific");
        }
        else {
            rv += Translation_1.tr("(error: blame programmer)");
        }
        return rv;
    };
    FormatStrings.eventRecordPurpose = function (etype) {
        var recordingPurposes = [
            QT_TR_NOOP("one of the 10 most recent (or last) events or faults"),
            QT_TR_NOOP("the longest event for one of the last 10 days of occurrence"),
            QT_TR_NOOP("one of the 5 longest events over the last 365 days"),
            QT_TR_NOOP("the last event for one of the last 10 days of occurrence"),
            QT_TR_NOOP("the most serious event for one of the last 10 days of occurrence"),
            QT_TR_NOOP("one of the 5 most serious events over the last 365 days"),
            QT_TR_NOOP("the first event or fault having occurred after the last calibration"),
            QT_TR_NOOP("an active/on-going event or fault")
        ];
        if (etype <= 7) {
            return Translation_1.tr(recordingPurposes[etype]);
        }
        else if (8 <= etype && etype <= 0x7F) {
            return Translation_1.tr("RFU");
        }
        else if (0x80 <= etype && etype <= 0xFF) {
            return Translation_1.tr("Manufacturer specific");
        }
        else {
            return Translation_1.tr("(error: blame programmer)");
        }
    };
    FormatStrings.nationNumeric = function (country) {
        var countries = [
            QT_TR_NOOP("No information available"),
            QT_TR_NOOP("Austria"),
            QT_TR_NOOP("Albania"),
            QT_TR_NOOP("Andorra"),
            QT_TR_NOOP("Armenia"),
            QT_TR_NOOP("Azerbaijan"),
            QT_TR_NOOP("Belgium"),
            QT_TR_NOOP("Bulgaria"),
            QT_TR_NOOP("Bosnia and Herzegovina"),
            QT_TR_NOOP("Belarus"),
            QT_TR_NOOP("Switzerland"),
            QT_TR_NOOP("Cyprus"),
            QT_TR_NOOP("Czech Republic"),
            QT_TR_NOOP("Germany"),
            QT_TR_NOOP("Denmark"),
            QT_TR_NOOP("Spain"),
            QT_TR_NOOP("Estonia"),
            QT_TR_NOOP("France"),
            QT_TR_NOOP("Finland"),
            QT_TR_NOOP("Liechtenstein"),
            QT_TR_NOOP("Faeroe Islands"),
            QT_TR_NOOP("United Kingdom"),
            QT_TR_NOOP("Georgia"),
            QT_TR_NOOP("Greece"),
            QT_TR_NOOP("Hungary"),
            QT_TR_NOOP("Croatia"),
            QT_TR_NOOP("Italy"),
            QT_TR_NOOP("Ireland"),
            QT_TR_NOOP("Iceland"),
            QT_TR_NOOP("Kazakhstan"),
            QT_TR_NOOP("Luxembourg"),
            QT_TR_NOOP("Lithuania"),
            QT_TR_NOOP("Latvia"),
            QT_TR_NOOP("Malta"),
            QT_TR_NOOP("Monaco"),
            QT_TR_NOOP("Republic of Moldova"),
            QT_TR_NOOP("Macedonia"),
            QT_TR_NOOP("Norway"),
            QT_TR_NOOP("Netherlands"),
            QT_TR_NOOP("Portugal"),
            QT_TR_NOOP("Poland"),
            QT_TR_NOOP("Romania"),
            QT_TR_NOOP("San Marino"),
            QT_TR_NOOP("Russian Federation"),
            QT_TR_NOOP("Sweden"),
            QT_TR_NOOP("Slovakia"),
            QT_TR_NOOP("Slovenia"),
            QT_TR_NOOP("Turkmenistan"),
            QT_TR_NOOP("Turkey"),
            QT_TR_NOOP("Ukraine"),
            QT_TR_NOOP("Vatican City"),
            QT_TR_NOOP("Yugoslavia"),
            QT_TR_NOOP("Montenegro"),
            QT_TR_NOOP("Serbia"),
            QT_TR_NOOP("Uzbekistan"),
            QT_TR_NOOP("Tajikistan")
        ];
        if (country <= 0x37) {
            return Translation_1.tr(countries[country]);
        }
        if (country <= 0xFC) {
            return new QString_1.default(Translation_1.tr("%1 - Reserved for future use"))
                .arg(country).toString();
        }
        if (country == 0xFD) {
            return Translation_1.tr("European Community");
        }
        if (country == 0xFE) {
            return Translation_1.tr("Europe, but not EC and not registered");
        }
        if (country == 0xFF) {
            return Translation_1.tr("outside of Europe, not registered");
        }
        return Translation_1.tr("error in nationNumeric");
    };
    FormatStrings.specificCondition = function (scond) {
        var specificConditions = [
            QT_TR_NOOP("RFU"),
            QT_TR_NOOP("Out of scope - Begin"),
            QT_TR_NOOP("Out of scope - End"),
            QT_TR_NOOP("Ferry/Train crossing")
        ];
        if (scond <= 0x3) {
            return Translation_1.tr(specificConditions[scond]);
        }
        else {
            return Translation_1.tr("RFU");
        }
    };
    FormatStrings.calibrationPurpose = function (cpurp) {
        var cpurps = [
            QT_TR_NOOP("reserved value (should not appear)"),
            QT_TR_NOOP("activation: recording of calibration parameters known, at the moment of the VU activation"),
            QT_TR_NOOP("first installation: first calibration of the VU after its activation"),
            QT_TR_NOOP("installation: first calibration of the VU in the current vehicle"),
            QT_TR_NOOP("periodic inspection")
        ];
        if (cpurp <= 4) {
            return Translation_1.tr(cpurps[cpurp]);
        }
        else {
            return Translation_1.tr("(not specified)");
        }
    };
    FormatStrings.controlType = function (ctype) {
        var rv = "";
        if (ctype & (1 << 7)) {
            rv += Translation_1.tr("card downloaded") + ", ";
        }
        if (ctype & (1 << 6)) {
            rv += Translation_1.tr("VU downloaded") + ", ";
        }
        if (ctype & (1 << 5)) {
            rv += Translation_1.tr("printing done") + ", ";
        }
        if (ctype & (1 << 4)) {
            rv += Translation_1.tr("display used") + ", ";
        }
        return rv;
    };
    FormatStrings.equipmentType = function (value) {
        var codes = [
            QT_TR_NOOP("Reserved"),
            QT_TR_NOOP("Driver Card"),
            QT_TR_NOOP("Workshop Card"),
            QT_TR_NOOP("Control Card"),
            QT_TR_NOOP("Company Card"),
            QT_TR_NOOP("Manufacturing Card"),
            QT_TR_NOOP("Vehicle Unit"),
            QT_TR_NOOP("Motion Sensor")
        ];
        var rv;
        if (value >= 0 && value <= 7) {
            rv = Translation_1.tr(codes[value]);
        }
        else {
            rv = new QString_1.default(Translation_1.tr("RFU: %1")).arg(value).toString();
        }
        return rv;
    };
    FormatStrings.dailyWorkPeriod = function (value) {
        var vals = [
            QT_TR_NOOP("Begin, related time = card insertion time or time of entry"),
            QT_TR_NOOP("End, related time = card withdrawal time or time of entry"),
            QT_TR_NOOP("Begin, related time manually entered (start time)"),
            QT_TR_NOOP("End, related time manually entered (end of work period)"),
            QT_TR_NOOP("Begin, related time assumed by VU"),
            QT_TR_NOOP("End, related time assumed by VU")
        ];
        if (value <= 5) {
            return Translation_1.tr(vals[value]);
        }
        else {
            return new QString_1.default(Translation_1.tr("(not specified: %1)"))
                .arg(value).toString();
        }
    };
    FormatStrings.regionNumeric = function (region) {
        var vals = [
            QT_TR_NOOP("No information available"),
            QT_TR_NOOP("Andalucía"),
            QT_TR_NOOP("Aragón"),
            QT_TR_NOOP("Asturias"),
            QT_TR_NOOP("Cantabria"),
            QT_TR_NOOP("Cataluña"),
            QT_TR_NOOP("Castilla-León"),
            QT_TR_NOOP("Castilla-La-Mancha"),
            QT_TR_NOOP("Valencia"),
            QT_TR_NOOP("Extremadura"),
            QT_TR_NOOP("Galicia"),
            QT_TR_NOOP("Baleares"),
            QT_TR_NOOP("Canarias"),
            QT_TR_NOOP("La Rioja"),
            QT_TR_NOOP("Madrid"),
            QT_TR_NOOP("Murcia"),
            QT_TR_NOOP("Navarra"),
            QT_TR_NOOP("País Vasco"),
            QT_TR_NOOP("Ceuta"),
            QT_TR_NOOP("Melilla")
        ];
        if (region <= 0x13) {
            return Translation_1.tr(vals[region]);
        }
        else {
            return new QString_1.default(Translation_1.tr("Unknown region %1"))
                .arg(region).toString();
        }
    };
    FormatStrings.previous2 = function (now, past) {
        return new QString_1.default(Translation_1.tr("%1 (formerly %2)"))
            .arg(now).arg(past).toString();
    };
    FormatStrings.previous3 = function (now, past, ancientpast) {
        return new QString_1.default(Translation_1.tr("%1 (formerly %2 and before that %3)"))
            .arg(now).arg(past).arg(ancientpast).toString();
    };
    FormatStrings.previous4 = function (now, past, ancientpast, prehistory) {
        return new QString_1.default(Translation_1.tr("%1 (formerly %2, before that %3 and before that %4)"))
            .arg(now).arg(past).arg(ancientpast).arg(prehistory).toString();
    };
    FormatStrings.manufacturerCode = function (code) {
        switch (code) {
            case 0x00: return Translation_1.tr("No information available");
            case 0x01: return Translation_1.tr("Reserved value");
            case 0x10: return "Actia S.A.";
            case 0x11: return "Security Printing and Systems Ltd.";
            case 0x12: return FormatStrings.previous2("Austria Card Plastikkarten und Ausweissysteme GmbH", "Austria Card");
            case 0x13: return "Agencija za komercijalnu djelatnost d.o.o (AKD)";
            case 0x15: return "ASELSAN";
            case 0x17: return "Real Casa de la Moneda";
            case 0x18: return "BARBÉ S.R.L.";
            case 0x20: return "CETIS d.d.";
            case 0x21: return "certSIGN";
            case 0x22: return "RUE Cryptotech";
            case 0x23: return "Centr Modernizatcii Transporta OOO (CMT - LLC)";
            case 0x24: return "Pars Ar-Ge Ltd";
            case 0x28: return "Datakom";
            case 0x29: return "DVLA";
            case 0x30: return FormatStrings.previous4("IDEMIA The Netherlands BV", "Morpho BV", "Sdu Identification B.V.", "Enschedé/Sdu B.V.");
            case 0x32: return FormatStrings.previous2("intellic GmbH", "EFKON AG.");
            case 0x38: return "Fábrica Nacional de Moneda y Timbre";
            case 0x39: return "First Print Yard";
            case 0x40: return "Giesecke & Devrient GmbH";
            case 0x43: return "Giesecke & Devrient GB Ltd.";
            case 0x44: return "Giesecke & Devrient sa/nv";
            case 0x45: return "GrafoCARD";
            case 0x48: return FormatStrings.previous2("Hungarian Banknote Printing Co. Ltd.", "PJRT");
            case 0x50: return "Imprimerie Nationale";
            case 0x51: return "Imprensa Nacional-Casa da Moeda, SA";
            case 0x52: return "InfoCamere S.C.p.A";
            case 0x61: return "KazTACHOnet LLP";
            case 0x68: return "LESIKAR a.s.";
            case 0x69: return "LEDA-SL";
            case 0x78: return "NAP automotive Produkte GmbH";
            case 0x81: return FormatStrings.previous3("Morpho e-documents", "Sagem Orga", "ORGA Kartensysteme GmbH");
            case 0x82: return "ORGA Zelenograd ZAO";
            case 0x84: return "ORGA Kartensysteme GmbH";
            case 0x88: return FormatStrings.previous2("Asseco Czech Republic a.s.", "PVT a.s.");
            case 0x89: return "Polska Wytwórnia Papierów Wartosciowych S.A. - PWPW S.A.";
            case 0x8A: return "Papiery Powlekane Pasaco Sp. z o.o.";
            case 0x98: return "TahoNetSoft";
            case 0xA1: return FormatStrings.previous4("Continental Automotive GmbH", "Siemens AG", "Siemens VDO Automotive", "Siemens Automotive");
            case 0xA2: return "Stoneridge Electronics AB";
            case 0xA3: return FormatStrings.previous2("Gemalto", "Schlumberger SEMA, Axalto");
            case 0xA4: return "3M Security Printing and Systems Ltd.";
            case 0xA5: return "STMicroelectronics - Incard Division";
            case 0xA6: return "STÁTNÍ TISKÁRNA CENIN, státní podnik";
            case 0xAB: return "T-Systems International GmbH";
            case 0xAC: return FormatStrings.previous2("Gemalto AG", "Trüb AG");
            case 0xAD: return "Trüb Baltic AS";
            case 0xAE: return "TEMPEST a.s.";
            case 0xAF: return "Trueb - DEMAX PLC";
            case 0xB0: return "TAYROL LIMITED";
            case 0xB1: return "UŽDAROJI AKCINĖ BENDROVĖ \"LODVILA\"";
            case 0xD8: return "Union of Chambers and Commodity Exchanges of Turkey - TOBB";
            case 0xE0: return "Turker Roll Paper Trade";
        }
        return new QString_1.default(Translation_1.tr("Unknown Manufacturer %1 or equipment not type approved")).arg(code).toString();
    };
    FormatStrings.longMonthName = function (month) {
        var months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        return months[month];
    };
    return FormatStrings;
}());
exports.default = FormatStrings;


/***/ }),

/***/ "./src/utils/QString.ts":
/*!******************************!*\
  !*** ./src/utils/QString.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var QString = /** @class */ (function () {
    function QString(value) {
        if (value === void 0) { value = ''; }
        this.value = value.toString();
        this.argIndex = 0;
    }
    QString.prototype.arg = function (argValue) {
        var rv = new QString();
        rv.argIndex = this.argIndex + 1;
        rv.value = this.value.replace(new RegExp("%" + rv.argIndex, 'g'), "" + argValue);
        return rv;
    };
    QString.prototype.toString = function () {
        return this.value;
    };
    return QString;
}());
exports.default = QString;


/***/ }),

/***/ "./src/utils/Translation.ts":
/*!**********************************!*\
  !*** ./src/utils/Translation.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function tr(text) {
    // no translation implemented
    return text;
}
exports.tr = tr;


/***/ })

/******/ });
//# sourceMappingURL=main.EsmDownloader.lib.js.map