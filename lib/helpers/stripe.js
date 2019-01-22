"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_config_1 = require("react-native-config");
const Stripe = require('tipsi-stripe').default; // tslint:disable-line
Stripe.setOptions({ publishableKey: react_native_config_1.default.STRIPE_PUBLISHABLE_KEY });
const themes_1 = require("../themes");
const prepareParams = (params) => Object.keys(params)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(`${params[key]}`))
    .join('&');
exports.createThreeDSecureSource = (card, amount, currency) => {
    return fetch(`${react_native_config_1.default.STRIPE_API_URL}/sources`, {
        body: prepareParams({
            amount,
            currency,
            key: react_native_config_1.default.STRIPE_PUBLISHABLE_KEY,
            'redirect[return_url]': `${themes_1.theme.CONSTANTS.APP_NAME}://stripe-redirect`,
            'three_d_secure[card]': card,
            type: 'three_d_secure',
        }),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        method: 'POST',
    }).then(response => response.json())
        .then((response) => Promise.resolve(response));
};
//# sourceMappingURL=stripe.js.map