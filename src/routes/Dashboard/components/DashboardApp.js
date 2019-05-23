import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import autobind from 'autobind-decorator';
import {browserHistory} from 'react-router';
import actions from '../modules/actions';
import './DashboardMarkup.scss';
import VoiceAI from './VoiceAI/VoiceAI';
import CallHandlingAndVoiceMail from './CallHandlingAndVoiceMail/CallHandlingAndVoiceMail';
import YourDevices from './YourDevices/YourDevices';
import ExecutiveAssistance from './ExecutiveAssistance/ExecutiveAssistance';
import ForYourSafty from './ForYourSafty/ForYourSafty';
import {rightSideAdvanceDeviceSetting} from './AllDialogsHtml';
import {isEmpty, filter} from 'lodash';
const checkLogo = require("../../../styles/img/ic-checked.png");

import BaseContainer from '../../BaseContainer/BaseContainer';

class DashboardApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isNameEditing: false,
      showSavingDataPopup: false,
      showSavingCompletePopup: false,
      firstName: props && props.userProfile
        ? props.userProfile.first_name
        : '',
      lastName: props && props.userProfile
        ? props.userProfile.last_name
        : '',
      isVoicePinEditing: false,
      voicePin: props.userProfile.voicemail_pin,
      voicePinError: false,
      callerIdSelected: "",
      timezoneSelected: "",
      yourDeviceAdvSettingsOpen: false,
      yourDeviceAdvSettingOption1Selection: "1",
      yourDeviceAdvSettingOption2Selection: "1",
      yourDeviceAdvSettingOption3Selection: "1",
      yourDeviceAdvSettingAnswerFrdCalls: "2",
      yourDeviceAdvSettingSmsFrd: []
    }

    this.onEditName = this.onEditName.bind(this);
    this.onSaveName = this.onSaveName.bind(this);
    this.onFirstNameChangeHandle = this.onFirstNameChangeHandle.bind(this);
    this.onLastNameChangeHandle = this.onLastNameChangeHandle.bind(this);
    this.onVoicePinEdit = this.onVoicePinEdit.bind(this);
    this.onVoicePinSave = this.onVoicePinSave.bind(this);
    this.onVoicePinFocus = this.onVoicePinFocus.bind(this);
    this.onVoicePinChange = this.onVoicePinChange.bind(this);
    this.onCallerIdClick = this.onCallerIdClick.bind(this);
    this.onTimezoneClick = this.onTimezoneClick.bind(this);
    this.onYourDeviceAdvSettingDialogOpen = this.onYourDeviceAdvSettingDialogOpen.bind(this);
    this.onYourDeviceOptionChecked = this.onYourDeviceOptionChecked.bind(this);
    this.onYourDeviceAdvSettingsSubmit = this.onYourDeviceAdvSettingsSubmit.bind(this);

  }

  onYourDeviceOptionChecked(optionNumber, data) {
    switch (optionNumber) {
      case "1":
        this.setState({yourDeviceAdvSettingOption1Selection: data});
        break;
      case "2":
        this.setState({yourDeviceAdvSettingOption2Selection: data});
        break;
      case "3":
        this.setState({yourDeviceAdvSettingOption3Selection: data});
        break;
      case "4":
        this.setState({
          yourDeviceAdvSettingAnswerFrdCalls: this.state.yourDeviceAdvSettingAnswerFrdCalls === "1"
            ? "2"
            : "1"
        });
        break;
      case "5":
        this.setState({yourDeviceAdvSettingSmsFrd: []});
        break;

      default:

    }
  }

  onYourDeviceAdvSettingsSubmit() {
    this.onYourDeviceAdvSettingDialogOpen();
    this.props.actions.editYourDeviceAdvSetting(this.props.accessToken, this.state.yourDeviceAdvSettingOption1Selection, this.state.yourDeviceAdvSettingOption2Selection, this.state.yourDeviceAdvSettingOption3Selection, this.state.yourDeviceAdvSettingAnswerFrdCalls, this.state.yourDeviceAdvSettingSmsFrd);
  }

  onYourDeviceAdvSettingDialogOpen() {
    if (this.props.yourDevicesAdvSettings === undefined) {
      this.props.actions.fetchYourDeviceAdvSettings(this.props.accessToken);
    }

    this.setState({
      yourDeviceAdvSettingsOpen: !this.state.yourDeviceAdvSettingsOpen
    });
  }

  onCallerIdClick(e) {
    this.props.handleDropDownClick();
    this.setState({callerIdSelected: e.target.innerText});
    this.props.editCallerId(e.target.getAttribute("id"));
  }

  onTimezoneClick(e) {
    this.props.handleDropDownClick();
    this.setState({timezoneSelected: e.target.innerText});
    this.props.editTimeZone(e.target.getAttribute("id"));
  }

  onEditName() {
    this.setState({isNameEditing: true});
  }

  onVoicePinEdit() {
    this.setState({isVoicePinEditing: true, voicePin: ''});
  }

  onVoicePinFocus() {
    this.setState({voicePinError: false});
  }

  onVoicePinChange(e) {
    this.setState({voicePin: e.target.value});
  }

  onVoicePinSave() {
    if (this.state.voicePin === '' || this.state.voicePin.length != 4) {
      this.setState({voicePinError: true});
    } else {
      this.setState({isVoicePinEditing: false});
      this.props.editVoicePin(this.state.voicePin);

    }

  }

  onSaveName() {
    this.setState({isNameEditing: false});
    this.props.editUserName(this.state.firstName, this.state.lastName);
  }

  onFirstNameChangeHandle(e) {
    this.setState({firstName: e.target.value});
  }

  onLastNameChangeHandle(e) {
    this.setState({lastName: e.target.value});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.editing != this.props.editing && nextProps.editing == false) {
      setTimeout(function() {
        this.setState({showSavingDataPopup: false});
        this.setState({showSavingCompletePopup: true});
        setTimeout(function() {
          this.setState({showSavingCompletePopup: false});
        }.bind(this), 300);
      }.bind(this), 1000);

    } else if (nextProps && nextProps.editing == true) {
      this.setState({showSavingDataPopup: true});
    }
    this.setDefaultValue(nextProps);
  }

  componentDidMount() {
    this.setDefaultValue(this.props);
  }

  setDefaultValue(nextProps) {
    if (nextProps.yourDevicesAdvSettings) {
      this.setState({yourDeviceAdvSettingOption1Selection: nextProps.yourDevicesAdvSettings.data.personal_dialpad_no, yourDeviceAdvSettingOption2Selection: nextProps.yourDevicesAdvSettings.data.dept_mainline_no, yourDeviceAdvSettingOption3Selection: nextProps.yourDevicesAdvSettings.data.executies, yourDeviceAdvSettingAnswerFrdCalls: nextProps.yourDevicesAdvSettings.data.answerd_fwd_calls, yourDeviceAdvSettingSmsFrd: nextProps.yourDevicesAdvSettings.data.sms_forwarding.forwarding_num_dropdown});
    }

    if (nextProps.userProfile) {

      if (this.state.timezoneSelected === "") {
        this.setState({timezoneSelected: nextProps.userProfile.timezone});
      }

      if (this.state.callerIdSelected === "") {
        const callerIds = nextProps.userProfile.caller_id_dropdown;
        const selectedCallerId = filter(callerIds, item => item.select_flag === '1');
        if (selectedCallerId.length > 0) {
          this.setState({callerIdSelected: selectedCallerId[0].phone_numbers});
        }
      }
    }
  }

  render() {

    const {
      userProfile,
      showSuccessToast,
      onCallerIdMenuClick,
      callerIdMenu,
      onTimeZoneMenuClick,
      onLanguageMenuClick,
      languageMenu,
      timezoneMenu,
      fetching,
      editing,
      onChangePasswordOpen,
      editRingDuration,
      onOpenCallHandlingEditName,
      onChangeCallHandlingDropdown,
      callHandlingEditVoiceMailId,
      callHandlingEditVoiceMailName,
      deleteCallHandlingVoiceMail,
      AdvonOpenCallHandlingEditName,
      AdvonChangeCallHandlingDropdown,
      AdvcallHandlingEditVoiceMailId,
      AdvcallHandlingEditVoiceMailName,
      AdvdeleteCallHandlingVoiceMail,
      uploadCallHandlingAudioFile,
      saveCallHandlingDropdownPreferance,
      editYourSafty
    } = this.props;

    const savingDialog = this.state.showSavingDataPopup === true
      ? <div className="subheader-saving header-saving">
          <div className="alert-top-margin"></div>
          <div className="saving-content">
            <div className="mblock header-icon"><img src="https://dialpad.com/static/img/web/saving_loader.gif" className="subheader-loader admin-notification-complete-icon"/></div>
            <div className="mblock header-saved-text lmargin">Saving...</div>
          </div>
        </div>
      : undefined;



    const savingDialogComplete = this.state.showSavingCompletePopup === true
      ? <div className="subheader-saving header-saved">
          <div className="alert-top-margin"></div>
          <div className="saving-content">
            <img src={checkLogo} className="logo-size-small mblock icon header-icon admin-notification-complete-icon"/>
            <div className="mblock header-saved-text">&nbsp;Changes Saved!</div>
          </div>
        </div>
      : undefined;

    const rightSideBar = this.state.yourDeviceAdvSettingsOpen
      ? rightSideAdvanceDeviceSetting(this.onYourDeviceAdvSettingDialogOpen, this.state.yourDeviceAdvSettingOption1Selection, this.state.yourDeviceAdvSettingOption2Selection, this.state.yourDeviceAdvSettingOption3Selection, this.state.yourDeviceAdvSettingAnswerFrdCalls, this.state.yourDeviceAdvSettingSmsFrd, this.onYourDeviceOptionChecked, this.onYourDeviceAdvSettingsSubmit)
      : undefined;

    return (<div id="app" className={this.state.yourDeviceAdvSettingsOpen
        ? "rightbar-open content-overlay"
        : undefined}>
      <BaseContainer contentTd={
        <td id="content" className=" app-footer-none app-subheader-default app-overlay-none app-sidebar-none app-header-default">
          <div>
            <div>
              <div className="user-profile-view-holder">
                <div>
                  <form id="user-profile-form" className="form form-main">

                    <div className="form-block-hd header-2">Your Profile</div>
                    <div className="form-block">
                      <table>
                        <tbody>
                          <tr>
                            <td valign="top" id="td_368b_1">
                              <table>
                                <tbody>
                                  <tr>
                                    <td align="center" id="td_368b_2">
                                      <div className="iblock profile-picture-lg rel" id="div_368b_1">
                                        <div className="profile-picture-holder circle user-change-photo" id="div_368b_2"></div>
                                        <div className="profile-picture-edit user-change-photo abs wlink">Edit</div>
                                      </div>

                                      <div className="hide"><input id="user-upload-photo-input" type="file" htmlFor="user-profile-photo" accept="image/*"/></div>

                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>

                            <td>
                              <table className="user-profile-table">
                                <tbody>
                                  <tr>
                                    <td colSpan="2">
                                      {
                                        this.state.isNameEditing
                                          ? <div className="user-profile-edit-name" id="div_368b_5">

                                              <div className="mblock">
                                                <label htmlFor="user-first-name">First Name</label>
                                                <div>
                                                  <input name="first_name" id="user-first-name" type="text" defaultValue={this.state.firstName} onChange={(e) => this.onFirstNameChangeHandle(e)}/>
                                                </div>
                                              </div>
                                              <div className="mblock">
                                                <label htmlFor="user-last-name">Last Name</label>
                                                <div>

                                                  <input name="last_name" id="user-last-name" type="text" defaultValue={this.state.lastName} onChange={(e) => this.onLastNameChangeHandle(e)}/>
                                                </div>
                                              </div>

                                              <div className="user-profile-save-name mblock wlink" id="div_368b_6" onClick={(e) => this.onSaveName()}>
                                                Save Name
                                              </div>
                                            </div>
                                          : <div className="user-profile-name">
                                              <div className="mblock header-7 ellipsis" id="div_368b_3">{this.state.firstName + " " + this.state.lastName}</div>
                                              <div className="user-profile-edit-name-link mblock wlink" id="div_368b_4" onClick={this.onEditName}>Edit Name</div>
                                            </div>
                                      }
                                    </td>
                                  </tr>
                                  <tr>
                                    <td valign="top">
                                      <div className="header-5-c1" id="div_368b_7">
                                        {userProfile.email}
                                      </div>
                                    </td>
                                    <td></td>
                                  </tr>
                                  <tr>
                                    <td colSpan="2">

                                      <label>

                                        Your Dialpad Number

                                      </label>
                                      <div className="header-1">

                                        <div className="user-did mblock">
                                          {userProfile.phone_number.map((phNo) => <h4 className="h-bold" key={phNo}>{phNo}</h4>)}
                                        </div>

                                      </div>

                                      <div className="user-did-block">
                                        <label>Skylinx Main Line Number</label>
                                        <div className="header-1">
                                          {userProfile.mainline_number.map((mlNo) => <h4 className="h-bold" key={mlNo}>{mlNo}</h4>)}
                                        </div>
                                      </div>

                                      <div className="user-did-block dd300" title="The outbound Caller ID for all your Dialpad calls. This includes your Obihai, Mobile, and Desktop Apps">
                                        <label>Caller ID</label>
                                        <div className="iblock w100" id="user-caller-id">
                                          <div>
                                            <div id="caller-id-menu">
                                              <div className="select-menu-view">
                                                <div className={callerIdMenu
                                                    ? "select-menu snappy   "
                                                    : "select-menu snappy closed"}>
                                                  <div className="sm-input-shim" tabIndex="0" onClick={onCallerIdMenuClick}>

                                                    <input id="caller_id" name="caller_id" type="text" defaultValue={this.state.callerIdSelected} className="snappy sm-input sm-item-value-blocked " tabIndex="-1"/>
                                                  </div>
                                                  <div className="sm-menu">
                                                    <div></div>
                                                    <ul className="sm-list">

                                                      {
                                                        userProfile.caller_id_dropdown.map(item => <li key={item.id} className="sm-item" id="sm-item-caller_id-+12899199973">

                                                          <a className="sm-text sm-item-value-+12899199973 " id={item.id} key={item.phone_numbers} defaultValue={item.phone_numbers} onClick={(e) => this.onCallerIdClick(e)}>

                                                            {item.phone_numbers}
                                                          </a>
                                                        </li>)
                                                      }

                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="user-did-block dd300">
                                        <label>Language</label>
                                        <div className="iblock w100" id="user-lang">
                                          <div>
                                            <div id="user-lang-menu" onClick={onLanguageMenuClick}>
                                              <div className="select-menu-view">
                                                <div className={languageMenu
                                                    ? "select-menu snappy"
                                                    : "select-menu snappy  closed "}>
                                                  <div className="sm-input-shim" tabIndex="0">

                                                    <input id="language" name="language" type="text" defaultValue="English" className="snappy sm-input sm-item-value-en " tabIndex="-1"/>
                                                  </div>
                                                  <div className="sm-menu">
                                                    <div></div>
                                                    <ul className="sm-list">

                                                      <li className="sm-item" id="sm-item-language-en" data-value="en">

                                                        <a className="sm-text sm-item-value-en " href="javascript:void(0)" title="English">

                                                          English
                                                        </a>
                                                      </li>

                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="user-did-block">
                                        <label>Timezone</label>
                                        <div className="iblock w100" id="user-timezone" onClick={onTimeZoneMenuClick}>
                                          <div>
                                            <div>
                                              <div className="mblock">
                                                <div className="timezone-menu">
                                                  <div className="select-menu-view">
                                                    <div className={timezoneMenu
                                                        ? "select-menu snappy"
                                                        : "select-menu snappy  closed "}>
                                                      <div className="sm-input-shim" tabIndex="0">

                                                        <input id="timezone" name="timezone" type="text" defaultValue={this.state.timezoneSelected} className="snappy sm-input sm-item-value-US/Hawaii " tabIndex="-1"/>
                                                      </div>
                                                      <div className="sm-menu">
                                                        <div></div>
                                                        <ul className="sm-list">

                                                          {
                                                            userProfile.time_zone_drop_down.map((item) => <li className="sm-item" id={item} key={item}>

                                                              <a className="sm-text sm-item-value-Pacific/Midway " defaultValue={item} id={item} onClick={this.onTimezoneClick}>

                                                                {item}
                                                              </a>
                                                            </li>)
                                                          }

                                                        </ul>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>

                                              <div className="mblock">
                                                <div className="display-all-timezones">
                                                  <div className="mblock" id="display-all-timezones-checkbox">
                                                    <div className="customradio mblock" id="div_368b_8">
                                                      <div className="snappy"></div>
                                                      <input id="input-display-all-timezones-checkbox" type="checkbox"/>
                                                    </div>
                                                  </div>

                                                </div>
                                              </div>

                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="user-did-block">
                                        <div id="change-password" className="wlink" onClick={onChangePasswordOpen}>Change your password</div>
                                      </div>

                                      <div>

                                        <div className="iblock user-setting-code">
                                          <label>
                                            User &amp; Voicemail PIN
                                            <a id="user-pin-info" className="user-profile-label-info icon-holder mblock wlink" target="_blank" href="https://help.dialpad.com/hc/en-us/articles/210482063#voicemail-settings"></a>
                                          </label>
                                          {
                                            this.state.isVoicePinEditing === false
                                              ? <div id="user-pin-display">
                                                  <div className="mblock header-7">{this.state.voicePin}</div>
                                                  <a className="wlink a-change-user-pin lmargin" onClick={this.onVoicePinEdit}>change</a>
                                                </div>
                                              : undefined
                                          }
                                          {
                                            this.state.isVoicePinEditing
                                              ? <div id="user-pin-change">
                                                  <input id="user-pin" className="header-7" placeholder="••••" maxLength="4" onFocus={this.onVoicePinFocus} onChange={(e) => this.onVoicePinChange(e)}/>
                                                  <a className="wlink a-save-user-pin lmargin" onClick={this.onVoicePinSave}>save</a>
                                                </div>
                                              : undefined
                                          }
                                          {
                                            this.state.voicePinError
                                              ? <div id="user-pin-warning" className="icon-holder">

                                                  User PIN must be exactly 4 digits.
                                                </div>
                                              : undefined
                                          }
                                        </div>

                                      </div>

                                    </td>
                                  </tr>
                                </tbody>
                              </table>

                            </td>
                          </tr>

                        </tbody>
                      </table>

                    </div>

                  </form>
                </div>
              </div>

              {<CallHandlingAndVoiceMail editRingDuration={editRingDuration} showSuccessToast={showSuccessToast} onOpenCallHandlingEditName={onOpenCallHandlingEditName} onChangeCallHandlingDropdown={onChangeCallHandlingDropdown} callHandlingEditVoiceMailId={callHandlingEditVoiceMailId} deleteCallHandlingVoiceMail={deleteCallHandlingVoiceMail} callHandlingEditVoiceMailName={callHandlingEditVoiceMailName} AdvonOpenCallHandlingEditName={AdvonOpenCallHandlingEditName} AdvonChangeCallHandlingDropdown={AdvonChangeCallHandlingDropdown} AdvcallHandlingEditVoiceMailId={AdvcallHandlingEditVoiceMailId} AdvdeleteCallHandlingVoiceMail={AdvdeleteCallHandlingVoiceMail} AdvcallHandlingEditVoiceMailName={AdvcallHandlingEditVoiceMailName} uploadCallHandlingAudioFile={uploadCallHandlingAudioFile}/>}
              <YourDevices onYourDeviceAdvSettingDialogOpen={this.onYourDeviceAdvSettingDialogOpen}/>
              <ExecutiveAssistance/>
              <ForYourSafty editYourSafty={editYourSafty}/>

              <br></br>
              <br></br>
            </div>
          </div>
        </td>
      } savingDialog={savingDialog} rightSideBar={rightSideBar} savingDialogComplete={savingDialogComplete}/>
    </div>);
  }
}

const mapStateToProps = (state) => ({yourDevicesAdvSettings: state.dashboard.yourDevicesAdvSettings, accessToken: state.login.data.access_token}),
  mapDispatchToProps = (dispatch) => {
    const {fetchYourDeviceAdvSettings, editYourDeviceAdvSetting} = actions;

    return {
      actions: bindActionCreators({
        fetchYourDeviceAdvSettings,
        editYourDeviceAdvSetting
      }, dispatch)
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(DashboardApp);
