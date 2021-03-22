"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
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
exports["default"] = _default;