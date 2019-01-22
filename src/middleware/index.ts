import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { applyMiddleware, Middleware }          from 'redux';
import logger                                   from 'redux-logger';

import { IInitialState } from '../store/initialStateTypes';

const middlewareList: Middleware[] = [
    createReactNavigationReduxMiddleware('root', (state: IInitialState) => state.navReducer),
];

if (__DEV__) {
    middlewareList.push(logger);
}

export default applyMiddleware(...middlewareList);
