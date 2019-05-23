// We only need to import the modules necessary for initial render

import login from './Login';
import DashboardContainer from './Dashboard/containers/DashboardMarkupContainer.js';
import AccountContainer from './Account/containers/AccountContainer.js';
import AddTeamMemberContainer from './AddTeamMember/containers/AddTeamMemberContainer.js';
import AnalyticsContainer from './Analytics/containers/AnalyticsContainer.js';
import BillingContainer from './Billing/containers/BillingContainer.js';
import CallCenterContainer from './CallCenter/containers/CallCenterContainer.js';
import CallGraphContainer from './CallGraph/containers/CallGraphContainer.js';
import CallHistoryContainer from './CallHistory/containers/CallHistoryContainer.js';
import CreditsContainer from './Credits/containers/CreditsContainer.js';
import GroupsContainer from './Groups/containers/GroupsContainer.js';
import OfficeSettingsContainer from './OfficeSettings/containers/OfficeSettingsContainer.js';
import LicensesContainer from './Licenses/containers/LicensesContainer.js';
import MainlineContainer from './Mainline/containers/MainlineContainer.js';
import PhonesContainer from './Phones/containers/PhonesContainer.js';
import PortingContainer from './Porting/containers/PortingContainer.js';
import PrivacyContainer from './Privacy/containers/PrivacyContainer.js';




/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) =>
{

  const requireLogin = (nextState, replace, cb) => {
    if (!store.getState().login) {
      replace('/');
    }
    cb();
  };

return ([
  {
    path: "/",
    indexRoute: login(store),
    childRoutes: []
  }, {
    path: '/dashboard',
    components: DashboardContainer,
    onEnter : requireLogin
  }, {
    path: '/accounts',
    components: AccountContainer,
    onEnter : requireLogin
  }, {
    path: '/addTeamMember',
    components: AddTeamMemberContainer,
    onEnter : requireLogin
  }, {
    path: '/analytics',
    components: AnalyticsContainer,
    onEnter : requireLogin
  }, {
    path: '/billing',
    components: BillingContainer,
    onEnter : requireLogin
  }, {
    path: '/callCenter',
    components: CallCenterContainer,
    onEnter : requireLogin
  }, {
    path: '/callGraph',
    components: CallGraphContainer,
    onEnter : requireLogin
  }, {
    path: '/callHistory',
    components: CallHistoryContainer,
    onEnter : requireLogin
  }, {
    path: '/credits',
    components: CreditsContainer,
    onEnter : requireLogin
  }, {
    path: '/groups',
    components: GroupsContainer,
    onEnter : requireLogin
  }, {
    path: '/officeSettings',
    components: OfficeSettingsContainer,
    onEnter : requireLogin
  }, {
    path: '/licenses',
    components: LicensesContainer,
    onEnter : requireLogin
  }, {
    path: '/mainline',
    components: MainlineContainer,
    onEnter : requireLogin
  }, {
    path: '/phones',
    components: PhonesContainer,
    onEnter : requireLogin
  }, {
    path: '/privacy',
    components: PrivacyContainer,
    onEnter : requireLogin
  }, {
    path: '/porting',
    components: PortingContainer,
    onEnter : requireLogin
  }
]);

}

export default createRoutes;
