import {StyleSheet} from 'react-native';

import {COLORS, fontWeight} from '../../styles';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 50,
        color: COLORS.WHITE,
        fontFamily: 'fantasy'
    },
    wrapperButton: {
        alignItems: 'center'
    },
    buttonStyle: {
        marginBottom: 20,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.WHITE,
        borderRadius: 50,
    },
    buttonColorGrey: {
      backgroundColor: COLORS.GREY_DARKER,
    },
    textButtonStyle: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: fontWeight.medium,
    },
    inputStyle: {
        backgroundColor: 'white',
        width: 200,
        height: 50,
        textAlign: 'center',
        fontSize: 15,
        borderRadius: 20,
    }
});
