import jwt from 'jsonwebtoken';
import {browserHistory} from 'react-router';
import Constants from './constants';
import {accounts} from '../../../config';

const requestBegin = () => {
    return {type: Constants.FETCH_ACCOUNTS_BEGIN};
  },
  fetchAccounts = (accessToken) => {
    return(dispatch, getState) => {
      dispatch(requestBegin());
      let formData = new FormData();
      formData.append(`${accounts.param_access_token}`, accessToken);
      return fetch(`${accounts.url}`, {
        method: 'post',
        body: formData
      }).then((response) => {
        return response.json().then((json) => {
          dispatch(fetchAccountsEnd(json));
        });

      }).catch((error) => {
        dispatch(fetchAccountsEnd());
      });
    };
  },
  fetchAccountsEnd = (payload) => {
    return {type: Constants.FETCH_ACCOUNTS_END, payload};
  }

  export default {fetchAccounts};
