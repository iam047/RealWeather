import { combineReducers } from 'redux';

import { IInitialState } from '../store/initialStateTypes';
import mockReducer from './mock.reducer';
import navReducer from './nav.reducer';
import weatherReducer from './weather.reducer';

export default combineReducers<IInitialState>({
    mockReducer,
    navReducer,
    weatherReducer,
});
