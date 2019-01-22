"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const styles_1 = require("../styles");
const themes_1 = require("../themes");
const screenTheme = themes_1.theme.MainScreen;
exports.IS_IOS = react_native_1.Platform.OS === 'ios';
exports.DEFAULT_COUNTRY_CODE = 'FI';
exports.FINLAND = 'Finland';
exports.initialRegion = { latitudeDelta: styles_1.latitudeDelta, longitudeDelta: styles_1.longitudeDelta, latitude: 60.192059, longitude: 24.945831 };
exports.REG_EXP_LICENSE_NUMBER = /^([A-Z\d]+|\d{6}[-+A]\d{3}[\dA-Z])$/;
exports.REG_EXP_PASSWORD_COMPLEXITY = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{8,}/;
exports.CHANGE_PICKUP_FREQUENCY = 25000;
exports.NOTIFICATIONS_FETCH_FREQUENCY = 60000;
exports.mapCategoryToColor = {
    Large: screenTheme.LARGE_CATEGORY_COLOR,
    Medium: styles_1.COLORS.PRIMARY[500],
    Small: styles_1.COLORS.WARN[500],
    Van: screenTheme.VAN_CATEGORY_COLOR,
};
exports.mapCategoryToTextColor = {
    Large: screenTheme.CATEGORY_LIGHT_TEXT_COLOR,
    Medium: screenTheme.CATEGORY_DARK_TEXT_COLOR,
    Small: screenTheme.CATEGORY_DARK_TEXT_COLOR,
    Van: screenTheme.CATEGORY_DARK_TEXT_COLOR,
};
exports.RENTAL_EXPIRES_PERCENTAGE = 15;
exports.DAMAGE_IMAGE_SIZES = {
    BACK: { width: 272, height: 197 },
    FRONT: { width: 272, height: 202 },
    LEFT_SIDE: { width: 791, height: 239 },
    RIGHT_SIDE: { width: 798, height: 260 },
    TOP: { width: 322, height: 791 },
};
exports.CONNECTION_TIMEOUT = 25000;
exports.UPLOAD_IMAGE_TIMEOUT = 30000;
exports.MAX_RETURN_DISTANCE_M = 100;
exports.MIN_FUEL_LEVEL_PERCENT = 90;
// change coords in future
exports.OUR_CNC_OFFICE_COORDS = { latitude: 60.1524857, longitude: 24.9321705 };
exports.STATUS_BAR_HEIGHT = exports.IS_IOS ? 0 : react_native_1.StatusBar.currentHeight || 20;
//# sourceMappingURL=constants.js.map