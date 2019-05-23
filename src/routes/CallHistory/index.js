import { injectReducer } from '../../store/reducers';
import 'babel-polyfill';

export default (store) => (
  {
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const
          Container = require('./containers/AccountContainer').default,
          reducer = require('./modules/reducer').default;

        injectReducer(store, { key: 'callHistory', reducer });

        cb(null, Container);
      }, 'callHistory');
    },
  }
);
