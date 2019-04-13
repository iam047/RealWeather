import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
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
