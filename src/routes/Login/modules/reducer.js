import Constants from './constants';

// ------------------------------------
// Action Handlers
// ------------------------------------
const
  ACTION_HANDLERS = {
    [Constants.USER_LOGIN_BEGIN]: (state, action) => {
      return {
        ...state,
        fetch: true,
      };
    },
    [Constants.USER_LOGIN_END]: (state, action) => {
      return {
        ...state,
        fetch: false,
        ...action.payload,
      };
    },
  },
  initialState = { };

export default function loginReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
