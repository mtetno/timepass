import React from 'react';
import './MainlineMarkup.scss';
import DashboardSideHeader from '../../../components/shared/DashboardSideHeader';
import DashboardMiddleHeader from '../../../components/shared/DashboardMiddleHeader';
import GroupSettingComponent from './GroupSettingComponent';
import ManageOperatorComponent from './ManageOperatorComponent';
import HoursSummaryComponent from './HoursSummaryComponent';
import HoldMusicComponent from './HoldMusicComponent';
import CallSettingComponent from './CallSettingComponent';

const MainlineContentComponent = ({mainlineInfo,mainLineEditName,mainLineEditAbbr,mainLineOptionsEdit,onMainLineEditDialogOpen}) => {
  return (<div>

    <GroupSettingComponent mainlineInfo={mainlineInfo} mainLineEditName={mainLineEditName} mainLineEditAbbr={mainLineEditAbbr}
mainLineOptionsEdit = {mainLineOptionsEdit} onMainLineEditDialogOpen={onMainLineEditDialogOpen}
    />

    <ManageOperatorComponent/>

    <div id="call-handling-view" className="form"></div>

    <HoursSummaryComponent/>

    <HoldMusicComponent/>

    <CallSettingComponent/>

  </div>);
};

export default MainlineContentComponent;
