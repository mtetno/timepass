import {injectReducer} from '../../store/reducers';
import 'babel-polyfill';

export default(store) => ({
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Container = require('./containers/LoginContainer').default,
        reducer = require('./modules/reducer').default;

      injectReducer(store, {
        key: 'login',
        reducer
      });

      cb(null, Container);
    }, 'login');
  }
});
