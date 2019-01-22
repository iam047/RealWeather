"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_navigation_1 = require("react-navigation");
const Start_1 = require("../screen/Start");
const Main_1 = require("../screen/Main");
const LoginStack = react_navigation_1.createStackNavigator({
    Start: { screen: Start_1.default },
    Main: { screen: Main_1.default },
}, {
    headerMode: 'none',
    initialRouteName: 'Main',
});
exports.default = LoginStack;
//# sourceMappingURL=AppNavigation.js.map