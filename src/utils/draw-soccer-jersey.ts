/* eslint-disable max-len */
const {btoa} = require('abab');
import {Element, Svg, SVG} from '@svgdotjs/svg.js';
import lightenDarkenColor from './lighten-darken-color';
import {
  drawHoops,
  drawSingleBand,
  drawStriped,
  drawCheckered,
  drawTwoColor,
  drawWaves,
  drawDashes,
} from '../patterns/patterns';

/**
 *
 * @param {object} specs Specifications of the soccer jersey.
 * @param {string} specs.shirtText The text to be displayed on the shirt.
 *  Recommended 3 letter team initials
 * @param  {string} specs.textColor The color (HTML Color Code) for the
 * text displayed on the shirt
 * @param  {string} specs.textOutlineColor Optional. The outline color (HTML Color Code) for the
 * text displayed on the shirt
 * @param  {string} specs.textBackgroundColor Optional. The background color (HTML Color Code) for the
 * text displayed on the shirt
 * @param  {string} specs.shirtColor The main color (HTML Color Code) of
 * the shirt.
 * @param  {string} specs.sleeveColor The color (HTML Color Code) of the shirt
 *  sleeves;
 * @param  {string} specs.shirtStyle The Style of the shirt (torso region).
 * Supports "plain", "two-color", "striped", "striped-thin","striped-thick","checkered",
 *  "hoops","single-band", "waves", "dashed";
 * @param {string}  specs.shirtStyleColor The color (HTML Color Code) of
 * used for the shirt style.
 * @param  {string} specs.shirtStyleDirection The style of the single band.
 *  Required when using the "single-band" shirt style. Supports
 * "diagonal-right", "diagonal-left","horizontal", "vertical"
 * @param {boolean} specs.isBack Set to true to draw the shirt from the
 *  back (different neck shape, no badges). Defaults to false.
 * @param {boolean} encodeToDataUri By default soccer jersey will return a Data URI
 * string like data:image/svg+xml;base64,...... You can set false, to return the actual
 * SVG contents as a string.
 * @return {string} A data URL ready for direct use as src attribute
 *  on <img />
 */
export default function drawSoccerJersey({
  shirtText,
  textColor,
  textOutlineColor,
  textBackgroundColor,
  shirtColor = 'plain',
  sleeveColor,
  shirtStyle,
  shirtStyleColor,
  shirtStyleDirection,
  isBack = false,
}: {
  shirtText: string;
  textColor: string;
  textOutlineColor?: string;
  textBackgroundColor?: string;
  shirtColor: string;
  sleeveColor: string;
  shirtStyle:
  | 'plain'
  | 'two-color'
  | 'striped'
  | 'striped-thin'
  | 'striped-thick'
  | 'waves'
  | 'checkered'
  | 'hoops'
  | 'single-band'
  | 'dashed';
  shirtStyleColor?: string;
  shirtStyleDirection?:
  ('diagonal-right'
    | 'diagonal-left'
    | 'horizontal'
    | 'vertical');
  isBack?: boolean;
}, encodeToDataUri: boolean = true): string {
  // Colors and Color Optimizations
  const optimizedSleeveColor = lightenDarkenColor(sleeveColor, -10);
  const optimizedShirtColor = lightenDarkenColor(shirtColor, -10);

  // paths
  const pathLeftSleeve =
    'm18 8.5c-4 3-6.1 7.7-8.9 12-3.1 4.9-6 9.9-8.8 15 6 4 12 8.2 19 10 4.1.38 4.3-5.3 3.8-8.2-.29-9.7-3-19-5-29z';
  const pathRightSleeve =
    'm83 8.1c4 3 6.1 7.7 8.9 12 3.1 4.9 6 9.9 8.8 15-6 4-12 8.2-19 10-4.1.38-4.3-5.3-3.8-8.2.3-9.7 3-19 5-29z';
  const pathMainBody =
    'm83 8c-6.4-2.3-13-5.3-19-8 1.4 5.4-5.4 8.2-10 8.7-5.8.68-13-.075-17-5-1.2-2.1.62-5.1-2.8-2.6-5.6 2.6-11 5.5-17 7.9 5.6 21 3.3 17 6.2 40-.14 15 .16 30-.79 45 1.6 4.7 9.5 4 14 5.2 13 1.8 26 1.2 39-2.3 5.7-1.5 1.5-8.1 2.5-12-.32-15-.32-29-.32-44 5.5-37 1.6-12 4.9-33z';
  const pathNeck =
    'm63 .064c-3.8.47-7.5 1.9-11 1.9-5 .31-11-.47-16-1.9-1.7.6-.78 2.8-1.8 4.1-3 5.1-6 10-9 15h50c-3.8-6.4-7.6-13-11-19z';
  const pathNeckBack =
    'm63 .064C 60.12,5.3 53.35,6.6 49.86 6.6 44.86 7 40.4 4 36 .064c-1.7.6-.78 2.8-1.8 4.1-3 5.1-6 10-9 15h50c-3.8-6.4-7.6-13-11-19z';

  // eslint-disable-next-line new-cap
  const page = SVG();

  let shirtFill: Element;
  switch (shirtStyle) {
    case 'two-color':
      shirtFill = drawTwoColor(
          page,
          optimizedShirtColor,
          (shirtStyleColor ? shirtStyleColor : '#222'),
          (shirtStyleDirection ? shirtStyleDirection : 'vertical'),
      );
      break;
    case 'striped-thin':
      shirtFill = drawStriped(
          page,
          optimizedShirtColor,
          (shirtStyleColor ? shirtStyleColor : '#222'),
          'thin',
      );
      break;
    case 'striped-thick':
      shirtFill = drawStriped(
          page,
          optimizedShirtColor,
          (shirtStyleColor ? shirtStyleColor : '#222'),
          'thick',
      );
      break;
    case 'striped':
      shirtFill = drawStriped(page, optimizedShirtColor, (shirtStyleColor ? shirtStyleColor : '#222'));
      break;
    case 'dashed':
      shirtFill = drawDashes(page, optimizedShirtColor, (shirtStyleColor ? shirtStyleColor : '#222'),
          (shirtStyleDirection ? shirtStyleDirection : 'vertical'));
      break;
    case 'checkered':
      shirtFill = drawCheckered(page, optimizedShirtColor, (shirtStyleColor ? shirtStyleColor : '#222'));
      break;
    case 'single-band':
      shirtFill = drawSingleBand(
          page,
          optimizedShirtColor,
          (shirtStyleColor ? shirtStyleColor : '#222'),
          (shirtStyleDirection ? shirtStyleDirection : 'horizontal'),
      );
      break;
    case 'hoops':
      shirtFill = drawHoops(page, optimizedShirtColor, (shirtStyleColor ? shirtStyleColor : '#222'));
      break;
    case 'waves':
      shirtFill = drawWaves(
          page,
          optimizedShirtColor,
          (shirtStyleColor ? shirtStyleColor : '#222'),
          (shirtStyleDirection == 'vertical' || shirtStyleDirection == 'horizontal' ? shirtStyleDirection : 'vertical'),
      );
      break;
    default:
      shirtFill = (optimizedShirtColor as unknown as Element);
  }

  // neck
  page.path(isBack ? pathNeckBack : pathNeck).fill(lightenDarkenColor(shirtColor, -50));

  // shirt
  page.path(pathMainBody).fill(shirtFill);
  page.path(pathMainBody).fill(
      page
          .gradient('linear', function(add) {
            add.stop(0, '#000', 0.2);
            add.stop(0.44, '#ddd', 0.1);
            add.stop(1, '#fff', 0.1);
          })
          .from(1, 1)
          .to(1, 0),
  );
  // badge
  if (!isBack) {
    page.circle(8).fill(lightenDarkenColor(optimizedShirtColor, 60)).move(64, 18);
    page.polygon('0,3 3,0 4,3').fill(lightenDarkenColor(optimizedShirtColor, -20)).move(30, 21);
  }

  // left sleeve
  page.path(pathLeftSleeve).fill(
      page
          .gradient('linear', function(add) {
            add.stop(0.21, lightenDarkenColor(optimizedSleeveColor, -10));
            add.stop(1, optimizedSleeveColor);
          })
          .from(1, 1)
          .to(0, 0),
  );

  // right sleeve
  page.path(pathRightSleeve).fill(
      page
          .gradient('linear', function(add) {
            add.stop(0.21, lightenDarkenColor(optimizedSleeveColor, -10));
            add.stop(1, optimizedSleeveColor);
          })
          .from(0, 1)
          .to(1, 0),
  );

  // text
  const optimizedFontSize = (20 / shirtText.length) * 3;
  const drawText = (elem: Svg) => elem.text(shirtText)
      .fill(lightenDarkenColor((textColor ? textColor : '#fff'), -50))
      .font({
        family: 'Monospace',
        size: optimizedFontSize > 30 ? 30 : optimizedFontSize,
        style: 'bold',
      })
      .stroke({color: textOutlineColor? textOutlineColor: lightenDarkenColor((textColor ? textColor : '#fff'), 10), width: 0.5})
      .center(50, 35);
  if (textBackgroundColor) {
    // eslint-disable-next-line new-cap
    const draftShirtTextElem = drawText(SVG());
    const dimens = draftShirtTextElem.bbox();
    page.rect(dimens.width + 4, dimens.height + 4).fill(lightenDarkenColor(textBackgroundColor, 10)).center(50, 35);
  }
  drawText(page);

  page.viewbox('0 0 102 100');

  const svgData = page.svg();
  if (!encodeToDataUri) {
    return svgData;
  }
  const base64Data = btoa(svgData);
  const dataUri = `data:image/svg+xml;base64,${base64Data}`;
  return dataUri;
}
