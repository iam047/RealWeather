"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initialState_1 = require("./../store/initialState");
const types = require("./../store/actionTypes");
const utils_1 = require("../store/utils");
// @TODO add types to state
// @TODO solve prettier formatting issue
exports.default = utils_1.handleActions(initialState_1.default.mockReducer, {
    [types.MOCK_ACTION]: (state) => (Object.assign({}, state, { mockData: [...state.mockData] }))
});
//# sourceMappingURL=mock.reducer.js.map