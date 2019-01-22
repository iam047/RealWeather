"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (initialState, handlers) => (state = initialState, action = {}) => action.hasOwnProperty('type') ? (handlers[action.type] ? handlers[action.type](state, action) : state) : state;
//# sourceMappingURL=injectReducer.js.map