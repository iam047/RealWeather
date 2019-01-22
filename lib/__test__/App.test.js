"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("react-native");
const react_test_renderer_1 = require("react-test-renderer");
const App_1 = require("../App");
const react_1 = require("react");
test('renders correctly', () => {
    const tree = react_test_renderer_1.default.create(react_1.default.createElement(App_1.App, null));
    expect(tree).toBeDefined();
});
//# sourceMappingURL=App.test.js.map