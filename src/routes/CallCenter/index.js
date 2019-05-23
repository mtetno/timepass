import { injectReducer } from '../../store/reducers';
import 'babel-polyfill';

export default (store) => (
  {
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const
          Container = require('./containers/CallCenterContainer').default,
          reducer = require('./modules/reducer').default;

        injectReducer(store, { key: 'callCenter', reducer });

        cb(null, Container);
      }, 'callCenter');
    },
  }
);
