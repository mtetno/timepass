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
import {editMainLinePhoneNumber} from '../components/AllDialogsHtml';
import BusinessHoursRightPopup from '../components/BusinessHoursRightPopup';

class MainlineContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      showSavingDataPopup: false,
      labelEditDialogOpen: false,
      labelEditDialogLabel: "",
      labelEditDialogPhno : "",
      labelEditDialogId: 0,
      yourDeviceAdvSettingsOpen : false
    };

    this.onMainLineEditName = this.onMainLineEditName.bind(this);
    this.onMainLineEditAbbr = this.onMainLineEditAbbr.bind(this);
    this.onMainLineOptionsEdit = this.onMainLineOptionsEdit.bind(this);
    this.onMainLineEditDialogOpen = this.onMainLineEditDialogOpen.bind(this);
    this.onMainLineEditDialogDismiss = this.onMainLineEditDialogDismiss.bind(this);
    this.onMainLineEditDialogSave = this.onMainLineEditDialogSave.bind(this);
    this.onMainLineLabelTextChange = this.onMainLineLabelTextChange.bind(this);
      this.onEditBusinessHours = this.onEditBusinessHours.bind(this);


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
  }

  onEditBusinessHours(){
    if(this.props.businessHoursTimezoneDDValues === undefined){
      this.props.actions.fetchBusinessHoursAndTimezoneEditDetails(this.props.accessToken);
    }
    this.setState({  yourDeviceAdvSettingsOpen: !this.state.yourDeviceAdvSettingsOpen });
  }

  componentDidMount() {
    this.props.actions.mainLineInfo(this.props.accessToken);
  }

  onMainLineLabelTextChange(e){
      this.setState({  labelEditDialogLabel: e.target.value });
  }

  onMainLineEditDialogOpen(id, label,phonenumber) {
    this.setState({labelEditDialogOpen: true, labelEditDialogLabel: label, labelEditDialogId: id , labelEditDialogPhno : phonenumber});
  }

  onMainLineEditDialogDismiss() {
    this.setState({labelEditDialogOpen: false, labelEditDialogLabel: "", labelEditDialogId: 0});
  }

  onMainLineEditDialogSave() {
    this.props.actions.mainLinePhoneLabelEdit(this.props.accessToken,this.state.labelEditDialogId,this.state.labelEditDialogLabel).then((response) => {
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

    return (<div id="app"  className={this.state.yourDeviceAdvSettingsOpen
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


        />} savingDialog={savingDialog} savingDialogComplete={savingDialogComplete} middleSideBar={<DashboardMiddleHeader/>}
        rightSideBar = {
        <BusinessHoursRightPopup   onEditBusinessHours = {
            this.onEditBusinessHours
          } businessHoursTimezoneDDValues={this.props.businessHoursTimezoneDDValues} />
        }
        /> {this.state.labelEditDialogOpen ? editMainLinePhoneNumber(this.state.labelEditDialogPhno , this.state.labelEditDialogLabel , this.onMainLineLabelTextChange , this.onMainLineEditDialogSave , this.onMainLineEditDialogDismiss) : undefined}
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
    businessHoursTimezoneDDValues : state.mainline.businessHoursAndTimezoneEditDetails ?
    state.mainline.businessHoursAndTimezoneEditDetails.data.business_hours_edit : undefined
  }),
  mapDispatchToProps = (dispatch) => {
    const {mainLineInfo, mainLineEditName, mainLineAbbrEdit, mainLineOptionsEdit, mainLinePhoneLabelEdit,fetchBusinessHoursAndTimezoneEditDetails} = actions;

    return {
      actions: bindActionCreators({
        mainLineInfo,
        mainLineEditName,
        mainLineAbbrEdit,
        mainLineOptionsEdit,
        mainLinePhoneLabelEdit,
        fetchBusinessHoursAndTimezoneEditDetails
      }, dispatch)
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(MainlineContainer);
