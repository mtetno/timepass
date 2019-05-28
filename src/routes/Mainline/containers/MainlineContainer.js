import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import autobind from 'autobind-decorator';
import {browserHistory} from 'react-router';
import actions from '../modules/actions';
import MainlineMarkup from '../components/MainlineMarkup';
import BaseContainer from '../../BaseContainer/BaseContainer';
import DashboardMiddleHeader from '../../../components/shared/DashboardMiddleHeader';
const checkLogo = require("../../../styles/img/ic-checked.png");
import {editMainLinePhoneNumber,viewPopupDataForFixedAndRoundRobin} from '../components/AllDialogsHtml';
import BusinessHoursRightPopup from '../components/BusinessHoursRightPopup';

class MainlineContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      showSavingDataPopup: false,
      labelEditDialogOpen: false,
      labelEditDialogLabel: "",
      labelEditDialogPhno: "",
      labelEditDialogId: 0,
      yourDeviceAdvSettingsOpen: false,
      isTimezoneMenuOpen: false,
      defaultTimeZoneValue: "",
      fetchBusinessHoursPopup: {
        businessHourSliderValue: 0,
        defaultHoldIntro: "",
        isHoldIntroOpen: false,
        defaultHoldMusic: "",
        isHoldMusicOpen: false,
        hold_queue_status: "1",
        isSpecificHours: "1",
        hold_queue_sounds: [],
        hold_music_sounds: [],
        queue_wait_time_mins: "",
        queue_wait_time_seconds: ""
      },
      specificHoursSameForAllWeekdaysFlag: false,
      specificHoursSameForAllWeeksFlag: false,
      currentClickedOpenClosePopupIndex: -1,
      defaultHours: [
        "Closed",
        "12:00 am",
        "12:15 am",
        "12:30 am",
        "12:45 am",
        "1:00 am",
        "1:15 am",
        "1:30 am",
        "1:45 am",
        "2:00 am",
        "2:15 am",
        "2:30 am",
        "2:45 am",
        "3:00 am",
        "3:15 am",
        "3:30 am",
        "3:45 am",
        "4:00 am",
        "4:15 am",
        "4:30 am",
        "4:45 am",
        "5:00 am",
        "5:15 am",
        "5:30 am",
        "5:45 am",
        "6:00 am",
        "6:15 am",
        "6:30 am",
        "6:45 am",
        "7:00 am",
        "7:15 am",
        "7:30 am",
        "7:45 am",
        "8:00 am",
        "8:15 am",
        "8:30 am",
        "8:45 am",
        "9:00 am",
        "9:15 am",
        "9:30 am",
        "9:45 am",
        "10:00 am",
        "10:15 am",
        "10:30 am",
        "10:45 am",
        "11:00 am",
        "11:15 am",
        "11:30 am",
        "11:45 am",
        "12:00 pm",
        "12:15 pm",
        "12:30 pm",
        "12:45 pm",
        "1:00 pm",
        "1:15 pm",
        "1:30 pm",
        "1:45 pm",
        "2:00 pm",
        "2:15 pm",
        "2:30 pm",
        "2:45 pm",
        "3:00 pm",
        "3:15 pm",
        "3:30 pm",
        "3:45 pm",
        "4:00 pm",
        "4:15 pm",
        "4:30 pm",
        "4:45 pm",
        "5:00 pm",
        "5:15 pm",
        "5:30 pm",
        "5:45 pm",
        "6:00 pm",
        "6:15 pm",
        "6:30 pm",
        "6:45 pm",
        "7:00 pm",
        "7:15 pm",
        "7:30 pm",
        "7:45 pm",
        "8:00 pm",
        "8:15 pm",
        "8:30 pm",
        "8:45 pm",
        "9:00 pm",
        "9:15 pm",
        "9:30 pm",
        "9:45 pm",
        "10:00 pm",
        "10:15 pm",
        "10:30 pm",
        "10:45 pm"
      ],
      defaultSelectedHours: [
        "10:00 am",
        "8:00 pm",
        "10:00 am",
        "8:00 pm",
        "10:00 am",
        "8:00 pm",
        "10:00 am",
        "8:00 pm",
        "10:00 am",
        "8:00 pm",
        "10:00 am",
        "8:00 pm",
        "10:00 am",
        "8:00 pm"
      ],
      rule_hour_type: "OPEN_HOURS",
      send_call_type_open: 1,
      send_call_type_close: 1,
      operatorOptionSelected : 1,
      otherOptionSelected : 1,
      isOpenViewPopupDataForFixedAndRoundRobin : false
    };

    this.onMainLineEditName = this.onMainLineEditName.bind(this);
    this.onMainLineEditAbbr = this.onMainLineEditAbbr.bind(this);
    this.onMainLineOptionsEdit = this.onMainLineOptionsEdit.bind(this);
    this.onMainLineEditDialogOpen = this.onMainLineEditDialogOpen.bind(this);
    this.onMainLineEditDialogDismiss = this.onMainLineEditDialogDismiss.bind(this);
    this.onMainLineEditDialogSave = this.onMainLineEditDialogSave.bind(this);
    this.onMainLineLabelTextChange = this.onMainLineLabelTextChange.bind(this);
    this.onEditBusinessHours = this.onEditBusinessHours.bind(this);
    this.onTimezoneSelction = this.onTimezoneSelction.bind(this);
    this.onTimezoneDDClik = this.onTimezoneDDClik.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.onClickHoldIntro = this.onClickHoldIntro.bind(this);
    this.onClickHoldMusic = this.onClickHoldMusic.bind(this);
    this.onBusinessHourTimeChange = this.onBusinessHourTimeChange.bind(this);
    this.onTimeClick = this.onTimeClick.bind(this);
    this.onTimeSelectionClick = this.onTimeSelectionClick.bind(this);
    this.onSpecificHoursSameForAllWeekdaysFlag = this.onSpecificHoursSameForAllWeekdaysFlag.bind(this);
    this.onSpecificHoursSameForAllWeeksFlag = this.onSpecificHoursSameForAllWeeksFlag.bind(this);
    this.onRuleHourTypeChange = this.onRuleHourTypeChange.bind(this);
    this.onSendCallTypeChange = this.onSendCallTypeChange.bind(this);
        this.onOperatorOptionChange = this.onOperatorOptionChange.bind(this);
        this.onOtherOptionSelected = this.onOtherOptionSelected.bind(this);
        this.onShowViewPopupForFixedAndRorundRobin = this.onShowViewPopupForFixedAndRorundRobin.bind(this);
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

  onShowViewPopupForFixedAndRorundRobin(){
    this.setState({isOpenViewPopupDataForFixedAndRoundRobin: !this.state.isOpenViewPopupDataForFixedAndRoundRobin});
    this.props.actions.viewPopupDataForFixedAndRoundRobin(this.props.accessToken,this.state.rule_hour_type,this.state.operatorOptionSelected === 2 ? "FIXED_ORDER" : "ROUND_ROBIN");
  }

  onOperatorOptionChange(option){
this.setState({operatorOptionSelected: option},()=>{
  this.props.actions.businessHoursOperationOptions(
    this.props.accessToken, this.state.rule_hour_type, this.state.operatorOptionSelected).then((response) => {
      this.props.actions.fetchBusinessHoursPopup(this.props.accessToken);
    });
})
  }

  onOtherOptionSelected(option){
    this.setState({otherOptionSelected: option},()=>{
      this.props.actions.editBusinessHoursOtherRoutingOption(
        this.props.accessToken, this.state.rule_hour_type, this.state.otherOptionSelected);
    }).then((response) => {
      this.props.actions.fetchBusinessHoursPopup(this.props.accessToken);
    });;
  }

  setDefaultValue(props) {
    if (this.state.defaultTimeZoneValue === "" && props.businessHoursTimezoneDDValues != undefined) {
      this.setState({defaultTimeZoneValue: props.businessHoursTimezoneDDValues.selected_time_zone});
    }

    if (props.fetchBusinessHoursPopup != undefined) {
      const businessHourSliderValue = parseInt(props.fetchBusinessHoursPopup.ring_duration);
      const defaultHoldIntro = "";
      const defaultHoldMusic = "";
      const hold_queue_status = props.fetchBusinessHoursPopup.hold_queue.hold_queue_status;
      const isSpecificHours = props.fetchBusinessHoursPopup.open_hours_flag;
      const hold_queue_sounds = props.fetchBusinessHoursPopup.hold_queue.hold_queue_sounds;
      const hold_music_sounds = props.fetchBusinessHoursPopup.hold_queue.hold_music_sounds;
      const queue_wait_time_mins = props.fetchBusinessHoursPopup.hold_queue.queue_wait_time_mins;
      const queue_wait_time_seconds = props.fetchBusinessHoursPopup.hold_queue.queue_wait_time_seconds;

      const fetchBusinessHoursPopup = this.state.fetchBusinessHoursPopup;
      fetchBusinessHoursPopup["businessHourSliderValue"] = businessHourSliderValue;
      fetchBusinessHoursPopup["defaultHoldIntro"] = defaultHoldIntro;
      fetchBusinessHoursPopup["defaultHoldMusic"] = defaultHoldMusic;
      fetchBusinessHoursPopup["hold_queue_status"] = hold_queue_status;
      fetchBusinessHoursPopup["isSpecificHours"] = isSpecificHours;
      fetchBusinessHoursPopup["hold_queue_sounds"] = hold_queue_sounds;
      fetchBusinessHoursPopup["hold_music_sounds"] = hold_music_sounds;
      fetchBusinessHoursPopup["queue_wait_time_mins"] = queue_wait_time_mins;
      fetchBusinessHoursPopup["queue_wait_time_seconds"] = queue_wait_time_seconds;
      this.setState({fetchBusinessHoursPopup: fetchBusinessHoursPopup});

    }

  }

  onRuleHourTypeChange(type) {
    this.setState({rule_hour_type: type},()=>{
    this.saveRoutingTypeChange();
    });

  }

  saveRoutingTypeChange(){
    this.props.actions.setRulesForOpenAndCloseHours(
      this.props.accessToken, this.state.rule_hour_type, this.state.rule_hour_type === "OPEN_HOURS"
      ? this.state.send_call_type_open
      : this.state.send_call_type_close).then((response) => {
      this.props.actions.fetchBusinessHoursPopup(this.props.accessToken);
    });
  }

  onSendCallTypeChange(routing, type) {
    if (routing === "OPEN_HOURS") {
      this.setState({send_call_type_open: type},()=>{
      this.saveRoutingTypeChange();
      });
    } else {
      this.setState({send_call_type_close: type},()=>{
      this.saveRoutingTypeChange();
      });
    }

  }

  saveBusinessHoursChanges() {
    this.props.actions.updateBusinessHours(this.props.accessToken, this.props.fetchBusinessHoursPopup.bus_id, this.state.specificHoursSameForAllWeekdaysFlag, this.state.specificHoursSameForAllWeeksFlag, this.state.defaultSelectedHours).then((response) => {
      this.props.actions.fetchBusinessHoursPopup(this.props.accessToken);
    });
  }

  onSpecificHoursSameForAllWeekdaysFlag() {
    if (this.state.specificHoursSameForAllWeekdaysFlag === false) {
      const defaultSelectedHoursOpenSelection = this.state.defaultSelectedHours[0];
      const defaultSelectedHoursCloseSelection = this.state.defaultSelectedHours[1];
      const newDefaultVal = [];
      this.state.defaultSelectedHours.map((item, index) => {
        switch (index) {
          case 0:
            newDefaultVal[index] = defaultSelectedHoursOpenSelection
            break;
          case 1:
            newDefaultVal[index] = defaultSelectedHoursCloseSelection
            break;
          case 2:
            newDefaultVal[index] = defaultSelectedHoursOpenSelection
            break;
          case 3:
            newDefaultVal[index] = defaultSelectedHoursCloseSelection
            break;
          case 4:
            newDefaultVal[index] = defaultSelectedHoursOpenSelection
            break;
          case 5:
            newDefaultVal[index] = defaultSelectedHoursCloseSelection
            break;
          case 6:
            newDefaultVal[index] = defaultSelectedHoursOpenSelection
            break;
          case 7:
            newDefaultVal[index] = defaultSelectedHoursCloseSelection
            break;
          case 8:
            newDefaultVal[index] = defaultSelectedHoursOpenSelection
            break;
          case 9:
            newDefaultVal[index] = defaultSelectedHoursCloseSelection
            break;
          case 10:
            newDefaultVal[index] = this.state.defaultSelectedHours[10]
            break;
          case 11:
            newDefaultVal[index] = this.state.defaultSelectedHours[11]
            break;
          case 12:
            newDefaultVal[index] = this.state.defaultSelectedHours[12]
            break;
          case 13:
            newDefaultVal[index] = this.state.defaultSelectedHours[13]
            break;
          default:
        }
      });
      this.setState({
        specificHoursSameForAllWeekdaysFlag: !this.state.specificHoursSameForAllWeekdaysFlag,
        defaultSelectedHours: newDefaultVal
      });
    } else {
      this.setState({
        specificHoursSameForAllWeekdaysFlag: !this.state.specificHoursSameForAllWeekdaysFlag
      });
    }
    this.saveBusinessHoursChanges();
  }

  onSpecificHoursSameForAllWeeksFlag() {
    if (this.state.specificHoursSameForAllWeeksFlag === false) {
      const defaultSelectedHoursOpenSelection = this.state.defaultSelectedHours[0];
      const defaultSelectedHoursCloseSelection = this.state.defaultSelectedHours[1];
      const newDefaultVal = [];
      this.state.defaultSelectedHours.map((item, index) => {
        switch (index) {
          case 0:
            newDefaultVal[index] = defaultSelectedHoursOpenSelection
            break;
          case 1:
            newDefaultVal[index] = defaultSelectedHoursCloseSelection
            break;
          case 2:
            newDefaultVal[index] = defaultSelectedHoursOpenSelection
            break;
          case 3:
            newDefaultVal[index] = defaultSelectedHoursCloseSelection
            break;
          case 4:
            newDefaultVal[index] = defaultSelectedHoursOpenSelection
            break;
          case 5:
            newDefaultVal[index] = defaultSelectedHoursCloseSelection
            break;
          case 6:
            newDefaultVal[index] = defaultSelectedHoursOpenSelection
            break;
          case 7:
            newDefaultVal[index] = defaultSelectedHoursCloseSelection
            break;
          case 8:
            newDefaultVal[index] = defaultSelectedHoursOpenSelection
            break;
          case 9:
            newDefaultVal[index] = defaultSelectedHoursCloseSelection
            break;
          case 10:
            newDefaultVal[index] = defaultSelectedHoursOpenSelection
            break;
          case 11:
            newDefaultVal[index] = defaultSelectedHoursCloseSelection
            break;
          case 12:
            newDefaultVal[index] = defaultSelectedHoursOpenSelection
            break;
          case 13:
            newDefaultVal[index] = defaultSelectedHoursCloseSelection
            break;
          default:
        }
      });
      this.setState({
        specificHoursSameForAllWeeksFlag: !this.state.specificHoursSameForAllWeeksFlag,
        defaultSelectedHours: newDefaultVal
      });
    } else {
      this.setState({
        specificHoursSameForAllWeeksFlag: !this.state.specificHoursSameForAllWeeksFlag
      });
    }
    this.saveBusinessHoursChanges();
  }

  onTimeClick(index) {
    this.setState({currentClickedOpenClosePopupIndex: index});
  }

  onTimeSelectionClick(index, value) {
    const defaultSelectedHours = this.state.defaultSelectedHours;
    defaultSelectedHours[index] = value;
    this.setState({currentClickedOpenClosePopupIndex: -1, defaultSelectedHours: defaultSelectedHours});
    this.saveBusinessHoursChanges();
  }

  onClickHoldIntro() {
    const isHoldIntroOpen = !this.state.fetchBusinessHoursPopup.isHoldIntroOpen;
    const fetchBusinessHoursPopup = this.state.fetchBusinessHoursPopup;
    fetchBusinessHoursPopup["isHoldIntroOpen"] = isHoldIntroOpen;
    this.setState({fetchBusinessHoursPopup: fetchBusinessHoursPopup});
  }

  onClickHoldMusic() {
    const isHoldMusicOpen = !this.state.fetchBusinessHoursPopup.isHoldMusicOpen;
    const fetchBusinessHoursPopup = this.state.fetchBusinessHoursPopup;
    fetchBusinessHoursPopup["isHoldMusicOpen"] = isHoldMusicOpen;
    this.setState({fetchBusinessHoursPopup: fetchBusinessHoursPopup});
  }

  onBusinessHourTimeChange(value) {
    const isSpecificHours = value;
    const fetchBusinessHoursPopup = this.state.fetchBusinessHoursPopup;
    fetchBusinessHoursPopup["isSpecificHours"] = isSpecificHours;
    this.setState({fetchBusinessHoursPopup: fetchBusinessHoursPopup});
    this.props.actions.editBusinessHoursOpenFlag(this.props.accessToken, value).then((response) => {
      this.props.actions.fetchBusinessHoursAndTimezoneEditDetails(this.props.accessToken);
      this.props.actions.fetchBusinessHoursPopup(this.props.accessToken);
    });
  }

  handleSliderChange(event, value) {
    const businessHourSliderValue = value;
    this.setState({
      fetchBusinessHoursPopup: {
        ...businessHourSliderValue
      }
    });
  }

  onTimezoneSelction(item) {
    this.setState({
      isTimezoneMenuOpen: !this.state.isTimezoneMenuOpen,
      defaultTimeZoneValue: item
    });
    this.props.actions.editTimezoneForBusinessHrAndCallRouting(this.props.accessToken, item).then((response) => {
      this.props.actions.fetchBusinessHoursAndTimezoneEditDetails(this.props.accessToken);
    });
  }

  onTimezoneDDClik() {
    this.setState({
      isTimezoneMenuOpen: !this.state.isTimezoneMenuOpen
    });
  }

  onEditBusinessHours() {
    //  if (this.props.businessHoursTimezoneDDValues === undefined) {
    this.props.actions.fetchBusinessHoursAndTimezoneEditDetails(this.props.accessToken);
    this.props.actions.fetchBusinessHoursPopup(this.props.accessToken);
    //  }
    this.setState({
      yourDeviceAdvSettingsOpen: !this.state.yourDeviceAdvSettingsOpen
    });
  }

  componentDidMount() {
    this.props.actions.mainLineInfo(this.props.accessToken);
  }

  onMainLineLabelTextChange(e) {
    this.setState({labelEditDialogLabel: e.target.value});
  }

  onMainLineEditDialogOpen(id, label, phonenumber) {
    this.setState({labelEditDialogOpen: true, labelEditDialogLabel: label, labelEditDialogId: id, labelEditDialogPhno: phonenumber});
  }

  onMainLineEditDialogDismiss() {
    this.setState({labelEditDialogOpen: false, labelEditDialogLabel: "", labelEditDialogId: 0});
  }

  onMainLineEditDialogSave() {
    this.props.actions.mainLinePhoneLabelEdit(this.props.accessToken, this.state.labelEditDialogId, this.state.labelEditDialogLabel).then((response) => {
      this.props.actions.mainLineInfo(this.props.accessToken);
    });
    this.setState({labelEditDialogOpen: false, labelEditDialogLabel: "", labelEditDialogId: 0});
  }

  onMainLineEditName(name) {
    this.props.actions.mainLineEditName(this.props.accessToken, name);
  }

  onMainLineEditAbbr(abbr) {
    this.props.actions.mainLineAbbrEdit(this.props.accessToken, abbr);
  }

  onMainLineOptionsEdit(callStatus, voiceMailNotification, faxNotification) {
    this.props.actions.mainLineOptionsEdit(this.props.accessToken, callStatus, voiceMailNotification, faxNotification);
  }

  render() {

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

    return (<div id="app" className={this.state.yourDeviceAdvSettingsOpen
        ? "rightbar-open content-overlay"
        : undefined}>
      <BaseContainer contentTd={<MainlineMarkup mainlineInfo = {
          this.props.mainlineInfo
        }
        mainLineEditName = {
          this.onMainLineEditName
        }
        mainLineEditAbbr = {
          this.onMainLineEditAbbr
        }
        mainLineOptionsEdit = {
          this.onMainLineOptionsEdit
        }
        onMainLineEditDialogOpen = {
          this.onMainLineEditDialogOpen
        }
        onEditBusinessHours = {
          this.onEditBusinessHours
        }

        />} savingDialog={savingDialog} savingDialogComplete={savingDialogComplete} middleSideBar={<DashboardMiddleHeader/>} rightSideBar={<BusinessHoursRightPopup onEditBusinessHours = {
          this.onEditBusinessHours
        }
        businessHoursTimezoneDDValues = {
          this.props.businessHoursTimezoneDDValues
        }
        onTimezoneSelction = {
          this.onTimezoneSelction
        }
        onTimezoneDDClik = {
          this.onTimezoneDDClik
        }
        defaultTimeZoneValue = {
          this.state.defaultTimeZoneValue
        }
        isTimezoneMenuOpen = {
          this.state.isTimezoneMenuOpen
        }
        businessHoursAndTimezoneEditDetails = {
          this.props.businessHoursAndTimezoneEditDetails
        }
        handleSliderChange = {
          this.handleSliderChange
        }
        fetchBusinessHoursPopup = {
          this.state.fetchBusinessHoursPopup
        }
        onBusinessHourTimeChange = {
          this.onBusinessHourTimeChange
        }
        defaultHours = {
          this.state.defaultHours
        }
        defaultSelectedHours = {
          this.state.defaultSelectedHours
        }
        onTimeClick = {
          this.onTimeClick
        }

        onTimeSelectionClick = {
          this.onTimeSelectionClick
        }
        specificHoursSameForAllWeekdaysFlag = {
          this.state.specificHoursSameForAllWeekdaysFlag
        }
        specificHoursSameForAllWeeksFlag = {
          this.state.specificHoursSameForAllWeeksFlag
        }
        currentClickedOpenClosePopupIndex = {
          this.state.currentClickedOpenClosePopupIndex
        }
        onSpecificHoursSameForAllWeekdaysFlag = {
          this.onSpecificHoursSameForAllWeekdaysFlag
        }
        onSpecificHoursSameForAllWeeksFlag = {
          this.onSpecificHoursSameForAllWeeksFlag
        }
        onRuleHourTypeChange = {
          this.onRuleHourTypeChange
        }
        onSendCallTypeChange = {
          this.onSendCallTypeChange
        }

        ruleHrType = {
          this.state.rule_hour_type
        }
        sendCallTypeForOpenRouting = {
          this.state.send_call_type_open
        }
        sendCallTypeForCloseRouting = {
          this.state.send_call_type_close
        }
        operatorOptionSelected={this.state.operatorOptionSelected}
        onOperatorOptionChange={this.onOperatorOptionChange}

        otherOptionSelected={this.state.otherOptionSelected}
        onOtherOptionSelected={this.onOtherOptionSelected}
onShowViewPopupForFixedAndRorundRobin={this.onShowViewPopupForFixedAndRorundRobin}

        />}/> {
        this.state.labelEditDialogOpen
          ? editMainLinePhoneNumber(this.state.labelEditDialogPhno, this.state.labelEditDialogLabel, this.onMainLineLabelTextChange, this.onMainLineEditDialogSave, this.onMainLineEditDialogDismiss)
          : undefined
      }


      {
        this.state.isOpenViewPopupDataForFixedAndRoundRobin ?
        viewPopupDataForFixedAndRoundRobin(this.props.viewPopupDataForFixedAndRoundRobin,this.onShowViewPopupForFixedAndRorundRobin) : undefined
      }
    </div>);
  }

  _apiCalls(inputData) {}

}

MainlineContainer.propTypes = {
  actions: PropTypes.shape({}),
  appState: PropTypes.object
};

const mapStateToProps = (state) => ({
    accessToken: state.login.data.access_token,
    editing: state.mainline.editing,
    mainlineInfo: state.mainline.mainLineInfo
      ? state.mainline.mainLineInfo.data
      : undefined,
    businessHoursTimezoneDDValues: state.mainline.businessHoursAndTimezoneEditDetails
      ? state.mainline.businessHoursAndTimezoneEditDetails.data.business_hours_edit
      : undefined,
    fetchBusinessHoursPopup: state.mainline.fetchBusinessHoursPopup
      ? state.mainline.fetchBusinessHoursPopup.data.business_hours_edit_data
      : undefined,
      viewPopupDataForFixedAndRoundRobin : state.mainline.popupMembersListFixedAndRoundRobin ?
      state.mainline.popupMembersListFixedAndRoundRobin.data.open_hours_operators : undefined
  }),
  mapDispatchToProps = (dispatch) => {
    const {
      mainLineInfo,
      mainLineEditName,
      mainLineAbbrEdit,
      mainLineOptionsEdit,
      mainLinePhoneLabelEdit,
      fetchBusinessHoursAndTimezoneEditDetails,
      fetchBusinessHoursPopup,
      editBusinessHoursOpenFlag,
      editTimezoneForBusinessHrAndCallRouting,
      updateBusinessHours,
      setRulesForOpenAndCloseHours,
      businessHoursOperationOptions,
      editBusinessHoursOtherRoutingOption,
      viewPopupDataForFixedAndRoundRobin
    } = actions;

    return {
      actions: bindActionCreators({
        mainLineInfo,
        mainLineEditName,
        mainLineAbbrEdit,
        mainLineOptionsEdit,
        mainLinePhoneLabelEdit,
        fetchBusinessHoursAndTimezoneEditDetails,
        fetchBusinessHoursPopup,
        editBusinessHoursOpenFlag,
        editTimezoneForBusinessHrAndCallRouting,
        updateBusinessHours,
        setRulesForOpenAndCloseHours,
        businessHoursOperationOptions,
        editBusinessHoursOtherRoutingOption,
        viewPopupDataForFixedAndRoundRobin
      }, dispatch)
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(MainlineContainer);
