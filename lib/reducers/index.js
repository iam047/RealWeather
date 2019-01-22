"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const mock_reducer_1 = require("./mock.reducer");
const nav_reducer_1 = require("./nav.reducer");
exports.default = redux_1.combineReducers({
    mockReducer: mock_reducer_1.default,
    navReducer: nav_reducer_1.default,
});
//# sourceMappingURL=index.js.map