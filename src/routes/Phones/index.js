import { injectReducer } from '../../store/reducers';
import 'babel-polyfill';

export default (store) => (
  {
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const
          Container = require('./containers/PhonesContainer').default,
          reducer = require('./modules/reducer').default;

        injectReducer(store, { key: 'phones', reducer });

        cb(null, Container);
      }, 'phones');
    },
  }
);
