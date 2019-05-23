import React from 'react';

const editDialog = (_hideEditDialog,saveEditInfo,streetText,buildingText,stateText,cityText,zipText,onInputChange,isVerifying,isConfirmed,onVerifyInfo) => {return (
  <div id="dialog"><table className="h100">
 <tbody><tr>
   <td id="dialog-holder" className="center ">
     <div id="dialog-wrapper" className="iblock left">
       <div className="web-icon-xs web-icon-xs-x dialog-close signup2017"  ></div>
       <div id="dialog-main" className="iblock left"><div><div id="dialog-header"><div className="dialog-header"><div id="dialog-header" className="center header-5 ">

   Edit Registered Location

</div>
<div id="dialog-description" className="center description"></div>


 <div className="web-icon-xs web-icon-xs-x dialog-close"  onClick={(e)=>_hideEditDialog(e)}></div>

</div></div>
<div id="e911-edit" className="dialog-view-2">

<div><div className="form" id="">
 <form id="e911-form" method="POST"  >

   <label htmlFor="e911-address">Street Address</label>

   <div>
     <input name="e911_address" id="e911-address" type="text" defaultValue={streetText} onChange={(e)=>onInputChange(e,"street")}  placeholder="Street Address"/>
   </div>

   <label htmlFor="e911-address2">Apartment, suite, unit, building, floor, etc.</label>

   <div>
     <input name="e911_address2" id="e911-address2" type="text" defaultValue={buildingText}  onChange={(e)=>onInputChange(e,"building")} placeholder="Unit, Floor, Suite, etc."/>
   </div>

   <label htmlFor="e911-city">City</label>
   <div>
     <input name="e911_city" id="e911-city" type="text" defaultValue={cityText} placeholder="City"  onChange={(e)=>onInputChange(e,"city")} />
   </div>


   <table>
     <tbody><tr>

       <td>

         <label htmlFor="e911-state">State or Territory</label>

         <div>
           <input name="e911_state" id="e911-state" type="text" defaultValue={stateText} placeholder="State"  onChange={(e)=>onInputChange(e,"state")} />
         </div>
       </td>
       <td id="td_b729_0">

         <label htmlFor="e911-zip">Zip Code</label>

         <div>
           <input name="e911_zip" id="e911-zip" type="text" defaultValue={zipText} placeholder="Zip"  onChange={(e)=>onInputChange(e,"zip")} />
         </div>
       </td>
     </tr>
   </tbody></table>
   <input type="submit" className="hide"/>
 </form>


 <div id="e911-verification-state hide" className={ isConfirmed ? "confirm-dialog-padding-bottom"  : "confirm-dialog-padding-bottom hide"}><div>

   <div className="e911-verify-state confirm-e911-address body-copy-2">
     Please confirm that the address below is correct:
     <div className="confirm-single-e911-address body-copy-1">
       <h4>{streetText + " " + buildingText + " "+ stateText + " " + cityText + " " + zipText}</h4>
     </div>
   </div>


 </div></div>

 <table className={isVerifying ? "e911-buttons hide"  : "e911-buttons"} >
   <tbody><tr>

     <td className="center">
       <button id="cancel-e911-address" className="iblock secondary-button" onClick={(e)=>_hideEditDialog(e)}>Cancel</button>
     </td>

     <td className="center">
       <button  onClick={(e)=>onVerifyInfo(e)}  id="verify-e911-address" className= { isConfirmed ? "iblock primary-button hide" : "iblock primary-button" }>

           Verify Changes

       </button>
       <button id="confirm-e911-address"  onClick={(e)=>saveEditInfo(e)} className={ isConfirmed ? "iblock primary-button" : "iblock primary-button hide" }>Confirm</button>
     </td>
   </tr>
 </tbody></table>

 <div className= {isVerifying ?  "mblock auto-suggest" : "mblock auto-suggest hide" }>
<div className="spinner verify-spinner-parent">

<span  className="verify-spinner"  >Verifying....</span>
</div>

</div>

</div></div></div></div></div>



<div id="dialog-loading">
                   <div className="dialog-loading-bg"></div>
                   <div className="dialog-loading-img"></div>
               </div>


     </div>
   </td>
 </tr>
</tbody></table></div>);}

const changePasswordDialog = (onChangePasswordDismiss,onChangePasswordSave,oldPassword,newPassword,confirmPassword,onOldPasswordChange,
onNewPasswordChange,onConfirmPasswordChange,passwordError,onConfirmPasswordFocus,onNewPasswordFocus,onOldPasswordFocus
) => {
return (<div id="dialog" className="change-password-dialog">
    <table>
        <tbody>
            <tr>
                <td id="dialog-holder" className="">
                    <div id="dialog-wrapper">
                        <div className="web-icon-xs web-icon-xs-x dialog-close signup2017"></div>
                        <div id="dialog-main">
                            <div>
                                <div id="dialog-header">
                                    <div className="dialog-header">
                                        <div id="dialog-header" className="center header-5 ">

                                            Change your password

                                        </div>
                                        <div id="dialog-description" className="center description"></div>

                                        <div onClick={onChangePasswordDismiss} className="web-icon-xs web-icon-xs-x dialog-close"></div>

                                    </div>
                                </div>
                                <form id="change-password-form" className="form">
                                    <div className="body-copy-2">Current Password</div>
                                    <div>
                                        <input type="password" id="current-password" name="password" size="25" defaultValue={oldPassword} onChange={onOldPasswordChange} onFocus={onOldPasswordFocus}/>
                                    </div>

                                    <div className="body-copy-2">New Password</div>
                                    <div>
                                        <input type="password" id="password" name="password" size="25" defaultValue={newPassword} onChange={onNewPasswordChange} onFocus={onNewPasswordFocus}/>
                                    </div>

                                    <div className="body-copy-2">Confirm New Password</div>
                                    <div>
                                        <input type="password" id="confirm-password" size="25" defaultValue={confirmPassword} onChange={onConfirmPasswordChange} onFocus={onConfirmPasswordFocus}/>
                                    </div>

                                    <div id="change-password-status" className="center body-copy-2">
                                        <div id="password-save-error" className="change-password-status-text red-copy-1">
                                            {passwordError != '' ? passwordError : ""}
                                        </div>
                                        <div id="password-save-error-common" className="change-password-status-text red-copy-1 hide">
                                            The password you entered is too common. Please try another password.
                                        </div>
                                        <div id="password-save-success" className="change-password-status-text green-copy-1 hide">
                                            Your new password has been saved.
                                        </div>
                                    </div>

                                    <div className="center">
                                        <div id="cancel-change-password" className="disabled mblock master-button" onClick={onChangePasswordDismiss}>Cancel</div>
                                        <div id="save-password" className="mblock master-button" onClick={onChangePasswordSave}>Save Changes</div>
                                    </div>
                                    <input type="submit" className="hide"/>
                                </form>
                            </div>
                        </div>
                        <div id="dialog-loading">
                            <div className="dialog-loading-bg"></div>
                            <div className="dialog-loading-img"></div>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>)
}

const editCallHandlingVoiceMailName = (onDismissCallHandlingEditName,onSaveCallHandlingEditName,onChangeCallHandlingEditVoiceMailName,callHandlingEditVoiceMailName,type) => {
  return (<div id="dialog">
    <table className="h100">
        <tbody>
            <tr>
                <td id="dialog-holder" className="center ">
                    <div id="dialog-wrapper" className="iblock left">
                        <div className="web-icon-xs web-icon-xs-x dialog-close signup2017"></div>
                        <div id="dialog-main" className="iblock left">
                            <div>
                                <div id="dialog-header">
                                    <div className="dialog-header">
                                        <div id="dialog-header" className="center header-5 ">

                                            Rename your greeting

                                        </div>
                                        <div id="dialog-description" className="center description"></div>

                                        <div className="web-icon-xs web-icon-xs-x dialog-close" onClick={onDismissCallHandlingEditName}></div>

                                    </div>
                                </div>
                                <div className="dialog-view">

                                    <div className="form" id="edit-greeting-form">
                                        <table className="greeting-details">
                                            <tbody>
                                                <tr>
                                                    <td>Name</td>
                                                    <td>
                                                        <input name="name" id="greeting-name" type="text"   value={callHandlingEditVoiceMailName} onChange={onChangeCallHandlingEditVoiceMailName}/>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>

                                        <div className="center">
                                            <div id="save-greeting" className="iblock primary-button" onClick={(e)=>onSaveCallHandlingEditName(type)}>Save</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="dialog-loading">
                            <div className="dialog-loading-bg"></div>
                            <div className="dialog-loading-img"></div>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>);
}


const rightSideAdvanceDeviceSetting = (onYourDeviceAdvSettingDialogOpen,
   yourDeviceAdvSettingOption1Selection, yourDeviceAdvSettingOption2Selection, yourDeviceAdvSettingOption3Selection, yourDeviceAdvSettingAnswerFrdCalls, yourDeviceAdvSettingSmsFrd,onYourDeviceOptionChecked,onYourDeviceAdvSettingsSubmit) => {
  return (


<td id="rightbar" className="snappy app-footer-none app-subheader-default app-overlay-none app-sidebar-none app-header-default app-rightbar-dialog">


<div><div id="rightbar-dialog" className="rightbar-padded border-box h100">

<div id="rightbar-dialog-header"><div><div className="rightbar-simple-header">
<div className="rightbar-simple-header-title-row ">
<div className="header-text header-2 rightbar-simple-header-title">Advanced Settings</div>
<div onClick={onYourDeviceAdvSettingDialogOpen} className="web-icon-xs web-icon-xs-x rightbar-close"></div>
</div>

</div>
</div></div>

<div id="rightbar-dialog-content" className="h100"><div><div className="dialog-sec-desc advanced-settings-dialog-desc">
<div className="header-4 dialog-label-desc">Incoming caller ID</div>
<div className="body-copy-2">
To help distinguish personal calls from Dialpad calls, choose the caller ID you want to
  see when receiving an inbound call to a forwarding number, e.g. Dialpad calls forwarded to
  your mobile phone.
</div>
</div>

<div className="dialog-sec-desc advanced-settings-dialog-desc forwarding-settings-tip">
<span className="body-copy-2">
Tip: You can save the department number to your phone's contacts, to display the department name.
</span>
</div>


<div className="dialog-sec-desc" id="div_fae1_0">
<div className="header-5 dialog-label-desc">

    Calls to your personal Dialpad number:



</div>
<div id="div_fae1_1">
  <table>
    <tbody><tr className="forwarding-advanced-settings-row">

        <td>
          <div id="personal-display-caller-dont-apply" className="mblock"><div onClick={(e)=>onYourDeviceOptionChecked("1","1")} className={yourDeviceAdvSettingOption1Selection === "1" ? "radio checked" : "radio"}><div className="snappy"></div>
<input id="personal-display-caller" name="user" type="radio"  value="caller" checked="true"/></div></div>
          <label htmlFor="personal-display-caller-dont-apply" className="radio-label selected advYourDeviceLabel">

              Display the caller's number


          </label>
        </td>

        <td>
          <div id="personal-display-switch-dont-apply" className="mblock"><div onClick={(e)=>onYourDeviceOptionChecked("1","2")} className={yourDeviceAdvSettingOption1Selection === "2" ? "radio checked" : "radio"}><div className="snappy"></div>
<input id="personal-display-switch" name="user" type="radio"  value="target"/></div></div>
          <label htmlFor="personal-display-switch-dont-apply" className="radio-label advYourDeviceLabel">



                Display your Dialpad number




          </label>
        </td>

    </tr>
  </tbody></table>
</div>
</div>

<div className="dialog-sec-desc" id="div_fae1_2">
<div className="header-5 dialog-label-desc">


    Calls to your departments/office main line:


</div>
<div id="div_fae1_3">
  <table>
    <tbody><tr className="forwarding-advanced-settings-row">

        <td>
          <div id="department-display-caller-dont-apply" className="mblock"><div onClick={(e)=>onYourDeviceOptionChecked("2","1")} className={yourDeviceAdvSettingOption2Selection  === "1" ? "radio checked" : "radio"}><div className="snappy"></div>
<input id="department-display-caller" name="group" type="radio"  value="caller"/></div></div>
          <label htmlFor="department-display-caller-dont-apply" className="radio-label advYourDeviceLabel">

              Display the caller's number


          </label>
        </td>

        <td>
          <div id="department-display-department-dont-apply" className="mblock"><div onClick={(e)=>onYourDeviceOptionChecked("2","2")} className={yourDeviceAdvSettingOption2Selection  === "2" ? "radio checked" : "radio"}><div className="snappy"></div>
<input id="department-display-department" name="group" type="radio"  value="target" checked="true"/></div></div>
          <label htmlFor="department-display-department-dont-apply" className="radio-label selected advYourDeviceLabel">




                Display department number



          </label>
        </td>

    </tr>
  </tbody></table>
</div>
</div>

<div className="dialog-sec-desc">
<div className="header-5 dialog-label-desc">



    Calls to your executives:

</div>
<div id="div_fae1_4">
  <table>
    <tbody><tr className="forwarding-advanced-settings-row">

        <td>
          <div id="executive-display-caller-dont-apply" className="mblock"><div onClick={(e)=>onYourDeviceOptionChecked("3","1")} className={yourDeviceAdvSettingOption3Selection  === "1" ? "radio checked" : "radio"}><div className="snappy"></div>
<input id="executive-display-caller" name="staff" type="radio"  value="caller" checked="true"/></div></div>
          <label htmlFor="executive-display-caller-dont-apply" className="radio-label selected advYourDeviceLabel">

              Display the caller's number


          </label>
        </td>

        <td>
          <div id="executive-display-executive-dont-apply" className="mblock"><div onClick={(e)=>onYourDeviceOptionChecked("3","2")} className={yourDeviceAdvSettingOption3Selection  === "2" ? "radio checked" : "radio"}><div className="snappy"></div>
<input id="executive-display-executive" name="staff" type="radio"  value="target"/></div></div>
          <label htmlFor="executive-display-executive-dont-apply" className="radio-label advYourDeviceLabel">





                Display executive number


          </label>
        </td>

    </tr>
  </tbody></table>
</div>
</div>



<div className="dialog-sec-desc advanced-settings-dialog-desc" id="div_fae1_5">
<div className="header-4 dialog-label-desc">Answer Forwarded Calls</div>
<div>
<table>
  <tbody><tr>
    <td valign="top">
      <div id="require-answer-confirmation-checkbox" className="mblock"><div  onClick={(e)=>onYourDeviceOptionChecked("4")}  className={yourDeviceAdvSettingAnswerFrdCalls  === "1" ? "radio square mblock checked" : "radio square mblock" } id="div_fae1_6">
<div className="snappy"></div>
<input id="input-require-answer-conf" name="require-answer-confirmation" type="checkbox"  value="true"/>
</div></div>
    </td>
    <td>
      <label htmlFor="require-answer-confirmation-checkbox" className="body-copy-2 radio-label">
        Include a verification prompt to 'press 1' for forwarded calls. This ensures that calls end up in Dialpad and not in your mobile phone's voicemail service.
        <a href="https://help.dialpad.com/hc/en-us/articles/210451983-Mobile-Preferences#forwarding-prompt" target="_blank">Learn more.</a>
      </label>
    </td>
  </tr>
</tbody></table>
</div>
</div>

<div className="dialog-sec-desc advanced-settings-dialog-desc " id="div_fae1_7">
<div className="header-4 dialog-label-desc">SMS Forwarding</div>
<div className="body-copy-2">

    Add a forwarding phone number to enable SMS forwarding to your mobile numbers whenever you receive messages on Dialpad.

</div>
<div className="dialog-sec-desc advanced-settings-dialog-desc forwarding-settings-tip">
  <span className="body-copy-2">
    Not recommended: As long as you have Dialpad installed on your devices, you will receive notifications through the apps.
  </span>
</div>
<table className="user-table" id="sms-forwarding-table">
{
  yourDeviceAdvSettingSmsFrd.map((item,index) =>
  <tr index={index}>
      <td>{item.forward_numbers}</td>
      <td>check</td>
  </tr>)
}
</table>
</div></div></div>
</div>

<div id="rightbar-dialog-footer"><div><div className="integration-settings-footer">
<div className="iblock secondary-button" id="cancel-button" onClick={onYourDeviceAdvSettingDialogOpen}>Cancel</div>
<div className="iblock primary-button" id="confirm-button">
<div className="save-changes-text" onClick={onYourDeviceAdvSettingsSubmit}>Save Changes</div>
<div className="save-changes-loader hide"> </div>
</div>
</div>
</div></div></div>


</td>


    );
};

export {
   editDialog,
   changePasswordDialog,
   editCallHandlingVoiceMailName,
   rightSideAdvanceDeviceSetting
}
