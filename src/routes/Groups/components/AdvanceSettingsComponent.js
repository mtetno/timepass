import React from 'react';
import './GroupsMarkup.scss';
import DashboardSideHeader from '../../../components/shared/DashboardSideHeader';
import DashboardMiddleHeader from '../../../components/shared/DashboardMiddleHeader';
const logo = require("../../../styles/img/ic-settings.png");

class AdvanceSettingsComponent extends React.Component {

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

  return (<div id="department-call-settings">
        <div>
            <div className="web-admin-section closed">
                <div className="web-admin-section-header" onClick={(e) => this._toggleDiv()}>
                    <div className="web-admin-section-icon icon-holder mblock">
                    <img src={logo} className="logo-size"/>
                    </div>
                    <div className="header-2 web-admin-section-title mblock">

                        Advanced Settings

                    </div>
                    <div className="web-admin-section-expander snappy icon-holder mblock">

                    </div>
                </div>

                {
                  this.state.toggleDiv ?
                <div className="web-admin-section-child-view-holder">
                    <div id="advanced" className="web-admin-section-child-view " >
                        <div>
                            <div id="voice-ai-toggles" className="form-block-third">
                                <div>
                                    <div>
                                        <div className="mblock vai-toggle">
                                            <div className="vai-toggle-circle">
                                            </div>
                                        </div>
                                        <div className="mblock" id="div_959e_4">
                                            <div className="mblock vai-header">
                                                VoiceAI
                                            </div>
                                            <div className="mblock vai-tag" id="div_959e_5">
                                                New!
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vai-description">

                                        Get a robust call summary and transcription.

                                    </div>
                                </div>
                            </div>

                            <div className="form-block-third">
                                <table className="notifications-table body-copy-1">
                                    <tbody>
                                        <tr>
                                            <td id="td_959e_0">
                                                <div id="group-call-waiting-setting">
                                                    <div className="radio square mblock checked" id="div_959e_6">
                                                        <div className="snappy"></div>
                                                        <input id="dial-busy-operators" name="dial_busy_operators" type="checkbox"  defaultValue=""/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Call waiting for operators (only applies when "Simultaneous" routing is selected)
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="body-copy-2 form-block-desc">
                                    With this option enabled, all your operators will receive incoming call notifications, when they are on a call already and if there are no other available operators.
                                    <br/>
                                    <br/> When this option is disabled, only available operators will receive notifications for incoming calls.
                                </div>
                            </div>

                            <div className="form-block-third add-failover-wrapper">
                                <table className="notifications-table body-copy-1">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div id="div_959e_7">Department Failover Number</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="body-copy-2 form-block-desc form">
                                    <div>Enter a non-Dialpad (PSTN) number to be used to forward calls intended for this department in the rare event of a Dialpad service outage.</div>
                                    <div id="verify-number-view">
                                        <div>
                                            <div className="add-number-input">
                                                <form id="forwarding-phones-form" className="form">
                                                    <input id="add-forwarding-phone" type="text" placeholder="Type in a number"/>
                                                    <div className="verify-link link verify-link-group">

                                                        Validate

                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="call-logging-settings rel"></div>
                        </div>
                    </div>
                </div>
                : <div></div>
              }

                <div className="web-admin-section-bottom"></div>
            </div>
        </div>
    </div>);

};

}

export default AdvanceSettingsComponent;
