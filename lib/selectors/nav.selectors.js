"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectCurrentRoute = (navReducer) => {
    const findCurrentRoute = (navState) => {
        if (navState.index !== undefined) {
            return findCurrentRoute(navState.routes[navState.index]);
        }
        return navState;
    };
    return findCurrentRoute(navReducer);
};
//# sourceMappingURL=nav.selectors.js.map