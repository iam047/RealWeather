"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_navigation_1 = require("react-navigation");
const AppNavigation_1 = require("../navigation/AppNavigation");
const selectors_1 = require("../selectors");
const actionTypes_1 = require("../store/actionTypes");
const _throttle = require('lodash/throttle'); // tslint:disable-line
const navState = (routeName, state, params) => {
    const currentRoute = selectors_1.selectCurrentRoute(state);
    const { getStateForAction } = AppNavigation_1.default.router;
    return (currentRoute.routeName === routeName) ?
        params
            ? getStateForAction(react_navigation_1.NavigationActions.setParams({ key: currentRoute.key, params }), state)
            : state
        : getStateForAction(react_navigation_1.NavigationActions.navigate({ routeName, params }), state);
};
const navStateHandler = _throttle(navState, 300, { trailing: false });
exports.default = (state, action) => {
    switch (action.type) {
        case actionTypes_1.NAV_BACK: {
            return AppNavigation_1.default.router.getStateForAction(react_navigation_1.NavigationActions.back(action.key ? { key: action.key } : undefined), state);
        }
        case actionTypes_1.NAV_TO_SELECT_LOGIN: {
            return navStateHandler('SelectLogin', state);
        }
        case actionTypes_1.NAV_BY_ROUTE_NAME: {
            return navStateHandler(action.routeName, state, action.params);
        }
        default: {
            const newState = AppNavigation_1.default.router.getStateForAction(action, state);
            return newState || state;
        }
    }
};
//# sourceMappingURL=nav.reducer.js.map