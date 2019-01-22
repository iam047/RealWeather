"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const geoLib = require("geolib");
const react_native_1 = require("react-native");
const other_1 = require("./other");
const helpers_1 = require("../helpers");
const alerts_1 = require("./alerts");
/* tslint:disable */
const _maxBy = require("lodash/maxBy");
const _minBy = require("lodash/minBy");
const _isArray = require("lodash/isArray");
const Permissions = require('react-native-permissions').default;
/* tslint:enable */
exports.regionToScreenPositions = (region) => {
    const { latitude, latitudeDelta, longitude, longitudeDelta } = region;
    return {
        max: {
            latitude: latitude - latitudeDelta,
            longitude: longitude + latitudeDelta,
        },
        min: {
            latitude: latitude + latitudeDelta,
            longitude: longitude - longitudeDelta,
        },
    };
};
const linkingOpenURL = (url) => {
    react_native_1.Linking.canOpenURL(url)
        .then(supported => {
        if (!supported) {
            react_native_1.Alert.alert(helpers_1.localize('mapLinkingFailedTitle'), helpers_1.localize('mapLinkingFailedDescription'), [
                { text: helpers_1.localize('cancel'), style: 'cancel' },
                { text: helpers_1.localize('copyurl'), onPress: () => other_1.toClipboard(url) },
            ]);
        }
        else {
            return react_native_1.Linking.openURL(url);
        }
    })
        .catch(err => console.error(`An error occurred: ${url}`, err));
};
exports.redirectToMap = (origin, destination) => __awaiter(this, void 0, void 0, function* () {
    const currentStatus = yield Permissions.check('location');
    const originCoords = _isArray(origin) ? exports.getCenter(origin) : origin;
    if (currentStatus !== 'authorized') {
        return alerts_1.askLocationPermission();
    }
    const url = react_native_1.Platform.select({
        android: 'https://www.google.com/maps/dir/?api=1&travelmode=driving&origin=' +
            `${originCoords.latitude},${originCoords.longitude}&destination=${destination.latitude},${destination.longitude}`,
        ios: `http://maps.apple.com/?saddr=${originCoords.latitude},${originCoords.longitude}` +
            `&daddr=${destination.latitude},${destination.longitude}&dirflg=d`,
    });
    return linkingOpenURL(url);
});
exports.showNearbyGasStations = ({ latitude, longitude }) => {
    const q = encodeURIComponent(helpers_1.localize('gasstations'));
    const zoom = 14;
    const url = react_native_1.Platform.select({
        android: `https://www.google.com/maps/search/gas+stations/@${latitude},${longitude},${zoom}z`,
        ios: `http://maps.apple.com/?sll=${latitude},${longitude}&q=${q}&z=${zoom}`,
    });
    return linkingOpenURL(url);
};
exports.getCenter = (positions) => positions.length > 1 ? geoLib.getCenter(positions) : positions[0];
/**
 * Method of getting point inside polygon
 *
 * @param {ILatLng[]} polygon
 * @return ILatLng
 */
exports.getPointInsidePolygon = (polygon) => {
    const { latitude: maxLatitude } = _maxBy(polygon, 'latitude');
    const { latitude: minLatitude } = _minBy(polygon, 'latitude');
    const { longitude: maxLongitude } = _maxBy(polygon, 'longitude');
    const { longitude: minLongitude } = _minBy(polygon, 'longitude');
    const latitude = Math.random() * (maxLatitude - minLatitude) + minLatitude;
    const longitude = Math.random() * (maxLongitude - minLongitude) + minLongitude;
    const point = { latitude, longitude };
    if (!exports.isPointInside(point, polygon)) {
        return exports.getPointInsidePolygon(polygon);
    }
    return point;
};
/**
 * Checks whether a point is inside of a polygon or not.
 *
 * @param {ILatLng} point
 * @param {ILatLng[]} positions
 * @return boolean
 */
exports.isPointInside = (point, positions) => geoLib.isPointInside(point, positions);
exports.getDistanceBetweenPoints = (a, b) => geolib.getDistance(a, b);
exports.getInitialRegion = (coords) => coords ? (Object.assign({}, helpers_1.initialRegion, coords)) : helpers_1.initialRegion;
//# sourceMappingURL=map.js.map