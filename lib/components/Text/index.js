"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const styles_1 = require("../../styles");
exports.Text = (_a) => {
    var { children, style, weight = 'regular', color = styles_1.COLORS.BLACK, size = 2 } = _a, textProps = __rest(_a, ["children", "style", "weight", "color", "size"]);
    const ownStyles = {
        color,
        fontFamily: 'SF UI Text',
        fontSize: styles_1.responsiveFontSize(size),
        fontWeight: styles_1.fontWeight[weight],
    };
    return (React.createElement(react_native_1.Text, Object.assign({ style: [ownStyles, style], allowFontScaling: false }, textProps), children));
};
//# sourceMappingURL=index.js.map