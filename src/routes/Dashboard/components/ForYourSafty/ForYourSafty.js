import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import actions from '../../modules/actions';
import './ForYourSafty.scss';
const logo = require("../../../../styles/img/for_your_safty.png");
import {editDialog} from '../AllDialogsHtml';
import {isEmpty} from 'lodash';
import autobind from 'autobind-decorator';

class ForYourSafty extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      forYourSafty: false,
      displayEditDialog: false,
      streetText: '',
      buildingText: '',
      stateText: '',
      cityText: '',
      zipText: '',
      isVerifying : false,
      isConfirmed : false,

    };
  }

  componentWillReceiveProps(nextProps) {
    // Calculate default voicemail dropdown
    if (isEmpty(nextProps.yourSaftyFields) == false) {
      this.setState({streetText: nextProps.yourSaftyFields.address, buildingText: nextProps.yourSaftyFields.apt_building_text, cityText: nextProps.yourSaftyFields.city, stateText: nextProps.yourSaftyFields.province, zipText: nextProps.yourSaftyFields.zip_code});
    }
  }

  componentDidMount() {

    this._showEditDialog = this._showEditDialog.bind(this);
    this._hideEditDialog = this._hideEditDialog.bind(this);
    this.saveEditInfo = this.saveEditInfo.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onVerifyInfo = this.onVerifyInfo.bind(this);

  }

  onVerifyInfo(e){
    this.setState({isVerifying : true});
    setTimeout(function() {
      this.setState({isVerifying: false , isConfirmed : true});
    }.bind(this), 600);
  }

  _toggleDiv() {
    if (this.props.yourSafty === undefined) {
      this.props.actions.fetchSaftyData(this.props.accessToken);
      this.props.actions.fetchSaftyFieldsData(this.props.accessToken);
    }

    this.setState({
      forYourSafty: !this.state.forYourSafty
    });
  }

  _showEditDialog() {
    this.setState({displayEditDialog: true});
  }

  saveEditInfo() {
    this.setState({displayEditDialog: false , isConfirmed : false });
    this.props.actions.editYourSafty(this.props.accessToken, this.state.streetText, this.state.buildingText, this.state.cityText, this.state.stateText, this.state.zipText).then((response) => {
             this.props.actions.fetchSaftyData(this.props.accessToken);
             this.props.actions.fetchSaftyFieldsData(this.props.accessToken);
      });

  }

  _hideEditDialog() {
    this.setState({displayEditDialog: false});
  }

  onInputChange(e, type) {
    switch (type) {
      case "street":
        this.setState({streetText: e.target.value});
        break;
      case "building":
        this.setState({buildingText: e.target.value});
        break;
      case "state":
        this.setState({stateText: e.target.value});
        break;
      case "city":
        this.setState({cityText: e.target.value});
        break;
      case "zip":
        this.setState({zipText: e.target.value});
        break;
      default:

    }
  }

  render() {
    return (<div className="user-e911-address-view-holder">

       <div>
              <div className="web-admin-section closed">
                <div className="web-admin-section-header" onClick={(e) => this._toggleDiv()}>
                  <div className="web-admin-section-icon icon-holder mblock">
                    <img src={logo} className="logo-size"/>
                  </div>
                  <div className="header-2 web-admin-section-title mblock">

                    For Your Safety

                  </div>
                  <div className="web-admin-section-expander snappy icon-holder mblock"></div>
                </div>

                {this.state.forYourSafty &&
                  this.props.yourSafty && isEmpty(this.props.yourSafty) === false && this.props.yourSaftyFields && isEmpty(this.props.yourSaftyFields) === false
                    ?

                  <div>
                        <div className="web-admin-section-child-view-holder">
                          <div className="web-admin-section-child-view " id="forSafety">
                            <div>
                              <div>
                                <div className="form form-block">
                                  <div className="body-copy-2 form-block-desc">
                                    Please keep your physical address up to date. This address will be used in the event of an emergency call:
                                  </div>
                                  <div className="user-e911-address">
                                    <div>
                                      <input type="text" disabled="" value={this.props.yourSafty.data.safety_list} className="e911-address-display"/>
                                      <div onClick={(e) => this._showEditDialog()} className="edit-e911-address-link wlink mblock" id="div_40ee_0" data-toggle="modal" data-target="#exampleModal">Edit</div>
                                      <div id="e911-notifications-container"></div>

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
      {
        this.state.displayEditDialog === true
          ? editDialog(this._hideEditDialog, this.saveEditInfo, this.state.streetText, this.state.buildingText, this.state.stateText, this.state.cityText, this.state.zipText, this.onInputChange , this.state.isVerifying , this.state.isConfirmed , this.onVerifyInfo)
          : ""
      }
    </div>);
  }

}

const mapStateToProps = (state) => ({accessToken: state.login.data.access_token, yourSafty: state.dashboard.yourSafty, yourSaftyFields: state.dashboard.yourSaftyFields}),
  mapDispatchToProps = (dispatch) => {
    const {fetchSaftyData, editYourSafty, fetchSaftyFieldsData} = actions;

    return {
      actions: bindActionCreators({
        fetchSaftyData,
        editYourSafty,
        fetchSaftyFieldsData
      }, dispatch)
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(ForYourSafty);
