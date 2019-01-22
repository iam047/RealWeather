"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const react_native_1 = require("react-native");
const actions_1 = require("../../actions");
const styles_1 = require("./styles");
class MainScreen extends react_1.default.Component {
    render() {
        return (react_1.default.createElement(react_native_1.View, { style: styles_1.default.container },
            react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: () => this.props.navByRouteName('Start') },
                react_1.default.createElement(react_native_1.Text, null, "MainScreen"))));
    }
}
exports.default = react_redux_1.connect(null, { navByRouteName: actions_1.navByRouteName })(MainScreen);
//# sourceMappingURL=index.js.map