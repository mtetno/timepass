import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import autobind from 'autobind-decorator';
import {browserHistory} from 'react-router';
import actions from '../../modules/actions';
import './YourDevices.scss';
const logo = require("../../../../styles/img/your-device.png");
import {isEmpty} from 'lodash';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import AppDeskPhoneOverlay from './AppDeskPhoneOverlay'
import TextField from '@material-ui/core/TextField';







class YourDevices extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      yourDevices: false,
      addDeskPhoneModel : false,
      forwardingInput : false,
      dialogStep : 1,
      phoneNumberTextVal : '',
      open : false,
      addNewPopup : false,
      verifyNumber : "",
    };
    this._fetchData = this._fetchData.bind(this);
    this.onDeviceRemoved = this.onDeviceRemoved.bind(this);
    this.onVerifyNumber = this.onVerifyNumber.bind(this);
    this.onVerifyNumberChange = this.onVerifyNumberChange.bind(this);

  }

  _fetchData = () => {
    this.props.actions.fetchDevices(this.props.accessToken);

  }

  onVerifyNumber(){
    this.setState({ forwardingInput : false});
    this.props.actions.addForwardingNumber(this.props.accessToken,"2",this.state.verifyNumber);
  }

  onVerifyNumberChange(e){
this.setState({verifyNumber : e.target.value});
  }

  onDeviceRemoved(e){
    const deviceId = e.target.getAttribute("deviceId");
    this.props.actions.removeYourDevice(this.props.accessToken,deviceId);
  }

  toggleDiv() {
    this.setState({
      yourDevices: !this.state.yourDevices
    });
    if (this.props.dashboard.yourDevices === undefined) {
      this._fetchData();
    }
  }

onAddPhoneNumberInput(e){

  this.setState({
    phoneNumberTextVal: e.target.value
  });
}

  closeDialog(){
    this.setState({
      addDeskPhoneModel: false,
      forwardingInput : false,
      dialogStep : 1,
      open : false,
    });
  }

  showAddDeskPhoneModel(){
    this.setState({
      addDeskPhoneModel: true,
      open : false,
        addNewPopup : false,
    });
  }
onAddNewPopup(){
  this.setState({
    addNewPopup : true,
  });
}

  showAddForwardingInput(){
    this.setState({
      forwardingInput: true,
      open : false,
        addNewPopup : false,
    });
  }

  buildDialog(){
    switch (this.state.dialogStep) {
      case 1:
       return this.dialogStep1();
        break;
        case 2:
         return this.dialogStep2();
          break;
          case 3:
           return this.dialogStep3();
            break;
            case 4:
             return this.dialogStep4();
              break;

    }
  }

  onStep1Complete(){
    this.setState({
      dialogStep: 2
    });
  }

  onStep2Complete(){
    this.setState({
      dialogStep: 3
    });
  }

  onStep3Complete(){
    this.setState({
      dialogStep: 4
    });
  }

  onStep4Complete(){
    this.setState({
      dialogStep: 1,
      addDeskPhoneModel: false
    });
    this.props.actions.addForwardingNumber(this.props.accessToken,"1",this.state.phoneNumberTextVal);
  }

  buildDeviceRowElement(item) {
    return <tr className="item">
      <td className="user-devices-name" title="harness">

        <div className="mblock web-icon-m web-icon-m-desktop"></div>
        <span title="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36">{item.type}</span>

      </td>
      <td>{item.fwd_phone_number}</td>
      <td className="user-devices-status">

        {item.last_connected}

      </td>

      <td className="user-devices-ring">
      <div>

          <Checkbox
                   checked={item.ring_device === '1' ? true : false}

                   value="ringDevice"
                 />
      </div>
      </td>

      <td className="user-devices-remove right">
        <a deviceId={item.device_id} onClick = {this.onDeviceRemoved} className="a-remove wlink">Remove</a>
      </td>
    </tr>;
  }

  render() {
    return (<div className="">

      <div className="user-devices-view-holder">
        <div>
          <div className="web-admin-section">
            <div className="web-admin-section-header" onClick={(e) => this.toggleDiv()}>
              <div className="web-admin-section-icon icon-holder mblock">
                <img src={logo} className="logo-size"/>
              </div>
              <div className="header-2 web-admin-section-title mblock">

                Your Devices

              </div>
              <div className="web-admin-section-expander snappy icon-holder mblock"></div>
            </div>

            {
              this.state.yourDevices
                ? <div className="web-admin-section-child-view-holder">
                    <div className="web-admin-section-child-view " id="yourDevices">
                      <div>
                        <div className="form">
                          <div id="devices-subheader" className="body-copy-2 form-block ">
                            Add a new desk phone or forward number below, and choose which devices to ring when you receive Dialpad calls. Additionally, in the rare event of a Dialpad service outage, calls to your Dialpad number will ring the forwarding number added to your account most recently.
                          </div>
                          <div id="devices-subheader-empty" className="body-copy-2 form-block hide">
                            Connect your devices to start making and receiving calls to your Dialpad number. Get started by
                            <a href="/download" className="wlink">downloading the apps</a>
                            or adding a forwarding number.
                          </div>
                        </div>


                        <div id="user-devices-app">
                          <table className="user-table">
                            <thead>
                              <tr>
                                <th className="user-devices-name">TYPE</th>
                                <th className="user-devices-name">FORWARDING PHONE NUMBER</th>
                                <th className="user-devices-status">LAST CONNECTED</th>
                                <th className="user-devices-ring">RING THIS DEVICE</th>
                                <th className="user-devices-remove"></th>
                              </tr>
                            </thead>

                            <tbody id="app-phones-list">

                              {
                                this.props.dashboard.yourDevices && this.props.dashboard.yourDevices.status === 'Success'
                                  ? this.props.dashboard.yourDevices.data.map((item) => this.buildDeviceRowElement(item))
                                  : ""
                              }

                            </tbody>
                          </table>
                        </div>


                      <div className="add-device-action"><div className="select-menu-view"><div className={this.state.addNewPopup ?  "select-menu snappy add-device-action-select-menu" :  "select-menu snappy closed add-device-action-select-menu" } >
                        <div className="sm-input-shim" tabindex="0" onClick={(e)=>this.onAddNewPopup()}>


                          <input type="text" value="Add New" className="snappy sm-input sm-item-value- unselected " tabindex="-1"/>
                        </div>
                        <div className="sm-menu"><div></div>
                          <ul className="sm-list">

                              <li className="sm-item" id="sm-item--deskphone" data-value="deskphone">

                                <a className="sm-text sm-item-value-deskphone " href="javascript:void(0)" title="Add a desk phone" onClick={(e)=>this.showAddDeskPhoneModel()}>

                                  Add a desk phone
                                </a>
                              </li>

                              <li className="sm-item" id="sm-item--forwarding" data-value="forwarding">

                                <a className="sm-text sm-item-value-forwarding " href="javascript:void(0)" title="Add a forwarding number" onClick={(e)=>this.showAddForwardingInput()}>

                                  Add a forwarding number
                                </a>
                              </li>

                          </ul>
                        </div>
                      </div>
                      </div></div>



                        <div id="obi-advanced-settings" className="wlink rfloat abi-advance-settings" onClick={this.props.onYourDeviceAdvSettingDialogOpen} >
                            Advanced settings
                          </div>
                      </div>

                    </div>




{ this.state.forwardingInput === true ?
                     <div id="verify-number-view"><div><div  className="add-number-input">
                       <form id="forwarding-phones-form"  className="form">
                         <input id="add-forwarding-phone" defaultValue={this.state.verifyNumber} type="text" placeholder="Type in a number" onChange={this.onVerifyNumberChange}/>
                         <div  className="verify-link link" onClick={this.onVerifyNumber}>

                             Verify

                         </div>
                       </form>
                     </div></div></div> : ""
                   }

                  </div>
                : <div></div>

            }




            <div className="web-admin-section-bottom"></div>
          </div>

        </div>
      </div>
      <div className={this.state.addDeskPhoneModel === true ? "appDeskPhoneOverlayShow" : "appDeskPhoneOverlayHide" }>
<AppDeskPhoneOverlay dialog={this.buildDialog()} />
</div>

    </div>);
  }

  dialogStep1 = () =>  {return(<div id="dialog"><table className="h100">
  <tbody><tr>
    <td id="dialog-holder" className="center ">
      <div id="dialog-wrapper" className="iblock left">
        <div className="web-icon-xs web-icon-xs-x dialog-close signup2017" onClick={(e)=>{this.closeDialog()}}></div>
        <div id="dialog-main" className="iblock left"><div><div id="dialog-header" className="device-type-header">
        <div className="dialog-header"><div id="dialog-header" className="center header-5 ">

    Add a desk phone

  </div>
  <div id="dialog-description" className="center description"></div>


  <div className="web-icon-xs web-icon-xs-x dialog-close" onClick={(e)=>{this.closeDialog()}}></div>

        </div>

  </div>
  <div id="add-device-flow" className="dialog-view-2">

  <div onClick={(e) =>   this.onStep1Complete()} ><div><div className="select-device-type-dialog">
  <div  className="select-text body-copy-1-c1 center" id="div_dfb4_0">Select the compatible desk phone you'd like to set
    up:</div>
  <div>
      </div><table  >
    <tbody><tr>

        <td>
          <div className="device-type center body-copy-22-c1" data-device-type="polycomx50">
            <div className="hp-device-image hp-polycom-x50 center"></div>
            Polycom x50 Series  <br></br> (OBI Edition)
          </div>
        </td>


        <td>
          <div className="device-type center body-copy-22-c1" data-device-type="obi300">
            <div className="hp-device-image hp-obi300-adapter center"></div>
            OBi 300 + <br></br> Your Current Phone
          </div>
        </td>

      </tr>
      </tbody><tbody className="see-more-options hide">
        <tr>

          <td>
            <div className="device-type center body-copy-22-c1" data-device-type="obi1000s">
              <div className="hp-device-image hp-obi-1000s-phone center"></div>
              OBi 1000 series
            </div>
          </td>


          <td>
            <div className="device-type center body-copy-22-c1" data-device-type="polycom">
              <div className="hp-device-image hp-polycom-501 center"></div>
              Other Polycom Phones
            </div>
          </td>

        </tr>
        <tr>


        </tr>
      </tbody>

  </table>
  <div className="devices-see-more select-text body-copy-1-c1 center wlink">
    See more options
  </div>
  <div className="devices-see-fewer select-text body-copy-1-c1 center hide wlink">
    See fewer options
  </div>

  <div className="select-text body-copy-1-c1 center">Don't have a compatible desk phone?</div>
  <div className="select-text body-copy-1-c1 center">

    <a target="_blank" id="nm-plantron" className="wlink" href="/orders">Learn more: Purchasing Dialpad desk phones</a>

  </div>

  </div>
  </div></div></div></div></div>
        <div id="dialog-loading" >
          <div className="dialog-loading-bg"></div>
          <div className="dialog-loading-img"></div>
        </div>
      </div>
    </td>
  </tr>
  </tbody></table></div>);}

  dialogStep2 = () => {return(<div id="dialog"><table className="h100">
  <tbody><tr>
    <td id="dialog-holder" className="center ">
      <div id="dialog-wrapper" className="iblock left">
        <div className="web-icon-xs web-icon-xs-x dialog-close signup2017" onClick={(e)=>{this.closeDialog()}}></div>
        <div id="dialog-main" className="iblock left"><div><div id="dialog-header" className="device-type-header"><div className="dialog-header"><div id="dialog-header" className="center header-5 ">

    setting up your polycomx50 phone

  </div>
  <div id="dialog-description" className="center description"></div>


  <div className="web-icon-xs web-icon-xs-x dialog-close" onClick={(e)=>{this.closeDialog()}}></div>

  </div></div>
  <div id="add-device-flow" className="dialog-view-2">

  <div><div><div className="center">
  <div className="dialog-graphic">
    <div className="web-icon-xl web-icon-xl-obi1032"></div>
  </div>
  <div>Enter a new name for your phone:</div>
  <form className="form"  >
     <input  type="text" placeholder="Ex. myphone"   onChange={(e)=>this.onAddPhoneNumberInput(e)} />

  </form>


  <div id="name-length-warning" className="hide attention">
    <div className="web-icon-s web-icon-s-exclamation mblock"></div>
    <div className="mblock attention-text">Please choose a name under 33 characters</div>
  </div>

  <div id="device-activation-code-warning" className="hide attention">
    <div className="web-icon-s web-icon-s-exclamation mblock"></div>
    <div className="mblock attention-text">Unable to generate activation code, please try again</div>
  </div>

  <div id="device-name-taken-warning" className="hide attention">
    <div className="web-icon-s web-icon-s-exclamation mblock"></div>
    <div className="mblock attention-text">You already have a phone with this name</div>
  </div>

  <div id="device-name-blank-warning" className="hide attention">
    <div className="web-icon-s web-icon-s-exclamation mblock"></div>
    <div className="mblock attention-text">Please enter a device name</div>
  </div>

  <div id="user-blank-warning" className="hide attention">
    <div className="web-icon-s web-icon-s-exclamation mblock"></div>
    <div className="mblock attention-text">Please select a user</div>
  </div>

  <div className="center dialog-buttons">
    <div className="secondary-button iblock a-back uppercase" onClick={(e)=>{this.closeDialog()}}>Back</div>
    <div onClick={(e) => this.onStep2Complete()} className="primary-button iblock button-left a-next uppercase">Next</div>
  </div>
  </div>
  </div></div></div></div></div>
        <div id="dialog-loading" >
          <div className="dialog-loading-bg"></div>
          <div className="dialog-loading-img"></div>
        </div>
      </div>
    </td>
  </tr>
  </tbody></table></div>);}

  dialogStep3 =  () => {return(<div id="dialog"><table className="h100">
  <tbody><tr>
    <td id="dialog-holder" className="center ">
      <div id="dialog-wrapper" className="iblock left">
        <div className="web-icon-xs web-icon-xs-x dialog-close signup2017" onClick={(e)=>{this.closeDialog()}}></div>
        <div id="dialog-main" className="iblock left"><div><div id="dialog-header" className="device-type-header"><div className="dialog-header"><div id="dialog-header" className="center header-5 ">

    Setting up your polycomx50 Phone

  </div>
  <div id="dialog-description" className="center description"></div>


  <div className="web-icon-xs web-icon-xs-x dialog-close" onClick={(e)=>{this.closeDialog()}}></div>

  </div></div>
  <div id="add-device-flow" className="dialog-view-2">

  <div><div><div className="center dialog-graphic">
  <div className="web-icon-xl web-icon-xl-obi1032"></div>
  </div>
  <div className="body-copy-1 dialog-sec-desc">Make sure your phone is powered and connected to the internet.</div>

  <div className="body-copy-1 dialog-sec-desc">The phone will automatically detect your internet connection and begin updating itself. You’ll see it reset several times. Once initialization is complete, select one of the following options:</div>


  <div className="dialog-sec-desc">

  <div className="radio-sec simple-trans">
    <div id="dp-purchase" className="mblock"><div className="radio checked"><div className="snappy"></div>
  <input id="dp-device" name="purchaseSource" type="radio"  value="" checked="true"/></div></div>
    <label id="dp-label" htmlFor="dp-device" className="radio-label selected">This device was purchased from Dialpad</label>
  </div>

  <div className="radio-sec simple-trans" id="div_9722_0">
    <div id="tp-purchase" className="mblock"><div className="radio"><div className="snappy"></div>
  <input id="tp_purchase" name="purchaseSource" type="radio"  value="true"/></div></div>
    <label id="tp-label" htmlFor="tp-device" className="radio-label">This device was purchased from a 3rd party</label>
  </div>
  </div>

  <div id="error" className="hide attention">
  <div className="web-icon-s web-icon-s-exclamation mblock"></div>
  <div className="mblock attention-text">A server error occurred: </div>
  </div>

  <div className="center dialog-buttons">
  <div className="secondary-button iblock a-back uppercase" onClick={(e)=>{this.closeDialog()}} >Back</div>
  <div onClick={(e)=> this.onStep3Complete()} className="primary-button iblock button-left a-next uppercase">Next</div>
  </div></div></div></div></div></div>
        <div id="dialog-loading" >
          <div className="dialog-loading-bg"></div>
          <div className="dialog-loading-img"></div>
        </div>
      </div>
    </td>
  </tr>
  </tbody></table></div>);}

  dialogStep4 = () => {return (<div id="dialog"><table className="h100">
  <tbody><tr>
    <td id="dialog-holder" className="center ">
      <div id="dialog-wrapper" className="iblock left">
        <div className="web-icon-xs web-icon-xs-x dialog-close signup2017" onClick={(e)=>{this.closeDialog()}} ></div>
        <div id="dialog-main" className="iblock left"><div><div id="dialog-header" className="device-type-header"><div className="dialog-header"><div id="dialog-header" className="center header-5 ">

    Add a desk phone

  </div>
  <div id="dialog-description" className="center description"></div>


  <div className="web-icon-xs web-icon-xs-x dialog-close" onClick={(e)=>{this.closeDialog()}}></div>

  </div></div>
  <div id="add-device-flow" className="dialog-view-2">

  <div><div><div className="obi-awaiting-activation-text">



  <div className="center header-2">1382</div>


  <div className="body-copy-1 dialog-sec-desc">



        Pick up the handset, then press the "Activation" key on the top left of the display. A voice message will ask you to enter the activation code above.



  </div>


    <div className="body-copy-1">
      Once entered, a voice message will confirm that the code has been sent to the server. Hang up the phone and the device will reset. It is now connected to your account!
    </div>


  </div>

  <div className="obi-awaiting-registration-text hide">
  <div className="body-copy-1 dialog-sec-desc">
    Your phone has been activated! Please wait while we update its configuration...
  </div>
  <div className="body-copy-1 dialog-sec-desc">
    The device will restart several times before activation is complete.
  </div>
  </div>

  <div id="error" className="hide attention">
  <div className="web-icon-s web-icon-s-exclamation mblock"></div>
  <div className="mblock attention-text">The activation timed out, please close and try again.</div>
  </div>

  <div className="center dialog-buttons">
  <div className="secondary-button iblock a-back uppercase" onClick={(e)=>{this.closeDialog()}}>Back</div>
  <div onClick={(e)=> this.onStep4Complete()} className="primary-button iblock button-left a-done uppercase">Done</div>
  </div>
  </div></div></div></div></div>
        <div id="dialog-loading" >
          <div className="dialog-loading-bg"></div>
          <div className="dialog-loading-img"></div>
        </div>
      </div>
    </td>
  </tr>
  </tbody></table></div>);}

}

YourDevices.propTypes = {
  actions: PropTypes.shape({}),
  dashboard: PropTypes.object
};

const mapStateToProps = (state) => ({dashboard: state.dashboard, accessToken: state.login.data.access_token}),
  mapDispatchToProps = (dispatch) => {
    const {fetchDevices,addForwardingNumber,removeYourDevice} = actions;

    return {
      actions: bindActionCreators({
        fetchDevices,
        addForwardingNumber,
        removeYourDevice
      }, dispatch)
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(YourDevices);
