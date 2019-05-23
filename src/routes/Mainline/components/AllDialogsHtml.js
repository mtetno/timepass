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

export {
   editMainLinePhoneNumber,
}
