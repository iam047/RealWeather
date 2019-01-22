"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const react_native_1 = require("react-native");
const actions_1 = require("../../actions");
const styles_1 = require("./styles");
class StartScreen extends react_1.default.Component {
    componentDidMount() {
        //fetch('http://api.openweathermap.org/data/2.5/weather?lat=49.26&lon=32.3&APPID=380333d47d591b073e01150c5943197a')
        fetch('https://api.darksky.net/forecast/e6c9afe1d5a53031082a853ae00ce790/49.42854,32.06207')
            .then(response => response.json())
            .then(date => console.log(JSON.stringify({ date }, null, 4)))
            .catch(error => {
            console.log('error', error);
        });
    }
    render() {
        return (react_1.default.createElement(react_native_1.View, { style: styles_1.default.container },
            react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: () => this.props.navBack() },
                react_1.default.createElement(react_native_1.Text, null, "StartScreen "))));
    }
}
exports.default = react_redux_1.connect(null, { navBack: actions_1.navBack })(StartScreen);
//# sourceMappingURL=index.js.map