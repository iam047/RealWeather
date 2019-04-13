import {StyleSheet} from 'react-native';
import {COLORS, fontWeight} from "../../styles";

export default StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    textCityName: {
        fontFamily: 'SF UI Text',
        fontSize: 40,
        color: COLORS.WHITE,
    },
    buttonStyle: {
        marginBottom: 20,
        width: 130,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.WHITE,
    },
    textButtonStyle: {
        fontSize: 15,
        fontWeight: fontWeight.medium,

    },
    card: {
        backgroundColor: 'rgba(56, 172, 236, 1)',
        borderWidth: 0,
        borderRadius: 20
    },
    time: {
        fontSize: 25,
        color: '#fff'
    },
    notes: {
        fontSize: 18,
        color: '#fff',
    },
    contentWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
