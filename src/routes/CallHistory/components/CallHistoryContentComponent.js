import React from 'react';
import './CallHistoryMarkup.scss';

const CallHistoryContentComponent = () => {
  return (<div>
    <div id="call-history" className="form form-main">
        <div id="search-filters-container">
            <div id="search-filters">
                <div className="iblock search-container container">
                    <div className="label">Search</div>
                    <div id="search">
                        <div>
                            <div className="auto-suggest" id="div_ffed_0">
                                <input className="search-input" type="text" autoComplete="off" value=""/>
                                <div className="spinner hide"></div>
                                <ul id="search-targets-suggest" className="hide">
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="iblock container">
                    <div className="label">Start Date</div>
                    <div id="start-date">
                        <div className="date-picker">
                            <input type="text" className="date-picker-date" name="start-date-picker" value="" />

                            <div className="date-picker-container">

                                <div className="date-picker-widget hasDatepicker" id="dp1549926625548">
                                    <div className="ui-datepicker-inline ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" id="div_ffed_1">
                                        <div className="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all"><a className="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="Prev"><span className="ui-icon ui-icon-circle-triangle-w">Prev</span></a><a className="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="Next"><span className="ui-icon ui-icon-circle-triangle-e">Next</span></a>
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
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">12</a></td>
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">13</a></td>
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">14</a></td>
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">15</a></td>
                                                    <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">16</a></td>
                                                    <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">17</a></td>
                                                </tr>
                                                <tr>
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">18</a></td>
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">19</a></td>
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">20</a></td>
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">21</a></td>
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">22</a></td>
                                                    <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">23</a></td>
                                                    <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">24</a></td>
                                                </tr>
                                                <tr>
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">25</a></td>
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">26</a></td>
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">27</a></td>
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">28</a></td>
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
                            <input type="text" className="date-picker-date" name="end-date-picker" value="" />

                            <div className="date-picker-container">

                                <div className="date-picker-widget hasDatepicker" id="dp1549926625549">
                                    <div className="ui-datepicker-inline ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" id="div_ffed_2">
                                        <div className="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all"><a className="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="Prev"><span className="ui-icon ui-icon-circle-triangle-w">Prev</span></a><a className="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="Next"><span className="ui-icon ui-icon-circle-triangle-e">Next</span></a>
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
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">12</a></td>
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">13</a></td>
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">14</a></td>
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">15</a></td>
                                                    <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">16</a></td>
                                                    <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">17</a></td>
                                                </tr>
                                                <tr>
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">18</a></td>
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">19</a></td>
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">20</a></td>
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">21</a></td>
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">22</a></td>
                                                    <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">23</a></td>
                                                    <td className=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">24</a></td>
                                                </tr>
                                                <tr>
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">25</a></td>
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">26</a></td>
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">27</a></td>
                                                    <td className=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2019"><a className="ui-state-default" href="#">28</a></td>
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
                    <div className="label">Start Time</div>
                    <div id="start-time">
                        <div id="start-time-picker" className="select-menu-view">
                            <div className="select-menu snappy select-menu-disabled  closed ">
                                <div className="sm-input-shim" tabIndex="-1" title="">

                                    <input id="Time Picker" name="Time Picker" type="text" value="" className="snappy sm-input sm-item-value- " title="" tabIndex="-1" />
                                </div>
                                <div className="sm-menu">
                                    <div></div>
                                    <ul className="sm-list">

                                        <li className="sm-item" id="sm-item-Time Picker-" data-value="">

                                            <a className="sm-text sm-item-value- " href="javascript:void(0)" title="">

                                            </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-0:00" data-value="0:00">

                                            <a className="sm-text sm-item-value-0:00 " href="javascript:void(0)" title="12:00 am">

            12:00 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-0:30" data-value="0:30">

                                            <a className="sm-text sm-item-value-0:30 " href="javascript:void(0)" title="12:30 am">

            12:30 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-1:00" data-value="1:00">

                                            <a className="sm-text sm-item-value-1:00 " href="javascript:void(0)" title="1:00 am">

            1:00 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-1:30" data-value="1:30">

                                            <a className="sm-text sm-item-value-1:30 " href="javascript:void(0)" title="1:30 am">

            1:30 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-2:00" data-value="2:00">

                                            <a className="sm-text sm-item-value-2:00 " href="javascript:void(0)" title="2:00 am">

            2:00 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-2:30" data-value="2:30">

                                            <a className="sm-text sm-item-value-2:30 " href="javascript:void(0)" title="2:30 am">

            2:30 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-3:00" data-value="3:00">

                                            <a className="sm-text sm-item-value-3:00 " href="javascript:void(0)" title="3:00 am">

            3:00 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-3:30" data-value="3:30">

                                            <a className="sm-text sm-item-value-3:30 " href="javascript:void(0)" title="3:30 am">

            3:30 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-4:00" data-value="4:00">

                                            <a className="sm-text sm-item-value-4:00 " href="javascript:void(0)" title="4:00 am">

            4:00 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-4:30" data-value="4:30">

                                            <a className="sm-text sm-item-value-4:30 " href="javascript:void(0)" title="4:30 am">

            4:30 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-5:00" data-value="5:00">

                                            <a className="sm-text sm-item-value-5:00 " href="javascript:void(0)" title="5:00 am">

            5:00 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-5:30" data-value="5:30">

                                            <a className="sm-text sm-item-value-5:30 " href="javascript:void(0)" title="5:30 am">

            5:30 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-6:00" data-value="6:00">

                                            <a className="sm-text sm-item-value-6:00 " href="javascript:void(0)" title="6:00 am">

            6:00 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-6:30" data-value="6:30">

                                            <a className="sm-text sm-item-value-6:30 " href="javascript:void(0)" title="6:30 am">

            6:30 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-7:00" data-value="7:00">

                                            <a className="sm-text sm-item-value-7:00 " href="javascript:void(0)" title="7:00 am">

            7:00 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-7:30" data-value="7:30">

                                            <a className="sm-text sm-item-value-7:30 " href="javascript:void(0)" title="7:30 am">

            7:30 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-8:00" data-value="8:00">

                                            <a className="sm-text sm-item-value-8:00 " href="javascript:void(0)" title="8:00 am">

            8:00 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-8:30" data-value="8:30">

                                            <a className="sm-text sm-item-value-8:30 " href="javascript:void(0)" title="8:30 am">

            8:30 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-9:00" data-value="9:00">

                                            <a className="sm-text sm-item-value-9:00 " href="javascript:void(0)" title="9:00 am">

            9:00 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-9:30" data-value="9:30">

                                            <a className="sm-text sm-item-value-9:30 " href="javascript:void(0)" title="9:30 am">

            9:30 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-10:00" data-value="10:00">

                                            <a className="sm-text sm-item-value-10:00 " href="javascript:void(0)" title="10:00 am">

            10:00 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-10:30" data-value="10:30">

                                            <a className="sm-text sm-item-value-10:30 " href="javascript:void(0)" title="10:30 am">

            10:30 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-11:00" data-value="11:00">

                                            <a className="sm-text sm-item-value-11:00 " href="javascript:void(0)" title="11:00 am">

            11:00 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-11:30" data-value="11:30">

                                            <a className="sm-text sm-item-value-11:30 " href="javascript:void(0)" title="11:30 am">

            11:30 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-12:00" data-value="12:00">

                                            <a className="sm-text sm-item-value-12:00 " href="javascript:void(0)" title="12:00 pm">

            12:00 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-12:30" data-value="12:30">

                                            <a className="sm-text sm-item-value-12:30 " href="javascript:void(0)" title="12:30 pm">

            12:30 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-13:00" data-value="13:00">

                                            <a className="sm-text sm-item-value-13:00 " href="javascript:void(0)" title="1:00 pm">

            1:00 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-13:30" data-value="13:30">

                                            <a className="sm-text sm-item-value-13:30 " href="javascript:void(0)" title="1:30 pm">

            1:30 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-14:00" data-value="14:00">

                                            <a className="sm-text sm-item-value-14:00 " href="javascript:void(0)" title="2:00 pm">

            2:00 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-14:30" data-value="14:30">

                                            <a className="sm-text sm-item-value-14:30 " href="javascript:void(0)" title="2:30 pm">

            2:30 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-15:00" data-value="15:00">

                                            <a className="sm-text sm-item-value-15:00 " href="javascript:void(0)" title="3:00 pm">

            3:00 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-15:30" data-value="15:30">

                                            <a className="sm-text sm-item-value-15:30 " href="javascript:void(0)" title="3:30 pm">

            3:30 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-16:00" data-value="16:00">

                                            <a className="sm-text sm-item-value-16:00 " href="javascript:void(0)" title="4:00 pm">

            4:00 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-16:30" data-value="16:30">

                                            <a className="sm-text sm-item-value-16:30 " href="javascript:void(0)" title="4:30 pm">

            4:30 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-17:00" data-value="17:00">

                                            <a className="sm-text sm-item-value-17:00 " href="javascript:void(0)" title="5:00 pm">

            5:00 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-17:30" data-value="17:30">

                                            <a className="sm-text sm-item-value-17:30 " href="javascript:void(0)" title="5:30 pm">

            5:30 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-18:00" data-value="18:00">

                                            <a className="sm-text sm-item-value-18:00 " href="javascript:void(0)" title="6:00 pm">

            6:00 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-18:30" data-value="18:30">

                                            <a className="sm-text sm-item-value-18:30 " href="javascript:void(0)" title="6:30 pm">

            6:30 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-19:00" data-value="19:00">

                                            <a className="sm-text sm-item-value-19:00 " href="javascript:void(0)" title="7:00 pm">

            7:00 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-19:30" data-value="19:30">

                                            <a className="sm-text sm-item-value-19:30 " href="javascript:void(0)" title="7:30 pm">

            7:30 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-20:00" data-value="20:00">

                                            <a className="sm-text sm-item-value-20:00 " href="javascript:void(0)" title="8:00 pm">

            8:00 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-20:30" data-value="20:30">

                                            <a className="sm-text sm-item-value-20:30 " href="javascript:void(0)" title="8:30 pm">

            8:30 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-21:00" data-value="21:00">

                                            <a className="sm-text sm-item-value-21:00 " href="javascript:void(0)" title="9:00 pm">

            9:00 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-21:30" data-value="21:30">

                                            <a className="sm-text sm-item-value-21:30 " href="javascript:void(0)" title="9:30 pm">

            9:30 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-22:00" data-value="22:00">

                                            <a className="sm-text sm-item-value-22:00 " href="javascript:void(0)" title="10:00 pm">

            10:00 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-22:30" data-value="22:30">

                                            <a className="sm-text sm-item-value-22:30 " href="javascript:void(0)" title="10:30 pm">

            10:30 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-23:00" data-value="23:00">

                                            <a className="sm-text sm-item-value-23:00 " href="javascript:void(0)" title="11:00 pm">

            11:00 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-23:30" data-value="23:30">

                                            <a className="sm-text sm-item-value-23:30 " href="javascript:void(0)" title="11:30 pm">

            11:30 pm
          </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="iblock container">
                    <div className="label">End Time</div>
                    <div id="end-time">
                        <div id="end-time-picker" className="select-menu-view">
                            <div className="select-menu snappy select-menu-disabled  closed ">
                                <div className="sm-input-shim" tabIndex="-1" title="">

                                    <input id="Time Picker" name="Time Picker" type="text" value="" className="snappy sm-input sm-item-value- " title="" tabIndex="-1" />
                                </div>
                                <div className="sm-menu">
                                    <div></div>
                                    <ul className="sm-list">

                                        <li className="sm-item" id="sm-item-Time Picker-" data-value="">

                                            <a className="sm-text sm-item-value- " href="javascript:void(0)" title="">

                                            </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-0:00" data-value="0:00">

                                            <a className="sm-text sm-item-value-0:00 " href="javascript:void(0)" title="12:00 am">

            12:00 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-0:30" data-value="0:30">

                                            <a className="sm-text sm-item-value-0:30 " href="javascript:void(0)" title="12:30 am">

            12:30 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-1:00" data-value="1:00">

                                            <a className="sm-text sm-item-value-1:00 " href="javascript:void(0)" title="1:00 am">

            1:00 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-1:30" data-value="1:30">

                                            <a className="sm-text sm-item-value-1:30 " href="javascript:void(0)" title="1:30 am">

            1:30 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-2:00" data-value="2:00">

                                            <a className="sm-text sm-item-value-2:00 " href="javascript:void(0)" title="2:00 am">

            2:00 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-2:30" data-value="2:30">

                                            <a className="sm-text sm-item-value-2:30 " href="javascript:void(0)" title="2:30 am">

            2:30 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-3:00" data-value="3:00">

                                            <a className="sm-text sm-item-value-3:00 " href="javascript:void(0)" title="3:00 am">

            3:00 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-3:30" data-value="3:30">

                                            <a className="sm-text sm-item-value-3:30 " href="javascript:void(0)" title="3:30 am">

            3:30 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-4:00" data-value="4:00">

                                            <a className="sm-text sm-item-value-4:00 " href="javascript:void(0)" title="4:00 am">

            4:00 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-4:30" data-value="4:30">

                                            <a className="sm-text sm-item-value-4:30 " href="javascript:void(0)" title="4:30 am">

            4:30 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-5:00" data-value="5:00">

                                            <a className="sm-text sm-item-value-5:00 " href="javascript:void(0)" title="5:00 am">

            5:00 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-5:30" data-value="5:30">

                                            <a className="sm-text sm-item-value-5:30 " href="javascript:void(0)" title="5:30 am">

            5:30 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-6:00" data-value="6:00">

                                            <a className="sm-text sm-item-value-6:00 " href="javascript:void(0)" title="6:00 am">

            6:00 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-6:30" data-value="6:30">

                                            <a className="sm-text sm-item-value-6:30 " href="javascript:void(0)" title="6:30 am">

            6:30 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-7:00" data-value="7:00">

                                            <a className="sm-text sm-item-value-7:00 " href="javascript:void(0)" title="7:00 am">

            7:00 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-7:30" data-value="7:30">

                                            <a className="sm-text sm-item-value-7:30 " href="javascript:void(0)" title="7:30 am">

            7:30 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-8:00" data-value="8:00">

                                            <a className="sm-text sm-item-value-8:00 " href="javascript:void(0)" title="8:00 am">

            8:00 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-8:30" data-value="8:30">

                                            <a className="sm-text sm-item-value-8:30 " href="javascript:void(0)" title="8:30 am">

            8:30 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-9:00" data-value="9:00">

                                            <a className="sm-text sm-item-value-9:00 " href="javascript:void(0)" title="9:00 am">

            9:00 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-9:30" data-value="9:30">

                                            <a className="sm-text sm-item-value-9:30 " href="javascript:void(0)" title="9:30 am">

            9:30 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-10:00" data-value="10:00">

                                            <a className="sm-text sm-item-value-10:00 " href="javascript:void(0)" title="10:00 am">

            10:00 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-10:30" data-value="10:30">

                                            <a className="sm-text sm-item-value-10:30 " href="javascript:void(0)" title="10:30 am">

            10:30 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-11:00" data-value="11:00">

                                            <a className="sm-text sm-item-value-11:00 " href="javascript:void(0)" title="11:00 am">

            11:00 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-11:30" data-value="11:30">

                                            <a className="sm-text sm-item-value-11:30 " href="javascript:void(0)" title="11:30 am">

            11:30 am
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-12:00" data-value="12:00">

                                            <a className="sm-text sm-item-value-12:00 " href="javascript:void(0)" title="12:00 pm">

            12:00 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-12:30" data-value="12:30">

                                            <a className="sm-text sm-item-value-12:30 " href="javascript:void(0)" title="12:30 pm">

            12:30 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-13:00" data-value="13:00">

                                            <a className="sm-text sm-item-value-13:00 " href="javascript:void(0)" title="1:00 pm">

            1:00 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-13:30" data-value="13:30">

                                            <a className="sm-text sm-item-value-13:30 " href="javascript:void(0)" title="1:30 pm">

            1:30 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-14:00" data-value="14:00">

                                            <a className="sm-text sm-item-value-14:00 " href="javascript:void(0)" title="2:00 pm">

            2:00 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-14:30" data-value="14:30">

                                            <a className="sm-text sm-item-value-14:30 " href="javascript:void(0)" title="2:30 pm">

            2:30 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-15:00" data-value="15:00">

                                            <a className="sm-text sm-item-value-15:00 " href="javascript:void(0)" title="3:00 pm">

            3:00 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-15:30" data-value="15:30">

                                            <a className="sm-text sm-item-value-15:30 " href="javascript:void(0)" title="3:30 pm">

            3:30 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-16:00" data-value="16:00">

                                            <a className="sm-text sm-item-value-16:00 " href="javascript:void(0)" title="4:00 pm">

            4:00 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-16:30" data-value="16:30">

                                            <a className="sm-text sm-item-value-16:30 " href="javascript:void(0)" title="4:30 pm">

            4:30 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-17:00" data-value="17:00">

                                            <a className="sm-text sm-item-value-17:00 " href="javascript:void(0)" title="5:00 pm">

            5:00 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-17:30" data-value="17:30">

                                            <a className="sm-text sm-item-value-17:30 " href="javascript:void(0)" title="5:30 pm">

            5:30 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-18:00" data-value="18:00">

                                            <a className="sm-text sm-item-value-18:00 " href="javascript:void(0)" title="6:00 pm">

            6:00 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-18:30" data-value="18:30">

                                            <a className="sm-text sm-item-value-18:30 " href="javascript:void(0)" title="6:30 pm">

            6:30 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-19:00" data-value="19:00">

                                            <a className="sm-text sm-item-value-19:00 " href="javascript:void(0)" title="7:00 pm">

            7:00 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-19:30" data-value="19:30">

                                            <a className="sm-text sm-item-value-19:30 " href="javascript:void(0)" title="7:30 pm">

            7:30 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-20:00" data-value="20:00">

                                            <a className="sm-text sm-item-value-20:00 " href="javascript:void(0)" title="8:00 pm">

            8:00 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-20:30" data-value="20:30">

                                            <a className="sm-text sm-item-value-20:30 " href="javascript:void(0)" title="8:30 pm">

            8:30 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-21:00" data-value="21:00">

                                            <a className="sm-text sm-item-value-21:00 " href="javascript:void(0)" title="9:00 pm">

            9:00 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-21:30" data-value="21:30">

                                            <a className="sm-text sm-item-value-21:30 " href="javascript:void(0)" title="9:30 pm">

            9:30 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-22:00" data-value="22:00">

                                            <a className="sm-text sm-item-value-22:00 " href="javascript:void(0)" title="10:00 pm">

            10:00 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-22:30" data-value="22:30">

                                            <a className="sm-text sm-item-value-22:30 " href="javascript:void(0)" title="10:30 pm">

            10:30 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-23:00" data-value="23:00">

                                            <a className="sm-text sm-item-value-23:00 " href="javascript:void(0)" title="11:00 pm">

            11:00 pm
          </a>
                                        </li>

                                        <li className="sm-item" id="sm-item-Time Picker-23:30" data-value="23:30">

                                            <a className="sm-text sm-item-value-23:30 " href="javascript:void(0)" title="11:30 pm">

            11:30 pm
          </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="iblock container">
                    <span id="wch-clear-filters" className="wlink">Clear filters</span>
                </div>
            </div>
        </div>

        <div id="additional-filters"></div>

        <div id="call-history-table-container">
            <div id="call-history-table">
                <div className="table-headers" id="div_ffed_3">

                    <div className="iblock cell group-toggle-cell">

                    </div>

                    <div className="iblock cell date-cell">
                        date

                    </div>

                    <div className="iblock cell time-cell">
                        time

                    </div>

                    <div className="iblock cell icon-cell">

                    </div>

                    <div className="iblock cell to-cell">
                        to

                    </div>

                    <div className="iblock cell from-cell">
                        from

                    </div>

                    <div className="iblock cell duration-cell">
                        duration

                    </div>

                    <div className="iblock cell status-cell">
                        status

                    </div>

                    <div className="iblock cell initial-target-cell">
                        initial target

                    </div>

                    <div className="iblock cell voicemail-cell">
                        voicemail

                    </div>

                    <div className="iblock cell recording-cell">
                        recordings

                    </div>

                </div>
                <div className="table-scroller scroll-y rel">
                    <div className="table-rows">

                        <div className="item">
                            <div className="cells">

                                <div className="iblock cell group-toggle-cell">

                                </div>

                                <div className="iblock cell date-cell">
                                    01/17/2019
                                </div>

                                <div className="iblock cell time-cell">
                                    01:47:56
                                </div>

                                <div className="iblock cell icon-cell">

                                    <div className="icon iblock">

                                    </div>
                                </div>

                                <div className="iblock cell to-cell">

                                    <div>
                                        <div className="target-display-name" title=""></div>

                                    </div>
                                </div>

                                <div className="iblock cell from-cell">

                                    <div>
                                        <div className="target-display-name" title=""></div>

                                        <div className="target-type" title="user">user</div>
                                    </div>
                                </div>

                                <div className="iblock cell duration-cell">
                                    0:00:07
                                </div>

                                <div className="iblock cell status-cell">
                                    Deleted
                                </div>

                                <div className="iblock cell initial-target-cell">

                                </div>

                                <div className="iblock cell voicemail-cell">

                                </div>

                                <div className="iblock cell recording-cell">

                                </div>

                            </div>
                        </div>
                        <div className="item odd">
                            <div className="cells">

                                <div className="iblock cell group-toggle-cell">

                                </div>

                                <div className="iblock cell date-cell">
                                    01/14/2019
                                </div>

                                <div className="iblock cell time-cell">
                                    15:44:33
                                </div>

                                <div className="iblock cell icon-cell">

                                    <div className="icon iblock"></div>
                                </div>

                                <div className="iblock cell to-cell">

                                    <div>
                                        <div className="target-display-name" title="Dialbot">Dialbot</div>
                                        <div className="target-number" title="1 (415) 938-9005">1 (415) 938-9005</div>
                                        <div className="target-type" title="google">google</div>
                                    </div>
                                </div>

                                <div className="iblock cell from-cell">

                                    <div>
                                        <div className="target-display-name" title="Waqas Mukhtar">Waqas Mukhtar</div>
                                        <div className="target-number" title="1 (289) 814-6032">1 (289) 814-6032</div>
                                        <div className="target-type" title="user">user</div>
                                    </div>
                                </div>

                                <div className="iblock cell duration-cell">
                                    0:00:02
                                </div>

                                <div className="iblock cell status-cell">
                                    Canceled
                                </div>

                                <div className="iblock cell initial-target-cell">

                                </div>

                                <div className="iblock cell voicemail-cell">

                                </div>

                                <div className="iblock cell recording-cell">

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="table-loading"></div>
                </div>
                <div className="table-empty" id="div_ffed_4">
                    <div id="wch-empty">
                        <div className="wch-empty-header">

                            Oops! No results found

                        </div>
                        <div className="wch-empty-prose">

                            We were unable to find any results based on your search and filter criteria. Please try again.

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>);

};

export default CallHistoryContentComponent;
