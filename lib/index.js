"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toJson = exports.toBase64 = exports["default"] = void 0;
var atobtoa = {
  /**
   * toBase64({ name:'james', age:18 }, 3);
   * @param {*} data
   * @param {number} len
   * @returns {string} base64 => MWL4QXLoPmX6TlX|QWL|epIw]VX|QWL|MWL4P3HoPmX|PpskeZY}MWL4PmLoPmX|T|X|QWL|\ZgoMWL4PmLoPmX}TWH7MWL4Q3ToPmX4UD@@
   */
  toBase64: function toBase64(data) {
    var push = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var result = '';
    btoa(encodeURIComponent(escape(JSON.stringify(data)))).split('').forEach(function (e) {
      result += String.fromCharCode(e.charCodeAt() + push);
    });
    return result;
  },

  /**
   * toJson('MWL4QXLoPmX6TlX|QWL|epIw]VX|QWL|MWL4P3HoPmX|PpskeZY}MWL4PmLoPmX|T|X|QWL|\ZgoMWL4PmLoPmX}TWH7MWL4Q3ToPmX4UD@@', 3);
   * @param {string} str
   * @param {number} len
   * @returns // => { name:'james', age:18 }
   */
  toJson: function toJson(str) {
    var push = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    try {
      var result = '';
      str.split('').forEach(function (e) {
        result += String.fromCharCode(e.charCodeAt() - push);
      });
      return JSON.parse(unescape(decodeURIComponent(window.atob(result))));
    } catch (_unused) {
      return 'format error';
    }
  }
};
var _default = atobtoa;
exports["default"] = _default;
var toBase64 = atobtoa.toBase64,
    toJson = atobtoa.toJson;
exports.toJson = toJson;
exports.toBase64 = toBase64;