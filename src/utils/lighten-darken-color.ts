/**
 * Lighten or Darken a color
 * @param {string} color HEX color value
 * @param {number} amount Amount of color shift.
 *  For example a value of -10 to darken or 10 to lighten
 * @return {string} a HEX color string
 */
const lightenDarkenColor = (color: string, amount: number): string => {
  color = color.replace(/^#/, '');
  if (color.length === 3) {
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
  }

  const letterMatch = color.match(/.{2}/g);
  if (!letterMatch) {
    return color;
  }
  const [or, og, ob] = letterMatch;
  const [pr, pg, pb] = [
    parseInt(or, 16) + amount,
    parseInt(og, 16) + amount,
    parseInt(ob, 16) + amount,
  ];

  const r = Math.max(Math.min(255, pr), 0).toString(16);
  const g = Math.max(Math.min(255, pg), 0).toString(16);
  const b = Math.max(Math.min(255, pb), 0).toString(16);

  const rr = (r.length < 2 ? '0' : '') + r;
  const gg = (g.length < 2 ? '0' : '') + g;
  const bb = (b.length < 2 ? '0' : '') + b;

  return `#${rr}${gg}${bb}`;
};

export default lightenDarkenColor;
