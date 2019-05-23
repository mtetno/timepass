import jwt from 'jsonwebtoken';
import {browserHistory} from 'react-router';
import Constants from './constants';
import {login} from '../../../config';

const requestBegin = () => {
    return {type: Constants.USER_LOGIN_BEGIN};
  },
  userLogin = (username,password) => {
    return(dispatch, getState) => {
      dispatch(requestBegin());
      let apiPath = `${login.url}`;
      let formData = new FormData();
      formData.append(`${login.param_username}`, username);
      formData.append(`${login.param_password}`, password);
      return fetch(apiPath, {
        method: 'POST',
        body: formData
      }).then((response) => {
        return response.json().then((json) => {
          json['password'] = password;
          dispatch(loginEnds(json));
        });

      }).catch((error) => {
        dispatch(loginEnds());
      });
    };
  },
  loginEnds = (payload) => {
    return {type: Constants.USER_LOGIN_END, payload};
  }

  export default {userLogin};
