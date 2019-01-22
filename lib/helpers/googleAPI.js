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
const react_native_config_1 = require("react-native-config");
const geoLib = require("geolib");
// Internal helpers
const buildURL = (type, query) => {
    const baseUrl = react_native_config_1.default.GOOGLE_MAPS_API_URL;
    const key = react_native_config_1.default.GOOGLE_MAPS_API_KEY;
    // TODO: should user's own language be used here?
    return `${baseUrl}/${type}/json?${query}&language=en&key=${key}`;
};
let requests = [];
const abortRequests = () => {
    requests.map(i => i.abort());
    requests = [];
};
// Exported helpers
exports.googlePlacesAutocomplete = (onFoundPlaces, onEmptyPlaces) => {
    return (text) => {
        abortRequests();
        if (text.length) {
            const url = buildURL('place/autocomplete', `input=${encodeURIComponent(text)}&types=(cities)`);
            const request = new XMLHttpRequest();
            requests.push(request);
            request.timeout = 20000;
            request.onreadystatechange = () => {
                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                    const responseJSON = JSON.parse(request.responseText);
                    if (typeof responseJSON.predictions !== 'undefined') {
                        const results = responseJSON.predictions;
                        onFoundPlaces(results);
                    }
                    if (typeof responseJSON.error_message !== 'undefined') {
                        console.warn('google places autocomplete: ' + responseJSON.error_message);
                    }
                }
                else {
                    console.warn('google places autocomplete: request could not be completed or has been aborted');
                }
            };
            request.open('GET', url);
            request.send();
        }
        else {
            onEmptyPlaces();
        }
    };
};
exports.getPlaceDetails = (placeId) => __awaiter(this, void 0, void 0, function* () {
    try {
        const url = buildURL('place/details', `placeid=${placeId}`);
        const data = yield fetch(url).then(response => response.json());
        if (!data.result) {
            return null;
        }
        const { lat, lng } = data.result.geometry.location;
        return { latitude: lat, longitude: lng };
    }
    catch (error) {
        console.warn('> getPlaceDetails error', error);
        return null;
    }
});
exports.getDistanceMatrix = (origin, destinations) => {
    if (!origin || !destinations) {
        return Promise.reject('missing coordinates');
    }
    const coordinates = `origin=${origin.latitude},${origin.longitude}
                         &destination=${destinations.latitude},${destinations.longitude}
                         &mode=driving&sensor=false`;
    const url = buildURL('directions', `${coordinates}`);
    return fetch(url)
        .then(response => response.json())
        .then((response) => {
        if (response.status !== 'ZERO_RESULTS') {
            const { distance: { text, value } } = response.routes[0].legs[0];
            const distance = value < 1000 ? `${value} m` : text;
            return { distance };
        }
        else {
            const distance = `${(geoLib.getDistance(origin, destinations) / 1000).toFixed()} km`;
            return { distance };
        }
    });
};
//# sourceMappingURL=googleAPI.js.map