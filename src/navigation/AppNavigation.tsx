import {createStackNavigator} from 'react-navigation';

import StartScreen from '../screen/Start';
import MainScreen from '../screen/Main';
import LocationWeather from '../screen/LocationWeather';

const LoginStack = createStackNavigator({
    Start: {
        screen: StartScreen,
        navigationOptions: {
            title: 'Search City',
        },
    },
    LocationWeather: {
        screen: LocationWeather,
        navigationOptions: {
            title: 'Location Weather',
        },
    },
    Main: {
        screen: MainScreen,
        navigationOptions: {
            header: null,
        }
    },
}, {
    initialRouteName: 'Main',
});


export default LoginStack;
