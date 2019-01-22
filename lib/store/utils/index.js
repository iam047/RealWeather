"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @TODO solve prettier formatting issue
// prettier-ignore
// like redux-actions/handleActions but with fixed TS typings
exports.handleActions = (initialState, handlers) => (state = initialState, action = {}) => (action.hasOwnProperty('type') ? handlers[action.type] ? handlers[action.type](state, action) : state : state);
exports.createApiActionTypes = (base) => ({
    DEFAULT: base,
    REQUEST: `${base}_REQUEST`,
    SUCCESS: `${base}_SUCCESS`,
    FAILURE: `${base}_FAILURE`
});
//# sourceMappingURL=index.js.map