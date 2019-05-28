import React from 'react';
import {editCallHandlingVoiceMailName} from '../../CommonComponents/CommonComponents';

class BusinessHoursDropdowns extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      callHandlingDropdownOpen: false,
      isCallHandlingEditNameDialogOpen: false,
      uploadError: false,
      callHandlingEditVoiceMailName: ''
    };

    this.onCallHandlingDropdownOpen = this.onCallHandlingDropdownOpen.bind(this);
    this.onOpenCallHandlingEditName = this.onOpenCallHandlingEditName.bind(this);
    this.deleteCallHandlingVoiceMail = this.deleteCallHandlingVoiceMail.bind(this);
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.pickFileRef = React.createRef();
    this.onDismissCallHandlingEditName = this.onDismissCallHandlingEditName.bind(this);
    this.onChangeCallHandlingEditVoiceMailName = this.onChangeCallHandlingEditVoiceMailName.bind(this);
  }

  onChangeCallHandlingEditVoiceMailName(e) {
    this.setState({callHandlingEditVoiceMailName: e.target.value});
  }

  onFileInputClick(event) {
    event.target.value = '';
  }

  onDismissCallHandlingEditName() {
    this.setState({isCallHandlingEditNameDialogOpen: false});
  }

  onSaveCallHandlingEditName(type) {
    this.onDismissCallHandlingEditName();

    this.props.editCallHandlingVoiceMailName(this.state.callHandlingEditVoiceMailId, this.state.callHandlingEditVoiceMailName);

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

  onCallHandlingDropdownOpen() {
    this.setState({callHandlingDropdownOpen: true});
  }

  onOpenCallHandlingEditName() {
    this.setState({isCallHandlingEditNameDialogOpen: true});
  }

  onCallHandlingDropdownSelected(e) {
    this.onChangeCallHandlingDropdown(e.target.getAttribute("id"), e.target.getAttribute("value"));
    this.setState({callHandlingDropdownOpen: false});
  }

  selectCallHandlingAudioFileWindow = () => {
    const node = this.pickFileRef.current;
    node.click();
  }

  onChangeCallHandlingDropdown(id, name,isDefaultValues) {
    this.setState({callHandlingEditVoiceMailName: name, callHandlingEditVoiceMailId: id});
    if(isDefaultValues){
      return;
    }
    this.props.saveCallHandlingDropdownPreferance(id,"VOICEMAIL");
  }

  componentWillReceiveProps(props) {
    // Calculate default voicemail dropdown
    if (isEmpty(props.dropdownData) == false && this.state.callHandlingEditVoiceMailName === '') {
      const callHandlingData = props.dropdownData;
      const selectedCallHandlingDropdownName = filter(callHandlingData.voicemail_greeting, item => item.select_flag === '1');
      if (selectedCallHandlingDropdownName.length > 0) {
        this.onChangeCallHandlingDropdown(selectedCallHandlingDropdownName[0].id, selectedCallHandlingDropdownName[0].name, true);
      }
    }
  }

  render() {

    return (<div >
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

                      <input id="customivr" name="customivr" type="text" value={this.state.callHandlingEditVoiceMailName} className="snappy sm-input sm-item-value-5734787986096128 " tabIndex="-1"/>
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
                  <input type="file" ref={this.pickFileRef} accept=".mp3" onClick={this.onFileInputClick} onChange={this.handleFileSelect} className="hide"/>
                </div>
              </div>
            </td>

            <td></td>
          </tr>

          <tr className={this.props.callHandling.audioUploading
              ? "upload_status"
              : "upload_status hide"}>
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

      {
        this.state.isCallHandlingEditNameDialogOpen
          ? editCallHandlingVoiceMailName(this.onDismissCallHandlingEditName, this.onSaveCallHandlingEditName, this.onChangeCallHandlingEditVoiceMailName, this.state.callHandlingEditVoiceMailName, "callHandlingEditVoiceMail")
          : ""
      }

    </div>);
  };

}

const mapStateToProps = (state) => ({accessToken: state.login.data.access_token}),
  mapDispatchToProps = (dispatch) => {
    const {editCallHandlingVoiceMailName, deleteCallHandlingVoiceMail, uploadCallHandlingAudioFile} = actions;

    return {
      actions: bindActionCreators({
        editCallHandlingVoiceMailName,
        deleteCallHandlingVoiceMail,
        uploadCallHandlingAudioFile
      }, dispatch)
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(BusinessHoursDropdowns);
