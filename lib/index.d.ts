/**
 * toBase64({ name:'james', age:18 }, 3);
 * @param {object} data
 * @param {number} len
 * @returns {string} base64 => MWL4QXLoPmX6TlX|QWL|epIw]VX|QWL|MWL4P3HoPmX|PpskeZY}MWL4PmLoPmX|T|X|QWL|\ZgoMWL4PmLoPmX}TWH7MWL4Q3ToPmX4UD@@
 */
declare const toBase64: (data: object, push?: number) => string;
/**
 * toJson('MWL4QXLoPmX6TlX|QWL|epIw]VX|QWL|MWL4P3HoPmX|PpskeZY}MWL4PmLoPmX|T|X|QWL|\ZgoMWL4PmLoPmX}TWH7MWL4Q3ToPmX4UD@@', 3);
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
