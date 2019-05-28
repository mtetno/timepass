import React from 'react';

const editMainLinePhoneNumber = (phonenumber,label,onMainLineLabelTextChange,onSavePhonenumber,onDismiss) => {return (
  <div id="overlay" className="snappy app-rightbar-none app-footer-none app-subheader-default app-header-default app-sidebar-main app-overlay-dialog">
  <div id="dialog">
      <table className="h100">
          <tbody>
              <tr>
                  <td id="dialog-holder" className="center  ">
                      <div id="dialog-wrapper" className="iblock left">
                          <div className="web-icon-xs web-icon-xs-x dialog-close signup2017"></div>
                          <div id="dialog-main" className="iblock left">
                              <div>
                                  <div id="dialog-header">
                                      <div className="dialog-header">
                                          <div id="dialog-header" className="center header-5 ">

                                              Edit Label for {phonenumber}

                                          </div>
                                          <div id="dialog-description" className="center description"></div>

                                          <div className="web-icon-xs web-icon-xs-x dialog-close"></div>

                                      </div>
                                  </div>
                                  <div id="edit-did-label">
                                      <form className="form" >
                                          <div id="div_a852_0">
                                              <div className="mblock body-copy-1 confirm-number-label-hd" id="div_a852_1">Label:</div>
                                              <div className="mblock rel confirm-number-input-hd">
                                                  <input name="label" id="number-label" type="text" tabIndex="0" placeholder="(optional –&nbsp;leave blank for no label)" maxLength="100" defaultValue={label}  onChange={onMainLineLabelTextChange}/>
                                              </div>
                                          </div>
                                          <div className="center dialog-footer dialog-buttons">
                                              <div onClick={onDismiss} className="iblock secondary-button cancel-button" tabIndex="0">Cancel</div>
                                              <div onClick={onSavePhonenumber} className="iblock primary-button button-left confirm-button" tabIndex="0">Confirm</div>
                                          </div>
                                      </form>
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
  </div>
  </div>
   );}

const viewPopupDataForFixedAndRoundRobin = (viewPopupDataForFixedAndRoundRobinData,showViewPopupForFixedAndRorundRobin) => {
  return (<div id="dialog">

{
  viewPopupDataForFixedAndRoundRobinData ?
  <table className="h100">
  <tbody><tr>
        <td id="dialog-holder" className="center  ">
      <div id="dialog-wrapper" className="iblock left">
        <div className="web-icon-xs web-icon-xs-x dialog-close signup2017" ></div>
        <div id="dialog-main" className="iblock left"><div id="agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww"><div className="call-routing-dialog">
  <div id="cr-dialog-header" className="call-routing-dialog-header"><div className="dialog-header-with-description"><div id="dialog-header" className="center header-7">
  <div className="dialog-header-with-description-title">Fixed Ring Order</div>


  <div className="dialog-header-with-description-details">Choose the order you'd like Agents rung out. Keep in mind that this order won't change unless you revisit this page.</div>


</div>

  <div className="web-icon-xs web-icon-xs-x dialog-close dialog-header-with-description-close"></div>


</div></div>
  <div className="call-routing-dialog-body">

    <table className="call-routing-dialog-body-content">
      <tbody className="call-routing-dialog-body-content-details">


      <tr>
        <td className="index-col">1</td>
        <td className="rel data-col cr-dropzone" id="cr-dropzone-index-1">
          <div className="snappy cr-draggable" id="cr-draggable-id-agxzfnViZXItdm9pY2VyGAsSC1VzZXJQcm9maWxlGICAmN2b-oULDA" draggable="true">
            <table>
              <tbody>




              </tbody>
            </table>
            <div className="snappy move-bars-handle">

            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="2" className="empty-row"></td>
      </tr>


      </tbody>
    </table>


  </div>
  <div id="cr-dialog-footer" className="dialog-footer">
    <div id="cr-save-changes-btn" className="primary-button center ">Save Changes</div>
  </div>
</div></div></div>
        <div id="dialog-loading" >
          <div className="dialog-loading-bg"></div>
          <div className="dialog-loading-img"></div>
        </div>
      </div>
    </td>
  </tr>
</tbody>
</table>
  : undefined
}

</div>);
}

export {
   editMainLinePhoneNumber,viewPopupDataForFixedAndRoundRobin
}
