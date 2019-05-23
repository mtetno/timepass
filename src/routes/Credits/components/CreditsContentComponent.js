import React from 'react';
import './CreditsMarkup.scss';

const CreditsContentComponent = () => {
  return (<div>
    <form className="form form-main">
      <div id="credits-balance">
        <div>
          <div className="form-block-hd header-2">Your balance</div>
          <div className="form-block info-sec">

            <div className="body-copy-2 form-block-desc">
              Credits are used when team members receive calls to your toll-free numbers, make outgoing international calls, or send texts to international numbers.

            </div>

            <div className="mblock">
              <div className="web-icon-xl web-icon-xl-globe mblock"></div>
              <div className="header-2 mblock credit-balance">

                CAD $0.00

              </div>
              <div className="body-copy-2">Excludes calls currently in progress.</div>
            </div>

            <div id="add-value" data-toggle="modal" data-target="#exampleModal1" className="iblock primary-button" >Add Value</div>

            <div data-toggle="modal" data-target="#exampleModal2" id="toggle-intl" className="iblock secondary-button">

              Enable Int'l Service

            </div>

            <div className="iblock big-margin">
              <a className="wlink" href="/rates" target="_blank">View rates</a>
            </div>

          </div>
        </div>
      </div>
      <div id="credits-usage">
        <div className="list-container">
          <div className="form-block-hd form-block-hd-with-border">
            <div className="header-2 iblock">Usage</div>
            <div id="usage-call-type-select" className="iblock usage-filter-select">
              <div className="select-menu-view">
                <div className="select-menu snappy  closed ">
                  <div  className="sm-input-shim" tabIndex="2">

                    <input type="text" defaultValue="All" className="snappy sm-input sm-item-value- " tabIndex="-1"/></div>
                    <div id="nav" className="sm-menu">
                      <div></div>
                      <ul className="sm-list">

                        <li className="sm-item" id="sm-item--" data-value="">

                          <a className="sm-text sm-item-value- " href="javascript:void(0)" title="All">

                            All
                          </a>
                        </li>

                        <li className="sm-item" id="sm-item--tollfree" data-value="tollfree">

                          <a className="sm-text sm-item-value-tollfree " href="javascript:void(0)" title="Toll Free">

                            Toll Free
                          </a>
                        </li>

                        <li className="sm-item" id="sm-item--international" data-value="international">

                          <a className="sm-text sm-item-value-international " href="javascript:void(0)" title="International Call">

                            International Call
                          </a>
                        </li>

                        <li className="sm-item" id="sm-item--international_pin" data-value="international_pin">

                          <a className="sm-text sm-item-value-international_pin " href="javascript:void(0)" title="International PIN Call">

                            International PIN Call
                          </a>
                        </li>

                        <li className="sm-item" id="sm-item--intl_sms" data-value="intl_sms">

                          <a className="sm-text sm-item-value-intl_sms " href="javascript:void(0)" title="International SMS">

                            International SMS
                          </a>
                        </li>

                        <li className="sm-item" id="sm-item--fax" data-value="fax">

                          <a className="sm-text sm-item-value-fax " href="javascript:void(0)" title="Fax">

                            Fax
                          </a>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div id="usage-month-select" className="iblock usage-filter-select">
                <div className="select-menu-view">
                  <div className="select-menu snappy  closed ">
                    <div  className="sm-input-shim" tabIndex="1">

                      <input type="text" defaultValue="Feb 2019" className="snappy sm-input sm-item-value-02-2019 " tabIndex="-1"/></div>
                      <div id="nav2" className="sm-menu">
                        <div></div>
                        <ul className="sm-list">

                          <li className="sm-item" id="sm-item--02-2019" data-value="02-2019">

                            <a className="sm-text sm-item-value-02-2019 " href="javascript:void(0)" title="Feb 2019">

                              Feb 2019
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--01-2019" data-value="01-2019">

                            <a className="sm-text sm-item-value-01-2019 " href="javascript:void(0)" title="Jan 2019">

                              Jan 2019
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--12-2018" data-value="12-2018">

                            <a className="sm-text sm-item-value-12-2018 " href="javascript:void(0)" title="Dec 2018">

                              Dec 2018
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--11-2018" data-value="11-2018">

                            <a className="sm-text sm-item-value-11-2018 " href="javascript:void(0)" title="Nov 2018">

                              Nov 2018
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--10-2018" data-value="10-2018">

                            <a className="sm-text sm-item-value-10-2018 " href="javascript:void(0)" title="Oct 2018">

                              Oct 2018
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--09-2018" data-value="09-2018">

                            <a className="sm-text sm-item-value-09-2018 " href="javascript:void(0)" title="Sep 2018">

                              Sep 2018
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--08-2018" data-value="08-2018">

                            <a className="sm-text sm-item-value-08-2018 " href="javascript:void(0)" title="Aug 2018">

                              Aug 2018
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--07-2018" data-value="07-2018">

                            <a className="sm-text sm-item-value-07-2018 " href="javascript:void(0)" title="Jul 2018">

                              Jul 2018
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--06-2018" data-value="06-2018">

                            <a className="sm-text sm-item-value-06-2018 " href="javascript:void(0)" title="Jun 2018">

                              Jun 2018
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--05-2018" data-value="05-2018">

                            <a className="sm-text sm-item-value-05-2018 " href="javascript:void(0)" title="May 2018">

                              May 2018
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--04-2018" data-value="04-2018">

                            <a className="sm-text sm-item-value-04-2018 " href="javascript:void(0)" title="Apr 2018">

                              Apr 2018
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--03-2018" data-value="03-2018">

                            <a className="sm-text sm-item-value-03-2018 " href="javascript:void(0)" title="Mar 2018">

                              Mar 2018
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--02-2018" data-value="02-2018">

                            <a className="sm-text sm-item-value-02-2018 " href="javascript:void(0)" title="Feb 2018">

                              Feb 2018
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--01-2018" data-value="01-2018">

                            <a className="sm-text sm-item-value-01-2018 " href="javascript:void(0)" title="Jan 2018">

                              Jan 2018
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--12-2017" data-value="12-2017">

                            <a className="sm-text sm-item-value-12-2017 " href="javascript:void(0)" title="Dec 2017">

                              Dec 2017
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--11-2017" data-value="11-2017">

                            <a className="sm-text sm-item-value-11-2017 " href="javascript:void(0)" title="Nov 2017">

                              Nov 2017
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--10-2017" data-value="10-2017">

                            <a className="sm-text sm-item-value-10-2017 " href="javascript:void(0)" title="Oct 2017">

                              Oct 2017
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--09-2017" data-value="09-2017">

                            <a className="sm-text sm-item-value-09-2017 " href="javascript:void(0)" title="Sep 2017">

                              Sep 2017
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--08-2017" data-value="08-2017">

                            <a className="sm-text sm-item-value-08-2017 " href="javascript:void(0)" title="Aug 2017">

                              Aug 2017
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--07-2017" data-value="07-2017">

                            <a className="sm-text sm-item-value-07-2017 " href="javascript:void(0)" title="Jul 2017">

                              Jul 2017
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--06-2017" data-value="06-2017">

                            <a className="sm-text sm-item-value-06-2017 " href="javascript:void(0)" title="Jun 2017">

                              Jun 2017
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--05-2017" data-value="05-2017">

                            <a className="sm-text sm-item-value-05-2017 " href="javascript:void(0)" title="May 2017">

                              May 2017
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--04-2017" data-value="04-2017">

                            <a className="sm-text sm-item-value-04-2017 " href="javascript:void(0)" title="Apr 2017">

                              Apr 2017
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--03-2017" data-value="03-2017">

                            <a className="sm-text sm-item-value-03-2017 " href="javascript:void(0)" title="Mar 2017">

                              Mar 2017
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--02-2017" data-value="02-2017">

                            <a className="sm-text sm-item-value-02-2017 " href="javascript:void(0)" title="Feb 2017">

                              Feb 2017
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--01-2017" data-value="01-2017">

                            <a className="sm-text sm-item-value-01-2017 " href="javascript:void(0)" title="Jan 2017">

                              Jan 2017
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--12-2016" data-value="12-2016">

                            <a className="sm-text sm-item-value-12-2016 " href="javascript:void(0)" title="Dec 2016">

                              Dec 2016
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--11-2016" data-value="11-2016">

                            <a className="sm-text sm-item-value-11-2016 " href="javascript:void(0)" title="Nov 2016">

                              Nov 2016
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--10-2016" data-value="10-2016">

                            <a className="sm-text sm-item-value-10-2016 " href="javascript:void(0)" title="Oct 2016">

                              Oct 2016
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--09-2016" data-value="09-2016">

                            <a className="sm-text sm-item-value-09-2016 " href="javascript:void(0)" title="Sep 2016">

                              Sep 2016
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--08-2016" data-value="08-2016">

                            <a className="sm-text sm-item-value-08-2016 " href="javascript:void(0)" title="Aug 2016">

                              Aug 2016
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--07-2016" data-value="07-2016">

                            <a className="sm-text sm-item-value-07-2016 " href="javascript:void(0)" title="Jul 2016">

                              Jul 2016
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--06-2016" data-value="06-2016">

                            <a className="sm-text sm-item-value-06-2016 " href="javascript:void(0)" title="Jun 2016">

                              Jun 2016
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--05-2016" data-value="05-2016">

                            <a className="sm-text sm-item-value-05-2016 " href="javascript:void(0)" title="May 2016">

                              May 2016
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--04-2016" data-value="04-2016">

                            <a className="sm-text sm-item-value-04-2016 " href="javascript:void(0)" title="Apr 2016">

                              Apr 2016
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--03-2016" data-value="03-2016">

                            <a className="sm-text sm-item-value-03-2016 " href="javascript:void(0)" title="Mar 2016">

                              Mar 2016
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--02-2016" data-value="02-2016">

                            <a className="sm-text sm-item-value-02-2016 " href="javascript:void(0)" title="Feb 2016">

                              Feb 2016
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--01-2016" data-value="01-2016">

                            <a className="sm-text sm-item-value-01-2016 " href="javascript:void(0)" title="Jan 2016">

                              Jan 2016
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--12-2015" data-value="12-2015">

                            <a className="sm-text sm-item-value-12-2015 " href="javascript:void(0)" title="Dec 2015">

                              Dec 2015
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--11-2015" data-value="11-2015">

                            <a className="sm-text sm-item-value-11-2015 " href="javascript:void(0)" title="Nov 2015">

                              Nov 2015
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--10-2015" data-value="10-2015">

                            <a className="sm-text sm-item-value-10-2015 " href="javascript:void(0)" title="Oct 2015">

                              Oct 2015
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--09-2015" data-value="09-2015">

                            <a className="sm-text sm-item-value-09-2015 " href="javascript:void(0)" title="Sep 2015">

                              Sep 2015
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--08-2015" data-value="08-2015">

                            <a className="sm-text sm-item-value-08-2015 " href="javascript:void(0)" title="Aug 2015">

                              Aug 2015
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--07-2015" data-value="07-2015">

                            <a className="sm-text sm-item-value-07-2015 " href="javascript:void(0)" title="Jul 2015">

                              Jul 2015
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--06-2015" data-value="06-2015">

                            <a className="sm-text sm-item-value-06-2015 " href="javascript:void(0)" title="Jun 2015">

                              Jun 2015
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--05-2015" data-value="05-2015">

                            <a className="sm-text sm-item-value-05-2015 " href="javascript:void(0)" title="May 2015">

                              May 2015
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--04-2015" data-value="04-2015">

                            <a className="sm-text sm-item-value-04-2015 " href="javascript:void(0)" title="Apr 2015">

                              Apr 2015
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--03-2015" data-value="03-2015">

                            <a className="sm-text sm-item-value-03-2015 " href="javascript:void(0)" title="Mar 2015">

                              Mar 2015
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--02-2015" data-value="02-2015">

                            <a className="sm-text sm-item-value-02-2015 " href="javascript:void(0)" title="Feb 2015">

                              Feb 2015
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--01-2015" data-value="01-2015">

                            <a className="sm-text sm-item-value-01-2015 " href="javascript:void(0)" title="Jan 2015">

                              Jan 2015
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--12-2014" data-value="12-2014">

                            <a className="sm-text sm-item-value-12-2014 " href="javascript:void(0)" title="Dec 2014">

                              Dec 2014
                            </a>
                          </li>

                          <li className="sm-item" id="sm-item--11-2014" data-value="11-2014">

                            <a className="sm-text sm-item-value-11-2014 " href="javascript:void(0)" title="Nov 2014">

                              Nov 2014
                            </a>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="stats-export mblock" id="div_ba01_0">
                  <div id="export-credit-updates" className="mblock icon-text" >
                    <div className="web-icon web-icon-xs web-icon-xs-download mblock"></div>
                    <div className="wlink iblock">Export Credit Usage<br/>(.csv)</div>
                    </div>
                  </div>
                </div>
                <div className="form-block info-sec">
                  <table className="user-table" id="table_ba01_0">
                    <thead>
                      <tr>
                        <th>Date/time</th>
                        <th>Type</th>
                        <th>Customer Ref</th>
                        <th>Team member/Dept.</th>
                        <th>Number</th>
                        <th>Duration</th>
                        <th>Cost</th>
                      </tr>
                    </thead>
                    <tbody id="credits-usage-list">
                    </tbody>
                  </table>

                  <div className="body-copy-2 center" id="div_ba01_1">No usage yet.</div>

                </div>
              </div>
            </div>
          </form>
        </div>
          );
};

export default CreditsContentComponent;
