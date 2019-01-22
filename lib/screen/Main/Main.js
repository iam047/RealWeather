"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const instructions = react_native_1.Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
class Main extends React.Component {
    render() {
        return (React.createElement(react_native_1.View, { style: styles.container },
            React.createElement(react_native_1.Text, { style: styles.welcome }, "Welcome to React Native!"),
            React.createElement(react_native_1.Text, { style: styles.instructions }, "To get started, edit App.js"),
            React.createElement(react_native_1.Text, { style: styles.instructions }, instructions)));
    }
}
exports.Main = Main;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
//# sourceMappingURL=Main.js.map