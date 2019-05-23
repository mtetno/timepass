import Constants from './constants';

// ------------------------------------
// Action Handlers
// ------------------------------------
const
  ACTION_HANDLERS = {
    [Constants.FETCH_ACCOUNTS_BEGIN]: (state, action) => {
      return {
        ...state,
        fetch: true,
      };
    },
    [Constants.FETCH_ACCOUNTS_END]: (state, action) => {
      return {
        ...state,
        fetch: false,
        ...action.payload,
      };
    },
  },
  initialState = { };

export default function accountsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
