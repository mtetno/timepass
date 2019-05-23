import jwt from 'jsonwebtoken';
import {browserHistory} from 'react-router';
import Constants from './constants';
import {
  mainLineInfoApi,
  mainLineAssignOperationListApi,
  mainLineAddOperatorApi,
  mainLineEditNameApi,
  mainLineAbbrEditApi,
  mainLineOptionsEditApi,
  mainlineNumberLabelEditApi,
  mainlinRemoveAssignOperatorApi,
  fetchBusinessHoursApi,
  fetchBusinessHoursAndTimezoneEditDetailsApi,
  fetchBusinessHoursPopupApi,
  editBusinessHoursOpenFlagApi,

} from '../../../config';

const fetchBegin = () => {
    return {type: Constants.FETCH_BEGIN};
  },
  mainLineInfo = (accessToken) => {
    return(dispatch, getState) => {
      dispatch(fetchBegin());
      let apiPath = `${mainLineInfoApi.url}`;
      let formData = new FormData();
      formData.append(`${mainLineInfoApi.param_access_token}`, accessToken);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      }).then((response) => {
        return response.json().then((json) => {
          dispatch(mainLineInfoEnd(json));
          dispatch(fetchEnd());
          dispatch(editEnd());
        });

      }).catch((error) => {
        dispatch(fetchEnd());
        dispatch(editEnd());
      });
    };
  },
  mainLineAssignOperationList = (accessToken) => {
    return(dispatch, getState) => {
      dispatch(fetchBegin());
      let apiPath = `${mainLineAssignOperationListApi.url}`;
      let formData = new FormData();
      formData.append(`${mainLineAssignOperationListApi.param_access_token}`, accessToken);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      }).then((response) => {
        return response.json().then((json) => {
          dispatch(mainLineAssignOperationListEnd(json));
          dispatch(fetchEnd());
          dispatch(editEnd());
        });

      }).catch((error) => {
        dispatch(fetchEnd());
        dispatch(editEnd());
      });
    };
  },
  mainLineAddOperator = (accessToken, teamMemberId) => {
    return(dispatch, getState) => {
      dispatch(editBegin());
      let apiPath = `${mainLineAddOperatorApi.url}`;
      let formData = new FormData();
      formData.append(`${mainLineAddOperatorApi.param_access_token}`, accessToken);
      formData.append(`${mainLineAddOperatorApi.param_team_member_id}`, teamMemberId);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      })
    };
  },
  mainLineEditName = (accessToken, name) => {
    return(dispatch, getState) => {
      dispatch(editBegin());
      let apiPath = `${mainLineEditNameApi.url}`;
      let formData = new FormData();
      formData.append(`${mainLineEditNameApi.param_access_token}`, accessToken);
      formData.append(`${mainLineEditNameApi.param_name}`, name);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      }).then((response) => {
        return response.json().then((json) => {
          dispatch(editEnd());
        });

      }).catch((error) => {
        dispatch(editEnd());
      });
    };
  },
  mainLineAbbrEdit = (accessToken, abbr) => {
    return(dispatch, getState) => {
      dispatch(editBegin());
      let apiPath = `${mainLineAbbrEditApi.url}`;
      let formData = new FormData();
      formData.append(`${mainLineAbbrEditApi.param_access_token}`, accessToken);
      formData.append(`${mainLineAbbrEditApi.param_abbrivation}`, abbr);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      }).then((response) => {
        return response.json().then((json) => {
          dispatch(editEnd());
        });

      }).catch((error) => {
        dispatch(editEnd());
      });
    };
  },
  mainLineOptionsEdit = (accessToken, callStatus, voicemailNotification, faxNotification) => {
    return(dispatch, getState) => {
      dispatch(editBegin());
      let apiPath = `${mainLineOptionsEditApi.url}`;
      let formData = new FormData();
      formData.append(`${mainLineOptionsEditApi.param_access_token}`, accessToken);
      formData.append(`${mainLineOptionsEditApi.param_calls_status}`, callStatus);
      formData.append(`${mainLineOptionsEditApi.param_notifications_for_voicemail}`, voicemailNotification);
      formData.append(`${mainLineOptionsEditApi.param_notifications_for_fax}`, faxNotification);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      }).then((response) => {
        return response.json().then((json) => {
          dispatch(editEnd());
        });

      }).catch((error) => {
        dispatch(editEnd());
      });
    };
  },
  mainLinePhoneLabelEdit = (accessToken, id, label) => {
    return(dispatch, getState) => {
      dispatch(editBegin());
      let apiPath = `${mainlineNumberLabelEditApi.url}`;
      let formData = new FormData();
      formData.append(`${mainlineNumberLabelEditApi.param_access_token}`, accessToken);
      formData.append(`${mainlineNumberLabelEditApi.param_mainline_number_id}`, id);
      formData.append(`${mainlineNumberLabelEditApi.param_label}`, label);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      })
    };
  },
  mainlinRemoveAssignOperator = (accessToken, id) => {
    return(dispatch, getState) => {
      dispatch(editBegin());
      let apiPath = `${mainlinRemoveAssignOperatorApi.url}`;
      let formData = new FormData();
      formData.append(`${mainlinRemoveAssignOperatorApi.param_access_token}`, accessToken);
      formData.append(`${mainlinRemoveAssignOperatorApi.param_account_id}`, id);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      })
    };
  },
  fetchBusinessHours = (accessToken, id) => {
    return(dispatch, getState) => {
      dispatch(fetchBegin());
      let apiPath = `${fetchBusinessHoursApi.url}`;
      let formData = new FormData();
      formData.append(`${fetchBusinessHoursApi.param_access_token}`, accessToken);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      }).then((response) => {
        return response.json().then((json) => {
          dispatch(fetchEnd());
          dispatch(fetchBusinessHoursEnd(json))
        });

      }).catch((error) => {
        dispatch(fetchEnd());
      });
    };
  },
  fetchBusinessHoursAndTimezoneEditDetails = (accessToken, id) => {
    return(dispatch, getState) => {
      dispatch(fetchBegin());
      let apiPath = `${fetchBusinessHoursAndTimezoneEditDetailsApi.url}`;
      let formData = new FormData();
      formData.append(`${fetchBusinessHoursAndTimezoneEditDetailsApi.param_access_token}`, accessToken);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      }).then((response) => {
        return response.json().then((json) => {
          dispatch(fetchEnd());
          dispatch(fetchBusinessHoursAndTimezoneEditDetailsEnd(json))
        });

      }).catch((error) => {
        dispatch(fetchEnd());
      });
    };
  },
  fetchBusinessHoursPopup = (accessToken) => {
    return(dispatch, getState) => {
      dispatch(fetchBegin());
      let apiPath = `${fetchBusinessHoursPopupApi.url}`;
      let formData = new FormData();
      formData.append(`${fetchBusinessHoursPopupApi.param_access_token}`, accessToken);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      }).then((response) => {
        return response.json().then((json) => {
          dispatch(fetchEnd());
          dispatch(fetchBusinessHoursPopupEnd(json))
        });

      }).catch((error) => {
        dispatch(fetchEnd());
      });
    };
  },
  editBusinessHoursOpenFlag = (accessToken, flag) => {
    return(dispatch, getState) => {
      dispatch(editBegin());
      let apiPath = `${editBusinessHoursOpenFlagApi.url}`;
      let formData = new FormData();
      formData.append(`${editBusinessHoursOpenFlagApi.param_access_token}`, accessToken);
      formData.append(`${editBusinessHoursOpenFlagApi.param_open_hours_flag}`, flag);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      })
    };
  },
  fetchEnd = (payload) => {
    return {type: Constants.FETCH_END, payload};
  },
  editBegin = (payload) => {
    return {type: Constants.EDIT_BEGIN, payload};
  },
  editEnd = (payload) => {
    return {type: Constants.EDIT_END, payload};
  },
  mainLineInfoEnd = (payload) => {
    return {type: Constants.MAINLINE_INFO_END, payload};
  },
  mainLineAssignOperationListEnd = (payload) => {
    return {type: Constants.MAINLINE_ASSIGN_OPERATOR_END, payload};
  },
  mainLineAddOperatorEnd = (payload) => {
    return {type: Constants.MAINLINE_ADD_OPERATOR, payload};
  },
  fetchBusinessHoursEnd = (payload) => {
    return {type: Constants.MAINLINE_FETCH_BUSINESS_HOURS, payload};
  },
  fetchBusinessHoursAndTimezoneEditDetailsEnd = (payload) => {
    return {type: Constants.MAINLINE_FETCH_BUSINNESS_HR_AND_TIMEZONE_EDIT_DETAILS, payload};
  },
  fetchBusinessHoursPopupEnd = (payload) => {
    return {type: Constants.FETCH_BSUINESS_HR_POPUP, payload};
  }

  export default {
    mainLineInfo,
    mainLineAssignOperationList,
    mainLineAddOperator,
    mainLineEditName,
    mainLineAbbrEdit,
    mainLineOptionsEdit,
    mainLinePhoneLabelEdit,
    mainlinRemoveAssignOperator,
    fetchBusinessHours,
    fetchBusinessHoursAndTimezoneEditDetails,
    fetchBusinessHoursPopup,
    editBusinessHoursOpenFlag
  }
