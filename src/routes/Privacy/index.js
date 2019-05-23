import { injectReducer } from '../../store/reducers';
import 'babel-polyfill';

export default (store) => (
  {
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const
          Container = require('./containers/PrivacyContainer').default,
          reducer = require('./modules/reducer').default;

        injectReducer(store, { key: 'privacy', reducer });

        cb(null, Container);
      }, 'privacy');
    },
  }
);
