import { injectReducer } from '../../store/reducers';
import 'babel-polyfill';

export default (store) => (
  {
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const
          Container = require('./containers/PortingContainer').default,
          reducer = require('./modules/reducer').default;

        injectReducer(store, { key: 'porting', reducer });

        cb(null, Container);
      }, 'porting');
    },
  }
);
