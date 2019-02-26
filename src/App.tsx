import * as React   from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import configureStore from './store/configureStore';

const store = configureStore();

import ReduxNavigation from './navigation/ReduxNavigation';

export class App extends React.Component {
    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <Provider store={ store }>
               <ReduxNavigation/>
            </Provider>
        );
    }
}
