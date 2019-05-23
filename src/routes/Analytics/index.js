import { injectReducer } from '../../store/reducers';
import 'babel-polyfill';

export default (store) => (
  {
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const
          Container = require('./containers/AnalyticsContainer').default,
          reducer = require('./modules/reducer').default;

        injectReducer(store, { key: 'analytics', reducer });

        cb(null, Container);
      }, 'analytics');
    },
  }
);
