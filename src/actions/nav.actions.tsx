import { NavigationParams } from 'react-navigation';

import {
    NAV_BACK, NAV_BY_ROUTE_NAME,
} from '../store/actionTypes';

export const navBack = (key?: string) => ({ type: NAV_BACK, key });

export const navByRouteName = (routeName: string, params?: NavigationParams) => ({
    params,
    routeName,
    type: NAV_BY_ROUTE_NAME,
});


