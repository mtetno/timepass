import { injectReducer } from '../../store/reducers';
import 'babel-polyfill';

export default (store) => (
  {
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const
          Container = require('./containers/OfficeSettingsMarkup').default,
          reducer = require('./modules/reducer').default;

        injectReducer(store, { key: 'officeSettings', reducer });

        cb(null, Container);
      }, 'officeSettings');
    },
  }
);
