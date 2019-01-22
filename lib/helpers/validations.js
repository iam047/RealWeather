"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const libphonenumber_js_1 = require("libphonenumber-js");
const _1 = require("./");
exports.validatePhone = (value, countryCode) => {
    const country = _1.findCountry(countryCode, 'cca2');
    const isErrorNumberCountry = country && !country.callingCode || !libphonenumber_js_1.isValidNumber(value, countryCode);
    return {
        countryCode: countryCode,
        isPhoneError: value === '' ? false : isErrorNumberCountry,
        phone: value,
    };
};
//# sourceMappingURL=validations.js.map