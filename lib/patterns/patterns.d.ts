import { Svg } from '@svgdotjs/svg.js';
declare const drawStriped: (page: Svg, primaryColor: string, secondaryColor: string, thickness?: 'thin' | 'thick' | 'normal') => import("@svgdotjs/svg.js").Pattern;
declare const drawCheckered: (page: Svg, primaryColor: string, secondaryColor: string) => import("@svgdotjs/svg.js").Pattern;
declare const drawHoops: (page: Svg, primaryColor: string, secondaryColor: string) => import("@svgdotjs/svg.js").Pattern;
declare const drawTwoColor: (page: Svg, primaryColor: string, secondaryColor: string, bandStyle: 'diagonal-right' | 'diagonal-left' | 'horizontal' | 'vertical') => import("@svgdotjs/svg.js").Pattern;
declare const drawSingleBand: (page: Svg, primaryColor: string, secondaryColor: string, bandStyle: 'diagonal-right' | 'diagonal-left' | 'horizontal' | 'vertical') => import("@svgdotjs/svg.js").Pattern;
export { drawStriped, drawHoops, drawSingleBand, drawCheckered, drawTwoColor };
