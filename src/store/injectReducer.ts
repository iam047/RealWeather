export default (initialState: any, handlers: any) => (state = initialState, action: any = {}) =>
    action.hasOwnProperty('type') ? (handlers[action.type] ? handlers[action.type](state, action) : state) : state;
