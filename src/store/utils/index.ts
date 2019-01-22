// @TODO change initialState and handlers types
interface IApiActionTypes {
    DEFAULT: string;
    REQUEST: string;
    SUCCESS: string;
    FAILURE: string;
}

// @TODO solve prettier formatting issue
// prettier-ignore
// like redux-actions/handleActions but with fixed TS typings
export const handleActions = (initialState: any, handlers: any) => (state = initialState, action: any = {}) => (
    action.hasOwnProperty('type') ? handlers[action.type] ? handlers[action.type](state, action) : state : state
);

export const createApiActionTypes = (base: string): IApiActionTypes => ({
    DEFAULT: base,
    REQUEST: `${base}_REQUEST`,
    SUCCESS: `${base}_SUCCESS`,
    FAILURE: `${base}_FAILURE`
});
