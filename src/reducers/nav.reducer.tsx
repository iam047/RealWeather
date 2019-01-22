import { NavigationActions, NavigationParams } from 'react-navigation';

import AppNavigation          from '../navigation/AppNavigation';
import { selectCurrentRoute } from '../selectors';

import {
    NAV_BACK,
    NAV_BY_ROUTE_NAME,
    NAV_TO_SELECT_LOGIN,
}                             from '../store/actionTypes';

const _throttle = require('lodash/throttle');  // tslint:disable-line

const navState = (routeName: string, state: any, params?: NavigationParams) => {
    const currentRoute = selectCurrentRoute(state);
    const { getStateForAction } = AppNavigation.router;

    return (currentRoute.routeName === routeName) ?
        params
            ? getStateForAction(NavigationActions.setParams({ key: currentRoute.key, params }), state)
            : state
        : getStateForAction(NavigationActions.navigate({ routeName, params }), state);
};


const navStateHandler = _throttle(navState, 300, { trailing: false });

export default (state: any, action: any) => {
    switch (action.type) {
        case NAV_BACK: {
            return AppNavigation.router.getStateForAction(
                NavigationActions.back(action.key ? { key: action.key } : undefined),
                state,
            );
        }
        case NAV_TO_SELECT_LOGIN: { return navStateHandler('SelectLogin', state); }
        case NAV_BY_ROUTE_NAME: { return navStateHandler(action.routeName, state, action.params); }
        default: {
            const newState = AppNavigation.router.getStateForAction(action, state);

            return newState || state;
        }
    }
};
