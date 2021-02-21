/* eslint-disable max-len */
const { btoa } = require('abab');
import { SVG } from '@svgdotjs/svg.js';
import lightenDarkenColor from './lighten-darken-color';
import { drawHoops, drawSingleBand, drawStriped, drawCheckered, } from '../patterns/patterns';
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
 * Supports "plain", "striped", "striped-thin","striped-thick","checkered",
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
export default function drawSoccerJersey({ shirtText, textColor, shirtColor = 'plain', sleeveColor, shirtStyle, shirtStyleColor, shirtStyleDirection, }, encodeToDataUri = true) {
    // Colors and Color Optimizations
    const optimizedSleeveColor = lightenDarkenColor(sleeveColor, -10);
    const optimizedShirtColor = lightenDarkenColor(shirtColor, -10);
    // paths
    const pathLeftSleeve = 'm18 8.5c-4 3-6.1 7.7-8.9 12-3.1 4.9-6 9.9-8.8 15 6 4 12 8.2 19 10 4.1.38 4.3-5.3 3.8-8.2-.29-9.7-3-19-5-29z';
    const pathRightSleeve = 'm83 8.1c4 3 6.1 7.7 8.9 12 3.1 4.9 6 9.9 8.8 15-6 4-12 8.2-19 10-4.1.38-4.3-5.3-3.8-8.2.3-9.7 3-19 5-29z';
    const pathMainBody = 'm83 8c-6.4-2.3-13-5.3-19-8 1.4 5.4-5.4 8.2-10 8.7-5.8.68-13-.075-17-5-1.2-2.1.62-5.1-2.8-2.6-5.6 2.6-11 5.5-17 7.9 5.6 21 3.3 17 6.2 40-.14 15 .16 30-.79 45 1.6 4.7 9.5 4 14 5.2 13 1.8 26 1.2 39-2.3 5.7-1.5 1.5-8.1 2.5-12-.32-15-.32-29-.32-44 5.5-37 1.6-12 4.9-33z';
    const pathNeck = 'm63 .064c-3.8.47-7.5 1.9-11 1.9-5 .31-11-.47-16-1.9-1.7.6-.78 2.8-1.8 4.1-3 5.1-6 10-9 15h50c-3.8-6.4-7.6-13-11-19z';
    // eslint-disable-next-line new-cap
    const page = SVG();
    let shirtFill;
    switch (shirtStyle) {
        case 'striped-thin':
            shirtFill = drawStriped(page, optimizedShirtColor, (shirtStyleColor ? shirtStyleColor : '#222'), 'thin');
            break;
        case 'striped-thick':
            shirtFill = drawStriped(page, optimizedShirtColor, (shirtStyleColor ? shirtStyleColor : '#222'), 'thick');
            break;
        case 'striped':
            shirtFill = drawStriped(page, optimizedShirtColor, (shirtStyleColor ? shirtStyleColor : '#222'));
            break;
        case 'checkered':
            shirtFill = drawCheckered(page, optimizedShirtColor, (shirtStyleColor ? shirtStyleColor : '#222'));
            break;
        case 'single-band':
            shirtFill = drawSingleBand(page, optimizedShirtColor, (shirtStyleColor ? shirtStyleColor : '#222'), (shirtStyleDirection ? shirtStyleDirection : 'horizontal'));
            break;
        case 'hoops':
            shirtFill = drawHoops(page, optimizedShirtColor, (shirtStyleColor ? shirtStyleColor : '#222'));
            break;
        default:
            shirtFill = optimizedShirtColor;
    }
    // neck
    page.path(pathNeck).fill(lightenDarkenColor(shirtColor, -50));
    // shirt
    page.path(pathMainBody).fill(shirtFill);
    page.path(pathMainBody).fill(page
        .gradient('linear', function (add) {
        add.stop(0, '#000', 0.2);
        add.stop(0.44, '#ddd', 0.1);
        add.stop(1, '#fff', 0.1);
    })
        .from(1, 1)
        .to(1, 0));
    // left sleeve
    page.path(pathLeftSleeve).fill(page
        .gradient('linear', function (add) {
        add.stop(0.21, lightenDarkenColor(optimizedSleeveColor, -10));
        add.stop(1, optimizedSleeveColor);
    })
        .from(1, 1)
        .to(0, 0));
    // right sleeve
    page.path(pathRightSleeve).fill(page
        .gradient('linear', function (add) {
        add.stop(0.21, lightenDarkenColor(optimizedSleeveColor, -10));
        add.stop(1, optimizedSleeveColor);
    })
        .from(0, 1)
        .to(1, 0));
    // text
    const optimizedFontSize = (20 / shirtText.length) * 3;
    page
        .text(shirtText)
        .fill('#000')
        .font({
        family: 'Courier',
        style: 'bold',
        size: optimizedFontSize > 30 ? 30 : optimizedFontSize,
    })
        .stroke({ color: textColor ? textColor : '#fff', width: 0.5 })
        .center(50, 35);
    page.viewbox('0 0 102 100');
    const svgData = page.svg();
    if (!encodeToDataUri) {
        return svgData;
    }
    const base64Data = btoa(svgData);
    const dataUri = `data:image/svg+xml;base64,${base64Data}`;
    return dataUri;
}
