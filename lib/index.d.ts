/**
 * Generate Soccer Jersey SVG images. Generates Data URIs that
 * can be used directly as image src.
 */
import drawSoccerJersey from './utils/draw-soccer-jersey';
declare const SoccerJersey: {
    draw: typeof drawSoccerJersey;
};
export default SoccerJersey;
