// Recursively go through nav state to find current route
import { ICurrentRoute } from '../utils';

export const selectCurrentRoute = (navReducer: any): ICurrentRoute => {
    const findCurrentRoute = (navState: any): any => {
        if (navState.index !== undefined) {
            return findCurrentRoute(navState.routes[ navState.index ]);
        }
        return navState;
    };
    return findCurrentRoute(navReducer);
};
