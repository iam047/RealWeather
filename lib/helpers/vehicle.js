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
const react_native_otakeys_1 = require("react-native-otakeys");
const debug_1 = require("./debug");
const otakeys_1 = require("./otakeys");
const LITERS_PER_GALON = 3.785;
const literToPercentage = (fuelLevel, fuelVolume) => fuelLevel * 100 / fuelVolume;
const gallonToPercentage = (fuelLevel, fuelVolume) => literToPercentage(fuelLevel * LITERS_PER_GALON, fuelVolume);
const percentageToPercentage = (fuelLevel, _) => fuelLevel;
var FuelUnitType;
(function (FuelUnitType) {
    FuelUnitType["PERCENTAGE"] = "PERCENTAGE";
    FuelUnitType["PERCENT"] = "PERCENT";
    FuelUnitType["GALLONS"] = "GALLONS";
    FuelUnitType["GALON"] = "GALON";
    FuelUnitType["LITERS"] = "LITERS";
    FuelUnitType["LITER"] = "LITER";
})(FuelUnitType = exports.FuelUnitType || (exports.FuelUnitType = {}));
const mapFuelTypeToCaster = {
    [FuelUnitType.PERCENTAGE]: percentageToPercentage,
    [FuelUnitType.PERCENT]: percentageToPercentage,
    [FuelUnitType.GALLONS]: gallonToPercentage,
    [FuelUnitType.GALON]: gallonToPercentage,
    [FuelUnitType.LITER]: literToPercentage,
    [FuelUnitType.LITERS]: literToPercentage,
};
exports.fuelLevelToPercentage = (fuelType, fuelLevel, fuelVolume) => {
    const caster = mapFuelTypeToCaster[fuelType];
    if (caster) {
        return caster(fuelLevel, fuelVolume);
    }
    // Assume no fuel if casting fails
    return 0;
};
exports.getAndEnableOtaKey = (contractId) => __awaiter(this, void 0, void 0, function* () {
    const keys = yield react_native_otakeys_1.default.getKeys();
    const key = keys.find((key) => !!key.extId && +key.extId === +contractId);
    if (!key) {
        const isConnectedToVehicle = yield react_native_otakeys_1.default.isConnectedToVehicle();
        isConnectedToVehicle && react_native_otakeys_1.default.disconnectFromVehicle();
        return Promise.reject({ message: 'NO_KEY' });
    }
    let otaKey = key;
    if (!otaKey.enabled) {
        otaKey = yield react_native_otakeys_1.default.enableKey(otaKey.otaId);
    }
    yield react_native_otakeys_1.default.switchToKey(otaKey.otaId, otaKey.extId || '');
    return otaKey;
});
exports.getVehicleDataWithOtakeys = (contractId) => __awaiter(this, void 0, void 0, function* () {
    let isConnectedToVehicle = false;
    try {
        isConnectedToVehicle = yield react_native_otakeys_1.default.isConnectedToVehicle();
        console.log('%c> isConnectedToVehicle', debug_1.logStyle.success, isConnectedToVehicle);
    }
    catch (error) {
        // If connection check errors out -> still try to connect
        console.warn('%c> Cannot get connection status for vehicle!', debug_1.logStyle.error, error);
        throw otakeys_1.OtaKeyErrorMessage[error.message] || error.message;
    }
    // Try get and enable key
    try {
        yield exports.getAndEnableOtaKey(contractId);
        console.log('%c> getAndEnableOtaKey', debug_1.logStyle.success);
    }
    catch (error) {
        console.warn('%c> Cannot Get and Enable key!', debug_1.logStyle.error, error);
        throw otakeys_1.OtaKeyErrorMessage[error.message] || error.message;
    }
    // Try to reconned to vehicle if there is no connection
    if (!isConnectedToVehicle) {
        try {
            yield react_native_otakeys_1.default.connectToVehicle();
            console.log('%c> connectToVehicle', debug_1.logStyle.success);
        }
        catch (error) {
            console.warn('%c> Cannot connect to vehicle!', debug_1.logStyle.error, error);
            // re-throw error so that it can be handled in caller func
            throw otakeys_1.OtaKeyErrorMessage[error.message] || error.message;
        }
    }
    try {
        const data = yield react_native_otakeys_1.default.getLastVehicleData();
        console.log('%c> getLastVehicleData', debug_1.logStyle.success, data);
        return data;
    }
    catch (error) {
        console.warn('%c> Cannot get vehicle data!', debug_1.logStyle.error, error);
        // re-throw error so that it can be handled in caller func
        throw otakeys_1.OtaKeyErrorMessage[error.message] || error.message;
    }
});
//# sourceMappingURL=vehicle.js.map