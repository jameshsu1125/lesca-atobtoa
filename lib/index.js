"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toJson = exports.toBase64 = exports["default"] = void 0;
var atobtoa = {
  toBase64: function toBase64(data) {
    return btoa(encodeURIComponent(escape(JSON.stringify(data))));
  },
  toJson: function toJson(str) {
    try {
      return JSON.parse(unescape(decodeURIComponent(window.atob(str))));
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