import React from 'react';
import PropTypes from 'prop-types'
import './AnalyticsMarkup.scss';
import DashboardSideHeader from '../../../components/shared/DashboardSideHeader';
import DashboardMiddleHeader from '../../../components/shared/DashboardMiddleHeader';
import AnalyticsMarkupContent from './AnalyticsMarkupContent';

const AddTeamMemberMarkup = () => {
  return <div className="dashboard-main-css">
    <div className="dashboardContainer">
      <div className="custom-right">
        <div className="nestedCointainer">
          <div className="nestedCointainerHeader">
            <div className="breadcrumbs mblock">
              <a href="#" className="breadcrumb btext">ANALYTICS / SUMMARY DATA</a>
            </div>
          </div>
        </div>
        <div className="user-profile-container">
          <div className="account-container-body">
            <AnalyticsMarkupContent/>
          </div>
        </div>
      </div>
      <div className="custom-left">
        <DashboardSideHeader/>
      </div>
      <div className="custom-middle">
        <DashboardMiddleHeader/>
      </div>
    </div>
  </div>;

};

export default AddTeamMemberMarkup;
