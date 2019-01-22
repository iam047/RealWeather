"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actionTypes_1 = require("../store/actionTypes");
exports.navBack = (key) => ({ type: actionTypes_1.NAV_BACK, key });
exports.navByRouteName = (routeName, params) => ({
    params,
    routeName,
    type: actionTypes_1.NAV_BY_ROUTE_NAME,
});
//# sourceMappingURL=nav.actions.js.map