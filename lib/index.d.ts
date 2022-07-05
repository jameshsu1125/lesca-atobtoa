/**
 * toBase64({ name:'james', age:18 }, 3);
 * @param {object} data
 * @param {number} len
 * @returns {string} base64
 */
declare const toBase64: (data: object, push?: number) => string;
/**
 * toJson('base64', 3);
 * @param {string} str
 * @param {number} len
 * @returns // => { name:'james', age:18 }
 */
declare const toJson: (str: string, push?: number) => any;
declare const Atobtoa: {
  toBase64: (data: object, push?: number) => string;
  toJson: (str: string, push?: number) => any;
};
export default Atobtoa;
export { toBase64, toJson };
