import jwt from 'jsonwebtoken';
import {browserHistory} from 'react-router';
import Constants from './constants';
import {profile, callHandling, yourDevices,businessHoursTimeZone,editname,
editPasswordApi,editVoicePinApi,editCallerIdApi,editTimeZoneApi,editRingDurationApi,
editCallHandlingVoicemailName,deleteCallHandlingVoiceMailApi,uploadCallHandlingAudioApi,saveCallHandlingDropdownPreferanceApi
,editYourSaftyApi,fetchSaftyApi,editReceiveEmailOptionApi,editAdvMisscallRouteOptionApi,editAdvMissCallDepartmentOptionApi
,editAdvMissCallTeamMemberOptionApi,addForwardingNumberApi,fetchSaftyFieldsDataApi,removeYourDeviceApi,yourDeviceAdvSettingsApi,
editYourDeviceAdvSettingsApi,editAdvMisscallDropdownValueApi,uploadAdvMisscallRouteAudioApi
} from '../../../config';

const fetchBegin = () => {
    return {type: Constants.FETCH_BEGIN};
  },
  fetchUserProfile = (accessToken) => {
    return(dispatch, getState) => {
      dispatch(fetchBegin());
      let apiPath = `${profile.url}`;
      let formData = new FormData();
      formData.append(`${profile.param_access_token}`, accessToken);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      }).then((response) => {
        return response.json().then((json) => {
          dispatch(fetchUserProfileEnds(json));
            dispatch(fetchEnd());
        });

      }).catch((error) => {
        dispatch(fetchUserProfileEnds());
          dispatch(fetchEnd());
      });
    };
  },
  fetchUserProfileEnds = (payload) => {
    return {type: Constants.FETCH_PROFILE_END, payload};
  },
  fetchCallHandling = (accessToken) => {
    return(dispatch, getState) => {
      let apiPath = `${callHandling.url}`;
      let formData = new FormData();
      formData.append(`${callHandling.param_access_token}`, accessToken);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      }).then((response) => {
        return response.json().then((json) => {
          dispatch(fetchCallHandlingEnd(json));
          dispatch(editEnd(json));
          dispatch(uploadEnd(json));
        });

      }).catch((error) => {
        dispatch(fetchCallHandlingEnd());
        dispatch(editEnd(json));
        dispatch(uploadEnd(json));
      });
    };
  },
  fetchDevices = (accessToken) => {
    return(dispatch, getState) => {
      let apiPath = `${yourDevices.url}`;
      let formData = new FormData();
      formData.append(`${yourDevices.param_access_token}`, accessToken);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      }).then((response) => {
        return response.json().then((json) => {
          dispatch(yourDevicesEnd(json));
            dispatch(fetchEnd());
        });

      }).catch((error) => {
        dispatch(yourDevicesEnd());
          dispatch(fetchEnd());
      });
    };
  },
  editUserName = (accessToken,firstName,lastName) => {
    return(dispatch, getState) => {

        dispatch(editBegin());
      let apiPath = `${editname.url}`;
      let formData = new FormData();
      formData.append(`${editname.param_access_token}`, accessToken);
      formData.append(`${editname.param_first_name}`, firstName);
      formData.append(`${editname.param_last_name}`, lastName);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      }).then((response) => {
        return response.json().then((json) => {
          dispatch(fetchEditUserNameEnd(json));

          dispatch(editEnd());
        });

      }).catch((error) => {
        dispatch(fetchEditUserNameEnd());

        dispatch(editEnd());
      });
    };
  },
  editPassword = (accessToken,oldPassword,newPassword) => {
    return(dispatch, getState) => {
        dispatch(editBegin());
      let apiPath = `${editPasswordApi.url}`;
      let formData = new FormData();
        formData.append(`${editPasswordApi.param_access_token}`, accessToken);
      formData.append(`${editPasswordApi.param_current_password}`, oldPassword);
      formData.append(`${editPasswordApi.param_new_password}`, newPassword);
      formData.append(`${editPasswordApi.param_confirm_password}`, newPassword);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      }).then((response) => {
        return response.json().then((json) => {
          dispatch(fetchEditPasswordEnd(json));
          dispatch(editEnd());
        });

      }).catch((error) => {
        dispatch(fetchEditPasswordEnd());
        dispatch(editEnd());
      });
    };
  },
  editVoicePin = (accessToken,voicePin) => {
    return(dispatch, getState) => {
        dispatch(editBegin());
      let apiPath = `${editVoicePinApi.url}`;
      let formData = new FormData();
      formData.append(`${editVoicePinApi.param_access_token}`, accessToken);
      formData.append(`${editVoicePinApi.param_voicemail_pin}`, voicePin);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      }).then((response) => {
        return response.json().then((json) => {
          dispatch(fetchEditVoicePinEnd(json));
          dispatch(editEnd());
        });

      }).catch((error) => {
        dispatch(fetchEditVoicePinEnd());
        dispatch(editEnd());
      });
    };
  },
  editCallerId = (accessToken,id) => {
    return(dispatch, getState) => {
        dispatch(editBegin());
      let apiPath = `${editCallerIdApi.url}`;
      let formData = new FormData();
      formData.append(`${editCallerIdApi.param_access_token}`, accessToken);
      formData.append(`${editCallerIdApi.param_id}`, id);
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
  editTimeZone = (accessToken,timezone) => {
    return(dispatch, getState) => {
        dispatch(editBegin());
      let apiPath = `${editTimeZoneApi.url}`;
      let formData = new FormData();
      formData.append(`${editTimeZoneApi.param_access_token}`, accessToken);
      formData.append(`${editTimeZoneApi.param_timezone}`, timezone);
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
  editRingDuration = (accessToken,duration) => {
    return(dispatch, getState) => {
        dispatch(editBegin());
      let apiPath = `${editRingDurationApi.url}`;
      let formData = new FormData();
      formData.append(`${editRingDurationApi.param_access_token}`, accessToken);
      formData.append(`${editRingDurationApi.param_ring_duration}`, duration);
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
  editCallHandlingVoiceMailName = (accessToken,id,name) => {
    return(dispatch, getState) => {
        dispatch(editBegin());
      let apiPath = `${editCallHandlingVoicemailName.url}`;
      let formData = new FormData();
      formData.append(`${editCallHandlingVoicemailName.param_access_token}`, accessToken);
      formData.append(`${editCallHandlingVoicemailName.paaram_call_hand_sound_id}`, id);
      formData.append(`${editCallHandlingVoicemailName.param_sound_name}`, name);
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
  editAdvMisscallDropdownValue = (accessToken,id,name) => {
    return(dispatch, getState) => {
        dispatch(editBegin());
      let apiPath = `${editAdvMisscallDropdownValueApi.url}`;
      let formData = new FormData();
      formData.append(`${editAdvMisscallDropdownValueApi.param_access_token}`, accessToken);
      formData.append(`${editAdvMisscallDropdownValueApi.param_call_hand_sound_id}`, id);
      formData.append(`${editAdvMisscallDropdownValueApi.param_sound_type}`, name);
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
  deleteCallHandlingVoiceMail = (accessToken,id) => {
    return(dispatch, getState) => {
        dispatch(editBegin());
      let apiPath = `${deleteCallHandlingVoiceMailApi.url}`;
      let formData = new FormData();
      formData.append(`${deleteCallHandlingVoiceMailApi.param_access_token}`, accessToken);
      formData.append(`${deleteCallHandlingVoiceMailApi.paaram_call_hand_sound_id}`, id);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      })
    };
  },
  uploadCallHandlingAudioFile = (accessToken,path) => {
    return(dispatch, getState) => {
        dispatch(editBegin());
        dispatch(callHandlingAudioUploadingBegin());
      let apiPath = `${uploadCallHandlingAudioApi.url}`;
      let formData = new FormData();
      formData.append(`${uploadCallHandlingAudioApi.param_access_token}`, accessToken);
      formData.append(`${uploadCallHandlingAudioApi.param_sound_file}`, path);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      })
    };
  },
  uploadAdvMisscallRouteAudio = (accessToken,path) => {
    return(dispatch, getState) => {
      dispatch(editBegin());
      dispatch(callAdvHandlingAudioUploadingBegin());
      let apiPath = `${uploadAdvMisscallRouteAudioApi.url}`;
      let formData = new FormData();
      formData.append(`${uploadAdvMisscallRouteAudioApi.param_access_token}`, accessToken);
      formData.append(`${uploadAdvMisscallRouteAudioApi.param_sound_file}`, path);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      })
    };
  },
  saveCallHandlingDropdownPreferance = (accessToken,id,type) => {
    return(dispatch, getState) => {
      dispatch(editBegin());
      let apiPath = `${saveCallHandlingDropdownPreferanceApi.url}`;
      let formData = new FormData();
      formData.append(`${saveCallHandlingDropdownPreferanceApi.param_access_token}`, accessToken);
      formData.append(`${saveCallHandlingDropdownPreferanceApi.param_call_hand_sound_id}`, id);
      formData.append(`${saveCallHandlingDropdownPreferanceApi.param_sound_type}`, type);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      }).then((response) => {
        return response.json().then((json) => {
          fetchCallHandling(accessToken);
          dispatch(editEnd());
        });
      }).catch((error) => {
        dispatch(editEnd());
      });
    };
  },
  fetchSaftyData = (accessToken) => {
    return(dispatch, getState) => {
      let apiPath = `${fetchSaftyApi.url}`;
      let formData = new FormData();
      formData.append(`${fetchSaftyApi.param_access_token}`, accessToken);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      }).then((response) => {
        return response.json().then((json) => {
          dispatch(fetchSaftyEnd(json));
          dispatch(editEnd(json));
        });
      }).catch((error) => {
          dispatch(fetchSaftyEnd(json));
      });
    };
  },
    editYourSafty = (accessToken,street,building,city,state,zipcode) => {
    return(dispatch, getState) => {
      dispatch(editBegin());
      let apiPath = `${editYourSaftyApi.url}`;
      let formData = new FormData();
      formData.append(`${editYourSaftyApi.param_access_token}`, accessToken);
      formData.append(`${editYourSaftyApi.param_street_address}`, street);
      formData.append(`${editYourSaftyApi.param_apt_building_text}`, building);
      formData.append(`${editYourSaftyApi.param_city}`, city);
      formData.append(`${editYourSaftyApi.param_state}`, state);
      formData.append(`${editYourSaftyApi.param_zip_code}`, zipcode);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      })
    };
  },
  editReceiveEmailOption = (accessToken,flag) => {
  return(dispatch, getState) => {
    dispatch(editBegin());
    let apiPath = `${editReceiveEmailOptionApi.url}`;
    let formData = new FormData();
    formData.append(`${editReceiveEmailOptionApi.param_access_token}`, accessToken);
    formData.append(`${editReceiveEmailOptionApi.param_receive_email_notification}`, flag);
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
  editAdvMisscallRouteOption = (accessToken,route) => {
  return(dispatch, getState) => {
    dispatch(editBegin());
    let apiPath = `${editAdvMisscallRouteOptionApi.url}`;
    let formData = new FormData();
    formData.append(`${editAdvMisscallRouteOptionApi.param_access_token}`, accessToken);
    formData.append(`${editAdvMisscallRouteOptionApi.param_route_option}`, route);
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
  editAdvMissCallTeamMemberOption = (accessToken,id) => {
  return(dispatch, getState) => {
    dispatch(editBegin());
    let apiPath = `${editAdvMissCallTeamMemberOptionApi.url}`;
    let formData = new FormData();
    formData.append(`${editAdvMissCallTeamMemberOptionApi.param_access_token}`, accessToken);
    formData.append(`${editAdvMissCallTeamMemberOptionApi.param_team_member_id}`, id);
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
  editAdvMissCallDepartmentOption = (accessToken,deptId) => {
  return(dispatch, getState) => {
    dispatch(editBegin());
    let apiPath = `${editAdvMissCallDepartmentOptionApi.url}`;
    let formData = new FormData();
    formData.append(`${editAdvMissCallDepartmentOptionApi.param_access_token}`, accessToken);
    formData.append(`${editAdvMissCallDepartmentOptionApi.param_dept_id}`, deptId);
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
  addForwardingNumber = (accessToken,type,number,ringStatus,lastConnected) => {
  return(dispatch, getState) => {
    dispatch(editBegin());
    let apiPath = `${addForwardingNumberApi.url}`;
    let formData = new FormData();
    formData.append(`${addForwardingNumberApi.param_access_token}`, accessToken);
    formData.append(`${addForwardingNumberApi.param_type}`, type);
    formData.append(`${addForwardingNumberApi.param_ring_device}`, ringStatus);
    formData.append(`${addForwardingNumberApi.param_fwd_number}`, number);
    formData.append(`${addForwardingNumberApi.param_last_connected}`, lastConnected);
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
  removeYourDevice = (accessToken,deviceId) => {
  return(dispatch, getState) => {
    dispatch(editBegin());
    let apiPath = `${removeYourDeviceApi.url}`;
    let formData = new FormData();
    formData.append(`${removeYourDeviceApi.param_access_token}`, accessToken);
    formData.append(`${removeYourDeviceApi.param_device_id}`, deviceId);
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
  fetchSaftyFieldsData = (accessToken) => {
  return(dispatch, getState) => {
    let apiPath = `${fetchSaftyFieldsDataApi.url}`;
    let formData = new FormData();
    formData.append(`${fetchSaftyFieldsDataApi.param_access_token}`, accessToken);
    return fetch(apiPath, {
      method: 'POST',
      body: formData
    }).then((response) => {
      return response.json().then((json) => {
        dispatch(fetchSaftyDataFieldsEnd(json));
      });
    }).catch((error) => {
    });
  };
  },
  fetchYourDeviceAdvSettings = (accessToken) => {
  return(dispatch, getState) => {
    let apiPath = `${yourDeviceAdvSettingsApi.url}`;
    let formData = new FormData();
    formData.append(`${yourDeviceAdvSettingsApi.param_access_token}`, accessToken);
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
  editYourDeviceAdvSetting = (accessToken,opt1,opt2,opt3,callFrd,smsFrd) => {
  return(dispatch, getState) => {
    let apiPath = `${editYourDeviceAdvSettingsApi.url}`;
    let formData = new FormData();
    formData.append(`${editYourDeviceAdvSettingsApi.param_access_token}`, accessToken);
    formData.append(`${editYourDeviceAdvSettingsApi.param_personal_dialpad_opt}`, opt1);
    formData.append(`${editYourDeviceAdvSettingsApi.param_dept_mainline_opt}`, opt2);
    formData.append(`${editYourDeviceAdvSettingsApi.param_executives_opt}`, opt3);
    formData.append(`${editYourDeviceAdvSettingsApi.param_ans_fwd_calls_opt}`, callFrd);
    formData.append(`${editYourDeviceAdvSettingsApi.param_fwd_num_id}`, smsFrd);
    return fetch(apiPath, {
      method: 'POST',
      body: formData
    }).then((response) => {
      return response.json().then((json) => {

      });
    }).catch((error) => {
    });
  };
  },
  fetchCallHandlingEnd = (payload) => {
    return {type: Constants.FETCH_CALL_HANDLING_END, payload};
  },
  fetchEditUserNameEnd = (payload) => {
    return {type: Constants.FETCH_EDIT_USER_NAME_END, payload};
  },
  yourDevicesEnd = (payload) => {
    return {type: Constants.FETCH_DEVICES_END, payload};
  },
  fetchEnd = (payload) => {
      return {type: Constants.FETCH_END, payload};
  },
  editBegin = (payload) => {
      return {type: Constants.EDIT_BEGIN, payload};
  },
  fetchEditVoicePinEnd = (payload) => {
      return {type: Constants.EDIT_VOICE_PIN_END, payload};
  },
  fetchEditPasswordEnd = (payload) => {
      return {type: Constants.EDIT_PASSWORD_END, payload};
  },
  editEnd = (payload) => {
      return {type: Constants.EDIT_END, payload};
  },
  deleteCallHandlingVoiceMailEnd = (payload) => {
      return {type: Constants.DELETE_CALL_HANDLING_VM_END, payload};
  },
  fetchSaftyEnd = (payload) => {
      return {type: Constants.FETCH_SAFTY_END, payload};
  },
  fetchSaftyDataFieldsEnd = (payload) => {
      return {type: Constants.FETCH_SAFTY_DATA_FEILDS_END, payload};
  },
  fetchYourDeviceAdvSettingsEnds = (payload) => {
      return {type: Constants.FETCH_YOUR_DEVICE_ADV_SETTINGS_END, payload};
  },
  callHandlingAudioUploadingBegin = (payload) => {
      return {type: Constants.UPLOAD_CALL_HANDLING_AUDIO_BEGIN, payload};
  },
  callAdvHandlingAudioUploadingBegin = (payload) => {
      return {type: Constants.UPLOAD_ADV_CALL_HANDLING_AUDIO_BEGIN, payload};
  },
  uploadEnd = (payload) => {
      return {type: Constants.UPLOAD_AUDIO_END, payload};
  }

  export default {fetchUserProfile, fetchCallHandling, fetchDevices, editUserName,editPassword,editVoicePin,editTimeZone,editCallerId,editRingDuration,editCallHandlingVoiceMailName,deleteCallHandlingVoiceMail
,uploadCallHandlingAudioFile,saveCallHandlingDropdownPreferance,editYourSafty,fetchSaftyData,editReceiveEmailOption,editAdvMisscallRouteOption,editAdvMissCallTeamMemberOption,editAdvMissCallDepartmentOption,addForwardingNumber,fetchSaftyFieldsData,removeYourDevice,fetchYourDeviceAdvSettings,editYourDeviceAdvSetting,editAdvMisscallDropdownValue,uploadAdvMisscallRouteAudio
  }  ;
