"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const styles_1 = require("../../styles");
const themes_1 = require("../../themes");
const createContainerStyle = (size) => ({
    height: size,
    width: size,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: styles_1.COLORS.SECONDARY[800],
    borderRadius: size / 2,
});
exports.createIcon = (Icon) => {
    class IconHOC extends React.PureComponent {
        render() {
            const { fill = false, size = 20, containerStyle } = this.props;
            const containerSize = size * themes_1.theme.CONSTANTS.ICON_FILL_CONTAINER_SIZE_SCALE;
            if (fill && themes_1.theme.CONSTANTS.ALLOW_ICON_FILLING) {
                return React.createElement(react_native_1.View, { style: [createContainerStyle(containerSize), containerStyle] },
                    React.createElement(Icon, Object.assign({}, this.props)));
            }
            return React.createElement(Icon, Object.assign({}, this.props));
        }
    }
    return IconHOC;
};
//# sourceMappingURL=createIcon.js.map