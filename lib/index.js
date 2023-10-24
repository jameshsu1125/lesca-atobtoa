"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toJson = exports.toBase64 = exports["default"] = void 0;
/**
 * toBase64({ name:'james', age:18 }, 3);
 * @param {object} data
 * @param {number} len
 * @returns {string} base64 => MWL4QXLoPmX6TlX|QWL|epIw]VX|QWL|MWL4P3HoPmX|PpskeZY}MWL4PmLoPmX|T|X|QWL|\ZgoMWL4PmLoPmX}TWH7MWL4Q3ToPmX4UD@@
 */
var toBase64 = exports.toBase64 = function toBase64(data) {
  var push = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var result = '';
  btoa(encodeURIComponent(escape(JSON.stringify(data)))).split('').forEach(function (e) {
    result += String.fromCharCode(e.charCodeAt(0) + push);
  });
  return result;
};

/**
 * toJson('MWL4QXLoPmX6TlX|QWL|epIw]VX|QWL|MWL4P3HoPmX|PpskeZY}MWL4PmLoPmX|T|X|QWL|\ZgoMWL4PmLoPmX}TWH7MWL4Q3ToPmX4UD@@', 3);
 * @param {string} str
 * @param {number} len
 * @returns // => { name:'james', age:18 }
 */
var toJson = exports.toJson = function toJson(str) {
  var push = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  try {
    var result = '';
    str.split('').forEach(function (e) {
      result += String.fromCharCode(e.charCodeAt(0) - push);
    });
    return JSON.parse(unescape(decodeURIComponent(window.atob(result))));
  } catch (_unused) {
    return false;
  }
};
var Atobtoa = {
  toBase64: toBase64,
  toJson: toJson
};
var _default = exports["default"] = Atobtoa;