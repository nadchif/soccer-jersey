/**
 *
 * @param {object} specs Specifications of the soccer jersey.
 * @param {string} specs.shirtText The text to be displayed on the shirt.
 *  Recommended 3 letter team initials
 * @param  {string} specs.textColor The color (HTML Color Code) for the
 * text displayed on the shirt
 * @param  {string} specs.shirtColor The main color (HTML Color Code) of
 * the shirt.
 * @param  {string} specs.sleeveColor The color (HTML Color Code) of the shirt
 *  sleeves;
 * @param  {string} specs.shirtStyle The Style of the shirt (torso region).
 * Supports "plain", "two-color", "striped", "striped-thin","striped-thick","checkered",
 *  "hoops","single-band";
 * @param {string}  specs.shirtStyleColor The color (HTML Color Code) of
 * used for the shirt style.
 * @param  {string} specs.shirtStyleDirection The style of the single band.
 *  Required when using the "single-band" shirt style. Supports
 * "diagonal-right", "diagonal-left","horizontal", "vertical"
 * @param {boolean} encodeToDataUri By default soccer jersey will return a Data URI
 * string like data:image/svg+xml;base64,...... You can set false, to return the actual
 * SVG contents as a string.
 * @return {string} A data URL ready for direct use as src attribute
 *  on <img />
 */
export default function drawSoccerJersey({ shirtText, textColor, shirtColor, sleeveColor, shirtStyle, shirtStyleColor, shirtStyleDirection, }: {
    shirtText: string;
    textColor: string;
    shirtColor: string;
    sleeveColor: string;
    shirtStyle: 'plain' | 'two-color' | 'striped' | 'striped-thin' | 'striped-thick' | 'checkered' | 'hoops' | 'single-band';
    shirtStyleColor?: string;
    shirtStyleDirection?: ('diagonal-right' | 'diagonal-left' | 'horizontal' | 'vertical');
}, encodeToDataUri?: boolean): string;
