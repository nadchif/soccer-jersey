import {Svg} from '@svgdotjs/svg.js';

const drawstripedThick = (
    page: Svg,
    primaryColor: string,
    secondaryColor: string,
) =>
  page.pattern(20, 4, function(add) {
    add.rect(20, 4).fill(primaryColor);
    add.rect(10, 4).fill(secondaryColor ? secondaryColor : '#eee');
  });

const drawstripedThin = (
    page: Svg,
    primaryColor: string,
    secondaryColor: string,
) =>
  page.pattern(8, 4, function(add) {
    add.rect(8, 4).fill(primaryColor);
    add.rect(1, 4).fill(secondaryColor ? secondaryColor : '#eee');
  });

const drawStriped = (
    page: Svg,
    primaryColor: string,
    secondaryColor: string,
    thickness: 'thin' | 'thick' | 'normal' = 'normal',
) => {
  switch (thickness) {
    case 'thick':
      return drawstripedThick(page, primaryColor, secondaryColor);
    case 'thin':
      return drawstripedThin(page, primaryColor, secondaryColor);
    default:
      return page.pattern(10, 4, function(add) {
        add.rect(10, 4).fill(primaryColor);
        add.rect(5, 4).fill(secondaryColor ? secondaryColor : '#eee');
      });
  }
};

const drawCheckered = (page: Svg, primaryColor: string,
    secondaryColor: string) =>
  page.pattern(20, 20, function(add) {
    add.rect(20, 20).fill(primaryColor);
    add.rect(10, 10).fill(secondaryColor ? secondaryColor : '#eee');
    add
        .rect(10, 10)
        .fill(secondaryColor ? secondaryColor : '#eee')
        .move(10, 10);
  });

const drawHoops = (page: Svg, primaryColor: string, secondaryColor: string) =>
  page.pattern(20, 20, function(add) {
    add.rect(20, 20).fill(primaryColor);
    add.rect(20, 10).fill(secondaryColor ? secondaryColor : '#eee');
  });

const drawTwoColor = (
    page: Svg,
    primaryColor: string,
    secondaryColor: string,
    bandStyle: 'diagonal-right' | 'diagonal-left' | 'horizontal' | 'vertical',
) => {
  switch (bandStyle) {
    case 'diagonal-right':
      return page.pattern(100, 100, function(add) {
        add.rect(90, 100).fill(primaryColor);
        add
            .rect(50, 120)
            .fill(secondaryColor ? secondaryColor : '#eee')
            .move(50, 0).rotate(35);
      });
    case 'diagonal-left':
      return page.pattern(100, 100, function(add) {
        add.rect(90, 100).fill(primaryColor);
        add
            .rect(60, 140)
            .fill(secondaryColor ? secondaryColor : '#eee')
            .move(52, -20).rotate(145);
      });
    case 'horizontal':
      return page.pattern(100, 100, function(add) {
        add.rect(100, 100).fill(primaryColor);
        add
            .rect(100, 50)
            .fill(secondaryColor ? secondaryColor : '#eee')
            .move(0, 52);
      });
    case 'vertical':
      return page.pattern(90, 100, function(add) {
        add.rect(90, 100).fill(primaryColor);
        add
            .rect(50, 100)
            .fill(secondaryColor ? secondaryColor : '#eee')
            .move(50, 0);
      });
    default:
      return page.pattern(90, 90, function(add) {
        add.rect(90, 100).fill(primaryColor);
        add.rect(20, 100).fill(secondaryColor).move(50, 0);
      });
  }
};

const drawSingleBand = (
    page: Svg,
    primaryColor: string,
    secondaryColor: string,
    bandStyle: 'diagonal-right' | 'diagonal-left' | 'horizontal' | 'vertical',
) => {
  switch (bandStyle) {
    case 'diagonal-right':
      return page.pattern(100, 100, function(add) {
        add.rect(100, 100).fill(primaryColor);
        add
            .rect(120, 20)
            .fill(secondaryColor ? secondaryColor : '#eee')
            .move(0, 40)
            .rotate(120);
      });
    case 'diagonal-left':
      return page.pattern(100, 100, function(add) {
        add.rect(100, 100).fill(primaryColor);
        add
            .rect(120, 20)
            .fill(secondaryColor ? secondaryColor : '#eee')
            .move(0, 40)
            .rotate(60);
      });
    case 'horizontal':
      return page.pattern(100, 90, function(add) {
        add.rect(100, 90).fill(primaryColor);
        add
            .rect(100, 30)
            .fill(secondaryColor ? secondaryColor : '#eee')
            .move(0, 30);
      });
    case 'vertical':
      return page.pattern(90, 100, function(add) {
        add.rect(90, 100).fill(primaryColor);
        add
            .rect(20, 100)
            .fill(secondaryColor ? secondaryColor : '#eee')
            .move(40, 0);
      });
    default:
      return page.pattern(90, 90, function(add) {
        add.rect(90, 100).fill(primaryColor);
        add.rect(20, 100).fill(secondaryColor).move(50, 0);
      });
  }
};

const drawWaves = (
    page: Svg,
    primaryColor: string,
    secondaryColor: string,
    waveStyle: 'horizontal' | 'vertical',
) => {
  switch (waveStyle) {
    case 'horizontal':
      return page.pattern(20, 12, function(add) {
        add.rect(20, 12).fill(primaryColor);
        add.rect(14, 6).fill(secondaryColor ? secondaryColor : '#eee')
            .move(-3, 3).rotate(-15);
        add.rect(14, 6).fill(secondaryColor ? secondaryColor : '#eee')
            .move(9, 3).rotate(15);
      });
    default:
      return page.pattern(12, 20, function(add) {
        add.rect(12, 20).fill(primaryColor);
        add.rect(6, 14).fill(secondaryColor ? secondaryColor : '#eee')
            .move(3, -3).rotate(-15);
        add.rect(6, 14).fill(secondaryColor ? secondaryColor : '#eee')
            .move(3, 9).rotate(15);
      });
  }
};

const drawDashes = (
    page: Svg,
    primaryColor: string,
    secondaryColor: string,
    dashDirection: 'diagonal-right' | 'diagonal-left'
     | 'horizontal' | 'vertical',
) =>{
  switch (dashDirection) {
    case 'diagonal-left':
      return page.pattern(10, 10, function(add) {
        add.rect(10, 10).fill(primaryColor);
        add.rect(5, 2).fill(secondaryColor ? secondaryColor : '#eee')
            .move(5, 5).rotate(45);
      });
    case 'diagonal-right':
      return page.pattern(10, 10, function(add) {
        add.rect(10, 10).fill(primaryColor);
        add.rect(5, 2).fill(secondaryColor ? secondaryColor : '#eee')
            .move(5, 5).rotate(135);
      });
    case 'horizontal':
      return page.pattern(10, 10, function(add) {
        add.rect(10, 10).fill(primaryColor);
        add.rect(5, 2).fill(secondaryColor ? secondaryColor : '#eee');
        add.rect(5, 2).fill(secondaryColor ? secondaryColor : '#eee')
            .move(5, 5);
      });
    default:
      return page.pattern(10, 10, function(add) {
        add.rect(10, 10).fill(primaryColor);
        add.rect(2, 5).fill(secondaryColor ? secondaryColor : '#eee');
        add.rect(2, 5).fill(secondaryColor ? secondaryColor : '#eee')
            .move(5, 5);
      });
  }
};


export {
  drawStriped, drawHoops, drawSingleBand, drawCheckered,
  drawTwoColor, drawWaves, drawDashes,
};
