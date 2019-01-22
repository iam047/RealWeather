import { createAction } from 'redux-actions';

import * as actions from '../store/actionTypes';

export const mockAction = createAction(actions.MOCK_ACTION);
