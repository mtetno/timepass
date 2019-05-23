import React from 'react';
import PropTypes from 'prop-types'
import './BillingMarkup.scss';


const BillingContent = () => {
  return ( <div>
      <div className="form form-main">
          <div id="reseller-contact"></div>
          <div id="plan-information">
              <div>
                  <div className="form-block-hd">
                      <div className="rfloat" id="div_7f24_0">

                          <div id="buy-licenses" className="iblock master-button" data-toggle="modal" data-target="#exampleModal1">Buy Licenses</div>

                          <div data-toggle="modal" data-target="#exampleModal2" id="update-account-type-to-pro" className="iblock master-button">Upgrade to Pro</div>

                      </div>
                      <div className="header-2 capitalize">current plan: standard</div>
                  </div>

                  <div className="body-copy-1" id="div_7f24_1">

                      <div className="form-block bborder" id="div_7f24_2">
                          <div className="iblock" id="div_7f24_3">
                              <div className="body-copy-2">Current billing cycle</div>
                              <div>01/17/19 - 02/17/19</div>
                          </div>
                          <div className="iblock" id="div_7f24_4">
                              <div className="body-copy-2">Next billing date</div>
                              <div>02/17/19</div>
                          </div>
                      </div>

                      <div className="form-block bborder" id="div_7f24_5">
                          <div className="rfloat">CAD $50.00</div>
                          <div className="iblock" id="div_7f24_6">
                              <div className="body-copy-2">Dialpad Talk</div>
                          </div>
                          <div className="iblock" id="div_7f24_7">

                              <div>2 x CAD $25/mo</div>

                              <div className="body-copy-2">Unlimited calling and messaging</div>
                          </div>
                      </div>

                      <div className="form-block" id="div_7f24_8">

                          <div className="header-2">
                              <div className="rfloat">CAD $50.00</div>
                          </div>
                          <div id="convert-to-yearly" className="wlink rfloat">
                              <div className="web-icon web-icon-xs web-icon-xs-info mblock" id="div_7f24_9"></div>
                              Save CAD $10 / month with annual billing
                          </div>

                          <div className="body-copy-2 bmargin">

                              Next month's total

                          </div>
                          <div>Estimated total at the end of this billing cycle, excluding any taxes or fees.</div>
                      </div>

                  </div>
              </div>
          </div>
          <div id="payment-information">
              <div>
                  <div className="form-block-hd header-2 form-block-hd-with-border">Payment Information</div>
                  <div className="form form-block">

                      <div id="div_7f24_10">
                          <div id="payment-info-wrapper" className="float" title="Waqas">
                              <input id="payment-info" type="text" defaultValue="Waqas" disabled=""/>
                          </div>
                          <div id="div_7f24_11">
                              <div className="web-icon-m web-icon-m-mastercard mblock"></div>
                              <div className="mblock medium-emph" id="div_7f24_12">(2694)</div>
                          </div>
                      </div>

                      <div id="edit-payment-method" className="wlink iblock float" data-toggle="modal" data-target="#exampleModal3">Edit</div>

                  </div>
              </div>
          </div>
          <div id="billing-contact"></div>
          <div id="upcoming-charges"></div>
          <div id="billing-history">
              <div>
                  <div className="form-block-hd header-2 form-block-hd-with-border">Billing History</div>
                  <div className="form form-block body-copy-2" id="div_7f24_13">
                      <div id="no-invoices">There is currently no billing history for your account. When available it will show up here.</div>
                      <div className="list-container">
                          <table className="user-table">

                              <thead>
                                  <tr>
                                      <th className="w1-5 left">Date</th>
                                      <th className="w1-5 left">Status</th>
                                      <th className="w1-5 left">Description</th>

                                      <th className="w1-5 left">Amount</th>

                                      <th className="w1-5 left"></th>
                                  </tr>
                              </thead>

                              <tbody id="invoice-list">

                                  <tr className="item">
                                      <td className="w1-5 left">
                                          <div><a className="wlink" href="/billing/invoice/5645986528100352" target="_blank" id="a_7f24_0">January 17th, 2019</a></div>
                                      </td>
                                      <td className="w1-5 left">
                                          <div>Paid</div>
                                      </td>
                                      <td className="w1-5 left">
                                          <div>Pro-rated charges</div>
                                      </td>

                                      <td className="w1-5 left">
                                          <div>CAD $32.64</div>
                                      </td>

                                      <td className="w1-5 left">
                                          <div className="wlink add-note" data-toggle="modal" data-target="#exampleModal4">Add note</div>
                                      </td>
                                  </tr>
                                  <tr className="item odd">
                                      <td className="w1-5 left">
                                          <div><a className="wlink" href="/billing/invoice/5873785419464704" target="_blank" id="a_7f24_1">January 17th, 2019</a></div>
                                      </td>
                                      <td className="w1-5 left">
                                          <div>Paid</div>
                                      </td>
                                      <td className="w1-5 left">
                                          <div>Recurring charges</div>
                                      </td>

                                      <td className="w1-5 left">
                                          <div>CAD $32.64</div>
                                      </td>

                                      <td className="w1-5 left">
                                          <div className="wlink add-note" data-toggle="modal" data-target="#exampleModal4">Add note</div>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>

              </div>
          </div>

          <div className="body-copy-2" id="div_7f24_14">Would you like to cancel your Dialpad service? <span id="cancel-service" className="wlink">Click here.</span></div>

      </div>
  </div>);

};

export default BillingContent;
