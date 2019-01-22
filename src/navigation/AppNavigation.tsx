import { createStackNavigator } from 'react-navigation';

import StartScreen from '../screen/Start';
import MainScreen  from '../screen/Main';

const LoginStack = createStackNavigator({
    Start: { screen: StartScreen },
    Main : { screen: MainScreen },
}, {
    headerMode      : 'none',
    initialRouteName: 'Main',
});


export default LoginStack;
