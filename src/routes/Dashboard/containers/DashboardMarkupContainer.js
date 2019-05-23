import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import autobind from 'autobind-decorator';
import {browserHistory} from 'react-router';
import actions from '../modules/actions';
import DashboardMarkup from '../components/DashboardMarkup';
import {isEmpty} from 'lodash';

class DashboardMarkupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSuccessToast: false,
      callerIdMenu: false,
      languageMenu: false,
      timezoneMenu: false
    };
    this._fetchDashboardData = this._fetchDashboardData.bind(this);
    this._showSuccessToast = this._showSuccessToast.bind(this);
    this.onCallerIdMenuClick = this.onCallerIdMenuClick.bind(this);
    this.onLanguageMenuClick = this.onLanguageMenuClick.bind(this);
    this.onTimeZoneMenuClick = this.onTimeZoneMenuClick.bind(this);
    this.handleDropDownClick = this.handleDropDownClick.bind(this);
    this.editUserName = this.editUserName.bind(this);
    this.editPassword = this.editPassword.bind(this);
    this.editVoicePin = this.editVoicePin.bind(this);
    this.editTimeZone = this.editTimeZone.bind(this);
    this.editCallerId = this.editCallerId.bind(this);
    this.editRingDuration = this.editRingDuration.bind(this);
    this.editCallHandlingVoiceMailName = this.editCallHandlingVoiceMailName.bind(this);
    this.deleteCallHandlingVoiceMail = this.deleteCallHandlingVoiceMail.bind(this);
    this.uploadCallHandlingAudioFile = this.uploadCallHandlingAudioFile.bind(this);
    this.saveCallHandlingDropdownPreferance = this.saveCallHandlingDropdownPreferance.bind(this);



  }

  componentWillMount() {
    //document.addEventListener('mousedown', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    //window.removeEventListener('mousedown', this.handleClickOutside, false);
  }

  handleDropDownClick(event) {
    this.setState({timezoneMenu: false, languageMenu: false, callerIdMenu: false});
  }

  componentDidMount() {
    this._fetchDashboardData();
  }




  saveCallHandlingDropdownPreferance = (id,type) => {
    this.props.actions.saveCallHandlingDropdownPreferance(this.props.accessToken,id,type);
  }

  uploadCallHandlingAudioFile = (path) => {

  }

  deleteCallHandlingVoiceMail = (id) => {
    this.props.actions.deleteCallHandlingVoiceMail(this.props.accessToken, id).then((response)=>{
       this.props.actions.fetchCallHandling(this.props.accessToken);
    });
  }

  editCallHandlingVoiceMailName = (id, name) => {
    this.props.actions.editCallHandlingVoiceMailName(this.props.accessToken, id, name);
  }

  editRingDuration = (duration) => {
    this.props.actions.editRingDuration(this.props.accessToken, duration);
  }

  editUserName = (firstName, lastName) => {
    this.props.actions.editUserName(this.props.accessToken, firstName, lastName);
  }

  editPassword = (newPassword) => {
    this.props.actions.editPassword(this.props.accessToken, this.props.login.password, newPassword);
  }

  editVoicePin = (voicePin) => {
    this.props.actions.editVoicePin(this.props.accessToken, voicePin);
  }

  editTimeZone = (timezone) => {
    this.props.actions.editTimeZone(this.props.accessToken, timezone);
  }

  editCallerId = (id) => {
    this.props.actions.editCallerId(this.props.accessToken, id);
  }

  _fetchDashboardData = () => {
    this.props.actions.fetchUserProfile(this.props.accessToken);
  }

  _showSuccessToast = () => {

    this.setState({showSuccessToast: true});

    setTimeout(function() { //Start the timer
      this.setState({showSuccessToast: false});
    }.bind(this), 1000)

  };

  onCallerIdMenuClick() {
    this.setState({
      callerIdMenu: !this.state.callerIdMenu
    });
  }

  onLanguageMenuClick() {
    this.setState({
      languageMenu: !this.state.languageMenu
    });
  }

  onTimeZoneMenuClick() {
    this.setState({
      timezoneMenu: !this.state.timezoneMenu
    });
  }

  _buildFetchStatus() {
    return (this.props.dashboard && isEmpty(this.props.dashboard.fetch) === false)
      ? this.props.dashboard.fetch
      : false;
  }

  render() {

    return (<div >
      {
        this.props.dashboard && this.props.dashboard.userProfile
          ? <DashboardMarkup userProfile={this.props.dashboard.userProfile.data} userPassword={this.props.login.password} showSuccessToast={this._showSuccessToast} showSuccessToastFlag={this.state.showSuccessToast} fetching={this.props.dashboard.fetch} onCallerIdMenuClick={this.onCallerIdMenuClick} callerIdMenu={this.state.callerIdMenu} onTimeZoneMenuClick={this.onTimeZoneMenuClick} onLanguageMenuClick={this.onLanguageMenuClick} languageMenu={this.state.languageMenu} timezoneMenu={this.state.timezoneMenu} editing={this.props.dashboard.editing} handleDropDownClick={this.handleDropDownClick} editCallerId={this.editCallerId} editTimeZone={this.editTimeZone} editRingDuration={this.editRingDuration} deleteCallHandlingVoiceMail={this.deleteCallHandlingVoiceMail} editUserName={this.editUserName} editPassword={this.editPassword} editVoicePin={this.editVoicePin} editCallHandlingVoiceMailName={this.editCallHandlingVoiceMailName}
           saveCallHandlingDropdownPreferance={this.saveCallHandlingDropdownPreferance}

            uploadCallHandlingAudioFile={this.uploadCallHandlingAudioFile}  />
          : <article/>
      }

    </div>);
  }

  _apiCalls(inputData) {}

}

DashboardMarkupContainer.propTypes = {
  actions: PropTypes.shape({}),
  dashboard: PropTypes.object
};

const mapStateToProps = (state) => ({login: state.login, dashboard: state.dashboard, accessToken: state.login.data.access_token}),
  mapDispatchToProps = (dispatch) => {
    const {
      fetchUserProfile,
      fetchCallHandling,
      editUserName,
      editPassword,
      editVoicePin,
      editCallerId,
      editTimeZone,
      editRingDuration,
      editCallHandlingVoiceMailName,
      deleteCallHandlingVoiceMail,
      uploadCallHandlingAudioFile,
      saveCallHandlingDropdownPreferance
    } = actions;

    return {
      actions: bindActionCreators({
        fetchUserProfile,
        fetchCallHandling,
        editUserName,
        editPassword,
        editVoicePin,
        editCallerId,
        editTimeZone,
        editRingDuration,
        editCallHandlingVoiceMailName,
        deleteCallHandlingVoiceMail,
        uploadCallHandlingAudioFile,
        saveCallHandlingDropdownPreferance
      }, dispatch)
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(DashboardMarkupContainer);
