import React from 'react';
import './MainlineMarkup.scss';
import DashboardSideHeader from '../../../components/shared/DashboardSideHeader';
import DashboardMiddleHeader from '../../../components/shared/DashboardMiddleHeader'
const logo = require("../../../styles/img/ic-agents.png");
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import autobind from 'autobind-decorator';
import {browserHistory} from 'react-router';
import actions from '../modules/actions';
import {isEmpty, filter} from 'lodash';

class ManageOperatorComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggleDiv: false,
      isDefaultSet: false,
      filterTeamMemberText: "",
      filteredTeamMembers: [],
      filterTeamMemberSpinnerEnabled: false,
      isAssignOperatorOptionOpen : false,
      assignOperatorOptionsFlag : [],
    };

    this.onFilterTeamMemberTextChange = this.onFilterTeamMemberTextChange.bind(this);
    this.onBlurTeamMember = this.onBlurTeamMember.bind(this);
    this.onTeamMemberSelection = this.onTeamMemberSelection.bind(this);
    this.onAssignOperatorOptionClick = this.onAssignOperatorOptionClick.bind(this);
    this.onRemoveAssignOperator = this.onRemoveAssignOperator.bind(this);
  }

  onBlurTeamMember(e) {
    e.target.value = "";
  }

  onRemoveAssignOperator(index,id){
    const assignOperatorOptionsFlag = this.state.assignOperatorOptionsFlag;
    assignOperatorOptionsFlag[index] = false;
    this.setState({
      assignOperatorOptionsFlag : assignOperatorOptionsFlag
    });
    this.props.actions.mainlinRemoveAssignOperator(this.props.accessToken,id).then((response)=>{
        this.props.actions.mainLineAssignOperationList(this.props.accessToken);
    });
  }

  onAssignOperatorOptionClick(index){
    const assignOperatorOptionsFlag = this.state.assignOperatorOptionsFlag;
    assignOperatorOptionsFlag[index] = true;
    this.setState({
      assignOperatorOptionsFlag : assignOperatorOptionsFlag
    });
  }

  onTeamMemberSelection(e, item) {
    this.props.actions.mainLineAddOperator(this.props.accessToken, item.team_member_id).then((response) => {
      this.props.actions.mainLineAssignOperationList(this.props.accessToken);
    });
    this.setState({filterTeamMemberText: item.name, filteredTeamMembers: [], filterTeamMemberSpinnerEnabled: false});
    e.target.innerText = "";
  }

  _toggleDiv() {
    this.setState({
      toggleDiv: !this.state.toggleDiv
    });

    if (this.state.isDefaultSet === false) {
      this.setState({isDefaultSet: true});
      this.props.actions.mainLineAssignOperationList(this.props.accessToken);
    }

  }

  onFilterTeamMemberTextChange(e) {
    const userInput = e.target.value;
    const filterTeamMem = userInput === ""
      ? []
      : filter(this.props.mainLineAssignOperationList.search_operators, item => item.name.includes(userInput));
    this.setState({filterTeamMemberText: userInput, filteredTeamMembers: filterTeamMem, filterTeamMemberSpinnerEnabled: true});
  }

  componentDidMount() {}

  render() {

    return (<div id="manage-operators" className="form">
      <div>
        <div className={this.state.toggleDiv
            ? "web-admin-section"
            : "web-admin-section closed"}>
          <div className="web-admin-section-header" onClick={(e) => this._toggleDiv()}>
            <div className="web-admin-section-icon icon-holder mblock">
              <img src={logo} className="logo-size"/>
            </div>
            <div className="header-2 web-admin-section-title mblock">

              Assigned Operators &amp; Phones

            </div>
            <div className="web-admin-section-expander snappy icon-holder mblock"></div>
          </div>

          {
            this.state.toggleDiv
              ? <div className="web-admin-section-child-view-holder">
                  <div className="web-admin-section-child-view " id="assignedOperators">

                    <div>
                      <div className="body-copy-2 form-block-desc">
                        Operators are responsible for calls, messages and voicemails to this department. This line requires at least one operator. If you'd like a room phone to ring when this department receives a call, add them in the 'phones' tab below. You can add a maximum of 25 total operators and/or phones.
                      </div>

                      <div className="sec-tabs">
                        <div id="operators-tab" className="sec-tab-selected">Operators
                          <div className="iblock" id="tab-operator-count">
                            <div>
                              <div className="sec-tab-count">(1)</div>
                            </div>
                          </div>
                        </div>
                        <div id="phones-tab" className="">Phones
                          <div className="iblock" id="tab-room-count">
                            <div></div>
                          </div>
                        </div>
                        <div id="maximum-fanout-count" className="rfloat">
                          <span className="header-6-c4">TOTAL 1</span>
                          <span className="header-6-c3" id="span_be9e_1">(24 REMAINING)</span>
                        </div>
                      </div>

                      <div id="operators-block" className="">

                        <div id="operator-suggest">
                          <div className="operator-suggest">
                            <div className="auto-suggest">
                              <input type="text" placeholder="+ Add people from your team" autoComplete="off" className="operator-suggest-input" onBlur={this.onBlurTeamMember} onChange={this.onFilterTeamMemberTextChange}/>
                              <div className={this.state.filterTeamMemberSpinnerEnabled
                                  ? "spinner"
                                  : "spinner hide"}></div>
                              <ul className="operator-suggest-list">
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

                        <div id="operator-list">
                          <div className="list-container">
                            <div id="operator-count" className="body-copy-1">
                              <div>1 Operator

                              </div>
                            </div>
                            <table className="user-table">
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Email</th>
                                  <th>Role</th>

                                  <th></th>
                                </tr>
                              </thead>
                              <tbody id="operators-list">

                                {
                                  this.props.mainLineAssignOperationList && this.props.mainLineAssignOperationList.assign_operators_list
                                    ? this.props.mainLineAssignOperationList.assign_operators_list.map((item,index) => <tr className="item">
                                      <td>
                                        <div className="body-copy-1">{item.name}</div>
                                      </td>
                                      <td>
                                        <div className="">
                                          <a className="wlink" href="mailto:waqas.mukhtar1@gmail.com">{item.email}</a>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="body-copy-2">

                                          Department administrator

                                        </div>
                                      </td>

                                      <td>
                                        <div className="account-action">
                                          <div className="select-menu-view">
                                            <div className="select-menu snappy row-options-select-menu">
                                              <div className="sm-input-shim" tabIndex="0" onClick={(e)=>this.onAssignOperatorOptionClick(index)}>

                                                <input type="text"  defaultValue="Options" className="snappy sm-input sm-item-value- unselected " tabIndex="-1"/>
                                              </div>
                                              <div className={this.state.assignOperatorOptionsFlag[index] ? "sm-menu" : "sm-menu hide" }>
                                                <div></div>
                                                <ul className="sm-list">

                                                  <li className="sm-item" id="sm-item--admin" data-value="admin">

                                                    <a className="sm-text sm-item-value-admin " href="javascript:void(0)" title="Remove admin privileges">

                                                      Remove admin privileges
                                                    </a>
                                                  </li>

                                                  <li className="sm-item" id="sm-item--remove" data-value="remove" onClick={(e)=>this.onRemoveAssignOperator(index,item.operator_id)}>

                                                    <a className="sm-text sm-item-value-remove " href="javascript:void(0)" title="Remove">

                                                      Remove
                                                    </a>
                                                  </li>

                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>)
                                    : undefined
                                }

                              </tbody>
                            </table>
                            <div id="no-operators" className="attention no-values">
                              <div className="web-icon-s web-icon-s-exclamation mblock"></div>
                              <div className="mblock attention-text">Add operators</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="rooms-block" className="hide">

                        <div id="room-suggest">
                          <div className="operator-suggest">
                            <div className="auto-suggest">

                              <table>
                                <tbody>
                                  <tr>
                                    <td>
                                      <input type="text" placeholder="+ Add a phone to ring" autoComplete="off" className="operator-suggest-input"/>
                                    </td>
                                    <td id="room-phone-help">
                                      <div className="web-icon-xs web-icon-xs-tip room-phone-help mblock "></div>
                                      <div className="tooltip simple-trans fade-out settings-tooltip">
                                        <div className="tooltip-container hide">
                                          <div className="tooltip-content">Add a phone to this list from the "room phones" section in the office settings (admin only).</div>
                                          <div className="tooltip-callout tooltip-callout-center"></div>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>

                              <div className="spinner hide"></div>
                              <ul className="operator-suggest-list hide"></ul>
                            </div>
                          </div>
                        </div>

                        <div id="room-list">
                          <div className="list-container">
                            <div id="room-operator-count" className="body-copy-1">
                              <div>0 Phones
                              </div>
                            </div>
                            <table id="room-operators-table" className="user-table">
                              <thead>
                                <tr>
                                  <th>Phone Name</th>
                                  <th>&nbsp;</th>
                                </tr>
                              </thead>
                              <tbody id="operators-list"></tbody>
                            </table>
                            <div id="no-operators" className="attention no-values"></div>
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
  };

}

const mapStateToProps = (state) => ({
    accessToken: state.login.data.access_token,
    mainLineAssignOperationList: state.mainline.mainLineAssignOperationList
      ? state.mainline.mainLineAssignOperationList.data
      : undefined
  }),
  mapDispatchToProps = (dispatch) => {
    const {mainLineAssignOperationList, mainLineAddOperator,mainlinRemoveAssignOperator} = actions;
    return {
      actions: bindActionCreators({
        mainLineAssignOperationList,
        mainLineAddOperator,
        mainlinRemoveAssignOperator
      }, dispatch)
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(ManageOperatorComponent);
