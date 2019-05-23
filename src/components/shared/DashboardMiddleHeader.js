import React from 'react';


const DashboardMiddleHeader = () => {
  return (<div>
    <div className="header-sub-leftbar middle">
      <div className="header-rborder middle">
        <div className="header-dropdown-outer" id="header-dropdown-content">
          <div className="select-menu-view">
            <div className="select-menu snappy  closed header-dropdown-inner">
              <div className="sm-input-shim" tabIndex="0">
                <input id="offices_dropdown" name="offices_dropdown" type="text" defaultValue="Easytel" className="snappy sm-input sm-item-value-6298648923734016 " tabIndex="-1"/>
              </div>
              <div className="sm-menu">
                <div></div>
                <ul className="sm-list">
                  <li className="sm-item sm-item-disabled" id="sm-item-offices_dropdown-office-header" data-value="office-header" data-no-select="true">
                    <a className="sm-text sm-item-value-office-header " href="javascript:void(0)" title="OFFICES">

                      OFFICES
                    </a>
                  </li>
                  <li className="sm-item" id="sm-item-offices_dropdown-6298648923734016" data-value="6298648923734016">
                    <a className="sm-text sm-item-value-6298648923734016 " href="javascript:void(0)" title="Easytel">

                      Easytel
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="rel">
      <div id="sidebar-inner">
        <ul id="sidebar-ul" className="sidebar-tabs">
          <li id="sidebar-officesettings" className="tab-focus tab-selected">
            <a href="#officesettings" id="office-settings" className="sidebar-header">Office</a>
            <ul className="sidebar-subtabs" id="ul_8f0a_0">
              <li>
                <a id="sidebar-subtab-officesettings" href="#officesettings">Office Settings</a>
              </li>
              <li>
                <a id="sidebar-subtab-accounts" className="subtab-focus subtab-selected" href="#accounts">Team</a>
              </li>
              <li>
                <a id="sidebar-subtab-licenses" href="#licenses">Licenses</a>
              </li>
              <li>
                <a id="sidebar-subtab-groupagxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww" href="#mainline/agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww">Main Line</a>
              </li>
              <li>
                <a id="sidebar-subtab-phones" href="#office/phones">Desk Phones</a>
              </li>
              <li>
                <a id="sidebar-subtab-porting" href="#porting">Number Porting</a>
              </li>
            </ul>
          </li>
          <li id="sidebar-departments">
            <div id="office-departments" className="sidebar-header">
              <div className="mblock">
                Departments
              </div>
              <div className="mblock add-button">
                <div id="sidebar-subtab-addgroup" className="mblock tooltip-add-dept">
                  <div className="abs mblock sidebar-tooltip">Add a Department</div>
                </div>
              </div>
            </div>
            <ul className="sidebar-subtabs" id="ul_8f0a_1">
              <li>
                <a id="sidebar-subtab-groupagxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAqIurw-QKDA" className="sidebar-group ellipsis" href="#groups/agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAqIurw-QKDA" title="iOS Support">iOS Support</a>
              </li>
              <li>
                <a id="sidebar-subtab-groupagxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAqIusj_IKDA" className="sidebar-group ellipsis" href="#groups/agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAqIusj_IKDA" title="Sales">Sales</a>
              </li>
              <li>
                <a id="sidebar-subtab-groupagxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAqMP4wLkJDA" className="sidebar-group ellipsis" href="#groups/agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAqMP4wLkJDA" title="Support">Support</a>
              </li>
            </ul>
          </li>
          <li id="sidebar-billing">
            <a href="#billing" className="sidebar-header">Billing</a>
            <ul className="sidebar-subtabs" id="ul_8f0a_2">
              <li>
                <a id="sidebar-subtab-billing" href="#billing">Billing Summary</a>
              </li>
              <li>
                <a id="sidebar-subtab-credits" href="#credits">

                  Credits

                </a>
              </li>
            </ul>
          </li>
          <li id="sidebar-privacy">
            <a href="#privacy" className="sidebar-header">Privacy and Legal</a>
          </li>
        </ul>
      </div>
    </div>
  </div>);
};

export default DashboardMiddleHeader;
