"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const _1 = require("./");
const constants_1 = require("./constants");
const OpenSettings = require('react-native-open-settings'); // tslint:disable-line
exports.showNoPermissionsIOS = (permissionType, onPressNo = _1.noop) => react_native_1.Alert.alert(_1.localize(`haveNot${permissionType}Access`), _1.localize(`canWeAccess${permissionType}`), [
    {
        onPress: onPressNo,
        style: 'cancel',
        text: _1.localize('no'),
    },
    {
        onPress: () => react_native_1.Linking.openURL('app-settings:'),
        text: _1.localize('openSettings'),
    },
]);
exports.askLocationPermission = () => {
    react_native_1.Alert.alert(_1.localize('haveNotLocationAccess'), _1.localize('canWeAccessLocation'), [
        {
            onPress: () => console.warn('Permission denied'),
            style: 'cancel',
            text: _1.localize('no'),
        },
        {
            onPress: () => constants_1.IS_IOS ? react_native_1.Linking.openURL('app-settings:') : OpenSettings.openSettings(),
            text: _1.localize('openSettings'),
        },
    ]);
};
//# sourceMappingURL=alerts.js.map