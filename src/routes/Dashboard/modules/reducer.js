import Constants from './constants';
import {reject } from 'lodash';

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
    [Constants.FETCH_PROFILE_END]: (state, action) => {
      return {
        ...state,
        userProfile : {...action.payload},
      };
    },
    [Constants.FETCH_CALL_HANDLING_END]: (state, action) => {
      return {
        ...state,
        callHandling : {...action.payload},
      };
    },
    [Constants.FETCH_DEVICES_END]: (state, action) => {
      return {
        ...state,
        yourDevices : {...action.payload},
      };
    },
    [Constants.FETCH_EDIT_USER_NAME_END]: (state, action) => {
      return {
        ...state,
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
    [Constants.EDIT_VOICE_PIN_END]: (state, action) => {
      return {
        ...state,
      };
    },
    [Constants.EDIT_PASSWORD_END]: (state, action) => {
      return {
        ...state,
      };
    },
    [Constants.FETCH_SAFTY_DATA_FEILDS_END]: (state, action) => {
      return {
        ...state,
        yourSaftyFields : {...action.payload.data},
      };
    },

    [Constants.FETCH_SAFTY_END]: (state, action) => {
      return {
        ...state,
        yourSafty : {...action.payload},
      };
    },
    [Constants.FETCH_YOUR_DEVICE_ADV_SETTINGS_END]: (state, action) => {
      return {
        ...state,
        yourDevicesAdvSettings : { ...action.payload} ,
      };
    },
    [Constants.UPLOAD_CALL_HANDLING_AUDIO_BEGIN]: (state, action) => {
      return {
        ...state,
        audioUploading : true ,
      };
    },
    [Constants.UPLOAD_ADV_CALL_HANDLING_AUDIO_BEGIN]: (state, action) => {
      return {
        ...state,
        advAudioUploading : true ,
      };
    },
    [Constants.UPLOAD_AUDIO_END]: (state, action) => {
      return {
        ...state,
        advAudioUploading : false ,
        audioUploading : false
      };
    },
   [Constants.DELETE_CALL_HANDLING_VM_END]: (state, action) => {
   const voiceMailGreeting = state.callHandling.data.voicemail_greeting;
   const newVoiceMailGreeting = reject(voiceMailGreeting,item=> item.id.toString() === action.payload);
   const newcallHandling = state.callHandling;
   newcallHandling.data.voicemail_greeting = newVoiceMailGreeting;
    return {
      ...state,
      callHandling : newcallHandling
    };
  },
},
  initialState = { };

export default function dashboardReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
