"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const react_native_1 = require("react-native");
const initialStateTypes_1 = require("../store/initialStateTypes");
const _1 = require("./");
const types_1 = require("./types");
exports.getYesNoLabel = (cond) => cond ? _1.localize('yes') : _1.localize('no');
exports.selectIconByFuelType = (type) => {
    if (type === initialStateTypes_1.FuelType.Electric) {
        return 'electric';
    }
    else if (type === initialStateTypes_1.FuelType.Hybrid) {
        return 'autogas';
    }
    return 'petrol';
};
exports.parseChildSeatsData = (childSeats) => Object.entries(childSeats)
    .map(([id, count]) => ({ id: +id, count })).filter(({ id, count }) => !!+id && count);
exports.deepDiff = (base, object) => _.transform(base, (result, value, key) => {
    if (!_.isEqual(value, object[key]) || _.isArray(value) && _.isArray(object[key])) {
        result[key] = (_.isArray(value) && _.isArray(object[key]))
            ? _.differenceWith(value, object[key], _.isEqual)
            : value;
    }
});
exports.toClipboard = (str) => react_native_1.Clipboard.setString(str);
/**
 * Make query filter from data
 *
 * @param {IAnyObject} data
 * @returns {string}
 */
exports.makeQueryFilter = (data) => encodeURIComponent(JSON.stringify(data));
exports.some = (conditions) => conditions.some(Boolean);
exports.every = (conditions) => conditions.every(Boolean);
exports.delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));
exports.noop = () => null;
// Be sure that word exists in en/fi locales
exports.pluralize = ({ word, value, withValue }) => {
    const text = _1.localize(value !== 1 ? `${word}s` : word);
    return withValue ? `${value} ${text}` : text;
};
exports.isNegative = (value) => value < 0;
exports.createHitSlop = (...args) => {
    const defaultValue = args.filter(Boolean).length === 1 ? args[0] : 0;
    const [top = defaultValue, right = defaultValue, bottom = defaultValue, left = defaultValue] = args;
    return { top, right, bottom, left };
};
exports.disableFontScaling = () => {
    const T = react_native_1.Text;
    const TI = react_native_1.TextInput;
    T.defaultProps && (T.defaultProps.allowFontScaling = false);
    TI.defaultProps && (TI.defaultProps.allowFontScaling = false);
};
/**
 * Memoization function
 *
 * @param fn
 */
exports.memoize = (fn) => {
    const cache = new Map();
    return (arg) => {
        const key = JSON.stringify(arg);
        const value = cache.get(key);
        if (value) {
            return value;
        }
        const result = fn(arg);
        cache.set(key, result);
        return result;
    };
};
exports.textCasesConfig = {
    [types_1.TextActions.lowerFirst]: _.lowerFirst,
    [types_1.TextActions.upperFirst]: _.upperFirst,
    [types_1.TextActions.upper]: _.toUpper,
    [types_1.TextActions.lower]: _.toLower,
    [types_1.TextActions.upperEach]: (text) => _.startCase(_.upperFirst(text)),
    [types_1.TextActions.none]: String,
};
exports.textCase = (text, textCase) => exports.textCasesConfig[textCase](text);
//# sourceMappingURL=other.js.map