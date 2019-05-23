import React from 'react';
import './CallCenterMarkup.scss';
import AgentsAndAdmins from './AgentsAndAdmins';
import BusinessHoursComponent from './BusinessHoursComponent';
import IntegrationComponent from './IntegrationComponent';
import DashboardAlertsComponent from './DashboardAlertsComponent';
import AdvanceSettingsComponent from './AdvanceSettingsComponent';


const CallCenterContent = () => {
  return (<div>
    <div id="header-for-operator">
      <div></div>
    </div>
    <div className="group-info-view-holder ccntr-subview form" id="div_8963_0">
      <div>
        <form id="group-info-form" className="group-info-container">
          <div className="group-info-viewrow">
            <div className="mblock header-2">

              Call Center Info

            </div>
          </div>
          <div className="group-info-viewrow">
            <div className="mblock">
              <label>Name</label>
              <div>
                <input name="name" id="group-name" type="text" placeholder="Name" defaultValue="Test Call Center"/>
              </div>
            </div>

            <div className="delete-group mblock">
              <div className="wlink mblock icon-holder">
                <img className="deleteIcon"></img>
              </div>
              <div className="wlink mblock body-copy-28">

                Delete Call Center

              </div>
            </div>

          </div>

          <div id="dids-view" className="group-info-viewrow">
            <div className="list-container">
              <div id="dialog-header"></div>
              <div>
                <table className="user-table ">

                  <thead>
                    <tr>
                      <th>Phone number(s)</th>
                      <th>Label</th>
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>

                  <tbody id="numbers-list"></tbody>
                </table>

                <div className="form-list-add">
                  <div id="add-number" className="mblock icon-text add-number-link">
                    <div className="web-icon web-icon-s web-icon-s-plus mblock"></div>
                    <div className="wlink iblock" data-toggle="modal" data-target="#modal1">Add a number</div>
                  </div>

                  <div id="add-fax" className="mblock icon-text add-fax-link">
                    <div className="web-icon web-icon-s web-icon-s-plus mblock"></div>
                    <div className="wlink iblock" data-toggle="modal" data-target="#modal2">Add a fax number</div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <AgentsAndAdmins/>
    <BusinessHoursComponent/>
    <IntegrationComponent/>
    <DashboardAlertsComponent/>
    <AdvanceSettingsComponent/>
  </div>);

};

export default CallCenterContent;
