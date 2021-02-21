const drawstripedThick = (page, primaryColor, secondaryColor) => page.pattern(20, 4, function (add) {
    add.rect(20, 4).fill(primaryColor);
    add.rect(10, 4).fill(secondaryColor ? secondaryColor : "#eee");
});
const drawstripedThin = (page, primaryColor, secondaryColor) => page.pattern(8, 4, function (add) {
    add.rect(8, 4).fill(primaryColor);
    add.rect(1, 4).fill(secondaryColor ? secondaryColor : "#eee");
});
const drawStriped = (page, primaryColor, secondaryColor, thickness = "normal") => {
    switch (thickness) {
        case "thick":
            return drawstripedThick(page, primaryColor, secondaryColor);
        case "thin":
            return drawstripedThin(page, primaryColor, secondaryColor);
        default:
            return page.pattern(10, 4, function (add) {
                add.rect(10, 4).fill(primaryColor);
                add.rect(5, 4).fill(secondaryColor ? secondaryColor : "#eee");
            });
    }
};
const drawCheckered = (page, primaryColor, secondaryColor) => page.pattern(20, 20, function (add) {
    add.rect(20, 20).fill(primaryColor);
    add.rect(10, 10).fill(secondaryColor ? secondaryColor : "#eee");
    add
        .rect(10, 10)
        .fill(secondaryColor ? secondaryColor : "#eee")
        .move(10, 10);
});
const drawHoops = (page, primaryColor, secondaryColor) => page.pattern(20, 20, function (add) {
    add.rect(20, 20).fill(primaryColor);
    add.rect(20, 10).fill(secondaryColor ? secondaryColor : "#eee");
});
const drawSingleBand = (page, primaryColor, secondaryColor, bandStyle) => {
    switch (bandStyle) {
        case "diagonal-right":
            return page.pattern(100, 100, function (add) {
                add.rect(100, 100).fill(primaryColor);
                add
                    .rect(120, 20)
                    .fill(secondaryColor ? secondaryColor : "#eee")
                    .move(0, 40)
                    .rotate(120);
            });
        case "diagonal-left":
            return page.pattern(100, 100, function (add) {
                add.rect(100, 100).fill(primaryColor);
                add
                    .rect(120, 20)
                    .fill(secondaryColor ? secondaryColor : "#eee")
                    .move(0, 40)
                    .rotate(60);
            });
        case "horizontal":
            return page.pattern(100, 90, function (add) {
                add.rect(100, 90).fill(primaryColor);
                add
                    .rect(100, 30)
                    .fill(secondaryColor ? secondaryColor : "#eee")
                    .move(0, 30);
            });
        case "vertical":
            return page.pattern(90, 100, function (add) {
                add.rect(90, 100).fill(primaryColor);
                add
                    .rect(20, 100)
                    .fill(secondaryColor ? secondaryColor : "#eee")
                    .move(50, 0);
            });
        default:
            return page.pattern(90, 90, function (add) {
                add.rect(90, 100).fill(primaryColor);
                add.rect(20, 100).fill(secondaryColor).move(50, 0);
            });
    }
};
export { drawStriped, drawHoops, drawSingleBand, drawCheckered };
