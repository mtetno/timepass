import { injectReducer } from '../../store/reducers';
import 'babel-polyfill';

export default (store) => (
  {
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const
          Container = require('./containers/LicensesContainer').default,
          reducer = require('./modules/reducer').default;

        injectReducer(store, { key: 'licenses', reducer });

        cb(null, Container);
      }, 'licenses');
    },
  }
);
