import React from 'react';
import './CallCenterMarkup.scss';
const settingsLogo = require("../../../styles/img/ic-settings.png");


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
  return (<div className="advanced-settings-view-holder ccntr-subview form">
      <div>
          <div className="web-admin-section">
              <div className="web-admin-section-header" onClick={(e) => this._toggleDiv()} >
                  <div className="web-admin-section-icon icon-holder mblock">
<img src={settingsLogo} className="logo-size"/>
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
              <div className="web-admin-section-child-view-holder" id="div_8963_6">
                  <div className="web-admin-section-child-view "  >
                      <div>
                          <div className="form-block-third">
                              <div>
                                  <div id="group-call-recording-setting-incoming" className="mblock">
                                      <div className="radio square mblock"  >
                                          <div className="snappy"></div>
                                          <input id="call-recording-setting-incoming" name="call_recording_setting_incoming" type="checkbox" defaultValue="" />
                                      </div>
                                  </div>
                                  <div className="mblock body-copy-32 checkbox-copy">
                                      Automatically record inbound calls
                                  </div>
                              </div>
                              <div>
                                  <div id="group-call-recording-setting-outgoing" className="mblock">
                                      <div className="radio square mblock"  >
                                          <div className="snappy"></div>
                                          <input id="call-recording-setting-outgoing" name="call_recording_setting_outgoing" type="checkbox" defaultValue="" />
                                      </div>
                                  </div>
                                  <div className="mblock body-copy-32 checkbox-copy">
                                      Automatically record outbound calls
                                  </div>
                              </div>
                              <div id="cc-advanced-recording-rule" className="checkbox-inset checkbox-row">
                                  <div>
                                      <div id="cc-recording-rule-disabled" className="mblock">
                                          <div className="radio checked"  >
                                              <div className="snappy"></div>
                                              <input id="recording-rule-disabled" name="recording_rule_enabled" type="radio" defaultValue="false" defaultChecked="true" />
                                          </div>
                                      </div>
                                      <label className="radio-label body-copy-32 selected" htmlFor="recording-rule-disabled">
                                          Record all outbound calls
                                      </label>
                                  </div>
                                  <div>
                                      <div id="cc-recording-rule-enabled" className="mblock">
                                          <div className="radio"  >
                                              <div className="snappy"></div>
                                              <input id="recording-rule-enabled" name="recording_rule_enabled" type="radio" defaultValue="true" />
                                          </div>
                                      </div>
                                      <label className="radio-label body-copy-32" htmlFor="recording-rule-enabled">
                                          Manage outbound call recording exceptions...
                                      </label>
                                      <a href="javascript:void(0)" className="wlink cc-recording-rule-exception-link" id="a_8963_0">Exception List</a>
                                  </div>
                              </div>
                              <div id="agent-can-pause-sec" className="checkbox-row">
                                  <div id="group-call-recording-agent-can-pause" className="mblock">
                                      <div className="radio square mblock"  >
                                          <div className="snappy"></div>
                                          <input id="call-recording-agent-can-pause" name="call_recording_agent_can_pause" type="checkbox" defaultValue="" />
                                      </div>
                                  </div>
                                  <div className="mblock body-copy-32 checkbox-copy">
                                      Allow agents to stop/restart recording during a call
                                  </div>
                                  <div className="body-copy-22 form-block-desc" id="div_8963_7">
                                      When an agent stop/restart a recording, the corresponding company level recording (if enabled) will also stop/restart for the call.
                                  </div>
                              </div>
                              <div className="body-copy-32 form-block-desc" id="div_8963_8">
                                  Callers hear an additional Call Recording message before connecting to an Agent:
                              </div>
                              <div className="form-block-desc form">
                                  <div id="call-auto-recording-message-greetings-view">
                                      <div>
                                          <audio className="audio-greeting" preload="none" src="https://uber-cdn.appspot.com/static/ivr/ubervoice/maybe_monitored_rec_qa.mp3"></audio>
                                          <table className="form" id="table_8963_0">
                                              <tbody>
                                                  <tr>
                                                      <td colSpan="2" id="td_8963_0">
                                                          <div className="greetings-select">
                                                              <div className="select-menu-view">
                                                                  <div className="select-menu snappy  closed">
                                                                      <div className="sm-input-shim" tabIndex="0"  >

                                                                          <input id="customivr" name="customivr" type="text" defaultValue="&quot;Your call may be monitored or recorded for quality assurance purposes&quot;" className="snappy sm-input sm-item-value-default  italic-font" tabIndex="-1" />
                                                                      </div>
                                                                      <div className="sm-menu"  >
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
                                                      <td className="greetings-icons" id="td_8963_1">
                                                          <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"  ></div>
                                                          <div className="hide web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
                                                          <div className="hide web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

                                                      </td>
                                                  </tr>

                                                  <tr className="upload_error hide">
                                                      <td id="td_8963_2" colSpan="2">
                                                          <div className="mblock icon-text">
                                                              <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
                                                              <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
                                                          </div>
                                                      </td>
                                                      <td>
                                                      </td>
                                                  </tr>
                                                  <tr className="delete_error hide">
                                                      <td id="td_8963_3" colSpan="3">
                                                          <div className="mblock icon-text">
                                                              <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
                                                              <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
                                                          </div>
                                                      </td>
                                                      <td>
                                                      </td>
                                                  </tr>

                                                  <tr className="upload_buttons">

                                                      <td id="td_8963_4">
                                                          <div className="record-a-greeting mblock icon-text">
                                                              <div className="web-icon web-icon-s web-icon-s-plus mblock"></div>

                                                              <div className="wlink iblock" data-toggle="modal" data-target="#modal3">Record a greeting</div>

                                                          </div>
                                                      </td>

                                                      <td id="td_8963_5">
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
                                                      <td id="td_8963_6" colSpan="2">
                                                          <div className="uploading">
                                                              <div className="mblock">
                                                                  <div className="mblock spinner"></div>
                                                                  <div className="body-copy-2 inline"> Uploading...</div>
                                                              </div>
                                                          </div>
                                                          <div className="upload_complete">
                                                              <div className="mblock">
                                                                  <div className="web-icon-s web-icon-s-check mblock" id="div_8963_9"></div>
                                                                  <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
                                                              </div>
                                                          </div>
                                                      </td>
                                                  </tr>

                                              </tbody>
                                          </table>
                                      </div>
                                  </div>
                                  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

                                  <script src="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.0/js/ion.rangeSlider.min.js"></script>

                              </div>
                              <div className="body-copy-22 form-block-desc" id="div_8963_10">
                                  Recordings will be available to all admins for this call center in their Dialpad app. Agents in this call center will not have access to the recordings.
                              </div>
                          </div>

                          <div className="form-block-third">
                              <div>
                                  <div id="group-wrap-up-setting" className="mblock">
                                      <div className="radio square mblock"  >
                                          <div className="snappy"></div>
                                          <input id="max-wrap-up-seconds" name="max_wrap_up_seconds" type="checkbox" defaultValue="" />
                                      </div>
                                  </div>
                                  <div className="mblock body-copy-32 checkbox-copy">
                                      Include a post-call wrap-up time before agents must receive their next call
                                  </div>
                              </div>
                              <div className="body-copy-22 mblock" id="div_8963_11">
                                  Set a time allowance for agents between calls:
                              </div>
                              <div id="wrapup-drop-down" className="mblock">
                                  <div className="select-menu-view">
                                      <div className="select-menu snappy select-menu-disabled  closed">
                                          <div className="sm-input-shim" tabIndex="-1">

                                              <input id="max_wrap_up_seconds" name="max_wrap_up_seconds" type="text" defaultValue="" className="snappy sm-input sm-item-value-0 " tabIndex="-1" />
                                          </div>
                                          <div className="sm-menu" >
                                              <div></div>
                                              <ul className="sm-list">

                                                  <li className="sm-item" id="sm-item-max_wrap_up_seconds-10" data-value="10">

                                                      <a className="sm-text sm-item-value-10 " href="javascript:void(0)" title="10 seconds">

         10 seconds
       </a>
                                                  </li>

                                                  <li className="sm-item" id="sm-item-max_wrap_up_seconds-20" data-value="20">

                                                      <a className="sm-text sm-item-value-20 " href="javascript:void(0)" title="20 seconds">

         20 seconds
       </a>
                                                  </li>

                                                  <li className="sm-item" id="sm-item-max_wrap_up_seconds-30" data-value="30">

                                                      <a className="sm-text sm-item-value-30 " href="javascript:void(0)" title="30 seconds">

         30 seconds
       </a>
                                                  </li>

                                                  <li className="sm-item" id="sm-item-max_wrap_up_seconds-60" data-value="60">

                                                      <a className="sm-text sm-item-value-60 " href="javascript:void(0)" title="1 minute">

         1 minute
       </a>
                                                  </li>

                                                  <li className="sm-item" id="sm-item-max_wrap_up_seconds-120" data-value="120">

                                                      <a className="sm-text sm-item-value-120 " href="javascript:void(0)" title="2 minutes">

         2 minutes
       </a>
                                                  </li>

                                                  <li className="sm-item" id="sm-item-max_wrap_up_seconds-300" data-value="300">

                                                      <a className="sm-text sm-item-value-300 " href="javascript:void(0)" title="5 minutes">

         5 minutes
       </a>
                                                  </li>

                                                  <li className="sm-item" id="sm-item-max_wrap_up_seconds-900" data-value="900">

                                                      <a className="sm-text sm-item-value-900 " href="javascript:void(0)" title="15 minutes">

         15 minutes
       </a>
                                                  </li>

                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="form-block-third add-failover-wrapper">
                              <table className="notifications-table body-copy-1">
                                  <tbody>
                                      <tr>
                                          <td>
                                              <div id="div_8963_12">Department Failover Number</div>
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

                          <div className="form-block-third">
                              <div>
                                  <div id="group-admin-eavesdrop-transparency" className="mblock">
                                      <div className="radio square mblock"  >
                                          <div className="snappy"></div>
                                          <input id="admin-eavesdrop-transparency" name="admin_eavesdrop_transparency" type="checkbox" defaultValue="" />
                                      </div>
                                  </div>
                                  <div className="mblock body-copy-32 checkbox-copy">
                                      Let agents know when a supervisor is listening in on their calls
                                  </div>
                              </div>
                              <div className="body-copy-22 mblock" id="div_8963_13">
                                  If enabled, the agents will be able to see that they are being listened in on.
                              </div>
                          </div>

                          <div className="call-logging-settings"></div>
                      </div>
                  </div>
              </div>
: <div></div>}

              <div className="web-admin-section-bottom"></div>
          </div>
      </div>
  </div>);

}
}

export default AdvanceSettingsComponent;
