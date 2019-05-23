import Constants from './constants';

// ------------------------------------
// Action Handlers
// ------------------------------------
const
  ACTION_HANDLERS = {
    [Constants.FETCH_BEGIN]: (state, action) => {
      return {
        ...state,
        fetch: true,
      };
    },
    [Constants.FETCH_END]: (state, action) => {
      return {
        ...state,
        fetch: false,
      };
    },
    [Constants.EDIT_BEGIN]: (state, action) => {
      return {
        ...state,
        editing: true,
      };
    },
    [Constants.EDIT_END]: (state, action) => {
      return {
        ...state,
        editing: false,
      };
    },
    [Constants.MAINLINE_INFO_END]: (state, action) => {
      return {
        ...state,
        mainLineInfo: {...action.payload},
      };
    },
    [Constants.MAINLINE_ASSIGN_OPERATOR_END]: (state, action) => {
      return {
        ...state,
        mainLineAssignOperationList: {...action.payload},
      };
    },
    [Constants.MAINLINE_FETCH_BUSINESS_HOURS]: (state, action) => {
      return {
        ...state,
        businessHours: {...action.payload},
      };
    },
    [Constants.MAINLINE_FETCH_BUSINNESS_HR_AND_TIMEZONE_EDIT_DETAILS]: (state, action) => {
      return {
        ...state,
        businessHoursAndTimezoneEditDetails: {...action.payload},
      };
    },
  },
  initialState = { };

export default function mainLineReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
