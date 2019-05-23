import React from 'react';
import PropTypes from 'prop-types';
import DashboardSideHeader from '../../../components/shared/DashboardSideHeader';
import './DashboardMarkup.scss';
import Toast from '../../../components/shared/controls/Toast';
import CircularIndeterminate from '../../../components/shared/CircularIndeterminate';
import DashboardApp from './DashboardApp';
import {isEmpty, filter} from 'lodash';
import {changePasswordDialog, editCallHandlingVoiceMailName} from './AllDialogsHtml';

class DashboardMarkup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isPasswordDialogOpen: false,
      isCallHandlingEditNameDialogOpen: false,
      AdvisCallHandlingEditNameDialogOpen: false,
      newPassword: '',
      oldPassword: '',
      confirmPassword: '',
      passwordError: '',
      callHandlingEditVoiceMailName: '',
      callHandlingEditVoiceMailId: 0,
      AdvcallHandlingEditVoiceMailName: '',
      AdvcallHandlingEditVoiceMailId: 0
    };
    this.onChangePasswordOpen = this.onChangePasswordOpen.bind(this);
    this.onChangePasswordDismiss = this.onChangePasswordDismiss.bind(this);
    this.onChangePasswordSave = this.onChangePasswordSave.bind(this);
    this.onOldPasswordChange = this.onOldPasswordChange.bind(this);
    this.onNewPasswordChange = this.onNewPasswordChange.bind(this);
    this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this);

    this.onOldPasswordFocus = this.onOldPasswordFocus.bind(this);
    this.onNewPasswordFocus = this.onNewPasswordFocus.bind(this);
    this.onConfirmPasswordFocus = this.onConfirmPasswordFocus.bind(this);
    this.onDismissCallHandlingEditName = this.onDismissCallHandlingEditName.bind(this);
    this.onOpenCallHandlingEditName = this.onOpenCallHandlingEditName.bind(this);
    this.onSaveCallHandlingEditName = this.onSaveCallHandlingEditName.bind(this);
    this.onChangeCallHandlingEditVoiceMailName = this.onChangeCallHandlingEditVoiceMailName.bind(this);
    this.onChangeCallHandlingDropdown = this.onChangeCallHandlingDropdown.bind(this);
    this.deleteCallHandlingVoiceMail = this.deleteCallHandlingVoiceMail.bind(this);

    this.AdvonChangeCallHandlingEditVoiceMailName = this.AdvonChangeCallHandlingEditVoiceMailName.bind(this);
    this.AdvonChangeCallHandlingDropdown = this.AdvonChangeCallHandlingDropdown.bind(this);
    this.AdvdeleteCallHandlingVoiceMail = this.AdvdeleteCallHandlingVoiceMail.bind(this);
        this.AdvonOpenCallHandlingEditName = this.AdvonOpenCallHandlingEditName.bind(this);
          this.AdvonDismissCallHandlingEditName = this.AdvonDismissCallHandlingEditName.bind(this);
  }

  deleteCallHandlingVoiceMail(dropdownValues) {
    this.props.deleteCallHandlingVoiceMail(this.state.callHandlingEditVoiceMailId);
    // recalculate the selected val in drodown
    const selectedCallHandlingDropdownName = filter(dropdownValues, item => item.select_flag === '1');
    if (selectedCallHandlingDropdownName.length > 0) {
      this.setState({callHandlingEditVoiceMailName: selectedCallHandlingDropdownName[0].name, callHandlingEditVoiceMailId: selectedCallHandlingDropdownName[0].id});
    } else {
      this.setState({callHandlingEditVoiceMailName: '', callHandlingEditVoiceMailId: 0});
    }
  }

  onChangeCallHandlingDropdown(id, name,type,isDefaultValues) {
    this.setState({callHandlingEditVoiceMailName: name, callHandlingEditVoiceMailId: id});
    if(isDefaultValues){
      return;
    }
    this.props.saveCallHandlingDropdownPreferance(id,"VOICEMAIL");
  }

  onChangeCallHandlingEditVoiceMailName(e) {
    this.setState({callHandlingEditVoiceMailName: e.target.value});
  }

  AdvdeleteCallHandlingVoiceMail(dropdownValues) {
    this.props.deleteCallHandlingVoiceMail(this.state.AdvcallHandlingEditVoiceMailId);
    // recalculate the selected val in drodown
    const selectedCallHandlingDropdownName = filter(dropdownValues, item => item.select_flag === '1');
    if (selectedCallHandlingDropdownName.length > 0) {
      this.setState({AdvcallHandlingEditVoiceMailName: selectedCallHandlingDropdownName[0].name, AdvcallHandlingEditVoiceMailId: selectedCallHandlingDropdownName[0].id});
    } else {
      this.setState({AdvcallHandlingEditVoiceMailName: '', AdvcallHandlingEditVoiceMailId: 0});
    }
  }

  AdvonChangeCallHandlingDropdown(id, name,isDefaultValues) {
    this.setState({AdvcallHandlingEditVoiceMailName: name, AdvcallHandlingEditVoiceMailId: id});
    if(isDefaultValues){
      return;
    }
    this.props.saveCallHandlingDropdownPreferance(id,"ADV_MISS_CALL");
  }

  AdvonChangeCallHandlingEditVoiceMailName(e) {
    this.setState({AdvcallHandlingEditVoiceMailName: e.target.value});
  }

  onDismissCallHandlingEditName() {
    this.setState({isCallHandlingEditNameDialogOpen: false});
  }

  onOpenCallHandlingEditName() {
    this.setState({isCallHandlingEditNameDialogOpen: true});
  }

  AdvonDismissCallHandlingEditName() {
    this.setState({AdvisCallHandlingEditNameDialogOpen: false});
  }

  AdvonOpenCallHandlingEditName() {
    this.setState({AdvisCallHandlingEditNameDialogOpen: true});
  }

  onSaveCallHandlingEditName(type) {
    this.onDismissCallHandlingEditName();
    this.AdvonDismissCallHandlingEditName();
    if(type === "callHandlingEditVoiceMail"){
      this.props.editCallHandlingVoiceMailName(this.state.callHandlingEditVoiceMailId, this.state.callHandlingEditVoiceMailName);
    }else{
      this.props.editCallHandlingVoiceMailName(this.state.AdvcallHandlingEditVoiceMailId, this.state.AdvcallHandlingEditVoiceMailName);
    }
  }

  onOldPasswordFocus() {
    this.setState({passwordError: ''});
  }

  onNewPasswordFocus() {
    this.setState({passwordError: ''});
  }

  onConfirmPasswordFocus() {
    this.setState({passwordError: ''});
  }

  onOldPasswordChange(e) {
    this.setState({oldPassword: e.target.value});
  }
  onNewPasswordChange(e) {
    this.setState({newPassword: e.target.value});
  }
  onConfirmPasswordChange(e) {
    this.setState({confirmPassword: e.target.value});
  }
  onChangePasswordOpen() {
    this.setState({isPasswordDialogOpen: true});
  }

  onChangePasswordDismiss() {
    this.setState({isPasswordDialogOpen: false});
  }

  onChangePasswordSave() {
    if (this.state.confirmPassword != this.state.newPassword) {
      this.setState({passwordError: "Password didnt not matched"});
    } else if (this.state.oldPassword != this.props.userPassword) {
      this.setState({passwordError: "Current password is incorrect"});
    } else {
      this.props.editPassword(this.state.newPassword);
      this.onChangePasswordDismiss();
    }
  }

  onVoicePinChange(voicePin) {
    this.props.editVoicePin(voicePin);
  }

  render() {

    const {
      userProfile,
      showSuccessToast,
      showSuccessToastFlag,
      fetching,
      onCallerIdMenuClick,
      callerIdMenu,
      onTimeZoneMenuClick,
      onLanguageMenuClick,
      languageMenu,
      timezoneMenu,
      handleClickOutside,
      editUserName,
      editing,
      editVoicePin,
      handleDropDownClick,
      editTimeZone,
      editCallerId,
      editRingDuration,
      uploadCallHandlingAudioFile,
      saveCallHandlingDropdownPreferance,
      editYourSafty
    } = this.props;

    return (<div>
      <Toast open={showSuccessToastFlag}/> {
        fetching || isEmpty(userProfile)
          ? <div className="dialog-loading-img"></div>
          : <DashboardApp userProfile={userProfile} showSuccessToast={showSuccessToast} onCallerIdMenuClick={onCallerIdMenuClick} callerIdMenu={callerIdMenu} onTimeZoneMenuClick={onTimeZoneMenuClick} onLanguageMenuClick={onLanguageMenuClick} languageMenu={languageMenu} timezoneMenu={timezoneMenu} editUserName={editUserName} fetching={fetching} editing={editing} editCallerId={editCallerId} editTimeZone={editTimeZone} onChangePasswordOpen={this.onChangePasswordOpen} editVoicePin={editVoicePin}
    uploadCallHandlingAudioFile={uploadCallHandlingAudioFile}

           onOpenCallHandlingEditName={this.onOpenCallHandlingEditName}
           onChangeCallHandlingDropdown={this.onChangeCallHandlingDropdown}
            callHandlingEditVoiceMailName={this.state.callHandlingEditVoiceMailName}
            callHandlingEditVoiceMailId={this.state.callHandlingEditVoiceMailId}
             deleteCallHandlingVoiceMail={this.deleteCallHandlingVoiceMail}

             AdvonOpenCallHandlingEditName={this.AdvonOpenCallHandlingEditName}
             AdvonChangeCallHandlingDropdown={this.AdvonChangeCallHandlingDropdown}
              AdvcallHandlingEditVoiceMailName={this.state.AdvcallHandlingEditVoiceMailName}
              AdvcallHandlingEditVoiceMailId={this.state.AdvcallHandlingEditVoiceMailId}
               AdvdeleteCallHandlingVoiceMail={this.AdvdeleteCallHandlingVoiceMail}


             handleDropDownClick={handleDropDownClick}
             editRingDuration={editRingDuration}
             editYourSafty={editYourSafty}  />
      }
      {
        this.state.isPasswordDialogOpen
          ? changePasswordDialog(this.onChangePasswordDismiss, this.onChangePasswordSave, this.state.oldPassword, this.state.newPassword, this.state.confirmPassword, this.onOldPasswordChange, this.onNewPasswordChange, this.onConfirmPasswordChange, this.state.passwordError, this.onOldPasswordFocus, this.onNewPasswordFocus, this.onConfirmPasswordFocus)
          : ""
      }

      {
        this.state.isCallHandlingEditNameDialogOpen
          ? editCallHandlingVoiceMailName(this.onDismissCallHandlingEditName, this.onSaveCallHandlingEditName, this.onChangeCallHandlingEditVoiceMailName, this.state.callHandlingEditVoiceMailName,"callHandlingEditVoiceMail")
          : ""
      }

      {
        this.state.AdvisCallHandlingEditNameDialogOpen
          ? editCallHandlingVoiceMailName(this.AdvonDismissCallHandlingEditName, this.onSaveCallHandlingEditName, this.AdvonChangeCallHandlingEditVoiceMailName, this.state.AdvcallHandlingEditVoiceMailName,"AdvcallHandlingEditVoiceMail")
          : ""
      }

    </div>);
  }

}
export default DashboardMarkup;
