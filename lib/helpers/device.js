"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const libphonenumber_js_1 = require("libphonenumber-js");
const effects_1 = require("redux-saga/effects");
const react_native_1 = require("react-native");
const react_native_device_info_1 = require("react-native-device-info");
const react_native_country_picker_modal_1 = require("react-native-country-picker-modal");
const rn_detect_soft_nav_1 = require("rn-detect-soft-nav");
const _1 = require("./");
const main_actions_1 = require("../actions/main.actions");
const ExtraDimensions = require('react-native-extra-dimensions-android'); // tslint:disable-line
exports.getBrand = react_native_device_info_1.default.getBrand, exports.getDeviceLocale = react_native_device_info_1.default.getDeviceLocale, exports.getModel = react_native_device_info_1.default.getModel, exports.getUniqueID = react_native_device_info_1.default.getUniqueID, exports.isTablet = react_native_device_info_1.default.isTablet, exports.getBuildNumber = react_native_device_info_1.default.getBuildNumber, exports.getVersion = react_native_device_info_1.default.getVersion, exports.getDeviceCountry = react_native_device_info_1.default.getDeviceCountry;
const getDeviceType = () => {
    if (_1.IS_IOS) {
        return exports.isTablet() ? 'iPad' : 'iPhone';
    }
    return exports.isTablet() ? 'Tablet' : 'Phone';
};
exports.getDeviceLanguage = () => exports.getDeviceCountry().toLowerCase();
exports.selectLanguage = (language) => ['en', 'fi'].includes(language) ? language : 'en';
exports.findCountry = (value, field = 'name') => {
    const allCountries = react_native_country_picker_modal_1.getAllCountries();
    let country;
    for (country of allCountries) {
        if (country[field] === value || country.name.common === value) {
            country = {
                callingCode: country.callingCode,
                cca2: country.cca2,
                currency: country.currency,
                flag: country.flag,
                name: typeof country.name === 'string'
                    ? country.name : country.name.common,
            };
            break;
        }
    }
    return country;
};
exports.createDeviceData = (deviceToken) => {
    const countryCode = exports.getDeviceCountry();
    const country = exports.findCountry(countryCode, 'cca2') || { currency: 'EUR' };
    return {
        countryCode,
        currencyCode: country.currency,
        deviceToken,
        deviceType: getDeviceType(),
        locale: exports.getDeviceLocale(),
        make: exports.getBrand(),
        mode: 'ALLOW',
        os: _1.IS_IOS ? 'iOS' : 'ANDROID',
        uuid: exports.getUniqueID(),
        version: react_native_1.Platform.Version,
    };
};
exports.getCountryPhoneCode = (country) => `+${libphonenumber_js_1.getCountryCallingCode(country)}`;
const hasNotchDevices = ['iPhone X', 'iPhone XS Max', 'iPhone XS', 'iPhone XR'];
exports.hasNotch = hasNotchDevices.includes(exports.getModel());
exports.hasSoftKeys = !_1.IS_IOS && rn_detect_soft_nav_1.default.hasSoftKeys;
exports.INITIAL_SOFT_MENU_BAR_HEIGHT = !_1.IS_IOS && ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT');
exports.SOFT_MENU_BAR_HEIGHT = !_1.IS_IOS && rn_detect_soft_nav_1.default.hasSoftKeysHeight;
exports.SOFT_NAV_BAR_HEIGHT = exports.INITIAL_SOFT_MENU_BAR_HEIGHT ? exports.INITIAL_SOFT_MENU_BAR_HEIGHT : exports.SOFT_MENU_BAR_HEIGHT;
const getCurrentPosition = () => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(location => resolve(location), error => reject(error), Object.assign({ enableHighAccuracy: true }, (_1.IS_IOS ? { timeout: 20000, maximumAge: 0 } : {})));
});
function* getUserLocation() {
    try {
        const location = yield effects_1.call(getCurrentPosition);
        const { latitude, longitude } = location.coords;
        yield effects_1.put(main_actions_1.setUserLocation({ latitude, longitude }));
    }
    catch (error) {
        if (error.code === 1) {
            _1.askLocationPermission();
        }
        else {
            console.error(error.message);
        }
    }
}
exports.getUserLocation = getUserLocation;
//# sourceMappingURL=device.js.map