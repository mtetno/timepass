import { injectReducer } from '../../store/reducers';
import 'babel-polyfill';

export default (store) => (
  {
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const
          Container = require('./containers/BillingContainer').default,
          reducer = require('./modules/reducer').default;

        injectReducer(store, { key: 'billing', reducer });

        cb(null, Container);
      }, 'billing');
    },
  }
);
