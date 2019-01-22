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
const react_native_config_1 = require("react-native-config");
const auth_1 = require("./auth");
const helpers_1 = require("../helpers");
const actionTypes_1 = require("../store/actionTypes");
const initialStateTypes_1 = require("../store/initialStateTypes");
const selectors_1 = require("../selectors");
// tslint:disable
const _get = require("lodash/get");
const _find = require("lodash/find");
const jwtDecode = require("jwt-decode");
var ApiMethod;
(function (ApiMethod) {
    ApiMethod["GET"] = "GET";
    ApiMethod["POST"] = "POST";
    ApiMethod["PUT"] = "PUT";
    ApiMethod["PATCH"] = "PATCH";
    ApiMethod["DELETE"] = "DELETE";
})(ApiMethod = exports.ApiMethod || (exports.ApiMethod = {}));
/**
 * Add automatic JWT token check to HTTP method and
 * refreshes the token if it is about to expire or it has been expired.
 */
let isRefreshingToken = false;
const withTokenRefresh = (clientFunc) => {
    return (...args) => __awaiter(this, void 0, void 0, function* () {
        const credentials = yield auth_1.getPersistedCredentials();
        // Just call the HTTP client func -> delegate session error handling to it
        // Also some urls like `/login` have no active session so we should ignore token refresing for them
        if (!credentials) {
            return clientFunc(...args);
        }
        const { accessToken, refreshToken, userIdentifier } = credentials;
        const { exp } = jwtDecode(accessToken);
        const expiryTime = exp * 1000;
        const now = Date.now();
        const bufferTime = 1000 * 60 * 2; // 2min
        // If token has expired or is about to expire -> get new access token before calling client func
        if (expiryTime - bufferTime < now && !isRefreshingToken) {
            isRefreshingToken = true;
            console.log('%c> API refresing token...', helpers_1.logStyle.default);
            try {
                const url = `${react_native_config_1.default.CALL_API_URL}/generate-new-access-token`;
                const opts = { headers: { 'x-api-key': react_native_config_1.default.X_API_KEY } };
                const data = { deviceId: helpers_1.getUniqueID(), refreshToken, userIdentifier };
                const res = yield axios_1.default.post(url, data, opts);
                console.log('%c> API token refresh success', helpers_1.logStyle.success, res.data);
                yield auth_1.persistCredentials(res.data);
                isRefreshingToken = false;
            }
            catch (error) {
                console.warn('%c> API token refresh failed', helpers_1.logStyle.error, error);
                // If refreshing fails clear credentials so that user is logged out in axios request interceptor
                yield auth_1.clearCredentials();
                isRefreshingToken = false;
            }
            // Token has been refresh -> call client func
            return clientFunc(...args);
        }
        // Wait until token has been refreshed and then call client func
        if (isRefreshingToken) {
            console.log('%c> API waiting token refreshing...', helpers_1.logStyle.default);
            while (isRefreshingToken) {
                yield helpers_1.delay(500);
            }
            return clientFunc(...args);
        }
        // Token is still valid -> just call client func
        return clientFunc(...args);
    });
};
const httpClient = axios_1.default.create({ baseURL: react_native_config_1.default.CALL_API_URL });
const api = {
    store: null,
    http: Object.assign({}, httpClient, { delete: withTokenRefresh(httpClient.delete), get: withTokenRefresh(httpClient.get), patch: withTokenRefresh(httpClient.patch), post: withTokenRefresh(httpClient.post), put: withTokenRefresh(httpClient.put), postNoAuth: httpClient.post, getNoAuth: httpClient.get }),
};
// Add logging to API responses and return the actual data for the response
api.http.interceptors.response.use(response => {
    console.log('%c> API response', helpers_1.logStyle.success, response);
    return response.data;
}, error => {
    console.warn('%c> API error', helpers_1.logStyle.error, error);
    const errResponse = _get(error, 'response');
    if (errResponse) {
        // Axios wraps errors returned by the api inside `errResponse.data`
        console.warn('%c> API error response', helpers_1.logStyle.error, errResponse.data);
    }
    return Promise.reject(error);
});
// Ignore auth if the url and the method matches the whitelist
// NOTE: only part of the url is required!
const AUTH_WHITELIST = {
    '^/login((/fb|/google).*)?$': [ApiMethod.GET, ApiMethod.POST],
    '^/account/password$': [ApiMethod.PUT],
    '^/sign-up$': [ApiMethod.POST],
    '^/account/password/send-recovery-code$': [ApiMethod.POST],
    '^/account/send-phone-verification-code$': [ApiMethod.POST],
    '^/account/phone-verify$': [ApiMethod.POST],
};
const shouldIgnoreAuth = (url, method) => {
    const allowedUrls = Object.keys(AUTH_WHITELIST);
    const urlHit = _find(allowedUrls, (u) => new RegExp(u).test(url));
    return urlHit ? AUTH_WHITELIST[urlHit].includes(method) : false;
};
// Automatically add jwt auth token to certain requests
api.http.interceptors.request.use((requestConfig) => __awaiter(this, void 0, void 0, function* () {
    const reqConfig = Object.assign({}, requestConfig, { timeout: helpers_1.CONNECTION_TIMEOUT, headers: Object.assign({}, requestConfig.headers, { 'Content-Type': 'application/json', 'x-api-key': react_native_config_1.default.X_API_KEY }) });
    if (api.store && api.store.getState().appStateReducer.networkConnectedStatus === initialStateTypes_1.NetworkConnectionStatus.DISCONNECTED) {
        helpers_1.CrashlyticsError(`api helper ${JSON.stringify(api.store.getState().appStateReducer)}`);
        api.store.dispatch({
            type: actionTypes_1.SET_NETWORK_CONNECTION,
            payload: initialStateTypes_1.NetworkConnectionStatus.DISCONNECTED,
        });
    }
    // Don't try to include auth token to certain requests
    // NOTE: for some weird reason the `url` and `method` can be undefined with axios...
    // NOTE: slso `reqConfig.method` is lower cased and a `string` type
    if (reqConfig.url &&
        reqConfig.method &&
        shouldIgnoreAuth(reqConfig.url, reqConfig.method.toUpperCase())) {
        console.log('%c> API request (no auth)', helpers_1.logStyle.default, reqConfig);
        return reqConfig;
    }
    // The `withToken` has already been run if we are here so we should have valid credentials
    // so add the access token to the request
    const credentials = yield auth_1.getPersistedCredentials();
    if (!credentials) {
        // Log user out if we don't have any credentials
        if (api.store) {
            const currentRoute = selectors_1.selectCurrentRoute(api.store.getState().navReducer).routeName;
            currentRoute !== 'Start' && api.store.dispatch({ type: actionTypes_1.RELOAD_APP });
        }
        return Promise.reject(new Error('No API credentials!'));
    }
    reqConfig.headers['Authorization'] = `Bearer ${credentials.accessToken}`;
    console.log('%c> API request', helpers_1.logStyle.default, reqConfig);
    return reqConfig;
}), error => {
    console.warn('%c> API request error', helpers_1.logStyle.error, error);
    return Promise.reject(error);
});
exports.HTTP_DATA_METHODS = [ApiMethod.POST, ApiMethod.PUT, ApiMethod.PATCH];
exports.apiMethodMapper = {
    GET: api.http.get,
    POST: api.http.post,
    PATCH: api.http.patch,
    PUT: api.http.put,
    DELETE: api.http.delete,
};
exports.apiHandler = (method, url, data) => {
    const handler = exports.apiMethodMapper[method];
    return exports.HTTP_DATA_METHODS.includes(method)
        ? handler(url, data)
        : handler(url);
};
// -------------------------------------------------------------------------------------------
exports.connectApiToStore = (store) => {
    api.store = store;
};
exports.default = api;
//# sourceMappingURL=api.js.map