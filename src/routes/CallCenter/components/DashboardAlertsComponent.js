import React from 'react';
import './CallCenterMarkup.scss';
const alertsLogo = require("../../../styles/img/ic-alerts.png");


class DashboardAlertsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggleDiv: false
    };
  }

  _toggleDiv() {
    this.setState({
      toggleDiv: !this.state.toggleDiv
    });
  }

  render() {

  return (<div className="alert-settings-view-holder ccntr-subview form">
      <div>
          <div className="web-admin-section">
              <div className="web-admin-section-header" onClick={(e) => this._toggleDiv()} >
                  <div className="web-admin-section-icon icon-holder mblock">
<img src={alertsLogo} className="logo-size"/>
                  </div>
                  <div className="header-2 web-admin-section-title mblock">

                      Dashboard and Alerts

                  </div>
                  <div className="web-admin-section-expander snappy icon-holder mblock">

                  </div>
              </div>
              {
            this.state.toggleDiv
              ?
              <div className="web-admin-section-child-view-holder" id="div_8963_4">
                  <div className="web-admin-section-child-view "  >
                      <div>
                          <div id="div_8963_5">
                              <div className="body-copy-22 form-block-desc">
                                  Set when alerts will be triggered and who should receive alert notifications
                              </div>

                              <div id="call-center-alert-button-view" className="iblock"></div>

                              <div id="cca-settings-section-short-abandoned-call">
                                  <div className="cca-no-agent-section-item">
                                      <div className="header-4">
                                          Short Abandoned Call Threshold
                                          <div className="wlink mblock cca-alert-settings-dialog-button header-6" data-toggle="modal" data-target="#modal4">
                                              Edit
                                          </div>
                                      </div>
                                      <div className="body-copy-22 cca-section-desc">
                                          Set a threshold that determines which calls will be considered "short abandoned"
                                      </div>

                                      <div className="cca-section-summary">
                                          <div>
                                              <div className="cca-section-summary-text">

                                                  <div>
                                                      <div>
                                                          <div className="mblock icon-holder">

                                                          </div>
                                                          <div className="iblock cca-summary-icon-text">
                                                              Calls abandoned in under 10 seconds will be considered short abandoned
                                                          </div>
                                                      </div>
                                                  </div>

                                                  <div>

                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div id="cca-settings-section-service-level">
                                  <div className="cca-no-agent-section-item">
                                      <div className="header-4">
                                          Service Level
                                          <div className="wlink mblock cca-alert-settings-dialog-button header-6" data-toggle="modal" data-target="#modal4">
                                              Edit Alert
                                          </div>
                                      </div>
                                      <div className="body-copy-22 cca-section-desc">
                                          Set a metric to base your service level on
                                      </div>

                                      <div className="cca-section-summary">
                                          <div>
                                              <div className="cca-section-summary-text">

                                                  <div>
                                                      <div>
                                                          <div className="mblock icon-holder">

                                                          </div>
                                                          <div className="iblock cca-summary-icon-text">
                                                              Inbound calls should be answered within 60 seconds
                                                          </div>
                                                      </div>
                                                      <div>
                                                          <div className="mblock icon-holder">

                                                          </div>
                                                          <div className="iblock cca-summary-icon-text">
                                                              Alert supervisors when the service level drops below 95%
                                                          </div>
                                                      </div>
                                                  </div>

                                                  <div>

                                                      <div className="mblock icon-holder">

                                                      </div>
                                                      <div className="iblock cca-summary-icon-text">Notification is Off</div>

                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div id="cca-settings-section-no-agent">
                                  <div className="cca-no-agent-section-item">
                                      <div className="header-4">
                                          No Agents On-Duty
                                          <div className="wlink mblock cca-alert-settings-dialog-button header-6" data-toggle="modal" data-target="#modal4">
                                              Edit Alert
                                          </div>
                                      </div>
                                      <div className="body-copy-22 cca-section-desc">
                                          Get alerted when no agents are on duty during this call center's open hours
                                      </div>

                                      <div className="cca-section-summary">
                                          <div>
                                              <div className="cca-section-summary-text">

                                                  <div>

                                                      <div className="mblock icon-holder">

                                                      </div>
                                                      <div className="iblock cca-summary-icon-text">Notification is Off</div>

                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div id="cca-settings-section-off-duty">
                                  <div className="cca-no-agent-section-item">
                                      <div className="header-4">
                                          Agents Off-Duty
                                          <div className="wlink mblock cca-alert-settings-dialog-button header-6" data-toggle="modal" data-target="#modal4">
                                              Edit Alert
                                          </div>
                                      </div>
                                      <div className="body-copy-22 cca-section-desc">
                                          Get alerted when an agent is set to off duty during business hours
                                          <div>
                                              Note: Agents can manually set status to off-duty, but may also be off-duty if a call is missed
                                          </div>
                                      </div>

                                      <div className="cca-section-summary">
                                          <div>
                                              <div className="cca-section-summary-text">

                                                  <div>

                                                      <div className="mblock icon-holder">

                                                      </div>
                                                      <div className="iblock cca-summary-icon-text">
                                                          Notification is On for: all supervisors by e-mail and text.

                                                      </div>

                                                  </div>

                                              </div>

                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div id="cca-settings-section-queue-size">
                                  <div className="cca-no-agent-section-item">
                                      <div className="header-4">
                                          Call Queue Size
                                          <div className="wlink mblock cca-alert-settings-dialog-button header-6" data-toggle="modal" data-target="#modal4">
                                              Edit Alert
                                          </div>
                                      </div>
                                      <div className="body-copy-22 cca-section-desc">
                                          Set a threshold to alert supervisors when your call queue reaches a certain size
                                      </div>

                                      <div className="cca-section-summary">
                                          <div>
                                              <div className="cca-section-summary-text">

                                                  <div>
                                                      <div className="mblock icon-holder">

                                                      </div>
                                                      <div className="iblock cca-summary-icon-text">
                                                          Alert supervisors when 50 or more callers are queued
                                                      </div>
                                                  </div>

                                                  <div>

                                                      <div className="mblock icon-holder">

                                                      </div>
                                                      <div className="iblock cca-summary-icon-text">Notification is Off</div>

                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div id="cca-settings-section-wait-time">
                                  <div className="cca-no-agent-section-item">
                                      <div className="header-4">
                                          Wait Time
                                          <div className="wlink mblock cca-alert-settings-dialog-button header-6" data-toggle="modal" data-target="#modal4">
                                              Edit Alert
                                          </div>
                                      </div>
                                      <div className="body-copy-22 cca-section-desc">
                                          Set a threshold to alert supervisors when the longest wait time on your call queue reaches a certain length
                                      </div>

                                      <div className="cca-section-summary">
                                          <div>
                                              <div className="cca-section-summary-text">

                                                  <div>
                                                      <div className="mblock icon-holder">

                                                      </div>
                                                      <div className="iblock cca-summary-icon-text">

                                                          Alert supervisors when the current longest wait time is more than 15 minutes 0 seconds

                                                      </div>
                                                  </div>

                                                  <div>

                                                      <div className="mblock icon-holder">

                                                      </div>
                                                      <div className="iblock cca-summary-icon-text">Notification is Off</div>

                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                          </div>
                      </div>
                  </div>
              </div>
                     : <div></div>}
              <div className="web-admin-section-bottom"></div>
          </div>
      </div>
  </div>
);

}}

export default DashboardAlertsComponent;
