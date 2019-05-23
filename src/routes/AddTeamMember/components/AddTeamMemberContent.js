import React from 'react';
import PropTypes from 'prop-types'
import './AddTeamMember.scss';

const AccountMarkupContent = () => {
  return <div id="add-team-members-view">
    <div id="add-users-form" className="center form" >
        <div className="center form-block-hd header-2">Add Team Members</div>

        <div className="body-copy-1 dialog-sec-desc" id="div_1ef3_0">
            Search by name or email to add new team members to the office.

            <div id="add-users-apps-admin-link"></div>

        </div>

        <div id="remaining-user-licenses">
            <div>
                <div>

                    <div>

                        <div className="iblock" id="div_1ef3_1">

                            0 Talk Licenses Available

                        </div>

                    </div>

                    <div id="contact-reseller" >
                        <div>
                            <div></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div id="add-users-suggest-view">
            <div className="add-users-suggest">
                <div className="auto-suggest">

                    <input type="text" placeholder="Search by name or email" autoComplete="off"/>

                    <div className="spinner hide"></div>
                    <div className="helper-text body-copy-4 hide">HIT 'ENTER'</div>
                    <ul id="add-users-suggest" className="hide">
                    </ul>
                    <div className="error-container" id="div_1ef3_2">
                        <div className="mblock web-icon-s web-icon-s-exclamation"></div>
                        <div className="mblock error-msg"></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="did-search-options-view">
            <div>
                <div id="number-search-options-menu-wrapper">
                    <div className="body-copy-2" id="div_1ef3_3">
                        Assigning phone number from:<span id="selected-area-code">289</span>

                        <div className="mblock rfloat">

                        </div>
                        <div id="search-options-menu" className="wlink rfloat">

                            Hide options

                        </div>

                    </div>
                </div>
                <div id="search-options" className="">
                    <div id="search-options-content" className="form">

                        <div id="new-pool-radio" className="radio-sec simple-trans mblock">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div id="new-pool" className="mblock">
                                                <div className="radio checked">
                                                    <div className="snappy"></div>
                                                    <input id="new-pool-inp" name="did_pool" type="radio"    defaultChecked="true"/>
                                                </div>
                                            </div>
                                            <label htmlFor="new-pool-inp" className="radio-label selected">New number</label>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div id="area-code-input-wrapper">
                        <input id="area-code-for-search" type="text" placeholder="Assign numbers by area code" defaultValue="289" maxLength="3"/>
                        <div id="invalid-area-code" className="hide red-copy-1" >Area code must be digits</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="add-team-members-pending-view" className="center">
        <div className="list-container">
            <table className="user-table" id="table_1ef3_0">
                <thead>
                    <tr>
                        <th className="atmp-name">Name</th>

                        <th className="atmp-assigned-number">Assigned number</th>
                        <th className="atmp-last-used-for">Description</th>

                        <th></th>
                    </tr>
                </thead>
                <tbody id="pending-users-list">
                    <tr>
                        <td className="atmp-name">
                            <div className="atmp-display" title="thejobemuhammed@gmail.com">
                                thejobemuhammed@gmail.com
                            </div>
                        </td>

                        <td className="atmp-assigned-number">
                            <div className="atmp-display">

                                <div data-toggle="modal" data-target="#exampleModal" className="wlink rfloat edit-number">
                                    Edit
                                </div>

                                (289) 804-0874

                            </div>
                        </td>
                        <td className="atmp-last-used-for">
                            <div className="atmp-display">

                                New number

                            </div>
                        </td>

                        <td>

                            <div className="web-icon-xs web-icon-xs-x wlink rfloat remove-user" id="div_1ef3_4"></div>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div id="add-team-member-buttons" className="center dialog-buttons">
        <div id="pending-users-count" className="body-copy-1">
            <div>
                <div className="">

                    Adding 1 new team member

                </div>
            </div>
        </div>
        <div id="cancel" className="iblock secondary-button uppercase">Cancel</div>
        <div id="add" className="iblock master-button button-left uppercase">Add</div>
    </div>
</div>
        ;

};

export default AccountMarkupContent;
