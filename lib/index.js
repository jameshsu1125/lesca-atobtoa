define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toJson = exports.toBase64 = void 0;
    /**
     * toBase64({ name:'james', age:18 }, 3);
     * @param {object} data
     * @param {number} len
     * @returns {string} base64 => MWL4QXLoPmX6TlX|QWL|epIw]VX|QWL|MWL4P3HoPmX|PpskeZY}MWL4PmLoPmX|T|X|QWL|\ZgoMWL4PmLoPmX}TWH7MWL4Q3ToPmX4UD@@
     */
    var toBase64 = function (data, push) {
        if (push === void 0) { push = 1; }
        var result = '';
        btoa(encodeURIComponent(escape(JSON.stringify(data))))
            .split('')
            .forEach(function (e) {
            result += String.fromCharCode(e.charCodeAt(0) + push);
        });
        return result;
    };
    exports.toBase64 = toBase64;
    /**
     * toJson('MWL4QXLoPmX6TlX|QWL|epIw]VX|QWL|MWL4P3HoPmX|PpskeZY}MWL4PmLoPmX|T|X|QWL|\ZgoMWL4PmLoPmX}TWH7MWL4Q3ToPmX4UD@@', 3);
     * @param {string} str
     * @param {number} len
     * @returns // => { name:'james', age:18 }
     */
    var toJson = function (str, push) {
        if (push === void 0) { push = 1; }
        try {
            var result_1 = '';
            str.split('').forEach(function (e) {
                result_1 += String.fromCharCode(e.charCodeAt(0) - push);
            });
            return JSON.parse(unescape(decodeURIComponent(atob(result_1))));
        }
        catch (_a) {
            return false;
        }
    };
    exports.toJson = toJson;
    var Atobtoa = { toBase64: toBase64, toJson: toJson };
    exports.default = Atobtoa;
});
