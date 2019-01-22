"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_fabric_1 = require("react-native-fabric");
const _1 = require("./");
/**
 * Styles for console.log
 *
 * @constant
 * @type {Object}
 */
exports.logStyle = {
    success: 'color: green; font-weight: bold;',
    error: 'color: red; font-weight: bold;',
    default: 'color: blue; font-weight: bold;',
    warning: 'color: orange; font-weight: bold;',
};
exports.CrashlyticsError = (title) => _1.IS_IOS ? react_native_fabric_1.Crashlytics.recordError(title) : react_native_fabric_1.Crashlytics.logException(title);
//# sourceMappingURL=debug.js.map