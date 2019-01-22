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
const react_native_1 = require("react-native");
const _1 = require("./");
exports.getPersistedCredentials = () => __awaiter(this, void 0, void 0, function* () {
    const accessToken = yield react_native_1.AsyncStorage.getItem('accessToken');
    const refreshToken = yield react_native_1.AsyncStorage.getItem('refreshToken');
    const userIdentifier = yield react_native_1.AsyncStorage.getItem('userIdentifier');
    // console.log('%c[getPersistedCredentials]', logStyle.default, { accessToken, refreshToken, userIdentifier });
    if (!accessToken || !refreshToken || !userIdentifier) {
        return null;
    }
    return { accessToken, refreshToken, userIdentifier };
});
exports.persistCredentials = (credentials) => __awaiter(this, void 0, void 0, function* () {
    // console.log('%c[persistCredentials]', logStyle.default, credentials);
    yield react_native_1.AsyncStorage.multiSet([
        ['accessToken', credentials.accessToken],
        ['refreshToken', credentials.refreshToken],
        ['userIdentifier', credentials.userIdentifier],
    ]);
});
exports.clearCredentials = () => __awaiter(this, void 0, void 0, function* () {
    console.log('%c[clearCredentials]', _1.logStyle.default);
    yield react_native_1.AsyncStorage.multiRemove(['accessToken', 'refreshToken', 'userIdentifier']);
});
//# sourceMappingURL=auth.js.map