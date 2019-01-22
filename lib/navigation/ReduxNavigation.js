"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const react_navigation_redux_helpers_1 = require("react-navigation-redux-helpers");
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const AppNavigation_1 = require("./AppNavigation");
const Navigation = react_navigation_redux_helpers_1.reduxifyNavigator(AppNavigation_1.default, 'root');
class ReduxNavigation extends React.Component {
    constructor() {
        super(...arguments);
        this.onBackPress = () => {
            console.log('222');
        };
    }
    componentDidMount() {
        react_native_1.BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }
    componentWillUnmount() {
        react_native_1.BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }
    render() {
        const { state, dispatch } = this.props;
        return React.createElement(Navigation, { state: state, dispatch: dispatch });
    }
}
const mapStateToProps = ({ navReducer }) => ({
    state: navReducer,
});
const mapDispatchToProps = (dispatch) => redux_1.bindActionCreators({ dispatch }, dispatch);
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ReduxNavigation);
//# sourceMappingURL=ReduxNavigation.js.map