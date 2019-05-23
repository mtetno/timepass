import jwt from 'jsonwebtoken';
import { browserHistory } from 'react-router';
import Constants from './constants';
import { api } from '../../../config';

const
  requestBegin = () => {
    return {
      type: Constants.REQUEST_BEGIN,
    };
  },
  getEvents = () => {
    return (dispatch, getState) => {


    dispatch(requestBegin());
    let apiPath = `https://some_example_api`;
    return fetch(apiPath, {
      method: 'get',
      headers : {
        "Access-Control-Allow-Origin": "*",
     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
     "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
          "Authorization" : 'Basic '+btoa('MesseFrankfurt579863:Utifelupa343'),
        },
    })
      .then((response) => {
        return response.json().then((json) => {
            dispatch(getEventsEnds(json));
        });


      })
      .catch((error) => {
        dispatch(getEventsEnds());
      });
  };
  },
  getEventsEnds = (payload) => {
    return {
      type: Constants.GET_EVENTS_ENDS,
      payload,
    };
  }


export default {
getEvents,
};
