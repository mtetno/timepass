import React from 'react';
import './GroupsMarkup.scss';
import DashboardSideHeader from '../../../components/shared/DashboardSideHeader';
import DashboardMiddleHeader from '../../../components/shared/DashboardMiddleHeader';
import AdvanceSettingsComponent from './AdvanceSettingsComponent';
import BusinessHoursComponent from './BusinessHoursComponent';
import AssignedOperatorComponent from './AssignedOperatorComponent';



const GroupsContentComponent = () => {
  return (<div>
    <div id="header-for-operator">
        <div>
            <div id="operator-devices-block" >
                <div className="form-block-hd header-2">

                    Hello iOS Support operator!

                </div>
                <div className="form-block-sec">
                    <div className="iblock">
                        <div className="body-copy-2 form-block-desc iblock" id="div_959e_0">

                            You're an operator for this department. When calls and messages come to this department, select which devices you'd like to receive them to.

                        </div>
                        <div>
                            <div id="voicemail-notification-group" className="mblock">
                                <div className="radio square mblock checked" id="div_959e_1">
                                    <div className="snappy"></div>
                                    <input id="input-voicemail-notification-group" name="voicemail-notification" type="checkbox"  defaultValue="w.mukhtar@live.ca"/>
                                </div>
                            </div>

                            Receive email notifications for voicemails to this department.

                        </div>
                        <div>

                            <div id="fax-notification-group" className="mblock">
                                <div className="radio square mblock checked" id="div_959e_2">
                                    <div className="snappy"></div>
                                    <input id="input-fax-notification-group" name="fax-notification" type="checkbox"  defaultValue="w.mukhtar@live.ca"/>
                                </div>
                            </div>

                            Receive email notifications for faxes to this department.

                        </div>

                    </div>
                    <div className="body-copy-2 form-block-desc iblock">
                        <div id="operator-devices-switch" className="iblock" >
                            <div className="toggle-switch checked">
                                <div className="iblock toggle-container snappy">
                                    <div className="toggle-arc toggle-background"></div>
                                    <div className="toggle-rectangle toggle-background"></div>
                                    <div className="toggle-arc toggle-arc-right toggle-background"></div>
                                    <div className="toggle-slider snappy"></div>
                                    <div className="toggle-text" id="div_959e_3">On</div>
                                </div>
                            </div>
                        </div>
                        <div id="operator-devices-switch-desc" className="iblock body-copy-1" >
                            Your Status:
                            <span className="operator-devices-switch-content hide red-copy-1 uppercase">Do not disturb</span>
                            <span className="operator-devices-switch-content header-6-c4 uppercase ">active</span>
                            <br/>
                            <div id="operator-devices-switch-text" className="xsmall-txt" >
                                <span className="operator-devices-switch-content hide">

                  Your notifications will be silenced for calls to this department. Other operators will continue to receive them.

            </span>
                                <span className="operator-devices-switch-content ">

                  You'll be notified about any new calls to this department.

            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <form id="group-settings-form" className="form form-main">
        <div className="form-block-hd header-2">

            Department Info
            <div className="web-icon web-icon-xs web-icon-xs-info mblock" id="department-info"></div>

        </div>
        <div id="group-info" className="form-block" >
            <div className="form-block-sec">
                <div className="iblock">
                    <label>Name</label>
                    <div>
                        <input name="name" id="group-name" type="text" placeholder="Name" defaultValue="iOS Support"/>
                    </div>
                </div>
                <div className="iblock">
                    <label>Abbreviation <span className="abbreviation-help link" id="span_959e_0">?<div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Abbreviations are used for the<br/> department tab in the<br/> desktop and mobile apps.</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></span></label>
                    <div>
                        <input name="abbreviation" id="group-abbr" type="text" placeholder="ABBR" defaultValue="" />
                    </div>
                </div>


                <div className="iblock icon-text"  id="group-delete">
                    <div className="web-icon web-icon-xs web-icon-xs-delete mblock"></div>
                    <div className="wlink inline" >Delete dept.</div>
                </div>

            </div>

            <div id="dids-view">
                <div className="list-container">
                    <div id="dialog-header"></div>
                    <div>
                        <table className="user-table ">

                            <thead>
                                <tr>
                                    <th>Phone number(s)</th>
                                    <th>Label</th>
                                    <th>&nbsp;</th>
                                    <th>&nbsp;</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>

                            <tbody id="numbers-list">

                            </tbody>
                        </table>

                        <div className="form-list-add">
                            <div id="add-number" className="mblock icon-text add-number-link">
                                <div className="web-icon web-icon-s web-icon-s-plus mblock"></div>
                                <div className="wlink iblock" data-toggle="modal" data-target="#exampleModal1">Add a number</div>
                            </div>

                            <div id="add-fax" className="mblock icon-text add-fax-link" >
                                <div className="web-icon web-icon-s web-icon-s-plus mblock"></div>
                                <div className="wlink iblock" data-toggle="modal" data-target="#exampleModal2">Add a fax number</div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    </form>

    <AssignedOperatorComponent/>

    <div id="call-handling-view" className="form"></div>

    <BusinessHoursComponent/>

    <div id="department-integration-settings" className="form"></div>

    <AdvanceSettingsComponent/>
</div>);

};

export default GroupsContentComponent;
