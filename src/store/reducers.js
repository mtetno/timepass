import { combineReducers } from 'redux';
import locationReducer from './location';
import { reducer as toastrReducer } from 'react-redux-toastr';
import dashboardReducer from '../routes/Dashboard/modules/reducer';
import mainLineReducer from '../routes/Mainline/modules/reducer';
import accountReducer from '../routes/Account/modules/reducer';


/* eslint-disable one-var */
export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    toastr: toastrReducer,
    location: locationReducer,
    dashboard : dashboardReducer,
    accounts : accountReducer,
    mainline : mainLineReducer,
    ...asyncReducers,
  });
};

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};
/* eslint-disable one-var */
export default makeRootReducer;
