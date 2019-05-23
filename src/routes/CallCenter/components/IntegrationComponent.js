import React from 'react';
import './CallCenterMarkup.scss';
const integrationLogo = require("../../../styles/img/ic-integration.png");



class IntegrationComponent extends React.Component {

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

  return (<div className="call-center-integration-settings form">
      <div>
          <div className="web-admin-section">
              <div className="web-admin-section-header" onClick={(e) => this._toggleDiv()} >
                  <div className="web-admin-section-icon icon-holder mblock">
<img src={integrationLogo} className="logo-size"/>
                  </div>
                  <div className="header-2 web-admin-section-title mblock">

                      Integrations

                  </div>
                  <div className="web-admin-section-expander snappy icon-holder mblock">

                  </div>
              </div>
              {
            this.state.toggleDiv
              ?
              <div className="web-admin-section-child-view-holder" id="div_8963_3">
                  <div className="web-admin-section-child-view "  >
                      <div id="integrations-list-view" className="rel">
                          <table className="user-table">
                              <thead>
                                  <tr>
                                      <th>Integration</th>
                                      <th>Access</th>
                                      <th>Note</th>
                                      <th></th>
                                  </tr>
                              </thead>
                              <tbody id="integration-list">
                                  <tr>
                                      <td>
                                          <img src="./static/img/service-now-logo.svg" className="integration-logo-service_now" />
                                      </td>
                                      <td>

                                          <div className="orange-copy-1">Disabled</div>

                                      </td>
                                      <td>

                                          <div className="body-copy-4">

                                              This integration must first be enabled at the office level.

                                          </div>

                                      </td>
                                      <td className="company-settings-options">
                                          <div className="rfloat integration-options-menu">
                                              <div className="select-menu-view">
                                                  <div className="select-menu snappy select-menu-disabled  closed row-options-select-menu">
                                                      <div className="sm-input-shim" tabIndex="-1">

                                                          <input type="text" defaultValue="Options" className="snappy sm-input sm-item-value- unselected " tabIndex="-1" />
                                                      </div>
                                                      <div className="sm-menu"  >
                                                          <div></div>
                                                          <ul className="sm-list">

                                                              <li className="sm-item" id="sm-item--enable" data-value="enable">

                                                                  <a className="sm-text sm-item-value-enable " href="javascript:void(0)" title="Enable">

         Enable
       </a>
                                                              </li>

                                                          </ul>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <img src="./static/img/slack.svg" className="integration-logo-slack" />
                                      </td>
                                      <td>

                                          <div className="orange-copy-1">Disabled</div>

                                      </td>
                                      <td>

                                          <div className="body-copy-4">

                                              This integration must first be enabled at the office level.

                                          </div>

                                      </td>
                                      <td className="company-settings-options">
                                          <div className="rfloat integration-options-menu">
                                              <div className="select-menu-view">
                                                  <div className="select-menu snappy select-menu-disabled  closed row-options-select-menu">
                                                      <div className="sm-input-shim" tabIndex="-1">

                                                          <input type="text" defaultValue="Options" className="snappy sm-input sm-item-value- unselected " tabIndex="-1" />
                                                      </div>
                                                      <div className="sm-menu" >
                                                          <div></div>
                                                          <ul className="sm-list">

                                                              <li className="sm-item" id="sm-item--enable" data-value="enable">

                                                                  <a className="sm-text sm-item-value-enable " href="javascript:void(0)" title="Enable">

         Enable
       </a>
                                                              </li>

                                                          </ul>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <img src="./static/img/zendesk-logo.svg" className="integration-logo-zendesk" />
                                      </td>
                                      <td>

                                          <div className="orange-copy-1">Disabled</div>

                                      </td>
                                      <td>

                                          <div className="body-copy-4">

                                              This integration must first be enabled at the office level.

                                          </div>

                                      </td>
                                      <td className="company-settings-options">
                                          <div className="rfloat integration-options-menu">
                                              <div className="select-menu-view">
                                                  <div className="select-menu snappy select-menu-disabled  closed row-options-select-menu">
                                                      <div className="sm-input-shim" tabIndex="-1">

                                                          <input type="text" defaultValue="Options" className="snappy sm-input sm-item-value- unselected " tabIndex="-1" />
                                                      </div>
                                                      <div className="sm-menu"  >
                                                          <div></div>
                                                          <ul className="sm-list">

                                                              <li className="sm-item" id="sm-item--enable" data-value="enable">

                                                                  <a className="sm-text sm-item-value-enable " href="javascript:void(0)" title="Enable">

         Enable
       </a>
                                                              </li>

                                                          </ul>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
                    : <div></div>}
              <div className="web-admin-section-bottom"></div>
          </div>
      </div>
  </div>);

}}

export default IntegrationComponent;
