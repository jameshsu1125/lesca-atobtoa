/**
 * toBase64({ name:'james', age:18 }, 3);
 * @param {*} data
 * @param {number} len
 * @returns {string} base64 => MWL4QXLoPmX6TlX|QWL|epIw]VX|QWL|MWL4P3HoPmX|PpskeZY}MWL4PmLoPmX|T|X|QWL|\ZgoMWL4PmLoPmX}TWH7MWL4Q3ToPmX4UD@@
 */
const toBase64 = (data, push = 1) => {
  let result = '';
  btoa(encodeURIComponent(escape(JSON.stringify(data))))
    .split('')
    .forEach((e) => {
      result += String.fromCharCode(e.charCodeAt() + push);
    });
  return result;
};

/**
 * toJson('MWL4QXLoPmX6TlX|QWL|epIw]VX|QWL|MWL4P3HoPmX|PpskeZY}MWL4PmLoPmX|T|X|QWL|\ZgoMWL4PmLoPmX}TWH7MWL4Q3ToPmX4UD@@', 3);
 * @param {string} str
 * @param {number} len
 * @returns // => { name:'james', age:18 }
 */
const toJson = (str, push = 1) => {
  try {
    let result = '';
    str.split('').forEach((e) => {
      result += String.fromCharCode(e.charCodeAt() - push);
    });
    return JSON.parse(unescape(decodeURIComponent(window.atob(result))));
  } catch {
    return false;
  }
};

const Atobtoa = { toBase64, toJson };

export default Atobtoa;
export { toBase64, toJson };
