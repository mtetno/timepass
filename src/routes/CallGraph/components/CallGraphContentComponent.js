import React from 'react';
import './CallGraphMarkup.scss';



const CallGraphContentComponent = () => {
  return (<div>
   <div className="ccd-standard ccd-background">
      <div className="ccd-hd">
         <div className="ccd-header">
            <div className="ccd-header-title">Dashboard</div>
            <div className="ccd-fullscreen-toggle">
               <div>
                  <div className="ccd-fullscreen-button">

                  </div>
               </div>
            </div>
            <div className="form-block-desc form iblock">
               <div className="ccd-time-range-select-menu">
                  <div className="select-menu-view">
                     <div className="select-menu snappy  closed">
                        <div className="sm-input-shim" tabIndex="0"  >
                           <input type="text" defaultValue="Last 4 hours" className="snappy sm-input sm-item-value-4 " tabIndex="-1"/>
                        </div>
                        <div className="sm-menu" >
                           <div></div>
                           <ul className="sm-list">
                              <li className="sm-item" id="sm-item--1" data-value="1">
                                 <a className="sm-text sm-item-value-1 " href="javascript:void(0)" title="Last hour">
                                 Last hour
                                 </a>
                              </li>
                              <li className="sm-item" id="sm-item--2" data-value="2">
                                 <a className="sm-text sm-item-value-2 " href="javascript:void(0)" title="Last 2 hours">
                                 Last 2 hours
                                 </a>
                              </li>
                              <li className="sm-item" id="sm-item--4" data-value="4">
                                 <a className="sm-text sm-item-value-4 " href="javascript:void(0)" title="Last 4 hours">
                                 Last 4 hours
                                 </a>
                              </li>
                              <li className="sm-item" id="sm-item--8" data-value="8">
                                 <a className="sm-text sm-item-value-8 " href="javascript:void(0)" title="Last 8 hours">
                                 Last 8 hours
                                 </a>
                              </li>
                              <li className="sm-item" id="sm-item--all" data-value="all">
                                 <a className="sm-text sm-item-value-all " href="javascript:void(0)" title="All day">
                                 All day
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="ccd-row">
            <div className="ccd-widget ccd-total-calls">
               <div>
                  <div className="ccd-widget-mini-stat-header">
                     Completed Calls
                  </div>
                  <div className="ccd-widget-mini-stat rel">
                     0
                  </div>
                  <div className="ccd-widget-separator ccd-mini-widget-separator"></div>
                  <div className="ccd-widget-footer">
                     <div className="ccd-widget-footer-left">
                        <div className="ccd-widget-footer-duration">0</div>
                        <div className="ccd-widget-footer-legend">Inbound</div>
                     </div>
                     <div className="ccd-widget-footer-right">
                        <div className="ccd-widget-footer-duration">0</div>
                        <div className="ccd-widget-footer-legend">Outbound</div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="ccd-widget ccd-total-minutes">
               <div>
                  <div className="ccd-widget-mini-stat-header">
                     Total Minutes
                  </div>
                  <div className="ccd-widget-mini-stat rel">
                     0
                  </div>
                  <div className="ccd-widget-separator ccd-mini-widget-separator"></div>
                  <div className="ccd-widget-footer">
                     <div className="ccd-widget-footer-left">
                        <div className="ccd-widget-footer-duration">0</div>
                        <div className="ccd-widget-footer-legend">Inbound</div>
                     </div>
                     <div className="ccd-widget-footer-right">
                        <div className="ccd-widget-footer-duration">0</div>
                        <div className="ccd-widget-footer-legend">Outbound</div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="ccd-widget ccd-total-missed">
               <div>
                  <div className="ccd-widget-mini-stat-header">
                     Missed Calls
                  </div>
                  <div className="ccd-widget-mini-stat rel">
                     0
                  </div>
                  <div className="ccd-widget-separator ccd-mini-widget-separator"></div>
                  <div className="ccd-widget-footer">
                     <div className="ccd-widget-footer-center">
                        <div className="ccd-widget-footer-duration">0</div>
                        <div className="ccd-widget-footer-legend">Total Voicemails</div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="ccd-widget ccd-total-abandoned">
               <div>
                  <div className="ccd-widget-mini-stat-header">
                     Abandoned Calls
                  </div>
                  <div className="ccd-widget-mini-stat rel">
                     0
                  </div>
               </div>
            </div>
         </div>
         <div className="ccd-row">
            <div className="ccd-widget ccd-call-volume">
               <div id="ccd-call-volume-inbound">
                  <div className="ccd-widget-header">
                     <div className="mblock">Call Volume</div>
                     <div className="direction-toggle mblock">
                        <div>
                           <div className="ccd-toggle">
                              <div className="ccd-toggle-button ccd-toggle-inbound ccd-toggle-on"  >Inbound</div>
                              <div className="ccd-toggle-button ccd-toggle-outbound "  >Outbound</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="ccd-call-volume-hd">
                     <div id="ccd-call-volume-graph">
                        <div id="div_dab7_0">
                           <div dir="ltr" id="div_dab7_1">
                              <div aria-label="A chart." id="div_dab7_2">

                                 <div aria-label="A tabular representation of the data in the chart." id="div_dab7_3">
                                    <table>
                                       <thead>
                                          <tr>
                                             <th>Hour</th>
                                             <th>Answered</th>
                                             <th>Voicemails</th>
                                             <th>Missed</th>
                                             <th>Abandoned</th>
                                             <th>Short-Abandoned</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr>
                                             <td>2pm</td>
                                             <td>0</td>
                                             <td>0</td>
                                             <td>0</td>
                                             <td>0</td>
                                             <td>0</td>
                                          </tr>
                                          <tr>
                                             <td>3pm</td>
                                             <td>0</td>
                                             <td>0</td>
                                             <td>0</td>
                                             <td>0</td>
                                             <td>0</td>
                                          </tr>
                                          <tr>
                                             <td>4pm</td>
                                             <td>0</td>
                                             <td>0</td>
                                             <td>0</td>
                                             <td>0</td>
                                             <td>0</td>
                                          </tr>
                                          <tr>
                                             <td>5pm</td>
                                             <td>0</td>
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
                           <div aria-hidden="true" id="div_dab7_4">...</div>
                           <div></div>
                        </div>
                     </div>
                     <div className="ccd-legend ccd-call-volume-legend">
                        <div className="ccd-call-volume-legend-answered">
                           <div className="dot-hd">
                              <div className="dot"></div>
                           </div>
                           <div className="mblock">Answered</div>
                        </div>
                        <div className="ccd-call-volume-legend-voicemails">
                           <div className="dot-hd">
                              <div className="dot"></div>
                           </div>
                           <div className="mblock">Voicemails</div>
                        </div>
                        <div className="ccd-call-volume-legend-missed">
                           <div className="dot-hd">
                              <div className="dot"></div>
                           </div>
                           <div className="mblock">Missed</div>
                        </div>
                        <div className="ccd-call-volume-legend-abandoned">
                           <div className="dot-hd">
                              <div className="dot"></div>
                           </div>
                           <div className="mblock">Abandoned</div>
                        </div>
                        <div className="ccd-call-volume-legend-short-abandoned">
                           <div className="dot-hd">
                              <div className="dot"></div>
                           </div>
                           <div className="iblock">Short-Abandoned</div>
                        </div>
                     </div>
                  </div>
               </div>
               <div id="ccd-call-volume-outbound" >
                  <div className="ccd-widget-header">
                     <div className="mblock">Call Volume</div>
                     <div className="direction-toggle mblock">
                        <div>
                           <div className="ccd-toggle">
                              <div className="ccd-toggle-button ccd-toggle-inbound "  >Inbound</div>
                              <div className="ccd-toggle-button ccd-toggle-outbound ccd-toggle-on"  >Outbound</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="ccd-call-volume-hd">
                     <div id="ccd-call-volume-graph">
                        <div id="div_dab7_5">
                           <div dir="ltr" id="div_dab7_6">
                              <div aria-label="A chart." id="div_dab7_7">

                                 <div aria-label="A tabular representation of the data in the chart." id="div_dab7_8">
                                    <table>
                                       <thead>
                                          <tr>
                                             <th>Hour</th>
                                             <th>Total</th>
                                             <th>Completed</th>
                                             <th>Cancelled</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr>
                                             <td>2pm</td>
                                             <td>0</td>
                                             <td>0</td>
                                             <td>0</td>
                                          </tr>
                                          <tr>
                                             <td>3pm</td>
                                             <td>0</td>
                                             <td>0</td>
                                             <td>0</td>
                                          </tr>
                                          <tr>
                                             <td>4pm</td>
                                             <td>0</td>
                                             <td>0</td>
                                             <td>0</td>
                                          </tr>
                                          <tr>
                                             <td>5pm</td>
                                             <td>0</td>
                                             <td>0</td>
                                             <td>0</td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </div>
                           </div>
                           <div aria-hidden="true" id="div_dab7_9">...</div>
                           <div></div>
                        </div>
                     </div>
                     <div className="ccd-legend ccd-call-volume-legend">
                        <div className="ccd-call-volume-legend-answered">
                           <div className="dot-hd">
                              <div className="dot"></div>
                           </div>
                           <div className="mblock">Total</div>
                        </div>
                        <div className="ccd-call-volume-legend-voicemails">
                           <div className="dot-hd">
                              <div className="dot"></div>
                           </div>
                           <div className="mblock">Completed</div>
                        </div>
                        <div className="ccd-call-volume-legend-abandoned">
                           <div className="dot-hd">
                              <div className="dot"></div>
                           </div>
                           <div className="mblock">Cancelled</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="ccd-widget ccd-call-duration">
               <div id="ccd-call-duration-outbound" >
                  <div className="ccd-widget-header">
                     <div className="mblock">Call Duration</div>
                     <div className="direction-toggle mblock">
                        <div>
                           <div className="ccd-toggle">
                              <div className="ccd-toggle-button ccd-toggle-inbound"  >Inbound</div>
                              <div className="ccd-toggle-button ccd-toggle-outbound  ccd-toggle-on"  >Outbound</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="ccd-call-duration-hd">
                     <div id="ccd-call-duration-graph">
                        <div id="div_dab7_10">
                           <div dir="ltr" id="div_dab7_11">
                              <div aria-label="A chart." id="div_dab7_12">

                                 <div aria-label="A tabular representation of the data in the chart." id="div_dab7_13">
                                    <table>
                                       <thead>
                                          <tr>
                                             <th>Hour</th>
                                             <th>Today</th>
                                             <th>Average (last 7 days)</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr>
                                             <td>2pm</td>
                                             <td>0</td>
                                             <td>0</td>
                                          </tr>
                                          <tr>
                                             <td>3pm</td>
                                             <td>0</td>
                                             <td>0</td>
                                          </tr>
                                          <tr>
                                             <td>4pm</td>
                                             <td>0</td>
                                             <td>0</td>
                                          </tr>
                                          <tr>
                                             <td>5pm</td>
                                             <td>0</td>
                                             <td>0</td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </div>
                           </div>
                           <div aria-hidden="true" id="div_dab7_14">..</div>
                           <div></div>
                        </div>
                     </div>
                     <div className="ccd-call-duration-legend ccd-legend">
                        <div className="ccd-call-duration-legend-today">
                           <div className="dot-hd">
                              <div className="dot"></div>
                           </div>
                           <div className="mblock">Today</div>
                        </div>
                        <div className="ccd-call-duration-legend-average">
                           <div className="dot-hd">
                              <div className="dot"></div>
                           </div>
                           <div className="mblock">Average (Last 7 days)</div>
                        </div>
                     </div>
                  </div>
               </div>
               <div id="ccd-call-duration-inbound">
                  <div className="ccd-widget-header">
                     <div className="mblock">Call Duration</div>
                     <div className="direction-toggle mblock">
                        <div>
                           <div className="ccd-toggle">
                              <div className="ccd-toggle-button ccd-toggle-inbound ccd-toggle-on"  >Inbound</div>
                              <div className="ccd-toggle-button ccd-toggle-outbound "  >Outbound</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="ccd-call-duration-hd">
                     <div id="ccd-call-duration-graph">
                        <div id="div_dab7_15">
                           <div dir="ltr" id="div_dab7_16">
                              <div aria-label="A chart." id="div_dab7_17">

                                 <div aria-label="A tabular representation of the data in the chart." id="div_dab7_18">
                                    <table>
                                       <thead>
                                          <tr>
                                             <th>Hour</th>
                                             <th>Today</th>
                                             <th>Average (last 7 days)</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr>
                                             <td>11am</td>
                                             <td>0</td>
                                             <td>0</td>
                                          </tr>
                                          <tr>
                                             <td>12pm</td>
                                             <td>0</td>
                                             <td>0</td>
                                          </tr>
                                          <tr>
                                             <td>1pm</td>
                                             <td>0</td>
                                             <td>0</td>
                                          </tr>
                                          <tr>
                                             <td>2pm</td>
                                             <td>0</td>
                                             <td>0</td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </div>
                           </div>
                           <div aria-hidden="true" id="div_dab7_19">..</div>
                           <div></div>
                        </div>
                     </div>
                     <div className="ccd-call-duration-legend ccd-legend">
                        <div className="ccd-call-duration-legend-today">
                           <div className="dot-hd">
                              <div className="dot"></div>
                           </div>
                           <div className="mblock">Today</div>
                        </div>
                        <div className="ccd-call-duration-legend-average">
                           <div className="dot-hd">
                              <div className="dot"></div>
                           </div>
                           <div className="mblock">Average (Last 7 days)</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="ccd-row">
            <div className="ccd-widget ccd-agent-status">
               <div>
                  <div className="ccd-widget-header">
                     <div className="mblock">
                        Agent Status
                        <a href="#agents-list">
                           <div className="ccd-agent-status-link">
                              View full agent list
                           </div>
                        </a>
                     </div>
                     <div className="ccd-widget-live mblock">Live</div>
                  </div>
                  <div className="ccd-agent-status-hd">
                     <div className="ccd-agent-status-graph-hd">
                        <div id="ccd-agent-status-graph">
                           <div id="div_dab7_20">
                              <div dir="ltr" id="div_dab7_21">
                                 <div aria-label="A chart." id="div_dab7_22">

                                    <div aria-label="A tabular representation of the data in the chart." id="div_dab7_23">
                                       <table>
                                          <thead>
                                             <tr>
                                                <th>Agent Status</th>
                                                <th>Statuses</th>
                                             </tr>
                                          </thead>
                                          <tbody>
                                             <tr>
                                                <td>Available</td>
                                                <td>0</td>
                                             </tr>
                                             <tr>
                                                <td>On a call</td>
                                                <td>0</td>
                                             </tr>
                                             <tr>
                                                <td>Wrapup</td>
                                                <td>0</td>
                                             </tr>
                                             <tr>
                                                <td>Off Duty</td>
                                                <td>0</td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                              <div aria-hidden="true" id="div_dab7_24">-._.-*^*-._.-*^*-._.-</div>
                              <div></div>
                           </div>
                        </div>
                     </div>
                     <div className="ccd-legend ccd-agent-status-legend iblock">
                        <div className="ccd-agent-status-legend-available">
                           <div className="dot-hd">
                              <div className="dot"></div>
                           </div>
                           <div className="mblock">Available (0)</div>
                        </div>
                        <div className="ccd-agent-status-legend-occupied">
                           <div className="dot-hd">
                              <div className="dot"></div>
                           </div>
                           <div className="mblock">On a call (0)</div>
                        </div>
                        <div className="ccd-agent-status-legend-wrapup">
                           <div className="dot-hd">
                              <div className="dot"></div>
                           </div>
                           <div className="mblock">Wrapup (0)</div>
                        </div>
                        <div className="ccd-agent-status-legend-unavailable">
                           <div className="dot-hd">
                              <div className="dot"></div>
                           </div>
                           <div className="mblock">Off duty (0)</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="ccd-widget ccd-live-calls">
               <div>
                  <div className="ccd-widget-header">
                     <div className="mblock">
                        Live Calls
                     </div>
                     <div className="ccd-widget-live mblock">Live</div>
                  </div>
                  <div className="ccd-live-calls-hd">
                     <div className="ccd-live-calls-graph-hd">
                        <div id="ccd-live-calls-graph">
                           <div id="div_dab7_25">
                              <div dir="ltr" id="div_dab7_26">
                                 <div aria-label="A chart." id="div_dab7_27">

                                    <div aria-label="A tabular representation of the data in the chart." id="div_dab7_28">
                                       <table>
                                          <thead>
                                             <tr>
                                                <th>Live Calls</th>
                                                <th>Statuses</th>
                                             </tr>
                                          </thead>
                                          <tbody>
                                             <tr>
                                                <td>In Progress</td>
                                                <td>0</td>
                                             </tr>
                                             <tr>
                                                <td>Queued</td>
                                                <td>0</td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                              <div aria-hidden="true" id="div_dab7_29">-._.-*^*-._.-*^*-._.-</div>
                              <div></div>
                           </div>
                        </div>
                        <div className="ccd-live-calls-total">
                           <div className="ccd-live-calls-total-number">0</div>
                           <div className="ccd-live-calls-total-text">
                              calls
                           </div>
                        </div>
                     </div>
                     <div className="ccd-legend ccd-live-calls-legend iblock">
                        <div className="ccd-live-calls-legend-inprogress">
                           <div className="dot-hd">
                              <div className="dot"></div>
                           </div>
                           <div className="mblock">In Progress (0)</div>
                        </div>
                        <div className="ccd-live-calls-legend-queued">
                           <div className="dot-hd">
                              <div className="dot"></div>
                           </div>
                           <div className="mblock">Queued (0)</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="ccd-widget ccd-service-level">
               <div>
                  <div className="ccd-widget-header">Customer Service Level</div>
                  <div className="ccd-service-level-hd">
                     <div className="ccd-service-level-graph-hd">
                        <div id="ccd-service-level-graph">
                           <div id="div_dab7_30">
                              <div dir="ltr" id="div_dab7_31">
                                 <div aria-label="A chart." id="div_dab7_32">

                                    <div aria-label="A tabular representation of the data in the chart." id="div_dab7_33">
                                       <table>
                                          <thead>
                                             <tr>
                                                <th>Service Level</th>
                                                <th>Good</th>
                                             </tr>
                                          </thead>
                                          <tbody>
                                             <tr>
                                                <td></td>
                                                <td>NaN</td>
                                             </tr>
                                             <tr>
                                                <td></td>
                                                <td>NaN</td>
                                             </tr>
                                             <tr>
                                                <td></td>
                                                <td>25</td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                              <div aria-hidden="true" id="div_dab7_34"></div>
                              <div></div>
                           </div>
                        </div>
                        <div className="ccd-service-level-stat" id="div_dab7_35">N/A</div>
                     </div>
                     <div className="ccd-service-level-none"  >
                        <div className="ccd-service-level-none-text">
                           Not enough data to calculate a customer service level. Make more calls!
                        </div>
                     </div>
                     <div className="ccd-service-level-text" id="div_dab7_36">
                        % calls answered within 60s of entering the Queue
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="ccd-row">
            <div className="ccd-widget ccd-wait-time">
               <div>
                  <div className="ccd-widget-header">Wait Time</div>
                  <div className="ccd-widget-big-stat ccd-widget-big-stat-positive ccd-wait-time-avg-seconds">
                     0s
                  </div>
                  <div className="ccd-widget-separator"></div>
                  <div className="ccd-widget-footer">
                     <div className="ccd-widget-footer-left">
                        <div className="ccd-widget-footer-duration">0s</div>
                        <div className="ccd-widget-footer-legend">shortest</div>
                     </div>
                     <div className="ccd-widget-footer-right">
                        <div className="ccd-widget-footer-duration">0s</div>
                        <div className="ccd-widget-footer-legend">Longest</div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="ccd-widget ccd-abandon-rate">
               <div>
                  <div className="ccd-widget-header">Abandon Rate</div>
                  <div className="ccd-widget-big-stat ccd-widget-big-stat-positive ccd-abandon-rate-percent">
                     0%
                  </div>
                  <div className="ccd-widget-separator"></div>
                  <div className="ccd-widget-footer">
                     <div className="ccd-widget-footer-left">
                        <div className="ccd-widget-footer-duration">0s</div>
                        <div className="ccd-widget-footer-legend">shortest</div>
                     </div>
                     <div className="ccd-widget-footer-center">
                        <div className="ccd-widget-footer-duration">0s</div>
                        <div className="ccd-widget-footer-legend">avg</div>
                     </div>
                     <div className="ccd-widget-footer-right">
                        <div className="ccd-widget-footer-duration">0s</div>
                        <div className="ccd-widget-footer-legend">Longest</div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="ccd-widget ccd-agents-to-callers">
               <div>
                  <div className="ccd-widget-header">
                     <div className="mblock">Agents:Callers</div>
                     <div className="ccd-widget-live mblock">Live</div>
                  </div>
                  <div className="ccd-widget-big-stat ccd-widget-big-stat-positive ccd-agents-to-callers">
                     0:0
                  </div>
                  <div className="ccd-widget-separator"></div>
                  <div className="ccd-widget-footer">
                     <div className="ccd-widget-footer-center">
                        <div className="ccd-widget-footer-duration">0</div>
                        <div className="ccd-widget-footer-legend">Queue Length</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="ccd-row">
            <div className="ccd-widget ccd-agents">
               <div>
                  <div className="ccd-widget-header">
                     <div className="mblock ccd-header-title" id="div_dab7_37">
                        <a id="agents-list-header">Agents</a>
                     </div>
                  </div>
                  <div className="ccd-widget-separator"></div>
                  <div>
                     <div id="list-empty" >
                        There are no call center agents on this Call Center
                     </div>
                     <table id="agents-list" className="user-table uppercase ccd-agents-table" >
                        <thead>
                           <tr>
                              <th className="ccd-ar-stat-data">
                                 <div className="mblock">Agent</div>
                                 <div className="stats-sort mblock web-icon-xs web-icon-xs-updown
                                    stats-order-" data-sort="name"></div>
                              </th>
                              <th colSpan="2" className="ccd-ar-stat-data">
                                 <div className="mblock">Status</div>
                                 <div className="stats-sort mblock web-icon-xs web-icon-xs-updown
                                    stats-order-" data-sort="status"></div>
                              </th>
                              <th className="ccd-ar-stat-data">
                                 <div className="mblock">Calls Taken</div>
                                 <div className="stats-sort mblock web-icon-xs web-icon-xs-updown
                                    stats-order-" data-sort="callsTaken">
                                 </div>
                              </th>
                              <th className="ccd-ar-stat-data">
                                 <div className="mblock">Minutes</div>
                                 <div className="stats-sort mblock web-icon-xs web-icon-xs-updown
                                    stats-order-" data-sort="minutes"></div>
                              </th>
                              <th className="ccd-ar-stat-data">
                                 <div className="mblock">Avg. Call Time</div>
                                 <div className="stats-sort mblock web-icon-xs web-icon-xs-updown
                                    stats-order-" data-sort="avgCallTime">
                                 </div>
                              </th>
                              <th className="ccd-ar-stat-data">
                                 <div className="mblock">Messages</div>
                                 <div className="stats-sort mblock web-icon-xs web-icon-xs-updown
                                    stats-order-" data-sort="messages"></div>
                              </th>
                              <th className="ccd-ar-stat-data">
                                 <div className="mblock">Missed Calls</div>
                                 <div className="stats-sort mblock web-icon-xs web-icon-xs-updown
                                    stats-order-" data-sort="missedCalls">
                                 </div>
                              </th>
                              <th className="ccd-ar-stat-data">
                                 <div className="mblock">Wrapup Time</div>
                                 <div className="stats-sort mblock web-icon-xs web-icon-xs-updown
                                    stats-order-" data-sort="wrapupTime">
                                 </div>
                              </th>
                              <th className="ccd-ar-stat-data">
                                 <div className="mblock">Idle Time</div>
                                 <div className="stats-sort mblock web-icon-xs web-icon-xs-updown
                                    stats-order-" data-sort="idleTime"></div>
                              </th>
                           </tr>
                        </thead>
                        <tbody className="list-container">
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="ccd-refresh" id="div_dab7_38">refresh</div>
      <div className="stats-loading-overlay stats-ccd-loading" id="div_dab7_39">
         <div className="stats-loading">
            <div className="stats-loading-graphic"></div>
            <div className="stats-loading-text">Crunching numbers...</div>
         </div>
      </div>
   </div>
</div>);
};

export default CallGraphContentComponent;
