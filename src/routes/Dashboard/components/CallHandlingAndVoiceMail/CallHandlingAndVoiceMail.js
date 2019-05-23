import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import autobind from 'autobind-decorator';
import {browserHistory} from 'react-router';
import actions from '../../modules/actions';
import './CallHandlingAndVoiceMail.scss';
const logo = require("../../../../styles/img/voice-and-handling.png");
import SimpleSlider from '../../../../components/shared/controls/SimpleSlider';
import Dropdown from '../../../../components/shared/controls/Dropdown';
import CustomRadioGroup from './CustomRadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {isEmpty, filter} from 'lodash';

class CallHandlingAndVoiceMail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      callHandlingAndVoiceMail: false,
      callHandlingAndVoiceMailAdvOption: false,
      callHandlingDropdownOpen: false,
      AdvcallHandlingDropdownOpen: false,
      callHandlingSelectedAudioFile: null,
      receiveEmailNotification: "",
      sliderValue: 0,
      AdvMisscallRouting: "",
      filteredTeamMembers: [],
      filterTeamMemberText: "",
      filterTeamMemberSpinnerEnabled: false,
      departmentDropdownOpen: false,
      defaultDepartmentDDValue: "",
      departmentDD: [],
      uploadError: false,
      advUploadError : false,
    };

    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.onCallHandlingDropdownOpen = this.onCallHandlingDropdownOpen.bind(this);
    this.onCallHandlingDropdownSelected = this.onCallHandlingDropdownSelected.bind(this);
    this.deleteCallHandlingVoiceMail = this.deleteCallHandlingVoiceMail.bind(this);
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.selectCallHandlingAudioFileWindow = this.selectCallHandlingAudioFileWindow.bind(this);
    this.selectAdvCallHandlingAudioFileWindow = this.selectAdvCallHandlingAudioFileWindow.bind(this);
    this.setDefaultValues = this.setDefaultValues.bind(this);
    this.onReceiveEmailNotificationChange = this.onReceiveEmailNotificationChange.bind(this);
    this.pickFileRef = React.createRef();
    this.advPickFileRef = React.createRef();
    this.onFilterTeamMemberTextChange = this.onFilterTeamMemberTextChange.bind(this);
    this.AdvonCallHandlingDropdownOpen = this.AdvonCallHandlingDropdownOpen.bind(this);
    this.onAdvMissCallRouteOptChange = this.onAdvMissCallRouteOptChange.bind(this);
    this.AdvdeleteCallHandlingVoiceMail = this.AdvdeleteCallHandlingVoiceMail.bind(this);
    this.AdvonCallHandlingDropdownSelected = this.AdvonCallHandlingDropdownSelected.bind(this);
    this.onTeamMemberSelection = this.onTeamMemberSelection.bind(this);
    this.onDepartmentDDOpen = this.onDepartmentDDOpen.bind(this);
    this.onDepartmentSelection = this.onDepartmentSelection.bind(this);
    this.onFileInputClick = this.onFileInputClick.bind(this);
    this.advanceHandleFileSelect = this.advanceHandleFileSelect.bind(this);
    this.onBlurTeamMember = this.onBlurTeamMember.bind(this);


  }

  onFileInputClick(event){
     event.target.value = '';
  }

  onBlurTeamMember(e){
    e.target.value="";
  }

  componentWillReceiveProps(props) {
    // Calculate default voicemail dropdown
    if (isEmpty(props.callHandling) == false && this.props.callHandlingEditVoiceMailName === '') {
      const callHandlingData = props.callHandling.data;
      const selectedCallHandlingDropdownName = filter(callHandlingData.voicemail_greeting, item => item.select_flag === '1');
      if (selectedCallHandlingDropdownName.length > 0) {
        this.props.onChangeCallHandlingDropdown(selectedCallHandlingDropdownName[0].id, selectedCallHandlingDropdownName[0].name, true);
      }
    }

    // default value for Adv DD
    if (isEmpty(props.callHandling) == false && this.props.AdvcallHandlingEditVoiceMailName === '') {
      const callHandlingData = props.callHandling.data;
      const AdvselectedCallHandlingDropdownName = filter(callHandlingData.data_to_message, item => item.select_flag === '1');
      if (AdvselectedCallHandlingDropdownName.length > 0) {
        this.props.AdvonChangeCallHandlingDropdown(AdvselectedCallHandlingDropdownName[0].id, AdvselectedCallHandlingDropdownName[0].name, true);
      }
    }

    // Default value for Team memeber
    if (isEmpty(props.callHandling) == false && this.state.filterTeamMemberText === '') {
      const callHandlingData = props.callHandling.data;
      const selectedTeamMember = filter(callHandlingData.data_team_member, item => item.select_flag === '1');
      if (selectedTeamMember.length > 0) {
        this.setState({filterTeamMemberText: selectedTeamMember[0].name});
      }
    }

    // Default value for department
    if (isEmpty(props.callHandling) == false && this.state.defaultDepartmentDDValue === "") {
      const callHandlingData = props.callHandling.data;
      const selectedDept = filter(callHandlingData.data_departments.deaprtments_ddl, item => item.select_flag === '1');
      if (selectedDept.length > 0) {
        this.setState({defaultDepartmentDDValue: selectedDept[0].dept_name});
      }
    }

    this.setDefaultValues(props);
  }

  onDepartmentDDOpen(e) {
    this.setState({departmentDropdownOpen: true});
  }

  onDepartmentSelection(e) {
    const value = e.target.getAttribute("value");
    const id = e.target.getAttribute("id");
    this.setState({
      defaultDepartmentDDValue: value,
      departmentDropdownOpen: false
    }, () => {
      this.props.actions.editAdvMissCallDepartmentOption(this.props.accessToken, id);
    });

  }

  onFilterTeamMemberTextChange(e) {
    const userInput = e.target.value;
    const filterTeamMem = userInput === ""
      ? []
      : filter(this.props.callHandling.data.data_team_member, item => item.name.includes(userInput));
    this.setState({filterTeamMemberText: userInput, filteredTeamMembers: filterTeamMem, filterTeamMemberSpinnerEnabled: true});
  }

  onTeamMemberSelection(e, item) {
    this.props.actions.editAdvMissCallTeamMemberOption(this.props.accessToken, item.team_member_id);
    this.setState({filterTeamMemberText: item.name, filteredTeamMembers: [], filterTeamMemberSpinnerEnabled: false});
    e.target.innerText = "";
  }

  onAdvMissCallRouteOptChange(e, type) {
    switch (type) {
      case "1":
        this.setState({AdvMisscallRouting: "1"});
        this.props.actions.editAdvMisscallRouteOption(this.props.accessToken, "1");
        break;
      case "2":
        this.setState({AdvMisscallRouting: "2"});
        this.props.actions.editAdvMisscallDropdownValue(this.props.accessToken, this.props.AdvcallHandlingEditVoiceMailId, "ADV_MISS_CALL");
        break;
      case "3":
        this.setState({AdvMisscallRouting: "3"});
        break;
      case "4":
        this.setState({AdvMisscallRouting: "4"});
        break;
      default:
    }
  }

  setDefaultValues(props) {
    if (props && props.callHandling && this.state.receiveEmailNotification === "") {
      const selectedDepartment = filter(props.callHandling.data.data_departments.deaprtments_ddl, item => item.select_flag === '1');
      this.setState({
        receiveEmailNotification: props.callHandling.data.receive_email_notification === "1"
          ? "checked"
          : "unchecked",
        sliderValue: parseInt(props.callHandling.data.ring_duration),
        AdvMisscallRouting: props.callHandling.data.adv_miss_call_routing,
        defaultDepartmentDDValue: selectedDepartment.length > 0
          ? selectedDepartment[0].dept_name
          : "",
        departmentDD: props.callHandling.data.data_departments.deaprtments_ddl
      });
    }
  }

  onReceiveEmailNotificationChange(e) {
    this.setState({
      receiveEmailNotification: this.state.receiveEmailNotification === "unchecked"
        ? "checked"
        : "unchecked"
    }, () => {
      this.props.actions.editReceiveEmailOption(
        this.props.accessToken, this.state.receiveEmailNotification === "unchecked"
        ? "2"
        : "1");
    });
  }

  handleFileSelect = (e) => {
    if (e.target.files[0].name.includes(".mp3")) {
      this.setState({
        callHandlingSelectedAudioFile: e.target.files[0],
        uploadError: false
      }, () => {
          this.props.actions.uploadCallHandlingAudioFile(this.props.accessToken, this.state.callHandlingSelectedAudioFile).then((response) => {
             this.props.actions.fetchCallHandling(this.props.accessToken);
        });
      });
    } else {
      this.setState({uploadError: true});
    }
  }

  advanceHandleFileSelect = (e) => {
    if (e.target.files[0].name.includes(".mp3")) {
      this.setState({
        callHandlingSelectedAudioFile: e.target.files[0],
        advUploadError: false
      }, () => {
          this.props.actions.uploadAdvMisscallRouteAudio(this.props.accessToken, this.state.callHandlingSelectedAudioFile).then((response) => {
             this.props.actions.fetchCallHandling(this.props.accessToken);
        });
      });
    } else {
      this.setState({advUploadError: true});
    }
  }

  selectCallHandlingAudioFileWindow = () => {
    const node = this.pickFileRef.current;
    node.click();
  }

  selectAdvCallHandlingAudioFileWindow = () => {
    const node = this.advPickFileRef.current;
    node.click();
  }

  deleteCallHandlingVoiceMail = () => {
    this.props.deleteCallHandlingVoiceMail(this.props.callHandling.voicemail_greeting);
  }

  AdvdeleteCallHandlingVoiceMail = () => {
    this.props.AdvdeleteCallHandlingVoiceMail(this.props.callHandling.data_to_message);
  }

  handleSliderChange = (event, value) => {
    this.setState({sliderValue: value});
    this.props.editRingDuration(value);
  };

  _toggleDiv() {
    if (this.props.callHandling === undefined) {
      this.props.actions.fetchCallHandling(this.props.accessToken);
    }
    this.setState({
      callHandlingAndVoiceMail: !this.state.callHandlingAndVoiceMail
    });
  }

  _toggleAdvOption() {

    this.setState({
      callHandlingAndVoiceMailAdvOption: !this.state.callHandlingAndVoiceMailAdvOption
    });
  }

  onCallHandlingDropdownOpen() {
    this.setState({callHandlingDropdownOpen: true});
  }

  AdvonCallHandlingDropdownOpen() {
    this.setState({AdvcallHandlingDropdownOpen: true});
  }

  onCallHandlingDropdownSelected(e) {
    this.props.onChangeCallHandlingDropdown(e.target.getAttribute("id"), e.target.getAttribute("value"));
    this.setState({callHandlingDropdownOpen: false});
  }

  AdvonCallHandlingDropdownSelected(e) {
    this.props.AdvonChangeCallHandlingDropdown(e.target.getAttribute("id"), e.target.getAttribute("value"));
    this.setState({AdvcallHandlingDropdownOpen: false});
  }

  _onDropDownChange() {
    this.props.showSuccessToast();
  }

  render() {

    const callHandling = this.props.callHandling != undefined
      ? this.props.callHandling.data
      : {};

    return (<div className="user-uvmc-view-holder">
      <div>

        <div className="web-admin-section closed">
          <div className="web-admin-section-header" onClick={(e) => this._toggleDiv()}>
            <div className="web-admin-section-icon icon-holder mblock">
              <img src={logo} className="logo-size"/>
            </div>
            <div className="header-2 web-admin-section-title mblock">

              Call Handling &amp; Voicemail

            </div>
            <div className="web-admin-section-expander snappy icon-holder mblock"></div>
          </div>

          {
            this.state.callHandlingAndVoiceMail && isEmpty(callHandling) === false
              ? <div className="web-admin-section-child-view-holder">
                  <div className="web-admin-section-child-view " id="callHandling">

                    <div>
                      <div id="uvmc-subheader" className="body-copy-2">
                        Determine how incoming calls are handled and manage your voicemail settings.
                      </div>
                      <div id="uvmc-greetings-view">
                        <div>
                          <div className="body-copy-2 form-block">
                            Select the greeting people hear when you don't answer, or record a new one.
                          </div>

                          <audio className="audio-greeting" preload="none" src="https://uber-cdn.appspot.com/static/ivr/ubervoice/no_one_is_available_greeting.mp3"></audio>
                          <table className="form" id="table_ec1a_0">
                            <tbody>
                              <tr>
                                <td colSpan="2" id="td_ec1a_0">
                                  <div className="greetings-select">
                                    <div className="select-menu-view">
                                      <div className={this.state.callHandlingDropdownOpen
                                          ? "select-menu snappy"
                                          : "select-menu snappy  closed"}>
                                        <div className="sm-input-shim" tabIndex="0" onClick={this.onCallHandlingDropdownOpen}>

                                          <input id="customivr" name="customivr" type="text" value={this.props.callHandlingEditVoiceMailName} className="snappy sm-input sm-item-value-5734787986096128 " tabIndex="-1"/>
                                        </div>
                                        <div className="sm-menu">
                                          <div></div>
                                          <ul className="sm-list">
                                            {
                                              callHandling.voicemail_greeting.map(item => <li className="sm-item" id="sm-item-customivr-default" data-value="default">
                                                <a className="sm-text sm-item-value-default " id={item.id} value={item.name} onClick={this.onCallHandlingDropdownSelected}>
                                                  {item.name}
                                                </a>
                                              </li>)
                                            }
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="greetings-icons" id="td_ec1a_1">
                                  <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
                                  <div onClick={this.props.onOpenCallHandlingEditName} className=" web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
                                  <div onClick={this.deleteCallHandlingVoiceMail} className=" web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>
                                </td>
                              </tr>

                              <tr className={this.state.uploadError
                                  ? "upload_error"
                                  : "upload_error hide"}>
                                <td id="td_ec1a_2" colSpan="2">
                                  <div className="mblock icon-text">
                                    <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
                                    <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
                                  </div>
                                </td>
                                <td></td>
                              </tr>
                              <tr className="delete_error hide">
                                <td id="td_ec1a_3" colSpan="3">
                                  <div className="mblock icon-text">
                                    <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
                                    <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
                                  </div>
                                </td>
                                <td></td>
                              </tr>
                              <br/><br/>
                              <tr className="upload_buttons">

                                <td id="td_ec1a_4">
                                  <div className="record-a-greeting mblock icon-text">
                                    <div className="web-icon web-icon-s web-icon-s-plus mblock"></div>

                                    <div className="wlink iblock">Record a greeting</div>

                                  </div>
                                </td>

                                <td id="td_ec1a_5">
                                  <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
                                  <div className="upload-greeting mblock right icon-text">
                                    <div className="web-icon web-icon-xs web-icon-xs-upload mblock"></div>
                                    <div className="wlink iblock" onClick={this.selectCallHandlingAudioFileWindow}>
                                      Upload (.mp3)
                                      <input type="file" ref={this.pickFileRef} accept=".mp3" onClick={this.onFileInputClick}  onChange={ this.handleFileSelect} className="hide"/>
                                    </div>
                                  </div>
                                </td>

                                <td></td>
                              </tr>

                              <tr className={   this.props.callHandling.audioUploading  ? "upload_status" : "upload_status hide" }>
                                <td id="td_ec1a_6" colSpan="2">
                                  <div className="uploading">
                                    <div className="mblock">
                                      <div className="mblock spinner"></div>
                                      <div className="body-copy-2 inline">
                                        Uploading...</div>
                                    </div>
                                  </div>
                                  <div className="upload_complete">
                                    <div className="mblock">
                                      <div className="web-icon-s web-icon-s-check mblock" id="div_ec1a_0"></div>
                                      <div className="body-copy-2 mblock">Success!
                                        <span className="wlink upload-greeting">Upload another?</span>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>

                              <tr onClick={this.onReceiveEmailNotificationChange}>
                                <td className="voicemail-notification-user" id="td_d784_0" colSpan="3">
                                  <div id="voicemail-notification-user" className="mblock">
                                    <div className={this.state.receiveEmailNotification === "checked"
                                        ? "radio square mblock checked"
                                        : "radio square mblock unchecked"} id="div_d784_0">
                                      <div className="snappy"></div>
                                      <input id="input-voicemail-notification-user" name="voicemail-notification" type="checkbox" defaultValue="help@myeasytel.com"/>
                                    </div>
                                  </div>
                                  Receive email notifications for new voicemails.
                                </td>
                              </tr>

                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div id="uvmc-user-prs-view">
                        <div>
                          <div id="user-advanced-settings-wrapper">
                            <div id="div_ec1a_2">
                              <div id="show-user-advanced-options" onClick={(e) => this._toggleAdvOption()} className="wlink user-advanced-options">{
                                  this.state.callHandlingAndVoiceMailAdvOption
                                    ? 'Hide advanced options'
                                    : 'Show advanced options'
                                }</div>
                            </div>
                            <div id="user-advanced-options-content-wrapper" className={this.state.callHandlingAndVoiceMailAdvOption
                                ? ""
                                : "hide"}>
                              <div className="body-copy-2 form-block">Manage advanced call settings, such as ring duration, advanced missed call routing, and more.</div>

                              <div id="div_ec1a_3">
                                <div className="header-4">Ring duration</div>
                                <div id="div_ec1a_4">
                                  Choose how long your devices will ring before going to voicemail or forwarding to a contact (default 30s)
                                </div>

                                <div id="ring-duration-slider-view">
                                  <SimpleSlider value={this.state.sliderValue} onSliderChange={this.handleSliderChange}/>
                                </div>

                                <div className="info-box-wrapper">
                                  <div className="float snappy icon-holder mblock info-box-icon"></div>
                                  <div className="info-box-message">
                                    If you enabled call forwarding to your mobile device and select a ring duration longer than 30 seconds, your device's voicemail may answer before your Dialpad voicemail.
                                  </div>
                                </div>
                              </div>

                              <div id="div_ec1a_7">
                                <div className="header-4" id="div_ec1a_8">Advanced missed call routing</div>
                                <div id="post-ring-seconds-view">
                                  <div>
                                    <div className="form prs-contact-type-user" id="div_4e6b_0">
                                      <div className="body-copy-2 dialog-label-desc">When your phone rings for the ring duration, calls will be sent:</div>

                                      <div id="div_4e6b_1">
                                        <div id="to-voicemail" className="mblock">
                                          <div onClick={(e) => this.onAdvMissCallRouteOptChange(e, "1")} className={this.state.AdvMisscallRouting === "1"
                                              ? "radio checked marginFix"
                                              : "radio unchecked marginFix"}>
                                            <div className="snappy"></div>
                                            <input id="to-voicemail" name="" type="radio" value="voicemail" checked="true"/></div>
                                        </div>
                                        <label htmlFor="to-voicemail" className={this.state.AdvMisscallRouting === "1"
                                            ? "radio-label checked"
                                            : "radio-label unchecked"}>
                                          To voicemail

                                        </label>
                                        <table>
                                          <tbody>
                                            <tr className="forwarding-advanced-settings-row"></tr>

                                          </tbody>
                                        </table>
                                      </div>

                                      <div id="div_4e6b_2">
                                        <div id="vm_unavailable" className="mblock">
                                          <div onClick={(e) => this.onAdvMissCallRouteOptChange(e, "2")} className={this.state.AdvMisscallRouting === "2"
                                              ? "radio checked marginFix"
                                              : "radio unchecked marginFix"}>
                                            <div className="snappy"></div>
                                            <input id="vm_unavailable" name="" type="radio" value="message"/></div>
                                        </div>
                                        <label htmlFor="vm_unavailable" className={this.state.AdvMisscallRouting === "2"
                                            ? "radio-label checked"
                                            : "radio-label unchecked"}>

                                          To a message (no voicemail)

                                        </label>
                                        <div id="vm-unavailable-greetings-view" className="prs-forward-to-contact">
                                          <div>
                                            <audio className="audio-greeting" preload="none" src="https://uber-cdn.appspot.com/static/ivr/ubervoice/no_one_is_available.mp3"></audio>
                                            {
                                              this.state.AdvMisscallRouting === "2"
                                                ? <table className="form" id="table_4e6b_0">
                                                    <tbody>
                                                      <tr>
                                                        <td colSpan="2" id="td_ec1a_0">
                                                          <div className="greetings-select">
                                                            <div className="select-menu-view">
                                                              <div className={this.state.AdvcallHandlingDropdownOpen
                                                                  ? "select-menu snappy"
                                                                  : "select-menu snappy  closed"}>
                                                                <div className="sm-input-shim" tabIndex="0" onClick={this.AdvonCallHandlingDropdownOpen}>

                                                                  <input id="customivr" name="customivr" type="text" value={this.props.AdvcallHandlingEditVoiceMailName} className="snappy sm-input sm-item-value-5734787986096128 " tabIndex="-1"/>
                                                                </div>
                                                                <div className="sm-menu">
                                                                  <div></div>
                                                                  <ul className="sm-list">
                                                                    {
                                                                      callHandling.data_to_message.map(item => <li className="sm-item" id="sm-item-customivr-default" data-value="default">
                                                                        <a className="sm-text sm-item-value-default " id={item.id} value={item.name} onClick={this.AdvonCallHandlingDropdownSelected}>
                                                                          {item.name}
                                                                        </a>
                                                                      </li>)
                                                                    }
                                                                  </ul>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </td>
                                                        <td className="greetings-icons" id="td_ec1a_1">
                                                          <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
                                                          <div onClick={this.props.AdvonOpenCallHandlingEditName} className=" web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
                                                          <div onClick={this.AdvdeleteCallHandlingVoiceMail} className=" web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>
                                                        </td>
                                                      </tr>

                                                      <tr className={this.state.advUploadError ?  "upload_error" :  "upload_error hide" }>
                                                        <td id="td_ec1a_2" colSpan="2">
                                                          <div className="mblock icon-text">
                                                            <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
                                                            <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
                                                          </div>
                                                        </td>
                                                        <td></td>
                                                      </tr>
                                                      <tr className="delete_error hide">
                                                        <td id="td_ec1a_3" colSpan="3">
                                                          <div className="mblock icon-text">
                                                            <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
                                                            <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
                                                          </div>
                                                        </td>
                                                        <td></td>
                                                      </tr>
                                                      <br/><br/>
                                                      <tr className="upload_buttons">

                                                        <td id="td_ec1a_4">
                                                          <div className="record-a-greeting mblock icon-text">
                                                            <div className="web-icon web-icon-s web-icon-s-plus mblock"></div>

                                                            <div className="wlink iblock">Record a greeting</div>

                                                          </div>
                                                        </td>

                                                        <td id="td_ec1a_5">
                                                          <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
                                                          <div className="upload-greeting mblock right icon-text">
                                                            <div className="web-icon web-icon-xs web-icon-xs-upload mblock"></div>
                                                            <div className="wlink iblock" onClick={this.selectAdvCallHandlingAudioFileWindow}>
                                                              Upload (.mp3)
                                                              <input type="file" ref={this.advPickFileRef} accept=".mp3" onChange={  this.advanceHandleFileSelect
                                                                }  onClick={this.onFileInputClick} className="hide"/>
                                                            </div>
                                                          </div>
                                                        </td>

                                                        <td></td>
                                                      </tr>

                                                      <tr className={   this.props.callHandling.advAudioUploading ? "upload_status" : "upload_status hide" } >
                                                        <td id="td_ec1a_6" colSpan="2">
                                                          <div className="uploading">
                                                            <div className="mblock">
                                                              <div className="mblock spinner"></div>
                                                              <div className="body-copy-2 inline">
                                                                Uploading...</div>
                                                            </div>
                                                          </div>
                                                          <div className="upload_complete">
                                                            <div className="mblock">
                                                              <div className="web-icon-s web-icon-s-check mblock" id="div_ec1a_0"></div>
                                                              <div className="body-copy-2 mblock">Success!
                                                                <span className="wlink upload-greeting">Upload another?</span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </td>
                                                      </tr>

                                                    </tbody>
                                                  </table>
                                                : ""
                                            }
                                          </div>
                                        </div>
                                        <table>
                                          <tbody>
                                            <tr className="forwarding-advanced-settings-row"></tr>

                                            <tr id="vm-unavailable-row"></tr>

                                          </tbody>
                                        </table>
                                      </div>

                                      <div id="div_4e6b_4">
                                        <div id="to-contact" className="mblock">
                                          <div onClick={(e) => this.onAdvMissCallRouteOptChange(e, "3")} className={this.state.AdvMisscallRouting === "3"
                                              ? "radio checked marginFix"
                                              : "radio unchecked marginFix"}>
                                            <div className="snappy"></div>
                                            <input id="to-contact" name="" type="radio" value="contact"/></div>
                                        </div>
                                        <label htmlFor="to-contact" className={this.state.AdvMisscallRouting === "3"
                                            ? "radio-label checked"
                                            : "radio-label unchecked"}>

                                          To a team member / room phone

                                        </label>
                                        {
                                          this.state.AdvMisscallRouting === "3"
                                            ? <div id="contact-suggest-view" className="prs-forward-to-contact">
                                                <div className="user-suggest">
                                                  <div className="mblock auto-suggest">
                                                    <input type="text" placeholder={this.state.filterTeamMemberText} autoComplete="off" className="user-suggest-input" onChange={this.onFilterTeamMemberTextChange} onBlur={this.onBlurTeamMember}/>
                                                    <div className={this.state.filterTeamMemberSpinnerEnabled
                                                        ? "spinner"
                                                        : "spinner hide"}></div>
                                                    <ul className="user-suggest-list">
                                                      {
                                                        this.state.filteredTeamMembers.length > 0
                                                          ? this.state.filteredTeamMembers.map((item, index) => <div onClick={(e) => this.onTeamMemberSelection(e, item)}>
                                                            <li key={index}>{item.name}</li>
                                                          </div>)
                                                          : undefined
                                                      }
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                            : undefined
                                        }
                                        <div id="contact-name-post-ring" className="mblock auto-suggest-disabled hide">
                                          <input type="text" placeholder="Name this number (Required)" autoComplete="off" className="contact-name-input" id="input_4e6b_0"/></div>
                                        <table>
                                          <tbody>
                                            <tr className="forwarding-advanced-settings-row"></tr>

                                            <tr id="contact-suggest-row"></tr>

                                          </tbody>
                                        </table>
                                      </div>

                                      <div id="div_4e6b_5">
                                        <div id="to-group" className="mblock">
                                          <div onClick={(e) => this.onAdvMissCallRouteOptChange(e, "4")} className={this.state.AdvMisscallRouting === "4"
                                              ? "radio checked marginFix"
                                              : "radio unchecked marginFix"}>
                                            <div className="snappy"></div>
                                            <input id="to-group" name="" type="radio" value="group"/></div>
                                        </div>
                                        <label htmlFor="to-group" className={this.state.AdvMisscallRouting === "4"
                                            ? "radio-label checked"
                                            : "radio-label unchecked"}>

                                          To a department

                                        </label>
                                        {
                                          this.state.AdvMisscallRouting === "4"
                                            ? <div id="department-menu-view" className="prs-forward-to-contact">
                                                <div className="select-menu-view">
                                                  <div className={this.state.departmentDropdownOpen
                                                      ? "select-menu snappy  "
                                                      : "select-menu snappy  closed"}>
                                                    <div className="sm-input-shim" tabIndex="0" onClick={this.onDepartmentDDOpen}>

                                                      <input id="forward-to-department" name="forward-to-department" type="text" defaultValue={this.state.defaultDepartmentDDValue} className="snappy sm-input sm-item-value- unselected " tabIndex="-1"/></div>
                                                    <div className="sm-menu">
                                                      <div></div>

                                                      <ul className="sm-list">
                                                        {
                                                          this.state.departmentDD.map((item) => <li className="sm-item" id="sm-item-customivr-default" data-value="default">
                                                            <a className="sm-text sm-item-value-default " id={item.dept_name} value={item.dept_name} onClick={this.onDepartmentSelection}>
                                                              {item.dept_name}
                                                            </a>
                                                          </li>)
                                                        }

                                                      </ul>

                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            : undefined
                                        }

                                        <div className="emptySpace"></div>
                                        <table>
                                          <tbody>
                                            <tr className="forwarding-advanced-settings-row"></tr>

                                            <tr id="department-menu-row"></tr>

                                          </tbody>
                                        </table>
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

                  </div>
                </div>
              : <div></div>

          }

          <div className="web-admin-section-bottom"></div>
        </div>
      </div>
    </div>);
  }

}

CallHandlingAndVoiceMail.propTypes = {
  actions: PropTypes.shape({}),
  dashboard: PropTypes.object
};

const mapStateToProps = (state) => ({ callHandling: state.dashboard.callHandling, accessToken: state.login.data.access_token}),
  mapDispatchToProps = (dispatch) => {
    const {
      fetchCallHandling,
      editReceiveEmailOption,
      editAdvMisscallRouteOption,
      editAdvMissCallTeamMemberOption,
      editAdvMissCallDepartmentOption,
      editAdvMisscallDropdownValue,
      uploadCallHandlingAudioFile,
      uploadAdvMisscallRouteAudio

    } = actions;

    return {
      actions: bindActionCreators({
        fetchCallHandling,
        editReceiveEmailOption,
        editAdvMisscallRouteOption,
        editAdvMissCallTeamMemberOption,
        editAdvMissCallDepartmentOption,
        editAdvMisscallDropdownValue,
        uploadCallHandlingAudioFile,
        uploadAdvMisscallRouteAudio

      }, dispatch)
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(CallHandlingAndVoiceMail);
