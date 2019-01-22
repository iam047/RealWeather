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
const axios_1 = require("axios");
exports.getProviderInfo = () => axios_1.default('http://ip-api.com/json');
exports.getDeviceCountryByIp = (setCountryCode) => __awaiter(this, void 0, void 0, function* () {
    const providerInfo = yield exports.getProviderInfo();
    setCountryCode(providerInfo.data.countryCode);
});
//# sourceMappingURL=services.js.map