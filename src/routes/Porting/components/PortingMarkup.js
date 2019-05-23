import React from 'react';
import './PortingMarkup.scss';
import DashboardSideHeader from '../../../components/shared/DashboardSideHeader';
import DashboardMiddleHeader from '../../../components/shared/DashboardMiddleHeader';
import PortingContentComponent from './PortingContentComponent';


const PortingMarkup = () => {
  return <div className="dashboard-main-css">
    <div className="dashboardContainer">
      <div className="custom-right">
        <div className="nestedCointainer">
          <div className="nestedCointainerHeader">
            <div className="breadcrumbs mblock">
              <a href="#" className="breadcrumb btext">ADMIN / EASYTEL / NUMBER PORTING</a>
            </div>
          </div>
        </div>
        <div className="user-profile-container">
          <div className="account-container-body">

         <PortingContentComponent/>

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

export default PortingMarkup;
