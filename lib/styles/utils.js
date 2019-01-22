"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constans_1 = require("./constans");
exports.responsiveHeight = (h) => constans_1.SCREEN_HEIGHT * (h / 100);
exports.responsiveWidth = (w) => constans_1.SCREEN_WIDTH * (w / 100);
exports.responsiveFontSize = (percent) => {
    const heightPercent = (percent * constans_1.SCREEN_HEIGHT) / 100;
    return Math.round(heightPercent);
};
//# sourceMappingURL=utils.js.map