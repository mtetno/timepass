import { injectReducer } from '../../store/reducers';
import 'babel-polyfill';

export default (store) => (
  {
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const
          Container = require('./containers/AddTeamMember').default,
          reducer = require('./modules/reducer').default;

        injectReducer(store, { key: 'addTeamMember', reducer });

        cb(null, Container);
      }, 'addTeamMember');
    },
  }
);
