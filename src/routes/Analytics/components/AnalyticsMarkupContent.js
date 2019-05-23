import React from 'react';
import PropTypes from 'prop-types'
import './AnalyticsMarkup.scss';
import LineChart from '../../../components/shared/Charts/LineChart';
import DoughnutChart from '../../../components/shared/Charts/DoughnutChart';


const AccountMarkupContent = () => {
  return (<div>
      <div className="form form-main">
          <div id="stats-selection-view">
              <div>
                  <div className="form-block form-block-sec stats-controls">
                      <div id="div_88e5_0">
                          <div className="stats-hd">Filter:</div>
                          <div id="div_88e5_1">
                              <div className="mblock stats-select">
                                  <div className="stats-select-label">User/Group</div>
                                  <div id="stats-target">
                                      <div className="select-menu-view">
                                          <div className="select-menu   closed ">
                                              <div  className="sm-input-shim" tabIndex="0">

                                                  <input id="stats_target" name="stats_target" type="text" defaultValue="This Office" className="sm-input sm-item-value-office|agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww " tabIndex="-1"/>
                                              </div>
                                              <div id="nav" className="sm-menu hide">
                                                  <div></div>
                                                  <ul className="sm-list">

                                                      <li className="sm-item" id="sm-item-stats_target-office|agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww" data-value="office|agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww">

                                                          <a className="sm-text sm-item-value-office|agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww " href="javascript:void(0)" title="This Office">

                This Office
              </a>
                                                      </li>

                                                      <li className="sm-item" id="sm-item-stats_target-agxzfnViZXItdm9pY2VyGAsSC1VzZXJQcm9maWxlGICAqI_hudMKDA" data-value="agxzfnViZXItdm9pY2VyGAsSC1VzZXJQcm9maWxlGICAqI_hudMKDA">

                                                          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC1VzZXJQcm9maWxlGICAqI_hudMKDA " href="javascript:void(0)" title="You">

                You
              </a>
                                                      </li>

                                                      <li className="sm-item" id="sm-item-stats_target-agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww" data-value="agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww">

                                                          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww " href="javascript:void(0)" title="Easytel">

                Easytel
              </a>
                                                      </li>

                                                      <li className="sm-item" id="sm-item-stats_target-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAqIusj_IKDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAqIusj_IKDA">

                                                          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAqIusj_IKDA " href="javascript:void(0)" title="Sales">

                Sales
              </a>
                                                      </li>

                                                      <li className="sm-item" id="sm-item-stats_target-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAqMP4wLkJDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAqMP4wLkJDA">

                                                          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAqMP4wLkJDA " href="javascript:void(0)" title="Support">

                Support
              </a>
                                                      </li>

                                                      <li className="sm-item" id="sm-item-stats_target-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAqIurw-QKDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAqIurw-QKDA">

                                                          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAqIurw-QKDA " href="javascript:void(0)" title="iOS Support">

                iOS Support
              </a>
                                                      </li>

                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="mblock stats-select">
                                  <div className="stats-select-label">Date Range</div>
                                  <div className="stats-day-menu">
                                      <div className="select-menu-view">
                                          <div className="select-menu   closed ">
                                              <div   className="sm-input-shim" tabIndex="0">

                                                  <input id="day_range" name="day_range" type="text" defaultValue="Past 30 days" className="sm-input sm-item-value-1-30 " tabIndex="-1"/>
                                              </div>
                                              <div id="nav2"  className="sm-menu">
                                                  <div></div>
                                                  <ul className="sm-list">

                                                      <li className="sm-item" id="sm-item-day_range-0-0" data-value="0-0">

                                                          <a className="sm-text sm-item-value-0-0 " href="javascript:void(0)" title="Today">

                Today
              </a>
                                                      </li>

                                                      <li className="sm-item" id="sm-item-day_range-1-1" data-value="1-1">

                                                          <a className="sm-text sm-item-value-1-1 " href="javascript:void(0)" title="Yesterday">

                Yesterday
              </a>
                                                      </li>

                                                      <li className="sm-item" id="sm-item-day_range-2-2" data-value="2-2">

                                                          <a className="sm-text sm-item-value-2-2 " href="javascript:void(0)" title="Saturday">

                Saturday
              </a>
                                                      </li>

                                                      <li className="sm-item" id="sm-item-day_range-3-3" data-value="3-3">

                                                          <a className="sm-text sm-item-value-3-3 " href="javascript:void(0)" title="Friday">

                Friday
              </a>
                                                      </li>

                                                      <li className="sm-item" id="sm-item-day_range-4-4" data-value="4-4">

                                                          <a className="sm-text sm-item-value-4-4 " href="javascript:void(0)" title="Thursday">

                Thursday
              </a>
                                                      </li>

                                                      <li className="sm-item" id="sm-item-day_range-5-5" data-value="5-5">

                                                          <a className="sm-text sm-item-value-5-5 " href="javascript:void(0)" title="Wednesday">

                Wednesday
              </a>
                                                      </li>

                                                      <li className="sm-item" id="sm-item-day_range-6-6" data-value="6-6">

                                                          <a className="sm-text sm-item-value-6-6 " href="javascript:void(0)" title="Tuesday">

                Tuesday
              </a>
                                                      </li>

                                                      <li className="sm-item" id="sm-item-day_range-7-7" data-value="7-7">

                                                          <a className="sm-text sm-item-value-7-7 " href="javascript:void(0)" title="Monday">

                Monday
              </a>
                                                      </li>

                                                      <li className="sm-item" id="sm-item-day_range-last_week" data-value="last_week">

                                                          <a className="sm-text sm-item-value-last_week " href="javascript:void(0)" title="Last week">

                Last week
              </a>
                                                      </li>

                                                      <li className="sm-item" id="sm-item-day_range-last_month" data-value="last_month">

                                                          <a className="sm-text sm-item-value-last_month " href="javascript:void(0)" title="Last month">

                Last month
              </a>
                                                      </li>

                                                      <li className="sm-item" id="sm-item-day_range-1-7" data-value="1-7">

                                                          <a className="sm-text sm-item-value-1-7 " href="javascript:void(0)" title="Last 7 days">

                Last 7 days
              </a>
                                                      </li>

                                                      <li className="sm-item" id="sm-item-day_range-1-30" data-value="1-30">

                                                          <a className="sm-text sm-item-value-1-30 " href="javascript:void(0)" title="Past 30 days">

                Past 30 days
              </a>
                                                      </li>

                                                      <li className="sm-item" id="sm-item-day_range-1-90" data-value="1-90">

                                                          <a className="sm-text sm-item-value-1-90 " href="javascript:void(0)" title="Past 3 months">

                Past 3 months
              </a>
                                                      </li>

                                                      <li className="sm-item" id="sm-item-day_range-Custom" data-value="Custom">

                                                          <a className="sm-text sm-item-value-Custom " href="javascript:void(0)" title="Custom">

                Custom
              </a>
                                                      </li>

                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="stats-date-picker hide">
                                      <div className="iblock container">
                                          <div className="label">Start Date</div>
                                          <div id="start-date">
                                              <div className="date-picker">
                                                  <input type="text" className="date-picker-date" name="start-date-picker" defaultValue="February 11, 2019"/>

                                                  <div className="date-picker-container">

                                                      <div className="date-picker-widget hasDatepicker" id="dp1549926593970">
                                                          <div className="ui-datepicker-inline ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" id="div_88e5_2">
                                                              <div className="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all"><a className="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="Prev"><span className="ui-icon ui-icon-circle-triangle-w">Prev</span></a><a className="ui-datepicker-next ui-corner-all ui-state-disabled" title="Next"><span className="ui-icon ui-icon-circle-triangle-e">Next</span></a>
                                                                  <div className="ui-datepicker-title"><span className="ui-datepicker-month">FEBRUARY</span>&nbsp;<span className="ui-datepicker-year">2019</span></div>
                                                              </div>
                                                              <table className="ui-datepicker-calendar">
                                                                  <thead>
                                                                      <tr>
                                                                          <th scope="col"><span title="Monday">Mo</span></th>
                                                                          <th scope="col"><span title="Tuesday">Tu</span></th>
                                                                          <th scope="col"><span title="Wednesday">We</span></th>
                                                                          <th scope="col"><span title="Thursday">Th</span></th>
                                                                          <th scope="col"><span title="Friday">Fr</span></th>
                                                                          <th scope="col" className="ui-datepicker-week-end"><span title="Saturday">Sa</span></th>
                                                                          <th scope="col" className="ui-datepicker-week-end"><span title="Sunday">Su</span></th>
                                                                      </tr>
                                                                  </thead>
                                                                  <tbody>
                                                                      <tr>
                                                                          <td className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                                                          <td className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                                                          <td className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                                                          <td className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                                                          <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">1</a></td>
                                                                          <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">2</a></td>
                                                                          <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">3</a></td>
                                                                      </tr>
                                                                      <tr>
                                                                          <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">4</a></td>
                                                                          <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">5</a></td>
                                                                          <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">6</a></td>
                                                                          <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">7</a></td>
                                                                          <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">8</a></td>
                                                                          <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">9</a></td>
                                                                          <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">10</a></td>
                                                                      </tr>
                                                                      <tr>
                                                                          <td className=" ui-datepicker-days-cell-over  ui-datepicker-current-day ui-datepicker-today" data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default ui-state-highlight ui-state-active ui-state-hover" href="#">11</a></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">12</span></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">13</span></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">14</span></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">15</span></td>
                                                                          <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">16</span></td>
                                                                          <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">17</span></td>
                                                                      </tr>
                                                                      <tr>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">18</span></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">19</span></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">20</span></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">21</span></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">22</span></td>
                                                                          <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">23</span></td>
                                                                          <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">24</span></td>
                                                                      </tr>
                                                                      <tr>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">25</span></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">26</span></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">27</span></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">28</span></td>
                                                                          <td className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                                                          <td className=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                                                          <td className=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="iblock container">
                                          <div className="label">End Date</div>
                                          <div id="end-date">
                                              <div className="date-picker">
                                                  <input type="text" className="date-picker-date" name="end-date-picker" defaultValue="February 11, 2019"/>

                                                  <div className="date-picker-container">

                                                      <div className="date-picker-widget hasDatepicker" id="dp1549926593971">
                                                          <div className="ui-datepicker-inline ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" id="div_88e5_3">
                                                              <div className="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all"><a className="ui-datepicker-prev ui-corner-all ui-state-disabled" title="Prev"><span className="ui-icon ui-icon-circle-triangle-w">Prev</span></a><a className="ui-datepicker-next ui-corner-all ui-state-disabled" title="Next"><span className="ui-icon ui-icon-circle-triangle-e">Next</span></a>
                                                                  <div className="ui-datepicker-title"><span className="ui-datepicker-month">FEBRUARY</span>&nbsp;<span className="ui-datepicker-year">2019</span></div>
                                                              </div>
                                                              <table className="ui-datepicker-calendar">
                                                                  <thead>
                                                                      <tr>
                                                                          <th scope="col"><span title="Monday">Mo</span></th>
                                                                          <th scope="col"><span title="Tuesday">Tu</span></th>
                                                                          <th scope="col"><span title="Wednesday">We</span></th>
                                                                          <th scope="col"><span title="Thursday">Th</span></th>
                                                                          <th scope="col"><span title="Friday">Fr</span></th>
                                                                          <th scope="col" className="ui-datepicker-week-end"><span title="Saturday">Sa</span></th>
                                                                          <th scope="col" className="ui-datepicker-week-end"><span title="Sunday">Su</span></th>
                                                                      </tr>
                                                                  </thead>
                                                                  <tbody>
                                                                      <tr>
                                                                          <td className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                                                          <td className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                                                          <td className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                                                          <td className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">1</span></td>
                                                                          <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">2</span></td>
                                                                          <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">3</span></td>
                                                                      </tr>
                                                                      <tr>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">4</span></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">5</span></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">6</span></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">7</span></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">8</span></td>
                                                                          <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">9</span></td>
                                                                          <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">10</span></td>
                                                                      </tr>
                                                                      <tr>
                                                                          <td className=" ui-datepicker-days-cell-over  ui-datepicker-current-day ui-datepicker-today" data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default ui-state-highlight ui-state-active ui-state-hover" href="#">11</a></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">12</span></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">13</span></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">14</span></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">15</span></td>
                                                                          <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">16</span></td>
                                                                          <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">17</span></td>
                                                                      </tr>
                                                                      <tr>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">18</span></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">19</span></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">20</span></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">21</span></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">22</span></td>
                                                                          <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">23</span></td>
                                                                          <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">24</span></td>
                                                                      </tr>
                                                                      <tr>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">25</span></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">26</span></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">27</span></td>
                                                                          <td className=" ui-datepicker-unselectable ui-state-disabled "><span className="ui-state-default">28</span></td>
                                                                          <td className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                                                          <td className=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                                                          <td className=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                          </div>
                      </div>
                      <div className="iblock body-copy-2 print-hide" id="div_88e5_4">
                          <a href="https://help.dialpad.com/hc/en-us/articles/208872246" target="_blank" className="wlink">Learn more</a>
                      </div>
                  </div>
              </div>
          </div>
          <div id="stats-child-view">
              <div>
                  <div className="rel">
                      <div id="stats-history-view">
                          <div className="rel">
                              <div className="form-block-hd header-2" id="stats-calls">

                                  Calls by day

                                  <div className="stats-export">
                                      <div id="export-stats" className="mblock icon-text">
                                          <div className="web-icon web-icon-xs web-icon-xs-download mblock"></div>
                                          <div className="wlink iblock">Export Statistics
                                              <br/>(.csv)</div>
                                      </div>
                                      <div id="export-logs" className="mblock icon-text">
                                          <div className="web-icon web-icon-xs web-icon-xs-download mblock"></div>
                                          <div className="wlink iblock">Export Call Logs
                                              <br/>(.csv)</div>
                                      </div>

                                  </div>

                              </div>
                              <div className="form-block form-block-sec">
                                  <div className="sec-tabs">
                                      <div id="stats-tab-calls"  data-stat="calls" className="stats-tab sec-tab-selected">Total Calls</div>

                                      <div id="stats-tab-minutes"   data-stat="minutes" className="stats-tab">Call Minutes</div>

                                      <div id="stats-tab-texts"   data-stat="texts" className="stats-tab">Text Messages</div>

                                  </div>
                                  <div id="stats-call-history">
                                      <div id="div_88e5_5">
                                          <div dir="ltr" id="div_88e5_6">
                                              <div aria-label="A chart." id="div_88e5_7">
                                              <div>
                                              <LineChart/>
                                              </div>
                                                  <div aria-label="A tabular representation of the data in the chart." id="div_88e5_8">
                                                      <table>
                                                          <thead>
                                                              <tr>
                                                                  <th>Day</th>
                                                                  <th>Calls</th>
                                                                  <th>Received</th>
                                                                  <th>Placed</th>
                                                                  <th>Missed</th>
                                                              </tr>
                                                          </thead>
                                                          <tbody>
                                                              <tr>
                                                                  <td>12</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>13</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>14</td>
                                                                  <td>1</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>15</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>16</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>17</td>
                                                                  <td>1</td>
                                                                  <td>0</td>
                                                                  <td>1</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>18</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>19</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>20</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>21</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>22</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>23</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>24</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>25</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>26</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>27</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>28</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>29</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>30</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>31</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>01</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>02</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>03</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>04</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>05</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>06</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>07</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>08</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>09</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                              <tr>
                                                                  <td>10</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </div>
                                              </div>
                                          </div>
                                          <div aria-hidden="true" id="div_88e5_9">...</div>
                                          <div></div>
                                      </div>
                                  </div>
                                  <div className="stats-totals">

                                      <div className="stats-tot-sec-hd">
                                          <div className="stats-num-hd">2 calls</div>
                                      </div>
                                      <div className="iblock stats-tot-sec2">
                                          <div className="stats-num-hd">1</div>
                                          <div className="stats-num-hd-desc">Connected</div>
                                      </div>
                                      <div className="iblock stats-tot-sec2">
                                          <div className="stats-num-hd">0</div>
                                          <div className="stats-num-hd-desc">Missed</div>
                                      </div>
                                      <div className="iblock stats-tot-sec2">
                                          <div className="stats-num-hd">0</div>
                                          <div className="stats-num-hd-desc">Abandoned</div>
                                      </div>
                                      <div className="iblock stats-tot-sec2">
                                          <div className="stats-num-hd">1</div>
                                          <div className="stats-num-hd-desc">Cancelled</div>
                                      </div>
                                      <div className="iblock stats-tot-sec2">
                                          <div className="stats-num-hd" id="div_88e5_10">0</div>
                                          <div className="stats-num-hd-desc" id="div_88e5_11">Voicemails</div>
                                      </div>
                                      <div className="stats-legend">

                                          <div className="stats-tcalls">
                                              <div></div>Total calls</div>

                                          <div className="stats-missed">
                                              <div></div>Missed calls</div>

                                      </div>

                                  </div>
                              </div>

                              <div id="stats-alerts-view"></div>

                              <div id="stats-recs-view"></div>

                              <div className="form-block-hd header-2">
                                  <div className="mblock">
                                      Calling Habits
                                  </div>
                              </div>
                              <div className="rel form-block stats-pie-section">
                                  <div className="rel" id="div_88e5_12">
                                      <div className="stats-pie" id="div_88e5_13">
                                          <div id="stats-user-internal">
                                              <div id="div_88e5_14">
                                                  <div dir="ltr" id="div_88e5_15">
                                                      <div aria-label="A chart." id="div_88e5_16">
 <DoughnutChart />
                                                          <div aria-label="A tabular representation of the data in the chart." id="div_88e5_17">
                                                              <table>
                                                                  <thead>
                                                                      <tr>
                                                                          <th>Usage</th>
                                                                          <th>Calls</th>
                                                                      </tr>
                                                                  </thead>
                                                                  <tbody>
                                                                      <tr>
                                                                          <td>Inside company</td>
                                                                          <td>0</td>
                                                                      </tr>
                                                                      <tr>
                                                                          <td>Outside company</td>
                                                                          <td>2</td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div aria-hidden="true" id="div_88e5_18"></div>
                                                  <div></div>
                                              </div>
                                          </div>
                                          <div className="stats-pie-desc">Internal vs External</div>
                                      </div>
                                      <div className="stats-pie">
                                          <div id="stats-user-missed">
                                              <div id="div_88e5_19">
                                                  <div dir="ltr" id="div_88e5_20">
                                                      <div aria-label="A chart." id="div_88e5_21">
 <DoughnutChart />
                                                          <div aria-label="A tabular representation of the data in the chart." id="div_88e5_22">
                                                              <table>
                                                                  <thead>
                                                                      <tr>
                                                                          <th>Usage</th>
                                                                          <th>Calls</th>
                                                                      </tr>
                                                                  </thead>
                                                                  <tbody>
                                                                      <tr>
                                                                          <td>Answered calls</td>
                                                                          <td>1</td>
                                                                      </tr>
                                                                      <tr>
                                                                          <td>Missed calls</td>
                                                                          <td>0</td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div aria-hidden="true" id="div_88e5_23"></div>
                                                  <div></div>
                                              </div>
                                          </div>
                                          <div className="stats-pie-desc">Missed calls</div>
                                      </div>
                                      <div className="stats-pie">
                                          <div id="stats-pie-devices">
                                              <div id="div_88e5_24">
                                                  <div dir="ltr" id="div_88e5_25">
                                                      <div aria-label="A chart." id="div_88e5_26">
 <DoughnutChart /> 
                                                          <div aria-label="A tabular representation of the data in the chart." id="div_88e5_27">
                                                              <table>
                                                                  <thead>
                                                                      <tr>
                                                                          <th>Usage</th>
                                                                          <th>Devices</th>
                                                                      </tr>
                                                                  </thead>
                                                                  <tbody>
                                                                      <tr>
                                                                          <td>Web app</td>
                                                                          <td>100</td>
                                                                      </tr>
                                                                      <tr>
                                                                          <td>Desk phone</td>
                                                                          <td>0</td>
                                                                      </tr>
                                                                      <tr>
                                                                          <td>Mobile VoIP</td>
                                                                          <td>0</td>
                                                                      </tr>
                                                                      <tr>
                                                                          <td>Desktop app</td>
                                                                          <td>0</td>
                                                                      </tr>
                                                                      <tr>
                                                                          <td>Forwarding number</td>
                                                                          <td>0</td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div aria-hidden="true" id="div_88e5_28"></div>
                                                  <div></div>
                                              </div>
                                          </div>
                                          <div className="stats-pie-desc">Device usage</div>
                                      </div>

                                      <div className="stats-legend stats-devices">
                                          <div className="stats-missed">
                                              <div></div>Web app <span>100%</span></div>
                                          <div className="stats-placed">
                                              <div></div>Desk phone <span>0%</span></div>
                                          <div className="stats-received">
                                              <div></div>Mobile VoIP <span>0%</span></div>
                                          <div className="stats-tcalls">
                                              <div></div>Desktop app <span>0%</span></div>
                                      </div>

                                      <div className="stats-pie-int">
                                          <div className="stats-num-hd">100%</div>
                                          <div className="stats-num-hd-desc">
                                              Calls outside company
                                          </div>
                                      </div>
                                      <div className="stats-pie-missed">
                                          <div className="stats-num-hd">0%</div>
                                          <div className="stats-num-hd-desc">Calls missed</div>
                                      </div>
                                  </div>
                              </div>

                              <div className="stats-loading-overlay" id="div_88e5_29">
                                  <div className="stats-loading">
                                      <div className="stats-loading-graphic"></div>
                                      <div className="stats-loading-text">Crunching numbers...</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div id="stats-leaderboard-view">
                          <div className="rel">
                              <div className="form-block-hd header-2">

                                  <div className="mblock">Team Members</div>

                              </div>

                              <div className="form-block">

                                  <table className="stats-leaderboard stats-admin">
                                      <tbody>
                                          <tr>
                                              <th id="th_88e5_0">
                                                  User
                                              </th>
                                              <th>
                                                  <div className="mblock">Calls</div>
                                                  <div className="stats-sort mblock web-icon-xs web-icon-xs-updown stats-order-desc stats-sort-on" data-sort="calls"></div>
                                              </th>

                                              <th>
                                                  <div className="mblock">Total Minutes</div>
                                                  <div className="stats-sort mblock web-icon-xs web-icon-xs-updown stats-order-desc" data-sort="minutes"></div>
                                              </th>
                                              <th>
                                                  <div className="mblock">Avg. Duration (Min)</div>
                                                  <div className="stats-sort mblock web-icon-xs web-icon-xs-updown stats-order-desc" data-sort="acd"></div>
                                              </th>

                                              <th>
                                                  <div className="mblock">Placed</div>
                                                  <div className="stats-sort mblock web-icon-xs web-icon-xs-updown stats-order-desc" data-sort="outbound_calls"></div>
                                              </th>
                                              <th>
                                                  <div className="mblock">Received</div>
                                                  <div className="stats-sort mblock web-icon-xs web-icon-xs-updown stats-order-desc" data-sort="inbound_calls"></div>
                                              </th>
                                              <th>
                                                  <div className="mblock">Missed</div>
                                                  <div className="stats-sort mblock web-icon-xs web-icon-xs-updown stats-order-desc" data-sort="missed"></div>
                                              </th>
                                              <th>
                                                  <div className="mblock">Cancelled</div>
                                                  <div className="stats-sort mblock web-icon-xs web-icon-xs-updown stats-order-desc" data-sort="cancelled"></div>
                                              </th>

                                          </tr>

                                          <tr data-id="agxzfnViZXItdm9pY2VyGAsSC1VzZXJQcm9maWxlGICAqMPxwccIDA" className="stats-user-row">
                                              <td className="body-copy-3-c1">
                                                  <div className="mblock profile-picture-sm stats-avatar">
                                                      <div className="profile-picture-holder circle avatar-user" id="div_88e5_30"></div>
                                                  </div>
                                                  <div className="mblock stats-user-name">Waqas Mukhtar</div>
                                              </td>
                                              <td className="body-copy-3-c1">1</td>

                                              <td className="body-copy-3-c1">0</td>
                                              <td className="body-copy-3-c1">0</td>

                                              <td className="body-copy-3-c1">0</td>
                                              <td className="body-copy-3-c1">0</td>
                                              <td className="body-copy-3-c1">0</td>
                                              <td className="body-copy-3-c1">1</td>

                                          </tr>

                                      </tbody>
                                  </table>

                              </div>

                              <div className="stats-loading-overlay" id="div_88e5_31">
                                  <div className="stats-loading">
                                      <div className="stats-loading-graphic"></div>
                                      <div className="stats-loading-text">Crunching numbers...</div>
                                  </div>
                              </div>

                          </div>
                      </div>

                  </div>
              </div>
          </div>
      </div>
  </div>);

}

export default AccountMarkupContent;
