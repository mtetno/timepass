import React from 'react';
import PropTypes from 'prop-types'
import './AccountMarkup.scss';
import DashboardSideHeader from '../../../components/shared/DashboardSideHeader';
import DashboardMiddleHeader from '../../../components/shared/DashboardMiddleHeader';
import {isEmpty} from 'lodash';

const AccountMarkup = ({accounts}) => {
  return <div className="dashboard-main-css">
    <div className="dashboardContainer">
      <div className="custom-right">
        <div className="nestedCointainer">
          <div className="nestedCointainerHeader">
            <div className="breadcrumbs mblock">
              <a href="#" className="breadcrumb btext">ADMIN /</a>
            </div>
          </div>
        </div>
        <div className="user-profile-container">
          <div className="account-container-body">

            <div id="manage-accounts-view" className="scroll-y rel">
              <form className="form form-main">
                <div className="sec-tabs">
                  <div id="accounts-tab" className="sec-tab-selected">Accounts

                    <div className="iblock" id="tab-accounts-count"></div>
                  </div>
                </div>
                <div id="accounts-block">
                  <div className="rel">
                    <div className="form-block-hd header-2">Accounts</div>
                    <div id="div_8f0a_1">
                      <div id="accounts-count-view" className="mblock header-1">
                        <div>
                          <div>

                            2 People

                          </div>
                        </div>
                      </div>
                      <div className="mblock">
                        <div id="add-team-members" className="primary-button pancake-btn">Add team members</div>
                      </div>
                    </div>
                    <div className="stats-export">
                      <div id="export-team" className="mblock icon-text">
                        <div className="web-icon web-icon-xs web-icon-xs-download mblock"></div>
                        <div className="wlink iblock">Export Team List

                          <br/>(.csv)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-block" id="div_8f0a_2">
                    <div id="accounts">
                      <div>
                        <div className="body-copy-1" id="div_8f0a_3">
                          <div className="iblock">
                            <div className="web-search">
                              <div className="web-icon-xs web-icon-xs-search"></div>
                              <input type="text" placeholder="" autoComplete="off" id="input_8f0a_0" className="web-search team-search-input"/>
                              <div id="account-spinner" className="spinner hide"></div>
                            </div>
                          </div>
                        </div>
                        <div id="accounts-browse-view">
                          <div className="list-container">
                            <table className="user-table">
                              <thead>
                                <tr>
                                  <th className="user-table-name">Name</th>
                                  <th>Number</th>
                                  <th>Email</th>
                                  <th>Account details</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody id="accounts-list">
                                {
                                  isEmpty(accounts) === false
                                    ? <tr>
                                        <td>
                                          <div className="body-copy-1">{accounts.name}</div>
                                        </td>
                                        <td>
                                          {accounts.number.map((no) => <div key={no} className="">{no}</div>)}
                                        </td>
                                        <td>
                                          <div className="">
                                            <a className="wlink" href="mailto:w.mukhtar@live.ca">{accounts.email}</a>
                                          </div>
                                        </td>
                                        <td id="account-details-5996521970073600">
                                          <div className="body-copy-2">
                                            <div className="account-row-icon account-row-admin mblock">
                                              <div className="middle web-icon-m web-icon-m-admin opaque-icon"></div>
                                              <div className="tooltip simple-trans fade-out tooltip-button">
                                                <div className="tooltip-container hide">
                                                  <div className="tooltip-content">Administrator</div>
                                                  <div className="tooltip-callout tooltip-callout-center"></div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="account-action">
                                            <div className="select-menu-view">
                                              <div className="select-menu snappy  closed row-
          -select-menu">
                                                <div className="sm-input-shim" tabIndex="0"></div>
                                                <div id="nav2" className="sm-menu">
                                                  <div></div>
                                                  <ul className="sm-list">
                                                    <li className="sm-item" id="sm-item--add_uc" data-value="add_uc">
                                                      <a className="sm-text sm-item-value-add_uc " title="Add UberConference">

                                                        Add UberConference
                                                      </a>
                                                    </li>
                                                    <li className="sm-item" id="sm-item--admin" data-value="admin">
                                                      <a className="sm-text sm-item-value-admin " href="javascript:void(0)" title="Remove admin privileges">

                                                        Remove admin privileges
                                                      </a>
                                                    </li>
                                                    <li className="sm-item" id="sm-item--deskphone" data-value="deskphone">
                                                      <a className="sm-text sm-item-value-deskphone " href="javascript:void(0)" title="Add desk phone">

                                                        Add desk phone
                                                      </a>
                                                    </li>
                                                    <li className="sm-item" id="sm-item--add_fax" data-value="add_fax">
                                                      <a className="sm-text sm-item-value-add_fax " href="javascript:void(0)" title="Add a fax line">

                                                        Add a fax line
                                                      </a>
                                                    </li>
                                                    <li className="sm-item" id="sm-item--analytics" data-value="analytics">
                                                      <a className="sm-text sm-item-value-analytics " href="javascript:void(0)" title="View user's analytics">

                                                        View user's analytics
                                                      </a>
                                                    </li>
                                                    <li className="sm-item" id="sm-item--delete" data-value="delete">
                                                      <a className="sm-text sm-item-value-delete " href="javascript:void(0)" title="Delete account">

                                                        Delete account
                                                      </a>
                                                    </li>
                                                    <li className="sm-item" id="sm-item--manage_phone_numbers" data-value="manage_phone_numbers">
                                                      <a data-toggle="modal" data-target="#exampleModal5" className="sm-text sm-item-value-manage_phone_numbers " href="javascript:void(0)" title="Manage phone numbers">

                                                        Manage phone numbers
                                                      </a>
                                                    </li>
                                                    <li className="sm-item" id="sm-item--add_depts" data-value="add_depts">
                                                      <a data-toggle="modal" data-target="#exampleModal6" className="sm-text sm-item-value-add_depts " href="javascript:void(0)" title="Make dept operator">

                                                        Make dept operator
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    : <div></div>
                                }
                                </tbody>
                            </table>
                            <div className="table-loading"></div>
                          </div>
                        </div>
                        <div id="accounts-suggest-view">
                          <div className="list-container">
                            <table className="user-table">
                              <thead>
                                <tr>
                                  <th className="user-table-name">Name</th>
                                  <th>Number</th>
                                  <th>Email</th>
                                  <th>Account details</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody id="accounts-suggest-list"></tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
      <div className="custom-left">
        <DashboardSideHeader/>
      </div>
      <div className="custom-middle">
        <DashboardMiddleHeader/>
      </div>
    </div>
  </div>;

};

export default AccountMarkup;
