import React from 'react';
import './MainlineMarkup.scss';
import DashboardSideHeader from '../../../components/shared/DashboardSideHeader';
import DashboardMiddleHeader from '../../../components/shared/DashboardMiddleHeader'

class GroupSettingComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isDefaultSet: false,
      voicemainNotification: false,
      faxNotification: false,
      editPhoneLabelOptionsFlag:[],
    }

    this.onVoiceMainNotificationChecked = this.onVoiceMainNotificationChecked.bind(this);
    this.onFaxNotificationChecked = this.onFaxNotificationChecked.bind(this);
    this.onEditName = this.onEditName.bind(this);
    this.onEditAbbr = this.onEditAbbr.bind(this);
    this.onLabelOptionEdit = this.onLabelOptionEdit.bind(this);
    this.onLabelOptionEditPopup = this.onLabelOptionEditPopup.bind(this);

  }

  onLabelOptionEdit(index){
    let editPhoneLabelOptionsFlag = this.state.editPhoneLabelOptionsFlag;
    editPhoneLabelOptionsFlag[index] = true;
    this.setState({editPhoneLabelOptionsFlag : editPhoneLabelOptionsFlag});
  }

  onLabelOptionEditPopup(index){
    let editPhoneLabelOptionsFlag = this.state.editPhoneLabelOptionsFlag;
    editPhoneLabelOptionsFlag[index] = false;
    this.setState({editPhoneLabelOptionsFlag : editPhoneLabelOptionsFlag});
  }

  onEditName(e) {
    const newValue = e.target.value;
    if (newValue != this.props.mainlineInfo.name) {
      this.props.mainLineEditName(newValue);
    }
  }

  onEditAbbr(e) {
    const newValue = e.target.value;
    if (newValue != this.props.mainlineInfo.abbr) {
      this.props.mainLineEditAbbr(newValue);
    }
  }

  onVoiceMainNotificationChecked() {
    this.setState({
      voicemainNotification: !this.state.voicemainNotification
    }, ()=>{
      const isChecked = this.state.voicemainNotification === true ? "1" : "2";
      this.props.mainLineOptionsEdit(undefined,isChecked,undefined);
    });

  }

  onFaxNotificationChecked() {
    this.setState({
      faxNotification: !this.state.faxNotification
    },()=>{
      const isChecked = this.state.faxNotification === true ? "1" : "2";
      this.props.mainLineOptionsEdit(undefined,undefined,isChecked);
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.mainlineInfo && this.state.isDefaultSet === false) {
      this.setState({
        voicemainNotification: newProps.mainlineInfo.notifications_for_voicemail === "1"
          ? true
          : false,
        faxNotification: newProps.mainlineInfo.notifications_for_fax === "1"
          ? true
          : false,
          isDefaultSet : true
      });
    }
  }

  render() {
    const mainlineInfo = this.props.mainlineInfo;
    return (<div>
      <div id="header-for-operator">
        <div>
          <div id="operator-devices-block">
            <div className="form-block-hd header-2">

              Hello Easytel Support operator!

            </div>
            <div className="form-block-sec">
              <div className="iblock">
                <div className="body-copy-2 form-block-desc iblock" id="div_c160_0">
                  Choose Easytel Support events you want to be notified of by e-mail.
                </div>
                <div onClick={this.onVoiceMainNotificationChecked}>
                  <div id="voicemail-notification-group" className="mblock">
                    <div className={this.state.voicemainNotification
                        ? "radio square mblock checked"
                        : "radio square mblock unchecked"} id="div_c160_1">
                      <div className="snappy"></div>
                      <input id="input-voicemail-notification-group" name="voicemail-notification" type="checkbox" value="waqas@myeasytel.com"/>
                    </div>
                  </div>

                  Voicemails left on this main line's voicemail.

                </div>
                <div onClick={this.onFaxNotificationChecked}>

                  <div id="fax-notification-group" className="mblock">
                    <div className={this.state.faxNotification
                        ? "radio square mblock checked"
                        : "radio square mblock unchecked"} id="div_c160_2">
                      <div className="snappy"></div>
                      <input id="input-fax-notification-group" name="fax-notification" type="checkbox" value="waqas@myeasytel.com"/>
                    </div>
                  </div>

                  Faxes sent to this main line.

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        mainlineInfo
          ? <form id="group-settings-form" className="form form-main">
              <div className="form-block-hd header-2">

                Main Line Info

              </div>
              <div id="group-info" className="form-block">
                <div className="form-block-sec">
                  <div className="iblock">
                    <label>Name</label>
                    <div>
                      <input name="name" id="group-name" type="text" placeholder="Name" defaultValue={mainlineInfo.name} onBlur={this.onEditName}/>
                    </div>
                  </div>
                  <div className="iblock">
                    <label>Abbreviation
                      <span className="abbreviation-help link" id="span_be9e_0">?<div className="tooltip simple-trans fade-out tooltip-button">
                          <div className="tooltip-container hide">
                            <div className="tooltip-content">Abbreviations are used for the<br/>
                              department tab in the<br/>
                              desktop and mobile apps.</div>
                            <div className="tooltip-callout tooltip-callout-center"></div>
                          </div>
                        </div>
                      </span>
                    </label>
                    <div>
                      <input name="abbreviation" id="group-abbr" type="text" placeholder="ABBR" defaultValue={mainlineInfo.abbr} onBlur={this.onEditAbbr}/>
                    </div>
                  </div>

                </div>

                <div id="dids-view">
                  <div className="list-container">
                    <div id="dialog-header"></div>
                    <div>
                      <table className="user-table ">

                        <thead>
                          <tr>
                            <th>Phone number(s)</th>
                            <th>Label</th>
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
                          </tr>

                        </thead>

                        <tbody id="numbers-list">
                          {
                            mainlineInfo.mainline_numbers_list.map((item,index) => <tr className="item">
                              <td className="fl-number">
                                <div className="body-copy-1">{item.phone_number}</div>
                              </td>
                              <td className="fl-label">
                                <div className="body-copy-1 elipsis">
                                  {item.label}
                                </div>

                              </td>
                              <td className="fl-number-type">
                                <div className="body-copy-1">

                                  Local number

                                </div>
                              </td>
                              <td className="fl-number-port_status">
                                <div className="body-copy-1"></div>
                              </td>
                              <td className="fl-number-action">
                                <div className="select-menu-view">
                                  <div className="select-menu snappy  closed row-options-select-menu">
                                    <div className="sm-input-shim" tabIndex="0" onClick={(e)=>this.onLabelOptionEdit(index)}>
                                      <input type="text" defaultValue="Options"  className="snappy sm-input sm-item-value- unselected " tabIndex="-1"/>
                                    </div>
                                    <div id="nav" className={this.state.editPhoneLabelOptionsFlag[index] ? "sm-menu" : "sm-menu hide"}  onClick={(e)=>this.onLabelOptionEditPopup(index)}>
                                      <div></div>
                                      <ul className="sm-list">
                                        <li className="sm-item" id="sm-item--label" data-value="label" onClick={(e)=>this.props.onMainLineEditDialogOpen(item.mainline_numberid,item.label,item.phone_number)}>
                                          <a className="sm-text sm-item-value-label " href="javascript:void(0)" title="Edit Label">
                                            Edit Label
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>)
                          }

                        </tbody>
                      </table>

                      <div className="form-list-add">
                        <div id="add-number" className="mblock icon-text add-number-link">
                          <div className="web-icon web-icon-s web-icon-s-plus mblock"></div>
                          <div className="wlink iblock" data-toggle="modal" data-target="#modal1">Add a number</div>
                        </div>

                        <div id="add-fax" className="mblock icon-text add-fax-link">
                          <div className="web-icon web-icon-s web-icon-s-plus mblock"></div>
                          <div className="wlink iblock" data-toggle="modal" data-target="#modal2">Add a fax number</div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </form>
          : undefined
      }

    </div>);
  }
}

export default GroupSettingComponent;
