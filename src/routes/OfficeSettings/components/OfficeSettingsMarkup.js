import React from 'react';
import './OfficeSettingsMarkup.scss';
import DashboardSideHeader from '../../../components/shared/DashboardSideHeader';
import DashboardMiddleHeader from '../../../components/shared/DashboardMiddleHeader';

const OfficeSettingsMarkup = () => {
  return (<div className="dashboard-main-css">
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

                    <div>
                        <div className="form form-main">
                            <div className="form-block-hd header-2">
                                Office Info
                            </div>
                            <div className="form-block" id="div_0f21_0">
                                <div className="form-block-sec">
                                    <div className="iblock">
                                        <label>Office Name</label>
                                        <div>
                                            <input name="name" id="group-name" type="text" placeholder="Name" defaultValue="Easytel" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="office-admins">
                                <div>
                                    <div className="form-block-hd header-2">Office Administrators</div>

                                    <div className="form-block">
                                        <div className="body-copy-2" id="div_0f21_1">

                                            Office administrators are able to access all the settings within this office.

                                        </div>

                                        <div id="administrators-suggest">
                                            <div className="administrator-suggest">
                                                <div className="auto-suggest">
                                                    <input type="text" placeholder="+ Add people from your team" autoComplete="off" className="administrator-suggest-input" />
                                                    <div className="spinner hide"></div>
                                                    <ul className="administrator-suggest-list hide">
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="administrators-count" className="header-5-c1">
                                            <div>
                                                2 office administrators
                                            </div>
                                        </div>
                                        <div id="administrators-list-view">
                                            <div className="list-container">
                                                <table id="administrators-table" className="user-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>

                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="administrators-list">
                                                        <tr className="item">
                                                            <td>
                                                                <div className="body-copy-32">Waqas Mukhtar (you)</div>
                                                            </td>

                                                            <td className="company-settings-options">
                                                                <div className="account-action">
                                                                    <div className="select-menu-view">
                                                                        <div className="select-menu snappy  closed row-options-select-menu">
                                                                            <div className="sm-input-shim" tabIndex="0">

                                                                                <input type="text" defaultValue="Options" className="snappy sm-input sm-item-value- unselected " tabIndex="-1" />
                                                                            </div>
                                                                            <div id="nav" className="sm-menu">
                                                                                <div></div>
                                                                                <ul className="sm-list">

                                                                                    <li className="sm-item" id="sm-item--remove" data-value="remove">

                                                                                        <a className="sm-text sm-item-value-remove " href="javascript:void(0)" title="Remove">

           Remove
         </a>
                                                                                    </li>

                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="item odd">
                                                            <td>
                                                                <div className="body-copy-32">Waqas Mukhtar</div>
                                                            </td>

                                                            <td className="company-settings-options">
                                                                <div className="account-action">
                                                                    <div className="select-menu-view">
                                                                        <div className="select-menu snappy  closed row-options-select-menu">
                                                                            <div className="sm-input-shim" tabIndex="0">

                                                                                <input type="text" defaultValue="Options" className="snappy sm-input sm-item-value- unselected " tabIndex="-1" />
                                                                            </div>
                                                                            <div id="nav2" className="sm-menu">
                                                                                <div></div>
                                                                                <ul className="sm-list">

                                                                                    <li className="sm-item" id="sm-item--remove" data-value="remove">

                                                                                        <a className="sm-text sm-item-value-remove " href="javascript:void(0)" title="Remove">

           Remove
         </a>
                                                                                    </li>

                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="table-loading"></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div id="office-wide-settings">
                                <div>
                                    <div className="form-block-hd form-block-hd-with-border header-2">Office-wide settings</div>

                                    <div className="body-copy-2">
                                        The settings below will be applied to every person in this office.
                                    </div>

                                    <div className="form-block-third">

                                        <div className="uppercase body-copy-32">
                                            <div className="mblock">VoiceAI</div>
                                            <div className="mblock vai-tag" id="div_0f21_2">New!</div>
                                        </div>
                                        <div className="checkbox-row">
                                            <div id="allow-voiceai-setting" className="mblock">
                                                <div className="radio square mblock checked">
                                                    <div className="snappy"></div>
                                                    <input id="allow-voiceai-setting" name="allow_voiceai_setting" type="checkbox" defaultValue="" />
                                                </div>
                                            </div>
                                            <div className="mblock body-copy-22 checkbox-copy">
                                                Allow team members, departments, and call centers to enable VoiceAI
                                            </div>
                                        </div>

                                        <div className="uppercase body-copy-32">Making Calls</div>
                                        <div className="checkbox-row">
                                            <div id="call-recording-setting" className="mblock">
                                                <div className="radio square mblock checked">
                                                    <div className="snappy"></div>
                                                    <input id="call-recording-setting" name="call_recording_setting" type="checkbox" defaultValue="" />
                                                </div>
                                            </div>
                                            <div className="mblock body-copy-22 checkbox-copy">
                                                Allow team members to record their calls
                                            </div>
                                        </div>
                                        <div className="checkbox-row">
                                            <div id="play-call-recording-message" className="mblock">
                                                <div className="radio square mblock checked">
                                                    <div className="snappy"></div>
                                                    <input id="play-call-recording-message" name="play-call-recording-message" type="checkbox" defaultValue="" />
                                                </div>
                                            </div>
                                            <div className="mblock body-copy-22 checkbox-copy">
                                                Notify caller that the call is being recorded by the Dialpad user
                                            </div>
                                        </div>

                                        <div className="checkbox-row">
                                            <div id="external-transfer-enabled" className="mblock">
                                                <div className="radio square mblock checked">
                                                    <div className="snappy"></div>
                                                    <input id="external-transfer-enabled" name="external_transfer_enabled" type="checkbox" defaultValue="" />
                                                </div>
                                            </div>
                                            <div className="mblock body-copy-22 checkbox-copy">
                                                Allow team members to transfer calls outside of the company
                                            </div>
                                        </div>
                                        <div className="checkbox-row">
                                            <div id="international-transfer-enabled" className="mblock">
                                                <div className="radio square mblock">
                                                    <div className="snappy"></div>
                                                    <input id="international-transfer-enabled" name="international_transfer_enabled" type="checkbox" defaultValue="" />
                                                </div>
                                            </div>
                                            <div className="mblock body-copy-22 checkbox-copy">
                                                Allow transfers to international numbers
                                            </div>
                                        </div>

                                        <div className="uppercase body-copy-32" id="div_0f21_3">Caller ID</div>

                                        <div className="checkbox-row">
                                            <div id="set-caller-id" className="mblock">
                                                <div className="radio square mblock checked">
                                                    <div className="snappy"></div>
                                                    <input id="set-caller-id" name="set-caller-id" type="checkbox" defaultValue="" />
                                                </div>
                                            </div>
                                            <div className="mblock body-copy-22 checkbox-copy">
                                                Allow team members to use the office number as caller ID
                                            </div>
                                        </div>

                                        <div className="checkbox-row">
                                            <div id="block-caller-id" className="mblock">
                                                <div className="radio square mblock checked">
                                                    <div className="snappy"></div>
                                                    <input id="block-caller-id" name="block-caller-id" type="checkbox" defaultValue="" />
                                                </div>
                                            </div>
                                            <div className="mblock body-copy-22 checkbox-copy">
                                                Allow team members to hide their caller ID. Calls from them will appear as "unknown".
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-block-third">

                                    </div>

                                    <div className="form-block-third">
                                        <div className="uppercase body-copy-32">Desk Phones</div>
                                        <div className="checkbox-row">
                                            <div id="provision-deskphones-setting" className="mblock">
                                                <div className="radio square mblock checked">
                                                    <div className="snappy"></div>
                                                    <input id="provision-deskphones-setting" name="provision-deskphones-setting" type="checkbox" defaultValue="" />
                                                </div>
                                            </div>
                                            <div className="mblock body-copy-22 checkbox-copy">
                                                Allow team members to self-provision deskphones
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div id="recurring-events"></div>
                            <div id="assistant-forwarding-admin">
                                <div>
                                    <div className="form-block-hd form-block-hd-with-border header-2">Executive-Assistant</div>
                                    <div className="form form-block">
                                        <div className="body-copy-2 form-block-desc">
                                            Assistants take incoming calls for others. When enabled, any incoming calls to the designated 'executive' will also ring the 'assistant'. <a href="https://help.dialpad.com/hc/en-us/articles/210472363" className="wlink">Learn more</a>.
                                        </div>

                                        <div className="assistant-forwarding-admin-list">
                                            <div>
                                                <table className="assistant-forwarding-admin-table">
                                                    <thead id="thead_0f21_0">
                                                        <tr>
                                                            <th className="assistant-forwarding-admin-table-executive">
                                                                Executive
                                                            </th>
                                                            <th className="assistant-forwarding-admin-table-arrow">
                                                            </th>
                                                            <th className="assistant-forwarding-admin-table-assistant">
                                                                Assistant
                                                            </th>
                                                            <th className="assistant-forwarding-admin-table-confirm">
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="assistant-forwarding-admin-request-list">
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <table className="assistant-forwarding-admin-add-request assistant-forwarding-admin-table">
                                        </table>

                                        <div className="add-assistant-pair mblock icon-text">
                                            <div className="web-icon web-icon-s web-icon-s-plus mblock"></div>
                                            <div className="wlink iblock">
                                                Add a new executive-assistant pair
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div id="failover-settings"></div>
                            <div id="admin-office-e911-address">

                                <div className="form-block-hd header-2 form-block-hd-with-border">
                                    Registered Location for 911 Emergency Calls
                                </div>
                                <div className="form form-block">
                                    <div className="body-copy-2 form-block-desc">
                                        This is the default address for all team members created under this office
                                    </div>
                                    <div id="user-e911-address">
                                        <div>
                                            <input type="text" disabled="" defaultValue="37 MOSSGROVE CRES, BRAMPTON, ON, L7A3W4" className="e911-address-display" />
                                            <div className="edit-e911-address-link wlink mblock" id="div_0f21_4">Edit</div>
                                            <div id="e911-notifications-container"></div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div id="cc-custom-statuses">
                                <div>
                                    <div className="form-block-hd header-2 form-block-hd-with-border">Call Center Off Duty Statuses</div>

                                    <div className="form-block">
                                        <div className="body-copy-2">
                                            Allow agents to choose from a list of Off Duty statuses, for example: Lunch, Break, etc.
                                        </div>
                                        <div className="cc-custom-statuses-list-view">
                                            <div className="list-container">
                                                <table id="cc-custom-statuses-table" className="user-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="cc-custom-statuses-list">
                                                        <tr className="item">
                                                            <td>
                                                                <div className="body-copy-32">Off Duty</div>
                                                            </td>
                                                            <td className="cc-custom-status-options">

                                                                <div className="row-options-default body-copy-22-italic">Default</div>

                                                            </td>
                                                        </tr>
                                                        <tr className="item odd">
                                                            <td>
                                                                <div className="body-copy-32">Test</div>
                                                            </td>
                                                            <td className="cc-custom-status-options">

                                                                <div className="account-action">
                                                                    <div className="select-menu-view">
                                                                        <div className="select-menu snappy  closed row-options-select-menu">
                                                                            <div className="sm-input-shim" tabIndex="0">

                                                                                <input type="text" defaultValue="Options" className="snappy sm-input sm-item-value- unselected " tabIndex="-1" />
                                                                            </div>
                                                                            <div className="sm-menu">
                                                                                <div></div>
                                                                                <ul className="sm-list">

                                                                                    <li className="sm-item" id="sm-item--edit" data-value="edit">

                                                                                        <a className="sm-text sm-item-value-edit " href="javascript:void(0)" title="Edit">

             Edit
           </a>
                                                                                    </li>

                                                                                    <li className="sm-item" id="sm-item--remove" data-value="remove">

                                                                                        <a className="sm-text sm-item-value-remove " href="javascript:void(0)" title="Delete">

             Delete
           </a>
                                                                                    </li>

                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                        <div className="form-list-add">
                                            <div className="mblock icon-text add-custom-status-link">
                                                <div className="web-icon web-icon-s web-icon-s-plus mblock"></div>
                                                <div className="wlink iblock" data-toggle="modal" data-target="#modal1">Create New Status</div>
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
        <div className="custom-left">
            <DashboardSideHeader/>
        </div>
        <div className="custom-middle">
            <DashboardMiddleHeader/>
        </div>
    </div>
</div>);
};

export default OfficeSettingsMarkup;
