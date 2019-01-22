"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _throttle = require("lodash/throttle"); // tslint:disable-line
exports.throttle = (throttleTimeout = 500, throttleOptions = { trailing: false }) => {
    return (target, key, descriptor) => {
        if (typeof descriptor.value !== 'function') {
            console.warn(`throttle decorator can only be applied to methods not: ${typeof descriptor.value}`);
        }
        const fn = _throttle(descriptor.value, throttleTimeout, throttleOptions);
        return {
            get() {
                return fn.bind(this);
            },
        };
    };
};
//# sourceMappingURL=decorators.js.map