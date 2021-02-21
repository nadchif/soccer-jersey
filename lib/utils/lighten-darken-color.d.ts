/**
 * Lighten or Darken a color
 * @param {string} color HEX color value
 * @param {number} amount Amount of color shift.
 *  For example a value of -10 to darken or 10 to lighten
 * @return {string} a HEX color string
 */
declare const lightenDarkenColor: (color: string, amount: number) => string;
export default lightenDarkenColor;
