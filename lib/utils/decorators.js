"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const throttle_1 = require("lodash/throttle");
exports.throttle = (throttleTimeout = 500, throttleOptions = { trailing: false }) => {
    return (target, key, descriptor) => {
        if (typeof descriptor.value !== 'function') {
            console.warn(`throttle decorator can only be applied to methods not: ${typeof descriptor.value}`);
        }
        const fn = throttle_1.default(descriptor.value, throttleTimeout, throttleOptions);
        return {
            get() {
                return fn.bind(this);
            }
        };
    };
};
//# sourceMappingURL=decorators.js.map