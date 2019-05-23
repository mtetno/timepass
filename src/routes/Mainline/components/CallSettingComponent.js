import React from 'react';
import './MainlineMarkup.scss';
import DashboardSideHeader from '../../../components/shared/DashboardSideHeader';
import DashboardMiddleHeader from '../../../components/shared/DashboardMiddleHeader'
const logo = require("../../../styles/img/ic-settings.png");

class CallSettingComponent extends React.Component {

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


  return (
    <div>
      <div id="department-integration-settings" className="form"></div>
    <div id="department-call-settings">
        <div>
            <div className="web-admin-section">
                <div className="web-admin-section-header"  onClick={(e) => this._toggleDiv()}>
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
          this.state.toggleDiv
            ?
                <div className="web-admin-section-child-view-holder">
                    <div className="web-admin-section-child-view " id="advancedSettings">
                        <div className="form-block-third">
                            <div>
                                <div id="group-call-recording-setting" className="mblock">
                                    <div className="radio square mblock" id="div_be9e_1">
                                        <div className="snappy"></div>
                                        <input id="call-recording-setting" name="call_recording_setting" type="checkbox" defaultValue="" />
                                    </div>
                                </div>
                                <div className="mblock body-copy-32 checkbox-copy">
                                    Automatically record all calls to this department
                                </div>
                            </div>
                            <div className="body-copy-32 form-block-desc" id="div_be9e_2">
                                Callers hear an additional Call Recording message before connecting to operators:
                            </div>
                            <div className="form-block-desc form">
                                <div id="call-auto-recording-message-greetings-view">
                                    <div>
                                        <audio className="audio-greeting" preload="none" src="https://uber-cdn.appspot.com/static/ivr/ubervoice/maybe_monitored_rec_qa.mp3"></audio>
                                        <table className="form" id="table_be9e_0">
                                            <tbody>
                                                <tr>
                                                    <td colSpan="2" id="td_be9e_0">
                                                        <div className="greetings-select">
                                                            <div className="select-menu-view">
                                                                <div className="select-menu snappy  closed ">
                                                                    <div className="sm-input-shim" tabIndex="0">

                                                                        <input id="customivr" name="customivr" type="text" defaultValue="&quot;Your call may be monitored or recorded for quality assurance purposes&quot;" className="snappy sm-input sm-item-value-default  italic-font" tabIndex="-1" />
                                                                    </div>
                                                                    <div className="sm-menu">
                                                                        <div></div>
                                                                        <ul className="sm-list">

                                                                            <li className="sm-item" id="sm-item-customivr-default" data-value="default">

                                                                                <a className="sm-text sm-item-value-default  italic-font" href="javascript:void(0)" title="&quot;Your call may be monitored or recorded for quality assurance purposes&quot;">

            "Your call may be monitored or recorded for quality assurance purposes"
          </a>
                                                                            </li>

                                                                            <li className="sm-item" id="sm-item-customivr-maybe_rec_qa_training" data-value="maybe_rec_qa_training">

                                                                                <a className="sm-text sm-item-value-maybe_rec_qa_training  italic-font" href="javascript:void(0)" title="&quot;Your call may be recorded for quality assurance and training purposes&quot;">

            "Your call may be recorded for quality assurance and training purposes"
          </a>
                                                                            </li>

                                                                            <li className="sm-item" id="sm-item-customivr-willbe_monitored_rec_qa" data-value="willbe_monitored_rec_qa">

                                                                                <a className="sm-text sm-item-value-willbe_monitored_rec_qa  italic-font" href="javascript:void(0)" title="&quot;Your call will be monitored or recorded for quality assurance purposes&quot;">

            "Your call will be monitored or recorded for quality assurance purposes"
          </a>
                                                                            </li>

                                                                            <li className="sm-item" id="sm-item-customivr-willbe_rec_qa_training" data-value="willbe_rec_qa_training">

                                                                                <a className="sm-text sm-item-value-willbe_rec_qa_training  italic-font" href="javascript:void(0)" title="&quot;Your call will be recorded for quality assurance and training purposes&quot;">

            "Your call will be recorded for quality assurance and training purposes"
          </a>
                                                                            </li>

                                                                            <li className="sm-item" id="sm-item-customivr-willbe_rec_training" data-value="willbe_rec_training">

                                                                                <a className="sm-text sm-item-value-willbe_rec_training  italic-font" href="javascript:void(0)" title="&quot;Your call will be recorded for training purposes&quot;">

            "Your call will be recorded for training purposes"
          </a>
                                                                            </li>

                                                                            <li className="sm-item" id="sm-item-customivr-no_message" data-value="no_message">

                                                                                <a className="sm-text sm-item-value-no_message " href="javascript:void(0)" title="No Message">

            No Message
          </a>
                                                                            </li>

                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="greetings-icons" id="td_be9e_1">
                                                        <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
                                                        <div className="hide web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
                                                        <div className="hide web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

                                                    </td>
                                                </tr>

                                                <tr className="upload_error hide">
                                                    <td id="td_be9e_2" colSpan="2">
                                                        <div className="mblock icon-text">
                                                            <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
                                                            <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                    </td>
                                                </tr>
                                                <tr className="delete_error hide">
                                                    <td id="td_be9e_3" colSpan="3">
                                                        <div className="mblock icon-text">
                                                            <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
                                                            <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                    </td>
                                                </tr>

                                                <tr className="upload_buttons">

                                                    <td id="td_be9e_4">
                                                        <div className="record-a-greeting mblock icon-text">
                                                            <div className="web-icon web-icon-s web-icon-s-plus mblock"></div>

                                                            <div className="wlink iblock" data-toggle="modal" data-target="#modal3">Record a greeting</div>

                                                        </div>
                                                    </td>

                                                    <td id="td_be9e_5">
                                                        <div className="hide">
                                                            <input type="file" className="upload-greeting-input" accept="audio/mpeg" />
                                                        </div>
                                                        <div className="upload-greeting mblock right icon-text">
                                                            <div className="web-icon web-icon-xs web-icon-xs-upload mblock"></div>
                                                            <div className="wlink iblock">Upload (.mp3)</div>
                                                        </div>
                                                    </td>

                                                    <td></td>
                                                </tr>

                                                <tr className="upload_status hide">
                                                    <td id="td_be9e_6" colSpan="2">
                                                        <div className="uploading">
                                                            <div className="mblock">
                                                                <div className="mblock spinner"></div>
                                                                <div className="body-copy-2 inline"> Uploading...</div>
                                                            </div>
                                                        </div>
                                                        <div className="upload_complete">
                                                            <div className="mblock">
                                                                <div className="web-icon-s web-icon-s-check mblock" id="div_be9e_3"></div>
                                                                <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="body-copy-22 form-block-desc" id="div_be9e_4">
                                Recordings will be available to all admins for this department in their Dialpad app. Operators in this department will not have access to the recordings.
                            </div>
                        </div>

                        <div className="form-block-third">
                            <table className="notifications-table body-copy-1">
                                <tbody>
                                    <tr>
                                        <td id="td_be9e_7">
                                            <div id="group-call-waiting-setting">
                                                <div className="radio square mblock checked" id="div_be9e_5">
                                                    <div className="snappy"></div>
                                                    <input id="dial-busy-operators" name="dial_busy_operators" type="checkbox" defaultValue="" />
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
                                            <div id="div_be9e_6">Department Failover Number</div>
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
                                                <input id="add-forwarding-phone" type="text" placeholder="Type in a number" />
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

                : <div></div>

        }


                <div className="web-admin-section-bottom"></div>
            </div>
        </div>
    </div>
  </div>);
};

}
export default CallSettingComponent;
