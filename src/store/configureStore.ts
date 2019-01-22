import { createStore, Store } from 'redux';

import middleware from '../middleware';
import initialState from './initialState';
import { IInitialState } from './initialStateTypes';
import reducer from '../reducers';

export default (): Store<IInitialState> => createStore(reducer, initialState, middleware)
