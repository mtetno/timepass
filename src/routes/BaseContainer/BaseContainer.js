import React from 'react';
const appLogo = require("../../styles/img/app-logo.png");
import DashboardSideHeader from '../../components/shared/DashboardSideHeader';
import '../Dashboard/components/DashboardMarkup.scss';
import {browserHistory} from 'react-router';

class BaseContainer extends React.Component {

  render() {

    const onAppLogoMenuClick = () => {
      browserHistory.push("/dashboard");
    };

    const onAccountMenuClick = () => {
      browserHistory.push("/accounts");
    };

    return (<div className="base-content-height">
      <div id="overlay" className="snappy   app-footer-none app-subheader-default app-overlay-none app-sidebar-none app-header-default">
        <div></div>
      </div>

      <table id="app-container" className="t100" tabIndex="0">

        <tbody>
          <tr>
            <td id="subheader" className="  app-footer-none app-subheader-default app-overlay-none app-sidebar-none app-header-default">
              <div>
                <div className="header-main">
                  <div id="header-logo" className="middle">
                    <div className="icon-container" onClick={onAppLogoMenuClick}>
                      <img src={appLogo} className="logo-size-small"/>
                    </div>
                  </div>
                  <div className="header-content middle">
                    <div className="breadcrumbs mblock">
                      <a href="#" className="breadcrumb btext">Your Settings</a>
                    </div>
                    {
                       this.props.savingDialog
                    }
                    <div></div>
                    {this.props.savingDialogComplete}
                    <div className="cc-dasboard mblock rfloat"></div>
                  </div>
                </div>
                <div className="alertbar">
                  <div>
                    <div id="alertbar">
                      <table id="alertbar-table" className="hide header-notification  subhead-11">
                        <tbody>
                          <tr >
                            <td id="alertbar-logo"></td>
                            <td id="alertbar-content"></td>
                            <td id="alertbar-link">
                              <a className="alert-link wlink mblock   ">
                                <div className="alertbar-external-link"></div>
                              </a>
                            </td>
                          </tr>
                          <tr className="hide">
                            <td id="alertbar-child-view"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <tr id="tr_368b_0">
            <td className="rel" id="td_368b_0">
              <div id="content-overlay" className="snappy"></div>
              <table className="t100">
                <tbody>
                  <tr>
                    <td id="header" className="  app-footer-none app-subheader-default app-overlay-none app-sidebar-none app-header-default">
                      <DashboardSideHeader/>
                    </td>
                    <td id="sidebar" className= {this.props.middleSideBar ? "  app-footer-none app-subheader-default app-overlay-none   app-header-default" : "  app-footer-none app-subheader-default app-overlay-none   app-header-default app-sidebar-none"}>
                      {this.props.middleSideBar}
                    </td>
                    <td id="center-column" className="rel">
                      <table className="t100">
                        <tbody>
                          <tr>
                            {this.props.contentTd}
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    {this.props.rightSideBar}
                  </tr>
                </tbody>
              </table>

            </td>
          </tr>

          <tr>
            <td id="footer" className="  app-footer-none app-subheader-default app-overlay-none app-sidebar-none app-header-default">
              <div></div>
            </td>
          </tr>

        </tbody>
      </table>

      <div id="wizard-overlay" className="snappy"></div>
    </div>);
  }

}

export default BaseContainer;
