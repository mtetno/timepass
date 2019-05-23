import React from 'react';
import './DashboardSideHeader.scss';

const userLogo = require("../../styles/img/user-logo.png");
const settingLogo = require("../../styles/img/settings-logo.png");
const arrowLogo = require("../../styles/img/arrow-logo.png");
const bellLogo = require("../../styles/img/bell-logo.png");
const circleAppLogo = require("../../styles/img/circle-app-logo.png");
const uShapeLogo = require("../../styles/img/arrow-logo.png");
const questionLogo = require("../../styles/img/u-logo.png");
const headPhoneLogo = require("../../styles/img/ic_headphone.png");

import {browserHistory} from 'react-router';

const DashboardSideHeader = () => {

  const onAccountMenuClick = () => {
  //  browserHistory.push("/accounts");
  };

  const onAdminClick = () => {
    browserHistory.push("/mainline");
  };

  const onAppLogoMenuClick = () => {
    browserHistory.push("/dashboard");
  };

  return ( <div>
    <div className="header-sidenav">
      <div className="header-sidenav-top">
        <div className="header-icons header-icon-selected" id="personal-logo">
          <div className="header-unselected-icon tooltip-personal">
            <div className="icon-container" onClick={onAccountMenuClick}>
              <img src={userLogo} className="logo-size-small"/>
            </div>
            <div className="tooltip-right">Your Settings</div>
          </div>
        </div>

        <div className="header-icons" id="admin-logo">
          <div className="header-unselected-icon tooltip-admin">
            <div className="icon-container">
              <img src={settingLogo} className="logo-size-small" onClick={onAdminClick}/>
            </div>
            <div className="tooltip-right">Admin Settings</div>
          </div>
        </div>

        <div className="header-icons" id="callcenters-logo">
          <div className="header-unselected-icon tooltip-callcenters fade-in">
            <div className="icon-container">
              <img src={headPhoneLogo} className="logo-size-small"/>
            </div>
            <div className="tooltip-right">Call Centers</div>
          </div>
        </div>

        <div className="header-icons" id="analytics-logo">
          <div className="header-unselected-icon tooltip-analytics">
            <div className="icon-container">
              <img src={arrowLogo} className="logo-size-small"/>
            </div>
            <div className="tooltip-right">Analytics</div>
          </div>
        </div>
      </div>
      <div className="header-sidenav-bottom">
        <div id="header-alerts">
          <span id="header-welcome" className="mblock rel">
            <div className="mblock">
              <div id="wt-link" className="mblock">

                <div className="icon-container">
                  <img src={bellLogo} className="logo-size-small"/>
                </div>
                <div id="help-callout" className="hide"></div>
              </div>
              <div id="wt-popup" className="dialog2 welcome-tips hide snappy fade-out">
                <div className="dialog2-header">Tips to get you started</div>
                <div className="dialog2-content">
                  <div className="wt-image"></div>
                  <ol className="wt-ordered-list">

                    <div className="wt-item">
                      <a className="wt-done" href="#accounts" sectionid="accounts-block" event="manage_accounts_view:rendered">Invite people to your team</a>
                    </div>

                    <div className="wt-item">
                      <a className="wt-done" href="#groups/agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww" sectionid="assigned-operators" event="manage_operators_view:rendered">Set up your company</a>
                    </div>

                    <div className="wt-item">
                      <a className="wlink" href="/download" target="_blank">Download the Dialpad apps</a>
                    </div>

                    <div className="wt-item">
                      <a className="wt-done" href="#settings/devices" sectionid="user-devices" event="forwarding_numbers_view:rendered">Forward calls to your mobile phone</a>
                    </div>

                    <div className="wt-item">
                      <a className="wt-done" href="#settings/voicemail" sectionid="user-voicemail-greeting" event="greetings_view:rendered">Record your voicemail greeting</a>
                    </div>

                  </ol>

                </div>
              </div>
            </div>
          </span>
        </div>
        <a href="/app" target="_blank">
          <div id="dialpad-app-icon">
            <div className="header-bot-icons tooltip-dialpad">
              <div className="icon-container">
                <img src={circleAppLogo} className="logo-size-small"/>
              </div>
              <div className="tooltip-right-bot">Launch Dialpad</div>
            </div>
          </div>
        </a>

        <a href="https://www.uberconference.com" target="_blank">
          <div id="uberconference-icon">
            <div className="header-bot-icons tooltip-uberconference">
              <div className="icon-container">
                <img src={uShapeLogo} className="logo-size-small"/>
              </div>
              <div className="tooltip-right-bot">Launch UberConference</div>
            </div>
          </div>
        </a>

        <a href="https://dialpad.com/helplogin" target="_blank">
          <div id="help-icon">
            <div className="header-bot-icons tooltip-help">
              <div className="icon-container">
                <img src={questionLogo} className="logo-size-small"/>
              </div>
              <div className="tooltip-right-bot">Open Help Center</div>
            </div>
          </div>
        </a>

        <div id="header-account" className="header-profile-pic">
          <div id="header-user-pic" className="iblock profile-picture-sm header-menu-hover">
            <div className="profile-picture-holder circle " id="div_368b_0"></div>
          </div>
          <div className="header-account-menu-callout hide"></div>
          <div id="header-account-menu" className="abs hide">
            <div className="header-account-menu-top">
              <span id="header-username">Easytel Support</span>
              <br></br>
              <span className="header-phone-numbers">(289) 919-9973</span>
            </div>
            <a href="/company" target="_blank">
              <div className="header-account-menu-row header-account-menu-logout-row">About Dialpad</div>
            </a>
            <a href="http://blog.dialpad.com/" target="_blank">
              <div className="header-account-menu-row">Blog</div>
            </a>
            <a href="/legal" target="_blank">
              <div className="header-account-menu-row">Legal</div>
            </a>
            <a className="header-logout">
              <div className="header-account-menu-row header-account-menu-logout-row">Log out</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>);
};

export default DashboardSideHeader;
