import { injectReducer } from '../../store/reducers';
import 'babel-polyfill';

export default (store) => (
  {
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const
          Container = require('./containers/MainlineContainer').default,
          reducer = require('./modules/reducer').default;

        injectReducer(store, { key: 'mainline', reducer });

        cb(null, Container);
      }, 'mainline');
    },
  }
);
