"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const configureStore_1 = require("./store/configureStore");
const store = configureStore_1.default();
const ReduxNavigation_1 = require("./navigation/ReduxNavigation");
class App extends React.Component {
    render() {
        return (React.createElement(react_redux_1.Provider, { store: store },
            React.createElement(ReduxNavigation_1.default, null)));
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map