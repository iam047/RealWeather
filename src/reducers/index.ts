import { combineReducers } from 'redux';

import { IInitialState } from '../store/initialStateTypes';
import mockReducer from './mock.reducer';
import navReducer from './nav.reducer';

export default combineReducers<IInitialState>({
    mockReducer,
    navReducer,
});
