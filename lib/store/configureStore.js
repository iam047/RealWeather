"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const middleware_1 = require("../middleware");
const initialState_1 = require("./initialState");
const reducers_1 = require("../reducers");
exports.default = () => redux_1.createStore(reducers_1.default, initialState_1.default, middleware_1.default);
//# sourceMappingURL=configureStore.js.map