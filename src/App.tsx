import * as React   from 'react';
import { Provider } from 'react-redux';


import configureStore from './store/configureStore';

const store = configureStore();

import ReduxNavigation from './navigation/ReduxNavigation';

export class App extends React.Component {
    render() {
        return (
            <Provider store={ store }>
               <ReduxNavigation/>
            </Provider>
        );
    }
}
