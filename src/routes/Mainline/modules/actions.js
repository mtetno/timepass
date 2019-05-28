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
  editTimezoneForBusinessHrAndCallRoutingApi,
  updateBusinessHoursApi,
  setRulesForOpenAndCloseHoursApi,
  businessHoursOperationOptionsApi,
  editBusinessHoursOtherRoutingOptionApi,
  viewPopupDataForFixedAndRoundRobinApi,
  changeAutomaticGreetingSoundFileApi,
  mainLineEditSoundFileNameApi
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
          dispatch(editEnd());
          dispatch(fetchBusinessHoursAndTimezoneEditDetailsEnd(json))
        });

      }).catch((error) => {
        dispatch(fetchEnd());
        dispatch(editEnd());
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
          dispatch(editEnd());
          dispatch(fetchBusinessHoursPopupEnd(json))
        });

      }).catch((error) => {
        dispatch(fetchEnd());
        dispatch(editEnd());
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
  editTimezoneForBusinessHrAndCallRouting = (accessToken, timezone) => {
    return(dispatch, getState) => {
      dispatch(editBegin());
      let apiPath = `${editTimezoneForBusinessHrAndCallRoutingApi.url}`;
      let formData = new FormData();
      formData.append(`${editTimezoneForBusinessHrAndCallRoutingApi.param_access_token}`, accessToken);
      formData.append(`${editTimezoneForBusinessHrAndCallRoutingApi.time_zone}`, timezone);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      })
    };
  },
  updateBusinessHours = (accessToken, businessId,allWeekdays,allWeeks,newHours) => {
    return(dispatch, getState) => {
      dispatch(editBegin());
      let apiPath = `${updateBusinessHoursApi.url}`;
      let formData = new FormData();
      formData.append(`${updateBusinessHoursApi.param_access_token}`, accessToken);
      formData.append(`${updateBusinessHoursApi.bus_id}`, businessId);
      formData.append(`${updateBusinessHoursApi.same_all_weekdays}`, allWeekdays ? "1" : "2");
      formData.append(`${updateBusinessHoursApi.same_all_weeks}`, allWeeks ? "1" : "2" );
      formData.append(`${updateBusinessHoursApi.hours}`, newHours);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      })
    };
  },
  setRulesForOpenAndCloseHours = (accessToken, hrType,sendCallType) => {
    return(dispatch, getState) => {
      dispatch(editBegin());
      let apiPath = `${setRulesForOpenAndCloseHoursApi.url}`;
      let formData = new FormData();
      formData.append(`${setRulesForOpenAndCloseHoursApi.param_access_token}`, accessToken);
      formData.append(`${setRulesForOpenAndCloseHoursApi.rule_hour_type}`, hrType);
      formData.append(`${setRulesForOpenAndCloseHoursApi.send_call_type}`, sendCallType);

      return fetch(apiPath, {
        method: 'POST',
        body: formData
      })
    };
  },
  businessHoursOperationOptions = (accessToken, hrType,operationType) => {
    return(dispatch, getState) => {
      dispatch(editBegin());
      let apiPath = `${businessHoursOperationOptionsApi.url}`;
      let formData = new FormData();
      formData.append(`${businessHoursOperationOptionsApi.param_access_token}`, accessToken);
      formData.append(`${businessHoursOperationOptionsApi.rule_hour_type}`, hrType);
      formData.append(`${businessHoursOperationOptionsApi.operator_type_id}`, operationType);

      return fetch(apiPath, {
        method: 'POST',
        body: formData
      })
    };
  },
  editBusinessHoursOtherRoutingOption = (accessToken, hrType,id) => {
    return(dispatch, getState) => {
      dispatch(editBegin());
      let apiPath = `${editBusinessHoursOtherRoutingOptionApi.url}`;
      let formData = new FormData();
      formData.append(`${editBusinessHoursOtherRoutingOptionApi.param_access_token}`, accessToken);
      formData.append(`${editBusinessHoursOtherRoutingOptionApi.rule_hour_type}`, hrType);
      formData.append(`${editBusinessHoursOtherRoutingOptionApi.routing_options_id}`, id);

      return fetch(apiPath, {
        method: 'POST',
        body: formData
      })
    };
  },
  viewPopupDataForFixedAndRoundRobin = (accessToken,ruleType,openOrderType) => {
    return(dispatch, getState) => {
      dispatch(fetchBegin());
      let apiPath = `${viewPopupDataForFixedAndRoundRobinApi.url}`;
      let formData = new FormData();
      formData.append(`${viewPopupDataForFixedAndRoundRobinApi.param_access_token}`, accessToken);
      formData.append(`${viewPopupDataForFixedAndRoundRobinApi.rule_hour_type}`, ruleType);
      formData.append(`${viewPopupDataForFixedAndRoundRobinApi.open_order_type}`, openOrderType);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      }).then((response) => {
        return response.json().then((json) => {
          dispatch(fetchEnd());
          dispatch(viewPopupDataForFixedAndRoundRobinEnd(json))
        });

      }).catch((error) => {
        dispatch(fetchEnd());
      });
    };
  },
  changeAutomaticGreetingSoundFile = (accessToken, soundId,soundType,ruleHrType) => {
    return(dispatch, getState) => {
      dispatch(editBegin());
      let apiPath = `${changeAutomaticGreetingSoundFileApi.url}`;
      let formData = new FormData();
      formData.append(`${changeAutomaticGreetingSoundFileApi.param_access_token}`, accessToken);
      formData.append(`${changeAutomaticGreetingSoundFileApi.bus_sound_id}`, soundId);
      formData.append(`${changeAutomaticGreetingSoundFileApi.sound_type}`, soundType);
      formData.append(`${changeAutomaticGreetingSoundFileApi.rule_hour_type}`, ruleHrType);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      })
    };
  },
  mainLineEditSoundFileName = (accessToken, soundId,soundName) => {
    return(dispatch, getState) => {
      dispatch(editBegin());
      let apiPath = `${mainLineEditSoundFileNameApi.url}`;
      let formData = new FormData();
      formData.append(`${mainLineEditSoundFileNameApi.param_access_token}`, accessToken);
      formData.append(`${mainLineEditSoundFileNameApi.soundId}`, hrType);
      formData.append(`${mainLineEditSoundFileNameApi.soundName}`, id);
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
  },
  viewPopupDataForFixedAndRoundRobinEnd = (payload) => {
    return {type: Constants.VIEW_POPUP_MEMBERS_LIST_FIXED_ROUNDROBIN, payload};
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
    editBusinessHoursOpenFlag,
    editTimezoneForBusinessHrAndCallRouting,
    updateBusinessHours,
    setRulesForOpenAndCloseHours,
    businessHoursOperationOptions,
    editBusinessHoursOtherRoutingOption,
    viewPopupDataForFixedAndRoundRobin,
    changeAutomaticGreetingSoundFile,
    mainLineEditSoundFileName
  }
