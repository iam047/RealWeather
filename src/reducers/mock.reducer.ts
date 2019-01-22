import initialState from './../store/initialState';
import * as types from './../store/actionTypes';
import { MockReducer } from '../store/initialStateTypes/MockReducer';
import { handleActions } from '../store/utils';

// @TODO add types to state
// @TODO solve prettier formatting issue
export default handleActions(initialState.mockReducer, {
    [types.MOCK_ACTION]: (state: MockReducer) => ({
        ...state,
        mockData: [...state.mockData]
    })
});
