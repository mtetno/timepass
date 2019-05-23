import { injectReducer } from '../../store/reducers';
import 'babel-polyfill';

export default (store) => (
  {
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const
          Container = require('./containers/GroupsContainer').default,
          reducer = require('./modules/reducer').default;

        injectReducer(store, { key: 'groups', reducer });

        cb(null, Container);
      }, 'groups');
    },
  }
);
