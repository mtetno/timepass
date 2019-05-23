import React from 'react';
import './MainlineMarkup.scss';
import DashboardSideHeader from '../../../components/shared/DashboardSideHeader';
import DashboardMiddleHeader from '../../../components/shared/DashboardMiddleHeader';
import MainlineContentComponent from './MainlineContentComponent';


const MainlineMarkup = ({mainlineInfo,mainLineEditName,mainLineEditAbbr,mainLineOptionsEdit,onMainLineEditDialogOpen,onEditBusinessHours}) => {
  return (<td id="content" className="app-rightbar-none app-footer-none app-sidebar-main app-subheader-default app-overlay-none app-header-default">
         <MainlineContentComponent mainlineInfo={mainlineInfo} mainLineEditName={mainLineEditName} mainLineEditAbbr={mainLineEditAbbr} mainLineOptionsEdit={mainLineOptionsEdit} onMainLineEditDialogOpen={onMainLineEditDialogOpen} onEditBusinessHours={onEditBusinessHours}/></td>);

};

export default MainlineMarkup;
