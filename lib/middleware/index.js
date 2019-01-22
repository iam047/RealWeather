"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_navigation_redux_helpers_1 = require("react-navigation-redux-helpers");
const redux_1 = require("redux");
const redux_logger_1 = require("redux-logger");
const middlewareList = [
    react_navigation_redux_helpers_1.createReactNavigationReduxMiddleware('root', (state) => state.navReducer),
];
if (__DEV__) {
    middlewareList.push(redux_logger_1.default);
}
exports.default = redux_1.applyMiddleware(...middlewareList);
//# sourceMappingURL=index.js.map