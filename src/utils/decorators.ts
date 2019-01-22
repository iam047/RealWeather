import _throttle from 'lodash/throttle';

export const throttle = (throttleTimeout = 500, throttleOptions = { trailing: false }) => {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        if (typeof descriptor.value !== 'function') {
            console.warn(`throttle decorator can only be applied to methods not: ${typeof descriptor.value}`);
        }

        const fn = _throttle(descriptor.value, throttleTimeout, throttleOptions);

        return {
            get() {
                return fn.bind(this);
            }
        };
    };
};
